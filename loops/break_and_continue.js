for(let index=0;index<20;index++){
    if(index==5){
        //console.log(`detected 5`);
        break;
    }
   // console.log(`value of i is ${index}`);
}  


// continue

for(let index=0;index<20;index++){
    if(index==5){
        console.log(`detected 5`);
        continue; // continue ka matlab jaise i==5 hua 5 ko chrke aage chle jao aur i==6 se print krao
    }
    console.log(`value of i is ${index}`);
}  