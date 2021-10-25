const express = require('express');
const routes = require('./routes.js');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json())

app.use('/api', routes);

app.listen(app.get('port'), function () {
  console.log('App ejecutandose en el puerto: ' + app.get('port'));
});