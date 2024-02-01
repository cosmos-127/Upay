/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import RedButton from "./RedButton";

export const Appbar = () => {
	const navigate = useNavigate();

	return (
		<div className="shadow h-14 flex items-center justify-between">
			<div className="rounded-full bg-blue-500 text-white h-12 w-12 flex items-center justify-center ml-4">
				<div className="text-xl text-center">Upay</div>
			</div>
			<div className="flex items-center ml-4 font-semibold text-xl">
				UPay App
			</div>
			<div className="flex">
				<RedButton
					onClick={() => {
						navigate("/signin");
						localStorage.clear();
					}}
					label="Logout"
				/>
			</div>
		</div>
	);
};

export default Appbar;
