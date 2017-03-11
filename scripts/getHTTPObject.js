/**
 * Created by 吴晨 on 2017/3/11.
 */
//该函数通过对象检测技术检测了XMLHttpRequest。如果失败，则检测其他方法，最终返回false或者一个新的XMLHttpRequest对象。
function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {}
      return false;
    }
    return new XMLHttpRequest();
}