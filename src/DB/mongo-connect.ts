import mongoose, { connect } from "mongoose";
class DB{
    async  mongooseConnect(connStr:string) {
        await mongoose.connect(connStr, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        console.log("Mongo DB connection successful")
      }
}
export const mongo=new DB();




