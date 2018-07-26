let list = [
    { name: "Jesse", age: 25 },
    { name: "Dana", age: 21 },
    { name: "Malena", age: 19 },
    { name: "Shayna", age: 20 },
    { name: "Sherry", age: 50 }

]




list.forEach(checkAge(name,age), {
    checkAge(name,age){
        if (name,age < 21){
            console.log(""+name+" is not yet 21")
        }else {
            console.log(""+name+"is already 21")
        }
    }

  });

for(i=0; i < list.length; i++){
    checkAge(name,age)
    }