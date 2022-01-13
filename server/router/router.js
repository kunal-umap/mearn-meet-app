const router = require("express").Router();
const controller = require('../controller/controller');
const authentication = require('../middleware/authinticate');


router.post('/signup',controller.signup);
router.post('/login',controller.login);
router.delete('/delete',authentication,controller.delete)

module.exports = router;