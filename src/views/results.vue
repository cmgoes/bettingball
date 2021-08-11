<template>
    <div>
        <unlock-wallet/>
        <finished-rounds/>
        <how-to-play/>
    </div>
</template>

<script>
    import UnlockWallet from '@/components/lottery/UnlockWallet.vue'
    import FinishedRounds from '@/components/lottery/FinishedRounds.vue'
    import HowToPlay from '@/components/lottery/HowToPlay.vue'

    export default {
        components: {
            UnlockWallet,
            FinishedRounds,
            HowToPlay
        },
    }
</script>

<style scoped>


</style>