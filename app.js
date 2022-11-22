const express = require("express")
const mongoose = require("mongoose");
const morgan = require("morgan")
const bodyParser = require("body-parser")
const userRouter = require('./routes/user') ;
const profileRouter = require('./routes/profile.js');
const adminAuthRouter = require('./routes/admin/auth.js') ;
const adminProfileRouter = require ('./routes/admin/profile.js') ;
const newsRouter = require('./routes/admin/news')
const userAuthRouter = require("./routes/userAuth")
const session = require('express-session') 
const cookieParser = require('cookie-parser') 
const path = require("path");
const cors = require("cors");
// const userRoutes = require("./routes/users");
// const sampleRoutes = require("./routes/sample")

//APP Express
const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//   next(); 
// })
app.use(cors());

// app.use(cookieParser());
// app.use(session({secret: 'ssshhh',
// saveUninitialized:true,
//     resave: false}));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/admin', adminAuthRouter);
app.use('/admin/profile', adminProfileRouter);
app.use('/api', newsRouter )
app.use('/api', userAuthRouter)







//MIddlewares NPM 

// app.use(morgan('dev'))
// app.use(bodyParser.json())
// app.use(cors());



// ROutes Middleware

// app.use('/api', userRoutes)
// app.use( '/api', sampleRoutes)

// APP-ROUTES
// app.get('/', (req, res) => {
//   res.send('Hello from KSP')
// })

app.use(express.static(path.join(__dirname, './client/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});


const port = process.env.PORT || 80


app.listen(port, () => { console.log( `Server Running on Port: http://localhost:${port}`)})

// db
mongoose.connect(
  "mongodb+srv://mahi:0aQ8zcAuz4GhYVFf@cluster0.omqaw.mongodb.net/ksp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("DB Connected"));
