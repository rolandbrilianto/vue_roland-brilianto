<template>
  <div>
    <FigmaDesign v-for="(item, i) in materi" :key="i" :figma_materials="item" />
  </div>
</template>
<script>
export default {
  name: 'FigmaPage',
  data() {
    return {
      materi: [
        {
          judul: '(4) Figma',
          deskripsi: {
            summaryOne:
              'Figma adalah a vector graphics editor dan prototyping tool yang utamanya berbasis web, dengan tambahan fitur offline di aplikasi desktop.',
            summaryTwo:
              'Keuntungan menggunakan Figma adalah Gratis, Berjalan di Windows, Real-time team collaboration, dan Integrated high-quality prototyping',
            summaryThree:
              'Kelemahan nya adalah harus online saat ingin bekerja. tapi kita bisa menyimpan progressnya di local',
          },

          foto: '/assets/mid.png',
        },
      ],
    }
  },
}
</script>
