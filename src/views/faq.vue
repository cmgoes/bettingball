<template>
    <div class="container q-py-lg">
        <div class="row">
            <div class="col-xs-12 col-md-5 col-lg-3 filterSection q-px-lg">
                <button :class=" filter === 'faq1' ? 'active': ''" @click="filter = 'faq1'">
                    Bloq Ball Lotto
                </button>
                <button :class=" filter === 'faq2' ? 'active': ''" @click="filter = 'faq2'">
                    Tokenomics
                </button>
                <button :class=" filter === 'faq3' ? 'active': ''" @click="filter = 'faq3'">
                    Farming Rewards
                </button>
                <button :class=" filter === 'faq4' ? 'active': ''" @click="filter = 'faq4'">
                    Earning Rewards in FTM
                </button>
            </div>
            <div class="col-xs-12 col-md-7 col-lg-9">
                <div class="q-px-lg q-py-md">
                    <q-list bordered class="rounded-borders">
                        <template v-for="(ques,idx) in faqs[filter]">
                            <q-expansion-item
                                    :key="idx"
                                    expand-separator
                                    :label="ques.q"
                            >
                                <q-card class="bg-blue">
                                    <q-card-section>
                                        <div v-html="ques.ans"></div>
                                    </q-card-section>
                                </q-card>
                            </q-expansion-item>
                            <q-separator :key="'hr'+idx"/>
                        </template>

                    </q-list>
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
                filter: 'faq1',
                text: '',
                fromImage: '/amg/ftm.png',
                faqs: {
                    faq1: [
                        {
                            q: 'How do I buy tickets to participate in the Bloq Ball Lotto?',
                            ans:
                                'BloqBall is built on the Fantom blockchain because of its lightning-fast transactions' +
                                ' and low transaction fees. To start, you need to setup Fantom Opera on your Metamask.' +
                                ' Once that is done, you can swap your FTM to get BQB and use this BQB to buy tickets,' +
                                ' by visiting the BUY TICKETS page, the link can be found in the Lotto menu. There is a daily' +
                                ' lotto and weekly bumper lotto. One user can buy any number of tickets. One ticket costs 100 BQB.' +
                                ' Bumper ticket costs 200 BQB. More details can be found on the Buy Tickets page. Tickets are created' +
                                ' and sent to your wallets as NFT tokens.'
                        },
                        {
                            q: 'How to check the results and claim my winnings?',
                            ans:
                                'Our daily lotto results would be drawn at 23:59:59 GMT+5:00 time every day. You can visit the Results' +
                                ' page to check results and connect your wallet to see if you have won. If you are a winner, simply' +
                                ' click on the CLAIM WINNINGS button to get your prizes withdrawn to your wallets.'
                        },
                        {
                            q: 'What is the prize/winnings structure of Bloq Ball Lotto?',
                            ans:
                                'At Bloq Ball 100% of the prize pool is distributed among winners. The platform or developers do not' +
                                ' take any percentage or fee from transactions. 50% of the prize pool is allocated for the first prize,' +
                                ' 25% for the second, 15% and 10% for 3rd and 4th respectively. If more than one winners are there in any' +
                                ' section, the prize amount will be shared equally among all winners in that section. If no winners are' +
                                ' there in any section, 75% of that amount is rolled over to the next draw, and 25% added to the prize reserve.'
                        },
                        {
                            q: 'What is Prize Reserve?',
                            ans:
                                'To make sure there is an attractive prize to win every day, we have locked in 500k BQB' +
                                ' into the smart contracts, of which 10K BQB will be added to the daily winnings pool if the' +
                                ' roll over from previous day is less than 15k BQB. So every day you have enough BQB to win! ' +
                                'The same for weekly bumber is 20k BQB if the roll over from previous Lotto is less than 30k BQB.'
                        }
                    ],
                    faq2: [
                        {
                            q: 'What is the total supply of BQB token?',
                            ans:
                                'The maximum total supply of BQB tokens is capped at 1 billion. 10 million tokens will be created ' +
                                ' at launch of which 4 million tokens will be added with proportional FTM to provide initial liquidity. ' +
                                ' This liquidity will be locked for 365 days, the team can not withdraw or unstake from LP till then. ' +
                                ' LP provided by the team will not earn any farming or staking rewards to make sure 100% of the rewards are distributed to the community.'
                        },
                        {
                           q: 'How do you compensate the team?',
                            ans:
                                'Unlike the usual defi projects, BloqBall is not taking any transaction fee or percentage of BQB' +
                                ' created per every block allocated to developers, no. 100% of the fees, farming rewards, staking' +
                                ' rewards, Lotto winnings etc, all of it goes to the community and users of the platform.' +
                                ' But, of course to make any project a successful one, an efficient developers and marketing team is' +
                                ' needed and they must be compensated reasonably. To do this, the smart contract has locked up 5M' +
                                ' BQB of which 5% will be sent to them every month, as a salary - for 20 months. So the developers' +
                                ' team will have to work well and add more amazing features to the platform and also work to grow' +
                                ' the community; because only then the value of BQB will have a steady growth which will have the fiat value of this 5% increase.' +
                                ' At the time of deployment the value of this 5% will be about $2k only and the team will have to give' +
                                ' its best to push Bloq Ball to greater heights to add more value to BQB token and to make the 5%' +
                                ' they get every month more valuable. So it’s a win-win for the team and the project.'
                        },
                        {
                            q: 'How is the initial mint allocated?',
                            ans:
                                ' During deployment 10M BQB tokens are created of which 5M is locked in the contract to provide 5% per month' +
                                ' to the marketing and developers team. 4M tokens, along with proportional FTM is added to provide first LP' +
                                ' and it is locked for 365 days. 500k tokens are locked in the contract as prize-reserve. The ' +
                                'remaining 500k tokens are for marketing, bounty, audit and other expenses that may arrive.'
                        },
                    ],
                    faq3: [
                        {
                            q: 'How do I start farming?',
                            ans:
                                'To start farming and earning our high APR BQB rewards, first you neeed to add liquidity ' +
                                'to the FTM-BQB liquidity pool. That is our initial famring pair and more pairs maybe added' +
                                ' later. If you do not have BQB tokens, you can visit the SWAP page and get BQB tokens by ' +
                                ' exhanging FTM. Once done, add FTM and BQB tokens to Liquidity and stake that LP tokens in the farming page to start earning.'
                        },
                        {
                           q: 'How do you reward the early adopters who provide you with liquidity?',
                            ans:
                                'To appreciate the support, both farming and staking sections will have 10 times more ' +
                                'rewards in the first 7 days. The number of BQB tokens created per block (per second) is 10' +
                                ' for the first week and after that it is 1 BQB token per block. By providing liquidity and' +
                                ' staking early, you will be reaping in more rewards. '
                        },
                        {
                            q: 'Will you be adding more farming pairs?',
                            ans:
                                'Yes, we maybe adding more pairs to the farming section later on. Initially we will ' +
                                ' have just one farming pair BQB-FTM.'
                        },
                    ],
                    faq4: [
                        {
                            q: 'What is the FTM Rewards system, how does it work?',
                            ans:
                                'Bloq Ball has a dual reward feature for BQB staking, to reward the top 100 stakeholders or BQB token.' +
                                ' The platform has a fee structure of 0.5% across all transactions and 100% of this FTM fee will be ' +
                                'rewarded to the top 100 stakers of BQB staking pool. The top 10 BQB holders will be rewarded with 40%' +
                                ' of the total FTM-allocation collected (will be distributed proportionally). The next 40 will get' +
                                ' 35% of the FTM-allocation and the next 50 users will get 25%.' +
                                ' To get FTM staking rewards, you need to be in the top 100 holders of BQB. The more BQB hold, the more you earn. ' +
                                'Note that FTM rewards are a bonus - you are earning it along with your BQB rewards - because our BQB staking pool has double rewards.'
                        },
                         {
                            q: 'How can I start earning FTM rewards?',
                            ans:
                                'It is really easy. Go to the staking page and stake your BQB tokens to the pool. If you do not have BQB tokens, ' +
                                'go to our swap page and buy BQB tokens. Then visit the staking page again and add your BQB tokens to the pool.' +
                                ' You will start earning in FTM and BQB once that is done and your rewards will be shown in the staking page. ' +
                                'You can harvest your rewards any time you want or add it back to the staking pool and earn even more rewards.'
                        },
                    ],
                }
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
                if (this.text) {
                    return rows.filter(item => item.farm.toLowerCase().includes(this.text.toLowerCase()))
                } else {
                    return rows
                }
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
        margin: 10px 0;
        width: 100%;
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

</style>