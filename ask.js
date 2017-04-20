var questions = [
    "What is your name?",
    "What is your hobby?",
    "What is your preferred programming language?"
];

var answers = [];

function ask(i){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write("  >  "); 
}
ask(0);

//event listener on data

process.stdin.on('data', function(data){
    //line 19 will echo input to the console
    //process.stdout.write('\n' + data.toString().trim() + '\n');
    //line 21 will save your input to the answers array
    answers.push(data.toString().trim());
    if (answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`)
    process.stdout.write("\n\n\n\n");
    
});
