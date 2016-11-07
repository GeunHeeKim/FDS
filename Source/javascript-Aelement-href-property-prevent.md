**preventDefault() - a 링크 요소에서  href 라는 속성으로 어딘가를 가려는 속성을 차단하는 방법**

1. return false를 써준다.

2. preventDefault() 라는 함수를 써준다. 이유는 첫번째, return false 에서 할 수 없는 값을 반환 할 수 있고,

   두번째 이 preventDefault() 라는 함수를 쓰면 return false 랑 다르게 href로 어딘가로 가려는 속성을 막고도, 
   
   뒤에 코드를 더 추가 할 수 있다.
