//array of objects
let data = {principal:[2500 ,  1000, 3000, 2000], time:[1.8, 5, 1, 3]};
//Using time as key
function  interestCalculator() {
  for(let i of data.time){
    if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
      var rate = 3;
    }
    else if (data.principal >= 2500 && data.time >=3) {
      var rate = 4;
    }
    else if (data.principal < 2500 || data.time <= 1) {
      var rate = 2;
    }
    else {
      var rate = 1;
    }
    var interest = data.principal * rate * data.time;
    return myArray = {interestData:[data.principal, rate, data.time, interest ]};
  }
  console.log(myArray.interestData);
}
 interestCalculator() ;
