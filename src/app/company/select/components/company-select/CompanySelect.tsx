"use client";
import { Company } from "@/domain/entities/company/company.entity";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Props {
	company: Company;
}

const CompanySelect = ({ company }: Props) => {
	const router = useRouter();
	const handleClick = () => {
		Cookies.set("companyId", company.id);
		router.push("/dashboard");
	};
	return (
		<article
			onClick={handleClick}
			key={company.id}
			className="bg-black p-4 rounded-md border-[1px] border-gray-800 cursor-pointer"
		>
			<h3>{company.name}</h3>
		</article>
	);
};

export default CompanySelect;
