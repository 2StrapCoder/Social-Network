const express = require('express');
const connectDB = require('./config');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoute')

connectDB();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api',thoughtRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));