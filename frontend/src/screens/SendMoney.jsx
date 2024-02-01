import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

// successful transaction animation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendMoney = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");
	const name = searchParams.get("name");
	const [amount, setAmount] = useState(0);
	const navigate = useNavigate();

	return (
		<div className="flex justify-center h-screen bg-gray-100 ">
			<div className="h-full flex flex-col justify-center">
				<div
					className="border h-min max-w-md p-6 space-y-8 w-96 bg-white rounded-lg"
					style={{
						borderRadius: "30px",
						boxShadow:
							"30px 30px 75px #cacaca, -30px -30px 75px #f6f6f6",
					}}
				>
					<div className="flex flex-col space-y-1.5 p-4">
						<h2 className="mb-4 text-2xl font-black leading-4 sm:text-3xl xl:text-4xl text-center">
							Send Money
						</h2>
					</div>
					<div className="p-6">
						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 rounded-full  bg-blue-500 flex items-center justify-center">
								<span className="text-2xl text-white">
									{name[0].toUpperCase()}
								</span>
							</div>
							<h3 className="text-2xl font-semibold mb-2">
								{name}
							</h3>
						</div>
						<div className="space-y-4">
							<div className="space-y-2 mt-2">
								<label
									className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
									htmlFor="amount"
								>
									Amount (in Rs)
								</label>
								<input
									onChange={(e) => {
										setAmount(e.target.value);
									}}
									type="number"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
									id="amount"
									placeholder="Enter amount"
								/>
							</div>
							<PrimaryButton
								onClick={() => {
									try {
										axios
											.post(
												"http://localhost:3000/api/v1/account/transfer",
												{ to: id, amount: amount },
												{
													headers: {
														Authorization:
															"Bearer " +
															localStorage.getItem(
																"token"
															),
													},
												}
											)
											.then(() => {
												toast.success(
													"Transaction successful!",
													{
														position:
															"bottom-right",
														autoClose: 3000,
														hideProgressBar: true,
														closeOnClick: true,
														pauseOnHover: true,
													}
												);
												// Additional logic if needed after a successful transaction
											});
									} catch (error) {
										console.log(error);
									}
								}}
								label={"Initiate Transfer"}
							></PrimaryButton>

							<SecondaryButton
								onClick={() => {
									navigate(-1);
								}}
								label={"DashBoard"}
							></SecondaryButton>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};
