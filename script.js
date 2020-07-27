function numberClick(num) {
    document.getElementById('numberInput').value = document.getElementById('numberInput').value + num;
}

function acClick() {
    document.getElementById('numberInput').value = ""
}

function equal() {
    document.getElementById('numberInput').value = eval(document.getElementById('numberInput').value)
}

function delClick() {
    var numberInput = document.getElementById("numberInput").value;
    document.getElementById("numberInput").value = numberInput.substr(0, numberInput.length - 1);
}

