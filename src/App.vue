<template>
    <v-app light>
      <v-navigation-drawer
          persistent
          enable-resize-watcher
        >
      </v-navigation-drawer>
      <v-toolbar></v-toolbar>
      <main>
        <v-container fluid>
          <v-alert success value="true">
            This is a success alert.
          </v-alert>
          <router-view></router-view>
        </v-container>
      </main>
      <v-footer></v-footer>
    </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
