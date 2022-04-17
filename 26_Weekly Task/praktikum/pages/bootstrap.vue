<template>
  <div>
    <SectionBootstrap
      v-for="(item, i) in materi"
      :key="i"
      :bootstrap_materials="item"
    />
  </div>
</template>
<script>
export default {
  name: 'BootstrapPage',
  data() {
    return {
      materi: [
        {
          judul: '(7) Bootstrap',
          deskripsi: {
            summaryOne:
              'Frontend Framework adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam pembuatan suatu tampilan website.',
            summaryTwo:
              'Alesan menggunakan bootstrap adalah karena gratis, mudah, cepat, dan responsive',
            summaryThree:
              'contoh kelas pada bootstrap adalah container, row, coloumn, button',
          },

          foto: '/assets/12.png',
          foto2: '/assets/2.png',
          foto3: '/assets/3.png',
        },
      ],
    }
  },
}
</script>
