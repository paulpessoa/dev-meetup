/* eslint-disable vue/multi-word-component-names */
<template>
    <v-container>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-card>
                    <v-cart-title>
                        <h2>Meetup id</h2>
                    </v-cart-title>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                    height="300px"
                    ></v-img>
                <v-card-text>
                    <div class="info--text">17th July - Where it takes place</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ducimus, modi soluta obcaecati, quo eligendi fuga, reprehenderit velit deleniti cum maxime quis? Itaque iste minus, culpa voluptate ex autem totam.</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary">
                     <v-icon left light>mdi-calendar-plus</v-icon>Register</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>