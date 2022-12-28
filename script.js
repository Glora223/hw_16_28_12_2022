const database = [
    {name: "John", country: "Israel", age: 99, isMarried: true},
    {name: "Mary", country: "Israel", age: 29, isMarried: false},
    {name: "Bill", country: "Belgium", age: 10, isMarried: false},
    {name: "Jane", country: "France", age: 30, isMarried: true},
    {name: "Hanna", country: "France", age: 9, isMarried: false},
    {name: "George", country: "Israel", age: 80, isMarried: true}
];
//Task-1
function whoIsMarried(array){
    const res=database.filter(function (value){
        if(value.isMarried===true)
          return database.values();
        });

    console.log(("Task 1"),res);
}

//Task 2
function AgeSort(array) {
    const res=database.sort(function (a,b) {
        return a.age-b.age;

    })
    console.log(("Task 2:") ,res);
}
//Task 3
function avgAge(array){
    const res=database.reduce(function (accum,value,index,array) {
      accum=+value.age;
      if(index===array.length-1){
        return   accum/array.length;
      }else{
        return accum;
      }
    })
    console.log(("Task:")+res);
}
//Task 4
function statCountry(array) {
    const countryStat = database.reduce(function (acc, value) {
        acc[value.country] = (acc[value.country] || 0) + 1
        return acc;

    }, {});
    console.log(countryStat);
}
//Task 5
function  totalSort (array) {
   const printMarried=database.filter(function (value) {
       if(value.isMarried===true){
           database.sort(function (value1,value2) {
               return value1.age-value2.age;
           })

           return database.values();
       }
   })
    const notMarried=database.filter(function (value) {
        if(value.isMarried===false){
            database.sort(function (value1,value2){
                return value1.age-value.age;
            })
            return database.values();
        }
    })
    console.log(("Married:"),printMarried);
    console.log(("Not married:"),notMarried.reverse());
}



//Task 6
const removeInput=document.getElementById('remove_user');
const spanRemove=document.getElementById('spanRemove');
function removeUser(array){
    const res=database.splice(removeInput.value-1,1,...database)
    spanRemove.textContent=res;
    console.log(res);
}
