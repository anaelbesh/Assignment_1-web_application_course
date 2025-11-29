const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use('/posts', require('./src/routes/postRoutes'));
app.use('/comments', require('./src/routes/commentRoute'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});