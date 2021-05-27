

let cartForm = document.querySelector('#cartForm');
let selectInput = document.querySelector('#bankName');


function getAndShowData(){7




    manageCartNumber();
    
    document.querySelector('#CRDHolder').addEventListener('input' , (e)=> {
    
        let boxPlaceholder = document.querySelector('#cardOwnerBox');
    
        boxPlaceholder.innerHTML = ''
    
        let text = document.createElement('span');
    
        let inputValue = e.target.value;
    
        text.innerHTML = inputValue;
    
        boxPlaceholder.appendChild(text)
    
    })

    document.querySelector('#CVV2Number').addEventListener('change' , (e) => {
    
        let boxPlaceholder = document.querySelector('#cvv2Number');

        if ( valueInRange ( e.target.value.length , 3 ) ) {

            boxPlaceholder.innerHTML = ''
    
            let text = document.createElement('span');
        
            let inputValue = e.target.value;
        
            text.innerHTML = inputValue;
        
            boxPlaceholder.appendChild(text)
            

        }

        else if ( valueInRange ( e.target.value.length , 4 ) ) {

            boxPlaceholder.innerHTML = ''
    
            let text = document.createElement('span');
        
            let inputValue = e.target.value;
        
            text.innerHTML = inputValue;
        
            boxPlaceholder.appendChild(text)

        }

        else {

            boxPlaceholder.innerHTML = ''

            let errorMassage = 'شماره (cvv2) باید 3 یا 4 رقم باشد.'

            boxPlaceholder.innerHTML = errorMassage;

        }
    
    })

    document.querySelector('#monthExpireDate').addEventListener('input' , (e) => {
    
        let boxPlaceholder = document.querySelector('#monthExpireDateBox');
    
        boxPlaceholder.innerHTML = ''
    
        let text = document.createElement('span');
    
        let inputValue = e.target.value;
    
        text.innerHTML = inputValue;
    
        boxPlaceholder.appendChild(text)
    
    })
    document.querySelector('#yearExpireDate').addEventListener('input' , (e) => {
    
        let boxPlaceholder = document.querySelector('#yearExpireDateBox');
    
        boxPlaceholder.innerHTML = ''
    
        let text = document.createElement('span');
    
        let inputValue = e.target.value;
    
        text.innerHTML = inputValue;
    
        boxPlaceholder.appendChild(text)
    
    })

    getBankNameAndSetLogo();

    reSizeForm(cartForm);

}

function valueInRange ( value , number ) {

    if(value == number ){
        
        return true;

    }

    else {

        return false

    }

}

function reSizeForm ( form ){

    form.addEventListener('submit' , (e) => {

        document.querySelector('#cartContainer').style.height = '200px';

        form.style.display = 'none'

        document.querySelector('#footer').style.display = 'none';

        e.preventDefault()

    })

}

function manageCartNumber(){

    cartNumber.addEventListener('change' , (e) => {

        let boxPlaceholder = document.querySelector('#cartNumberBox');
    
        if( valueInRange ( e.target.value.length , 16 )){
    
                boxPlaceholder.innerHTML = ''

                let value = e.target.value;

                let cartNumberChar = value.split("");

                cartNumberChar.splice(12 , 4 , '*' , '*' , '*' , '*');
                cartNumberChar.splice(4 , 0 , '-');
                cartNumberChar.splice(9 , 0 , '-');
                cartNumberChar.splice(14 , 0 , '-');

                cartNumberChar.forEach( (numberChar) => {

                    let text = document.createElement('span');

                    text.innerHTML = numberChar;

                    let numberPlaceholder = document.querySelector('#cartNumberBox');

                    numberPlaceholder.appendChild(text);

                });      
    
        }
        else{
    
            boxPlaceholder.innerHTML = ''
    
            let errorMassage = '!!!شماره کارت باید 16 رقم باشد'
    
            boxPlaceholder.innerHTML = errorMassage;
    
        }
    })

}

function getBankNameAndSetLogo (){

    selectInput.addEventListener('input' , (e) => {

        let inputValue = e.target.value;
        let bankLogoPlaceholder = document.querySelector('#bankLogoPlaceholder');
        
        
        switch (inputValue){

            case 'بانک شهر' :
                bankLogoPlaceholder.setAttribute('src' ,"images/bank/shahr.png");
                break;
            
            case 'بانک ایران زمین' :
                bankLogoPlaceholder.setAttribute('src' ,"images/bank/iran-zamin.png");
                break;
            
            case 'بانک افضل طوس' :
                bankLogoPlaceholder.setAttribute('src' ,"images/bank/Afzal-toos.png");
                break;
            
            case 'بانک سرمایه' : 
                bankLogoPlaceholder.setAttribute('src' ,"images/bank/sarmayeh.png");
                break;
            
            case 'بانک دی' : 
                bankLogoPlaceholder.setAttribute('src' ,"images/bank/day.png");
                break;

        
        }



    })



}

function setTimer (minTime , maxTime){

    setInterval(()=>{

        if(minTime <= maxTime){

            document.querySelector('#counterNmuber').innerHTML = minTime;

            minTime++;
        }

        else {

            document.querySelector('#cartContainer').classList.add('disable')
            document.querySelector('#timeOutBox').classList.add('active')

        }
        

    },1000)

}



getAndShowData();
setTimer(0 ,300);

