var operator = process.argv[2];

//this code is not working for some reason
var name = process.argv.splice(2);
var entry = "";
for (var i = 0; i < name.length; i++) {
       entry = name[i];
       console.log(entry);
    }
