var window = {innerWidth:1920,screenX:-8,screenY:-8,innerHeight:909,screen:{height:1080,width:1920}
}
;var document = {cookie:"",documentElement:{clientWidth:1903,clientHeight:909}
,body:{clientWidth:1903,clientHeight:2154}
}
;var dynamicurl="/";var wzwschallenge="RANDOMSTR1989";var wzwschallengex="STRRANDOM1989";var template=3;var encoderchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function KTKY2RBD9NHPBCIHV9ZMEQQDARSLVFDU(str) {var out, i, len;var c1, c2, c3;len = str.length;i = 0;out = "";while (i < len) {c1 = str.charCodeAt(i++) & 0xff;if (i == len) {out += encoderchars.charAt(c1 >> 2);out += encoderchars.charAt((c1 & 0x3) << 4);out += "==";break;}
c2 = str.charCodeAt(i++);if (i == len) {out += encoderchars.charAt(c1 >> 2);out += encoderchars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));out += encoderchars.charAt((c2 & 0xf) << 2);out += "=";break;}
c3 = str.charCodeAt(i++);out += encoderchars.charAt(c1 >> 2);out += encoderchars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));out += encoderchars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));out += encoderchars.charAt(c3 & 0x3f);}
return out;}
function findDimensions(){var w= window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var h= window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;if (w*h <= 120000) {return true;}
var x = window.screenX;var y = window.screenY;if (x + w <= 0 || y + h <= 0 || x >= window.screen.width || y >= window.screen.height) {return true;}
return false;}
function QWERTASDFGXYSF(){var tmp = wzwschallenge+wzwschallengex;var hash = 0;var i    = 0;for(i = 0; i < tmp.length; i++) {	hash += tmp.charCodeAt(i);}
hash *= 7;hash += 111111;return "WZWS_CONFIRM_PREFIX_LABEL3"+hash;}
function HXXTTKKLLPPP5(){if(findDimensions()) {}
 else {var cookieString = "";var res = "";	cookieString = "wzwstemplate="+KTKY2RBD9NHPBCIHV9ZMEQQDARSLVFDU(template.toString()) + "; path=/";res+=cookieString;res+=';';	var confirm = QWERTASDFGXYSF();cookieString = "wzwschallenge="+KTKY2RBD9NHPBCIHV9ZMEQQDARSLVFDU(confirm.toString()) + "; path=/";res+=cookieString;res+=';';	return res;}
}
HXXTTKKLLPPP5();
