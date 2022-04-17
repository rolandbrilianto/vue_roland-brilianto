<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      height="100%"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app color="primary">
      <span>&copy; {{ new Date().getFullYear() }} By Roland Brilianto</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Section 2 Git',
          to: '/',
        },
        {
          title: 'Section 3 UI/UX',
          to: '/uiux',
        },

        {
          title: 'Section 4 Figma',
          to: '/figma',
        },
        {
          title: 'Section 5 HTML',
          to: '/html',
        },
        {
          title: 'Section 6 CSS',
          to: '/css',
        },
        {
          title: 'Section 7 Bootstrap',
          to: '/bootstrap',
        },
        {
          title: 'Section 8 JS Refresh',
          to: '/jsrefresh',
        },
        {
          title: 'Section 9 Clean Code',
          to: '/cleancode',
        },
        {
          title: 'Section 10 Fron-end Fundamental',
          to: '/fefundamental',
        },
        {
          title: 'Section 11 Vue Fundamental',
          to: '/vuefundamental',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'VUE JS KELAS A',
    }
  },
}
</script>
