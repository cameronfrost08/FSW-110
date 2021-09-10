var newListItem = document.createElement( 'li' )
 var myList = document.getElementById(' My-list' )
myList.appendChild(newListItem)
newListItem.textContent = '3'

var newHeader=document.createElement('h1')

newHeader.textContent='Welcome to my Js site'
document.body.appendChild(newHeader)

var newP = document.createElement('p')

newP.textContent= 'All of this was created in Javascript'
document.body.appendChild(newP)



