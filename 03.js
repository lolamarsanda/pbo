// 1. Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan, fakultas) {
    this.nama = nama;       // Attribute
    this.nim = nim;
    this.jurusan = jurusan;
    this.fakultas = fakultas;
  }

  // Method untuk menampilkan info dasar mahasiswa
  displayInfo() {
    console.log(
      `Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Fakultas: ${this.fakultas}`
    );
  }
}

// 2. Class Anak Pertama (S1)
class MahasiswaS1 extends Mahasiswa {
  constructor(nama, nim, jurusan, fakultas, skripsi) {
    super(nama, nim, jurusan, fakultas); // Panggil constructor induk
    this.skripsi = skripsi; // Attribute tambahan
  }

  // Method tambahan
  displaySkripsi() {
    console.log(`Mahasiswa S1 ini sedang mengerjakan skripsi: "${this.skripsi}"`);
  }
}

// 2. Class Anak Kedua (S2)
class MahasiswaS2 extends Mahasiswa {
  constructor(nama, nim, jurusan, fakultas, tesis) {
    super(nama, nim, jurusan, fakultas);
    this.tesis = tesis;
  }

  // Method tambahan
  displayTesis() {
    console.log(`Mahasiswa S2 ini sedang menulis tesis berjudul: "${this.tesis}"`);
  }
}

// 3. Object dari class induk dan anak
const mhs1 = new Mahasiswa("Dela", "202001", "Informatika", "FTI");
const mhs2 = new MahasiswaS1("Syaila", "202002", "Sistem Industri", "FTI", "Sistem Antrian Bank");
const mhs3 = new MahasiswaS2("Anas", "202003", "Teknik Elektro", "FT", "AI untuk Energi Terbarukan");

// 4. Memanggil method
mhs1.displayInfo();
mhs2.displayInfo();
mhs2.displaySkripsi();
mhs3.displayInfo();
mhs3.displayTesis();
