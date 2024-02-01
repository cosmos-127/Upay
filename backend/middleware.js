const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(403).json({
			message: "Authorization error (token error)",
		});
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		// extracting userId from token and storing it in req object
		req.userId = decoded.userId;
		next();
	} catch (error) {
		return res.status(403).json({
			message: "Token is invalid",
		});
	}
};

module.exports = {
	authMiddleware,
};
