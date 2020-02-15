let names = ['Milena', 'Marija', 'Ana', 'Bojan', 'Ana', 'David', 'Sofija', 'Sofija', 'Milena'];


// Count the number of each element in a given array

let obj = {};
for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (obj[names[i]] + 1) || 1;
}
console.log(obj);

//Expected Output { Ana: 2, Marija: 1, Bojan: 1, David: 1, Sofija: 2, Milena: 2}

// Count the number of one element in an array

console.log(names.filter(function (x) {
  return x == 'Ana';
  }).length)

//Expected Output 2
