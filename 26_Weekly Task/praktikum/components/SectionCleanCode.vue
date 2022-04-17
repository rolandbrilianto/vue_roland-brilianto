<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="pa-3">
        <v-card-title class="headline">
          {{ cleancode_materials.judul }}
        </v-card-title>
        <!--  -->
        <v-card-text>
          <ul>
            <li>{{ cleancode_materials.deskripsi.summaryOne }}</li>
            <li>
              Karakteristik :

              <ul>
                <li>Mudah Dipahami</li>
                <li>Mudah Dieja dan Dicari</li>
                <li>Singkat namun Mendeskripsikan konteks</li>
                <li>Konsisten</li>
                <li>Hindari Penambahan Konteks yang tidak Perlu</li>
                <li>Memakai Komentar yang benar dan sesuai</li>
                <li>Fungsi yang hanya menjalankan 1 task</li>
                <li>Gunakan style konvensi</li>
                <li>Formating</li>
              </ul>
            </li>
            <li>
              {{ cleancode_materials.deskripsi.summaryTwo }}
              Teknik:
              <ol>
                <li>Membuat abstraksi</li>
                <li>memecah kode dengan fungsi/class</li>
                <li>perbaiki penamaan kode</li>
                <li>deteksi duplikasi pada kode</li>
              </ol>
            </li>
          </ul>
        </v-card-text>

        <v-img
          class="ml-6"
          :src="cleancode_materials.foto"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="cleancode_materials.foto2"
          max-width="600"
          alt="gambar"
        />
        <v-img
          class="ml-6"
          :src="cleancode_materials.foto3"
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
    cleancode_materials: Object,
  },
}
</script>
