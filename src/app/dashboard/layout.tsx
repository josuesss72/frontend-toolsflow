import { AppProvider } from "../common/AppProvider";
import Header from "../components/header/Header";
import Nav from "./components/nav/Nav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppProvider>
			<div className="flex">
				<Header />
				<Nav />
				{children}
			</div>
		</AppProvider>
	);
}
