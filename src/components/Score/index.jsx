import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'
import './style.scss'
import { userDatas } from '../../utils/DataModeling'

const data = [
  {
    name: 'score',
    value: userDatas.score,
    fill: '#FF0000',
  },
]

function Score() {
  // console.log(datas[0].value)
  return (
    <div className="score-container">
      <RadialBarChart
        width={250}
        height={250}
        startAngle={220}
        endAngle={-220}
        innerRadius="65%"
        outerRadius="75%"
        data={data}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar background dataKey="value" cornerRadius={20} />
        <g>
          <text
            x={10}
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
          <text x={125} y={125} textAnchor="middle" alignmentBaseline="middle">
            <tspan
              fill="#282D30"
              fontWeight="700"
              fontSize={26}
              x={125}
              dy={0}
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
    </div>
  )
}

export default Score
