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
            <circle cx="125" cy="125" r="75" fill="#FFFFFF" />
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
          <g>
            <text
              x={125}
              y={125}
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              <tspan
                fill="#282D30"
                fontWeight="700"
                fontSize={26}
                x={127}
                dy={-5}
              >{`${data[0].value}%`}</tspan>
              <tspan
                fill="#74798C"
                fontSize={16}
                fontWeight="700"
                x={125}
                dy={25}
              >
                de votre
              </tspan>
              <tspan
                fill="#74798C"
                fontSize={16}
                fontWeight="700"
                x={125}
                dy={25}
              >
                objectif
              </tspan>
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
