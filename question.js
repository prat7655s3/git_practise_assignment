Hey Suraj 
// code for checking prime no N 
    let factor=0;
    bag=0;
    for(i=0; i<=num; i++){
        if(num%i==0){
         bag = bag +i;
            factor++
        }
    } 
        if(factor==2)
    {
        console.log("Yes");
    } 
    else 
    {
        console.log("No")
    }
