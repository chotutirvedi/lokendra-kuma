 // condition statement

//if ( 23<9){
//    console.log ('23 is greater than 9');

///}else{
    //console.log( '23 is not greater than 9');//
//}

///let age = 16;
//if (age >= 18){
 //   console.log('You can start driving license');
//}else{
  //  const yearsLeft = 18 - age;
    //console.log(`You are too young. Wait another ${yearsLeft} years :)`);
//}
//
//

///opretor
//unary opretor
//logical opretor
//ternary opretor
//conditional opretor


//arithmatic opretor
//addition
//subtraction
//multiplication






//comparision opretor
//greater than
//less than
//greater than or equal to
///let x = 32;
//if (x =>27 ){

    // console.log('xis greater than 27 & equal to 27');
    
    //}else{
        // console.log ('x is not greater than 27 & equal to 27 ');
        //}
        
        //logical opretor
        //and
        //or
        //not
        ///
        
        
        
        //assignment opretor

       //
       ///let x =10;
        //if (x === 10 && x > 5) {
    //console.log(  'x is equal to 10 and greater than 5');
      //  }else{
 //           console.log('x is not equal to 10 and greater than 5 ');

///        }
//            

//loops 
  // for (let i =20; i <= 48; i++){
    //console.log (i);

   //}
    //while loop
    //


     /// function  in js

     
//unction myfunction(msg){
  //console.log (msg);

//}
//myfunction('hello world');
//myfunction('hello world');
//myfunction( ' i love  you all freindes');


// var x=20
//function display(x){
 // console.log("Named Function"+x)
///}
//display(10)

//let data=function(x){
 // ///console.log("Anonymus Function"+x)
//}
//data(20)

//let arr=x=>console.log("Arrow"+x);
//arr(30)
function generate() {
  let str = "<table border='1'>";
  let data = Number(document.getElementById("data").value);
  console.log(typeof(data));
  
  for (let index = 1; index <= 10; index++) {
    str +=
      "<tr><td>" +
      data +
      "</td><td>" +
      "*" +
      "</td><td>" +
      index +
      "</td><td>" +
      "=" +
      "</td><td>" +
      data * index +
      "</td></tr>";
  }
  str += "</table>";
  console.log(str);

  document.getElementById("result").innerHTML = str;
}
  