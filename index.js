let string = "";
let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        // console.log(e.target);
        if(e.target.innerHTML == "="){
            string = eval(string);
            result.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            result.value = string;
    }
    })
   let clrScr =  document.querySelector('.Clear');
   clrScr.addEventListener('click', ()=>{
    string = ""
    result.value = string;
   })

})

