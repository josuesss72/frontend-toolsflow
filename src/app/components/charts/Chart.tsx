"use client";
import {
	BarChart,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	Bar,
} from "recharts";

const data = [
	{
		age: 25,
		sale: 30000,
		month: "Enero",
	},
	{
		age: 25,
		sale: 40000,
		month: "Febrero",
	},
	{
		age: 25,
		sale: 47000,
		month: "Marzo",
	},
	{
		age: 25,
		sale: 20000,
		month: "Abril",
	},
	{
		age: 25,
		sale: 20000,
		month: "Mayo",
	},
	{
		age: 25,
		sale: 20000,
		month: "Junio",
	},
	{
		age: 25,
		sale: 20000,
		month: "Julio",
	},
	{
		age: 25,
		sale: 20000,
		month: "Agosto",
	},
	{
		age: 25,
		sale: 20000,
		month: "Septiembre",
	},
	{
		age: 25,
		sale: 20000,
		month: "Octubre",
	},
	{
		age: 25,
		sale: 20000,
		month: "Noviembre",
	},
	{
		age: 25,
		sale: 20000,
		month: "Diciembre",
	},
];

const Chart = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart width={500} height={300} data={data}>
				<YAxis className="text-xs" />
				<XAxis dataKey="month" />
				<Tooltip />
				<Bar dataKey="sale" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
