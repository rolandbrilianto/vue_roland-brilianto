<template>
  <div>
    <SectionFEFundamental
      v-for="(item, i) in materi"
      :key="i"
      :fefund_materials="item"
    />
  </div>
</template>
<script>
export default {
  name: 'CleanCodePage',
  data() {
    return {
      materi: [
        {
          judul: '(10) Front-end Fundamental',
          deskripsi: {
            summaryOne:
              'Sekarang Javascript bisa berjalan tidak hanya pada browser, tapi juga bisa di server. berikut nama engine javascript tiap browser:',
            summaryTwo:
              'Node JS adalah runtime environment untuk javascript dengan node js, kita bisa menjalankan kode javascript dimanapun tidak terbatas pada browser.',
            summaryThree:
              'NPM adalah singkatan dari Node Package Module yang merupakan tool command line yang dapat menginstall dan menguninstall package, mengelola versi dan dependensi yang di perlukan untuk menjalanlan proyek.',
          },

          foto: '/assets/11.png',
          foto2: '/assets/22.png',
          foto3: '/assets/33.png',
        },
      ],
    }
  },
}
</script>
