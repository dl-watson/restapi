const app = require("./lib/app");
const pool = require("./db/connection/pool");

const port = process.env.PORT || 7890;

app.listen(port, () => {
  console.log(`Starting server on port ${port}...`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
