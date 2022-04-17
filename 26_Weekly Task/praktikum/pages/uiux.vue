<template>
  <div>
    <IntroUiUx v-for="(item, i) in materi" :key="i" :ui_materials="item" />
  </div>
</template>

<script>
export default {
  name: 'UIUXPage',
  data() {
    return {
      materi: [
        {
          judul: '(3) Introduction UI dan UX',
          deskripsi: {
            summaryOne:
              'UX adalah apapun yang pengguna rasakan ketika menggunakan aplikasi kita UX terdiri dari 6 bagian',
            summaryTwo:
              'tujuan dari membuat prototype adalah agar mendapat feedback dari user maupun stakeholder sehingga bisa memperbaiki dan memberi masukan terkait aplikasi sehingga terciptanya interaksi yang baik agar memudahkan pengembangan project.',
            summaryThree:
              'UI adalah visual yang user gunakan ketika berinteraksi dengan aplikasi dan memiliki 4 pilar yaitu Konsistensi, Simple, Good Typography, dan Informative Feedback',
          },

          foto: '/assets/aboutus.png',
        },
      ],
    }
  },
}
</script>
