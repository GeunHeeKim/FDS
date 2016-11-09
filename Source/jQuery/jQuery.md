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
  
**제이쿼리 함수 안에서의 함수에서의 this 는 DOM 객체를 가리킨다.**

따라서 제이쿼리 메서드를 쓰지 못한다.

따라서 아래와 같이 $()로 감싸줘야 한다.
>$(this).css


jQuery 인스턴스 메소드 = jQuery.fn(prototype)의 메소드

```javascript
  // 일반적인 방법
  // $album.on('click', moveDisk);
  // $album.on('mouseenter', playDisk);
  // $album.on('mouseleave', stopDisk);

  // Method Chaining(메서드 체이닝) = 객체(Object)에서 시작해서 메서드를 읽고, 읽고, 읽는 것.
  // $album
  //   .on('click', moveDisk)
  //   .on('mouseenter', playDisk)
  //   .on('mouseleave', stopDisk);

  // 객체 리터럴 활용
  $album.on({
    'mouseenter': moveDisk,
    'click'     : playDisk,
    'dblclick'  : stopDisk
  });
 ```


offsetParent - position:absolute 인 요소가 실질적으로 움직이는 기준이 되는 부모요소를 가리킴.
offset - 실제 화면의 최상단으로부터 컨텐츠(보더와 패딩을 제외한 실제 컨텐츠 영역)까지의 높이를 가리킴.

