<!-- A "page" that talks about who I am -->
<template>
  <v-container>
    <v-card>
      <img class='img-round img-rescale img-center' width="300px" src='/static/profile_photo.jpg'></img>
      <v-card-text class='subheading'>
        <p>
          My name is <strong>Trevor Clelland</strong>. I am a software developer and a student in the
          <a href='http://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html'>Software Systems</a>
          program at <strong>Simon Fraser University</strong> (SFU). I am interested in a wide variety of domains in Computer Science, but regardless of what I am working on,
          my focus is designing high quality, practical, readable, and maintainable code.
        </p>
        <p>
          I started programming in high school, but programming was more of a hobby for me until I started university. Since then, I have gained lots of experience. As a student, I have worked on many
          <strong>school projects</strong>; as an employee, I have developed <strong>Android mobile applications</strong> at
          <a href='http://www.pnimedia.com/'>PNI Digital Media</a>; and as an individual, I have worked on numerous <strong>personal software projects</strong>.
          If you would like to learn more about the work I've done, please check out the rest of my website.
        </p>
        <p>
          I also have a life outside of Computer Science! My hobbies include mountain biking, skiing, playing guitar, video games, and film making.
          As with my "hobby" of programming, I'm not very good at keeping my hobbies separate from my work. As a film maker, I worked on a
          <a href='https://www.youtube.com/watch?v=cQ3d8Zv0Aa4'>promotional film</a> for a program at SFU. I am also a part of a small group of
          film makers/friends called <a href='http://foxwoodfilms.com/'>Foxwood Films</a>. We primarily produce short films on mountain biking.
        </P>
        <p>
          If you would like to get in touch, don't hesitate to contact me.
        </p>
      </v-card-text>
      <v-card-actions>
        <icon-button href="https://github.com/TrevRawr" color="orange" text="GitHub" icon="fa-github"></icon-button>
        <icon-button href="https://ca.linkedin.com/in/trevor-clelland-00bb35105" color="blue" text="Linked In" icon="fa-linkedin"></icon-button>
        <icon-button color="red" text="E-mail" icon="fa-comments" href="mailto:***REMOVED***"></icon-button>
        <icon-button color="deep-purple" text="Resume" icon="fa-file-text" href="/static/resume.html"></icon-button>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import IconButton from '@/components/IconButton'
  export default {
    name: 'about',
    components: {
      'icon-button': IconButton
    }
  }
</script>

<style scoped>
  .img-round {
    border-radius: 50%;
    padding: 10pt;
  }
  /*re-scales the image to smaller sizes if the window gets too small*/
  .img-rescale {
    max-width: 100%;
    height: auto;
  }
  .img-center {
    margin: auto;
    display: block;
  }
</style>
