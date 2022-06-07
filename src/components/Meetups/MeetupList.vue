/* eslint-disable vue/multi-word-component-names */
<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card  class="mt-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3 align-self-center>
                <v-img
                src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                height="130px" class="ma-4 rounded"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9 align-self-center>
                <v-card-title class="pt-0 pb-2">
                  <div>
                    <h5>My Meetup Title</h5>
                    <div class="text-subtitle-1"><v-icon small left>mdi-calendar-clock</v-icon>17th July 2022</div>
                    <div class="text-subtitle-2 mb-0"><v-icon small left>mdi-calendar-clock</v-icon>08:00am to 11:00am</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="primary" to="/meetups/1">
                  <v-icon left light>mdi-calendar</v-icon>
                    view meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>