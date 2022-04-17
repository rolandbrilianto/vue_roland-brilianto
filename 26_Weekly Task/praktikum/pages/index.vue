<template>
  <div>
    <VersionControl v-for="(item, i) in materi" :key="i" :materials="item" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      materi: [
        {
          judul: '(2) Version Control and Branch Management (Git)',
          deskripsi: {
            summaryOne:
              'Git adalah sebuah Version kontrol sistem dimana para programmer dapat bekerja secara collaborative.',
            summaryTwo:
              'Jika ingin menambahkan fitur, ada baiknya dilakukan di branch fitur dimana branch tersebut akan di merge ke branch develop',
          },

          foto: '/assets/insight-network.png',
        },
      ],
    }
  },
}
</script>
