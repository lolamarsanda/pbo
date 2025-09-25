public class Main {
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
        AsistenLab aslab1 = new AsistenLab("Sabrina", 22, "Pemrograman Java");
        aslab1.perkenalan();
        aslab1.membimbing();
    }
}
