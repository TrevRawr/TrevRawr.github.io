export const projectDescriptions = {
  getProjectByTitle (title) {
    return this.projects.find(project => project.title === title)
  },
  projects: [
    {
      title: 'RenewPass',
      subtitle: 'An Android application for university students in British Columbia that automatically renews their monthly transit pass',
      icon: 'fa-recycle',
      github: 'https://github.com/Coffeeboys/RenewPass',
      to: {name: 'ProjectDescription', params: { project: this.title }},
      about:
        `RenewPass is a project founded by my friend Alex Land. When Alex started this project, he had little experience
        working with Android. Luckily for him, I had just finished a work term where I worked exclusively on Android apps.
        My earliest contributions to the project consisted of giving Alex pointers
        on how to improve on his Android development techniques, but my influence on the project grew from there. Next, I helped Alex out
        with a code refactoring, which organized the project's class structures into packages, and modularized components for encapsulation and code reuse.
        Finally, I implemented one of the major features of the application: to schedule automatic renewals of students' Upasses each month.`
    }
  ]
}
