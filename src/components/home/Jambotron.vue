<template>
  <div class="jambotron">
    <div class="jambotron__item">
      <img class="logo" :src="logo" />
    </div>
    <div class="jambotron__item">
      <div class="text-title">Time to Win with Bloq Ball</div>
    </div>
    <div class="jambotron__item">
      <div class="text-subtitle">
        Come, Play, Win, Farm, Earn Crypto! Welcome to Bloq Ball, the all new DeFi lotto on the fastest blockchain Fantom! The only DeFi platform that gives staking rewards in FTM.
      </div>
    </div>
    <div class="jambotron__item">
      <button class="button button--active" @click="$router.push('/lotto')">PLAY LOTTO</button>
      <button class="button" @click="$router.push('/swap')">EARN FTM</button>
    </div>
    <div class="jambotron__item jambotron__item--full">
      <div class="cards">
            <div class="card">
                <div class="card__title">110.1k</div>
                <div class="card__value">Total Supply</div>
            </div>
            <div class="card">
                <div class="card__title">110.1k</div>
                <div class="card__value">FTM Rewards</div>
            </div>
            <div class="card">
                <div class="card__title">110.1k</div>
                <div class="card__value">Total Winnings</div>
            </div>
            <div class="card">
                <div class="card__title">110.1k</div>
                <div class="card__value">Total Players</div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            logo: require('@/assets/icon.png')
        }
    }
};
</script>

<style scoped>
.text-title{
    font-size: 2.5rem;
    font-weight: bold;
}
.text-subtitle{
    font-size: 1.125rem;
    text-align: center;
}
.logo{
    width: 200px;
    height: 200px;
}

.button{
    background: var(--q-color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 15px;
    border-radius: 7px;
    margin: 5px;
    width: 160px;
    font-weight: bold;
    color: #fff;
    border: none;
    box-shadow: 0 0 5px .5px var(--q-color-secondary);
    cursor: pointer;
}
.button--active{
    background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
}

.jambotron{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.jambotron__item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    max-width: 600px;
    margin: 20px 0;
}
.jambotron__item--full{
    display: block;
    width: 100%;
    max-width: 100%;
}
.jambotron__item > .cards{
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
}
.jambotron__item > .cards > .card{
    background: var(--q-color-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin: 5px;
    width: 25%;
    border-radius: 5px;
}
.jambotron__item > .cards > .card > .card__title{
    font-size: 2rem;
}
.jambotron__item > .cards > .card > .card__value{
    font-size: .8rem;
    color: var(--q-color-info);
}

@media (max-width: 850px) {
    .jambotron__item > .cards {
        flex-wrap: wrap;
    }
    .jambotron__item > .cards > .card{
        width: 40%;
    }
}
@media (max-width: 600px) {
    .text-title{
        font-size: 1.5rem;
        font-weight: bold;
    }
    .text-subtitle{
        font-size: .9rem;
    }
    .logo{
        width: 120px;
        height: 120px;
    }

    .button{
        width: 100%;
    }
}
</style>