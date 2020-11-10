const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors');

app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Se deben proteger estas rutas a futuro
app.use("/api/propiedad", require("./routes/Propiedad"))
app.use('/api/usuarios', require('./routes/usuarios'))
// Login
app.use('/api/login', require('./routes/login'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  const path1 = path.resolve(__dirname, '..', 'frontend', 'build', 'index.html');

  app.get('*', (req, res) => {
      res.sendFile(path1);
  });
}


module.exports = app;