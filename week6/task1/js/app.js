//prompt metodu vasitəsi ilə ekrandan alınan dəyər üçün aşağıdakı əməlyatları yerinə yetirən metodlar yazın
//Dəyərin tipini ekrana çap edin
//Dəyərin boş olub olmadığını yoxlayan metod yazın
//Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin


//Dəyərin tipini ekrana çap edin
// let deyisen=prompt("Deyiseni daxil edin"," ");
// document.getElementById("result").innerHTML=typeof(deyisen);

//Dəyərin boş olub olmadığını yoxlayan metod yazın
// let deyisen=prompt("Deyiseni daxil edin"," ");
// if(deyisen===" "){
//     document.getElementById("result").innerHTML="deyer gonderilmedi";
// } else {
//     document.getElementById("result").innerHTML="Deyer gonderildi:"+" "+deyisen;
// }

//Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.
//Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin
let deyisen=prompt("Deyiseni daxil edin"," ");

if(isNaN(deyisen)){
    document.getElementById("result").innerHTML="Emeliyyat ugursuz alindi";
} else{
    document.getElementById("result").innerHTML=2*parseInt(deyisen);
}



