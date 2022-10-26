import { Router } from "express";
import ejesControllers from "../controllers/ejes.controllers";

class EjeRouter {
    public router : Router;

    constructor(){
        this.router.get("/lista",ejesControllers.getEje)
    }
}

export default new EjeRouter().router;

