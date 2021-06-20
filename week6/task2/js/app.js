// Verilən massivə əsasən aşağıdakı əməlyatları yerinə yetirin ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters']
// ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
// ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin
// ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın
// ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin
// ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın


// ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let array1=[];
// for (let i = 0; i < ededler.length; i++) {
//     if(typeof(ededler[i])==='number'){
//         array1+=ededler[i]+" ";
//         document.getElementById('result').innerHTML="ededler:"+array1;
//     }   
// }


//ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin
// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let array1=[];
// for (let i = 0; i < ededler.length; i++) {
//     array1+=ededler[i]+" "+typeof(parseInt(ededler[i]))+"<br>";
   
//    document.getElementById("result").innerHTML=array1; 
// }

// //ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın
// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let num=[];
// let und=[];
// let obj=[];
// let bol=[];
// let str=[];

// for (let j = 0; j < ededler.length; j++) {
//     console.log(typeof(ededler[j]));
    
// }

// for (let i = 0; i < ededler.length; i++) {
//   if(typeof(ededler[i])==="number"){
//       num+=ededler[i];  
//   } 
//   else if(typeof(ededler[i])==="undefined"){
//     und+=ededler[i];  
// } 
// else if(typeof(ededler[i])==="object"){
//     obj+=ededler[i];  
// }
// else if(typeof(ededler[i])==="boolean"){
//     bol+=ededler[i];  
// }
// else if(typeof(ededler[i])==="string"){
//     str+=ededler[i];  
// }
// } 
// document.getElementById('result').innerHTML=num;
// document.getElementById('result2').innerHTML=und;
// document.getElementById('result3').innerHTML=obj;
// document.getElementById('result4').innerHTML=bol;
// document.getElementById('result5').innerHTML=str;


// ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin

// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let newArray=[];
// let n;
// for (let i = 0; i < ededler.length-1; i+=2) {
//       j=i+1;
//       n=ededler[i];
//       ededler[i]=ededler[j];
//       ededler[j]=n;
//       newArray+=ededler[i]+" "+ededler[j];
// }
// console.log(newArray);

// ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın
// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let sait=['a','ı','o','u','e','ə','i','ö','ü','A','I','O','U','E','Ə','İ','Ö','Ü'];
// let res=" ";
// let umumi=" ";

// for (let i = 0; i < ededler.length; i++) {
//     if(typeof(ededler[i])==='string'){
//         res+=ededler[i];   
//         document.getElementById("result").innerHTML=res;
//     }
// }
    
// for (let j = 0; j < sait.length; j++) {
//     for (let i = 0; i < res.length; i++) {
//         if(sait[j]==res[i]){
//             umumi+=sait[j];
//         }       
//     }   
// } 
// samit=res.length-umumi.length
// document.getElementById("result").innerHTML="sait sayi: "+" "+umumi.length+" "+"samit sayi:"+" "+samit;

// let ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];
// let sait=['a','ı','o','u','e','ə','i','ö','ü','A','I','O','U','E','Ə','İ','Ö','Ü'];
// let res=" ";
// let saitler=" ";
// let count=0;

// for (let i = 0; i < ededler.length; i++) {
//     if(typeof(ededler[i])==='string'){
//         res+=ededler[i];
//            }
//            }

// for (let j = 0; j < res.length; j++) {
//   for (let l = 0; l < sait.length; l++) {
//      if(res[j]==sait[l]){
//           saitler+=res[j];
//           count++;
//      }
     
//   }
// }console.log(saitler);
// console.log(res.length);
// console.log(count);
// samit=res.length-saitler.length;
// document.getElementById("result").innerHTML="sait sayi: "+" "+count+" " +"samit sayi:"+samit;

let reqemler=[3,6,56,87,32,1,67,10,9];
let res = reqemler.filter((element) => element < 10);
console.log(res)