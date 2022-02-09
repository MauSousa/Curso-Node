import express, { Application } from 'express';
import usersRoutes from '../routes/user'

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.routes();
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
