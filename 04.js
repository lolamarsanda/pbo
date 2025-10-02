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
    
class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;   // atribut publik
    this.nim = nim;     // atribut publik
    
    let _nilai = nilai; // atribut private (closure)

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus antara 0 dan 100");}
      };
    }
  }

//object Mahasiswa
let prodi1 = new Mahasiswa("Budi", "1234", 85);
let prodi2 = new Mahasiswa("Ani", "5678", 70);
let prodi3 = new Mahasiswa("Cici", "9101", 60);

// ---  --- 
console.log("Nilai awal prodi1:", prodi1.getNilai()); // 85
prodi1.setNilai(90);
console.log("Nilai setelah diubah prodi1:", prodi1.getNilai()); // 90

console.log("Nilai awal prodi2:", prodi2.getNilai()); // 70
prodi2.setNilai(95);
console.log("Nilai setelah diubah prodi2:", prodi2.getNilai()); // 95

console.log("Nilai awal prodi3:", prodi3.getNilai()); // 60
prodi3.setNilai(110); // salah, akan muncul pesan error
console.log("Nilai setelah diubah prodi3:", prodi3.getNilai()); // tetap 60

    };
  }
}

class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;
    this.nim = nim;

    let _nilai = nilai;

    this.getNilai = function() {
      return _nilai;
    };

    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}  // <-- cukup sampai sini saja

