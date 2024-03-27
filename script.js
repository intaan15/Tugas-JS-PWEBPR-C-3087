function oke(){
    document.getElementById("yes").remove();
    document.getElementById("noo").remove();
    document.getElementsByClassName("header")[0].innerHTML = "Anda Berbohong!"
    document.getElementsByClassName("detective")[0].src = "assets/Teknisi.png"
    document.getElementsByClassName("teks")[0].innerHTML = "Anda adalah seorang Teknisi"
    document.getElementsByClassName("container")[0].style.backgroundColor="#E12E2E"
}
function not(){
    document.getElementById("yes").remove();
    document.getElementById("noo").remove();
    document.getElementsByClassName("header")[0].innerHTML = "Anda Benar!"
    document.getElementsByClassName("detective")[0].src = "assets/Mahasiswa.png"
    document.getElementsByClassName("teks")[0].innerHTML = "Anda adalah seorang Mahasiswa"
    document.getElementsByClassName("container")[0].style.backgroundColor ="#6FD240"
}