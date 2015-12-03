//require express 
var express = require( "express" );

//assign express variable
var app = express();

//set static folder for assets
app.use( express.static( __dirname + '/public'));


//Added a route to point to the posts.html page
//whenever user navigates to <host>:<port>/posts/<title of the post>

//Problem is when I test it out to go to post/<type whatever name>
//I receive this message in the console "Uncaught SyntaxError: Unexpected token <"
//I know what this message means, but I don't know why I get it.

app.get("/post/*", function(req, res, next){
   res.sendFile( __dirname + "/public/post.html");
});

//Added a route to the 404 html page
app.use("*",function(req,res){
  res.sendFile(__dirname + "/public/404.html");
});


//Listening to post and host 
app.listen(process.env.PORT || '0.0.0.0', function (){
   
   var port = process.env.PORT;
   var host = process.env.IP;
   
   console.log  ("Listening on %s:%s", host, port);
});