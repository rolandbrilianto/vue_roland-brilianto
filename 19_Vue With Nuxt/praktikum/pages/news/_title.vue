<template>
  <div>{{ judul }}</div>
</template>
<script>
export default {
  data() {
    return {
      judul: '',
    }
  },
  created() {
    this.getTitle()
  },
  methods: {
    getTitle() {
      this.judul = this.$route.params.title
    },
  },
}
</script>
