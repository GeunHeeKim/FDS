* 6,7,8 고려하려면 1버전의 제이쿼리가 필요하다.


* 여러 종류의 스크립트 라이브러리를 쓸경우 $ 사용이 충돌날 수 있으므로,

* jQuery 팩토리 함수를 사용한다.

* jQuery 팩토리 함수 (자바스크립트의 팩토리 패턴을 사용하기에 붙여진 이름)

```javascript
jQuery()
```

* jQuery 에서 prototype 은 fn(별칭) 이라고 쓴다.

```javascript
jQuery(function() {
  $fs.prependTo('.gnb');
});
//이 경우  rdady가 없지만, jQuery 내에 바로 함수를 선언하는 것은
//document가 ready되면 함수를 실행하라는 의미가 함축 되어 있다.

jQuery(document).ready(function(){
  $fs.prependTo('.gnb');
})
```


**jQuery 상용 실행 문구**

```javascript
(function(global,$){
  'use strict';
})(this, this.jQuery);


jQuery(function($){
  //함수 내부이기 때문에
  //안정적으로 $를 jQuery로 사용할 수 있다.
  
});
```
