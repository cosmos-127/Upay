/* eslint-disable react/prop-types */
function SecondaryButton({ onClick, label }) {
	return (
		<>
			<button
				onClick={onClick}
				type="button"
				className="justify-center rounded-md text-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full  bg-gray-400  hover:bg-gray-500 text-white"
			>
				{label}
			</button>
		</>
	);
}

export default SecondaryButton;
