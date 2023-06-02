// Q-1

// let name=prompt("enter your name :");
// console.log(name);


// Q-2=============================================================================================================

// let intNum = prompt("enter a number :");

// while (!(intNum.charCodeAt(0) > 46 && intNum.charCodeAt(0) < 58)) {
//     intNum = prompt("you have entered a invalid number ,please enter a real number");
// }



// if (intNum % 1 !== 0) {
//     intNum = prompt("please enter a integer number :")
//     while (!(intNum.charCodeAt(0) > 46 && intNum.charCodeAt(0) < 58)) {
//         intNum = prompt("you have entered a invalid number ,please enter a real number");
//     }
// }


// let floatNum = prompt("enter the second  number :");


// while (!(floatNum.charCodeAt(0) > 46 && floatNum.charCodeAt(0) < 58)) {
//     floatNum = prompt("you have entered a invalid number ,please enter a real number");
// }



// if (floatNum % 1 === 0) {
//     floatNum = prompt("please enter a float Number :");
//     while (!(floatNum.charCodeAt(0) > 46 && floatNum.charCodeAt(0) < 58)) {
//         floatNum = prompt("you have entered a invalid number ,please enter a real number");
//     }
// }


// let sum = parseInt(intNum) + parseFloat(floatNum);

// alert(`the sum is :${sum}`);

// Q 3======================================================================================================================

// let principalAmount=prompt("enter the principal amount :");

// while (!(principalAmount.charCodeAt(0) > 46 && principalAmount.charCodeAt(0) < 58)) {
//             principalAmount = prompt("you have entered a invalid number ,please enter a real number");
//         }

//  if(principalAmount % 1 !== 0 ){
//     principalAmount=prompt("please enter a integer number :");
//     while (!(principalAmount.charCodeAt(0) > 46 && principalAmount.charCodeAt(0) < 58)) {
//         principalAmount = prompt("you have entered a invalid number ,please enter a real number");
//     }
//  }


//  let interest=prompt("enter the interest rate :");

//  while (!(interest.charCodeAt(0) > 46 && interest.charCodeAt(0) < 58)) {
//     interest = prompt("you have entered a invalid number ,please enter a real number");
// }

// if(interest % 1 === 0){
//     interest=prompt("please enter a float Number :");
//     while (!(interest.charCodeAt(0) > 46 && interest.charCodeAt(0) < 58)) {
//         interest = prompt("you have entered a invalid number ,please enter a real number");
//     }
// }



//  let years=prompt("enter the years :");
//  while (!(years.charCodeAt(0) > 46 && years.charCodeAt(0) < 58)) {
//     years = prompt("you have entered a invalid number ,please enter a real number");
// }

//  if(years % 1 === 0){
//     years=prompt("please enter a float Number :");
//     while (!(years.charCodeAt(0) > 46 && years.charCodeAt(0) < 58)) {
//         years = prompt("you have entered a invalid number ,please enter a real number");
//     }
// }


//  let simpleInterest=(parseInt(principalAmount)*parseFloat(interest)*parseFloat(years)) / 100;
//  alert(`the simple interst is :${simpleInterest}`);


// Q 4=============================================================================================================================================

// let mark=prompt("enter your mark :");

// while (!(mark.charCodeAt(0) > 46 && mark.charCodeAt(0) < 58)) {
//             mark = prompt("you have entered a invalid number ,please enter a real number");
//         }


// if(parseFloat(mark)>=50){
//     alert("PASSED !");
// }else if(parseFloat(mark)<50){
//     alert("FAILED!")
// }else
// {alert("invalid entry")}

// Q 5=============================================================================================================================================

// let mark = prompt("enter your mark percentage :");

// while (!(mark.charCodeAt(0) > 46 && mark.charCodeAt(0) < 58)) {
//     mark = prompt("you have entered a invalid number ,please enter a real number");
// }
// parseFloat(mark);

// if (mark <= 100 && mark >= 0) {
//     if (mark >= 90) {
//         alert("your grade is A");
//     } else if (mark > 79 && mark < 90) {

