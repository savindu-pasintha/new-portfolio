import self1 from '../img/self1.png'
import self2 from '../img/self2.jpg'
import self3 from '../img/self3.jpg'
import self from '../img/self.jpg'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Savindu',
  lastName: 'Pasintha',
  initials: 'Js+Java+C# ..', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self1, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '',
      text: '+ 3.5 Year ',
    },
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the US',
    },
    {
      emoji: '💼',
      text: 'Software Engineer at`xo Concept, Singappore`',
    },
    {
      emoji: '📧',
      text: (
        <a href="mailto:savindupasingtha@gmail.com">
          savindupasingtha@gmail.com{' '}
        </a>
      ),
    },
  ],
  socials: [
    {
      link: 'https://www.linkedin.com/in/savindu-pasintha/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://github.com/savindu-pasintha',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://savindupasingtha.medium.com',
      icon: 'fa fa-medium',
      label: 'medium',
    },
    {
      link: 'https://stackoverflow.com/users/15484152/savindu-pasintha',
      icon: 'fa fa-stack-overflow',
      label: 'stackpverflow',
    },

    /* {
      link: 'https://facebook.com',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://instagram.com',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },

    {
      link: 'https://twitter.com',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    */
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio:
    "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      id: 1,
      title: 'Beats Health(USA)',
      summery: '',
      technologies: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      usedModules: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      live: '', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: '', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F1.PNG?alt=media&token=8dcdabfd-cc08-4065-a668-b7d3fc96fd83',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F2.PNG?alt=media&token=3ec4c0ca-ad20-4c98-bbf0-acfd5a163d99',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F3.PNG?alt=media&token=fc58babf-c406-4f87-bd24-0c41253933af',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F4.PNG?alt=media&token=41cd8063-437b-4b95-a2d5-6708af3e4a76',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F5.PNG?alt=media&token=77898f88-bb84-49f0-bcf3-dd7579856b35',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F6.PNG?alt=media&token=b2a5463d-559d-40b2-9b05-a4afa278b3a9',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Beats%20Health%20Project%2F7.PNG?alt=media&token=7cd2f811-2052-4c9d-8c49-ea5e4f7a6b29',
      ],
    },
    {
      id: 2,
      title: 'VPS1 (USA)',
      summery: '',
      technologies: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      usedModules: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      live: '',
      source: '',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F1.PNG?alt=media&token=3c9d13c9-cf95-4253-b492-b3763fbc2e46',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F2.PNG?alt=media&token=504a3384-e448-48a9-95c3-4de6bfb686e2',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F3.PNG?alt=media&token=8482bfa7-c97b-4b90-8c48-760821c12bce',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20Frontend%20web%20site%20html%2F4.PNG?alt=media&token=4b3a82ec-4545-4e29-b721-6103e004b5ee',
      ],
    },
    {
      id: 3,
      title: 'VPS Muti-Functional React Dashboard (USA Petrolium)',
      summery: '',
      technologies: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      usedModules: [
        'javascript',
        'react',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
      ],
      live: '',
      source: '',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F3.PNG?alt=media&token=352cf3b5-9c6b-420b-b777-0771db4dc220',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F1.PNG?alt=media&token=665a614f-bce4-4cff-b1f4-d8ee7732391a',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F2.PNG?alt=media&token=ed16b02e-09db-46b1-82b0-55dffda76c7a',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F4.PNG?alt=media&token=52998491-f7a5-4ca9-9064-4471550b445e',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F5.PNG?alt=media&token=6eef9b0f-09a4-474c-9906-680d294c9521',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F6.PNG?alt=media&token=fbfc2f4e-06c2-4495-8dab-c8bf610b3043',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F7.PNG?alt=media&token=e312e47c-0edb-4436-843a-5e45a1bbf6ae',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F8.PNG?alt=media&token=90bd2bae-e2d1-40a6-80f8-5a053dd7412c',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F9.PNG?alt=media&token=029110a9-d3ff-4395-abad-ed79de73af7e',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F10.PNG?alt=media&token=951e02a7-5a5d-414a-a6de-dac4aa73a321',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F11.PNG?alt=media&token=d5b598ab-2713-4daa-aa4f-b40426a0bfb1',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F12.PNG?alt=media&token=bc847c8a-cd7d-48c9-bb36-ee46a726e153',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F13.PNG?alt=media&token=3b3ba687-c3f8-4021-b69f-05aecdcbd485',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F14.PNG?alt=media&token=85f8c20d-eade-4e66-912b-73de78a2741a',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F15.PNG?alt=media&token=e0216806-4a56-4f2b-b87d-411b44f06ee5',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F16.PNG?alt=media&token=b3401a70-53cf-483a-a8f3-4dd0e0ec3461',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/VPS%20React%20Dashboard%2F17.PNG?alt=media&token=148e5bc4-9b2c-467c-891a-011f8ab22b46',
      ],
    },
  ],
  education: [
    {
      id: 1,
      what: 'BSC(Hons) Computing & Software Engineering',
      where: 'Cardiff Metropolitan, University, Uk',
      time: ' 2019 - May 2021',
      grade: "1'st Class",
    },
    {
      id: 2,
      what: 'Higher National Diploma in Computing & Software Engineering',
      where: 'International College Of Business & Technology, Sri Lanka',
      time: ' 2019 - 2021',
      grade: "1'st Class",
    },
    {
      id: 3,
      what: 'Certificate In Computer Hardware & Network',
      where:
        'Foundation of Goodness OYOB Centre of Excellence, Sinigama , Sri Lanka',
      time: 'Jan 2019 - July 2019 ',
      grade: '',
    },
    {
      id: 4,
      what: 'High School (GCE Advanced Level(GCE A/L))',
      where: 'National School, Ananada Sastralaya, Mathugama, Sri Lanaka',
      time: '2015 - August 2018',
      grade: `Physical Science Stream  (Physics/Combine Maths/Chemistry)`,
    },
    {
      id: 5,
      what: 'Primary School (GCE Ordinary Level(GCE O/L))',
      where: 'National School, Ananada Sastralaya, Mathugama, Sri Lanaka',
      time: '2010 - 2015',
      grade: `8A & 1B`,
    },
  ],
}
