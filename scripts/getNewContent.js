/**
 * Created by 吴晨 on 2017/3/11.
 */
function getNewContent() {
  var request = getHTTPObject();
  if (request) {
    request.open( "GET", "example.txt", true );
    // onreadystagechange是一个事件处理函数，它会在服务器给XMLHttpRequest对象送回响应时被触发执行。
    request.onreadystatechange = function () {
      // 处理响应
      if (request.readyState == 4) {
        alert("Response Received");
        var para = document.createElement("p");
        var txt = document.createTextNode(request.responseText);
        para.appendChild(txt);
        document.getElementById('new').appendChild(para);
      }
    };
    request.send(null);
  } else {
    alert('Sorry, your browser doesn\'t support XMLHttpRequest');
  }
  alert("Function Done");
}
addLoadEvent(getNewContent);