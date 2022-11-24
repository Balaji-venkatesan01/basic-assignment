
function loop() {
    let text="";
    for (let i = 0; i < 10; i++) {
      if (i==6){break;}
      if (i===3){continue;}
      text += "The number is " + i + "<br>";
    };
    document.getElementById("for-loop").innerHTML=text;
  }
  function forin() {
    let number=[10,20,30,40,50];
    txt="<ul>";
    for (let x in number){
      txt+="<li>"+ number[x]+"</li>";
    };
    txt += "</ul>";
    document.getElementById("in-loop").innerHTML=txt;
  }
  function Do_while () {
    let txt="";
    let i=0;
    do{
      txt += "<br>The numbers are"+" " + i;
      i++;
    }
    while(i < 5);
    document.getElementById("do-while").innerHTML=txt;
  }
  function maping() {
    let fruits =new Map([
      ["apple",95],
      ["orange",80],
      ["graps",50],
      ["bannan",10],
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
    document.getElementById("map").innerHTML=fruits.get("apple") +"<br>"+ fruits.get("lemon")+"<br>"+ fruits.size+"<br>"+fruits.has("bannana")+"<br>"+fruits.has("lemon")+"<br>"+text+"<br>"+txt;
  }
  
  function set() {
   const letters = new Set(["a","b","c","d","16"]);
   letters.add("e");
   letters.add("e");
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
  function ternaryoperator() {
    let age=18;
    let result=
    (age >= 18) ? "ur eligble to website" : "ur not eligble to website";
    document.getElementById("ternary").innerHTML=result;
  }