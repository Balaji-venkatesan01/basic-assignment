function myfun(){
    alert("next start arrow function");
}
function arrow(){
    let hello="";
    hello = val => "Hello"+ ' '+val;
    document.getElementById("arrow").innerHTML=hello("Balaji");
}
