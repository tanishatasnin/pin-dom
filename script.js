function getPin(){
               const pin= Math.round(Math.random() * 10000);
const pinString =pin+'';
if(pinString.length==4){
               return pin;
}
else{
//             console.log('get the element again',pin)  ;
            return getPin() ;
}
}


function genatatePin(){
const pin =getPin();
document.getElementById('disply-pin').value=pin;

}
document.getElementById('key-pad').addEventListener('click',function(event){
             const number = event.target.innerText;
             const calcInput= document.getElementById('typing-number');
if(isNaN(number)){
               // console.log(number);
               if(number=='C'){
                        calcInput.value='';      
               }
}
else{
               
               const previousNum = calcInput.value;
               const newNum =previousNum + number;
               calcInput.value=newNum;
                          
}


});

function submitButton(){
               const pin =document.getElementById('disply-pin').value;
               const typnum =document.getElementById('typing-number').value;
if(pin==typnum){
               const passed =document.getElementById('passed');
               passed.style.display='block';
}
else{
               const failed=document.getElementById('failed');
               failed.style.display ='block';
 }}
 
