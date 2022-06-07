<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                heigth="120px" class="ma-4"
                >s</v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">My Meetup</h5>
                    <div>17th July 2022</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat text outlined to="">
                  <v-icon left light>mdi-arrow-right</v-icon>
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