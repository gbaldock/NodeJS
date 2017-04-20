//create an object of readline
var readline = require('readline');
//create a readline instance that will ask a question and wait for and log the reply
var rl = readline.createInterface(process.stdin, process.stdout);
var person = {
    name: '',
    sayings: []
    
};

rl.question("What is the name of the person? ", function(answer){
    person.name = answer;
    rl.setPrompt(`What would ${person.name} say?`); //set the prompt
    //console.log(answer);
    rl.prompt(); //display the prompt
    
    rl.on('line', function(saying){
        
        person.sayings.push(saying.trim());
        if(saying.toLowerCase().trim() === 'exit'){
            rl.close();
        }else{
            rl.setPrompt(`What else would ${person.name} say? ('exit' to leave)`)
            rl.prompt(); 
        }
        
        //console.log(saying.trim());
    });
    
});

//listener for close event on the read line instance
rl.on('close', function(){
    console.log("%s is a real person who says %j", person.name, person.sayings);
    process.exit();
});