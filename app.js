
const checkingNumberSigns =(num) =>{
    if(num>0){
        return "number is positive";
    }
    else if  (num<0){
          return "number is negative"
    }
    else{
        return "zero"
    }

}
console.log(checkingNumberSigns(0.212));



const determineDayofWeek =(weekNumber) =>{
    let weekdays=('sun' ,'mon','tues', 'wed' ,'thurs','fri' , 'sat');
    if (weekNumber >=1 && weekNumber >=7){
        return weekdays(weekNumber-1 )
    }
    else {
        return 'invalid weeknumbers number must be'
    }
}


// const checkingEmail=(string) => {
//    let string=('abc@email.com');
//    if ()
// }

const determiningTrianglestype = (side) =>{
  if
}

let findNumberSign = (num) => {
    if (num>0){
        return "positive";
    }
    else if (num<0){
        return "negative";
    } 
    
    {
        return "zero";
    }
}
console.log (findNumberSign(78));
console.log(findNumberSign(0))
console.log(findNumberSign(-323));



const findLeapYear = (year) => {
    if (year % 4==0) {
        return "leap year"
    }
    else if (year % 4!=0){
        return "not a leap year"
    }
    
}

console.log(findLeapYear(2024));





let ageOfUsers = (age) =>{
    if(age<15){
        return "They are not eligible to vote"
    }
    else if(age<=18 || age<=65 ){
        return "They are  eligible to vote"
    }
    else { return "They are  eligible for senior citizens benefits"
}
       
}
console.log(ageOfUsers(43));
console.log(ageOfUsers(10));
console.log(ageOfUsers(90));



let findWeekdays =(weekNumber) =>{
    let week= ("sundays" ,"Monday" ,'tuesday' ,'wed' ,'thurs' , 'fri' ,'sat');
    if (weekNumber >=1 && weekNumber <=7) {
        return week=(weekNumber-1);
    }
    else{
         return 'invalid number number must greater than equals to one and less than equals to seven'; 
    }
}
console.log(findWeekdays(7));

let getDiscount = (totalAmount) => {
   switch(true){
    case (totalAmount >= 3000):{ console.log ("discount is 10%");
    break;}
   
    case  (totalAmount >= 5000):{ console.log ("discount is 5%");
    break;}
   
    case  (totalAmount >= 10000):{ console.log ("discount is 3%");
    break;}
    default:{
        console.log("pardon there will be no discount");
    }

    }
   }
console.log(getDiscount(50875));
console.log(getDiscount(5000));