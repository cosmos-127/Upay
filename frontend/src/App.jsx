import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Dashboard from "./screens/Dashboard";
import { SendMoney } from "./screens/SendMoney";
import Home from "./screens/Home";
import "animate.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/send" element={<SendMoney />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
