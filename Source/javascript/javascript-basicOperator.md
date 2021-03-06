**전위 연산자**

```javascript
var a = 1;
var b = ++a;
```

이 경우 결과값은 
a = 2, b = 2 가 된다.

이유는 아래와 같이 처리하기 때문이다.
```javascript
var a = ;
a = a+1;
var b = a;
```


**후위 연산자**
```javascript
var a = 1;
var b = a++;
```
이 경우 결과 값은  a = 2, b = 1 이 된다.


이유는 아래와 같이 처리 되기 때문이다.
```javascript
var a = 1;
var b = a;
a = a+1;
```
정리 하자면, 전위연산자(선증가)의 경우 해당 라인의 명렁이 처리 되기 전에 먼저 증가 연산이 처리되고,

후위연산자(후증가)의 경우 해당 라인의 명령이 처리 된 후에 증가 연산이 처리 된다.

**비교 연산자(Equlity Operator)**
```javascript
<=,
>=,
==,
!=
```
위와 같은 loos한 연산자를 쓸 경우, 
0 = "" 같은 코드를 true로 처리하는 등의 오류가 있으므로,
아래와 같은 (엄격한 비교 연산자)Strict Equlity Operator의 사용을 권장한다.

```javascript
<==,
>==,
===,
!==
```
