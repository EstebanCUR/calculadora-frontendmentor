const btnNumber = document.querySelectorAll('[data-number]');
const btnOperator= document.querySelectorAll('[data-operator]');
const btnEqual= document.querySelector('[data-equal]');
const btnDel = document.querySelector('[data-del]');
const btnDelAll = document.querySelector('[data-del-all]');
const getNumberUp = document.querySelector('[data-numberUp]');
const getNumberDown = document.querySelector('[data-numberDown]');

class Calculadora{
    constructor(getNumberDown, getNumberUp){
        this.getNumberUp = getNumberUp;
        this.getNumberDown = getNumberDown;
        this.numberUp = '';
        this.numberDown = '';
        this.operator = undefined;
    }

    addNumber(number){
        if(number === '.' && this.numberDown.includes('.') ) return
        this.numberDown = this.numberDown + number;
    }

    printDisplay(){
        this.getNumberUp.innerHTML = this.numberUp
        this.getNumberDown.innerHTML = this.numberDown
    }

    chooseOperator(operator){
        if(this.numberDown=='') return
        if(this.numberUp!= ''){
            this.resolveOperation()
        }
        this.operator = operator
        this.numberUp = this.numberDown;
        this.numberDown = ''
    }

    resolveOperation(){
        let resultado
        let convertUp = parseFloat(this.numberUp)
        let convertDown = parseFloat(this.numberDown)
        if(isNaN(convertUp) || isNaN(convertDown)) return
        switch(this.operator){
            case '+':
            resultado = convertUp + convertDown;
            break
            case '-':
            resultado = convertUp - convertDown;
            break
            case 'x':
            resultado = convertUp * convertDown;
            break
            case '/':
            resultado = convertUp / convertDown;
            break
            default: return
        }
        this.numberDown = resultado
        this.operator = undefined
        this.numberUp = ''
    }

    delete(){
        this.numberDown = this.numberDown.slice(0,-1)
    }

    deleteAll(){
        this.numberUp = ''
        this.numberDown = ''
        this.operator = undefined
    }
}

const calculadora = new Calculadora(getNumberDown, getNumberUp)

btnNumber.forEach(btn=>{
    btn.addEventListener('click',()=>{
        calculadora.addNumber(btn.innerHTML)
        calculadora.printDisplay()
    })
})

btnOperator.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        calculadora.chooseOperator(btn.innerHTML);
        calculadora.printDisplay()
    })
})

btnDel.addEventListener('click', ()=>{
    calculadora.delete()
    calculadora.printDisplay()
})
btnDelAll.addEventListener('click', ()=>{
    calculadora.deleteAll()
    calculadora.printDisplay()
})

btnEqual.addEventListener('click',()=>{
    calculadora.resolveOperation()
    calculadora.printDisplay()
})