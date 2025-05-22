function troll() { 
    alert("Anda yakin?");
 };
 function troll2() { 
    alert("Anda yakin ni? ini peringatan!");
 };
 function troll3() { 
    alert("oke deh");
 };

 function hitung(value) {
  a=  document.getElementsById('n1').value;
  b= document.getElementsById('n2').value;
  h= a+b;
  alert("hasilnya adalah "+h);
 }




 function angka(value){
   let txt;
   let a = document.getElementById('angka').value;
   if(a%2==0){
      txt="genap";
   }else{
      txt="ganjil";
   }
   alert(txt);
 }

 function func(){
   const nama = prompt("masukan nama anda");
   alert(nama);
 }