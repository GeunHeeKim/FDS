1. for문의 경우 초깃값은 오직 한 번만 실행된다. 이후로는 실행되지 않는다.

2. for문에서 "continue;" 를 만나면 증감 연산자를 계속 실행하지만, "break;"를 만나면 for문은  
   그대로 정지되며, for문 루프 밖으로 빠져나가게 된다.
   
3. 다중 for 문.
   for문 안에 for문이 또 들어갈 수 있다.
   별 찍기  예제.
 ```javascript
  for(var i=0; i<6; i++) {
    var count = i + 1 ;
    var result = "";
    for(var m = 0 ; m < count ; m++) {

      switch(m){
      case 1 :
      result = "*";
      break;

      case 2 :
      result = "**";
      break;

      case 3 :
      result = "***";
      break;

      case 4 :
      result = "****";
      break;

      case 5 :
      result = "*****";
      }
    }

    document.write(result, "<br>");
  }
  ```
