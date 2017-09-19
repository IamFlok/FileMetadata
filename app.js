var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer({ dest: 'public/uploads/' });
var app = express();
var router = express.Router();

app.use('/', router);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

router.post('/upload', upload.single('file'), (req, res) => {
  return res.json(req.file);
});

app.listen(PORT, () => {
  console.log('Listening to port ' + PORT);
});
