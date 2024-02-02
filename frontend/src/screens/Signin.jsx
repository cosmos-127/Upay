/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { backendURL } from "../url";


function Signin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	return (
		<>
			<div className="animate__animated animate__fadeIn animate__slow">
				<div className="w-screen font-sans text-gray-900 ">
					<div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
						<div className="mx-2 py-10 text-center md:mx-auto md:w-2/3 md:py-10">
							<h1 className="mb-4 text-2xl font-black leading-4 sm:text-3xl xl:text-4xl">
								Sign in
							</h1>
							<div className="text-md font-semibold">
								Welcome back to UPay! Sign in to continue your
								transactions.
							</div>
						</div>
					</div>
				</div>

				<div className="md:w-2/3 mx-auto w-full pb-10 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl ">
					<form
						className="mb-4 border border-gray-100 py-10 px-8"
						style={{
							borderRadius: "30px",
							boxShadow:
								"30px 30px 75px #cacaca, -30px -30px 75px #f6f6f6",
						}}
					>
						<div className="mb-2">
							<label
								className="mb-2 block text-sm font-semibold"
								htmlFor="email"
							>
								E-mail
							</label>
							<input
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								className="w-full cursor-text rounded border border-gray-300 py-2 px-3 "
								id="username"
								type="email"
								placeholder="email"
								required=""
							/>
							<span className="my-2 block"></span>
						</div>
						<div className="mb-2">
							<label
								className="mb-2 block text-sm font-semibold"
								htmlFor="password"
							>
								Password
							</label>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="w-full cursor-text rounded border border-gray-300 py-2 px-3 "
								id="password"
								type="password"
								placeholder="************"
								required=""
							/>
						</div>
						<div className="div font-semibold my-4 text-center">
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="text-blue-500 hover:underline ml-1"
							>
								SignUp
							</Link>
						</div>

						<div className="flex items-center">
							<div className="flex-1"></div>

							<PrimaryButton
								label={"SignIn"}
								onClick={async () => {
									try {
										const response = await axios.post(
											`${backendURL}/api/v1/user/signin`,

											{
												username,
												password,
											}
										);
										localStorage.setItem(
											"token",
											response.data.token
										);
										navigate("/dashboard");
									} catch (error) {
										console.error(
											"Error during signin:",
											error
										);
									}
								}}
							></PrimaryButton>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Signin;
