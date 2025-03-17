// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
var express=require('express');
var mongoose=require('mongoose');
var app=express();
var cors=require('cors')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{res.send("welcome")})
app.listen(8080,()=>{console.log("SERVER CONNECTED")})
mongoose.connect('mongodb+srv://koushik:koushik@cluster0.9lajf.mongodb.net//bank').then(()=>{console.log("DB CONNECTED")})
let data=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})

let Data=mongoose.model("test",data)



app.get('/data',(req,res)=>(Data.find().then((item)=>res.send(item))))

//API FOR CREATING DATA
app.post('/create',(req,res)=>(Data.create(req.body).then((item)=>res.send(item))))

// API FOR UPDATING DATA
app.put('/update/:id', (req, res) => {
    Data.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.send(item));
});     

// API FOR DELETING DATA
app.delete('/delete/:id', (req, res) => {
    Data.findByIdAndDelete(req.params.id)
        .then(() => res.send({ message: 'Deleted successfully' }));
});