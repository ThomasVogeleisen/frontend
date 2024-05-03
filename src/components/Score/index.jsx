import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import './style.scss'

function Score({ curentDatas }) {
  const data = [
    {
      name: 'score',
      value: curentDatas.score,
      fill: '#FF0000',
    },
  ]
  return (
    <div className="score-container">
      <div className="scoreText">
        <p className="scoreText__value">{`${data[0].value}%`}</p>
        <p className="scoreText__text">
          de votre <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          width={250}
          height={250}
          startAngle={220}
          endAngle={-220}
          innerRadius="65%"
          outerRadius="75%"
          data={data}
        >
          <g>
            <circle cx="50%" cy="50%" r="30%" fill="#FFFFFF" />
          </g>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={20} />
          <g>
            <text
              x={20}
              y={20}
              textAnchor="start"
              alignmentBaseline="hanging"
              fill="#20253A"
              fontSize={15}
              fontWeight="700"
            >
              Score
            </text>
          </g>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

Score.propTypes = {
  curentDatas: PropTypes.shape({
    score: PropTypes.number.isRequired,
  }).isRequired,
}

export default Score
