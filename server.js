require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./models/index");
const gameRoutes = require("./routes/gameRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Sync Database
sequelize.sync()
    .then(() => console.log("✅ Database synced"))
    .catch((err) => console.error("❌ Sync error:", err));

app.use("/api", gameRoutes);

app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Scan & Survive API!");
});
