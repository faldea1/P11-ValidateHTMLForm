
//CONSTANTES

const MyForm = document.getElementById('myform');
const MyAlert = document.getElementById('myalert');
const MyCard = document.getElementById('mycard');
const MyCVC = document.getElementById('myCVC');
const MyAmount = document.getElementById('myamount');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const MyCity = document.getElementById('mycity');
const MyState = document.getElementById('mystate');
const MyPostalCode = document.getElementById('mypostalcode');
const MyMessage = document.getElementById('mymessage');
const MySend = document.getElementById('mysend');


//HIDE ALERT MESSAGE

MyAlert.style.display = "none";

//FUNCIÓN

MyForm.addEventListener('submit', (e) => {
        
    //primero evitar comportamiento default: e.preventDefault();  
    //console.log('formulario ha sido enviado');
    
    //show alert message
    if (SubmitEvent){
        MyAlert.style.display = "block";

    }

    
    //text content
    if (FirstName.value === '' || FirstName == null){
        e.preventDefault();
        FirstName.style.backgroundColor = "red";
    }

    if (LastName.value === '' || LastName == null){
        e.preventDefault();
        LastName.style.backgroundColor = "red";
    }

    if (MyCity.value === '' || MyCity == null){
        e.preventDefault();
        MyCity.style.backgroundColor = "red";
    }

    if (MyState.value === '' || MyState == null){
        e.preventDefault();
        MyState.style.backgroundColor = "red";
    }

    if (MyMessage.value === '' || MyMessage == null){
        e.preventDefault();
        MyMessage.style.backgroundColor = "red";
    }


    //number content
    if (MyCard.value === '' || MyCard == null){
        e.preventDefault();
        MyCard.style.backgroundColor = "red";
    }

    if (MyCVC.value === '' || MyCVC == null){
        e.preventDefault();
        MyCVC.style.backgroundColor = "red";
    }

    if (MyAmount.value === '' || MyAmount == null){
        e.preventDefault();
        MyAmount.style.backgroundColor = "red";
    }

    if (MyPostalCode.value === '' || MyPostalCode == null){
        e.preventDefault();
        MyPostalCode.style.backgroundColor = "red";
    }

})