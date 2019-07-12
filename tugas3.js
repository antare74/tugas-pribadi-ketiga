javascript:alert("Selamat Datang!")

function tambah(){
    val = document.getElementsByName('nilai')
    [0].value;
    document.getElementsByName('nilai')
    [0].value += "+";
}
function kurang(){
    val = document.getElementsByName('nilai')
    [0].value;
    document.getElementsByName('nilai')
    [0].value +="-";
}
function bagi(){
    val = document.getElementsByName('nilai')
    [0].value;
    document.getElementsByName('nilai')
    [0].value +="/";
}
function kali(){
    val = document.getElementsByName('nilai')
    [0].value;
    document.getElementsByName('nilai')
    [0].value +="*";
}
function hasil(){
    // val = document.getElementsByName('nilai')
    // [0].value;
    val = document.getElementById('name_id').value;
    val = document.getElementsByName('jumlah')
    [0].value = eval(val);
}