부모 박스에 적용하는 속성 : display: flex or display: inline-flex

이렇게 되면 안에 있는 자식 박스는 플렉스 아이템(flex items)이 된다.

**관련 속성**

```css
1. flex-direction: 
                     
   row (default) - 왼쪽에서 오른쪽으로 정렬.(이 때 주축은 가로, 교차축은 세로)
   row-reverse   - 오른쪽에서 왼쪽으로 정렬.

   column        - 위에서 아래로 정렬.(이 때 주축은 세로, 교차축은 가로)
   column-reverse
   
 2. flex-wrap: nowrap(default) - flex items 가 한 줄로 정렬되게 함.
               wrap            - flex items 가 여러줄로 정렬되게 함.
               wrap-reverse    - flex items 가 여러줄인데, 역방향으로 정렬됨.
               
 3. flex-flow (flex-direction + flex-wrap 두개의 속성을 한 번에 표현하는 속기형 표현.)  
    ex) flex-flow : wrap nowrap (default)
    
 4. justify-content : flex-start(default) - 주축 방향의 시작점에서 부터 플렉스 아이템이 배치됨.
                      flex-end            - 주축 방향의 끝점부터 플렉스 아이템이 배치됨.
                      center              - 플렉스 아이템들 사이에 여백이 없이 주축의 가운데에 
                                            아이템들이 딱 달라붙어서 정렬됨.
                      space-between       - 주축의 시작점과 끝점에 플렉스 아이템들이 딱 달라 붙고, 
                                            중간 사이사이 간격이 균일하게 배치됨.
                      space-around        - 주축의 시작점과 끝점에도 빈 공간을 만들고,
                                            사이 사이에도 여백을 두고 플렉스 아이템이 배치됨.
                                            
  5. align-items : stretch
                   flex-start
                   flex-end
                   center
                   baseline ( 교차축 기준 아이템들중 글자의 베이스라인이 교차축의 시작점으로 가장 먼 아이템이
                              교차축 시작점에 위치한다.)
                    
  6. align-self (플렉스 아이템에 적용하는 속성으로 개별적으로 교차축방향의 설정가능.):
                   auto
                   stretch
                   flex-start
                   flex-end
                   baseline
                   center
                   
   7. align-content(여러줄일때 교차축 방향으로 박스 배치를 할 수 있음) : stretch(default),
                                                                     flex-start,
                                                                     flex-end,
                                                                     center,
                                                                     space-around,
                                                                     space-between
                                                                     
    8. order (flex items property) : 양수, 음수 값 모두 가능. 숫자대로 순서 변경이 가능하다.           

```
                    
                    
* flex-grow : flexible item들이 차지할 너비들에 대한 증가형 숫자를 지정한다.
* flex-shrink : flexible item들이 차지할 너비들에 대한 감소형 숫자를 지정한다.
* flex-basis : item의 길이를 지정한다.
* auto : 1 1 auto와 같다.
* initial : 0 1 auto와 같다.
* none : 0 0 auto와 같다.
* inherit : 부모 요소로부터 값을 상속 받는다.
