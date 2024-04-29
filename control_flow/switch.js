/*switch (key) {
    case value:
        break;
    default:
        break;
}*/

//switch structure
const month =3

switch (month) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;  //if we dont add break here then all the next cases is not going to check all all will be printed except default value..
    case 4:
        console.log("april");
        break;
    default:
        console.log("unknown");
        break;   
}

// nullish coal