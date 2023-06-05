import express from "express";
import { users } from "./users.js";
import { products } from "./products.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Este es el primer servidor con express</h1>
        <a href="/products">Ir a productos</a>
        <a href="/users">Ir a Usuarios</a>
    `);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5050, () => {
  console.log("listening on 5050");
});
