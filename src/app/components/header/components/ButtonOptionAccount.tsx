"use client";
import { LogOutIcon, User2Icon } from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ButtonOptionAccount = () => {
	const router = useRouter();

	const handleLogout = () => {
		Cookies.remove("token");
		Cookies.remove("user");
		Cookies.remove("userId");
		Cookies.remove("role");
		Cookies.remove("company");
		Cookies.remove("companyId");
		router.push("/auth/login");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="hover:bg-black cursor-pointer rounded-full h-9 w-9 flex items-center justify-center border-[1px] border-gray-700">
				<User2Icon className="h-4 w-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-black text-white border-gray-700">
				<DropdownMenuItem
					onClick={() => handleLogout()}
					className="hover:bg-gray-700 cursor-pointer"
				>
					<LogOutIcon className="h-4 w-4" /> Cerrar Sesión
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ButtonOptionAccount;
