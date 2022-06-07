<template>
 <v-container>

    <v-layout row wrap>

      <v-flex xs12 sm6 class="text-center text-sm-right">
        <v-btn large router style="margin: 10px;" to="/meetup">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-center text-sm-left">
        <v-btn large router style="margin: 10px;" to="/createmeetup">Organize Meetups</v-btn>
      </v-flex>

    </v-layout>
    
    <v-layout row wrap >
      <v-flex xs12>
         <v-carousel>
            <v-carousel-item 
              v-for="(meetup,i) in meetups"
              :key="i"
              :src="meetup.src"
              reverse-transition="fade-transition"
              transition="fade-transition">
                <div class="title">
                  {{meetup.title}}
                </div>
            </v-carousel-item>
          </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-6">
      <v-flex xs12 class="text-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>

 </v-container>


</template>


<script lang="ts">
  export default {
    data () {
      return {
        meetups: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: 'askjdhaksjdhasdh',
            title: 'Title 01'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: 'askjdhaksjdssdh',
            title: 'Title 02'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: 'askjdhaksjdakidh',
            title: 'Title 03'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: 'askjdhaksjghgdh',
            title: 'Title 04'
          },
        ],
      }
    },
  }
</script>


<style scoped lang="scss">
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 20px;
    text-align: center;
    width: 100%;
  }
</style>