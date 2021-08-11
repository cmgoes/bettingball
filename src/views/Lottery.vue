<template>
  <div>
    <get-tickets/>
    <how-to-play />
  </div>
</template>

<script>
import GetTickets from '@/components/lottery/GetTickets.vue'
import HowToPlay from '@/components/lottery/HowToPlay.vue'
export default {
  components: {
    GetTickets,
    HowToPlay
  }

}
</script>

<style scoped>


</style>