const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home page<h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.send(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = product.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("product does not exist");
  }
  res.json(singleProduct); // in last a return statement is added why is that
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((products) => {
      return products.name.startsWith(search);
    });
  }
  res.send("Hello world");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
