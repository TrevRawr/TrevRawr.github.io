<!-- A "page" that displays a list of projects that I've worked on -->
<template>
  <div class="projects">
    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <v-list dense three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <project-list-item v-else :title="item.title" :subtitle="item.subtitle" :divider="item.divider" :icon="item.icon" :github="item.github" :to='item.to'></project-list-item>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import ProjectListItem from '@/components/ProjectListItem'
  import {projectDescriptions} from '../data/ProjectDescriptions'
  export default {
    name: 'projects',
    data () {
      return {
        items: projectDescriptions.projects
      }
    },
    components: {
      'project-list-item': ProjectListItem
    }
  }
</script>
