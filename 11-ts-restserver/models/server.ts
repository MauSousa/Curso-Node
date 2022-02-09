import express, { Application } from 'express';
import usersRoutes from '../routes/user'
import cors from 'cors';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {

    this.app = express();
    this.port = process.env.PORT || '8000';
    this.middlewares();
    this.routes();
  
  }

  // TODO Connect to db

  middlewares(){
    
    // CORS
    this.app.use( cors() );
    
    // body parsing
    this.app.use( express.json() );
    
    // Public directory 
    this.app.use( express.static('public') );
  
  }

  routes() {
    this.app.use( this.apiPaths.users, usersRoutes);
  }

  listen(): void {
    this.app.listen( this.port, () => {
      console.log('Server running on port', this.port);
    })
  }

}

export default Server;
