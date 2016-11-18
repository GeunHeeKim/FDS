Webpack 은 프론트부분의 파일을 모아주는 것이다.

WebPack - 서버사이드에서 하는 모듈 관리를 프론트엔드에서도 하자.

Bundler 라고 한다. 이중에 최근에 핫한게 WebPack 이다.

브라우저리파이는 간단한 기능만 있지만,
웹팩은 기능이 많다.


npm i -g webpack <--npm 설치 명령어

webpack entry.js bundle.js <-- 번들 파일을 생성한다.

패키지 안에 있는 것들 설치 : npm install

파일을 읽어서 화면에 보여주는 명령어 : cat package.json 

node_modules 설치 명령어 :
 
웹팩의 엔트리 제이에스 파일을 번들 제이에스 파일을 만드는 명령어 : webpack entry.js bundle.js

제이쿼리 빌딩 - 내가 필요한 모듈만 내가 조합해서 쓰는것.

jQuery.ajax();
-클래스 메서드(Class Methods) = 유틸리티메서드(Utility Methods) = 스태틱 메서드(Static Methods)


소스맵 만들기 : webpack entryjs bundle.js -d 

오류 보기: ctrl + p

실시간 변경사항있으면 번들링 : webpack -w entry.js bundle.js

JSON 파일은 마지막에 콤마, 홑따옴표 쓰면 안된다.

webpack 쓸때, 매번 번들링 할때 sass 파일등 까지 번들하면 시간이 오래 걸리므로,
폴더 구조를 잘 짤 필요가 있다.

npm start 한번 하고 나서는
npm run server 를 하면 매번 새탭으로 안 열린다.
