var exp= require("express");
var fs = require("fs");
var app = exp();
app.use('/assets',exp.static('assets'));
app.get('/',(req,res)=>{
res.sendFile(__dirname + '/index2.html');
})
app.put('/update',(req,res)=>{
fs.readFile('track.txt', function(err, data) {
	data = parseInt(data);
	data = data + 1;
	console.log("added");
fs.writeFile('track.txt',data, function(err) {
 if(err){
 	throw err;
 }
  })
  })

})
var port =process.env.PORT || 3000;
app.listen(port,()=>{
	console.log(`listening to port ${port}`);
});