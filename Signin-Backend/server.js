const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Use middlewares
app.use(cors());  // Allow requests from the frontend
app.use(bodyParser.json());  // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Formdata', {

}

)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Create a Mongoose schema and model for the user
const FormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Form = mongoose.model('Form', FormSchema);

// Create a POST route to handle form submission
app.post('/submit', async (req, res) => {
  try {
   const formData=new Form(req.body);
    console.log(formData);
   await formData.save();
   res.status(201).send('Form data savesd');
  }catch(error){
    res.status(400).send('error data savesd');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
