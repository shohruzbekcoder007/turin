const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const chiller = require('./routers/chiller')
const counter = require('./routers/counter')
const device = require('./routers/device')
const location = require('./routers/location')
const report = require('./routers/report')
const user = require('./routers/user')
const views_router = require('./routers/views_router')

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(cookieParser);
app.use(express.static('./static'));
app.set("view engine", "pug");

app.use("/chiller", chiller)
app.use("/counter", counter)
app.use("/device", device)
app.use("/location", location)
app.use("/report", report)
app.use("/user", user)

// views
app.use('/', views_router)

mongoose.connect('mongodb://localhost:27017/turin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
  })
  .catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
  });

app.listen(port, ()=> {
  console.log(`Application is up and running under localhost:${port}`)
})