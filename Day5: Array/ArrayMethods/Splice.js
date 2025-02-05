let arr = [1,2,3,4,5,6,8,9,10];
console.log(arr);

//index(6),elementDeletion(0),insertingElement(7)
arr.splice(6,0,7);
console.log(arr);

//adding the element and it will remove the position element so we are adding it again

//index(6),elementDeletion(0),insertingElement(7),insertingElement(8)
arr.splice(6,1,7,8)
console.log(arr);

//adding the element and it will not remove the position element and we are adding it again.
arr.splice(6,0,7,8)
/*
Where:
6: is the inde x where we want to insert the element
0: how many element we want to change
7: the element we are inserting
8: the element we are inserting
*/
