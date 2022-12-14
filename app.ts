import express, { Express, Request, Response, Router, Application } from 'express';

/////a
import dotenv from 'dotenv'
import UserModule from './src/modules/users/users.module';
import IndicadorModule from "./src/modules/Indicadores/indicadores.module";
import metasModule from './src/modules/metas/metas.module';
import ejesModule from './src/modules/ejes/ejes.module';
import historialPeticionModule from './src/modules/historialPeticiones/historialPeticion.module';

const  cors = require('cors')

class  App  {
  public server : Application;
  private port;

  constructor() {
    dotenv.config(); 
    this.port = process.env.PORT || 4000 ;
    
    console.log('initializing');


    this.server = express();
    this.middlewares();
    this.routes();

    this.server.listen(this.port, () => {
      console.log(`Server is running at https://localhost:${this.port}`);
    });
  }

  

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors())
  }

  routes() {
    this.server.use(UserModule.routes);
    this.server.use(metasModule.routes);
    this.server.use(IndicadorModule.routes);
    this.server.use(ejesModule.router);
    this.server.use(historialPeticionModule.router);
  }
}

    
export default new App();