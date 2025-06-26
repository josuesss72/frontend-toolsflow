import React from "react";
import ButtonCreate from "./components/ButtonCreate";

const Header = () => {
	return (
		<header className="flex fixed back_gradient left-16 right-0 justify-between items-center py-4 pr-16">
			<article className="flex items-center gap-4 mx-auto">
				<select name="" id="">
					<option value="">default</option>
				</select>
				<form action="">
					<input
						type="text"
						className="w-[300px] p-0.5 border-[1px] focus:outline-none border-gray-700 rounded-sm bg-black"
					/>
				</form>
			</article>
			<ButtonCreate />
		</header>
	);
};

export default Header;
