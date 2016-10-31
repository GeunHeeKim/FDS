2016.10.31

```javascript

1. page.appendChild(page_brand); - 부모에 마지막 자식으로 요소노드를 추가하는것

2. document.createElement(kgh);

3. //main 요소노드 앞에 divider 요소노드를 삽입하자.
var main = document.querySelector('#main');
var main_parent = main.parentNode;
var divider = createEl('hr')

//main.parentNode.insertBefore(divider, main )
main_parent.insertBefore(divider, main);

4. break // 이 곳에서 코드를 중지 시키는 기능

```
