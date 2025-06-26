import Header from "../components/header/Header";

export default function SalesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<Header />
			{children}
		</div>
	);
}
