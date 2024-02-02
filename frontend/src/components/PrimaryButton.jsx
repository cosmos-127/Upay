/* eslint-disable react/prop-types */
function PrimaryButton({ label, onClick }) {
	return (
		<>
			<button
				onClick={onClick}
				type="button"
				className="justify-center rounded-md text-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full  bg-blue-500  hover:bg-blue-600 text-white"
			>
				{label}
			</button>
		</>
	);
}

export default PrimaryButton;
