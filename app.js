// let i=parseInt(prompt("Plese input your age"))
// switch(true)
// {
//     case (i>=18):
//     {
// alert("You are Eligiable for voating")
//     }
//     break;

//     case (i<=18):
// {
//     alert("Sorry! You are not Eligiable for voating")
// }
// break;
// case (i>=45):
// {
//     alert("You Are Eligiable for voating");
// }
// break;

// default:
//     alert("Please Input Your Age")

 
// break;
// }

function buttonclicked (x) {
    const jad = "clear";
switch (x) {

case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "0": case ".": case "+": case "-": case "*": case "/": 
document.getElementById('exp').value = document.getElementById('exp').value + x;
break;

case "=":
try{

document.getElementById('exp').value = eval(document.getElementById('exp').value);

}
catch(e)
{

document.getElementById('exp').value="Syntax error!";

}
break;

case "clear":
  document.getElementById('exp').value = "";
break;

 case "back":
    var str = document.getElementById('exp').value; 
    str = str.substr(0, str.length-1); document.getElementById('exp').value = str;

    break;
}

}