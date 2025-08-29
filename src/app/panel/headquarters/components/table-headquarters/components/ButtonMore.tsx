"use client";
import React, { useEffect } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import {
	AlertDialogFooter,
	AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Check, X } from "lucide-react";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { UpdateHeadquartersUseCase } from "@/application/use-cases/headquarters/update-headquarters.usecase";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Headquarters } from "@/domain/entities/headquarters/headquarters.entity";

const headquartersRepository = new HeadquartersRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

const ButtonMore = ({ hq }: { hq: Headquarters }) => {
	const router = useRouter();
	const [isActive, setIsActive] = React.useState(hq.state === "ACTIVE");
	const [showAlert, setShowAlert] = React.useState(false);
	const token = Cookies.get("token") || "";

	const updateState = async () => {
		try {
			const updateHeadquarters = await new UpdateHeadquartersUseCase(
				headquartersRepository
			).execute(hq.id, { state: isActive ? "ACTIVE" : "INACTIVE" }, token);
			if (updateHeadquarters.status.ok) {
				setShowAlert(false);
				router.refresh();
			}
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		setIsActive(hq.state === "ACTIVE");
	}, [hq.state, setIsActive]);

	return (
		<div className="relative">
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger className="cursor-pointer">
						<div className="flex gap-1 p-1">
							<div className="bg-white w-[4px] h-[4px] rounded-full"></div>
							<div className="bg-white w-[4px] h-[4px] rounded-full"></div>
							<div className="bg-white w-[4px] h-[4px] rounded-full"></div>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-[var(--background)] text-white border-[var(--border-color)]">
						<DropdownMenuCheckboxItem
							checked={isActive}
							onCheckedChange={(checked) => setIsActive(checked)}
							className="cursor-pointer"
							onClick={() => setShowAlert(true)}
						>
							Activo
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<AlertDialog open={showAlert} onOpenChange={setShowAlert}>
				<AlertDialogTrigger asChild></AlertDialogTrigger>
				<AlertDialogContent className="absolute left-[-100px] bg-[var(--background)] flex justify-center border-[var(--border-color)] border-[1px] py-2 px-4 gap-4 rounded-md z-50">
					<AlertDialogHeader>
						<AlertDialogTitle>Confirmar</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogFooter className="flex gap-4">
						<AlertDialogCancel
							onClick={() => {
								setShowAlert(false);
								setIsActive(!isActive);
							}}
						>
							<X className="w-6 h-6 cursor-pointer text-red-400" />
						</AlertDialogCancel>
						<AlertDialogAction onClick={updateState}>
							<Check className="w-6 h-6 cursor-pointer text-green-400" />
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default ButtonMore;
