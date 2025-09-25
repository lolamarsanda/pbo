public class Mahasiswa {
    public static void main(String[] args) {
        // Object 1
        Mahasiswa m1 = new Mahasiswa("Nayla", 20, "123456", "Informatika");
        m1.perkenalan();
        m1.belajar();

        System.out.println();

        // Object 2
        Mahasiswa m2 = new Mahasiswa("Ezrina", 21, "654321", "Sistem Informasi");
        m2.perkenalan();
        m2.belajar();

        System.out.println();

        // Object 3
        AsistenLab aslab1 = new AsistenLab("Anita", 22, "Pemrograman Java");
        aslab1.perkenalan();
        aslab1.membimbing();
    }
}

// ===== Class Induk =====
class Person {
    protected String nama;
    protected int umur;

    public Person(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

    public void perkenalan() {
        System.out.println("Halo, saya " + nama + ", umur " + umur + " tahun.");
    }
}

// ===== Class Anak 1 =====
class Mahasiswa extends Person {
    private String nim;
    private String jurusan;

    public Mahasiswa(String nama, int umur, String nim, String jurusan) {
        super(nama, umur);
        this.nim = nim;
        this.jurusan = jurusan;
    }

    public void belajar() {
        System.out.println(nama + " sedang belajar di jurusan " + jurusan + ".");
    }
}

// ===== Class Anak 2 =====
class AsistenLab extends Person {
    private String bidang;

    public AsistenLab(String nama, int umur, String bidang) {
        super(nama, umur);
        this.bidang = bidang;
    }

    public void membimbing() {
        System.out.println(nama + " sedang membimbing praktikum " + bidang + ".");
    }
}
