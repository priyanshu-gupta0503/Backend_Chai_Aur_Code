import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
//app.use method is used to configure middlewares  read the docs to know more about this 

//Data can come from anywhere so we are preparing for iit like url anf jsom and body like forms and jsom which is coming can also come many in numbers we hace to put some restrictions in middlewares
//so for that we do some configurations and set middlewares and all

app.use(express.json({limit:"16kb"}))//depends on server power
//earlier express could not take json so easily so they were using body paraser and something but now it is used directly so we dont need it but maybe in some old code it may bethere
//multer is used for file submit

//Now for url based submission sthere is a cathcj that whenever  we use url it reaplaces some stering in it and make it encoded and so on like  spce as %20 so for that we use
app.use(express.urlencoded({extended:true,limit:"16kb"})) //by extended we can put objects in objects

//for storing some assets such as images or files like pdf,favicon and I want to store on my server so for that we do this 
app.use(express.static("public")) //public is just the name of the folder

//cookie parser is just use to that from myserver I can take user cookies and apply cred operations on it
//Because there is a way by which u can keep secure cookies in the user brwser anf serber can only reads those cookies and it can only remove

app.use(cookieParser())









export {app}