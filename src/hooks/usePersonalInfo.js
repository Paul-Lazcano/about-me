export const usePersonalInfo = () => {
  const contactInfo = {
    title: 'Contact Info',
    content: 'Hi! You can follow me in my social media accounts!'
  }
  const socialLinks = {
    title: 'Social Links',
    content: {
      github: {
        title: 'GitHub',
        link: 'https://github.com/Paul-Lazcano',
      },
      linkedIn: {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/paul-lazcano-4932211ba/',
      },
    }
  }
  const objectives = {
    title: 'Objectives',
    content: 'My main objective is work as a react developer and get a nice work of it, i like learning so there`s no problem with learning new things every day.',
  }
  const workExperience = {
    title: 'Work Experience',
    content: 'I`ve been working 1 and a half month in a nice enterprice as a practicing employee, the goal is to learn react.js, next.js and typescript to start as a real employee here.'
  }
  const education = {
    title: 'Education',
    content: `I studied programming speciality in my high school, then i started learnign in Platzi, a course online platform that specialice's in tech. I've learning that way for a year and a half. I'm currently learning in the enterprice i commented before with the guide of all the eployeers here.`
  }
  const data = {
    contactInfo,
    socialLinks,
    objectives,
    workExperience,
    education,
  }
  return data;
}