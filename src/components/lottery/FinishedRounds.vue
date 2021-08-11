<template>
  <div class="root">
      <div class="finish">
        <div class="finish__item">
          <div class="title">Lotto Results</div>
        </div>
        <div class="finish__item">
          <div class="btn-group">
            <button :class="tab == 'your history' ? 'btn btn--active':'btn'" @click="tab = 'your history'">Your Ticket History</button>
            <button :class="tab == 'all history' ? 'btn btn--active':'btn'" @click="tab = 'all history'">All History</button>
          </div>
        </div>
        <div class="finish__item">
          <div class="card" v-if="tab == 'your history'">
            <div class="card__item card__item--header">
              <div style="font-size: 1.2rem; font-weight: bold;">Daily Lottos</div>
            </div>
            <div class="card__item" style="padding: 70px;">
              <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                <div style="padding: 10px">Connect wallet to check your tickets</div>
                <div style="padding: 10px">
                  <button class="button">Unlock Wallet</button>
                </div>
              </div>
            </div>
            <div class="card__item" style="border-top: 1px solid #ddd; justify-content: center;">
              <div style="font-size: .7rem;"></div>
            </div>
          </div>
          <div class="card" v-if="tab == 'all history'">
              <div class="card__item card__item--header">
                <div style="font-size: 1.2rem; font-weight: bold;">
                  Bloq Ball Lotto  <span style="padding: 5px 15px; border-radius: 20px; background-color: #99999950">47</span>
                  <div style="font-size: .8rem; color: #999; margin: 5px 0;">Drawn Jul 26, 2021, 12:00 PM</div>
                </div>
                <div>
                  <q-btn round dense flat class="q-mx-sm" icon="arrow_back" />
                  <q-btn round dense flat class="q-mx-sm" icon="arrow_forward" />
                  <q-btn round dense flat class="q-mx-sm" icon="keyboard_tab" />
                </div>
              </div>
            <div class="card__item">
              <div>
                <div style="font-size: 1.2rem; font-weight: bold;">Winning Balls</div>
              </div>
              <div class="number">
                <div class="number__item" style="background-color: #b434b9;">5</div>
                <div class="number__item" style="background-color: #6734b9;">9</div>
                <div class="number__item" style="background-color: #347db9;">2</div>
                <div class="number__item" style="background-color: #34b4b9;">0</div>
                <div class="number__item" style="background-color: #34b99c;">8</div>
                <div class="number__item" style="background-color: #b9a534;">7</div>
              </div>
            </div>
            <div v-show="cardExpand" class="card__item" style="border-top: 1px solid #ddd; align-items: flex-start;">
                <div style="font-size: 1.2rem; font-weight: bold; width: 200px;">
                  <div style="">Winning Pool</div>
                  <div style="font-size: 2rem; color: var(--q-color-primary);">~$262,048</div>
                  <div style="font-size: .8rem;">17,608 BQB</div>
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
            <div v-show="cardExpand" class="card__item">
                <div style="width: 200px;">
                  <div style="font-size: 1rem;">Total Players Today: <span> 2458</span></div>
                </div>
                
            </div>
            <div class="card__item" style="justify-content: center;">
              <div v-if="cardExpand" class="card__expand__switcher" @click="cardExpand = !cardExpand">Hide <q-icon name="expand_less" color="info"/></div>
              <div v-if="!cardExpand" class="card__expand__switcher" @click="cardExpand = !cardExpand">Show <q-icon name="expand_more" color="info"/></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'your history',
      cardExpand: false
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 2rem;
  font-weight: bold;
}

.button{
  padding: 10px 25px;
  border: none;
  background-color: var(--q-color-info);
  color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px .5px black;
  cursor: pointer;
}
.finish{
  display: flex;
  flex-direction: column;
  padding: 100px 0;
}
.finish__item{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
}

.btn-group{
  background-color: var(--q-color-secondary);
  border-radius: 15px;
  /* padding: 3px; */
}
.btn-group .btn{
  width: 150px;
  /* margin: 5px; */
  border: none;
  padding: 5px;
  font-size: 1rem;
  border-radius: 15px;
  background: transparent;
  color: #fff;
  cursor: pointer;
}
.btn-group .btn--active{
  background: var(--q-color-info);
  color: var(--q-color-secondary);
}

.card{
  width: 100%;
  max-width: 700px;
}
.card__item{
  padding: 25px;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__item--header{
  background: #f1f1f1;
}
.card__item:first-child{
  border-radius: 10px 10px 0 0;
}
.card__item:last-child{
  border-radius: 0 0 10px 10px;
}

.card__item .item{
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

.number{
  display: flex;
}
.number__item{
  color: #f1f1f1;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  border-radius: 50%;
  font-size: 2rem;
}

.card__expand__switcher{
  font-size: 1rem;
  font-weight: bold;
  color: var(--q-color-info);
  cursor: pointer;
}

.match-items{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.match-items__item{
  padding: 10px;
  margin: 5px;
}
.match-items__item .title{
  font-size: 1rem;
  color: var(--q-color-primary);
}
.match-items__item .title--alt{
  font-size: 1rem;
  color: var(--q-color-accent);
}
.match-items__item .value{
  font-size: 1.2rem;
  font-weight: bold;
}
.match-items__item .sub-value{
  font-size: .8rem;
  color: #666;
}

</style>