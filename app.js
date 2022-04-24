let i=parseInt(prompt("Plese input your age"))
switch(true)
{
    case (i>=18):
    {
alert("You are Eligiable for voating")
    }
    break;

    case (i<=18):
{
    alert("Sorry! You are not Eligiable for voating")
}
break;
case (i>=45):
{
    alert("You Are Eligiable for voating");
}
break;

default:
    alert("Please Input Your Age")

 
break;
}