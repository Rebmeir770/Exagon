import express, {Express, Request, Response} from "express"
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";


// express declation
const app = express();


dotenv.config();




// using app
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())

// import router
app.get("/", (req: Request, res: Response) =>{
    res.send(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})


// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})


