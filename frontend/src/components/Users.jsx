/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendURL } from "../url";
import PrimaryButton from "./PrimaryButton";

function Users() {
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios
			.get(`${backendURL}/api/v1/user/bulk?filter=${filter}`, {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setUsers(response.data.user);
			});
	}, [filter]);

	return (
		<>
			<div className="font-bold mt-6 mx-4 text-lg text-blue-600 ">
				Users
			</div>
			<div className="my-2 mx-4 ">
				<input
					onChange={(e) => {
						setFilter(e.target.value);
					}}
					type="text"
					placeholder="Search users..."
					className="w-full px-2 py-1 border rounded border-slate-200"
				></input>
			</div>
			<div>
				{users.map((user) => (
					<User user={user} />
				))}
			</div>
		</>
	);
}

function User({ user }) {
	const navigate = useNavigate();
	return (
		<div className="flex justify-between mx-4 mt-4">
			<div className="flex">
				<div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
					<div className="flex flex-col justify-center h-full text-xl">
						{user.firstName[0]}
					</div>
				</div>
				<div className="flex flex-col justify-center h-ful">
					<div>
						{user.firstName} {user.lastName}
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center h-ful">
				<PrimaryButton
					onClick={() => {
						navigate(
							"/send?id=" + user._id + "&name=" + user.firstName
						);
					}}
					label={"Send Money"}
				>
					S
				</PrimaryButton>
			</div>
		</div>
	);
}
export default Users;
