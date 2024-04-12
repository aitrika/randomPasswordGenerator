const passwordbox=document.getElementById("password");
const length =12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const symbol="!@#$%^&*()_+/?<>,.;-`~`";
const all= upperCase+lower+num+symbol;

function generatePassword(){
  let password="";
  password+= upperCase[Math.floor(Math.random() * upperCase.length)];
  password+= lower[Math.floor(Math.random() * lower.length)];
  password+= num[Math.floor(Math.random()  * num.length)];
  password+= symbol[Math.floor(Math.random() * symbol.length)];
  while(length > password.length){
    password+= all[Math.floor(Math.random() * all.length)];
  }
  passwordbox.value=password;
}

function copyPassword(){
  passwordbox.select();
  document.execCommand("copy");
}