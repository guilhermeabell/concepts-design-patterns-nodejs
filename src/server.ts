import express from 'express';
import routes from './routes';

const app = express();


app.use('/', (request, response) => {
=======
app.use('/appointments', (request, response) => {
>>>>>>> 62effd6be1b80a99eacca586184881ef15e8592a
    return response.json({message: 'Hello World'})
})

app.listen(3333);