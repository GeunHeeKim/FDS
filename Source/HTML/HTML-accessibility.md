WAI-ARIA 접근성 표준

기존 HTML4에서 사용되던 summary 속성은 HTML5에서 지원하지 않는다.
따라서 WAI-ARIA 1.0 접근성 표준을 사용하여 테이블 내용이 무엇인지 알려준다.
```html
<table aria-describedby="hd-curture-project-table-summary">...</table>
<p
  class="readable-hidden"
  id="hd-curture-project-table-summary">
  현대카드 컬처프로젝트 24 시규어 로스 티켓 예매 정보를 확인하기 위한 7행 5열로 구성된 표입니다.
</p>
```
