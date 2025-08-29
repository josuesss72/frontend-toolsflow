"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User } from "@/domain/entities/user/user.entity";
import { Company } from "@/domain/entities/company/company.entity";
import { userService } from "../services/user.service";
import { headquartersService } from "../services/headquarters.service";
import { toast } from "sonner";
import { companyService } from "../services/company.service";
import { Headquarters } from "@/domain/entities/headquarters/headquarters.entity";

type AppContextType = {
	user: User | Headquarters | null;
	company: Company | null;
	refreshUser: () => Promise<void>;
	refreshCompany: () => Promise<void>;
};

// contexto inicial
const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * useAppContext es un hook que permite acceder al contexto de AppProvider desde cualquier componente de la aplicación.
 * Este hook verifica que se este usando dentro de AppProvider y devuelve el contexto.
 * Si se usa fuera de AppProvider, lanza un error.
 */
export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext debe usarse dentro de AppProvider");
	}
	return context;
};

/**
 * AppProvider es un componente que provee un contexto con la información del usuario y la empresa.
 * El contexto se inicializa con los valores cargados desde las cookies.
 * Cuando el componente se monta, se llama a las funciones fetchUserMe y fetchCompany para actualizar la información.
 * Los valores de usuario y empresa se almacenan en las cookies.
 * El contexto se expone a través del hook useAppContext, que debe usarse dentro de AppProvider.
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | Headquarters | null>(null);
	const [company, setCompany] = useState<Company | null>(null);

	// Fetchs the user information and updates the cookies and state
	const fetchUserMe = async () => {
		try {
			const token = Cookies.get("token") || "";
			const rol = Cookies.get("role") || "";
			const userId = Cookies.get("userId") || "";

			if (rol === "USER") {
				const res = await userService.getUserInfo.execute(token);
				if (res.status.ok && res.user) {
					Cookies.set("user", JSON.stringify(res.user));
					setUser(res.user);
				}
			}

			if (rol === "HQ") {
				const res = await headquartersService.getHeadquarters.execute(
					userId,
					token
				);
				if (res.status.ok && res.headquarters) {
					Cookies.set("user", JSON.stringify(res.headquarters));
					setUser(res.headquarters);
				}
			}
		} catch {
			toast.error("Error al obtener usuario");
		}
	};

	// Fetchs the company information and updates the cookies and state
	const fetchCompany = async () => {
		try {
			const token = Cookies.get("token") || "";
			const companyId = Cookies.get("companyId") || "";

			const res = await companyService.getCompany.execute(companyId, token);
			if (res.status.ok && res.company) {
				Cookies.set("company", JSON.stringify(res.company));
				setCompany(res.company);
			}
		} catch {
			toast.error("Error al obtener empresa");
		}
	};

	// Fetchs the user and company information when the component mounts
	useEffect(() => {
		fetchUserMe();
		fetchCompany();
	}, []);

	return (
		<AppContext.Provider
			value={{
				user,
				company,
				refreshUser: fetchUserMe,
				refreshCompany: fetchCompany,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
