const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");

const { User, Account } = require("../db.js");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();
const { authMiddleware } = require("../middleware.js");

// ...............SignUp...................

const signupBody = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
});

router.post("/signup", async (req, res) => {
	const { success } = signupBody.safeParse(req.body);
	if (!success) {
		return res.status(411).json({
			message: "Incorrect inputs",
		});
	}
	const existingUser = await User.findOne({
		username: req.body.username,
	});

	if (existingUser) {
		return res.status(411).json({
			message: "Email already exist in database",
		});
	}

	// ----- Create new user ------

	const user = await User.create({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
	});

	const userId = user._id;
	const token = jwt.sign({ userId: userId }, JWT_SECRET);

	// ----- Create new account ------

	await Account.create({
		userId,
		balance: 1 + Math.random() * 10000,
	});

	res.json({
		message: "User created successfully",
		token: token,
	});
});

// ------- SignIn / Login -------

const signinBody = zod.object({
	username: zod.string().email(),
	password: zod.string(),
});

router.post("/signin", async (req, res) => {
	const { success } = signinBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: "Wrong Inputs",
		});
	}

	// ----- finding user in database -----

	const user = await User.findOne({
		username: req.body.username,
		password: req.body.password,
	});

	if (user) {
		const token = jwt.sign({ userId: user._id }, JWT_SECRET);
		res.json({
			token: token,
		});
		return;
	}
	res.status(411).json({
		message: "Error while logging in",
	});
});

// ................Update details.....................

const updateBody = zod.object({
	password: zod.string().optional(),
	firstName: zod.string().optional(),
	lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
	const { success } = updateBody.safeParse(req.body);
	if (!success) {
		return res.status(411).json({
			message: "Error while updating information",
		});
	}
	try {
		await User.updateOne({ _id: req.userId }, req.body);
		res.json({
			message: "Updated successfully",
		});
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
});

// ................searching user in database.....................

router.get("/bulk", authMiddleware, async (req, res) => {
	const filter = req.query.filter || "";
	const users = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	});
	// array of user objects returned
	res.json({
		user: users.map((user) => ({
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			_id: user._id,
		})),
	});
});

module.exports = router;
