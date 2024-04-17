import './style.scss'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { userDatas } from '../../utils/DataModeling'

const data = userDatas.performance.sessions

function Intensity() {
  return (
    <div className="intensity-session">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          data={data}
        >
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[0, 10, 20, 45, 65]}
          />
          <PolarAngleAxis
            fontSize={12}
            tickLine={false}
            stroke="#FFFFFF"
            dataKey="kind"
          />
          <Radar dataKey="value" fill="rgba(255, 1, 1)" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Intensity
