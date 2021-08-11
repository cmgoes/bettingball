<template>
    <div class="container">
        <q-banner dense inline-actions
                  class="text-white q-py-sm q-my-sm q-mx-sm text-h6 text-center text-uppercase flex"
                  v-if="banner"
                  style="background: #00800063"
        >
            <div class="row">
                <div class="col-11">
                    <q-icon name="notification_important"></q-icon>
                    Using smart contracts, tokens and crypto has always its risks.
                    DYOR before using our beta.
                </div>
                <div class="col-1 flex items-center justify-end">
                    <q-icon name="close" class="q-pa-xs cursor-pointer" @click="banner=false"></q-icon>
                </div>
            </div>

        </q-banner>
        <div>
            <div class="row">
                <div class="col-md-6 col-12 q-px-md">
                    <h5>Stake BQB and Start Earning FTM and BQB</h5>
                    <div class="text-grey" style="font-size: 17px">
                        Our Pool has a fantastic new staking rewards tokenomics. Our top 100 stake holders will enjoy
                        FTM rewards in additional to the regular BQB staking rewards. So if you hold more BQB, you get
                        double
                        returns. Please check FAQ to learn more about the exclusive FTM rewards structure of FTM. Get
                        more BQB
                        and earn more FTM. Fantom (FTM) rewards are limited to the top 100 stakers of BQB.
                    </div>
                </div>
                <div class="col-md-6 col-12 flex items-center justify-center" style="padding-top:20px;">
                    <q-img :src="require(`@/assets/icon.png`)"
                           style="max-width: 200px;"></q-img>
                </div>
                <div class="col-md-7 col-12 q-px-md q-py-lg">
                    <div class="card q-my-md flex justify-between bg-blue-10">
                        <div class="text-center">
                            <div class="text-bold text-h6">Staking APR</div>
                            <div>
                                <q-btn class="q-mt-xs bg-blue-13 rounded-borders">Harvest</q-btn>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-bold text-h5">19.61%</div>
                            <div class="q-mt-xs">FTM APR</div>
                        </div>
                        <div class="text-right">
                            <div class="text-bold text-h5">11.61%</div>
                            <div class="q-mt-xs">BQB APR</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__item">
                            <div class="tabs">
                                <div class="tab">
                                    <button :class=" tab === 'stake' ? 'active': ''"
                                            @click="tab = 'stake'">Stake BQB
                                    </button>
                                </div>
                                <div class="tab">
                                    <button :class=" tab === 'unstake' ? 'active': ''"
                                            @click="tab = 'unstake'">Unstake
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div v-if="tab === 'stake'">
                                <div class="flex justify-between items-center q-mb-lg">
                                    <div class="text-h4">Stake BQB</div>
                                    <div class="text-right">
                                        <div class="box-outlined">Total APR %</div>
                                    </div>
                                </div>
                                <div>
                                    <q-input standout type="text" prefix="BQB">
                                        <template v-slot:append>
                                            <div>
                                                <small class="text-grey q-mr-sm">Balance:</small>
                                                <q-btn rounded outline color="blue" size="sm">
                                                    MAX
                                                </q-btn>
                                            </div>
                                        </template>
                                    </q-input>
                                </div>
                                <div>
                                    <button class="action">Connect wallet</button>
                                </div>
                            </div>
                            <div v-if="tab === 'unstake'">
                                <div class="flex justify-between items-center q-mb-lg">
                                    <div class="text-h4">Unstake</div>
                                    <div class="text-right">
                                        <div class="box-outlined">Total APR %</div>
                                    </div>
                                </div>
                                <div>
                                    <q-input standout type="text" prefix="BQB">
                                        <template v-slot:append>
                                            <div>
                                                <small class="text-grey q-mr-sm">Balance:</small>
                                                <q-btn rounded outline color="blue" size="sm">
                                                    MAX
                                                </q-btn>
                                            </div>
                                        </template>
                                    </q-input>
                                </div>
                                <div>
                                    <button class="action">Connect wallet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-12 q-px-md q-py-lg">
                    <div class="card q-my-md">
                        <div class="text-h5 q-mb-sm">FTM</div>
                        <div class="flex items-center">
                            <div>
                                <img :src="require(`@/assets/logo/ftm.png`)" style="width: 60px;height: 60px"/>
                            </div>
                            <div class="q-mx-md">
                                <div>1234.3k</div>
                                <div>Tokens Rewarded</div>
                            </div>
                        </div>
                        <div class="text-h5 q-mb-sm q-mt-xl">BQB</div>
                        <div class="flex items-center">
                            <div>
                                <img :src="require(`@/assets/logo/bqb.png`)" style="width: 60px;height: 60px"/>
                            </div>
                            <div class="q-mx-md">
                                <div>345.533k</div>
                                <div>Tokens Rewarded</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        components: {},
        data() {
            return {
                banner: true,
                tab: 'stake',
                img3: '/amg/ftm.png',
                img4: '/amg/bqb.png'
            }
        }
    }
</script>

<style scoped>

    .card {
        background: var(--q-color-cloud);
        border-radius: 10px;
        padding: 15px;
    }

    .card__item:first-child {
        padding-bottom: 15px;
    }

    /* .card__item:last-child{
      padding-top: 10px;
    } */

    .tabs {
        display: inline-flex;
        border-radius: 10px;
        padding: 2px;
        background: var(--q-color-secondary)
    }

    .tab {
        /* display: inline; */
    }

    .tab > button {
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 7px;
        margin: 2px;
        color: #999;
        border: none;
        cursor: pointer;
    }

    .tab > .active {
        background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
        color: #fff;
        font-weight: 600;
    }

    .box-outlined {
        background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        padding: .125rem .875rem;
        border-radius: 1.5rem;
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

</style>