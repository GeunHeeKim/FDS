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

2016.11.1.

DOM Script replace~
1. 
```javascript
function replaceStrongElement() {
  var target_strong = target_p.querySelector('strong');

  this.parentNode.replaceChild(target_strong, this);

  return false;
  //return false - prevent defalut 라고 해서 a 태그가 기본적으로 갖고 있는 속성,
  //href 는 기본 속성이고 어디론가 가려는 성질이 있는데, 그거를 막아야 하니까 쓴다.

}
```

2. keyNote - 04 DOM 문서 객체 모델

3. 클로저가 함수 만은 아니다.

4. 전달인자가 이벤트 객체가 될 수 있다.

4. 의존성 관리 - DOM_Helper.js는 반드시 app.js 앞에서 먼저 불러와야 한다.

5. _언더바를 붙이면 비공개 멤버이다.

6. 네임스페이스 - 이거를 통해서만 접근할 수 있다.

7. **console.log(document)**

 를 치면 document 문서가 가진 native 속성들을 볼 수 있다.!
 "document" 대신에 다른 객체를 넣으면 다른 객체의 속성을 볼 수 있다.

8. 'nextElementSibling' in Element.prototype -> nextElementSibling 이라는 속성이 요소노드에 있는지 체크하는 코드
    Element.prototype -> 요소노드가 갖고 있는 속성(?기능?)을 보여줘 라는 코드!! - 많이 쓰일꺼 같으다!! 알아 놓기
    브라우저 콘솔창에 확인 해보면 됨. 우하하하

    
 2016.11.02.수
 
 1. return 을만나면 코드 실행이 거기서 멈춘다.
 
 2. .localName - 소문자로 요소객체로 반환된다.
 
 3. .nodeName - 대문자로 반환 된다.
 
 4. null - 오타 또는 코드 실행 시점 찾아보기.
  
 5. 수학(Math) 객체 random() 메서드 = 0~1 사이의 실수가 나온다.

 6. Math.random() * 10 하면  계산된다.

   Math.floor (1.2323) -> 1로 반환된다.
   
 7.  키(Key) 이벤트 - The Key Events
  
   element.onkeydown

   element.onkeypress


  8. 마우스 이벤트
   
   mouseEnter, mouseLeave
   
   9. 비동기 방식 - 가만히 있다가 이벤트가 발생하면 처리해주는 방식
                   
                   비동기(Asynchronous) - 눌러 놓고, 다른 일을 할 수 있는 것.
                   
   10. 이벤트 전파 - 박스가 겹쳐 있으면 겹쳐있는 다른 요소에도  이벤트가 전파 된다.
       이벤트 전파를 원하지 않는 경우 - true 나 false 로 제어하면 된다.


 
event.target 실제 클릭한 것

event.currentTarget 캡쳐링이 발생했을때 올라오는 중이니까 grand-parent 에 있으니까 grand-parent 를 말한다.


true - 캡쳐링

false - 버블링 - 자식에서 부모로 전파 되는것.

이벤트 빈 값은 false 다  false 는 버블링이다.

*call 관련 사항
aa.call(this); -   aa 안에서 this를 지정할 수 있다.
 = aa.call(document); - call 에서 this는 document로 지정 되었다.

call apply bind 의 차이를 나중에 알 수 있으면 좋겠다.

