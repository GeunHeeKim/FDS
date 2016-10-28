DOM 에서는 text 도 1개의 노드(node)이다.

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/text_node.PNG">

DOM 에서는 코드에서의 공백, 엔터, 주석이 모두 "#text" 노드로 잡힌다.

공백이나 엔터 같은 경우는  빈 텍스트 노드라는 의미이다. - (#text) 로 보여짐.

* 노드의 유형(type) 이 있다.(명령어 : document.ELEMENT_NODE)

* 해당 노드의 하위 모든 노드를 보고 싶으면 명령어 a.childNodes 를 찍어보면 다 볼 수 있다.

* nodeValue는 textNode 만 가질 수 있다.

* 요소노드(ELEMENT_NODE)의 노트타입은 3

* 텍스트 노드의 노트타입은 1

* trim : 명령어 빈문자열 제거 하는것.

* 대문자는 주로 상수값을 표현한다.

* document.body.chidren - 모든 자식 노드중 요소노드만 뽑아온다!!!

* document.documentElement = <HTML> 을 말한다.

* nodeName = 요소이름을 반환 하는데, 대문자로 반환한다. 그래서NodeName.toLowerCase() 로 해서 소문자로 가져온다.

document.body.children[3].nodeName

*.childNodes 는 자손은 아니고 오직 자식 노드들만을 가리킨다.

**document.documentElement = <html> 를 가리킨다. 정해져 있음. 노드를 찾을때는 이거부터 
찾고 그 다음에 이어서 찾아야 한다.**

document.body.firstElementChild.title = 'first element' - 속성값 변경도 가능하다.

aria-describedby 또는 data- 같은 새로운 속성은 xml DOM(getAttribute) 방식으로 가져와야 한다.

단 하나 form 은 기존 방식(. 붙여서 가져오는 방식)으로 가져와야 한다.

