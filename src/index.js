const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require("./config/db");
const authRoutes = require("./modules/auth/auth.route")
const adminRoutes= require("./modules/admin/admin.route")
const merchantRoutes= require("./modules/merchant/merchant.route")
const userRoutes= require("./modules/user/user.route")
const path = require('path')

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/* Auth routes */
app.use("/api/auth", authRoutes);
/*Admin Routes */
app.use("/api/admin",adminRoutes);
/*merchant Routes */
app.use("/api/merchant",merchantRoutes);
/*merchant Routes */
app.use("/api/user",userRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    errorKey: 'API_NOT_FOUND',
    message: 'No such API exist',
  });
});

// server static assets in  production

if(process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static('client/build'))

  app.get('*' ,(req,res) => res.sendFile(path.resolve(__dirname,'client','build',
  'index.html')));
  

}

app.listen(PORT, (req, res) => {

  console.log(`Server Started at PORT ${PORT}`);
});