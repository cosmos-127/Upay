const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());

// route all the requests to /api/v1 to a apiRouter
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
	console.log("Server started on 3000");
});
