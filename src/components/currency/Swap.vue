<template>
    <div style="width: 100%;">
        <CurrencyField title="Swap From" :coin="coinOne" :dataList="dataList" @change="changeOne" v-model="valueOne"/>
        <q-btn color="secondary" unelevated round icon="import_export" size="lg" class="sync-btn" @click="swap"></q-btn>
        <CurrencyField title="Swap to (est)" :coin="coinTwo" :dataList="dataList" @change="changeTwo"
                       v-model="valueTwo"/>
        <button class="action">Connect to wallet</button>
    </div>
</template>

<script>
    import CurrencyField from '@/components/currency/CurrencyField';

    export default {
        components: {
            CurrencyField,
        },
        data() {
            return {
                dataList: [
                    {id: 1, value: 'FTM', name: 'Fantom', logo: require('@/assets/logo/ftm.png')},
                    {id: 2, value: 'BQB', name: 'BloqBall', logo: require('@/assets/logo/bqb.png')}
                ],
                coinOne: {},
                coinTwo: {},
                valueOne: null,
                valueTwo: null,
            }
        },
        created() {
            this.coinOne = this.dataList[0]
        },
        methods: {
            changeOne(item) {
                if (this.coinTwo === item) {
                    var position = 'top-';
                    this.$q.notify({
                        message: 'Coins can not be the same to swap!',
                        color: 'red',
                        position,
                        timeout:  5000
                    })
                } else {
                    this.coinOne = item
                }

            },
            changeTwo(item) {
                if (this.coinOne === item) {
                   var position = 'top';
                    this.$q.notify({
                        message: 'Coins can not be the same to swap!',
                        color: 'red',
                        position,
                        timeout:  5000
                    })
                } else {
                    this.coinTwo = item
                }
            },
            swap() {
                let itemOne = this.coinOne;
                let valueOne = this.valueOne;
                this.coinOne = this.coinTwo;
                this.valueOne = this.valueTwo;
                this.coinTwo = itemOne;
                this.valueTwo = valueOne;
            }
        }

    };
</script>

<style scoped>
    .sync-btn {
        margin: -10px 0 -10px 10px;
        border: 3px solid var(--q-color-dark);
        z-index: 10;
    }

    .action {
        background: #0993ec33;
        width: 100%;
        margin-top: 15px;
        border: none;
        border-radius: 10px;
        padding: 15px;
        font-size: 1rem;
        color: #0993ec;
        cursor: pointer;
    }

    .action:hover {
        background-color: #0993ec60;
    }

    .field {
        display: flex;
    }

    .field__item {
        width: 100%;
        display: flex;
    }
</style>