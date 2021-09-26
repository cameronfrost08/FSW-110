var headsList=[
    "hello world",
    "hello world",
    "hello world",
    "hello world",
    "hello world",

]
var headerList= document.getElementById("heads")

for (var i=0; i< headsList.length; i++){

    var newHead = document.createElement("h2")
    newHead.textContent=headsList[i]
    headerList.append(newHead)
}
document.getElementById("heads").style.fontSize="20px";
document.getElementById("heads").style.fontWeight="lighter"; 
document.getElementById("heads").style.fontFamily="sans-serif";
document.getElementById("heads").style.color="cornflowerblue";
document.getElementById("heads").classList.add("border");
