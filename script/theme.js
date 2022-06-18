const themes = document.querySelector('#switch');
const bodyContainer = document.querySelector('.container')

themes.addEventListener('click',()=>{
    if(bodyContainer.classList.contains('theme2')){
        bodyContainer.classList.remove('theme2')
        bodyContainer.classList.add('theme3')
        
    }else if(bodyContainer.classList.contains('theme3')){
        bodyContainer.classList.remove('theme3')
    }else{
        bodyContainer.classList.add('theme2')
    }
})