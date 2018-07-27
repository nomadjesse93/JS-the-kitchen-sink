//step 5:name variable
let myname = "Jesse"
console.log(myname)

//step 6:states constant
const statesOfAmerica = "50"
console.log(statesOfAmerica)

//step 7:sum of 4 and 5
let add = 4 + 5
console.log(add)

//step 8:check if name start with "L" to "Z" ;
let name = (String.fromCharCode(74, 101, 115, 115, 101))

if (name < String.fromCharCode(76)) { 
    alert("Next!")
} else {
    alert("Back of the line!")
}


console.log(name)



//step 10
function sayHello() {
    console.log("Hello World!")
}

sayHello()

//steps 12,13 check if age is 21 and over
function checkAge(name,age) {
    if (age < 21) {
        return alert("Sorry " + name + " you're to young to enter this site.");
    } else {
        return (null);
    }
}
let internetcheck = [
{name:"Charles", age:21},
{name:"Abby", age:27},
{name:"James", age:18},
{name:"John", age:17}
]
for(i=0; i < internetcheck.length; i++){
checkAge(internetcheck[i].name, internetcheck[i].age)
}
//step 14 array of my favourite vegetables
let favoriteVegetable = ["carrots, corn, cucumbers, peas, beats"];

// step 15, console log loop of favorite veggies
for (var i = 0; i < favoriteVegetable.length; i++)
    console.log(favoriteVegetable)

//step 16,17 array of objects sorted by for loop that calls checkAge function
    let list = [
        { name: "Jesse", age: 25 },
        { name: "Dana", age: 21 },
        { name: "Malena", age: 19 },
        { name: "Shayna", age: 20 },
        { name: "Sherry", age: 50 }
    
    ]
    
    for(i=0; i < list.length; i++){
        checkAge(list[i].name, list[i].age)
        }
    

    //steps 18-20 getLength function finds length of hello world variable, if statement sorts result into 2 possible console logs
        function getLength(anyword) {
            return anyword.length;
            };
            
            let result = getLength("Hello world");
            
            console.log(result)
            
            if (result % 2 === 0){
                console.log ("The world is nice and even");
            
            } else {
                console.log ("The world is an odd place!")
            }    

