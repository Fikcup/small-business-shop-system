import mongoose from "mongoose";

global.beforeEach(async () => {
    try {
        mongoose.connect('mongodb://localhost/commontest')
    } catch (err) {
        console.error(err);
    }
});

global.afterEach(async () => {
    try {
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
});