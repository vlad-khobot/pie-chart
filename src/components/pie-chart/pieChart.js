import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json'

function getMaxValue() {
  return Math.max.apply(null, Object.values(data.map(obj => obj.value)));
}

export default function CustomPieChart() {
    const maxValue = getMaxValue()
    return <>
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" fill="fill" cx="50%" cy="50%" innerRadius={50} outerRadius={80} />   
            <Tooltip />
        </PieChart>
        <span>{maxValue}</span>
    </>
}
