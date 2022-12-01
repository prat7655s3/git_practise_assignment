Hey Suraj 
// code for checking prime no N 
let c = 0;
for(let i =0 ; i<=N ; i++) {
 if((N%i)==0) {
c++;
}
if(c==2){
console.log("Prime");
}
else {
console.log("Not Prime");
}
// for Palindrome String str
let bag = "" ;
for(let i= (str.length)-1 ; i>=0 ; i++ ) 
{
bag = str[i] + bag ;
}
if(bag == str ) {
console.log("Palindrome String ");
}
else {
console.log("Not Palindrome String ");
}


