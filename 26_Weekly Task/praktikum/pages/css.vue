<template>
  <div>
    <SectionCSS v-for="(item, i) in materi" :key="i" :css_materials="item" />
  </div>
</template>
<script>
export default {
  name: 'CSSPage',
  data() {
    return {
      materi: [
        {
          judul: '(6) CSS',
          deskripsi: {
            summaryOne:
              'CSS adalah singkatan dari Cascading Style Sheets yang memiliki fungsi untuk menghias website dan mengatur layouting pada website.',
            summaryTwo:
              'Cara menaruh CSS ada 3 teknik yaitu inline, internal, dan external',
            summaryThree:
              'Ada beberapa tipe CSS selector yaitu Element, class, dan id',
          },

          foto: '/assets/file1.png',
          foto2: '/assets/file2.png',
          foto3: '/assets/file2RESPONSIVE.png',
        },
      ],
    }
  },
}
</script>
