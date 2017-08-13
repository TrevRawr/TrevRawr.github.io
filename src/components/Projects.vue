<!-- A "page" that displays a list of projects that I've worked on -->
<template>
  <div class="projects">
    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <v-list two-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <list-item v-else :title="item.title" :subtitle="item.subtitle" :divider="item.divider" :icon="item.icon" :github="item.github"></list-item>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem'
  export default {
    name: 'Projects',
    data () {
      return {
        items: [
          {
            header: 'Personal Projects/Contributions'
          },
          {
            title: 'RenewPass',
            subtitle: 'An Android application for University students in British Columbia that automatically renews their monthly transit pass',
            icon: 'fa-recycle',
            github: 'https://github.com/Coffeeboys/RenewPass'
          },
          {
            title: 'Chip-8 Emulator',
            subtitle: 'A basic cross platform Chip-8 emulator that has unit tests for every cpu op-code',
            icon: 'fa-play',
            github: 'https://github.com/TrevRawr/chip-8'
          },
          {
            title: 'Portal Bike',
            subtitle: 'A game built in the Unity game engine inspired by valve\'s <a href="https://en.wikipedia.org/wiki/Portal_(video_game)">Portal</a>, and "Pete\'s" <a href="http://www.onemorelevel.com/game/free_rider_2">Freerider 2</a>',
            icon: 'fa-gamepad'
          },
          {
            title: 'Personal Portfolio Website',
            subtitle: 'The very site you\'re viewing now! Made with Vue.js and Vuetify',
            icon: 'fa-user',
            divider: false
          },
          {
            header: 'Hackathons'
          },
          {
            title: 'Cooking Companion',
            subtitle: 'A web app developed with React js during <a href="https://www.facebook.com/events/223905644725181/?acontext=%7B%22source%22%3A3%2C%22source_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22newsfeed%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22feed_story%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%2C%22has_source%22%3Atrue%7D&source=3&source_newsfeed_story_type=regular&action_history=[%7B%22surface%22%3A%22newsfeed%22%2C%22mechanism%22%3A%22feed_story%22%2C%22extra_data%22%3A[]%7D]&has_source=1&fref=mentions">Systems Hacks</a> that helps you find cooking recipes, and reads them out loud to you',
            icon: 'fa-cutlery',
            github: 'https://github.com/Coffeeboys/CookingCompanion'
          },
          {
            title: 'Heartbeat',
            subtitle: 'An Android application developed during <a href="https://hackentines-3420.devpost.com/">Hackentines</a> that measure your heartbeat using your phone\'s camera, then lets you transmit your heartbeat to loved ones',
            icon: 'fa-heartbeat',
            github: 'https://github.com/Coffeeboys/Heartbeat'
          },
          {
            title: 'Morse Code Transmitter',
            subtitle: 'An Android application developed during <a href="https://www.facebook.com/events/1409309589366211">Doom Hack</a>, originally intended to be a morse code transmitter and receiver, but due to technical difficulties, ended up being just a transmitter',
            icon: 'fa-lightbulb-o',
            divider: false,
            github: 'https://github.com/Coffeeboys/MorseTranslator'
          },
          {
            header: 'School Projects'
          },
          {
            title: 'Vancouver Racquets Club (VRC) Leaderboard',
            subtitle: 'A web app developed for the VRC to automate the process of updating their badminton leaderboard',
            icon: 'fa-trophy'
          },
          {
            title: '3D Model Renderer',
            subtitle: 'a 3D model renderer that renders .obj model files. This was built from the ground up starting from a setPixel() method - no OpenGL or anything else',
            icon: 'fa-keyboard-o'
          },
          {
            title: 'Textbook Marketplace',
            subtitle: 'A web app built using Django, Bootstrap, and Vue.js that allows students to buy and sell used textbooks',
            icon: 'fa-book'
          }
        ]
      }
    },
    components: {
      'list-item': ListItem
    }
  }
</script>
