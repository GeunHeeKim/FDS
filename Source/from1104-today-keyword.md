* 객체를 생성하는 생성자(Constructor)

* 생성자 함수와 일반 함수를 구분하기 위해 자바스크립트 이름 관례 - 

* 생성자 함수 이름의 첫글자를 대문자로 작성한다. - 예) Number(), String(),Boolean()

* 원시 데이터유형은 *객체가 아니지만*  객체의 속성을 가져다 쓸 수 있다.

* [ttw.length - 1] 을 하면 시작값은 0 부터 이기때문에, -1을 하면 마지막 값을 빼온다.

* null,undefined 는 객체가 아니다.

* javascript가 갖고 있는 속성들을 검색해보고 싶으면 console창에 검색 해보기.
```javas
  console.dir(Math)
  console.dir(Number);
  console.dir(String);
```

* substring(8,13); ->문자열의 8번째부터 13번째 문자까지의 text를 가져온다.

  'one two three'.split(' '); ->내용을 배열로 만듦.
 
1.  push(앞에) , unshift(뒤에) - 삽입
    
    pop(앞에서) , shift(뒤에서) - 빼냄
    
2. push, pop, shift, unshift 는 모두 원본 데이터를 변경한다.

   slice 는 원본데이터를 보존 하고 해당 내용을 빼온다.
   
3. 배열 메소드 빌려쓰기 패턴
```javascript
  // [].forEach.call(all_els, function(el){
  var forEach = Array.prototype.forEach;
  forEach.call(all_els, function(el){
     console.log(el);
  });

  // ------------------------------------------

  // 노드리스트(유사배열)를 배열화 패턴
  all_els = makeArray(all_els);
  all_els.forEach(function(el){
     console.log(el);
  });
 ```
 
4.  console.log(arguments) 찍어보기.

5. .concat - string, array 가 갖고있는 메소드 , 내용을 붙여주는 메소드

6. 함수 내에서만 살고 있는 객체 - arguments [] = Array.prototype

 console.log(arguments) 찍어보기.
 
 7. 
```javascript
// 객체 지향 자바스크립트 패턴 1  //
////////////////////////////

function Tab(){} // 생성자 함수

// Tab.prototype; // 프로토타입 객체

var my_tab = new Tab(); // 객체 인스턴스 생성

my_tab.activeTab; // undefined

Tab.prototype.activeTab = function() {}; // 프로토타입 객체 능력 추가

my_tab.activeTab; // function(){} // 인스턴스 객체는 그 능력을 사용할 수 있다.
```

aa.classList.add('aa') -> 클래스 추가하는 코드



