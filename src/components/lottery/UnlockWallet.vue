<template>
  <div class="root">
      <div class="unlock">
        <div class="unlock__item">
          <div class="text-area">Connect wallet to check the results!</div>
        </div>
        <div class="unlock__item">
          <button>Check Your Winnings - Connect Wallet</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.unlock{
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  background-color: #1e1a317a;
}
.unlock__item{
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.unlock__item button{
  padding: 10px 25px;
  border: none;
  background-color: var(--q-color-info);
  color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px .5px black;
  cursor: pointer;
}

.text-area{
  width: 100%;
  max-width: 200px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

</style>