/* eslint-disable vue/no-unused-vars */
<template>
    <div>
        <header>
            <div class="container">
                <!--        <header-component />-->
                <jambotron/>
            </div>
        </header>
        <main>
            <div class="container-fluid">
                <div class="content">
                    <div class="content__item q-px-sm">
                        <p class="text-title text-center" style="max-width: 786px">It's time to experience the world's
                            favorite lotto game in a decentralised, fair, and transparent way!
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="q-mx-sm-xl q-mx-lg">
                    <VueSlickCarousel v-bind="settings">
                        <div>
                            <div class="card">
                                <div class="card__item">
                                    <div class="logo"><img :src="require(`@/assets/1.png`)" alt=""></div>
                                </div>
                                <div class="card__item card__item--fill">
                                    <div class="card__title">Daily Lottos</div>
                                    <div class="card__subtitle">Play your luck every day from just 21 balls. Pick
                                        your
                                        six lucky numbers to try your luck!
                                    </div>
                                    <div class="card__action">
                                        <a href="#">Buy Tickets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="card__item">
                                    <div class="logo"><img :src="require(`@/assets/2.png`)" alt=""></div>
                                </div>
                                <div class="card__item card__item--fill">
                                    <div class="card__title ellipsis">Easy to Play</div>
                                    <div class="card__subtitle">Simply swap FTM to get BQB and start playing. It's
                                        just
                                        easy as 1, 2, 3 go! Let's Play!
                                    </div>
                                    <div class="card__action">
                                        <a href="#">Swap BQB</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="card__item">
                                    <div class="logo"><img :src="require(`@/assets/3.png`)" alt=""></div>
                                </div>
                                <div class="card__item card__item--fill">
                                    <div class="card__title ellipsis">High APR Farm</div>
                                    <div class="card__subtitle">Provide liquidity to FTM - BQB pool to start earning
                                        BQB
                                        from BloqBall's high APR farm.
                                    </div>
                                    <div class="card__action">
                                        <a href="#">Add Liquidity</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="card__item">
                                    <div class="logo"><img :src="require(`@/assets/4.png`)" alt=""></div>
                                </div>
                                <div class="card__item card__item--fill">
                                    <div class="card__title ellipsis">Stake to earn FTM</div>
                                    <div class="card__subtitle">Just stake BQB to start earning FTM and BQB - one
                                        pool
                                        will get you twice the rewards.
                                    </div>
                                    <div class="card__action">
                                        <a href="#">Start Staking</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <div class="card__item">
                                    <div class="logo"><img :src="require(`@/assets/5.png`)" alt=""></div>
                                </div>
                                <div class="card__item card__item--fill">
                                    <div class="card__title ellipsis">Fair and Secure</div>
                                    <div class="card__subtitle">We use ChainLink random numbers and ERC 1021 for
                                        tickets
                                        to enable fair games.
                                    </div>
                                    <div class="card__action">
                                        <a href="#">Read FAQ</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </VueSlickCarousel>
                </div>
            </div>
            <div class="container-fluid">
                <div class="content">
                    <div class="content__item q-px-sm">
                        <p class="text-title text-center" style="max-width: 786px">
                            Meet our awesome community, that's
                            growing every day!</p>
                    </div>
                    <div class="content__item">
                        <div class="cards2">
                            <div class="card2">
                                <div class="card2__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/lp.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card2__item">
                                    <div class="value">100.2k</div>
                                    <div class="subtitle">FTM-BQB Liquidity</div>
                                </div>
                            </div>
                            <div class="card2">
                                <div class="card2__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/bqbrw.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card2__item">
                                    <div class="value">141.5k</div>
                                    <div class="subtitle">BQB Rewarded</div>
                                </div>
                            </div>
                            <div class="card2">
                                <div class="card2__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/tusr.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card2__item">
                                    <div class="value">25k+</div>
                                    <div class="subtitle">Total Members</div>
                                </div>
                            </div>
                            <div class="card2">
                                <div class="card2__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/twlt.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card2__item">
                                    <div class="value">15k+</div>
                                    <div class="subtitle">BQB Holders</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="content">
                    <div class="content__item">
                        <p class="text-title text-center" style="max-width: 786px">Wondering what projects are trending
                            on Fantom? Meet our awesome friends!</p>
                    </div>
                    <div class="content__item">
                        <div class="cards3">
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/nips.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Nips Labs</div>
                                </div>
                            </div>
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/spirit.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Spirit Swap</div>
                                </div>
                            </div>
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/tomb.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Tomb Finance</div>
                                </div>
                            </div>
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/casper.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Casper DeFi</div>
                                </div>
                            </div>
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/stake.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Steak Stake</div>
                                </div>
                            </div>
                            <div class="card3">
                                <div class="card3__item">
                                    <div class="logo">
                                        <img :src="require(`@/assets/mlnl.png`)" alt="">
                                    </div>
                                </div>
                                <div class="card3__item">
                                    <div class="subtitle">Millenial Finance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer-component/>
    </div>
