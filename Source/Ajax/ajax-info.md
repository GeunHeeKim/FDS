비동기 통신 - 부분을 바꾸는 것 - 기존 방식보다 빠른속도.

ajax 는 접근성이 없어진다. - Live Region 방식으로 하면 접근성이 개선된다.

서버 구동하는 명령어 : http-server -o -a localhost -p 9090

JASON 파일 만드는 명렁어 : npm init -y

디렉트리와 모든 js 파일을 강제로 지우기 : rm -rf node_modules #.js

JSON 파일 마지막에 콤마가있으면 에러난다.

```javascript
//구형 이벤트 모델 ie 6~ 이상 다 됨.
xhr.onreadystatechange = checkAjaxCommunication


//신형 이벤트 모델 ie9 이상
xhr.addEventListener('readystatechange',checkAjaxCommunication);
```

https://github.com/es-shims/es5-shim/blob/master/es5-shim.js

이거를 불러오면 크로스브라우징이 해결된다.

콘솔창에서 Network 에서 disable cache 를 꼭 체크 하고 실행해야한다.

콘솔창에 window.JSON 를 치면 json 의 함수를 볼 수 있다.

