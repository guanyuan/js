var parent = document.querySelectorAll('.item-list');
var items = document.querySelectorAll('.item-list .item');

parent[0].addEventListener('click', function(e) {
  for(var i=0; i<items.length; i++) {
    if(e.target === items[i]) {
      alert(i);
    }
  }
})