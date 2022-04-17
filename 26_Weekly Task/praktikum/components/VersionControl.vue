<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ materials.deskripsi.summaryOne }}</li>
            <li>{{ materials.deskripsi.summaryTwo }}</li>
          </ul>
        </v-card-text>
        <v-img
          class="ml-6"
          :src="materials.foto"
          max-width="600"
          alt="gambar"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    materials: Object,
  },
}
</script>
