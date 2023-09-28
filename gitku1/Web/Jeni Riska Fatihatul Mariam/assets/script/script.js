const jawab=document.getElementById("jwb");

function isi(jawab) {
    if (jawab == 'a') {
        document.getElementById("jwb").innerHTML = "Kamu Harus tetap semangat yaa! esok pasti seru";
    } else if (jawab == 'b') {
        document.getElementById("jwb").innerHTML = "Wah syukurlah, aku ikut senang..";
    } else {
        document.getElementById("jwb").innerHTML = "Jadi, bagaimana harimu?";
    }
}