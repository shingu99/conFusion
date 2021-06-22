// var name= "Jack";
// var age= 23;
//
// var message= "Hi My name is " + name + " and I am " + age + " years old";
// var firstname="John";
// var lastname = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age= 23;
// var profileImgUrl = "google.com/lambo.jpg";
// var loginWelcomeMessage = "Welcome, " + firstname + ". Happy " + age + "rd birthday" ;
//
// console.log(loginWelcomeMessage);
//
// var age = 23;
// var sum= 10+15;
// var sub=15-10;
// var mul = 10*3;
// var div = 10/3;
// var mod=10%3;
// var message = "10/3 is 3 with a remainder of "+mod;
// var result = 10*((5+3)-4);
// console.log (result);

if(1==1){
  console.log("we should see this");
}

var myaccbalance = 300;
var nikejordan = 700;
var coupon = 400;
 if(nikejordan<=myaccbalance){
   myaccbalance -= nikejordan;
   console.log("we just bought some dope shoes");
   console.log("Account balance: "+ myaccbalance);
 }
 else if (nikejordan-coupon<=myaccbalance){
   console.log("Bought some shoes");
   myaccbalance -= nikejordan - coupon;
   console.log("Account balance" + myaccbalance);
 }
else {
  console.log("Kangaal hai tu bsdk");
}
