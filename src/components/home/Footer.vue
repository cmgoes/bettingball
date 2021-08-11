<template>
  <footer class="footer__root">
      <div class="container footer">
        <div class="footer__item footer__item--width">
            <div style="display: flex; align-items: center;">
                <img :src="require(`@/assets/icon.png`)" alt="" width="30"> <span style="padding: 5px; font-size: 1rem;">About Bloq Ball</span>
            </div>
            <p style="padding: 10px 0; color: #999;">Welcome to Bloq Ball, the all new DeFi lotto on the fastest blockchain Fantom. The only DeFi platform on Fantom atm that rewards users in FTM along with our native token BQB - The more BQB you stake, the more FTM you will make. </p>
            <div class="social">
                <div class="social__item">
                    <img class="logo" src="" alt="">
                    <img class="logo" src="" alt="">
                    <img class="logo" src="" alt="">
                </div>
            </div>
        </div>
        <div class="footer__item">
            <div class="title">Sitemap</div>
            <a href="/lotto" class="link">Play Lotto</a>
            <a href="/swap" class="link">Swap</a>
            <a href="/farm" class="link">FTM-BQB Farm</a>
            <a href="/stake" class="link">Earn Fantom</a>
        </div>
        <div class="footer__item">
            <div class="title">Get to know us</div>
            <a href="/faq" class="link">FAQ</a>
            <a href="#" class="link">Reddit</a>
            <a href="#" class="link">Blog</a>
        </div>
        <div class="footer__item">
            <div class="title">Help and Support</div>
            <a href="https://twitter.com/BloqBall" class="link">Twitter</a>
            <a href="https://discord.gg/Gj7JqN2mXZ" class="link">Discord</a>
            <a href="https://t.me/BloqBall" class="link">Telegram</a>
        </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer__root{
    background-color: var(--q-color-secondary);
    padding: 80px 0;

}
.footer{
    display: flex;
}
.footer__item{
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.footer__item > .title{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.footer__item > .link{
    color: #999;
    margin: 5px 0;
    text-decoration: none;
}
.footer__item--width{
    width: 150%;
}

@media (max-width: 650px) {
    .footer{
        display: flex;
        flex-wrap: wrap;
    }
}

</style>