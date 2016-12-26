
1. 배열 - 변수 하나에 여러개의 값을 담을 수 있다.

2. 변수에 담을 수 있는 값은 8개 이다. - Number, String, Boolean, Null, Undefined, 클래스, 클래스 인스턴스, 함수

```js
var h = '34';
h = +h;
```

#### 3. 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
```js
var r = '3.141592';
r = Number(r);
```

### 숫자와 단위(문자)를 포함한 문자 (단위 유형)을 숫자로 변환하다.

#### 단위를 제거하는 함수를 사용한다.
```js
var parse_int   = window.parseInt(font_size, 10);  // 내장 메소드 parseInt 를 사용하여 10진수로 반환하라.
var parse_float = window.parseFloat(font_size, 10);
```
- `parseInt`('단위유형의문자', '반환진수') 해석해서 `정수`를 반환
- `parseFloat`('단위유형의문자', '반환진수') 해석해서 `실수`를 반환

※ 각 브라우저마다 실수를 해석하는 결과 값이 다르기 때문에 가급적 결과 값이 정수가 나오게끔 설계하는것이 좋다.

### style 속성을 사용하지 않고 CSS문서의 스타일 값을 가져오는 방법

#### 표준 방법 (모던 웹 브라우져 + IE 9 이상)
```js
window.getComputedStyle({문서객체}).fontSize
```

#### 비 표준 방법 (IE 8 이하)
```js
{문서객체}.currentStyle.fontSize
```

