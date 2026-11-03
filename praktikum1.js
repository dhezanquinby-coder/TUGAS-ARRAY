let teman = ['grace', 'nazwa', 'kayla', 'silmi', 'osa'];

console.log('Jumlah teman: ' + teman.length);
console.log('Teman pertama: ' + teman[0]);
console.log('Teman terakhir: ' + teman[teman.length - 1]);

for (let i = 0; i < teman.length; i++) {
    console.log((i + 1) + '. ' + teman[i]);
}

console.log('------------------------------------');

let nilai = [85, 90, 78, 92, 88];

let total = 0;
let tertinggi = nilai[0];
let terendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    total = total + nilai[i];

    if (nilai[i] > tertinggi) {
        tertinggi = nilai[i];
    }

    if (nilai[i] < terendah) {
        terendah = nilai[i];
    }
}

let rataRata = total / nilai.length;

console.log('Total nilai: ' + total);
console.log('Rata-rata: ' + rataRata);
console.log('Nilai tertinggi: ' + tertinggi);
console.log('Nilai terendah: ' + terendah);

console.log('------------------------------------');

let data = ['Budi', 16, true, 3.5];

for (let i = 0; i < data.length; i++) {
    console.log(data[i] + ' -> tipe data: ' + typeof data[i]);
}