const cron = require("node-cron");
const express = require("express");

app = express();

// CRON JOB EXECUTANDO DE UM EM UM MINUTO
cron.schedule("* * * * *", () => console.log("Executando a tarefa a cada 1 minuto"));


cron.schedule("0 */1 * * *", () => {
    console.log("Só será executado em uma hora e repetirá (de 1 em 1 hora) até ser desativado...");
});

app.listen(3000);