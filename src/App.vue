<template>
    <v-app light>
      <v-tabs dark fixed centered>
        <v-toolbar extended class="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title slot="extension" class="display-2">Trevor Clelland</v-toolbar-title>
        </v-toolbar>
        <v-tabs-bar slot="activators" class="cyan">
          <v-tabs-slider class="yellow"></v-tabs-slider>
          <!-- the to prop uses vue router to fulfill the link -->
          <v-tabs-item to='/'>
            About
          </v-tabs-item>
          <v-tabs-item to='/projects'>
            Projects
          </v-tabs-item>
        </v-tabs-bar>
      </v-tabs>
      <!-- <v-fade-transition> -->
        <router-view></router-view>
      <!-- </v-fade-transition> -->
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
