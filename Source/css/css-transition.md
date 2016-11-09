##Transition

CSS 트랜지션(transitions)은 CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공.


css 속성의 변화가 일정한 시간동안에 일어나게 하는 것.

```
transition:width 2s, height 2s, background-color 2s, transform 2s;
```


이와 같이 각 속성별로 transition 의 변화 시간값을 달리 설정할 수 있다.

```
transform:rotate(180deg);
```

해당 영역을 변형하는 것.

```
transition-property;

transition-duration - 변형이 일어나는 시간 설정;

transition-timing-function:ease linear;
transition-timing-function:step-end;
transition-timing-function:(4, end);

transition-delay:.5s; //0.5 지연되었다가 실행됨.

```

transition 단축문법

```
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

