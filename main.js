
function count(str) {
return str.split(" ").length;


}
function getCount(str) { 
    return (str.match(/[aeiou]/g) || []).length; 
}

let user1 = [1,3,5,9];
let user2 = [2,3,6,9];
let user = [...new Set(user1.concat(user2))];
console.log(user);


let sum = 0;

for (let i = 0; i < user.length; i++) {
    sum += user[i];
}
console.log(sum);