import BaseRouter from "./Router.js"

export default class SessionsRouter extends BaseRouter{

    init(){

        this.post("/register",["NO_AUTH"], (req, res)=>{
            res.sendSuccess()
        })

        this.post("/login", ["ADMIN"], (req, res)=>{
            
            res.sendSuccess("Logged In")
        })
    }
};
