const { Router: expressRouter } = require("express");
const router = expressRouter();
// auth routes
const pacRouter = require("./pacRoute");
router.use("/pacientes", pacRouter);
module.exports = router;