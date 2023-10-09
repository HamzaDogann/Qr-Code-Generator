
// QR Kod Script Kodları

let = imgBox = document.getElementById("imgBox");
let = qrImage = document.getElementById("qrImage");
let = qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
         setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }


}

// Bağlantılarım Script


const mainButton = document.getElementById("main-button");
const infoButtons = document.getElementById("info-buttons");


let infoVisible = false;

mainButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    infoVisible = !infoVisible;
    if (infoVisible) {
        infoButtons.style.display = "block"; 
        infoButtons.style.right="-130px";
    } else {
        infoButtons.style.display = "none"; 
    }
});

document.addEventListener("click", () => {
    if (infoVisible) {
        infoButtons.style.display = "none";
        infoVisible = false;
    }
});