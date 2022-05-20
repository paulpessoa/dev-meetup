<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group">
              <v-list-item v-for="item in menuItems" :key="item.title">
                <v-list-item-title >
                  <v-list-tile-action >
                    <v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
                  <v-list-tile-content> {{ item.title}} </v-list-tile-content>
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

        <v-main>
          <v-app-bar dark class="cyan darken-4">
            <v-app-bar-nav-icon
              @click.native.stop="drawer = !drawer"
              class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>DevMeetUp</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-item class="hidden-sm-and-down">
              <!---need to add MeetUps Icon -->
              <v-btn text v-for="item in menuItems" :key="item.title">
              <v-icon>{{item.icon}}</v-icon> {{item.title}}</v-btn
              >
            </v-toolbar-item>
          </v-app-bar>
        </v-main>

  
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      drawer: false,
      group: null,
      menuItems: [
        { icon: "mdi-account-supervisor", title: "View Meetups" },
        { icon: "mdi-map-marker", title: "Organize Meetups" },
        { icon: "mdi-account-circle", title: "Profile" },
        { icon: "mdi-account-cog", title: "Sign up" },
        { icon: "mdi-account-lock", title: "Sign in" },
      ],
    };
  },
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
}
</style>






  