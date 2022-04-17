<template>
  <div>
    <SectionHtml v-for="(item, i) in materi" :key="i" :html_materials="item" />
  </div>
</template>
<script>
export default {
  name: 'HTMLPage',
  data() {
    return {
      materi: [
        {
          judul: '(5) HTML',
          deskripsi: {
            summaryOne:
              'HTML adalah singkatan dari HyperText Markup Language, adalah sebuah standar yang digunakan dalam membuat web.',
            summaryTwo:
              'Membuat struktur halaman web page, mengatur tampilan dan isi halaman web page, membuat form dengan tag form, membuat sebuah list dengan ol, ul, li, dan mempublikasikan web secara online',
            summaryThree:
              'Frontend adalah sebuah bagian dari website yang membuat tampilan yang menarik kepada user.',
          },

          foto: '/assets/index.png',
        },
      ],
    }
  },
}
</script>
