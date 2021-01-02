import express from 'express';
import routes from './routes';

const app = express();

app.use('/appointments', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333);