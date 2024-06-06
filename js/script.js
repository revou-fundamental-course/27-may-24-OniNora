// Ini JavaScript

// Fungsi menambahkan nama ke header
function addName() {
    let name = prompt("Masukkan nama anda", "");
    document.getElementById("user-name").innerHTML = name
}

addName();

// Tombol untuk mengganti nama
document.getElementById("user-name").addEventListener("click", function() {
    replaceName()
})

// Fungsi mengganti nama
function replaceName() {
    let name = prompt("Ketik untuk mengganti nama anda", "");
    if (name !== null) {
        document.getElementById("user-name").innerHTML = name;
    }
}

// Fungsi AutoSlide Banner
let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n)
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName("img-slide");
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = "none";
        index++
    }

    listImage[indexSlide - 1].style.display = "flex";
}

setInterval(() => nextSlide(1), 3000);

// Fungsi Validasi Form
document.getElementById("form-btn").addEventListener("click", function(event) {
    event.preventDefault();
})

function formValidation() {
    let nameInput = document.getElementById("form-name").value;
    let bdInput = document.getElementById("form-bd").value;
    let genderInput = "";
    if (document.getElementById("laki-laki").checked) {
        genderInput = "Laki-laki";
    } else if (document.getElementById("perempuan").checked) {
        genderInput = "Perempuan";
    }
    let msgInput = document.getElementById("form-msg").value;
    
    if (!nameInput) {
        alert("Nama harus diisi");
        return false;
    }
    if (!bdInput) {
        alert("Tanggal lahir harus diisi");
        return false;
    }
    if (!genderInput) {
        alert("Pilih salah satu jenis kelamin");
        return false;
    }
    if (!msgInput) {
        alert("Pesan harus diisi");
        return false;
    }

    formResult(nameInput, bdInput, genderInput, msgInput);
    return true;
}

// Fungsi Hasil Form
function formResult(nameInput, bdInput, genderInput, msgInput) {
    document.getElementById("result-name").innerHTML = nameInput;
    document.getElementById("result-bd").innerHTML = bdInput.split("-").reverse().join("/");
    document.getElementById("result-gender").innerHTML = genderInput;
    document.getElementById("result-msg").innerHTML = msgInput;
}

