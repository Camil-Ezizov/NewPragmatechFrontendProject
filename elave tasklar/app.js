let count=0;
let res=" ";
function write(a){
    for (let i = 1; i < a; i++) {
        if(i%2==1){
            count++;
           res+=count+" ci  tək nomrə:"+i+"  ";
        }
    }  
    return res;
}
write=write(200);
console.log(write)