//         alert("your grade is B");
//     } else if (mark > 69 && mark < 80) {
//         alert("your grade is C");
//     } else if (mark > 59 && mark < 70) {
//         alert("your grade is D");
//     } else if (mark > 49 && mark < 60) {
//         alert("your grade is E");
//     } else if (mark < 50 && mark > 0) {
//         alert("FAILED !!");
//     }
// } else {

//     alert("invalid mark");

// }


// Q 6=============================================================================================================================================

// let number = prompt("enter the number :")

// switch (number) {
//     case "1":
//         alert("This is Sunday");
//         break;
//     case "2":
//         alert("This is Monday");
//         break;
//     case "3":
//         alert("This is tuesday");
//         break;
//     case "4":
//         alert("This is wednesday");
//         break;
//     case "5":
//         alert("This is thursday");
//         break;
//     case "6":
//         alert("This is friday");
//         break;
//     case "7":
//         alert("This is saturday");
//         break;
//     default:
//         alert("invalid entry")

// }


// Q 7====error in console while there is no out put========================================================================================================================================

// let number=prompt("enter the number :");

// while (!(number.charCodeAt(0) > 46 && number.charCodeAt(0) < 58)) {
//         number = prompt("you have entered a invalid number ,please enter a real number");
//     }

// parseFloat(number);

// for(i=1;i<=10;i++){
//     let multiple=i*number;
//     console.log(`${i} x ${number} = ${multiple}`);

// }

// Q 8=====================================================================================================================================

// let limit=prompt("enter the limit :");
// while (!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0) < 58)) {
//             limit = prompt("you have entered a invalid number ,please enter a real number");
//         }
// parseFloat(limit);
// let sum=0;



// for(i=1;i<=limit;i++){

//     if(i % 2 !== 0){
//         sum=sum+i;
//     }
// }
// alert("The sum is : "+sum);

// Q-9==========================================================================================================================================

// for(i=1;i<=5;i++){
//     let zeroString="";
//     for(j=1;j<=i;j++){
//         zeroString += j + " ";
//     }
//     console.log(zeroString);
// }

// Q 10======================================================================================================================================

// let limit=prompt("enter the limit :");



// while (!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0)<58)){
//  limit=  prompt("you have entered a invalid number ,please enter a real number");

// }
// limit=parseInt(limit);


// let arrayOne=[],
// arrayTwo=[],
// swapedOne="",
// swapedTwo="",
// swap;

// for(i=0;i<limit;i++){
//     arrayOne[i]=prompt(`enter numbers for array one's ${i+1} th position :`);

//     while (!(arrayOne[i].charCodeAt(0) > 46 && arrayOne[i].charCodeAt(0)<58)){
//         arrayOne[i]=  prompt("you have entered a invalid number ,please enter a real number");       
//        }

//     parseInt(arrayOne[i]);   
// }

// alert("enter values for second array");

// for(i=0;i<limit;i++){
//     arrayTwo[i]=prompt(`enter number for array two's ${i+1} th position :`);

//     while (!(arrayTwo[i].charCodeAt(0) > 46 && arrayTwo[i].charCodeAt(0)<58)){
//         arrayTwo[i]=  prompt("you have entered a invalid number ,please enter a real number");       
//        }

//     parseInt(arrayTwo[i]); 
// }

// for(i=0;i<limit;i++){
//     swap=arrayOne[i];
//     arrayOne[i]=arrayTwo[i];
//     arrayTwo[i]=swap;
// }
// for(i=0;i<limit;i++){
//     swapedOne+=arrayOne[i]+" ";
// }
// console.log(`the swaped array one is : ${swapedOne}`);
// for(i=0;i<limit;i++){
//     swapedTwo+=arrayTwo[i]+" ";
// }
// console.log(`the swaped array two is : ${swapedTwo}`);


// Q 11=================================================================================================================================================
// let valueArray=[];
// let limit =prompt("enter the limit :");
// let even=0;

// while(!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0) < 58)){
//     limit=prompt("you have enterd a invalid entry, please enter a valid number :")
// }

// limit=parseInt(limit);

// for(i=0;i<limit;i++){
//     valueArray[i]=prompt(`enter the number for the position ${i+1}`);
//     while(!(valueArray[i].charCodeAt(0) > 46 && valueArray[i].charCodeAt(0) < 58)){
//         valueArray[i]=prompt("you have enterd a invalid entry, please enter a valid number :")
//     }
//     if(valueArray[i] % 2 === 0){
//         even++
//     }
// }

