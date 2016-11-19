부모 박스에 적용하는 속성 : display: flex or display: inline-flex

이렇게 되면 안에 있는 자식 박스는 플렉스 아이템(flex items)이 된다.

**관련 속성**

>1. flex-direction : 
>                     
>   row (default) - 왼쪽에서 오른쪽으로 정렬.(이 때 주축은 가로, 교차축은 세로)
>   row-reverse   - 오른쪽에서 왼쪽으로 정렬.
>
>   column        - 위에서 아래로 정렬.(이 때 주축은 세로, 교차축은 가로)
>   column-reverse
                    
                    
* flex-grow : flexible item들이 차지할 너비들에 대한 증가형 숫자를 지정한다.
* flex-shrink : flexible item들이 차지할 너비들에 대한 감소형 숫자를 지정한다.
* flex-basis : item의 길이를 지정한다.
* auto : 1 1 auto와 같다.
* initial : 0 1 auto와 같다.
* none : 0 0 auto와 같다.
* inherit : 부모 요소로부터 값을 상속 받는다.
