import  {env} from "./config/config.env"
import http from "http"
import app from './app'
const port=env.PORT
const server=http.createServer(app)
server.listen(port,()=>{console.log('server is running on port',port)})