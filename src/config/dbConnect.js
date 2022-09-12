import mongoose from 'mongoose';
import {} from 'dotenv/config'

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@dualvet.mqziqjy.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

export default db;