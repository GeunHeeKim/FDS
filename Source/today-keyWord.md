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

2016.11.1.수
DOM Script replace~

```javascript
function replaceStrongElement() {
  var target_strong = target_p.querySelector('strong');

  this.parentNode.replaceChild(target_strong, this);

  return false;
  //return false - prevent defalut 라고 해서 a 태그가 기본적으로 갖고 있는 속성,
  //href 는 기본 속성이고 어디론가 가려는 성질이 있는데, 그거를 막아야 하니까 쓴다.

}
```

keyNote - 04 DOM 문서 객체 모델

클로저가 함수 만은 아니다.

의존성 관리 - DOM_Helper.js는 반드시 app.js 앞에서 먼저 불러와야 한다.

_언더바를 붙이면 비공개 멤버이다.

네임스페이스 - 이거를 통해서만 접근할 수 있다.
