import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { backendURL } from "../url";

function Signup() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	return (
		<>
			<div className="bg-white w-screen font-sans text-gray-900">
				<div className=" ">
					<div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
						<div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-10">
							<h1 className="mb-4 text-2xl font-black leading-4 sm:text-3xl xl:text-4xl">
								Sign up
							</h1>

							<div className="">
								<p className="mb-4 font-bold">
									Welcome to UPay, your trusted payment
									solution.
								</p>

								<p className="text-md font-semibold">
									Create an account to enjoy seamless and
									secure transactions. <br />
									Unlock a world of convenience and financial
									empowerment. <br /> <br /> Join our
									community today!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
					<form
						className=" border-gray-100 py-10 px-8"
						style={{
							borderRadius: "30px",
							boxShadow:
								"30px 30px 75px #cacaca, -30px -30px 75px #f6f6f6",
						}}
					>
						<div className="mb-4">
							<label
								className="mb-2 block text-sm font-bold"
								htmlFor="firstName"
							>
								First Name
							</label>
							<input
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								className="w-full cursor-text rounded border border-gray-300 py-2 px-3 "
								id="firstName"
								type="string"
								placeholder="firstname"
								required=""
							/>
							<span className="my-2 block"></span>
						</div>
						<div className="mb-4">
							<label
								className="mb-2 block text-sm font-bold"
								htmlFor="lastName"
							>
								Last Name
							</label>
							<input
								onChange={(e) => {
									setLastName(e.target.value);
								}}
								className="w-full cursor-text rounded border border-gray-300 py-2 px-3 "
								id="lastName"
								type="string"
								placeholder="lastname"
								required=""
							/>
							<span className="my-2 block"></span>
						</div>
						<div className="mb-4">
							<label
								className="mb-2 block text-sm font-bold"
								htmlFor="email"
							>
								E-mail
							</label>
							<input
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								className=" w-full cursor-text rounded border border-gray-300 py-2 px-3 "
								id="username"
								type="email"
								placeholder="email"
								required=""
							/>
							<span className="my-2 block"></span>
						</div>
						<div className="mb-4">
							<label
								className="mb-2 block text-sm font-bold"
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

						<div className="">
							<label className=" flex text-sm">
								<input
									type="checkbox"
									name="accept"
									className="mr-2"
									required=""
								/>
								<div className="text-gray-800">
									<p className="">
										I accept the {"\t"}
										<a
											href="#"
											className="cursor-pointer text-blue-500 underline"
										>
											terms of use
										</a>
										{"\t"}and{"\t"}
										<a
											href="#"
											className="cursor-pointer text-blue-500 underline"
										>
											privacy policy
										</a>
									</p>
								</div>
							</label>
						</div>
						<div className="div font-semibold my-3">
							Already have an account?{" "}
							<Link
								to="/signin"
								className="text-blue-600 hover:underline ml-1"
							>
								SignIn
							</Link>
						</div>
						<div className="flex items-center">
							<div className="flex-1"></div>
							<PrimaryButton
								label={"Create account"}
								onClick={async () => {
									try {
										const response = await axios.post(
											`${backendURL}/api/v1/user/signup`,
											{
												username,
												firstName,
												lastName,
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
											"Error during signup:",
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

export default Signup;
