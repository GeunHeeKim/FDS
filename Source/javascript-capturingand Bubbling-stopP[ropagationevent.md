**Capturing 과 Bubbling 는 부모와 자식의 영역이 겹쳐있을때 발생한다.**

   Capture 는 부모로부터 자식으로

   Bubbl는 자식이 부모에게 영향을 끼치는 방식.

   target는 클릭한 요소를 말함.
   
   current는 이벤트가 전파되고 있는 중 현재 영향을 받은 요소를 가리킴.

   일반 함수나 생성자 함수는 모두 prototype이 생성된다.

   aa.stopImmediatePropagation() - 자신에게 걸린 이벤트 까지도 모두 전파 중지!!(즉, 실행 안함)

   aa.stopPropagation() - 버블링일때 자신이 아닌, 부모로 거슬러 올라가는 이벤트 전파 중지.
