1.계층구조가 들여쓰기로 생성된다.

2.** 속성 : 요기에! 반드시 빈칸이 있어야 한다.

3.스페이스바 랑 탭을 섞어쓰면 안된다. 가능하면 스페이스바로 쓰기!!!

4.코알라 - 툴은 무료로 SASS 를 컴파일해주는 툴이다.

5.SASS to SCSS 컨버트 하는 툴들을 검색해서 바꿀 수 있다.

  http://css2sass.herokuapp.com/
  
1. node-sass 2.-w 3.-r  4.--output-style expanded 5. --source-map ./css  6. sass -o css

1.노드 사스 > 2.지켜봐라 > 3.하위폴더도 바꿔라 > 4.css 파일로 내보내는 형식은 expanded로 내보내라> 5. 소스맵을 하위 css 폴더에 만들어라 >6.sass를 css 파일로 내보내라


node-sass sass-to-css.sass > style.css
 : sass-to-css.sass 파일을 style.css 파일로 변환해라


node-sass --help

sass 명령어 보기

워크 스페이스(workspace) - 크롬에서 - 소스보기창에서 > source > 폴더 우클릭 해서 허용하고 쓸 수 있음.


주석처

&는 한칸 앞의 것을 가져온다. - 뒤에 붙을수도있다.

미디어 쿼리 구문을 묶어서 css 로 내보내는 처리기가 있다.

!optional 을 뒤에 붙이면 없는 모듈이라도 버그가 안난다.

%를 붙이면 해당클래스는 css 파일에서는 클래스 명이 안보이고, 대신 속성만 갖다 쓴다.

```sass
%reset-list
  margin:
   top: 0
   left: 0
  ```
  
node sass command text

node-sass -w -r sass -o css

node-sass -w -r sass --output ./ --output-style expanded --source-map ./

node-sass -w -r sass -o css --source-map ./css --output-style expanded
