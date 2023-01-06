import mongoose from 'mongoose'

// Prep for Mongoose 7 and surpress deprecation warnings
mongoose.set('strictQuery', false)

// connect to the database
mongoose.connect(process.env.DATABASE_URL)