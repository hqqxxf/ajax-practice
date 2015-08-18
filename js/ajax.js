/**
 * Created by Administrator on 2015/8/18.
 */

var xhr = (function(){
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET','README.md',true);
    xhr.send();
    xhr.onreadystatechange = ajaxFun;
    return xhr;
})();
function ajaxFun(){//readyStatus每改变一次就会调用一次该函数
    if(xhr.readyState == 4 && xhr.status == 200){//readyState为0-4之间的值，status为200或404
        var main = document.getElementById('main');
        main.innerHTML = xhr.responseText;
    }
}


