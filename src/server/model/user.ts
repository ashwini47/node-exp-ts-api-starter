import bcrypt from 'bcrypt';
import { model, Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  comparePassword(toCompare, done):boolean

}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

//https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
UserSchema.methods.comparePassword =function (this:IUser, toCompare, done) {
  bcrypt.compare(toCompare, this.password, (err, isMatch) => {
    if (err) done(err);
    else done(err, isMatch);
  });
};
//Middleware with typescript
//https://thecodebarbarian.com/working-with-mongoose-in-typescript.html
UserSchema.pre<IUser>('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) return next(hashErr);  
      user.password = hash;
      next();
    });
  });
});


export const User: Model<IUser> = model("User", UserSchema);





/*
 * let connStr:string="mongodb://localhost:27017/test";
mongo.mongooseConnect(connStr);

(async function () {
    const user: IUser = await User.create({
        username: "bill@microsoft.com",
        password: "Bill",
      });

      console.log("Done", user.username);
      const user1: IUser = await User.findOne({ username: "bill@microsoft.com" });
      console.log("Done find query", user1.username);
      const users: Array<IUser> = await User.find({
        username: "bill@microsoft.com",
      });


      console.log("Done find  users query", users);

})();

 */