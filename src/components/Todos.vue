<template>
  <v-container
      class="py-8 px-6"
      fluid
  >
    <v-row>
      <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
      >
        <v-card>
          <v-subheader>{{ card }}</v-subheader>

          <v-list two-line>
            <template v-for="n in events">
              <v-list-item
                  :key="n"
              >
                <v-list-item-avatar :color="n.color">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Message {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider
                  :key="`divider-${n}`"
                  inset
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Todos",
  data: () => ({
    // cards: ['Today', 'Yesterday'],
  }),
  mounted () {},
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    events() {
      return this.$store.state.events;
    },
  },
  methods: {
    // methods
  },
}
</script>

<style scoped>

</style>