var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
const productsRouter = require("./products");
const reviewsRouter = require("./reviews");
const profilesRouter = require("./profiles");
const favoritesRouter = require("./favorites");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Offer Market API",
      version: "1.0.0",
      description: "Offer Market API Documentation",
      contact: {
        name: "David Vallecios",
      },
    },
    servers: [
      {
        url: "https://offer-market.netlify.app/.netlify/functions/server/api/v1",
        description: "Production server",
      },
      {
        url: "http://localhost:3001/.netlify/functions/server/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: ["./express/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);
router.use("/api/v1/users", usersRouter);
router.use("/api/v1/products", productsRouter);
router.use("/api/v1/reviews", reviewsRouter);
router.use("/api/v1/profiles", profilesRouter);
router.use("/api/v1/favorites", favoritesRouter);

module.exports = router;
