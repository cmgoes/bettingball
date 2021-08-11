<template>
    <div class="root">
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
        </div>

        <div class="buy" :style="{ backgroundImage: `url(${require('@/assets/bg-star.svg')})` }">
            <div class="buy__item">
                <div class="text-white">Welcome to Fantom's Bloq Ball Lotto!</div>
            </div>
            <div class="buy__item">
                <div class="text-highlight"><span>Win </span> $299,057</div>
            </div>
            <div class="buy__item">
                <div class="text-white">in today's lotto prizes.</div>
            </div>
            <div class="buy__item">
                <div class="ticket">
                    <div class="p1"></div>
                    <div class="p2">
                        <div class="dot"></div>
                    </div>
                    <div class="p3"></div>
                    <button @click="game=true">Get Your Ticket Now</button>
                </div>
            </div>
        </div>
        <q-dialog v-model="game">
            <q-card>
                <q-card-section class="row items-center q-pb-none no-wrap">
                    <div class="text-h6">Pick 6 Lucky Balls to Buy your Ticket</div>
                    <q-space/>
                    <q-btn icon="close" flat round dense v-close-popup class="q-ml-lg"></q-btn>
                </q-card-section>

                <q-card-section style="padding:0">
                    <ticket-game></ticket-game>
                </q-card-section>
            </q-card>
        </q-dialog>
        <div class="get">
            <div class="get__item">
                <div class="title">Try Your Luck Now With the DeFi Lotto</div>
            </div>
            <div class="get__item">
                <div class="text-clock">Next draw in <span>8</span> <span>hours</span> 39 <span> minutes</span></div>
            </div>
            <div class="get__item">
                <div class="card">
                    <div class="card__item card__item--header">
                        <div style="font-size: 1.2rem; font-weight: bold;">Next Lotto</div>
                        <div>#47 | Draw: Jul 26, 2021, 12:00 PM</div>
                    </div>
                    <div class="card__item">
                        <div>
                            <div class="item">
                                <div class="item__title">Winnings Pool</div>
                                <div class="">
                                    <div class="value">~$205,530</div>
                                    <div class="sub-value">14,986 BQB</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">Get your ticket</div>
                                <div class="">
                                    <button class="buy-buttom" @click="game=true"> Click Here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="cardExpand" class="card__item" style="border-top: 1px solid #ddd;">
                        <div>
                            <div>Match all 6 or upto any 3 balls in the results to win. Current prizes up for
                                grabs:
                            </div>
                            <div class="match-items">
                                <div class="match-items__item">
                                    <div class="title">Match all 6</div>
                                    <div class="value">6,021 BQB</div>
                                    <div class="sub-value">~$82,595</div>
                                </div>
                                <div class="match-items__item">
                                    <div class="title">Match any 5</div>
                                    <div class="value">3,015 BQB</div>
                                    <div class="sub-value">~$82,595</div>
                                </div>
                                <div class="match-items__item">
                                    <div class="title">Match any 4</div>
                                    <div class="value">6,021 BQB</div>
                                    <div class="sub-value">~$82,595</div>
                                </div>
                                <div class="match-items__item">
                                    <div class="title">Match any 3</div>
                                    <div class="value">6,021 BQB</div>
                                    <div class="sub-value">~$82,595</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card__item" style="justify-content: center;">
                        <div v-if="cardExpand" class="card__expand__switcher" @click="cardExpand = !cardExpand">Hide
                            <q-icon name="expand_less" color="info"/>
                        </div>
                        <div v-if="!cardExpand" class="card__expand__switcher" @click="cardExpand = !cardExpand">Show
                            <q-icon name="expand_more" color="info"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TicketGame from "../ticket-game";

    export default {
        components: {TicketGame},
        data() {
            return {
                cardExpand: false,
                game: false,
                banner:true
            }
        }
    }
</script>

<style scoped>
    .text-white {
        font-size: 1rem;
        font-weight: bold;
    }

    .text-highlight {
        font-size: 3rem;
        font-weight: bold;
        color: var(--q-color-warning)
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
    }

    .text-clock {
        font-size: 1.5rem;
        color: var(--q-color-warning);
    }

    .buy {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        background-position: center -2rem;
        background-repeat: no-repeat;
    }

    .buy__item {
        padding: 15px;
        display: flex;
        justify-content: center;
    }

    .buy__item button {
        background-color: var(--q-color-primary);
        border: none;
        padding: 10px 80px;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;
        z-index: 10;
        cursor: pointer;
    }

    .buy__item button:hover {
        opacity: .8;
    }

    .ticket {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 20px;
        border-radius: 10px;
    }

    .ticket > .p1 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 20%;
        background-color: var(--q-color-warning);
        border-radius: 10px 0 0 10px;
    }

    .ticket > .p2 {
        position: absolute;
        top: 0;
        left: 20%;
        right: 70%;
        bottom: 0;
        background: radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 9px, var(--q-color-warning) 10px),
        radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 9px, var(--q-color-warning) 10px),
        radial-gradient(circle at 0 0, rgba(204, 0, 0, 0) 9px, var(--q-color-warning) 10px),
        radial-gradient(circle at 100% 0, rgba(204, 0, 0, 0) 9px, var(--q-color-warning) 10px);
        background-position: bottom left, bottom right, top right, top left;
        background-size: 50% 50%;
        background-repeat: no-repeat;
        padding: 14px;
    }

    .ticket > .p2 .dot {
        border-right: 3px dotted gray;
        height: 100%;
        margin-left: -1.5px;
        /* z-index: 100; */
    }

    .ticket > .p3 {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 70%;
        background-color: var(--q-color-warning);
        border-radius: 0 10px 10px 0;
    }

    .get {
        display: flex;
        flex-direction: column;
        padding: 100px 0;
        background-color: var(--q-color-cloud);
    }

    .get__item {
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    .card {
        width: 100%;
        max-width: 700px;
    }

    .card__item {
        padding: 25px;
        background-color: #fff;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card__item--header {
        background: #f1f1f1;
    }

    .card__item:first-child {
        border-radius: 10px 10px 0 0;
    }

    .card__item:last-child {
        border-radius: 0 0 10px 10px;
    }

    .card__item .item {
        display: flex;
        padding: 5px 0;
    }

    .card__item .item .item__title {
        font-size: 1.2rem;
        font-weight: bold;
        width: 150px;
    }

    .card__item .item .value {
        font-size: 2rem;
        font-weight: bold;
        color: var(--q-color-primary);
    }

    .card__item .item .sub-value {
        color: #666;
    }

    .card__item .item .buy-buttom {
        padding: 10px 25px;
        border: none;
        background-color: var(--q-color-info);
        color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 2px .5px grey;
        cursor: pointer;
    }

    .card__item .item .buy-buttom:hover {
        opacity: .8;
    }

    .match-items {
        display: flex;
        flex-wrap: wrap;
    }

    .match-items__item {
        padding: 10px;
        margin: 5px;
    }

    .match-items__item .title {
        font-size: 1rem;
        color: var(--q-color-primary);
    }

    .match-items__item .title--alt {
        font-size: 1rem;
        color: var(--q-color-accent);
    }

    .match-items__item .value {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .match-items__item .sub-value {
        font-size: .8rem;
        color: #666;
    }

    .card__expand__switcher {
        font-size: 1rem;
        font-weight: bold;
        color: var(--q-color-info);
        cursor: pointer;
    }
</style>