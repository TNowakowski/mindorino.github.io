'use strict';


for (var i=20 ; i>10 ; i--) {
     
    console.log(i);
     }
for ( var i=1 ; i<5 ;) {
    console.log(++i);
}
for ( var i=1 ; i<5 ; ) {
    console.log(i++);
var iter = 20;
    
    do{
        console.log(iter);
        iter++;
    }
    while ( iter < 23)
}
var a = 0;
while ( a < 10) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
    
    
}
//    przeskakiwanie do kolejnej literacji 
    
    for (var b = 0; b< 10 ; ++b) {
        
        if ( b == 5) {
            continue;
        } else {
            console.log(b);
        }
        
        console.log("--");
    }