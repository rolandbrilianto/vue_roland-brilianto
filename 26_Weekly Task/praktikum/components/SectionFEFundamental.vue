<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ fefund_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ fefund_materials.deskripsi.summaryOne }}</li>

            <li>
              {{ fefund_materials.deskripsi.summaryTwo }}
            </li>

            <li>
              {{ fefund_materials.deskripsi.summaryThree }}
            </li>
          </ul>
        </v-card-text>

        <v-img
          class="ml-6"
          :src="fefund_materials.foto"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="fefund_materials.foto2"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="fefund_materials.foto3"
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
    fefund_materials: Object,
  },
}
</script>
