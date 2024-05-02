import PropTypes from 'prop-types'
import './style.scss'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function Intensity({ curentDatas }) {
  const data = curentDatas.performance.sessions
  return (
    <article className="intensity-session">
      <ResponsiveContainer>
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
            tick={{ dy: 4 }}
          />
          <Radar dataKey="value" fill="rgba(255, 1, 1)" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

Intensity.propTypes = {
  curentDatas: PropTypes.shape({
    performance: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          kind: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Intensity
