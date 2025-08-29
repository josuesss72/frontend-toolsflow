import NavPanel from "./components/Nav/NavPanel";

export default function PanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="grid grid-cols-[0.25fr_1fr] h-screen w-full">
			<NavPanel />
			{children}
		</div>
	);
}
