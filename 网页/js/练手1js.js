var ismonth=new
Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");
var isnday=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日");
today=new Date();
Year=today.getYear();
Date=today.getDate();
if (document.all) {
	document.write="今天是:"+Year+"年"+isnMonth[today.getMonth()]+Date+"日"+isnDay[today.getDay()];

};