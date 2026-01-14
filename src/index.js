import dotenv from "dotenv";
dotenv.config({
    path:"./env"
});
import DB_CONNECT from "./db/db_connection.js";
DB_CONNECT()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    }); 
})
.catch((error)=>{
    console.log("Error in DB Connection",error);
})