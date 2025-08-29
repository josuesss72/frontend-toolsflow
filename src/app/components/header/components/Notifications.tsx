import React from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";

const Notifications = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="border-gray-700 cursor-pointer">
					<Bell className="h-5 w-5 text-blue-500 cursor-pointer" />
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-black border-gray-700">
				<SheetHeader>
					<SheetTitle>Notificaciones</SheetTitle>
					<SheetDescription>Revisa tus notificaciones</SheetDescription>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-6 px-4"></div>
				<SheetFooter>
					<SheetClose asChild>
						<Button
							variant="outline"
							className="border-gray-700 cursor-pointer"
						>
							Close
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Notifications;
