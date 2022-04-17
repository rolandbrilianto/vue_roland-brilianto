<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ ui_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ ui_materials.deskripsi.summaryOne }}</li>
            <li>{{ ui_materials.deskripsi.summaryTwo }}</li>
            <li>{{ ui_materials.deskripsi.summaryThree }}</li>
          </ul>
        </v-card-text>
        <v-img
          class="ml-6"
          :src="ui_materials.foto"
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
    ui_materials: Object,
  },
}
</script>
