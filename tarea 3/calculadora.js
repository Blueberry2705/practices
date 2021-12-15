function sumar () {
    let primero = document.getElementById('primerNumero');
    console.log (primero)
    let segundo = document.getElementById('segundoNumero');
    console.log (segundo)
    let resultado = parseInt(primero.value)+ parseInt(segundo.value);
    let elemtResult = document.getElementById('resultado');
    elemtResult.innerHTML = resultado

}
let string = '522'
let number = 10
let float = 5.6
let object = {
    nombre : 'nestor',//string number float or boolean
    soltero: true
}
let array = [5,2,5,6,8]
let boolean = false
let nulo = null