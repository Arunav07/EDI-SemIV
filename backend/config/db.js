const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const connectDB = async () => {
    try {
        console.log('Working')
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...')
    } catch (error) {
        console.error(error.message)
        process.exit(1);
    }
}

module.exports = connectDB