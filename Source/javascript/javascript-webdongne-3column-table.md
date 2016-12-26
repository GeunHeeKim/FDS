
<img src="https://github.com/GeunHeeKim/FDS/blob/gh-pages/Source/images/column3-align.PNG">
```html
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>

    <style>
        div.image-container {
            position: relative;
        }

        div.image-container img {
            position: absolute;
            left: 0;
            top: 0;
            width: 120px;
        }
        #btnStart {
            padding:5px;
            margin-bottom:5px;
        }
    </style>

    <!--

    미션 04: 이미지를 가로*세로로 배열하기
    버튼을 클릭하면 이미지를 요구사항에 맞게 배열해 주세요.

    요구사항:
        1. 이미지 시작위치는 left:100, top:100 입니다.
        2. 하나의 이미지 영역은 200*200입니다.
        3. 이미지는 3열로 배열해 주세요.

    힌트 :
    $대상.css({
        "left":위치값,
        "top":위치값
    })

    -->
    <script type="text/javascript"  src="../../../libs/jquery-1.11.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // 버튼 클릭 이벤트 실행.
            $("#btnStart").click(function() {

                // 이미지 찾기.
                var $images = $("img");

                // 이미지 개수 구하기.
                var length = $images.length;

                // 여기에 풀이를 입력해주세요.
                for(var i = 0 ; i < length ; i++){
                  // var $img = $images.eq(i);

                  var x = 100 + ((i%3)*200);
                  var y = 100 + (parseInt(i/3)*200);


                  $images.eq(i).css({
                    left:x,
                    top:y
                  });
                }

            });
        });

    </script>
</head>

<body>
    <div>
        <button id="btnStart">
            배열시작
        </button>
    </div>
    <div class="image-container">
        <img src="banners/1.png" >
        <img src="banners/2.png" >
        <img src="banners/3.png" >
        <img src="banners/4.png" >
        <img src="banners/5.png" >
        <img src="banners/6.png" >
        <img src="banners/7.png" >
        <img src="banners/8.png" >
    </div>
</body>
</html>

```
