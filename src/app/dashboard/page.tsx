import { Toaster } from "sonner";
import Board from "./components/board/Board";

export default async function DashboardPage() {
	return (
		<main className="page">
			<Toaster />
			<Board />
		</main>
	);
}
