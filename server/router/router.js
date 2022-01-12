const router = require("express").Router();
const controller = require('../controller/controller');



router.post('/signup',controller.signup);
router.post('/login',controller.login);

module.exports = router;