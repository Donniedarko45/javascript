function calculatefactorial(num){
    let fact=1;
    if (num==0) return 1
    if (num>0){
        return num*calculatefactorial(num-1)
    }
    if (num<0) console.log("enter a positive number")
    
}


function ToCheckArmstrongNumber(num){
    let temp=0;
    let dummy=num;
    let rem=0;
    while(num>0){
        rem=num%10;
        temp=(rem*rem*rem)+temp;
        num=Math.floor(num/10);
    }
    if(temp===dummy){
       console.log("number is armstrong");
    }
    else{
        console.log("number is not armstrong");
    }
}

function tablePrinting(ab){
    for(let i=1;i<=10;i++){
        console.log(`${ab}*${i}=${ab*i}`);
    }
}

const ab=8;

//calculatefactorial(ab);
//ToCheckArmstrongNumber(ab);
tablePrinting(ab);