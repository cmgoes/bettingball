<template>
    <q-layout view="hhh lpR fFf"
              class="root">
        <div :style="{ backgroundImage: `url(${require('@/assets/bloqbg-new.jpeg')})` }"
             class="bg-image"></div>
        <q-header bordered class="bg-transparent text-white">
            <q-toolbar style="height: 80px">
                <q-toolbar-title class="q-py-md">
                    <!-- <q-avatar> -->
                    <!-- </q-avatar> -->
                    <div class="header">
                        <div class="header__item">
                            <div class="brand">
                                <img :src="logo" width="180px" @click="$router.push('/')"
                                     class="cursor-pointer"/>
                                <q-btn v-if="isMobile" flat :icon="tigger ? 'close': 'menu'" round
                                       @click="tigger = !tigger"></q-btn>
                            </div>
                        </div>
                    </div>
                </q-toolbar-title>
                <div v-if="isMobile">
                    <q-menu v-model="tigger" :offset="[0, -20]">
                        <div class="flex items-center justify-between q-px-md q-pt-md">
                            <img :src="icon" alt="" width="30">
                            <q-btn flat icon="close" round @click="tigger=false"></q-btn>
                        </div>
                        <q-list style="min-width: 94vw;font-size: 16px">
                            <q-item clickable v-close-popup :to="{name:'home'}"
                                    exact
                                    exact-active-class="text-warning">
                                <q-item-section>Home</q-item-section>
                            </q-item>
                            <q-item clickable exact
                                    exact-active-class="text-warning"
                            >
                                <q-item-section>
                                    Lotto

                                </q-item-section>
                                <q-item-section side>
                                    <q-icon name="arrow_drop_down"></q-icon>
                                </q-item-section>

                                <q-menu>
                                    <q-list style="min-width: 95vw;" class="bg-black">
                                        <q-item clickable v-close-popup to="/lotto">
                                            <q-item-section>Buy Tickets</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup to="/results">
                                            <q-item-section>Check Results</q-item-section>
                                        </q-item>
                                        <!--                                         <q-item clickable v-close-popup @click="goBloqball">-->
                                        <!--                                            <q-item-section>Bloqball</q-item-section>-->
                                        <!--                                        </q-item>-->
                                    </q-list>
                                </q-menu>
                            </q-item>
                            <q-item clickable v-close-popup to="/swap" exact
                                    exact-active-class="text-warning">
                                <q-item-section>Swap</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup to="/farm" exact
                                    exact-active-class="text-warning">
                                <q-item-section>Farm</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup to="/stake" exact
                                    exact-active-class="text-warning">
                                <q-item-section>Stake</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup to="/faq" exact
                                    exact-active-class="text-warning">
                                <q-item-section>FAQ</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </div>

                <div v-else class="header__item">
                    <div class="nav">
                        <q-btn flat label="home" class="text-capitalize" to="/"></q-btn>
                        <q-btn flat label="Lotto" class="text-capitalize nav-btn" icon-right="arrow_drop_down">
                            <q-menu>
                                <q-list style="min-width: 100px">
                                    <q-item clickable v-close-popup to="/lotto">
                                        <q-item-section>Buy Tickets</q-item-section>
                                    </q-item>
                                    <q-item clickable v-close-popup to="/results">
                                        <q-item-section>Check Results</q-item-section>
                                    </q-item>
                                    <!--                                     <q-item clickable v-close-popup @click="goBloqball">-->
                                    <!--                                        <q-item-section>Bloqball</q-item-section>-->
                                    <!--                                    </q-item>-->
                                </q-list>
                            </q-menu>
                        </q-btn>
                        <q-btn flat label="Swap" class="text-capitalize" to="/swap"></q-btn>
                        <q-btn flat label="Farm" class="text-capitalize" to="/farm"></q-btn>
                        <q-btn flat label="Stake" class="text-capitalize" to="/stake"></q-btn>
                        <q-btn flat label="FAQ" class="text-capitalize" to="/faq"></q-btn>
                    </div>
                </div>
                <q-btn v-if="!isMobile" rounded label="Connect wallet" unelevated
                       class="q-mx-md gradient-blue"></q-btn>
                <q-btn v-if="!isMobile" flat icon="help" rounded label="help" outline class="bg-blue-10">
                    <q-menu anchor="bottom end" self="top right"
                            content-style="box-shadow: none; background-color: transparent">
                        <div class="menu">
                            <a class="menu__item" href="https://discord.gg/Gj7JqN2mXZ">
                                <div class="text-white">Discord</div>
                                <div class="content">Join our Discord</div>
                            </a>
                            <a class="menu__item" href="https://t.me/BloqBall">
                                <div class="text-white">Telegram</div>
                                <div class="content">Join our Telegram</div>
                            </a>
                            <a class="menu__item" href="/faq">
                                <div class="text-white">Docs</div>
                                <div class="content">Learn about Bloq Ball</div>
                            </a>
                            <a class="menu__item" href="#">
                                <div class="text-white">Infographics</div>
                                <div class="content">Coming Soon</div>
                            </a>
                            <a class="menu__item" href="#">
                                <div class="text-white">Videos</div>
                                <div class="content">Coming Soon</div>
                            </a>
                        </div>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
    export default {
        data() {
            return {
                tigger: false,
                menuLotto: false,
                logo: require("@/assets/logo.png"),
                icon: require('@/assets/icon.png'),
            };
        },
        computed: {
            isMobile() {
                return this.$q.screen.width < 850;
            },
        },
        methods: {
            goBloqball() {
                let r = this.$router.resolve({
                    name: 'bloqball', // put your route information in
                });
                window.location.assign(r.href)
            }
        }
    };
</script>

<style scoped>
    .bg-image {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 108vh;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: -100;
    }

    .menu {
        width: 300px;
        /* height: 350px; */
        border: 2px solid var(--q-color-secondary);
        border-radius: 10px;
        padding: 20px;
        background: var(--q-color-dark);
        color: #ddd;
    }

    .menu__item {
        padding: 10px;
        display: block;
        border-radius: 10px;
        text-decoration: none;
    }

    .menu__item:hover {
        background-color: var(--q-color-secondary);
    }

    .menu__item .title {
        font-size: 1.2rem;
    }

    .menu__item .content {
        font-size: .8rem;
        color: #999;
    }

    @media (max-width: 850px) {
        .header {
            flex-direction: column;
        }

        .nav {
            flex-direction: column;
        }

        .nav__item {
            padding: 10px;
        }
    }

    .brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gradient-blue {
        background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
    }
</style>