import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/auth');

export default mongoose.connection;