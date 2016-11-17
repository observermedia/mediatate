let express = require('express')
let app = express();
let port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, () => console.log("Listening on port", port));












