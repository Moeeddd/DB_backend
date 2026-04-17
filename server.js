const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "https://db-frontend-rho.vercel.app"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Connected Successfully 🚀");
});


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/customer", require("./routes/customerRoutes"));
app.use("/api/driver", require("./routes/driverRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5000;

console.log("Loaded PORT:", PORT);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
