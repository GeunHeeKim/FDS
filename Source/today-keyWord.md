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

*2016. 11.1.수
DOM Script replace~


function replaceStrongElement() {
  var target_strong = target_p.querySelector('strong');

  this.parentNode.replaceChild(target_strong, this);

  return false;
  //return false - prevent defalut 라고 해서 a 태그가 기본적으로 갖고 있는 속성,
  //href 는 기본 속성이고 어디론가 가려는 성질이 있는데, 그거를 막아야 하니까 쓴다.

}
