<template>
 <v-container>

    <v-layout row wrap>

      <v-flex xs12 sm6 class="text-center text-sm-right">
        <v-btn class="primary ma-2" router to="/meetups">
          <v-icon left light>mdi-calendar-search</v-icon>Explore Meetups
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-center text-sm-left">
        <v-btn class="primary ma-2" router to="/meetups/new-meetup">
          <v-icon left light>mdi-calendar-edit</v-icon>Organize a Meetup
        </v-btn>
      </v-flex>

    </v-layout>
    
    <v-layout row wrap >
      <v-flex xs12>
         <v-carousel>
            <v-carousel-item 
              v-for="(meetup,i) in meetups"
              :key="i"
              :src="meetup.imageUrl"
              :to="`/meetups/${meetup.id}`"
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

<script lang="ts">

  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '1',
            title: 'Title 01'
          },
          {
            imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '2',
            title: 'Title 02'
          },
          {
            imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3',
            title: 'Title 03'
          },
          {
            imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '4',
            title: 'Title 04'
          },
        ],
      }
    },
  
  }
</script>
