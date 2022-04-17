<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ html_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ html_materials.deskripsi.summaryOne }}</li>
            <li>{{ html_materials.deskripsi.summaryTwo }}</li>
            <li>
              {{ html_materials.deskripsi.summaryThree }}
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
          :src="html_materials.foto"
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
    html_materials: Object,
  },
}
</script>
