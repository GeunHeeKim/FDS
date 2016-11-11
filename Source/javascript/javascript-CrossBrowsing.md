```javascript

    (function(global){
      'use strict';
      // ----------------------------------
      // Native JavaScript
      // ----------------------------------
      // classList 지원 유무에 따른 조건 분기
      // ----------------------------------
      var hasClass, addClass, removeClass, toggleClass;

      // 조건 1. classList를 지원하는 웹 브라우저
      if ( 'classList' in Element.prototype ) {
        hasClass = function(el, class_name) {
          return el.classList.contains(class_name);
        };
        addClass = function(el, class_name) {
          el.classList.add(class_name);
        };
        removeClass = function(el, class_name) {
          el.classList.remove(class_name);
        };
        toggleClass = function(el, class_name) {
          el.classList.toggle(class_name);
        };
      }
      // 조건 2. classList를 지원하지 않는 웹 브라우저
      else {
        // hasClass(el, class_name)
        hasClass = function(el, class_name) {
          // @el {element_node}
          // @class_name {string}
          var el_classes = el.className.split(' ');
          for ( var i=0, l=el_classes.length; i<l; i++ ) {
            var _class = el_classes[i];
            if( _class === class_name) {
              return true;
            }
          }
          return false;
        };
        // addClass(el, class_name)
        addClass = function(el, class_name) {
          if ( !hasClass(el, class_name) ) {
            el.className += ' ' + class_name;
          }
        };
        // removeClass(el[, class_name]
        removeClass = function(el, class_name) {
          class_name = class_name || '*';
          if ( class_name === '*' ) {
            // 모든 클래스 속성 제거
            el.className = '';
          }
          else {
            if ( hasClass(el, class_name) ) {
              // 해당 클래스 속성이 있다면 제거
              var el_classes = el.className.split(' ');
              var filter_classes = [];
              for ( var i=0, l=el_classes.length; i<l; i++ ) {
                var _class = el_classes[i];
                if( _class !== class_name) {
                  filter_classes.push(_class);
                }
              }
              el.className = filter_classes.join(' ');
            }
          }
        };
        // toggleClass(el, class_name)
        toggleClass = function(el, class_name) {
          // 클래스 속성 유무를 조건 검증, hasClass()
          if ( hasClass(el, class_name) ) {
            // 클래스 속성이 있으면 제거, removeClass()
            removeClass(el, class_name);
          } else {
            // 클래스 속성이 없으면 추가, addClass()
            addClass(el, class_name);
          }
        };
      }

      // radioClass(el, class_name)

      global.hasClass    = hasClass;
      global.addClass    = addClass;
      global.removeClass = removeClass;
      global.toggleClass = toggleClass;

    })(this);
```
