export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'exchange',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Exchange Aspenx' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css:[
      {
        
        src: "/icons/elegant/style.css",
        async: true,
        type: "text/css"
      }
    ],
    script:[
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.js",
        async: true,
        type: "text/javascript"
      },
      /*{
        src: "/js/shuffleLetters.js",
        async: true,
        type: "text/javascript",
        defer: true
      },*/
      {
        src: "/js/particles.js",
        type: "text/javascript",
        async: true,
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['static/css/index.css','static/css/animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/ethers.js'],///['plugins/web3.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],//["nuxt-web3"],
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  loading: {
    color: '#00c58e',
    height: '6px',
    continuous: true,
    duration: 200
  }
}
