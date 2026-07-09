/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let a = Math.floor(Math.random()*3+1);
let b = Math.floor(Math.random()*3+1);
let c = Math.floor(Math.random()*3+1);
let adjectives = {
    1 : "Crazy" ,
    2 : "Amazing" ,
    3 : "Fire" 
}
let shop = {
    1 : "Engine" ,
    2 : "Foods" ,
    3 : "Garments"
}
let word = {
    1 : "Bros" ,
    2 : "Limited" ,
    3 : "Hub"
}
console.log(`${adjectives[a]} ${shop[b]} ${word[c]}`);