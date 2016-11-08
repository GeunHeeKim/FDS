**제이쿼리 버전별 분기 하는 방법.**

>1. 제이쿼리 사이트에서 migrate를 찾아서 해당 코드를 최근 코드로 바꿔 준다.
>2. 아래와 같은 방식으로 나눠서 사용한다.

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="UTF-8">
  <title>jQuery 버전 공유</title>
  <!-- jQuery 라이브러리 호출 -->
  <!-- jQuery v1 -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <!-- jQuery v3 -->
  <script src="lib/jquery.min.js"></script>
</head>
<body>


<script src="js/jquery-v3-action.js"></script>
<script src="js/jquery-v1-action.js"></script>
</body>
</html>
```

```javascript
// jQuery v1
(function($){
  'use strict';
  console.log('jQuery version:', $().jquery);
})(jQuery);

```

```javascript
// jQuery v3
(function($){
  'use strict';
  console.log('jQuery version:', $().jquery);
})(jQuery.noConflict(true));
```