</template>

<script>
    // import Header from "@/components/home/Header.vue";
    import Jambotron from "@/components/home/Jambotron.vue";
    import Footer from "@/components/home/Footer.vue";
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        components: {
            Jambotron,
            VueSlickCarousel,
            FooterComponent: Footer,
        },
        data() {
            return {
                settings: {
                    "dots": false,
                    "arrows": true,
                    "infinite": false,
                    "centerMode": false,
                    "centerPadding": "10px",
                    "slidesToShow": 1,
                    "slidesToScroll":1,
                    "variableWidth": true
                }
            }
        }
    };
</script>

<style scoped>
    header {
        /* background-image: url("https://raw.githubusercontent.com/sushiswap/sushi-content/master/images/neon-street.jpg"); */
        background-position: center -5rem;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 700px;
    }

    .text-title {
        font-size: 2.5rem;
        font-weight: bold;
    }

    .text-subtitle {
        font-size: 1.125rem;
    }

    .content {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content__item {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .card {
        padding: 10px;
        margin: 5px;
        justify-content: center;
        width: 300px;
        cursor: pointer;
    }

    .card__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card__item--fill {
        background: var(--q-color-secondary);
        padding: 32px;
        padding-top: 72px;
        border-radius: 5px;
        transform: translateY(-60px);
    }

    .card__item > .logo {
        z-index: 100;
        width: 120px;
        height: 120px;
        box-shadow: 0 0 5px 1px #000000c5;
        /* background: var(--q-color-secondary); */
        /* background-image: linear-gradient(
          224.43deg
      , rgb(13, 4, 21) -16.69%, rgb(27, 33, 82) 86.36%); */
        background-image: linear-gradient(224.43deg, var(--q-color-primary), var(--q-color-info));
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__item > .logo img {
        max-width: 80px;
        max-height: 80px;
    }

    .card__item > .card__title {
        font-size: 1rem;
        font-weight: bold;
    }

    .card__item > .card__subtitle {
        font-size: .8rem;
        color: #ffffff50;
        text-align: center;
        margin: 10px 0;
    }

    .card__item > .card__action {
        width: 100%;
    }

    .card__item > .card__action a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        padding: 10px;
        border-radius: 7px;
        margin: 5px;
        text-decoration: none;
        color: #fff;
        border: none;
        box-shadow: 0 0 2px 1px #000000c5;
        cursor: pointer;
        background-image: linear-gradient(224deg, var(--q-color-primary), var(--q-color-info));
    }

    .cards2 {
        display: flex;
        width: 100%;
        max-width: 1140px;
        box-sizing: border-box;
        /* justify-content: center; */
    }

    .card2 {
        display: flex;
        flex-direction: column;
        background: var(--q-color-secondary);
        margin: 10px;
        padding: 32px;
        border-radius: 5px;
        width: 25%;
    }

    .card2__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card2__item > .logo {
    }

    .card2__item > .logo img {
        width: 120px;
        height: 120px;
    }

    .card2__item > .value {
        font-size: 2.5rem;
        font-weight: bold;
    }

    .card2__item > .subtitle {
        font-size: 1rem;
        color: #ffffff50;
        text-align: center;
        margin: 10px 0;
    }

    .cards3 {
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
    }

    .card3 {
        display: flex;
        flex-direction: column;
        margin: 10px;
        padding: 0 32px;
        width: 15%;
    }

    .card3__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card3__item > .logo {
    }

    .card3__item > .logo img {
        max-width: 120px;
    }

    .card3__item > .value {
    }

    .card3__item > .subtitle {
        font-size: 1rem;
        color: #ffffff50;
        text-align: center;
        margin: 10px 0;
    }

    @media (max-width: 850px) {
        .cards2 {
            display: flex;
            flex-wrap: wrap;
        }

        .card2 {
            width: 45%;
            margin: 10px auto;
        }

        .cards3 {
            flex-wrap: wrap;
        }

        .card3 {
            width: 30%;
        }
    }

    @media (max-width: 600px) {
        .text-title {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .card {
            width: 250px;
        }
         .card2__item > .value {
            font-size: 1.5rem;
        }

        .card2 {
            width: 45%;
        }
    }

    @media (max-width: 375px) {
        .card2 {
            width: 250px;
        }

        .card2__item > .value {
            font-size: 1.5rem;
        }
    }

</style>