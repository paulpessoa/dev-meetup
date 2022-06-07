<template>
  <v-app dark>
    <v-navigation-drawer v-model="sideBar" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group">
              <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
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
              @click.stop="sideBar = !sideBar"
              class="hidden-md-and-up"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer">DevMeetUp</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-item class="hidden-sm-and-down">
              <!---need to add MeetUps Icon -->
              <v-btn text v-for="item in menuItems" :key="item.title" router :to="item.link">
              <v-icon>{{item.icon}}</v-icon> {{item.title}}</v-btn
              >
            </v-toolbar-item>
          </v-app-bar>


            <router-view></router-view>

        </v-main>

  
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      sideBar: false,
      group: null,
      menuItems: [
        { icon: "mdi-account-supervisor", title: "View Meetups", link: "/meetups"},
        { icon: "mdi-map-marker", title: "Organize Meetups", link: "/meetups/new-meetup"},
        { icon: "mdi-account-circle", title: "Profile", link: "/profile"},
        { icon: "mdi-account-cog", title: "Sign up", link: "/signup"},
        { icon: "mdi-account-lock", title: "Sign in", link: "/signin"},
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






  