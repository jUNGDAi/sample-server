const fs = require('fs');
///// อันนี้เป็นการทำงานแบบ Event Driven //////
//// เมื่อมีอะไรกระทบ มันค่อยกระทำ จะไม่ทำตลอด
fs.watchFile('message.text', function(curr, prev){
	fs.readFile('message.text', 'utf8', function(err, data){
	  if (err) throw err;
	  console.log(data);
	});
});
