import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useParams } from 'react-router-dom'

import './style.scss'
import { selectApiOrMock } from '../../utils/selectApiOrMock'

function Activite() {
  const { id } = useParams()
  const userDatas = selectApiOrMock(id)
  const sessions = userDatas.activity.sessions

  return (
    <div className="chartContainer">
      <BarChart
        width={700}
        height={300}
        data={sessions}
        barSize={7}
        barGap={8}
        margin={{ bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis tickLine={false} tickMargin={15} dataKey="day" />
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

        <Tooltip />

        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#E282D30"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default Activite
