<template>
  <div id="app">
    <v-app>

      <v-app-bar app>
        <v-spacer/>
        <v-app-bar-title>
          <div id="institutionName">{{ institutionName }}</div>
        </v-app-bar-title>
        <v-spacer/>
      </v-app-bar>

      <v-navigation-drawer
          app
      >

        <v-sheet
            color="grey lighten-4"
            class="pa-4"
        >
          <v-avatar
              class="mb-4"
              color="primary"
              size="64"
          >
            <span class="white--text headline">{{ username ? username.charAt(0) : '' }}</span>
          </v-avatar>
          <div id="username">{{ username }}</div>
          <div id="userPhoneNumber">{{ userPhoneNumber }}</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
              v-for="[icon, link, content] in links"
              :key="icon"
              @click="changeCurrContent(content)"
              :class="currContent === content ? 'navbarLinksSelected' : '' "
              link
          >
            <v-list-item-icon>
              <v-icon
                  large
                  color="purple darken-2"
              >
                {{ icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <!-- Sizes your content based upon application components -->
      <v-main style="padding-top: 0">

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
<!--          <img alt="Vue logo" src="./assets/logo.png">-->
<!--          <HelloWorld msg="Welcome to Your Vue.js App"/>-->
          <!-- If using vue-router -->
<!--          <router-view></router-view>-->
          <Todos v-if="currContent == 0"/>
          <Calendar v-if="currContent == 1"/>
          <div v-if="currContent == 2"> 文件输出 </div>

        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>

  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import Todos from "@/components/Todos";

export default {
  name: 'App',
  data: () => ({}),
  components: {
    Calendar,
    Todos,
  },
  computed: {
    institutionName() {
      return this.$store.state.institutionName;
    },
    username() {
      return this.$store.state.username;
    },
    links() {
      return this.$store.state.links;
    },
    userPhoneNumber() {
      return this.$store.state.userPhoneNumber;
    },
    currContent() {
      return this.$store.state.currContent;
    }
  },
  methods: {
    changeCurrContent(content) {
      this.$store.commit('changeCurrContent', content);
    },
  },
}
</script>

<style>
#username {
  font-size: 30px;
}

.navbarLinksSelected {
  background-color: #6da8e9;
}

#institutionName {
  font-size: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
