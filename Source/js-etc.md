
**javascript 문법**

1. ";" 를 쓰는 경우 : 변수 선언시, do while

2. ";"를 안 쓰는 경우 : for 또는 while 같은 함수에는 안씀

3. "this"는 상대적인 값이다.

**기타 내용**

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/js_comment.PNG">

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/js_operation.PNG">

<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/js-node-call-codelist.PNG">

* for ~ in 문은 객체 내의 속성을 탐색할때 이용한다.

**클로저(Closure)**

*클로저(Closure)는 독립적인 (자유) 변수를 가리키는 함수이다. 그리 클로저 안에 정의된 함수는 만들어진 환경을 '기억한다'.

*클로저는 두 개의 것(함수, 그 함수가 만들어진 환경)으로 이루어진 특별한 객체의 한 종류이다. 환경이라 함은 클로저가 생성될 때 그 범위 안에 있던 여러 지역 변수들로 이루어진다. 

```javascript
function makeAdder(x) {
  return function(y){
    return x + y ;
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

print(add5(2));
print(add10(2));
```
**IIFE 패턴**

```javascript
 ( function(){ console.log('IIFE Pattern'); }() );  // 권장
  ( function(){ console.log('IIFE Pattern'); } )();
```

