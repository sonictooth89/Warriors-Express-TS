import express from "express";
import 'express-async-errors';
import methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import { homeRouter } from "./routers/home";
import { warriorRouter } from "./routers/warrior";
import { arenaRouter } from "./routers/arena";
import { hallOfFameRouter } from "./routers/hall-of-fame";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({ // to jest do korzystania z formularzy
    extended: true,
}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: ????,
}));
app.set('view engine', '.hbs');

// TUTAJ SA SCIEZKI
app.use('/', homeRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-of-fame', hallOfFameRouter);



// app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening oh http://localhost:3000')
});

