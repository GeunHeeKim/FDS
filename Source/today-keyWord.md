2016.10.31

```javascript

page.appendChild(page_brand); - 부모에 마지막 자식으로 요소노드를 추가하는것

document.createElement(kgh);

//main 요소노드 앞에 divider 요소노드를 삽입하자.

var main = document.querySelector('#main');
var main_parent = main.parentNode;
var divider = createEl('hr')

//main.parentNode.insertBefore(divider, main )
main_parent.insertBefore(divider, main);

```
