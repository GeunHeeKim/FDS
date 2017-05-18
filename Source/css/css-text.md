ttf, otf 는 무거운 텍스트 포맷 이다. 웹용 폰트가 아니다.
`
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
`
