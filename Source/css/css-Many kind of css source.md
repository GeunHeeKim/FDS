
## to remove image unnessary space.

 img 는 하단에 빈공간이 이유없이 생기므로, vertical-align: top을 넣어야함.

**Fonts
css 로 html 에 있는 영문의 형태를 바꾸는 것.

```
text-transform: uppercase;
```

스포카한 산스체 링크:
https://github.com/spoqa/spoqa-han-sans/blob/master/css/SpoqaHanSans-kr.css

####웹폰트 쓰는 법

1. font awesome 사이트를 이용한다.
나에게 할당된 cdn 코드 :
<script src="https://use.fontawesome.com/2229cdbbdb.js"></script>

2. 샘플  css
```css
.main-menu ul a:hover::before,  {
font-family: "fontello";
	content: "\f113";
	color:pink;
}
```

3. 웹 폰트를 가상요소로 쓸 때 content 에 넣을 코드 참고링크:
https://astronautweb.co/snippet/font-awesome/


font 의 vertical align 이 안 맞을때는 line-height 의 수치를 조정하면 된다.


###Animation
transition - toleft : to 는 방향을 말하므로, 오른쪽에서 왼쪽으로 말한다. left100% 면 left 로 간다.
예를 들어 left:10% 를 빼고 칠해진다 라는 의미이다.

###Z - INDEX

부모요소에는 zindex 값 : 0
가상요소에는 zindex 값 : -1


###Border 관련 css3

배경관련 CSS3의 새로운 기능

border: 20px solid rgba(255, 0, 0, 0.3);
background-color: hsla(120,100%,25%,0.3);
rgba, hlsa 값을 배경 색상으로 사용할 수 있다.

```
.clip-padding {
  background-clip: padding-box;
}

.clip-content {
  background-clip: content-box;
}
```
<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/bcg-clip.PNG">


background-clip : 박스모델에 배경이 적용되는 영역을 지정할 수 있다. (기본은 border)

background-origin : 기준점을 설정하여 배경이미지 적용 (기본은 padding)

background-size : cover | contain | px | % | em | rem 사용 가능

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/bcg-size.png">

cover 이미지 크기 비율을 그대로 유지한 상태에서 이미지가 들어 있는 영역의 가로 또는 세로에 이미지를 맞춘다.(가로와 세로 중 큰 값에 맞춘다)
contain 이미지 크기 비율을 그대로 유지한 상태에서 원하는 영역에 전체 이미지가 들어가도록 가장 작은 크기로 이미지 스케일을 조정한다.(가로와 세로 중 큰 값에 맞춘다)

*background 속기형 작성
```
 selector {background: (color) (url) (repeat) (attachment) (position)}
 ```
