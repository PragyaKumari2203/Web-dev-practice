const input = document.querySelector(".inputText");
const buttons = document.querySelectorAll(".btn");

let string = "";
Array.from(buttons).forEach(((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (value == "=") {
      string = eval(string);
      input.value = string;
    }
    else if(value=="DLT"){
      string=string.slice(0,string.length-1);
      input.value = string;
    }
    else if(value=="AC"){
      string="";
      input.value = string;
    }
    else{
      string+=value;
      input.value = string;
    }
  })
}))