import { Router } from "express";
import indicadoresControllers from "../controllers/indicadores.controllers";
class IndicadorRouter { 
    public router : Router;

    constructor(){
        this.router = Router(); 
        this.router.get('/lista', indicadoresControllers.getIndicadores);
        this.router.post("/addindicadores", indicadoresControllers.createIndicador);
        // this.router.put("/setmetricas", indicadoresControllers.setMetricas);
        // this.router.put("/setaprobado/:id", indicadoresControllers.setAprobado);
        // this.router.put("/setpeticion/:id" , indicadoresControllers.setPeticion);
        // this.router.put("/deleteindicadores/:id",   indicadoresControllers.deleteIndicador);     
        this.router.get("/test", indicadoresControllers.getTesteo);
        
    }
}

export default new IndicadorRouter().router;