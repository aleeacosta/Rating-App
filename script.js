document.getElementById("b1").onclick = function Rate() {
    document.getElementById("score").innerHTML = b1.value;
}

document.getElementById("b2").onclick = function Rate() {
    document.getElementById("score").innerHTML = b2.value;
}

document.getElementById("b3").onclick = function Rate() {
    document.getElementById("score").innerHTML = b3.value;
}

document.getElementById("b4").onclick = function Rate() {
    document.getElementById("score").innerHTML = b4.value;
}

document.getElementById("b5").onclick = function Rate() {
    document.getElementById("score").innerHTML = b5.value;
}

document.getElementById("bSubmit").onclick = function Advance() {
    document.getElementById("container-before").style.display = "none"
    document.getElementById("container-after").style.display = "block"
}