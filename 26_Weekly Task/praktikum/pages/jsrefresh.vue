<template>
  <div>
    <SectionJS v-for="(item, i) in materi" :key="i" :js_materials="item" />
  </div>
</template>
<script>
export default {
  name: 'JSRefreshPage',
  data() {
    return {
      materi: [
        {
          judul: '(8) JS Refreshment',
          deskripsi: {
            summaryOne:
              'Javascript adalah bahasa pemograman yang high-level, scripting, Untyped dan Interpreted.',
            summaryTwo:
              'method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai keinginan masing-masing.',
          },

          foto: '/assets/ss1.png',
          foto2: '/assets/ss2.png',
        },
      ],
    }
  },
}
</script>
