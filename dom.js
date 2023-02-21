item = document.getElementsByClassName('list-group-item')
for(var i = 0; i<item.length;i++){
    item[i].style.fontWeight = 'bold'
}
for(var i = 0 ; i<item.length;i++){
    item[i].style.backgroundColor = 'green'
}
var headertitle = document.getElementById('header-title')
headertitle.style.borderBottom='solid 3px #000'
