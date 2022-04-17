<template>
  <div>
    <SectionCleanCode
      v-for="(item, i) in materi"
      :key="i"
      :cleancode_materials="item"
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
          judul: '(9) Clean Code',
          deskripsi: {
            summaryOne:
              'Clean code adalah istilah untuk code yang mudah dibaca, dipahami, dan diubah oleh programmer',
            summaryTwo:
              'Refactoring proses restrukturisasi kode yang dibuat dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal.',
          },

          foto: '/assets/sss1.png',
          foto2: '/assets/sss2.png',
          foto3: '/assets/sss3.png',
        },
      ],
    }
  },
}
</script>
