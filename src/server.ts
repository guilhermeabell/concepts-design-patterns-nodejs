import express from 'express';
import routes from './routes';

const app = express();


app.use('/', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333);