html 이 로드 되고 나서 탐색하는 스크립트

```javascript
window.addEventListener('DOMContentLoaded', init);
function init() {
  var $body = jQuery(document.body);
  console.log($body, $body.jquery);
}

```

'DOMContentLoaded' 는 ie9 이상 지원 한다.

'load' 라는 코드와 같은 의미인데, 'load'이벤트는 속도가 많이 느리다.

따라서'DOMContentLoaded' 사용을 권장.

**불러 오는 속도의 순위**

1. DOMContentLoaded Event 이 가장 짧다.<< 2. jQuery Ready Event 그 다음 << 3. Load Event 가장 길다.