// console.log(even);

// Q 12===========================================================================================================================================

// let limit=prompt("enter the limit :");
// let arrayValue=[],
// swapedArray ="",
// swap;

// while(!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0) < 58 )){
//     limit=prompt("you have entered an invalid value, please enter a valid number :");
// }
// limit=parseInt(limit);

// for(i=0;i<limit;i++){

//     arrayValue[i]=prompt(`enter the number for position ${i+1}`);
//     while(!(arrayValue[i].charCodeAt(0) > 46 && arrayValue[i] < 58 )){
//         arrayValue[i]=prompt("you have entered an invalid value , please enter a valid number :");

//     }
//     arrayValue[i]=parseInt(arrayValue[i]);

// }

// for(i=0;i<limit-1;i++){
//     for(j=i+1;j<limit;j++){
//         if(arrayValue[i] < arrayValue[j]){
//             swap = arrayValue[i];
//             arrayValue[i] = arrayValue[j];
//             arrayValue[j] = swap;
//         }
//     }

// }

// for(i=0;i<limit;i++){
//     swapedArray += arrayValue[i] + " ";
// }

// console.log(swapedArray);

// Q 13=================================================================================================================================

// let language=prompt("enter the word :");

// let flag=0;

// for(i = 0 ; i < language.length / 2 ; i++ ){

//     if(language[i] !== language[language.length-1-i]){
//         flag=1;
//         break;
//     }
// }
// if(flag === 0){
// console.log("it`s a palindrome");
// }else if(flag === 1){
// console.log("it`s not a palindrome");
// }

// Q 14===========================================================================================================================================


// let row = "";
// let limit=prompt("enter the limit :");

// while(!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0) < 58)){
//     limit=prompt("you have entered an invalid entry ,please enter a valid number :");
// }

// limit=parseInt(limit);

// let arrayOne=[];
// let arrayTwo= [];



// alert("enter the values for first array ");

// for(let i=0;i<limit;i++){
//     arrayOne[i]=[];
//     for(let j=0;j<limit;j++){

//         arrayOne[i][j]=prompt(`enter the value for row ${i+1} and column ${j+1}` );

//         while(!(arrayOne[i][j].charCodeAt(0) > 47 && arrayOne[i][j].charCodeAt(0) < 58 )){

//             arrayOne[i][j]=prompt("you have entered an invalid entry ,please enter a valid number :");
//         }
//     }
// }

// alert("enter the values for second array ");

// for(let i=0;i<limit;i++){
//     arrayTwo[i]=[];
//     for(let j=0;j<limit;j++){

//         arrayTwo[i][j]=prompt(`enter the value for row ${i+1} and column ${j+1}` );

//         while(!(arrayTwo[i][j].charCodeAt(0) > 47 && arrayTwo[i][j].charCodeAt(0) < 58 )){

//             arrayTwo[i][j]=prompt("you have entered an invalid entry ,please enter a valid number :");
//         }
//     }
// }

// for(let i=0;i<limit;i++){

//     for(let j=0;j<limit;j++){
//         row += (parseInt(arrayOne[i][j]) + parseInt (arrayTwo[i][j])) + " ";
//     }
//     console.log(row);
//     row="";
// }



// Q 15 ============================================================================================================================================


// (function main() {

//     let arrayOne = [];
//     getArray(arrayOne);

//     displayArray(arrayOne);

// })()

// function getArray(array) {
//     let limit = prompt("enter the limit :")
//     while (!(limit.charCodeAt(0) > 46 && limit.charCodeAt(0) < 58)) {
//         limit = prompt("you have entered invalid entry,please enter a real number :")
//     }

//     limit = parseInt(limit);

//     for (i = 0; i < limit; i++) {
//         array[i] = prompt(`enter numbers for the position ${i+1}`);

//         while (!(array[i].charCodeAt(0) > 46 && array[i].charCodeAt(0) < 58)) {
//             array[i] = prompt("you have entered invalid entry,please enter a real number :")
//         }
//     }

// }



