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
  initials: 'React+Js+Java+C# ..', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Developer',
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
    "Hello! I'm John. I studied Computing and Software Engineering at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
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
      title: 'React Web Application `Beats Health`(for USA)',
      summery:
        'This One is a React Frontend and .NET Backend based on Hospital Management Dashboard.',
      technologies: [
        'react',
        'javascript',
        '@mui/Material Design',
        '@material-ui',
        'axios',
        'REST Service',
        'react-time-picker',
        'react-select',
        'react-phone-input-2',
        'react-toastify',
        'react-modal',
        'material-table',
        'react-collapsible',
        'react-base64-downloader',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
        '.net',
        'c#',
        'Pdf downloads',
      ],
      usedModules: ['date-fns', 'responsive', 'aws sdk', 'sass'],
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
      title: 'Veritas Petroleum Services Static Web Site (for USA)',
      summery:
        'This Project for Veritas Petroleum Services(vps). They do world wide OIL testing and report generation.',
      technologies: [
        'javascript',
        'Html',
        'Jquery',
        'github',
        'bootstrap',
        'SEO',
        'Pdf downloads',
        'charts',
        'Maps',
      ],
      usedModules: [],
      live: 'https://www.vpsveritas.com',
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
      title:
        'ReactJs Multi Functional Dashboard  (Veritas Petroleum Services USA)',
      summery:
        'This site mainly used for the USA Petroleum Company to manage their all the task',
      technologies: [
        'javascript',
        '@material-ui/core',
        'axios',
        'typescrite',
        'mui-datatables',
        'mathjax-react',
        'material-tabs',
        'react-pdf',
        'react-google-charts',
        'chart.js',
        'js-file-downloader',
        'react-equation',
        'react-date-range',
        'git',
        'redux',
        'react-pro-sidebar',
        'react-redux',
        'react-resizable',

        'react-tinder-card',
        'react-simple-maps',
        'react-select-async-paginate',
        'react-select',
        'react-image-gallery',
      ],
      usedModules: [
        'canvasjs',
        'atob',
        'qrcode.react',
        'AWS',
        'react-blink-text',
        'html5',
        'react-bootstrap-table-next',
        'figma',
        'mathjax-react',
        '@date-io/moment',
        '@fortawesome/react-fontawesome',
        'bootstrap',
        'html5',
        'css3',
        'react-material-ui-carouse',
        'recharts',
        'react-tooltip',
        'react-virtualized',
        'react-toastify',
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
    {
      id: 4,
      title: 'QT GUI C++ Desktop Application(China)',
      summery:
        'This Project for the `Elastic Quality Checking Software Solution`',
      technologies: [
        'c++',
        'QT Framework',
        'IOT',
        'QML',
        'CSS',
        'Electric Motors',
        'Camera',
        'Lights',
      ],
      usedModules: [''],
      live: '',
      source: '',
      image: mock2,
      imagesUrl: [''],
    },
    {
      id: 5,
      title:
        'Point of Sale and Inventory Management Software(Mobile  & Web Application)',
      summery:
        'This project for the Android and Web Application for POS system for Nvision (pvt) LTD.',
      technologies: [
        'Android',
        'facebook login',
        'play service authentication(GSM)',
        'web view',
        'Android networking',
        'Material Design',
        'Dashboard Management',
        'Payment Gateways ',
        'Multi Role Authentication',
        'Jetpack',
        'API',
        'REST Services',
        'Multi language Support',
        'MySql Database',
        'AWS',
        'clould',
        'Retrofit',
        'Google map',
        'firebase firestore realtime datatbase analytics',
        'Junit',
        'Animation',
        'Room Database',
        'SQLite',
        'JSon',
        'Country/date time picker',
        'js out',
        'Google Play Store',
        'coil image',
        'pdf download',
        'scroller view',
      ],
      usedModules: ['Web site', 'php', 'html', 'css', 'boostrap', 'jquery'],
      live: 'https://www.salesplay.com',
      source: '',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F1.PNG?alt=media&token=2c665121-c4ea-4d75-8242-417eb99b468e',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F2.PNG?alt=media&token=4251e8be-d053-45ba-8aa2-56270570f63d',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F3.webp?alt=media&token=9b60201c-5741-4419-af22-8dd5eb1eb277',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F4.webp?alt=media&token=61f52594-9cfc-4603-a047-ac80ebfbabda',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F5.PNG?alt=media&token=8659463c-e0d6-4316-8f72-ee8c890cac09',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F6.webp?alt=media&token=f32b5d61-9625-4a53-9f99-9e3a997f9729',
        ,
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/POS%20Nvision%2F7.webp?alt=media&token=576aaf4d-a330-4ac6-99ce-2f56feb24389',
      ],
    },
    {
      id: 6,
      title: 'React Native - Sales Play Dashboard app',
      summery:
        'Thsi App for the Nvision Lanka pvt LTD to show their products statistics showing app',
      technologies: [
        'React Native',
        'expo',
        'react-native-screens',
        'react-native-tab-view',
        'android',
        'react-native-paper',
        'react-native-pager-view',
        'ios',
        'react-native-check-box',
        'expo-sqlite',
        'expo-status-bar',
        'react-native-gesture-handler',
      ],
      usedModules: ['expo-file-system', '@expo/vector-icons', 'native base'],
      live: '',
      source:
        'https://github.com/savindu-pasintha/react-native-sales-play-dashboard',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/sales%20play%20pos%20dashboard%20app%2F1.jpg?alt=media&token=bbf00f30-b029-48eb-895a-ff4e4a6fc1d5',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/sales%20play%20pos%20dashboard%20app%2F2.jpg?alt=media&token=bc67b3c3-b2d3-48dd-88bc-ed6bb4b74547',
      ],
    },
    {
      id: 6,
      title: 'Android Java Ecommerce App (Cup Cake selling)',
      summery:
        'This Android mobile app for selling cupcakes, special occasion cupcakes and all kind of sweets. And also they offer cupcake decoration classes also. It can manage client orders, manage stock and many other benefits included.',
      technologies: [
        'Java',
        'payment gateway',
        'Android',
        'room databse',
        'SqlLite',
        'API Handling',
        'Material Design',
        'Firebase Authetication',
      ],
      usedModules: [
        'com.google.android.material:material',
        'androidx.constraintlayout:constraintlayout',
        'junit',
        'com.github.bumptech.glide:glide',
      ],
      live: '',
      source:
        'https://github.com/savindu-pasintha/Java-cupCakes-app-ecommerce/tree/main/cupcakeapp',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F5.PNG?alt=media&token=c506d727-cf6d-4c2d-a9d0-290612a72a62',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F1.PNG?alt=media&token=7c443ab5-de1a-4298-ab51-e3ae0c01ef14',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F2.PNG?alt=media&token=5fe14a54-1a5e-4153-927b-ddae9792edc8',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F3.PNG?alt=media&token=7de29bfb-fa5f-404c-8eee-a69af227cb07',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F4.PNG?alt=media&token=17f95094-0e19-4969-8066-9d5f286cbd6f',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F6.PNG?alt=media&token=27ead611-6893-4b27-86de-6f1938a5ec72',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/cupcake%20app%20java%20android%2F7.PNG?alt=media&token=234423e3-83fc-462b-9823-1050892fef84',
      ],
    },
    {
      id: 6,
      title: 'Android Java `News App`',
      summery:
        'This app based on the java native Android app development. Anyone Can News search and show the all the details about that topic.I used Retrofit library with singleton design pattern for the `newsapi.org` API data access.',

      technologies: [
        'Java',
        'com.squareup.retrofit2:retrofit',
        'Android',
        'swiperefreshlayout:swiperefreshlayout',
        'Android web view',
        'Android Networking',
        'com.google.android.gms:play-services-ads',
        'Singleton pattern',
        'Retrofit Https Request handling',
        'org.ocpsoft.prettytime:prettytime',
        'Android Material Design',
        'com.squareup.retrofit2:converter-gson',
      ],
      usedModules: [
        'News Searching',
        'io.github.medyo:android-about-page',
        'Show Vidios',
        'Show Images',
        'com.squareup.picasso:picasso',
        'commenting',
      ],
      live:
        'https://github.com/savindu-pasintha/Android-Java-news-app/tree/master/app/release',
      source: 'https://github.com/savindu-pasintha/Android-Java-news-app',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Android%20News%20app%20java%2F2.jpg?alt=media&token=bd6d0de0-defa-4641-85c8-7d968c719c34',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Android%20News%20app%20java%2F3.jpg?alt=media&token=25ed25f5-82ad-435f-a134-c14c2d7dfa35',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Android%20News%20app%20java%2F4.jpg?alt=media&token=8f1c2ce0-1747-4768-9f35-5af4c1d89b6f',

        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/Android%20News%20app%20java%2F1.jpg?alt=media&token=f677ed5a-4f08-4320-b39c-dc9769c69c33',
      ],
    },
    {
      id: 6,
      title: 'Android Java `Wallpaper changing App`',
      summery:
        'Users can see multiple wallpapers in the screen. when user select one wallpaper he/she can  set as a mobile Lock screen and Home screen wallpaper',
      technologies: [
        'Java',
        'Android',
        'Jet pack',
        'Image hangling',
        'android.material',
        'internet',
        'android.gms:play-services-ads',
        'Retrofit API',
        'com.squareup.retrofit2:retrofit:2.4.0',
        'com.squareup.retrofit2:converter-gson:2.2.0',
        'Picaso for image url com.squareup.picasso:picasso:2.5.0',
        'image url set to image view com.github.bumptech.glide:glide:4.12.0',
      ],
      usedModules: ['Change The mobile phone wallpaper'],
      live: '',
      source:
        'https://github.com/savindu-pasintha/Android-APPS-JAVA/tree/master/WallpaperChangeApp',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/wallpaper%20app%20android%20java%2F1.jpg?alt=media&token=453fe0db-861e-4b24-9a39-7b0ecca059f7',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/wallpaper%20app%20android%20java%2F2.jpg?alt=media&token=b521fbe7-6de5-4d4d-a130-f1560422bdeb',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/wallpaper%20app%20android%20java%2F3.jpg?alt=media&token=1a8253c4-7e6b-4e6e-aaa5-9f8bd6a93867',
      ],
    },
    {
      id: 6,
      title: 'Android Java `Whatsapp Status Saving App`',
      summery:
        'This app user to allow , their whatsapp status saving to Mobile phone file Storage.',
      technologies: [
        'Java',
        'Android',
        'Jet pack',
        'Image hangling',
        'android.material',
        'internet',
        'android.gms:play-services-ads',
        'Retrofit API',
        'com.squareup.retrofit2:retrofit:2.4.0',
        'com.squareup.retrofit2:converter-gson:2.2.0',
        'Picaso for image url com.squareup.picasso:picasso:2.5.0',
        'image url set to image view com.github.bumptech.glide:glide:4.12.0',
      ],
      usedModules: [
        '✔️ View WhatsApp stories',
        '✔️ Save WhatsApp stories',
        '✔️ Full Screen Whatsapp Stories view',
        '✔️ Preview Downloaded Story',
        '✔️ Offers WhatsApp status download option',
        '✔️ Share with Friends',
        '✔️ Delete Unwanted Whatsapp Story',
      ],
      live: '',
      source:
        'https://github.com/savindu-pasintha/Android-APPS-JAVA/tree/master/Status-Saver-master',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/whatsapp%20status%20saving%20app%2F2.PNG?alt=media&token=281a1f8b-d611-44e0-b108-ac23ca4aa148',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/whatsapp%20status%20saving%20app%2F1.PNG?alt=media&token=d869e112-37b8-4db8-86a3-201325292ad2',
      ],
    },
    {
      id: 6,
      title: 'React Native (Uber Eats Clone App)',
      summery: 'This app for React Native sample `uber eats clone`',
      technologies: [
        'React Native',
        'firebase',
        'firestore',
        'authentication',
        'react-native-elements',
        'react-native-reanimated',
        'redux',
        'react-native-vector-icons',
        'react-native-bouncy-checkbox',
        'expo',
        'react-native-screens',
        'react-native-tab-view',
        'android',
        'react-native-paper',
        'react-native-pager-view',
        'ios',
        'react-native-check-box',
        'expo-sqlite',
        'expo-status-bar',
        'react-native-gesture-handler',
      ],
      usedModules: [
        'product search',
        'authentication',
        'screen navigations',
        'google map',
        'cart',
        'buy',
        'messaging',
      ],
      live: '',
      source: '',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/uber%20eats%20%20react%20native%20app%2F1.jpg?alt=media&token=46545e19-e9ef-4ab9-abb1-eae4e78394e8',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/uber%20eats%20%20react%20native%20app%2F3.PNG?alt=media&token=16865925-57bf-46e6-b0a7-4fcd695e2f2e',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/uber%20eats%20%20react%20native%20app%2F5.PNG?alt=media&token=6a908e34-74f4-4691-b56d-1938f01372de',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/uber%20eats%20%20react%20native%20app%2F1.jpg?alt=media&token=46545e19-e9ef-4ab9-abb1-eae4e78394e8',
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/uber%20eats%20%20react%20native%20app%2F4.PNG?alt=media&token=d8084aad-1dc5-43ce-9db0-3fd5a299f328',
      ],
    },
    {
      id: 6,
      title: 'React JS / Node js Core Ui Dashboard web application',
      summery:
        'This web site for the Dashboard management system with react core Ui. Backend as a used Nodejs.',
      technologies: [
        'props',
        'Nodejs',
        'expressjs',
        'mysql databse',
        'authO2',
        'core ui template',
        'react',
        'javascript',
        '@mui/Material Design',
        '@material-ui',
        'axios',
        'REST Service',
        'react-time-picker',
        'react-select',
        'react-phone-input-2',
        'react-toastify',
        'react-modal',
        'material-table',
        'react-collapsible',
        'react-base64-downloader',
        'git',
        'github',
        'bootstrap',
        'html5',
        'css3',
        'figma',
        '.net',
        'c#',
        'Pdf downloads',
      ],
      usedModules: [
        'analysis charts',
        'diagrams',
        'date-fns',
        'responsive',
        'aws sdk',
        'sass',
      ],

      live: '',
      source: 'https://github.com/savindu-pasintha/vuejs-Core-Ui-Admin-Panel',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/React%20JS%20Node%20js%20Core%20Ui%20Dashboard%20web%20application%2F1.PNG?alt=media&token=af5ca586-2c09-44b4-b257-111863cbf219',
      ],
    },
    {
      id: 6,
      title: 'Reactjs `Youtube Clone`',
      summery:
        'A web site allow to Watch Youtube vidios through the Google youtube web API',
      technologies: [
        'google developer API',
        'react',
        'axios',
        'bootstrap',
        'http-proxy-middleware',
        'jquery',
        'popper.js',
        'reactjs-media',
      ],
      usedModules: [''],
      live: 'https://youtubesp.netlify.app/',
      source: 'https://github.com/savindu-pasintha/youtubeClone',
      image: mock2,
      imagesUrl: [
        'https://firebasestorage.googleapis.com/v0/b/savindupasintha-71dd8.appspot.com/o/youtube%20clone%2F1.PNG?alt=media&token=85296b9b-599b-4eeb-a7ab-e0104ca1bb37',
      ],
    },
    {
      id: 6,
      title: '',
      summery: '',
      technologies: [''],
      usedModules: [''],
      live: '',
      source:
        'https://github.com/savindu-pasintha/Java-EE-Hospital-Project-REST-Mysql-with-Jersey',
      image: mock2,
      imagesUrl: [''],
    },
    {
      id: 6,
      title: '',
      summery: '',
      technologies: [''],
      usedModules: [''],
      live: '',
      source: '',
      image: mock2,
      imagesUrl: [''],
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
