<template>
  <v-app dark>
    
    <v-main >
    <v-app-bar >
     <v-app-bar-nav-icon @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>  
      <v-toolbar-title>DevMeetUp</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-item>
      <!---need to add MeetUps Icon -->
        <v-btn text><v-icon>mdi-account-supervisor</v-icon>View MeetUps</v-btn>
      </v-toolbar-item>
   
    </v-app-bar>
    
    </v-main>







    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>
              <v-list-tile-action> <v-icon>mdi-account-supervisor</v-icon></v-list-tile-action>
                <v-list-tile-content>          
                  View MeetUps
                </v-list-tile-content>
              </v-list-item-title>
          </v-list-item>
<!--
          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
-->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>












  </v-app>
</template>

<script lang="ts">

 export default {
   data:() => {
     return {
        drawer: false,
       group: null,
     }
   },
    name: 'App',
    components: {
      
    }
  }
</script>

<style lang="scss" >
  .container {
width: 1400px;
margin: 0 auto;
  }
</style>