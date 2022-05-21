window.onload=()=>{
    let user=JSON.parse(sessionStorage.user || null);
    if(user == null){
        location.replace('/login');
    }else if(user.seller){
        location.replace('/dashboard');
    }
}
/*
let loader=document.querySelector('.loader');
let applyBtn=document.querySelector('.apply-btn');

applyBtn.addEventListener('click',()=>{
    let businessName = document.querySelector('#name');
    let address = document.querySelector('#address');
    let about = document.querySelector('#about');
    let number = document.querySelector('#number');

    if(!businessName.Length){
        showFormError('Invalid Name');
    }else if(!address.length ){
        showFormError('Invalid address');
    }else if(!about.Length){
        showFormError('Invalid about');
    }else if(number.length<10||!Number(number)){
        showFormError('Invalid number');
    }else{
        // send data
        loader.style.display='block';
        sendData('/seller', {
            name:businessName.value,
            address:address.value,
            about:about.value,
            number:number.value,
            email: JSON.parse(sessionStorage.user).email
        })
    }

})*/