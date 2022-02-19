import express from 'express';
import routes from './routes';
import db from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    console.log('Successfully connected to the database.');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})