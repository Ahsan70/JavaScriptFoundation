'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
orderPasta:function(ing1,ing2,ing3){
console.log(`Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`);
},
  order:function(staterIndex,mainIndex){
    return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]];
  },
  openingHours:{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
      open:0,
      close:24,
    },
  }
};

const {name, openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

const{name:restaurantName,openingHours:hours,categories:tags}=restaurant;
console.log(restaurantName,hours,tags);

const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

let a=111;
let b=999;
const obj={a:23,b:7,c:14};
({a,b}=obj);

// console.log(a,b);

const {
  fri:{open,close},

}=openingHours;
// console.log(open,close);
// const [starter,mainCourse]=restaurant.order(2,0);
// console.log(starter,mainCourse);
const arr =[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr =[1,2,...arr];
console.log(newArr);

console.log(1,2,7,8,9);
const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

// Copy array
const meinMenuCopy=[...restaurant.mainMenu];

// Join 2 arrays

const reMenu =[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(reMenu);

const str ='Jonas';
const letters=[...str,'','S.'];
// console.log(letters);
// console.log(...str);


const ingrediants=
[
  prompt("Let's make pasta ! Ingrediant 1?"),
prompt("Let's make pasta ! Ingrediant 2?"),
prompt("Let's make pasta ! Ingrediant 3?")];

// console.log(ingrediants);

restaurant.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2]);
restaurant.orderPasta(...ingrediants);


const [aw,bw,...others]=[1,2,3,4,5];
// console.log(aw,bw,others);

const [pizza,,risotto,...othersFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(pizza,risotto,othersFood);

const {sat,...weekdays}=restaurant.openingHours;
// console.log(sat);


const menuFor =[...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menuFor)
{
  console.log(item);
}

