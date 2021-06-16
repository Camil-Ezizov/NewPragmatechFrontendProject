var x=" ";y=" ";
for ( i = 1; i<=60; i++) {
  x+= '<div class="clock-number number'+i+'">'+i+'</div>';
    document.getElementById("clock").innerHTML=x;
    y=6*i;

    console.log(y);
document.getElementsByClassName("number"+[i]).style.transform = "rotate("+y+")";

}