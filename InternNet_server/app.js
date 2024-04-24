import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const PORT = 7777;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "internnet",
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données", err);
  } else {
    console.log("Connecté à la base de données.");
  }
});

// CRUD

app.get("/companies", (request, response) => {
  connection.query("SELECT * FROM Company", (err, result) => {
    if (err) throw err;
    console.log("Companies fetched");
    response.send(result);
  });
});

app.post("/companies", (request, response) => {
  const newCompany = request.body.newCompany;
  connection.query(
    `INSERT INTO Company (name, details, localisation) VALUES ('${newCompany.name}','${newCompany.details}', '${newCompany.localisation}')`,
    (err, result) => {
      if (err) throw err;
      response.send("Company added to database.");
    }
  );
});

app.get("/internships", (request, response) => {
  connection.query("SELECT * FROM Intership", (err, result) => {
    if (err) throw err;
    console.log("Internships fetched");
    response.send(result);
  });
});

app.post("/internships", (request, response) => {
  const newInternship = request.body.newInternship;
  connection.query(
    `INSERT INTO Intership (title, details, start, end, company_id ) VALUES ('${newInternship.title}','${newInternship.details}','${newInternship.start}','${newInternship.end}',${newInternship.company_id})`,
    (err, result) => {
      if (err) throw err;
      response.send("Internship added to db");
    }
  );
});

// TEST

// app.get("/", (req, res) => {
//     return res.json({ hello: "world" });
//   });

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}`);
});
