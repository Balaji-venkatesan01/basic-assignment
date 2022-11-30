function myfun() {
    const person = {
        fname: "bala",
        lname: "ji",
        age: 22,
    };
    document.getElementById("function").innerHTML = (person.fname + " " + "  is " + person.age + "years old.").toUpperCase();
}
function forfun() {
    const person = {
        fname: "john",
        lname: "deo",
        age: 43,
    }
    let text = "";
    for (let x in person) {
        text += person[x] + " ";
    }
    document.getElementById("class").innerHTML = text;

}

function clasess() {
    class Car {
        constructor(age, year) {
            this.age = age;
            this.year = year;
        }
    }
    const myCar = new Car(20, 1994);
    document.getElementById("simple").innerHTML = myCar.age + " " + myCar.year;
}

/* add a new class */
function clas() {
    class Person {
        constructor(model, year) {
            this.model = model;
            this.year = year;
        }
        age() {
            let date = new Date();
            return date.getFullYear() - this.year;
        }
    }
    const myPerson = new Person("re", 2015);
    document.getElementById("add_new").innerHTML = myPerson.age() + "  " + "year is old";

}
function myopt() {
    class car {
        constructor(brand) {
            this.carname = brand;
        }
        get cname() {
            return this.carname;
        }
        set cname(x) {
            this.carname = x;
        }
    }

    let myCar = new car("ford");
    document.getElementById("demo").innerHTML = myCar.cname;
}

