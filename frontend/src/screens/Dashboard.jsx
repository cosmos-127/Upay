/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";
import { backendURL } from "../url";

function Dashboard() {
	const [balance, setBalance] = useState();
	useEffect(() => {
		axios
			.get(`${backendURL}/api/v1/account/balance`, {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setBalance(response.data.balance);
			})
			.catch((error) => {
				console.error("Error fetching balance:", error);
			});
	}, []);
	return (
		<>
			<Appbar />
			<Balance balance={balance} />
			<Users />
		</>
	);
}

export default Dashboard;
