// Elementary level
// 678,45,67,89,23,545,188 və 293 rəqəmlərindən ibarət massiv verilmişdir.
// Bu və bənzəri ədəd massivləri üçün
// Bütün ədədlərin cəmini tapan funksiya düzəldin.
// Ədədlərin ədədi ortasını tapan funksiya düzəldin
// Massivdəki ədədlərin sayını tapan funksiya düzəldin
// Massivdə 100dən boyük 200dən kiçik ədədlərin sayını tapan funksiya düzəldin.
// Massivdəki cüt ədədləri tapan funksiya düzəldin
// Massivdəki ən böyük ədədi tapan funksiya düzəldin
// Massivdəki ən kiçik ədədi tapan funksiya düzəldin
// Massivdəki ən böyük ilə ən kiçik ədədin fərqini tapan funksiya düzəldin

// const arr1=[ 678,45,67,89,23,545,188,293,23]
// Bütün ədədlərin cəmini tapan funksiya düzəldin.
// let sum=0;
// for(i=0;i<arr1.length;i++){
// sum+=arr1[i];

// }console.log(sum);

// Ədədlərin ədədi ortasını tapan funksiya düzəldin
// let edediOrta;
// let sum=0;
// for(i=0;i<arr1.length;i++){
//     sum+=arr1[i];
//     edediOrta=sum/arr1.length;
// }

// console.log(edediOrta);

// Massivdəki ədədlərin sayını tapan funksiya düzəldin
// let say=0;
// for(i=0;i<=arr1.length;i++){
//   say=i;
// }
// console.log(say)

//Massivdə 100dən boyük 200dən kiçik ədədlərin sayını tapan funksiya düzəldin.
// const arr1=[ 678,45,67,89,23,545,188,134,293,23,5,2895]
// let say='';


// for(i=0;i<=arr1.length;i++){
//     if(arr1[i]>100 && arr1[i]<200){
//         say=arr1[i];
//         console.log(say);
//     }
// }    

// Massivdəki cüt ədədləri tapan funksiya düzəldin
// for(i=0;i<arr1.length;i++){
//     if(arr1[i]%2==0){
//         console.log("cut ededler bunlardir   "+  arr1[i]);
//     }
// }

// Massivdəki ən böyük ədədi tapan funksiya düzəldin
// let max=arr1[0];
// for(i=0;i<=arr1.length;i++){
//     if (max<arr1[i+1]) {
//         max=arr1[i+1];
//     }
// }console.log(max);

//Massivdəki ən kiçik ədədi tapan funksiya düzəldin

// let min=arr1[0];
// for(i=0;i<=arr1.length;i++){
//     if (min>arr1[i+1]) {
//         min=arr1[i+1];
//     }
// }console.log(min);

//Massivdəki ən böyük ilə ən kiçik ədədin fərqini tapan funksiya düzəldin

// let max=arr1[0];
// let min=arr1[0];
// for(i=0;i<=arr1.length;i++){
//     if (max<arr1[i+1]) {
//         max=arr1[i+1];
//     }
//     if (min>arr1[i+1]) {
//         min=arr1[i+1];
//     }
// }console.log(max-min);

//let arr1 = [678,'Freelance',45,67,89,'Raymond',23,'Michael', 'Joseph',545,188,293];

//Massivdəki sözlərin sayını tapın
// let netice=" ";
//let  say=0;
// for (let i = 0; i <arr1.length; i++) {

// if (typeof(arr1[i])==="string") {
//     say++;
//     netice=arr1[i];  
//     console.log(netice);
// }
// }
// console.log("Massivdeki sozlerin sayi"+" "+say);

//Massivdəki sözləri və onların hərfləri sayını göstərin. Misal : Freelance – 9 hərf
// let arr1 = [678,'Freelance',45,67,89,'Raymond',23,'Michael', 'Joseph',545,188,293];
// let netice=" ";
// for (let i = 0; i < arr1.length; i++) {
//    if (typeof(arr1[i])==="string") {
//        netice=arr1[i];
//        console.log(netice+" "+arr1[i].length);
//    }   
// }


//Massivdəki sözləri tərsinə yazın

// let arr1 = [678,'Frelance',45,67,89,'Raymond',23,'Michael', 'Joseph',545,188,293];
// let res=" ";
// let netice=" ";
// for (let  i = 0;  i <= arr1.length; i++) {
//     if(typeof(arr1[i])==="string"){
//    res=arr1[i];
//    for (let j = res.length-1; j >=0; j--) {
//     netice=res[j];
//     console.log(netice);
//    }
//  }
// }

// Massivdəki sözlərin hər birində iştirak edən saitləri tapın
let arr1 = [678,'Frelance',45,67,89,'Raymond',23,'Michael', 'Joseph',545,188,293];
let sait=['a','ı','o','u'];
let res=" ";
for (let  i = 0;  i < arr1.length; i++) {
     for (let j = 0; j < sait.length; j++) {
         if(arr1[i]===sait[j]){
             console.log(sait[j]);
         }
         
     }
    }