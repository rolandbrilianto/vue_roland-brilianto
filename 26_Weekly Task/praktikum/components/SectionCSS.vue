<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ css_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ css_materials.deskripsi.summaryOne }}</li>
            <li>{{ css_materials.deskripsi.summaryTwo }}</li>
            <li>
              {{ css_materials.deskripsi.summaryThree }}
              <!-- <a
                href="https://www.figma.com/file/Tx6NLaRUyd2jDHGobYFYRN/Praktikum-Figma?node-id=0%3A1"
                target="_blank"
                >Projectnya disini</a
              > -->
            </li>
          </ul>
        </v-card-text>

        <v-img
          class="ml-6"
          :src="css_materials.foto"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="css_materials.foto2"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="css_materials.foto3"
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
    css_materials: Object,
  },
}
</script>
