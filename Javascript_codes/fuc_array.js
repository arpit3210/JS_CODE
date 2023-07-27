
//update array with function input

const arr=[823,234523,254,2,42,7823648723,4,234,23,4,24];

function arr_input( arr2)
{
    arr2[1]="Openhiemer creating atom bomb";
}


console.log(arr);   //[ 823, 234523, 254, 2, 42, 7823648723, 4, 234, 23, 4, 24 ]

arr_input(arr);

console.log(arr);   //  [823,'Openhiemer creating atom bomb',254,2,42,7823648723,4,234,23,4,24]