// function displayArray(array) {

//     for(i=0;i < array.length;i++){
//         console.log(array[i]);
//     }
// }

// Q 16==============================================================================================================================================
// let flag=0;
// let number=prompt("enter the number :");

// while(!(number.charCodeAt(0) > 46 && number.charCodeAt(0) < 58)){

//     number=prompt("you have enter a invalid entry, Please enter a valid number :");
// }
// number=parseInt(number);

// for(i=2;i<number/2;i++){
//     if(number % i === 0){
//         flag=1;
//         break;
//     }
// }
// if(flag === 0){
//     alert("the number is a prime");
// }else{
//     alert("the number is not a prime ");
// }

// Q 17 ============================================================================================================

// class ArithameticOperation {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }

//     addition() {
//         alert(`the sum is : ${this.num1 + this.num2}`);
//     }

//     substraction() {
//         alert(`the substracted value is : ${this.num1 - this.num2}`);
//     }

//     multiplication() {
//         alert(`the multiplied value is : ${this.num1 * this.num2}`);
//     }

//     division() {
//         alert(`value after division : ${num1/num2}`);
//     }

// }

// let test;


// let num1 = prompt("enter the first number :");

// while (!(num1.charCodeAt(0) > 48 && num1.charCodeAt(0) < 58)) {
//     num1 = prompt("You have entered an invalid entry, please enter a valid number:");
// }
// num1 = parseInt(num1);

// let num2 = prompt("enter the second number :");

// while (!(num2.charCodeAt(0) > 48 && num2.charCodeAt(0) < 58)) {
//     num2 = prompt("You have entered an invalid entry, please enter a valid number:");
// }
// num2 = parseInt(num2);


// if (num1 && num2) {
//     test = new ArithameticOperation(num1, num2);
// }

// let operation = prompt(`choose your operation 
// 1.addition
// 2.substraction
// 3.multiplication
// 4.division`);

// while (!(operation.charCodeAt(0) > 48 && operation.charCodeAt(0) < 53)) {
//     operation = prompt(`you have enterd an invalid operation,please choose a valid one 
//     1.addition
//     2.substraction
//     3.multiplication
//     4.division`)
// }
// operation = parseInt(operation);

// if (operation === 1) {
//     test.addition();
// } else if (operation === 2) {
//     test.substraction();
// } else if (operation === 3) {
//     test.multiplication();
// } else if (operation === 4) {
//     test.division();
// }

// Q 18===========================================================================================================================

// alert("enter your scores ");

// let writtenTest=prompt("Written Test :");

// while(!(writtenTest.charCodeAt(0) >46 && writtenTest.charCodeAt(0)< 58)){
//     writtenTest=prompt("you have entered an invalid entry, Please enter a valid entry :");
// }
// writtenTest=parseInt(writtenTest);



// let labExam=prompt("lab exam :");

// while(!(labExam.charCodeAt(0) >46 && labExam.charCodeAt(0)< 58)){
//     labExam=prompt("you have entered an invalid entry, Please enter a valid entry :");
// }
// labExam=parseInt(labExam);



// let assignments=prompt("assignment :");

// while(!(assignments.charCodeAt(0) >46 && assignments.charCodeAt(0)< 58)){
//     assignments=prompt("you have entered an invalid entry, Please enter a valid entry :");
// }
// assignments=parseInt(assignments);


// let overAllGrade=(writtenTest*70)/100 + (labExam*20)/100 + (assignments*10)/100;

// alert(`your overall grade is : ${overAllGrade} %`);

// Q 19=======================================================================================================================================================================

// let annualIncome=prompt("enter your annual income :");

// while(!(annualIncome.charCodeAt(0) >46 && annualIncome.charCodeAt(0) <58)){
//     annualIncome=prompt("you have entered a invalid entry,please enter a valid income :");
// }

// annualIncome=parseInt(annualIncome);

// if(annualIncome <= 250000){
//     alert("you dont have to pay any income tax !!");
// }
// else if( annualIncome >250000 && annualIncome<500000){
//     alert(`you have to pay rupees ${annualIncome/100*5} as tax` );
// }
// else if( annualIncome >500000 && annualIncome<1000000){
//     alert(`you have to pay rupees ${annualIncome/100*20} as tax` );
// }
// else if( annualIncome >1000000 && annualIncome<5000000){
//     alert(`you have to pay rupees ${annualIncome/100*30} as tax` );
// }

