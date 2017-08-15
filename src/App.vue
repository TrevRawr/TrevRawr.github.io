<!-- The root app component. Every other component is "kicked off" from this one mainly through the vue router -->
<!-- This is also where the global styling for Vuetify is setup -->
<template>
    <v-app light>
      <!-- This required some slight "Hacking to look right" -->
      <!-- I wanted a large title without making the tab bar too ridiculously large -->
      <!-- to do that, I had to put the tab bar inside the toolbar instead of where it typically goes below -->
      <!-- This then created some spacing issues where the tabs weren't in line with the bottom of the action bar -->
      <!-- To remedy this, I added padding to the top of the tabs bar -->
      <!-- Finally, the title needed to be shifted into an ideal place with margins -->
      <v-toolbar flat class="cyan" dark>
        <v-toolbar-title class='display-3 mt-5 ml-5'>Trevor Clelland</v-toolbar-title>
        <v-tabs class="pt-4" slot='extension' dark fixed centered>
          <v-tabs-bar slot="activators" class="cyan">
            <v-tabs-slider></v-tabs-slider>
            <!-- the to prop uses vue router to fulfill the link -->
            <v-tabs-item :to="{name: 'About'}">
              About
            </v-tabs-item>
            <v-tabs-item :to="{name: 'Projects'}">
              Projects
            </v-tabs-item>
            <!-- This tab isn't really a tab, but a link to a static page -->
            <!-- The static page (resume) could have been converted into a Vue -->
            <!-- component to be displayed in a proper tab, but this would cause conflicting styles -->
            <!-- between the auto-generated resume CSS and Vuetify's Stylus/CSS -->
            <!-- goToResume() is used because href doesn't work for some reason -->
            <v-tabs-item  v-on:click="goToResume">
              Resume
            </v-tabs-item>
          </v-tabs-bar>
        </v-tabs>
      </v-toolbar>
      <v-slide-x-transition mode='out-in'>
        <router-view></router-view>
      </v-slide-x-transition>
      <v-footer></v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goToResume: function () {
        window.location.href = '/static/resume.html'
      }
    }
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
