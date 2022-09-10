const express = require('express');
let router = express.Router();

const studentUtils = require('../controllers/student');
const upload = require("../utils/upload");

router.get('/', studentUtils.get)
router.post('/get', studentUtils.get)
router.post('/createPDF', studentUtils.createPDF)
router.post('/', studentUtils.create)
router.put('/', studentUtils.update)
router.post('/delete', studentUtils.delete)

router.post("/upload", upload.single("file"), studentUtils.uploadStudentDetails)

module.exports = router;