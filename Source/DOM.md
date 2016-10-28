DOM 에서는 text 도 1개의 노드(node)이다.

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/text_node.PNG">

DOM 에서는 코드에서의 공백, 엔터, 주석이 모두 "#text" 노드로 잡힌다.

공백이나 엔터 같은 경우는  빈 텍스트 노드라는 의미이다. - (#text) 로 보여짐.

* 노드의 유형(type) 이 있다.(명령어 : document.ELEMENT_NODE)

* 해당 노드의 하위 모든 노드를 보고 싶으면 명령어 a.childNodes 를 찍어보면 다 볼 수 있다.

* nodeValue는 textNode 만 가질 수 있다.

* 요소노드는 3

* 텍스트노드는 1
