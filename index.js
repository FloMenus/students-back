const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const studentsRoute = require('./routes/students');

app.use(cors());
app.use(express.json());

app.use('/students', studentsRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);