// Q 20==============================================================================================================================================


// let updater=1;
// let num = "";
// for(i=1;i<=4;i++){
//     for(j=1;j<=i;j++){
//           num += updater+" ";
//             updater++;

//         }
//     console.log(num);   
//     num="";
// }


// Q 21=================================================================================================================================================

// let arrayOne=[];
// let arrayTwo=[];

// let limit=prompt("enter the limit");
// while(!(limit.charCodeAt(0) >46 && limit.charCodeAt(0) < 58)){
//     limit=prompt("you have entered an invalid entry, Please enter a number :");

// }
// limit=parseInt(limit);

// for(i=0;i<limit;i++){
//     arrayOne[i]=prompt(`enter the number for position ${i+1}`);
//     while(!(arrayOne[i].charCodeAt(0) > 46 && arrayOne[i].charCodeAt(0) < 58)){
//         arrayOne[i]=prompt("you have entered an invalid entry,Please enter a valid number :");
//     }
//     arrayOne[i]=parseInt(arrayOne[i]);

//     if(i>0){
//         arrayTwo[i-1]=arrayOne[i-1] * arrayOne[i];
//     }
// }
// for(i=0;i<limit-1;i++){
//     console.log(arrayTwo[i]);
// }

// Q 22 ============================================================================================================================================

// let arrayOne=[];
// let arrayTwo=[];
// let newArray=[];
// let display="";

// (function main(){
//     let limit=prompt("enter the limit");
//     while (!(limit.charCodeAt(0) > 48 && limit.charCodeAt(0) < 58)){
//         limit=prompt("you have entered an invalid entry,Please enter a valid number :");

//     }

//     limit=parseInt(limit);
//     if(limit){
//         getArray(limit);
//         addArray(limit);
//         displayArray(limit);
//     }
// })()

// function getArray(limit){
//     alert("enter the values for array one")

//     for(i=0;i<limit;i++){
//         arrayOne[i]=[];
//         for(j=0;j<limit;j++){

//             arrayOne[i][j]=prompt(`enter value for row ${i+1} and column ${j+1}`)
//             while (!(arrayOne[i][j].charCodeAt(0) > 48 && arrayOne[i][j].charCodeAt(0) < 58)){
//                 arrayOne[i][j]=prompt("you have entered an invalid entry,Please enter a valid number :");

//             }
//             arrayOne[i][j]=parseInt(arrayOne[i][j])
//         }
//     }

//     alert("enter the values for array two")

//     for(i=0;i<limit;i++){
//         arrayTwo[i]=[];
//         for(j=0;j<limit;j++){

//             arrayTwo[i][j]=prompt(`enter value for row ${i+1} and column ${j+1}`)
//             while (!(arrayTwo[i][j].charCodeAt(0) > 48 && arrayTwo[i][j].charCodeAt(0) < 58)){
//                 arrayTwo[i][j]=prompt("you have entered an invalid entry,Please enter a valid number :");

//             }
//             arrayTwo[i][j]=parseInt(arrayTwo[i][j])
//         }
//     }
// }


// function addArray(limit){
//     for(i=0;i<limit;i++){
//         newArray[i]=[];
//         for(j=0;j<limit;j++){
//             newArray[i][j]=arrayOne[i][j] + arrayTwo[i][j]
//         }
//     }
// }


// function displayArray(limit){
//     for(i=0;i<limit;i++){
//         for(j=0;j<limit;j++){
//          display+=newArray[i][j]+ " ";
//         }
//         console.log(display);
//         display="";
//     }
// }

// Q 23 ===have to finish=====================================================================================================================================


// class ArrayCreator{
//      arrayOne=[];
//      limit;
//      display="";
//     constructor(arrayOne,limit){
//         this.arrayOne=arrayOne;
//         this.limit=limit;

//     }

