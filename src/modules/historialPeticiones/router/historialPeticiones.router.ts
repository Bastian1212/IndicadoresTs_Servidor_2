import { Router } from "express";
import { HistorialPeticiones } from "../../../entities/historialpeticiones/historialPeticiones";
import historialPeticionesControllers from "../controllers/historialPeticiones.controllers";

class HistorialPeticionesRouter {
    public router : Router;

    constructor(){
        this.router = Router();
        this.router.get("/lista"  );
    }
}

export default new HistorialPeticionesRouter().router;