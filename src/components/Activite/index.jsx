import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import './style.scss'
function Activite({ curentDatas }) {
  const sessions = curentDatas.activity.sessions

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}kg</p>
          <p className="label">{payload[1].value}Kcal</p>
        </div>
      )
    }

    return null
  }

  return (
    <article className="chartContainer">
      <ResponsiveContainer>
        <BarChart
          width={700}
          height={300}
          data={sessions}
          barSize={7}
          barGap={8}
        >
          <text
            x={0}
            y={40}
            dy={-20}
            style={{
              fontSize: '15px',
              fontWeight: '600',
              fill: '#20253A',
            }}
          >
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            padding={{ left: -47, right: -47 }}
            tick={{ fill: '#9b9eac' }}
            stroke="#DEDEDE"
            tickLine={false}
            tickMargin={15}
            dataKey="day"
          />
          <YAxis
            tick={{ fill: '#9b9eac' }}
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            domain={['dataMin - 2', 'dataMax + 3']}
            tickMargin={35}
          />

          <YAxis yAxisId="calories" hide={true} />

          <Tooltip
            position={{ y: 80 }}
            cursor={{
              fill: '#C4C4C4',
              fillOpacity: '0.4',
            }}
            content={<CustomTooltip />}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={110}
            formatter={(value) => (
              <span
                style={{
                  color: '#74798C',
                  marginLeft: '8px',
                  marginRight:
                    value === 'Calories brûlées (kCal)' ? '0px' : '32px',
                  fontSize: '14px',
                }}
              >
                {value}
              </span>
            )}
            payload={[
              { value: 'Poids (kg)', type: 'circle', color: '#E282D30' },
              {
                value: 'Calories brûlées (kCal)',
                type: 'circle',
                color: '#E60000',
              },
            ]}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#E282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

Activite.propTypes = {
  curentDatas: PropTypes.shape({
    activity: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number.isRequired,
          kilogram: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Activite
