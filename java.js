var questions = [

    {
            "question":"1) What is the best case time complexity of deleting a node in a Singly Linked list?",
            "options":["A) O (n)", "B) O (n2)", "C) O (nlogn)", "D) O (1)"],
            "answer":"D) O (1)"},
          
    {
            "question":"2. Which of the following real world scenarios would you associate with a stack data structure?",
            "options":["a) piling up of chairs one above the other", "b) people standing in a line to be serviced at a counter", "c) offer services based on the priority of the customer", "d) tatkal Ticket Booking in IRCTC"],
            "answer":"a) piling up of chairs one above the other"}

    ];


var bvnm = document.querySelectorAll(".grid-item");
var valueB = 0;


function myFunction(j) {

        var pquestion1 = document.getElementById('pquestion1');
        pquestion1.innerHTML = questions[j].question;

        var butngrop = document.getElementById('butngrop');
        var buttonOptions = [];

        for( var i=0; i < 4; i++) {
            buttonOptions.push(butngrop.children[i]);
        };

        for(var i = 0; i < 4; i++) {
            buttonOptions[i].innerHTML = questions[j].options[i];
        };

};





//console.log(questions.q1.question);
//console.log(buttonOptions);

console.log(bvnm);
