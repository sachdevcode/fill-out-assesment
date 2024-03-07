const express = require("express");
const router = express.Router();
const formController = require("../controllers/form.controller");

router.get("/:formId/filteredResponses", formController.getFilteredResponses);

module.exports = router;
