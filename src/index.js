const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule("* * * * *", () => console.log("running the function every minute"));

cron.schedule("0 */1 * * *", () => console.log("running the function every hour"));

cron.schedule("0 12 * * ?", () => console.log("At 12:00 p.m. (noon) every day"));

cron.schedule("15,45 13 ? 6 Tue", () => console.log("At 1:15 p.m. and 1:45 p.m. every Tuesday in the month of June"));

app.listen(3000);