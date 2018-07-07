const plus = 5;
document.getElementById('input').oninput = function(){
  let str = (this.value);
  let out = '';
  for(i = 0;i < str.length;i++){
    let code = str.charCodeAt(i);
	code+= plus;
	out += String.fromCharCode(code);
  }
document.getElementById('str').innerHTML = out;
};

document.getElementById('decipher').onclick = function(){
  let a = document.getElementById('str').innerHTML;
  let out = '';	
    for(i = 0;i < a.length;i++){
      let code = a.charCodeAt(i);
	  code-= plus;
	  out += String.fromCharCode(code);
  }
  document.getElementById('str2').innerHTML = out;
};