//     getArray(limit){
//         for(let i=0;i<limit;i++){
//         this.arrayOne[i]=[];
//         for(let j=0;j<this.limit;j++){
//             this.arrayOne[i][j]=prompt(`enter the values for row ${i+1} and column${j+1}`)
//             while(!(this.arrayOne[i][j].charCodeAt(0) > 48 && this.arrayOne[i][j].charCodeAt(0) < 58)){
//                 this.arrayOne[i][j]=prompt("you have entered an invalid entry,Please enter a valild entry ");
//             }
//             this.arrayOne[i][j]=parseInt(this.arrayOne[i][j]);
//         }
//         }
//     }

//     displayArray(limit){
//         console.log("the array elements are\n\n");
//         for(let i=0;i<limit;i++){
//             for(let j=0;j<limit;j++){
//                 this.display += this.arrayOne[i][j] +" ";
//             }
//             console.log(this.display);
//             this.display="";
//         }
//     }


// }

// (function main(){
// let arrayOne=[];


// let limit=prompt("enter the limit :");
// while(!(limit.charCodeAt(0) > 47 && limit.charCodeAt(0) <58)){
//     limit=prompt("you have entered an invalid entry,Please enter a valid")
// }
// limit=parseInt(limit);

// if(limit){
//     let test=new ArrayCreator(arrayOne,limit)
//     test.getArray(limit);
//     test.displayArray(limit);
// }

// }());

// Q 24=============================================================================================================================================

// class Area {
//     circle() {
//         let r = prompt("enter the radius :")
//         while (!(r.charCodeAt(0) > 48 && r.charCodeAt(0) < 58)) {
//             r = prompt("you have entered an invalid entry ,Please enter the radius :")
//         }
//         r = parseFloat(r);
//         let area = Math.PI * (r * r);
//         alert(`the area of circle is :${Math.round(area) }`);
//     }


//     square() {
//         let a=prompt("enter the length :");

//         while (!(a.charCodeAt(0) > 48 && a.charCodeAt(0) < 58)) {
//             a = prompt("you have entered an invalid entry ,Please enter the length :")
//         }
//         a = parseFloat(a);
//         let area = a * a;
//         alert(`the area of square is :${area}`);
//     }


//     rectangle() {
//         let w=prompt("enter the width :");

//         while (!(w.charCodeAt(0) > 48 && w.charCodeAt(0) < 58)) {
//             w = prompt("you have entered an invalid entry ,Please enter the width :")
//         }
//         w = parseFloat(w);

//         let l=prompt("enter the length :");

//         while (!(l.charCodeAt(0) > 48 && l.charCodeAt(0) < 58)) {
//             l = prompt("you have entered an invalid entry ,Please enter the length :")
//         }
//         l = parseFloat(l);



//         let area = w * l
//         alert(`the area of rectangle is :${area}`);
//     }
//     triangle() {

//         let b=prompt("enter the bredth :");

//         while (!(b.charCodeAt(0) > 48 && b.charCodeAt(0) < 58)) {
//             b = prompt("you have entered an invalid entry ,Please enter the bredth :")
//         }
//         b = parseFloat(b);

//         let h=prompt("enter the height :");

//         while (!(h.charCodeAt(0) > 48 && h.charCodeAt(0) < 58)) {
//             h = prompt("you have entered an invalid entry ,Please enter the height :")
//         }
//         h = parseFloat(h);

//         let area = .5 * (b * h);
//         alert(`the area of triangle is :${area}`);
//     }
// }

// class MyClass extends Area {

//     main() {
//         let choice = prompt(`enter your object
//     1.circle
//     2.square
//     3.rectangle
//     4.triangle`)

//         while (!(choice.charCodeAt(0) > 48 && choice.charCodeAt(0) < 53)) {
//             choice = prompt(`you have entered an invalid entry,Please enter a valid entry 
//         1.circle
//     2.square
//     3.rectangle
//     4.triangle`)
//         }
//         choice = parseInt(choice);

//         switch (choice) {
//             case 1:
//                 this.circle();
//                 break;
//             case 2:
//                 this.square();
//                 break;
//             case 3:
//                 this.rectangle();
//                 break;
//             case 4:
//                 this.triangle();
//                 break;
//         }

//     }

// }


// let newClass=new MyClass();
// newClass.main()


// Q 25============================================================================================================================================

