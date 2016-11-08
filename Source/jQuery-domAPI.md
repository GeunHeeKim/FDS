아래와 같이 묶어서 사용하면, 다른 스크립트 코드와의 충돌을 방지할 수 있다.
```javascript
(function($){
  'use strict';
  // $ === jQuery

  var $body = $('body').attr('data-end-body', 'yes');

  console.log('$body:', $body);

})(jQuery);

```


아래 코드와 같이 만들면,  jQuery.noConflict 자체가 jQuery 함수 객체 이므로,
$ 를 사용해서 제이쿼리를 사용할 수 있게 된다.

아마도 fds.$ 이렇게??
```javascript
var fds = (function() {
  'use strict';

  return {
    $: jQuery.noConflict(true)
  };
})();
```


