type Props = {
	errors: object;
};

function Errors({ errors }: Props) {
	return (
		<div className="fixed flex flex-col right-2 bottom-2 gap-4 font-sans">
			{Object.entries(errors).map(([key, value]) => (
				<p
					className="text-red-700 text-sm animation-messages bg-[var(--primary-color-300)] rounded-sm border-[1px] border-[var(--primary-color-400)] p-4"
					key={key}
				>
					{`${value?.message?.toString()}`}
				</p>
			))}
		</div>
	);
}

export default Errors;
