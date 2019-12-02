var guess1=prompt("Guess membrane 1",1);
var guess2=prompt("Guess membrane 2",1);
var  guessnum1=parseInt(guess1);
var guessnum2=parseInt(guess2);
var totalnum=guessnum1+guessnum2;

console.log(totalnum);

var membrane1=Math.random();
var membrane2=Math.random();

if(membrane1<1){
    
membrane1=(membrane1+1)*6;
membrane2=(membrane2+1)*6;
membrane1=Math.floor(membrane1);
membrane2=Math.floor(membrane2);

 if(membrane1>6){
    membrane1= membrane1%6;

 }
 if(membrane2>6){
    membrane2= membrane2%6;

 }
 var membraneTotal=membrane1+membrane2;
 console.log(membraneTotal);
};

if(membraneTotal==totalnum){
    console.log('congrats');
}else{
    console.log(membraneTotal-totalnum);
}
document.write("Your guess: <br>");

for(counter1=0; counter1<totalnum;counter1++){
    document.write(" $ ");
}
document.write("<br> Total point: <br>");

var counter2=0;
while(counter2<membraneTotal){
document.write("*");
counter2++;
}
