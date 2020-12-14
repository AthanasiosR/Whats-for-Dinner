const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const fetch = require("isomorphic-fetch");
require("dotenv").config();

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.get("/restaurant/:category", (req, res) => {
  const { category } = req.params;

  fetch(
    `https://api.yelp.com/v3/businesses/search?categories=${category}&location=montreal`,
    {
      headers: {
        // "content-type": "text/html",
        Authorization: `Bearer E2kJeMGx5d9vP_XG253UNR_baxz1_AuLFxlIwFMMnfT3UOxLQjVTXyU6CgN_Fm2OX0FPHc0I1BTX67e6kHHNVEVwEECPdgVQpRb99u1GCQaLONeR_cYEwYCeyZfSX3Yx`,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      return res.status(200).json({ data: json });
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

// Need endpoint for top 25 restaurants for ramdonly selected cuisine type
