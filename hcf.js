// Code goes here

var num1 = 66, num2 = 33, num3 =11;

function checkHCF(num1, num2) {
  var smallerNum = Math.min(num1, num2);
  var factorArr = [];
  for(var i=smallerNum; i > 0 ; i--) {
    if(num1 % i == 0 && num2 % i == 0) {
      factorArr.push(i);
     // document.write(i);
     // break;
    }
  }
  var hcf = factorArr[0];
  for(var factor=0; factor < factorArr.length; factor++) {
    hcf = Math.min(factorArr[i], hcf);
  }
  return hcf;
}
//document.getElementById("twoNum").innerHTML = "abc"; //checkHCF(num1, num2);
document.write("2 number HCF is: ", checkHCF(num1, num2), "\n \n");

function checkMultipleNumHCF() {
  var args = Array.from(arguments);
  args = args.sort();
  var smallNum = args[0];
  for (var i=0; i< args.length; i++) {
    smallNum = checkHCF(smallNum, args[i]);
  }
  return smallNum;
}
document.write("3 numbers HCF is: ",checkMultipleNumHCF(num1, num2, num3));


