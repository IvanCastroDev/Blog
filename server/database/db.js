import mongoose from 'mongoose';
import constants from '../constants/var.js';

const Connection = () => {
    return new Promise(async (resolve, reject) => {
        const URL = constants.MONGO_URL;
        try {
            console.log("Connecting to MongoDB...");
            await mongoose.connect(URL, { useNewUrlParser: true });
            console.log('Database connected successfully');
            resolve();
        } catch (error) {
            console.log('Error while connecting to the database ', error);
            reject();
        }
    });
};

export default Connection;