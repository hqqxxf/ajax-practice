/**
 * Created by Administrator on 2015/8/18.
 */
f = function() {return true;};  g = function() {return false;};
(function() {
    if (g() && [] == ![]) {
        f = function f() {return false;};
        //function g() {return true;}
        g = function() {return true;}
    }
})();
console.log(f());
console.log(g());