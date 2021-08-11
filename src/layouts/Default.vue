<template>
  <!-- <q-layout view="hHh lpR fFf" :style="{ backgroundImage: `url(${require('@/assets/bloqbg.png')})` }" class="root"> -->
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-dark" bordered>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="miniState = !miniState" />
        <q-avatar size="md">
          <img :src="require('@/assets/icon.png')" />
        </q-avatar>
        <q-toolbar-title style="font-weight: bold">Shusi</q-toolbar-title>
        <q-btn rounded label="Connect" color="accent" class="q-mr-sm" />
        <q-btn round>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <q-badge floating color="red" rounded></q-badge>
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer"  :width="240" :breakpoint="500" bordered content-class="text-accent" :mini="miniState">
        <q-scroll-area class="fit">
          <q-list>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="home" /></q-item-section><q-item-section>Home</q-item-section></q-item>
            <q-expansion-item expand-separator icon="sync_alt" label="Trade">
              <q-item clickable v-ripple><q-item-section>Exchange</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Liquidity</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>LP Migration</q-item-section></q-item>
            </q-expansion-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="agriculture" /></q-item-section><q-item-section>Farms</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="pool" /></q-item-section><q-item-section>Pools</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="lightbulb" /></q-item-section><q-item-section>Prediction (BETA)</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="local_activity" /></q-item-section><q-item-section>Lottery</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="interests" /></q-item-section><q-item-section>Collectibles</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="emoji_events" /></q-item-section><q-item-section>Team Battle</q-item-section></q-item>
            <q-expansion-item expand-separator icon="groups" label="Teams & Profile">
              <q-item clickable v-ripple><q-item-section>Leaderboard</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Task Center</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Your Profile</q-item-section></q-item>
            </q-expansion-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="analytics" /></q-item-section><q-item-section>Info</q-item-section></q-item>
            <q-item clickable v-ripple><q-item-section avatar> <q-icon name="storefront" /></q-item-section><q-item-section>IFO</q-item-section></q-item>
            <q-expansion-item expand-separator icon="more_horiz" label="More">
              <q-item clickable v-ripple><q-item-section>Contact</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Voting</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Github</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Doc</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Blog</q-item-section></q-item>
              <q-item clickable v-ripple><q-item-section>Merch</q-item-section></q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
      <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniState: false,
    };
  },
};
</script>

<style scoped>
.root{
  background-position: center -5rem;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 700px;
}
</style>