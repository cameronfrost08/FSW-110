
document.getElementsByTagName("h1")[0].setAttribute("class","democlass");

const names= ["steve","larry", "joe","shirley","steph","nate","rick","emily"];

var nameList=document.getElementById("namesList")

for (var i=0; i < names.length; i++){

    var newName=document.createElement("li")
    newName.textContent = names[i]
    namesList.append(newName)
}

var head = document.getElementsById("heads")

for (var i=0; i<10; i++){
    var newHead = document.createElement("h1")
    newHead.textContent="hello world"[i]
    Heads.append(newHead)

}





