<template>
  <div>
    <q-card class="bg-secondary" flat>
      <q-card-section>
          <div class="field">
              <div class="field__item" style="width: auto; min-width: 35%;">
                  <q-avatar rounded><img src="https://res.cloudinary.com/dnz2bkszg/image/fetch/f_auto/https://raw.githubusercontent.com/sushiswap/icons/master/token/1inch.jpg"></q-avatar>
                  <div style="margin: 5px 10px; color: #bfbfbf">
                      <div>Swap Form</div>
                      <div class="">1INCH <q-icon name="expand_more" /></div>
                  </div>
              </div>
              <div class="field__item">
                  <q-input standout color="secondary" style="width: 100%" value="0.0" />
              </div>
          </div>
      </q-card-section>
    </q-card>
    <q-btn color="secondary" unelevated round icon="import_export" size="lg" class="sync-btn" />
    <q-card class="bg-secondary" flat>
      <q-card-section>
          <div class="field">
              <div class="field__item" style="width: auto; min-width: 35%;">
                  <q-avatar rounded><img :src="coin"></q-avatar>
                  <div style="margin: 5px 10px; color: #bfbfbf">
                      <div>Swap to (est)</div>
                      <div class=""><q-btn rounded label="select a token" size="sm" outline unelevated /></div>
                  </div>
              </div>
              <div class="field__item">
                  <q-input standout color="secondary" style="width: 100%" value="0.0" />
              </div>
          </div>
      </q-card-section>
    </q-card>
    <q-card flat class="q-mt-lg">
          <q-btn label="connent to a wallet" unelevated style="width: 100%; background-color: #0993ec50" size="lg" />
    </q-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            coin: require('@/assets/coin.svg')
        }
    }
};
</script>

<style scoped>
.sync-btn {
  margin: -10px 0 -10px 10px;
  border: 3px solid var(--q-color-dark);
  z-index: 10;
}

.field{
    display: flex;
}
.field__item{
    width: 100%;
    display: flex;
}
</style>