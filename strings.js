
var testString, testee;
var reverse = [];
var answerPlace = document.getElementById("answer");




document.querySelector('#enter').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        testString = event.target.value;
        testee = event.target.value;
        var test = reversal(testString);
        console.log(test);
        answerPlace.innerHTML += "Reverse:" + test + "</br>";
        var testString2 = alphabits(testString);
        console.log(testString2);
        answerPlace.innerHTML += "Alphabetical:" + testString2 + "</br>";
        palindrome(testee);
        
    }
});

function reversal(testString) {
    for (var i = 0; i <= (testString.length-1); i++){
        //console.log(testString[testString.length - i]);
        reverse.push(testString[(testString.length -1) - i]);
        console.log(reverse);
    }
    return reverse;
}

let alphabetical = [];

function alphabits(testString) {

    for (var i2 = 0; i2 <=testString.length-1; i2++){
        alphabetical.push(testString[i2]);
        console.log(testString[i2]);
    }
    alphabetical.sort(function(a,b){
            return a - b;
        });
        console.log(alphabetical);
        alphabetical.sort();
        return alphabetical;
}

function palindrome(testString) {
    console.log(testString);
    console.log("The length of the word:",testString.length);
    if ((testString.length % 2) ===  1 ){
        
        let index = Math.floor(testString.length / 2);
        console.log("The index should be about half...", index);
        for (var t = 0; t < index; t++){
            if ((t < index) && (t !== 0)){
                console.log(`This is the letter at position ${index+t}:`, testString[index+t]);
                console.log(`This is the letter at position ${index-t}:`,testString[index-t]);
                console.log(`${testString[index+t]} ${testString[index-t]}`);
                console.log("This is a palindrome.");
                answerPlace.innerHTML += "This is a palindrome." + "</br>";
            }

        }
    }
    else{
        answerPlace.innerHTML += "This is not a palindrome." + "</br>";
    }
}


