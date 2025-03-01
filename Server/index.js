const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const dropdownRoutes = require("./routes/dropdown.routes")
const sliderRoutes = require("./routes/slider.routes")
const categoriesRoutes = require("./routes/categories.routes")
const groceryRoutes = require("./routes/grocery.routes")
const featureRoutes = require("./routes/features.routes")
const dailySellsRoutes = require("./routes/dailysells.routes")
const footerRoutes = require("./routes/footer.routes")
const productRoutes = require("./routes/product.routes")

dotenv.config()
const app = express()

const allowedOrigins = [
    'http://localhost:5173', 
    'https://fresh-cart-1e32.onrender.com'
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); 
      } else {
        callback(new Error('Not allowed by CORS'));  
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

app.use(cors(corsOptions))

app.use(express.json())

app.use("/api/dropdowns",dropdownRoutes)
app.use("/api/slider",sliderRoutes)
app.use("/api/category",categoriesRoutes)
app.use("/api/grocery",groceryRoutes)
app.use("/api/features",featureRoutes)
app.use("/api/dailySells",dailySellsRoutes)
app.use("/api/footer",footerRoutes)
app.use("/api/product",productRoutes)

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(5000,()=>console.log("Server runing on port 5000"))
})
.catch((error)=>console.log(error))
