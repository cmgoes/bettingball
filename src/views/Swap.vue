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
    <div class="root">
      <div class="card">
        <div class="card__item">
          <div class="tabs">
            <div class="tab">
              <button :class=" tab === 'swap' ? 'active': ''" @click="tab = 'swap'">Swap</button>
            </div>
            <div class="tab">
              <button :class=" tab === 'liquidity' ? 'active': ''" @click="tab = 'liquidity'">Liquidity</button>
            </div>
          </div>
          <div class="action">
            <div class="action__item">
              <q-btn label="13.1" flat rounded icon="local_gas_station" color="green" />
              <q-btn round icon="tune" flat>
                <q-menu anchor="bottom end" self="top right" content-style="box-shadow: none; background-color: transparent">
                  <div class="menu">
                    <div class="menu__item"><div style="font-size: 1rem">Transaction Settings</div></div>
                    <div class="menu__item">
                      <div class="title">Slippage tolerance <q-badge color="grey" rounded>?</q-badge></div>
                      <div>
                        <div style="display: inline; margin-right: 10px;">
                        <input type="text" class="input input--border" value="0.50"><span style="margin-left: -20px">%</span>
                        </div>
                        <button>☯</button>
                      </div>
                    </div>
                    <div class="menu__item">
                      <div class="title">Transaction deadline <q-badge color="grey" rounded>?</q-badge></div>
                      <div>
                        <input type="text" class="input" style="width: 100px" value="30"> <span style="padding: 10px;">minites</span>
                      </div>
                    </div>
                    <div class="menu__item">
                      <div class="title">Interface Settings</div>
                      <div class="settings">
                        <div class="setting__item">
                          <div>Toggle Exoert Mode <q-badge color="grey" rounded>?</q-badge></div>
                          <q-toggle v-model="settings.exoert" color="info"/>
                        </div>
                        <div class="setting__item">
                          <div>Disable Multihops <q-badge color="grey" rounded>?</q-badge></div>
                          <q-toggle v-model="settings.disable" color="info"/>
                        </div>
                        <div class="setting__item">
                          <div>MEV Shield by Archer DAO <q-badge color="grey" rounded>?</q-badge></div>
                          <q-toggle v-model="settings.dao" color="info"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </div>
        <div class="card__item">
          <Swap v-if="tab === 'swap'" />
          <Liquidity v-if="tab === 'liquidity'" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Swap from '@/components/currency/Swap.vue';
import Liquidity from '@/components/currency/Liquidity.vue';
export default {
  components: {
    Swap,
    Liquidity,
  },
  data () {
    return {
      tab: 'swap',
      banner:true,
      settings: {
        exoert: false,
        disable: false,
        dao: false
      }
    }
  }
}
</script>

<style scoped>
.root{
  margin: 50px auto;
  max-width: 700px;
  width: 100%;
}

.card{
  background: var(--q-color-cloud);
  border-radius: 10px;
  padding: 15px;
}
.card__item{
  display: flex;
  justify-content: space-between;
}

.card__item:first-child{
  padding-bottom: 15px;
}
/* .card__item:last-child{
  padding-top: 10px;
} */

.tabs{
  display: inline-flex;
  border-radius: 10px;
  padding: 2px;
  background: var(--q-color-secondary)
}
.tab{
  /* display: inline; */
}

.tab > button{
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  margin: 2px;
  width: 90px;
  color: #999;
  border: none;
  cursor: pointer;
}
.tab > .active{
    background-image: linear-gradient(to right, var(--q-color-primary), var(--q-color-info));
    color: #fff;
    font-weight: 600;
}

.action{}
.action__item{}

.menu{
  width: 320px;
  /* height: 350px; */
  border: 2px solid var(--q-color-secondary);
  border-radius: 10px;
  padding: 20px;
  background: var(--q-color-dark);
  color: #ddd;
}
.menu__item{
  padding: 5px 0;
}
.menu__item > .title{
  font-size: .9rem;
  padding: 5px 0;
}
.menu__item .input{
  background-color: var(--q-color-secondary);
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: #ddd;
  font-size: .9rem;
}
.menu__item .input--border{
  border: 1px solid var(--q-color-info);
}
.menu__item:first-child{
  padding-top: 0;
}
.menu__item:last-child{
  padding-bottom: 0;
}

.menu__item button{
  background-color: var(--q-color-secondary);
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 0 10px;
  color: #999;
}

.settings{
  display: flex;
  flex-direction: column;
}
.setting__item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>