import './style.scss'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { userDatas } from '../../utils/DataModeling'

const data = userDatas.average_sessions.sessions

const renderTooltip = ({ payload }) => {
  if (!payload || payload.length === 0) return null
  return <div className="tooltip">{payload[0].value} min</div>
}

function AverageSession() {
  return (
    <div className="average-session-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <defs>
            <linearGradient id="colorLength" x1="0" y1="1" x2="1" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            fontSize={12}
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip cursor={false} content={renderTooltip} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            stroke="url(#colorLength)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSession
