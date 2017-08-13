export const titles = {
  renewPass: 'RenewPass',
  chip8: 'Chip-8 Emulator',
  portalBike: 'Portal Bike',
  portfolio: 'Personal Portfolio Website',
  cookingCompanion: 'Cooking Companion',
  heartbeat: 'Heartbeat',
  morseTransmitter: 'Morse Code Transmitter',
  vrcLadder: 'Vancouver Racquets Club (VRC) Leaderboard',
  renderer: '3D Model Renderer',
  textbookMarketplace: 'Textbook Marketplace'
}

export const projectDescriptions = {
  getProjectByTitle (title) {
    return this.projects.find(project => project.title === title)
  },
  projects: [
    {
      header: 'Personal Projects/Contributions'
    },
    {
      title: titles.renewPass,
      subtitle: 'An Android application for university students in British Columbia that automatically renews their monthly transit pass',
      icon: 'fa-recycle',
      github: 'https://github.com/Coffeeboys/RenewPass',
      to: {name: 'ProjectDescription', params: { project: titles.renewPass }},
      about:
        `RenewPass is a project founded by my friend Alex Land. When Alex started this project, he had little experience
        working with Android. Luckily for him, I had just finished a work term where I worked exclusively on Android apps.
        My earliest contributions to the project consisted of giving Alex pointers
        on how to improve on his Android development techniques, but my influence on the project grew from there. Next, I helped Alex out
        with a code refactoring, which organized the project's class structures into packages, and modularized components for encapsulation and code reuse.
        Finally, I implemented one of the major features of the application: to schedule automatic renewals of students' Upasses each month.`
    },
    {
      title: titles.chip8,
      subtitle: 'A basic cross platform Chip-8 emulator that has unit tests for every cpu op-code',
      icon: 'fa-play',
      github: 'https://github.com/TrevRawr/chip-8',
      to: {name: 'ProjectDescription', params: { project: titles.chip8 }}
    },
    {
      title: titles.portalBike,
      subtitle: 'A game built in the Unity game engine inspired by valve\'s <a href="https://en.wikipedia.org/wiki/Portal_(video_game)">Portal</a>, and "Pete\'s" <a href="http://www.onemorelevel.com/game/free_rider_2">Freerider 2</a>',
      icon: 'fa-gamepad',
      to: {name: 'ProjectDescription', params: { project: titles.portalBike }}
    },
    {
      title: titles.portfolio,
      subtitle: 'The very site you\'re viewing now! Made with Vue.js and Vuetify',
      icon: 'fa-user',
      divider: false,
      to: {name: 'ProjectDescription', params: { project: titles.portfolio }}
    },
    {
      header: 'Hackathons'
    },
    {
      title: titles.cookingCompanion,
      subtitle: 'A web app developed with React.js during <a href="https://www.facebook.com/events/223905644725181/?acontext=%7B%22source%22%3A3%2C%22source_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22newsfeed%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22feed_story%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%2C%22has_source%22%3Atrue%7D&source=3&source_newsfeed_story_type=regular&action_history=[%7B%22surface%22%3A%22newsfeed%22%2C%22mechanism%22%3A%22feed_story%22%2C%22extra_data%22%3A[]%7D]&has_source=1&fref=mentions">Systems Hacks</a> that helps you find cooking recipes, and reads them out loud to you',
      icon: 'fa-cutlery',
      github: 'https://github.com/Coffeeboys/CookingCompanion',
      to: {name: 'ProjectDescription', params: { project: titles.cookingCompanion }}
    },
    {
      title: titles.heartbeat,
      subtitle: 'An Android application developed during <a href="https://hackentines-3420.devpost.com/">Hackentines</a> that measure your heartbeat using your phone\'s camera, then lets you transmit your heartbeat to loved ones',
      icon: 'fa-heartbeat',
      github: 'https://github.com/Coffeeboys/Heartbeat',
      to: {name: 'ProjectDescription', params: { project: titles.heartbeat }}
    },
    {
      title: titles.morseTransmitter,
      subtitle: 'An Android application developed during <a href="https://www.facebook.com/events/1409309589366211">Doom Hack</a>, originally intended to be a morse code transmitter and receiver, but due to technical difficulties, ended up being just a transmitter',
      icon: 'fa-lightbulb-o',
      divider: false,
      github: 'https://github.com/Coffeeboys/MorseTranslator',
      to: {name: 'ProjectDescription', params: { project: titles.morseTransmitter }}
    },
    {
      header: 'School Projects'
    },
    {
      title: titles.vrcLadder,
      subtitle: 'A web app developed for the VRC to automate the process of updating their badminton leaderboard',
      icon: 'fa-trophy',
      to: {name: 'ProjectDescription', params: { project: titles.vrcLadder }}
    },
    {
      title: titles.renderer,
      subtitle: 'a 3D model renderer that renders .obj model files. This was built from the ground up starting from a setPixel() method - no OpenGL or anything else',
      icon: 'fa-keyboard-o',
      to: {name: 'ProjectDescription', params: { project: titles.renderer }}
    },
    {
      title: titles.textbookMarketplace,
      subtitle: 'A web app built using Django, Bootstrap, and Vue.js that allows students to buy and sell used textbooks',
      icon: 'fa-book',
      divider: false,
      to: {name: 'ProjectDescription', params: { project: titles.textbookMarketplace }}
    }
  ]
}
