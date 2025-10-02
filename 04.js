class Mahasiswa {
  constructor(nama,nim,nilai){
    this.nama = nama; // atribut publik
    this.nim = nilai ; // atribut publik 
    let_nilai = nilai; // atribut private menggunakan closure 
    //Getter untuk mengakses nilai
    this.getNilai = function(nilaiBaru){
      return_nilai;
    };
    //Setter untuk mengubah nilai dengan validasi 
    this.setNilai = function(nilaiBaru){
      if(nilaiBaru>= 0 && nilaiBaru <= 100');}
        _nilai = nilaiBaru;
      }else{ console.log('Nilai harus antara 0 dan 100');}
    };
  }
}
