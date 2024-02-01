const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
mongoose.connect(
	"mongodb+srv://gaganparashar127:gagan127@cluster0.qhp2flf.mongodb.net/"
);

const userSchema = new Schema({
	firstName: { type: String, required: true, trim: true },
	lastName: { type: String, required: true, trim: true },
	password: { type: String, required: true },
	username: { type: String, required: true, trim: true },
});

const User = model("paytmUsers", userSchema);

const accountSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: User,

		// referencing to User Model
		// The ObjectId of a user document is indeed its _id field.
		// When an Account document is created, the userId field is populated with the ObjectId of the corresponding User document.
		required: true,
	},
	balance: { type: Number, required: true },
});

const Account = model("Account", accountSchema);

module.exports = {
	User,
	Account,
};
