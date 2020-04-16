var obj = {
key: "value"
};
function getProperty(obj) {
 for(var key in obj){
console.log(obj["key"])
 }
}
getProperty(obj);
