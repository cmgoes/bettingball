<template>
    <div class="container ">
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
        <div class="row q-py-lg">
            <div class="col-xs-12 col-md-5 col-lg-3 filterSection">
                <button :class=" filter === 'all' ? 'active': ''" @click="filter = 'all'">
                    Current Farms
                </button>
            </div>
            <div class="col-xs-12 col-md-7 col-lg-9 q-py-md q-px-md">
                <div class="q-my-md">
                    <q-table
                            title="Farms"
                            class="transparent custom-table"
                            :data="filteredFarm"
                            :columns="columns"
                            row-key="id"
                    >
                        <template v-slot:body="props">
                            <q-tr :props="props" @click="props.expand = !props.expand" class="cursor-pointer">
                                <q-td>
                                    <div class="flex items-center no-wrap">
                                        <q-img :src="props.row.fromImage" style="width:40px;height: 40px"
                                               class="rounded-borders q-mr-sm"></q-img>
                                        <q-img :src="props.row.toImage" style="width:40px;height: 40px"
                                               class="rounded-borders q-mr-sm"></q-img>
                                        <div class="q-ml-xs">
                                            <div class="q-mb-none q-mt-none text-bold">{{props.row.pair}}</div>
                                            <small class="text-grey">{{props.row.farm}}</small>
                                        </div>
                                    </div>

                                </q-td>
                                <q-td class="text-bold">
                                    {{props.row.volume}}
                                </q-td>

                                <!--                                    <q-td >-->
                                <!--                                        <div class="flex items-center no-wrap">-->
                                <!--                                            <q-img :src="props.row.img3" style="width:25px;height: 25px"-->
                                <!--                                                   class="rounded-borders q-mr-sm"></q-img>-->
                                <!--                                            <div class="text-uppercase q-ml-sm">{{props.row.reward}}</div>-->
                                <!--                                        </div>-->
                                <!--                                    </q-td>-->
                                <q-td class="text-right">
                                    <div class="text-bold">{{props.row.apr}}</div>
                                    <div class="text-grey">{{props.row.apr_type}}</div>
                                </q-td>
                            </q-tr>
                            <q-tr v-show="props.expand" :props="props">
                                <q-td colspan="5">
                                    <div class="row justify-center">
                                         <div class="col-12 flex justify-between items-center q-pa-sm">
                                             <q-btn class="bg-blue">
                                                  {{props.row.volume}}
                                             </q-btn>
                                            <q-btn class="gradient-blue">
                                                Harvest
                                            </q-btn>
                                        </div>
                                        <div class="cols-12 col-sm-6 q-pa-sm">
                                            <div class="flex justify-between items-center q-mb-lg">
                                                <div></div>
                                                <div class="text-right">
                                                    <div class="box-outlined">Wallet Balance: 0</div>
                                                </div>
                                            </div>
                                            <div>
                                                <q-input standout type="number" placeholder="0.0">
                                                    <template v-slot:append>
                                                        <div>
                                                            <q-btn rounded outline color="blue" size="sm">
                                                                MAX
                                                            </q-btn>
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                            <div>
                                                <button class="action">Stake</button>
                                            </div>
                                        </div>
                                        <div class="cols-12 col-sm-6 q-pa-sm">
                                            <div class="flex justify-between items-center q-mb-lg">
                                                <div></div>
                                                <div class="text-right">
                                                    <div class="box-outlined">Your Staked: 0</div>
                                                </div>
                                            </div>
                                            <div>
                                                <q-input standout type="number" placeholder="0.0">
                                                    <template v-slot:append>
                                                        <div>
                                                            <q-btn rounded outline color="pink" size="sm">
                                                                MAX
                                                            </q-btn>
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                            <div>
                                                <button class="action text-pink">Unstake</button>
                                            </div>
                                        </div>

                                    </div>
                                </q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Farm",
        data() {
            return {
                filter: 'all',
                banner: true,
                text: '',
                columns: [
                    {
                        name: 'pool',
                        field: 'pool',
                        label: 'Pool',
                        align: 'left',
                        sortable: true
                    },
                    {
                        name: 'tvl',
                        field: 'tvl',
                        label: 'TVL',
                        align: 'left',
                        sortable: true
                    },
                    // {
                    //     name: 'rewards',
                    //     label: 'Rewards',
                    //     align: 'left',
                    //     field: 'rewards',
                    //     sortable: false
                    // },
                    {
                        name: 'apr',
                        field: 'apr',
                        label: 'APR',
                        align: 'right',
                        sortable: true
                    },
                    // {
                    //     name: 'harvest',
                    //     field: 'harvest',
                    //     label: '',
                    //     align: 'right',
                    //     sortable: false
                    // },
                ],
                rows: [
                    {
                        id: 1,
                        farm: 'BloqBall Farm',
                        pair: 'FTM/BQB',
                        volume: '$103,272',
                        fromImage: require('@/assets/logo/ftm.png'),
                        toImage: require('@/assets/logo/bqb.png'),
                        img3: require('@/assets/logo/bqb.png'),
                        reward: '8.539 BQB/day',
                        apr: '423.65%',
                        apr_type: 'annualized',
                        farm_type: 'BQB'
                    },

                ]
            }
        },
        computed: {
            filteredFarm() {
                var rows = [];
                if (this.filter === 'all') {
                    rows = this.rows
                } else {
                    rows = this.rows.filter(item => item.farm_type === this.filter)
                }
                return rows
            }
        }
    }
</script>

<style scoped>
    .filterSection button {
        background: black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 10px;
        border-radius: 7px;
        margin: 10px;
        width: 90%;
        color: white;
        border: none;
        cursor: pointer;
    }

    .filterSection button.active {
        background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
        color: #fff;
        font-weight: 600;
    }

    .custom-table tbody td {
        padding: 20px 10px;
    }

    .gradient-blue {
        background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
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