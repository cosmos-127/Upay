import { Link } from "react-router-dom";
import "animate.css";

function Home() {
	return (
		<>
			<div className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-600 w-screen h-screen flex flex-col items-center justify-center text-white font-sans">
				{/* Hero Section */}
				<div className="animate__animated animate__fadeIn text-center mb-8">
					<h1 className="text-3xl md:text-5xl font-semibold font-heading ">
						Welcome to UPay
					</h1>
					<p className="text-lg md:text-1xl max-w-md mx-auto mt-4">
						Your trusted payment solution for seamless and secure
						transactions.
					</p>
				</div>

				{/* Call to Action Section */}
				<div className="animate__animated animate__fadeIn flex flex-col md:flex-row justify-center items-center space-x-4 md:space-x-8 ">
					<Link
						to="/signup"
						className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium animate__fadeIn my-2"
					>
						Sign Up
					</Link>
					<Link
						to="/signin"
						className="bg-blue-200 text-blue-600 hover:bg-blue-300 px-6 py-3 rounded-full font-medium animate__fadeIn my-2"
					>
						Sign In
					</Link>
				</div>
			</div>
		</>
	);
}

export default Home;
