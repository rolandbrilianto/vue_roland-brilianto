<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ js_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ js_materials.deskripsi.summaryOne }}</li>
            <li>
              JS Memiliki 2 kategori tipe data :
              <ol>
                <li>
                  Primitives: Unit pemrosesan terkecil dan elemen paling
                  sederhana yang tersedia dalam bahasa pemograman. contoh:
                  <ul>
                    <li>String</li>
                    <li>Boolean</li>
                    <li>Number</li>
                    <li>BigInt</li>
                    <li>Undefined</li>
                    <li>Null</li>
                    <li>Symbol</li>
                  </ul>
                </li>
                <li>
                  Object: Unit yang menyimpan property dan fungsi(method)
                  Contoh:
                  <ul>
                    <li>Object</li>
                    <li>Array</li>
                    <li>Function</li>
                    <li>Date</li>
                    <li>Set</li>
                    <li>Map</li>
                    <li>Weak Set</li>
                    <li>Weak Map</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>{{ js_materials.deskripsi.summaryTwo }}</li>
          </ul>
        </v-card-text>

        <v-img
          class="ml-6"
          :src="js_materials.foto"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="js_materials.foto2"
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
    js_materials: Object,
  },
}
</script>
