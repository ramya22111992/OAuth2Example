const express=require('express');
const axios=require('axios');
const bodyParser=require('body-parser');
const cors=require('cors');
const config=require('./config');
const crypto=require('crypto');

const app=express();

app.use(bodyParser.json({type:"application/json"}));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors({
    origin:['http://localhost:4200','http://sub.localhost:4200'],
    methods:['GET','PUT','POST','DELETE'],
    credentials:true
}))


app.get('/AuthPage',function(req,res)
{
let state=crypto.randomBytes(16).toString('hex');
res.cookie('XSRF-TOKEN',state);
res.send({authUrl:"https://github.com/login/oauth/authorize?client_id="+config.CLIENT_ID+'&redirect_uri='+config.REDIRECT_URI+'&scope=read:user&allow_signup='+true+'&state='+state});
})

app.post('/getAccessToken',function(req,res)
{
let state=req.headers["x-xsrf-token"];
axios({
url:'https://github.com/login/oauth/access_token?client_id='+config.CLIENT_ID+'&client_secret='+config.CLIENT_SECRET+'&code='+req.body.code+'&redirect_uri='+config.REDIRECT_URI+'&state='+state,
method:'POST',
headers:{'Accept':'application/json'}
})
.then(function(resp)
{
    res.send(resp.data);
})
.catch(function(err)
{
    console.log(err);
    res.send(err);
})

})

app.get('/getUserDetails',function(req,res)
{
axios({
url:'https://api.github.com/user',
method:'GET',
headers:{'Authorization':req.headers["authorization"]}
})
.then(function(resp)
{
    res.send(resp.data);
})
.catch(function(err)
{
    res.send(err);
})
})




app.listen(config.APP_PORT,function()
{
    console.log("app listening on port 8080");
})