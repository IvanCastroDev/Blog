import express, {json, urlencoded} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logging from './configs/loggs.js';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();
const NAMESPACE = "SERVER"

app.use(cors());
app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
    logging.warn(
      NAMESPACE,
      `METHOD->[${req.method}], URL->[${req.url}] IP->[${req.socket.remoteAddress}]`
    );
  
    res.on("finish", () => {
      logging.warn(
        NAMESPACE,
        `METHOD->[${req.method}], URL->[${req.url}] IP->[${req.socket.remoteAddress}] STATUS->[${res.statusCode}]`
      );
    });
  
    next();
});

app.use('/', Router);

const PORT = 8000;


await Connection().then(() => 
    app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))
)