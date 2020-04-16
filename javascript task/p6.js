function getNthElement(array){
if(array.length !== 0){
for(var i in array){
return array[i]
}
}
else{
  return
}
}
getNthElement([1, 3, 5], 1)
