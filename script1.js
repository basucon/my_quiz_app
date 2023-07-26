html_index=1
function nextdiv_1(){
    document.getElementById('dp_box').style.display ='initial';
}
var dd_value;

function letsgo(){
        dd_value =document.getElementById("dropdown").value;
        dd_value =document.getElementById("dropdown").value;
        console.log(dd_value);
        if(dd_value =='easy1'){
            location.href ='easyway.html';
        }else if(dd_value == 'medium2'){
           location.href ='mediumway.html';
        }else if(dd_value == 'hard3'){
           location.href ='hardway.html';
        }else{
            return false;
        }

}


