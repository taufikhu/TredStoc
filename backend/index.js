const dns = require('dns');
dns.setServers([
  '8.8.8.8',
  '1.1.1.1'
]);


const express = require('express');
const { AuthMiddlewares } = require("./Middlewares/AuthMiddlemares.js");
require('dotenv').config();
const mongoose = require('mongoose');
const { HoldingModel } = require('./model/HoldingModel.js');
const { PositionModel } = require('./model/PositionModel.js');
const { OrdersModel } = require('./model/OrdersModel.js');
const app = express();
const PORT = process.env.PORT || 8080;
const {createSecretToken} = require("./util/SecretToken.js");
const User = require("./model/UserModel.js");
const bcrypt = require("bcrypt");



const cors = require('cors');// Import the cors middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
  })); // Use the cors middleware to enable CORS for all routes
app.use(express.json()); // Use the express.json() middleware to parse JSON request bodies

const bodyParser = require('body-parser'); // Import the body-parser middleware 
// const { createSecureServer } = require('http2');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // Use the body-parser middleware to parse URL-encoded request bodies, use to handle html form submissions



// app.get('/addHolding', async (req, res) => {
//   const tempHolding = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// try{await HoldingModel.insertMany(tempHolding);

//   res.send('done');
// }
// catch(err){console.log(err);
//   console.log('Error occurred while adding holdings:', err);
//   res.status(500).send('Error occurred while adding holdings');
// }

// });
// app.get('/getPositions', async(req, res)=>{
//   const tempPositions =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];



// try{
//   await PositionModel.insertMany(tempPositions);
//   res.status(200).send('done');
// }catch(err){
//   console.log('Error occurred while adding positions:', err);
//   res.status(500).send('Error occurred while adding positions');


// }
// });

app.get('/allholdings', async (req, res) => {
  let allHolding = await HoldingModel.find({});
  res.status(200).json(allHolding);
});
app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.status(200).json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });

  try {
    await newOrder.save();
    res.send("data saved");
    console.log(req.body);
  } catch (err) {
    console.log(err)
    res.status(500).send("not saved")

  }
});

app.get('/allOrder', async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.status(200).json(allOrders);
});


app.post("/signup", async(req, res, next)=>{

  try{
    const {email, password, username, createdAt} = req.body;
    const exitingUser = await User.findOne({email});
    if(exitingUser){
      return res.json({message: "User already exists"});
    }
    const user = await User.create({email, password, username, createdAt});
    const token = createSecretToken(user._id);
    res.cookie('token', token,{
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({message: "user signed in successfully", success: true, user});
    next();
  }
  catch(error){
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect password or email", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password or email", success: false });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000, // match your token expiry
    });

    return res.status(200).json({ message: "User logged in successfully", success: true, username: user.username });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
});
app.get("/me", AuthMiddlewares, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.get('')
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);

    });
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

