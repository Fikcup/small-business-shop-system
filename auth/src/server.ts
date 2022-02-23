import express from 'express';
import routes from './routes';
import db from './config/connection';

const PORT = process.env.PORT || 3001;

export const get = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);

    return app;
}

export const start = () => {
    db.once('open', () => {
        const app = get();
    
        console.log('Successfully connected to the database.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });
}

start();