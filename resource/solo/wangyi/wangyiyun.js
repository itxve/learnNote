var ms=[32317208,1307099078,1309833126,28285910,1344200357,1379445403,496869422,1317671992,1388010329,33911781,567999629,490407216,1295655158,1373228032,1399858274,1376535045,1316434237];window.onload=function(){play()};function play(){document.getElementById("app").innerHTML='<iframe id="wymusic" frameborder="no" border="0" marginwidth="0" marginheight="0"  src=""></iframe>';var index=Math.round(Math.random()*ms.length);document.getElementById("wymusic").src="http://music.163.com/outchain/player?type=2&id="+ms[index]+"&height=66"};