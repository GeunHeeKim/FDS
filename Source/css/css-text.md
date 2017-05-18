ttf, otf 는 무거운 텍스트 포맷 이다. 웹용 폰트가 아니다.
~~~~
ellipsis
한줄 줄임
h5 {
    width: 100%;
    margin-bottom: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
  
  
  
여러줄 줄임(firefox 에서는 안됨)
  .event-description {
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    height: 3.5em;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

  }
  
text-align: left : 글자 정렬이 양쪽 정렬이면 말 줄임표가 숨겨질 수 있으니 좌측 정렬로
word-wrap: break-word : 잘라버릴 글자를 단어 단위로
display: -webkit-box : 여백 삽입과 같이 유연한 높이 증가를 위해 플렉스 박스형태로 변환
-webkit-line-clamp: 3 : 보여줄 줄 갯수
-webkit-box-orient: vertical : 플렉스 박스의 방향 설정

height 대신에 max-height 를 설정해서 최대치만 제한해도 된다.
~~~~
출처 :http://webdir.tistory.com/483
