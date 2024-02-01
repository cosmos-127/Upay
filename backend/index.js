const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index.js");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

// route all the requests to /api/v1 to a apiRouter
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

