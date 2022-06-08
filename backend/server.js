
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri ='mongodb+srv://Falldoumz:Geniecivil1+@cluster0.wkgo1ei.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true,  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully (doumzi)");
})

const ProduitsRouter = require('./routes/Produits');

app.use('/Produits', ProduitsRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});