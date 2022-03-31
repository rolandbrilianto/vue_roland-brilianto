export const penjumlahan = (angka1, angka2) => {
  return angka1 + angka2;
};
export const pengurangan = (angka1, angka2) => {
  return angka1 - angka2;
};
export const pembagian = (angka1, angka2) => {
  return angka1 / angka2;
};
export const perkalian = (angka1, angka2) => {
  return angka1 * angka2;
};
export const rataRata = (angka1, angka2, angka3, angka4, angka5) => {
  const hasil = (angka1 + angka2 + angka3 + angka4 + angka5) / 5;
  return hasil;
};
export const sisaBagi = (angka1, angka2) => {
  return angka1 % angka2;
};
export const luasPersegi = (sisi1, sisi2) => {
  sisi1 = sisi2;
  return sisi1 ** 2;
};
export const luasLingkaran = (jariJari) => {
  const phi = 3.14;
  const hasil = phi * jariJari ** 2;
  return hasil;
};
export const luasKubus = (rusuk) => {
  const hasil = 6 * rusuk ** 2;
  return hasil;
};
export const volumeKubus = (rusuk) => {
  return rusuk ** 3;
};
