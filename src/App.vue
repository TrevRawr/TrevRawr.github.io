<!-- The root app component. Every other component is "kicked off" from this one mainly through the vue router -->
<!-- This is also where the global styling for Vuetify is setup -->
<template>
    <v-app light>
      <v-tabs dark fixed centered>
        <v-toolbar class="cyan" dark>
          <v-toolbar-title class="display-2">Trevor Clelland</v-toolbar-title>
        </v-toolbar>
        <v-tabs-bar slot="activators" class="cyan">
          <v-tabs-slider class="yellow"></v-tabs-slider>
          <!-- the to prop uses vue router to fulfill the link -->
          <v-tabs-item :to="{name: 'About'}">
            About
          </v-tabs-item>
          <v-tabs-item :to="{name: 'Projects'}">
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

<!-- Vuetify styles -->
<style lang="stylus">
  @import './stylus/main'
</style>

<!-- Global plain css styling -->
<style>
  a {
    text-decoration: none;
  }
</style>
