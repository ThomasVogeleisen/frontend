import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './style.scss'

function Activite({ curentDatas }) {
  const sessions = curentDatas.activity.sessions

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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            scale="point"
            padding={{ left: 10, right: 10 }}
            tickLine={false}
            tickMargin={15}
            dataKey="day"
          />
          <YAxis
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

          <Tooltip content={<CustomTooltip />} />

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

export default Activite
