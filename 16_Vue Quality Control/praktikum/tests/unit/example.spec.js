import { penjumlahan, pengurangan, perkalian, pembagian, rataRata, sisaBagi, luasPersegi, luasKubus, volumeKubus, luasLingkaran } from "@/utils/operations.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(6, 3)).toBe(9);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-6, -3)).toBe(-9);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("6", "3")).toBe("63");
  });
});

describe("Melakukan Pengurangan", () => {
  test("Pengurangan dua bilangan positif", () => {
    expect(pengurangan(6, 3)).toBe(3);
  });
  test("Pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-6, -3)).toBe(-3);
  });
  test("Pengurangan dua bilangan non numerik", () => {
    expect(pengurangan("6", "3")).toBe(3);
  });
});

describe("Melakukan Perkalian", () => {
  test("Perkalian dua bilangan positif", () => {
    expect(perkalian(6, 3)).toBe(18);
  });
  test("Perkalian dua bilangan negatif", () => {
    expect(perkalian(-6, -3)).toBe(18);
  });
  test("Perkalian dua bilangan non numerik", () => {
    expect(perkalian("6", "3")).toBe(18);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif", () => {
    expect(pembagian(6, 3)).toBe(2);
  });
  test("pembagian dua bilangan negatif", () => {
    expect(pembagian(-6, -3)).toBe(2);
  });
  test("pembagian dua bilangan non numerik", () => {
    expect(pembagian("6", "3")).toBe(2);
  });
});

describe("Melakukan rata-rata", () => {
  test("rata2 bilangan positif", () => {
    expect(rataRata(6, 3, 9, 5, 1)).toBe(4.8);
  });
  test("rata2 bilangan negatif", () => {
    expect(rataRata(-6, -3, -9, -5, -1)).toBe(-4.8);
  });
  test("rata2 bilangan non numerik", () => {
    expect(rataRata("6", "3", "9", "5", "1")).toBe(12790.2);
  });
});

describe("Melakukan sisa bagi", () => {
  test("sisa bagi dua bilangan positif", () => {
    expect(sisaBagi(7, 3)).toBe(1);
  });
  test("sisa bagi dua bilangan negatif", () => {
    expect(sisaBagi(-7, -3)).toBe(-1);
  });
  test("sisa bagi dua bilangan non numerik", () => {
    expect(sisaBagi("7", "3")).toBe(1);
  });
});

describe("Melakukan perhitungan luas persegi", () => {
  test("luas bilangan positif", () => {
    expect(luasPersegi(6, 3)).toBe(9);
  });
  test("luas bilangan negatif", () => {
    expect(luasPersegi(-6, -3)).toBe(9);
  });
  test("luas bilangan non numerik", () => {
    expect(luasPersegi("6", "3")).toBe(9);
  });
});

describe("Melakukan perhitungan luas lingkaran", () => {
  test("luas bilangan positif", () => {
    expect(luasLingkaran(49)).toBe(7539.14);
  });
  test("luas bilangan negatif", () => {
    expect(luasLingkaran(-16)).toBe(803.84);
  });
  test("luas bilangan non numerik", () => {
    expect(luasLingkaran("9")).toBe(254.34);
  });
});

describe("Melakukan perhitungan luas kubus", () => {
  test("luas bilangan positif", () => {
    expect(luasKubus(3)).toBe(54);
  });
  test("luas bilangan negatif", () => {
    expect(luasKubus(-6)).toBe(216);
  });
  test("luas bilangan non numerik", () => {
    expect(luasKubus("6")).toBe(216);
  });
});

describe("Melakukan perhitungan volume kubus", () => {
  test("volume bilangan positif", () => {
    expect(volumeKubus(6)).toBe(216);
  });
  test("volume bilangan negatif", () => {
    expect(volumeKubus(-3)).toBe(-27);
  });
  test("volume bilangan non numerik", () => {
    expect(volumeKubus("6")).toBe(216);
  });
});
