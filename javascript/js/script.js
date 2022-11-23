/* let x=4;
let y=5;
z=x+y;
console.log(z); */

/* function consoling(){
    console.log("1st function")
}

var testing1=document.getElementsByClassName("testing1");
testing1 = consoling(); */

function loop() {
    let text="";
    for (let i = 0; i < 10; i++) {
      if (i==6){break;}
      if (i===3){continue;}
      text += "The number is " + i + "<br>";
    };
    document.getElementById("for_loop").innerHTML=text;
  }
  
  function for_in() {
    let number=[10,20,30,40,50];
    txt="<ul>";
    for (let x in number){
      txt+="<li>"+ number[x]+"</li>";
    };
    txt += "</ul>";
    document.getElementById("in_loop").innerHTML=txt;
  }
  function Do_while () {
    let txt="";
    let i=0;
    do{
      txt += "<br>The numbers are"+" " + i;
      i++;
    }
    while(i < 5);
    document.getElementById("do_while").innerHTML=txt;
  }
  
  function maping() {
    let fruits =new Map([
      ["apple",210],
      ["orange",90],
      ["bannana",10],
      ["graps",100],
    ]);
    fruits.set("lemon",5);
    fruits.delete("bannana");
    text="<ul>"
    fruits.forEach(function(value,key){
      text +="<li>"+ key +"="+ value+"</li>"  
    })
    text +="</ul>";
    let txt="";
    for(let x of fruits.entries()){
      txt +=x + "<br>";
    }
    document.getElementById("maps").innerHTML=fruits.get("apple") +"<br>"+ fruits.get("lemon")+"<br>"+ fruits.size+"<br>"+fruits.has("bannana")+"<br>"+fruits.has("lemon")+"<br>"+text+"<br>"+txt;
  }
  
  function sets() {
   const letters = new Set(["a","b","c","d","12"]);
   letters.add("e");
   / if the same values is retur its can't be count the values of them in set functions /
   letters.add("e");
   / for each in set /
   txt="";
   letters.forEach(function (values){
    txt += values+" <br>";
   })
   text1 = "";
   for (const x of letters.values()){
    text1 += x +"<br>";
   }
   document.getElementById("set").innerHTML=letters.size +"<br>"+txt+" "+letters.values()+"<br>"+text1;
  }
  / ternary operator /
  function ternary_operator() {
    let age=18;
    let result=
    (age >= 18) ? "ur eligble to website" : "ur not eligble to website";
    document.getElementById("ternary").innerHTML=result;
  }