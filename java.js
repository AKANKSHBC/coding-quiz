var questions = [

    {
            "question":"1) What is the best case time complexity of deleting a node in a Singly Linked list?",
            "options":["A) O (n)", "B) O (n2)", "C) O (nlogn)", "D) O (1)"],
            "answer":"504"},
          
    {
            "question":"2. Which of the following real world scenarios would you associate with a stack data structure?",
            "options":["a) piling up of chairs one above the other", "b) people standing in a line to be serviced at a counter", "c) offer services based on the priority of the customer", "d) tatkal Ticket Booking in IRCTC"],
            "answer":"501"}

    ];


var bvnm = document.querySelectorAll(".grid-item");
var valueB = 0;


function questionFunction(j) {

        var pquestion1 = document.getElementById('pquestion1');
        pquestion1.innerHTML = questions[j].question;

        var butngrop = document.getElementById('butngrop');
        var buttonOptions = [];

        for( var i=0; i < 4; i++) {
            buttonOptions.push(butngrop.children[i]);
        };

        for(var i = 0; i < 4; i++) {
            buttonOptions[i].innerHTML = questions[j].options[i];
            buttonOptions[i].id = j+100;

            if(buttonOptions[i].classList.contains("btn-success")) {
                buttonOptions[i].className = "btn btn-outline-dark col-6 ms-5 btn-lg text-start ps-5";
            };
        };

        var submitButton = document.getElementsByName("submitBut");
    
        for( var i=0; i<1; i++) {
            submitButton[i].id = j+200;
        };

        console.log(submitButton);

};

function answerFunction(k,idn) {

    

    ld = idn.id;

    if(k == questions[ld-100].answer ) {
        idn.className = "btn btn-success col-6 ms-5 btn-lg text-start ps-5";
        ld = -1;
    } else console.log("fail" + ld);
};

function checkAnswer(n) {

    ohh = n.id;
    console.log("ohh1" + ohh);

    var mainbutton = document.getElementById(ohh-200);
    //console.log(mainbutton)
    mainbutton.style.visibility = "hidden";

    console.log("ohh2" + ohh);
};

//console.log(clm);




//console.log(questions.q1.question);


console.log(bvnm);



/*

var ld = -1;
    var ks = document.getElementsByName("abc");
    //console.log(ks);
    
    
    
    ld = idn.id;

    if(k == questions[ld].answer ) {
        idn.className = "btn btn-success col-6 ms-5 btn-lg text-start ps-5";
        ld = -1;
    } else console.log("fail" + ld);

    if (ld == -1) {
        for(var i=0; i<4; i++) {
            ks[i].className = "btn btn-outline-dark col-6 ms-5 btn-lg text-start ps-5";
        };
    };

*/