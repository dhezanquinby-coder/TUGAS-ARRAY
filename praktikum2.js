// Data nilai 5 siswa (grace, nazwa, kayla, silmi, osa) dengan 3 mata pelajaran
let nilai = [
    [80, 75, 90], // grace (Baris 0)
    [85, 90, 95], // nazwa (Baris 1)
    [70, 80, 85], // kayla (Baris 2)
    [88, 90, 84], // silmi (Baris 3)
    [90, 85, 92]  // osa   (Baris 4)
];

let siswa = ['grace', 'nazwa', 'kayla', 'silmi', 'osa'];

console.log('=== RATA-RATA PER SISWA ===');
for (let b = 0; b < nilai.length; b++) {
    let total = 0;
    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }
    let rata = total / nilai[b].length;
    console.log(siswa[b] + ': total ' + total + ', rata-rata ' + rata.toFixed(1));
}

console.log('------------------------------------');

console.log('=== RATA-RATA PER MATA PELAJARAN ===');
let jumlahMapel = nilai[0].length; // 3 mata pelajaran
let jumlahSiswa = nilai.length;   // 5 siswa

for (let k = 0; k < jumlahMapel; k++) {
    let totalKolom = 0;
    for (let b = 0; b < jumlahSiswa; b++) {
        totalKolom = totalKolom + nilai[b][k];
    }
    let rataMapel = totalKolom / jumlahSiswa;
    console.log('Mapel ke-' + (k + 1) + ': total ' + totalKolom + ', rata-rata ' + rataMapel.toFixed(1));
}