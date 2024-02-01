// eslint-disable-next-line react/prop-types
function Balance({ balance }) {
	return (
		<div className="flex mx-4 mt-6">
			<div className="font-semibold text-lg">
				Your balance :{"\t\u20B9"} {balance}
			</div>
		</div>
	);
}

export default Balance;
