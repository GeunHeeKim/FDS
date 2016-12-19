1. 
```javascript
var test = "value" ;
(test === "value")? console.log ("this is true") : console.log ("this is false")
```

2. 다중 삼항식
```javascript
conditionA()? processA()
: coditionB()? processB() 
: conditionC()? processC(): processC(C condition is false)
```
3. if문의 경우 조건이 3개 이상인 경우 switch문이 효율적이다.
```javascript
switch(){
  case 'A' : 
    conditionA
    break;
    
    case 'B' :
    conditionB
    break;
    
    case 'C' :
    conditionC
    break;
    
    default:
    default condision
}
```
