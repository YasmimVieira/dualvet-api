import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on("erro", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express();

app.use(function(res, next) { 
    res.setHeader('Access-Control-Allow-Origin', process.env.PORT);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
    express.json()
})

routes(app);

export default app; 