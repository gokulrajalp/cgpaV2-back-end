const express=require('express');
const cors=require('cors');


const app = express()
const port= process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const nodemailer = require('nodemailer');



app.post("/mail", (req,res)=>{
    const {tomail,regNo,password} = req.body;
    let mailTranspoter = nodemailer.createTransport({
        service : "gmail",
        auth:{
            user:"subscribe.to.gokulrajalp@gmail.com",
            pass:"czitwlcxqoecvieh"
        }
    })
    
   
    
    let details = {
        from : "subscribe.to.gokulrajalp@gmail.com",
        to:`${tomail}`,
        subject:`Password for ${regNo}`,
        text :`Your password for ${regNo} is ${password} to login into CGPA Calculater`
    }
    
    mailTranspoter.sendMail(details,(err)=>{
       
        if(err){
            res.send({message: `Try again after sometimes or Check whether you given the correct Email ID... or Contact the admin`});
        }else{
            res.send({message: `Password is sent to your regesterd Email ID`});
        }
    })




})










app.get("/",(req,res)=>{
    res.send("app is working")
});

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error : ${err}`);
    }
    console.log('Server is running on port',port);
});