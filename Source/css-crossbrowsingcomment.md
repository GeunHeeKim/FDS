#크로스 브라우징 관련
##IE 하위 브라우저를 위한 CSS 파일 로딩 포맷
```
<!-- IE 조건부 주석문 -->
<!--[if lt IE 9]><link rel="stylesheet" href="css/ie/v9.css"><![endif]--> <!--less than gt = great-->
<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css"><![endif]--> <!--less than and equal-->
<!--[if IE 7]><link rel="stylesheet" href="css/ie/v7.css"><![endif]-->
<!--[if IE 6]><link rel="stylesheet" href="css/ie/v6.css"><![endif]-->
```
```
<!-- IE 9 이하 브라우저에서는 해석하지 않는 (부정) 조건부 주석문-->
<!--[if !IE]><!--><link rel="stylesheet" href="css/modern.css"> <!--<[endif]-->
```

```
<!-- [if !IE]><!-->
<html lang="en">
<!--<! [endif]-->
<!--[if IE 6]><html lang="en" class="lt-ie10 lt-ie9 lt-ie8 ie6"><![endif]-->
<!--[if IE 7]><html lang="en" class="lt-ie10 lt-ie9 lt-ie8 ie7"><![endif]-->
<!--[if IE 8]><html lang="en" class="lt-ie10 lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 9]><html lang="en" class="lt-ie10 lt-ie9"><![endif]-->
```
