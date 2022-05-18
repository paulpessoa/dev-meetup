const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true [
    'vuetify'
  ],

  lintOnSave:false,

  pwa: {
    name: 'Dev MeetUp',
    themeColor: '#D01600'
  }
})
