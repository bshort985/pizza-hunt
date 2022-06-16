const router = require("express").Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require("../../controllers/pizza-controller");

// set up GET all and POST as /api/pizzas

router
    .route("/")
    .get(getAllPizza)
    .post(createPizza);

// setr up GET one, PUT, and DELETE at /api/pizzas/:id

router
    .route("/:id")
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);



module.exports = router;