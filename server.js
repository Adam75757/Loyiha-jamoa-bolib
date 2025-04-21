import express from "express";
import servers from "./src/database/controllaer/router/users.js";


let server = express();


server.use(express.json());


server.use("/", servers);



server.listen(1207, () => {
    console.log("Server is running at http://localhost:4675");
});
                                                            