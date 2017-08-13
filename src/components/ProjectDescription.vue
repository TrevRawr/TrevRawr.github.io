<template>
  <v-layout>
    <v-container>
      <v-card>
        <div class='pt-3 pl-3'>
          <span class='display-1 grey--text'>{{ projectDescription.title }}</span>
        </div>
        <v-card-text>
          <blockquote v-html='projectDescription.subtitle'></blockquote>
          <template v-if='projectDescription.about'>
            <div class='mt-3 mb-2 headline grey--text'>
              About
            </div>
            <span class='subheading'>{{ projectDescription.about }}</span>
          </template>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if='projectDescription.github' :href='projectDescription.github' flat class="orange--text"><v-icon class='mr-2 orange--text'>fa-github</v-icon>GitHub</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
  import {projectDescriptions} from '../data/ProjectDescriptions'
  export default {
    name: 'project-description',
    props: ['project'],
    computed: {
      projectDescription () {
        return projectDescriptions.getProjectByTitle(this.project)
      }
    }
  }
</script>
