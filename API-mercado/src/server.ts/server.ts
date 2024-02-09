import express, {Express, Request, Response} from "express"
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();


// express declation
// const app = express();
const server: Express = express()







// using app
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(helmet())

// import router
server.get("/", (req: Request, res: Response) =>{
    res.send(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})


// listen
const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=> {console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})


