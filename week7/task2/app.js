// arr=[1,4,56,23,67,89,145,90,200,35]
// verilən massivə əsasən elə bir funksiya (tək funksiya) yazın ki o funksiya sayəsində aşağıdakı filterləmə əməlyatlarını asanlıqla aparıla bilsin
// cüt ədədləri tapsın
// tək ədədlər tapsın
// rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
// 2 rəqəmli ədədləri tapsın

 let ededler=[1,4,56,23,67,89,145,90,200,35];

function tekVeYacut(arr,reqem){
    newArr=[];
      for (let i = 0; i < arr.length; i++) {
          if(arr[i]%2==reqem ){
          newArr.push(arr[i]);
          }  
      }
      return newArr;
}
cut=tekVeYacut(ededler,0);
tek=tekVeYacut(ededler,1);
console.log(cut);
console.log(tek);



function reqemSayi(arr,reqem){
    let newElem=" ";
for (let i = 0; i < arr.length; i++) {
    num=arr[i];
    convertStr=num.toString();
    len=convertStr.length;
    if(len==reqem){
       newElem+=arr[i]+" ";
     
    } 
} return newElem;
}
reqemSayi=reqemSayi(ededler,2);
 console.log(reqemSayi);


 
let count=0;

for (let i = 0; i < ededler.length; i++) {
    let a=String(ededler[i]);
      for (let j = 0; j < a.length; j++) {
         let b=Number(a[i])
          count+=b;
          console.log(count)
      }
 }

 
