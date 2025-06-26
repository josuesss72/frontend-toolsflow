"use client";
import {
	LineChart,
	Line,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	XAxis,
} from "recharts";

const data = [
	{
		age: 25,
		sale: 30000,
		month: 1,
	},
	{
		age: 25,
		sale: 40000,
		month: 2,
	},
	{
		age: 25,
		sale: 47000,
		month: 3,
	},
	{
		age: 25,
		sale: 20000,
		month: 4,
	},
];

const Chart = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart width={500} height={300} data={data}>
				<YAxis className="text-xs" />
				<XAxis dataKey="month" />
				<Tooltip />
				<Line type="monotone" dataKey="sale" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
