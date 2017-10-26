var parent = document.querySelectorAll('.item-list');
var items = document.querySelectorAll('.item-list .item');

for (var i = 0; i < items.length; i++) {
  (function(index) {
    items[index].addEventListener('click', function() {
      alert(index);
    })
  })(i)
}


var newItem = document.createElement('li');
newItem.innerHTML = '5';
newItem.className = 'item';
parent[0].appendChild(newItem)