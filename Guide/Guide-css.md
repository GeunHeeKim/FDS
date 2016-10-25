var condition = true, count = 0 ;

while (condition) {
  // count++ > 3
  if ( ++count > 3 ) {
    console.log(count);
    condition = !condition;
  }
}

do {
  if ( count++ > 3) {
    condition = !condition;
  }
} while (condition) ;
console.log ('count:', count) ;
