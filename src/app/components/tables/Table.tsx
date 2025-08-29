import React, { ReactElement, ReactNode } from "react";

const bc = "border-gray-700";

interface ItemTableProps {
	children?: React.ReactNode;
	classCols?: string;
	className?: string;
}

export const ItemTable = ({
	children,
	classCols,
	className,
}: ItemTableProps) => {
	return (
		<section className={`col-span-full text-sm ${className}`}>
			<div
				className={`grid grid-cols-[repeat(${classCols},1fr)] border-b-[1px] ${bc}`}
			>
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child as ReactElement<any>, {
							className: `border-r-[1px] p-1.5 border-gray-700 flex justify-center items-center gap-4`,
						});
					}
					return child;
				})}
			</div>
		</section>
	);
};

interface LabelTableProps {
	children?: ReactNode;
	classCols?: string;
}

export const LabelTable = ({ children, classCols }: LabelTableProps) => {
	return (
		<section
			className={`col-span-full text-base font-semibold row-start-1 border-r-[1px] border-b-[1px] ${bc} bg-blue-900`}
		>
			<div
				className={`grid grid-cols-[repeat(${classCols},1fr)] col-span-full`}
			>
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child as ReactElement<any>, {
							className: `border-r-[1px] p-1.5 border-black text-center truncate overflow-hidden`,
						});
					}
					return child;
				})}
			</div>
		</section>
	);
};

interface TableProps {
	classCols: string;
	children?: React.ReactNode;
}

export default function Table({ classCols, children }: TableProps) {
	return (
		<article
			className={`grid grid-cols-[repeat(${classCols},1fr)] w-full border-t-[1px] border-l-[1px] ${bc} bg-black`}
		>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child as ReactElement<any>, { classCols });
				}
				return child;
			})}
		</article>
	);
}
