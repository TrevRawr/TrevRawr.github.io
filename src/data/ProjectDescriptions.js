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
      googlePlay: 'https://play.google.com/store/apps/details?id=ca.alexland.renewpass&hl=en',
      to: {name: 'ProjectDescription', params: { project: titles.renewPass }},
      about:
        `RenewPass is a project founded by my friend Alex Land. When Alex started this project, he had little experience
        working with Android. Luckily for him, I had just finished a work term where I worked exclusively on Android apps.
        My earliest contributions to the project consisted of giving Alex pointers
        on how to improve on his Android development techniques, but my influence on the project grew from there. Next, I helped Alex out
        with a code refactoring, which organized the project's class structures into packages, and modularized components for encapsulation and code reuse.
        Finally, I implemented one of the major features of the application: scheduling automatic renewals of students' transit passes each month.`
    },
    {
      title: titles.chip8,
      subtitle: 'A basic cross-platform <a href="https://en.wikipedia.org/wiki/CHIP-8">Chip-8</a> emulator developed in <strong>C++</strong> that has unit tests for every cpu opcode',
      icon: 'fa-play',
      github: 'https://github.com/TrevRawr/chip-8',
      to: {name: 'ProjectDescription', params: { project: titles.chip8 }},
      about:
        `As a kid, I played lots of my video games on emulators, but I didn't give much thought into how they worked.
        Recently, I tried out a Wii U emulator, <a href="http://cemu.info/">Cemu</a>, and was blown away with how well a
        modern gaming console could be emulated. Cemu inspired me to take a closer look at emulation. To learn about emulation, I chose to start with just about
        the simplest platform possible to emulate: the <a href="https://en.wikipedia.org/wiki/CHIP-8">Chip-8</a>. While my simple Chip-8 emulator pales in comparison to Cemu, and even other Chip-8 emulators,
        it is a functional, well tested emulator. My goal for this project was not to build the most advanced, feature complete emulator, but instead to learn about the
        basics of emulation.`
    },
    {
      title: titles.portalBike,
      subtitle: 'A game built in the <strong>Unity</strong> game engine inspired by Valve\'s <a href="https://en.wikipedia.org/wiki/Portal_(video_game)">Portal</a>, and "Pete\'s" <a href="http://www.onemorelevel.com/game/free_rider_2">Freerider 2</a>',
      icon: 'fa-gamepad',
      to: {name: 'ProjectDescription', params: { project: titles.portalBike }},
      about:
        `I built this game a few years back shortly after starting university; it was one of my first attempts at programming
        an application larger than a single file. With that in mind, the code quality is less than optimal. However, it
        functions (for the most part), and serves as a good prototype for what could be a very fun game. The game features
        working bike physics, portal mechanics, and even a level editor similar to that in Freerider 2`
    },
    {
      title: titles.portfolio,
      subtitle: 'The very site you\'re viewing now! Made with <strong>Vue.js</strong> and <strong>Vuetify</strong>',
      icon: 'fa-user',
      divider: false,
      to: {name: 'ProjectDescription', params: { project: titles.portfolio }},
      about:
        `What better way is there to show people that you're a developer than to develop a website to deliver the message?
        The sole purpose in this website is for me to show off to you! Well, that's not entirely true. I also made it to learn.
        I don't consider myself a professional web developer by any means, but I think web development is an important skill to
        have, and this website helped me get better at web development. Some people who see this website might think to themselves,
        "why is this guy using a Javascript framework for a website that's almost entirely static content?" And to that I say, because
        it's my website and I can do whatever I please! But in all seriousness, I chose to use Javascript because it's something I wanted
        to get better at. Using Javascript also enabled me to build my website as a <a href="https://en.wikipedia.org/wiki/Single-page_application">single page application</a>
        allowing for a (hopefully) smoother user experience (no jarring page reloading, etc...).`
    },
    {
      header: 'Hackathons'
    },
    {
      title: titles.cookingCompanion,
      subtitle: 'A web app developed with <strong>React.js</strong> during <a href="https://www.facebook.com/events/223905644725181/?acontext=%7B%22source%22%3A3%2C%22source_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22newsfeed%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22feed_story%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%2C%22has_source%22%3Atrue%7D&source=3&source_newsfeed_story_type=regular&action_history=[%7B%22surface%22%3A%22newsfeed%22%2C%22mechanism%22%3A%22feed_story%22%2C%22extra_data%22%3A[]%7D]&has_source=1&fref=mentions">Systems Hacks</a>. It helps you find cooking recipes, and reads them out loud to you step-by-step',
      icon: 'fa-cutlery',
      github: 'https://github.com/Coffeeboys/CookingCompanion',
      to: {name: 'ProjectDescription', params: { project: titles.cookingCompanion }},
      about:
        `Cooking Companion was developed in less than 12 hours by 4 people, (myself included).
        The theme for this hackathon was "Lifestyle Applications". It was a pretty vague theme, but gave teams
        a lot of room for creativity. My team, the <a href="https://github.com/Coffeeboys">Coffeeboys</a> ended up
        winning first place!`
    },
    {
      title: titles.heartbeat,
      subtitle: 'An <strong>Android</strong> application developed during <a href="https://hackentines-3420.devpost.com/">Hackentines</a> that measures your heartbeat using your phone\'s camera, then lets you transmit your heartbeat to loved ones',
      icon: 'fa-heartbeat',
      github: 'https://github.com/Coffeeboys/Heartbeat',
      to: {name: 'ProjectDescription', params: { project: titles.heartbeat }},
      about:
        `Heartbeat was developed in 24 hours by a group of 4 people (myself included). If you didn't guess already, the theme
        for this hackathon was Valentine's day.  My team, the <a href="https://github.com/Coffeeboys">Coffeeboys</a> ended up
        winning first place!`
    },
    {
      title: titles.morseTransmitter,
      subtitle: 'An <strong>Android application</strong> developed during <a href="https://www.facebook.com/events/1409309589366211">Doom Hack</a>, originally intended to be a morse code transmitter and receiver, but due to technical difficulties, ended up being just a transmitter',
      icon: 'fa-lightbulb-o',
      divider: false,
      github: 'https://github.com/Coffeeboys/MorseTranslator',
      to: {name: 'ProjectDescription', params: { project: titles.morseTransmitter }},
      about:
        `Morse Transmitter was developed in 24 hours by the <a href="https://github.com/Coffeeboys">Coffeeboys</a>, a group of 5 people (myself included). This was the first hackathon I ever went to.
        The hackathon was apocalyptic-themed, which inspired many teams to make games (often zombie-related). My team decided to take a
        different approach, and build an application that might help someone survive the apocalypse. We had a few good ideas for this hackathon;
        our first runner-up was to build a "hand warmer": an application that would perform intensive processing on your phone in order to heat it
        up and keep you warm. Ultimately, saner minds prevailed, and we decided to build a morse code transmitter/receiver. It was a good thing we chose
        this idea, because we ended up winning "Best Application" despite failing to successfully implement the receiver portion of the app.
        Note that there was a separate scoring system for teams that developed games.`
    },
    {
      header: 'School Projects'
    },
    {
      title: titles.vrcLadder,
      subtitle: `A web app developed for the VRC to automate the process of updating their badminton leaderboard by allowing club members to report the results of matches they played.
      Created with <strong>React.js</strong> for the front end and a <strong>Java</strong> web server for the back end`,
      icon: 'fa-trophy',
      github: 'https://github.com/DavidQuong/vrc-ladder',
      to: {name: 'ProjectDescription', params: { project: titles.vrcLadder }},
      about:
        `This application was developed as part of
        <a href="https://www.sfu.ca/students/calendar/2017/fall/courses/cmpt/373.html">CMPT 373</a> — a project-based software development
        course. The class had a total of 32 students in it, who were divided into 4 groups of 8 students. Two groups (one of them being mine)
        worked on separate implementations of the VRC Leaderboard project with members from the Vancouver Racquets Club as their clients. This was a unique experience,
        because unlike most projects made in school, this project could actually be deployed in public as a functional software system.
        This experience also came with great responsibility: if the project failed, the VRC would be left empty-handed. Thankfully, they
        wouldn't have had anything to lose since we were developing the application free of charge. Luckily, both teams developed a working implementation.
        The VRC chose their favourite of the two implementations to deploy as their system. Unfortunately, my team's project did not get chosen, but the
        project itself was still a success. Despite not being deployed, I gained a lot of experience. It was cool to work for real clients,
        and made me realize how important communication between clients and developers is in ensuring the end result is what the client had in mind.`
    },
    {
      title: titles.renderer,
      subtitle: 'a 3-D model renderer that renders .obj model files. This was built from the ground up in <strong>C++</strong> starting from a setPixel() method (provided by <a href="https://www.qt.io/">QT</a>) — <strong>NO</strong> OpenGL or any other graphics libraries were used',
      icon: 'fa-keyboard-o',
      to: {name: 'ProjectDescription', params: { project: titles.renderer }},
      about:
        `<p>
          This application was developed individually as part of <a href="http://www.sfu.ca/students/calendar/2017/spring/courses/cmpt/361.html">CMPT 361</a> — a computer graphics course. This was my first experience with graphics
          programming. It was an extremely difficult course, but I loved every minute of it. The course had 4 assignments, which were cumulative.
          In the first assignment, we built line and polygon renderers
          that simply drew 2-D lines and polygons of a given color on the screen. In the next assignment, we started drawing 3-dimensional primitives by implementing
          <a href="https://en.wikipedia.org/wiki/Bilinear_interpolation">bi-linear interpolation</a> of colors across our polygon renderer, and using
          <a href="https://www.gamedev.net/articles/programming/graphics/depth-cueing-r861/">Depth Cueing/Shading</a> to draw parts of polygons that
          were farther away as a darker color. At this point, the 3-D effect was pretty crude looking since there was no proper lighting implemented,
          and no perspective (where things farther away get smaller). In the next assignment, we implemented perspective, parsing/rendering a
          subset of <a href="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.obj 3-D model files</a> (still no lighting), and a moveable "camera"
          so that the user could look at models from different angles in the
          3-D world. In the final assignment, we implemented lighting with 3 different kinds of shading options:
          <a href="https://en.wikipedia.org/wiki/Shading">Phong, Gouraud, and Flat shading</a>.
          At the end of the course, we had a fairly complete 3-D model renderer built from scratch.
        </p>
        <p>
          Implementing everything myself instead of using a graphics library made me understand what goes on under the hood of graphics libraries.
          I had to implement my own bi-linear interpolation, <a href="https://en.wikipedia.org/wiki/Clipping_(computer_graphics)">clipping</a>,
          <a href="https://en.wikipedia.org/wiki/Z-buffering">z-buffer/culling</a>, and <a href="http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/"> MVP matrix transformations</a> (ex: perspective projection transformation). All of these are things
          that are usually provided by graphics/math libraries. Meanwhile, the transformations, interpreting 3-D model files, and lighting are all things that you would have
          to do manually even if you used a graphics library. This means I learned both how to create and use graphics libraries.
        </p>`
    },
    {
      title: titles.textbookMarketplace,
      subtitle: 'A web app built using <strong>Django</strong>, <strong>Bootstrap</strong>, and <strong>Vue.js</strong> that allows students to buy and sell used textbooks',
      icon: 'fa-book',
      divider: false,
      to: {name: 'ProjectDescription', params: { project: titles.textbookMarketplace }},
      about:
        `
        <p>
          This application was developed in a group of 4 people as part of <a href="https://www.sfu.ca/students/calendar/2017/summer/courses/cmpt/470.html">CMPT 470</a> — a course on web-based information systems (aka web apps).
          The app allows users to create accounts, view textbook ads, create their own textbook ads, and send other users messages. What sets this
          application apart from a standard generic buy/sell website (think Craigslist) is that each ad is associated with a textbook from our database.
          Each textbook is uniquely identified by an ISBN number, so this allows ads to be filtered unambiguously by the exact textbook for sale rather than
          a keyword-based search approach (like Craigslist), which may turn up results for similar undesired textbooks (ex: a textbook of the same name, but different edition).
          Another nice feature of this app is that the database of textbooks is self-maintaining. If a textbook with a given ISBN doesn't exist, the first person to make an ad for that textbook
          will have to create a new textbook entry in the database. This means the database will naturally grow over time.
          Textbook database entries have publicly editable wiki pages, this ensures that the community can correct any data entry errors, and maintain the most accurate information for a given textbook.
          Since all ads for a given textbook are associated with the same textbook instance, if a person edits the textbook wiki page for one textbook, all the ads for that textbook will be updated.
        </p>
        <p>
          In this course,
          the main focus of the course material was on building a backend web server to support a web app. Less emphasis was put on the front end
          HTML/CSS/Javascript side of things. As a result, the majority of this app's logic takes place on the back end server. The back end serves
          dynamically generated, (mostly) static html pages. We still used some Javascript for sections of the app that required more user interaction.
          From what I've gathered, modern web development seems to be heading away from this multi-paged, static content approach, and is moving
          towards single page applications driven by Javascript libraries and AJAX requests to load more data into pages without reloading the page.
          In hindsight, this would have probably been the best way to implement this application, but the multi-paged approach we used worked well enough
          for the scope of this course project.
        </p>`
    }
  ]
}
