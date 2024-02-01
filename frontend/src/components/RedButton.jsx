function RedButton({ label, onClick }) {
	return (
		<>
			<button
				onClick={onClick}
				type="button"
				className="justify-center rounded-md text-md font-medium ring-offset-background transition-colors h-10 my-auto mx-4 px-3 w-full  bg-red-500  hover:bg-red-600 text-white"
			>
				{label}
			</button>
		</>
	);
}

export default RedButton;
