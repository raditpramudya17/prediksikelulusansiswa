// Menampilkan angka slider
function ubahNilai() {

    document.getElementById("nilaiTugas").innerHTML =
        document.getElementById("tugas").value;

    document.getElementById("nilaiUjian").innerHTML =
        document.getElementById("ujian").value;

    document.getElementById("nilaiHadir").innerHTML =
        document.getElementById("hadir").value;

    document.getElementById("nilaiAktif").innerHTML =
        document.getElementById("aktif").value;
}


// Fungsi prediksi
function prediksi() {

    // Ambil nilai input
    let tugas = parseInt(document.getElementById("tugas").value);
    let ujian = parseInt(document.getElementById("ujian").value);
    let hadir = parseInt(document.getElementById("hadir").value);
    let aktif = parseInt(document.getElementById("aktif").value);

    // Hitung skor komposit
    let skor =
        (tugas * 0.25) +
        (ujian * 0.40) +
        (hadir * 0.20) +
        (aktif * 0.15);

    // Variabel hasil
    let hasil = "";
    let langkah = "";

    // Decision Tree sederhana
    langkah += "1. Cek Nilai Ujian ≥ 60 <br>";

    if (ujian >= 60) {

        langkah += "✅ Ya, lanjut cek tugas <br>";
        langkah += "2. Cek Nilai Tugas ≥ 60 <br>";

        if (tugas >= 60) {

            langkah += "✅ Ya, lanjut cek kehadiran <br>";
            langkah += "3. Cek Kehadiran ≥ 75 <br>";

            if (hadir >= 75) {

                hasil = "🎓 LULUS";

                langkah += "✅ Ya → Siswa Lulus <br>";

                // Bonus keaktifan
                if (aktif >= 70) {
                    hasil = "🏆 LULUS DENGAN PUJIAN";
                    langkah +=
                        "⭐ Keaktifan bagus (≥70) <br>";
                }

            } else {

                hasil = "📋 REMEDIAL";
                langkah +=
                    "❌ Kehadiran kurang → Remedial <br>";
            }

        } else {

            hasil = "📋 REMEDIAL";
            langkah +=
                "❌ Nilai tugas kurang → Remedial <br>";
        }

    } else {

        hasil = "❌ TIDAK LULUS";
        langkah +=
            "❌ Nilai ujian kurang dari 60 <br>";
    }

    // Tampilkan hasil
    document.getElementById("hasil").innerHTML =
        "Hasil: " + hasil;

    // Tampilkan skor
    document.getElementById("score").innerHTML =
        `
        <p>Nilai Tugas: ${tugas}</p>
        <p>Nilai Ujian: ${ujian}</p>
        <p>Kehadiran: ${hadir}%</p>
        <p>Keaktifan: ${aktif}</p>
        <hr>
        <h3>Skor Komposit:
        ${skor.toFixed(2)}</h3>
        `;

    // Tampilkan langkah
    document.getElementById("langkah").innerHTML =
        langkah;
}


// Jalankan saat halaman dibuka
ubahNilai();
