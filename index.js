const express = require('express');
const { resolve } = require('path');
const connectDB = require('./connection/connection');  
const userRoutes=require('./routes/UserRoute')

const app = express();
const port = 3010;


app.use(express.json());
app.use(express.static('static'));

app.use(userRoutes);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.listen(port, async () => {
  await connectDB(); 
  console.log(`Example app listening at http://localhost:${port}`);
});