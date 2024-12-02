// var firendsAge = [15, 17, 18, 23, 24, 25, 28, 19, 7]
// console.log(firendsAge);

// firendsAge[9]=3;
// console.log(firendsAge);

// console.log(firendsAge[3]);

// var postition = firendsAge.indexOf(18);
// console.log(postition);
//27 arry modde nai tai index -1 dekhabe//
// console.log(firendsAge.indexOf(27));

//-----arry push,pop,length------//

// var age = [2, 3];
// console.log(age);
// console.log(age.length);

// age.push(15);
// age.push(23);
// console.log(age);
// console.log(age.length);

// age.pop();
// console.log(age);

// var tealine = ['kalam', 'balam', 'salam','forhad','mehedi','tomal','md'];

// tealine.push('jamal');
// console.log(tealine);

// tealine.pop('jamal');
// console.log(tealine);

//  tealine.shift();
//  console.log(tealine);

// tealine.unshift('palam');
// console.log(tealine);

// var part = tealine.slice(2);
// console.log(part);

// part = tealine.slice(2, 5);
// console.log(part);

// let items = [250, 300,500,800];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);

//     let offer = val/10;
//     items[i]=items[i]-offer;  //after 10% discount
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// console.log('each items after 10% discount:', items);

// let foodItems = ["potato","apple","litchi"];
// console.log(foodItems);
// console.log(foodItems.toString());  //array convert to the to string

// ----joins multiple arrays and returns result------
// let nam = ["forhad", "mehedi","hasan"];
// let dcnam = ["topal", "abdulla"];
// let nam2 = ["naiyem","imtaje"];
// let adjustNam = nam.concat(dcnam);
// console.log(adjustNam);
// console.log(nam);
// console.log(dcnam);

// let allNam = nam.concat(dcnam, nam2);
// console.log(allNam);

let arr = [100,150,200,50,500,1000];
// arr.splice(2,2,101,102); //(index,number of delete element,first element,second element)

//------no delete array just add element
// arr.splice(2,0,101);

//----delete element number 50
// arr.splice(3,1);
arr.splice(3,1,101);
console.log(arr);