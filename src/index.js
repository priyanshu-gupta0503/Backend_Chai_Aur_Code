//require('dotenv').config({path:'./env'})   this is correct  but it reduces out code consistency
import dotenv from "dotenv"
import connectDB from "../db/index.js";
dotenv.config({path:'./env'})
import {app} from "app.js"
//connectDB returns a promise so we have to handle that with then and catch
connectDB().then(()=>
{
  app.on("error",(error)=>
    {
      console.log("Error",error);
      throw error
      
    })
app.listen(process.env.PORT||8000,()=>
{
  console.log(`Server is running at port ${process.env.PORT}`)
})


}).catch((error)=>
{
  console.log("MongoDB connection error!!",error);
  
})

//Database coonection should always be the first thing in our project so we use IIfe
//An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after it's defined. This allows for creating private scopes, preventing variable pollution of the global scope, and encapsulating code for better organization
//we use semicolon before iife because it may happen that sometimes u forgot to add semicolon in the previous lime of code so make it a practice 
//as this is a database connection so async await and try catch are necessary

//This was the first approach
// import express from "express";
// const app=express()
// ;(async()=>
// {
// try {
//   await mongoose.connect(`${process.env.MongoDB_URL}/${DB_Name}`)
  // app.on("error",(error)=>
  // {
  //   console.log("Error",error);
  //   throw error
    
  // })

//   app.listen(process.env.PORT,()=>
//   {
//     console.log(`App is listenig on ${process.env.PORT}`);
    
//   })
  
// } catch (error) {
//   console.error("Error",error)
//   throw error
// }
// })()












//Without rerunning the server we do not see anythingbecause if we ever learn from something called react there is a concept called hot reload in that the server gets reloaded of its own because of its hot reloading feature but here also here are also there are some packages which we can use but initially we will not use it and we will just be reload the server manually

/*I'll explain the key differences between CommonJS (require) and ES Modules (import/export):

1. **Syntax**:
   - CommonJS uses `require()` and `module.exports`:
   ```javascript
   const express = require('express');
   module.exports = someFunction;
   ```
   - ES Modules uses `import` and `export`:
   ```javascript
   import express from 'express';
   export default someFunction;
   ```

2. **Loading**:
   - CommonJS loads modules synchronously (at runtime)
   - ES Modules loads modules asynchronously (at parse time)

3. **File Extensions**:
   - CommonJS: `.js` files are treated as CommonJS by default
   - ES Modules: Need either `.mjs` extension or `"type": "module"` in package.json

4. **Top-level await**:
   - CommonJS: Doesn't support top-level await
   - ES Modules: Supports top-level await

5. **Browser Support**:
   - CommonJS: Not natively supported in browsers
   - ES Modules: Natively supported in modern browsers

6. **Static Analysis**:
   - CommonJS: Dynamic imports (can use variables in require)
   - ES Modules: Static imports (imports must be at top level, can't use variables)

In your case, since you're using Node.js, both approaches work fine. CommonJS is the traditional Node.js way, while ES Modules is the more modern approach that aligns with browser JavaScript. The choice often depends on your project's needs and team preferences.

Would you like me to show you how to use either approach in your code?

Env file is used to store the environment variables
it contains the port number and the database connection string
some things are not needed to be shown in the code so we use env file to store them

 What type of database you are going to use likepostpress or my sequel first every company goes for data on like what will be the structure of data so data modeling is very important at the speech experience experts useit or it is a dot file so first we have to structure the data and then we have to go for the database

 https://app.eraser.io/workspace/tZVJvbdigc2aY1B5LCHi
 https://www.datensen.com/moon-modeler-for-databases.html


 Mongoose help  u in data modeling and data validation

 first we make a models folder and then we can name it as  user.js

 but we the better practice is to use the  name user,models.js
 this denotes a standard practice

 this is the vasic command to make a schemma 
 import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({});

export const User = mongoose.model('User', userSchema);

The schema name we have given here is User but when it goes in momgodb it converts it into loewer case and plural users
 

import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username:String
});

export const User = mongoose.model('User', userSchema);

we can write the code this way but what would be better

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,

    now this is a better way to do this 
    required true as u have done here so now u dont have to mange that thing in the controllers

    import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

{ timestamps: true } this is a very common type of field that mongoose provide it of its own and it has two uses createdAt() and updatedAt()
 https://mongoosejs.com/docs/timestamps.html


 import mongoose from 'mongoose';

const todoSchema = new mongoose(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ],
  }, //Array of Dub ToDos
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoSchema);


type: mongoose.Schema.Types.ObjectId,

this is use to give the refrence to other model 
after this we write 
ref:User

type:moongoose.Schema.Types.ObjectId
  },
*/


/*
From this part we will start we will start making Project from the scratch so first we have to make a basic model 
this is the limk of it https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
*/ 