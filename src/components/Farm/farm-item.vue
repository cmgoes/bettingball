<template>
    <q-card class="q-my-sm">
        <q-card-section>
            <div class="d-flex align-center">
                <q-img :src="img1" style="width:40px;height: 40px"
                       class="rounded-borders q-mr-sm"></q-img>
                <q-img :src="img2" style="width:40px;height: 40px"
                       class="rounded-borders q-mr-sm"></q-img>
                <div>
                    <div>DUSD/WETH</div>
                    <div>SushiSwap Farm</div>
                </div>
            </div>

        </q-card-section>
    </q-card> 
</template>

<script>
    export default {
        name: "farm-item",
        data() {
            return {
                img1: 'https://res.cloudinary.com/dnz2bkszg/image/fetch/f_auto/https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x5BC25f649fc4e26069dDF4cF4010F9f706c23831/logo.png',
                img2: 'https://res.cloudinary.com/dnz2bkszg/image/fetch/f_auto/https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg',
                img3: 'https://app.sushi.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsushiswap%2Ficons%2Fmaster%2Ftoken%2Fsushi.jpg&w=64&q=75'
            }
        }
    }
</script>

<style scoped>

</style>