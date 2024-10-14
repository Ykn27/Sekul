berfungsi = 3;
kelas = 7;
tdkberfungsi = 7;

for (i = 1; i <= kelas; i++) {
  if (i <= berfungsi) {
    console.log(`Ruang no ${i} berfungsi`);
  } else if (i <= tdkberfungsi && i > berfungsi && i !== 4) {
    console.log(`Ruang no ${i} tidak berfungsi`);
  } else if (i == 4) {
    console.log(`Ruang no ${i} sedang diperbaiki`);
  }
}
