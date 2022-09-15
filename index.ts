import express, {Application} from 'express';
import dotenv from 'dotenv';
import db from './models/index';
import userRoute from './Routes/index';

class Server {
   private app:Application;
   private port : number;
   private api = {
      user : '/api/user',
      
   }

   constructor(){
     dotenv.config();
     this.app= express();
     this.port = parseInt(<string>process.env.PORT);
     this.Middlewares();
     this.Listen();
     this.DbInithialize();
     this.Routes();
     
   }

   public Listen() {
     this.app.listen(this.port,()=>{
         console.log(`Starting Server on Port --> ${this.port}`);
     })
   }
  
   public Middlewares() {
     this.app.use(express.json());
     this.app.use(express.urlencoded({extended : false}));
   }
   public DbInithialize() {
      db.sequelize.sync().then(()=> console.log('Database Connected Successful'));
   }
   public Routes () {
      this.app.use(this.api.user,userRoute);
    
   }
}

new Server();