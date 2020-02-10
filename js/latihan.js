//var buah = "jeruk";
//switch (buah) {
 //   case "rambutan":
  //  alert("buah yang anda pesan adalah rambutan");
  //  break;
  //  case "jeruk":
  //  alert("buah yang anda pesan adalh jeruk");
  //  break;
//}

//pengulangan/perulangan

//for (var a =1; a <= 10; a++ ){
//    document.write(a);
//}

//for (var a = 10; a >= 1; a-- ){
//    document.write(a);
//}

//var b = 1;
//while (b <= 10) {
//    document.write(b) ;
//    a++;
//}

//var c = 1;
//do{
//    document.write(c) ;
//    a++
//}   while (c <= 10 );


//karyawan dengan  nim 1 masuk
//karyawan dengan  nim 2 masuk
//karyawan dengan  nim 3 sakit
//karyawan dengan  nim 4 masuk
//karyawan dengan  nim 5 sakit
//karyawan dengan  nim 6 masuk
//karyawan dengan  nim 7 bolos
//karyawan dengan  nim 8 masuk
//karyawan dengan  nim 9 masuk
//karyawan dengan  nim 10 bolos

//for (var a = 1; a <= 10; a++){
//    if (a <= 10 && a !=3) {
//        document.write("karyawan dengan nim " + a + "masuk <br>");
//    }else {
//        document.write("karyawan dengan nim " + a + "sakit <br>");
//    }
//}

for (var a = 1; a <= 10; a++){
    if (a <= 10 && a != 2 && a != 4 && a != 5 && a != 6 && a != 7 && a != 8 && a != 9 && a != 3 && a != 10) {
      document.write ("karyawan dengan nim" + a + "sakit <br>");
    }
    else if (a <= 10 && a != 3 && a != 10) {
      document.write ("karyawan dengan nim" + a + "masuk <br>");
    } else
     {
    document.write ("karyawan dengan nim" + a + "bolos <br>");
    }
  }