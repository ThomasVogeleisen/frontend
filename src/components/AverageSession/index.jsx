import './style.scss'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const renderTooltip = ({ payload }) => {
  if (!payload || payload.length === 0) return null
  return <div className="tooltip">{payload[0].value} min</div>
}

const HoverTooltip = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  )
}

function AverageSession({ curentDatas }) {
  const data = curentDatas.average_sessions.sessions
  return (
    <article className="average-session-container">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 50, right: -15, left: -12, bottom: 16 }}
        >
          <text
            x={29}
            y={60}
            dy={-20}
            style={{
              fontSize: '15px',
              fontWeight: '500',
              fill: '#FFF',
              opacity: 0.504,
            }}
          >
            Durée moyenne des
            <tspan x={29} dy={20}>
              sessions
            </tspan>
          </text>
          <defs>
            <linearGradient id="colorLength" x1="0" y1="1" x2="1" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            fontSize={12}
            padding={{ left: 15, right: 15 }}
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
            style={{ transform: 'scaleX(0.87) translate(20px)' }}
          />
          <Tooltip cursor={<HoverTooltip />} content={renderTooltip} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            stroke="url(#colorLength)"
            strokeWidth={2}
            activeDot={{
              background: '#FFFFFF',
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 10,
              r: 4,
            }}
            style={{ transform: 'scaleX(1.02) translate(-4px)' }}
          />
          0
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

AverageSession.propTypes = {
  curentDatas: PropTypes.shape({
    average_sessions: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          sessionLength: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default AverageSession
