let names = document.getElementById('names');
let btnAdd = document.getElementById('btnAdd');
let btnSort = document.getElementById('btnSort');
let btnClear = document.getElementById('btnClear');
let resultado = document.getElementById('resultado');
let arr = [];


function sortearNumb() {
    let np = 200;
    let ns = Math.round(Math.random() * np);

    document.getElementById("numeroSort").innerHTML = ns
}

btnAdd.onclick = () => {
    if (names.value != "") arr.push(names.value);
    names.value="";
}

btnSort.onclick = () => {
    let index = (Math.floor(Math.random() *arr.length));
    resultado.innerHTML = `O nome sorteado foi: ${arr[index]}`
}

btnClear.onclick = () =>{
    localStorage.clear();
    resultado.innerHTML = "";
}