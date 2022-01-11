var t="hello javascript";
var str="webkmobilek2002 "

document.write(`${t.charAt(4)} <br>`);
document.write(`${t.indexOf('j')} <br>`);
document.write(`${t.indexOf('a')} <br>`);
document.write(`${t.lastIndexOf('a')} <br>`);
document.write(`${t.match('join')} <br>`);
document.write(`${t.replace('hello', "hi")} <br>`);
document.write(`${t.search('javascript')} <br>`);
document.write(`${t.slice(4,10)} <br>`);
document.write(`${t.substr(4,3)} <br>`);
document.write(`${t.substring(0,3)} <br>`);
document.write(`${t.split(" ")} <br>`);
document.write(`${str.split("k")} <br>`);
document.write(`${str.toLowerCase()} <br>`);
document.write(`${str.toUpperCase()} <br>`);
document.write(`${str.length} <br>`);
document.write(`${str.concat("web")} <br>`);
document.write(`${str.trim()} <br>`);

var j="Hello Thank you good luck to you";
document.write(j.charAt(16), "<br>");
document.write(j.indexOf('you'), "<br>");
document.write(j.indexOf('you', 16), "<br>");
document.write(j.lastIndexOf('you'), "<br>");
document.write(j.lastIndexOf('you', 25), "<br>");
document.write(j.match('luck'), "<br>");
document.write(j.search('you'), "<br>");
document.write(j.substr(12, 5), "<br>");
document.write(j.substring(6, 13), "<br>");
document.write(j.replace('you', 'me'), "<br>");
document.write(j.toLowerCase(), "<br>");
document.write(j.toUpperCase(), "<br>");
document.write(j.length, "<br>");
document.write(j.split(' '), "<br>");

var s=j.split(' ');
document.write(s[0], '<br>');
document.write(s[4], '<br>');

var char="A";
var k=char.charCodeAt(0);
document.write(k, '<br>');
document.write(String.fromCharCode(65), '<br>');
/* 
var userName = prompt('당신의 영문 이름은?', '');
var upperName = userName.toUpperCase();
document.write(upperName, '<br>')
 */
/* 
var userNum = prompt('당신의 연락처는?', '');
var result = userNum.substring(0, userNum.length -4) +"****";
document.write(result, '<br>');
 */

 var userEmail = prompt('당신의 이메일 주소는?', '');
 var arrUrl = ['.co.kr', '.com', '.net,', '.or.kr', '.go.kr'];

 var check1 = false;
 var check2 = false;

 if (userEmail.indexOf('@') > 0) check1 = true;

 for(var i=0; i<arrUrl.length; i++){
     if(userEmail.indexOf(arrUrl[i])>0){
         check2 = true;
     }
 }

 if(check1 && check2){
     document.write(userEmail);
 } else {
     alert('이메일 형식이 잘못되었습니다.');
 }