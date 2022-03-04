import { app } from './app';


const port = 80;

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