// var library = [{
//         title:'The Road Ahead',
//         author: 'Bill Gates' ,
//         readingStatus: true
//     },
//     {
//         title: 'enthralling (The New Yorker)',//Walter Isaacson
//         author:'Steve Jobs' ,
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];
// let book=prompt(`choose the book to check status 
// 1.The Road Ahead
// 2.enthralling (The New Yorker)
// 3.Mockingjay: The Final Book of The Hunger Games`)
// while(!(book.charCodeAt(0) > 48 && book.charCodeAt(0) < 52)){
//     book=prompt(`invalid choice ,Please choose one below
//     1.The Road Ahead
//     2.enthralling (The New Yorker)
//     3.Mockingjay: The Final Book of The Hunger Games `)
// }



// if(book){
//     if(book === "1"){
//         book ="The Road Ahead";
//     }
//     else if(book === "2"){
//         book = "enthralling (The New Yorker)"
//     }
//     else if(book === "3"){
//         book = "Mockingjay: The Final Book of The Hunger Games"
//     }

//     library.find((x)=>{
//         if(x.title === book){
//             if(x.readingStatus === true){
//                 alert(`Already read -${x.title} by ${x.author}.`)
//             }
//             else if(x.readingStatus === false){
//                 alert(`You still need to read -${x.title} by ${x.author}.`)
//             }

//         }
//     })
// }

// Q 26=========================================================================================================================================

// let my_string=prompt("enter your name :");
// if(my_string.charCodeAt(0) >47 && my_string.charCodeAt(0) < 58 ){
//     my_string=parseInt(my_string);
// }

// function reverseString(stringValue){
//     if(typeof stringValue != "string"){
//         let err = new Error(" my_string.split is not a function");
//         throw err;
//     }
//     if(my_string.length <= 2){
//      throw new Error("not a valid name")
//     }
//     let spliter=stringValue.split("");
//     let reverser=spliter.reverse();
//     let joiner=reverser.join("")
//     alert(`reversed string ${joiner}
//     Type of :${typeof my_string}`);
// }

// try{
//     reverseString(my_string)
// }
// catch(err){
//     alert(`${err}
//     Type of : ${typeof my_string}`)
// }
// finally{
//     console.log(typeof my_string);
// }




// Q 27===have to finish====================================================================================================================================

// let my_height = prompt("enter your height");

// function height(height){
//     if(!( height.charCodeAt(0) > 47 && height.charCodeAt(0) < 58 )){
//         throw new Error("notANumberError");
//     }
//     if(height >= "77"){
//         throw new Error("hugeHeightError")
//     }
//     if(height === "0"){
//         throw new Error("tinyHeightError")
//     }

//     alert(`your height is :${height}`);
// }

// try{
//     height(my_height);
// }catch(err){
//     alert(err);
// }

// Q 28=================================================================================================================================================

// function Car(name, mileage, max_speed){
//     this.name=name;
//     this.mileage=mileage;
//     this.max_speed=max_speed;
// }

// Q 29============================================================================================================================================

// let limit = prompt("enter array limit ");
// while (!(limit.charCodeAt(0) > 47 && limit.charCodeAt(0) < 58)) {
//     limit = prompt("wrong entry ,Please enter a valid entry");
// }
// limit = parseInt(limit);
// let myArray = [];

// if (limit) {
//     for (i = 0; i < limit; i++) {
//         myArray[i] = prompt(`enter the value for position ${i+1}`)
//         while (!(myArray[i].charCodeAt(0) > 47 && myArray[i].charCodeAt(0) < 58)) {
//             myArray[i] = prompt("wrong entry ,Please enter a valid entry");
//         }
//         myArray[i] = parseInt(myArray[i]);
//     }
// }


// myFilter(myArray, callBack)


// function myFilter(array, callback) {
     

//     let sum = 0;
//     for (let x of array) {
//         sum += x;
//     }

//     let returN= callback(array);
//     alert(sum);

    
// }





// function callBack(array) {

//     let sum = 0;
//     for (let x of array) {
//         sum += x;
//     }

//     if (sum % 2 === 0) {
//         return true ;
//     } else if (sum % 2 === 1) {
//         return false;
//     }
// }



// ==================================================================================================================================================