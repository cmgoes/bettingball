<template>
  <div class="root">
    <div class="container">
      <div style="text-align: center;">
        <div class="title q-my-lg">How to Play the BloqBall Lotto</div>
        <div class="q-my-lg q-mx-lg">If at least three numbers on your tickets match the winning balls, you win!</div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card__item card__item--step">1</div>
          <div class="card__item card__item--title">Get your tickets</div>
          <div class="card__item card__item--des">Price for one ticket is 100 BQB. You can buy any number of tickets!</div>
        </div>
        <div class="card">
          <div class="card__item card__item--step">2</div>
          <div class="card__item card__item--title">Wait for Results</div>
          <div class="card__item card__item--des">Bloq Ball Lotto results are announced at 23:59:59 GMT+4.00 every day!</div>
        </div>
        <div class="card">
          <div class="card__item card__item--step">3</div>
          <div class="card__item card__item--title">Check for matches</div>
          <div class="card__item card__item--des">Once the winning balls are picked, check it with your ticket and see if at least 3 numbers match.</div>
        </div>
      </div>
      <hr class="q-my-xl">

      <div class="des">
        <div class="des__item">
          <div class="title q-my-sm">Bloq Ball Lotto Game Specifications</div>
          <div class="sub-title q-my-sm">You win if at least 3 numbers in your ticket match with the winning balls.</div>
          <p class="q-my-md"></p>
          <div class="sub-title q-my-sm">Prizes and winnings</div>
          <p class="q-my-md"></p>
          <ul>
            <li>First Prize: Whoever matches all six balls wins the first prize. First prize is 50% of the winnings pool.</li>
            <li>Second Prize: Whoever matches any five balls wins the second prize. Second prize is 25% of the winnings pool.</li>
            <li>Third Prize: Whoever matches any four balls wins the third prize. Third prize is 15% of the winnings pool.</li>
            <li>Fourth Prize: Whoever matches any three balls wins the fourth prize. Fourth prize is 10% of the winnings pool.</li>
          </ul>
          <p>If there are no winners in any section, that prize money will be added to the next draw. If more than one winners are there in any section, the prize amount will be shared equally among the winners.</p>
        </div>
        <div class="des__item des__item--small">
        </div>
      </div>
<hr class="q-my-xl">
      <div class="des">
        <div class="des__item">
          <div class="title q-my-sm">Why Bloq Ball Lotto is Unique?</div>
          <p class="q-my-md"></p>
          <div class="sub-title q-my-sm">You get 100% of the winnings pool</div>
          <ul>
            <li>100% of the BQB tokens added to the smart contract goes straight into the winnings pool. No platform fee or developer fee.</li>
          </ul>
          <div class="sub-title q-my-sm">Rollover winnings</div>
          <ul>
            <li>In any game, if there are no winners in any section of the prizes, that amount of BQB rolls over into the next lotto and added to the winnings pool.</li>
          </ul>
          <div class="sub-title q-my-sm">Fair Play - 100%</div>
          <ul>
            <li>BloqBall DeFi lotto uses ChainLink's Random numbers. So there's no foul play, and your tickets are created as an NFT for verification.</li>
          </ul>
        </div>
        <div class="des__item des__item--small">
          <div>
          </div>
        </div>
      </div>
      <hr class="q-my-xl">

      <div class="footer">
        <div class="footer__item">
        </div>
        <div class="footer__item">
          <div>
            <div class="sub-title">Do you want to know more?</div>
            <p>Check our FAQ or join our awesome communities to learn more about Bloq Ball Lotto!</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.root{
  background-color: var(--q-color-secondary);
  padding: 50px 0;
}

.title{
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.sub-title{
  font-size: 1.2rem;
  color: var(--q-color-info);
}
.cards{
  display: flex;
}
.card{
  width: 33%;
  margin: 10px;
}
.card__item{
  color: var(--q-color-info);
  background-color: var(--q-color-dark);
  padding: 10px 20px;
  font-weight: bold;
}
.card__item:first-child{
  border-radius: 10px 10px 0 0;
  padding-top: 20px;
}
.card__item:last-child{
  border-radius: 0 0 10px 10px;
  padding-bottom: 20px;
}
.card__item--step{
  text-align: right;
  font-size: .6rem;
  color: #fff;
}
.card__item--title{
  font-size: 1.2rem;
}
.card__item--des{
  color: #999;
}

.des{
  display: flex;
  margin: 50px 0;
  color: #999;
}
.des__item{
  width: 100%;
  padding: 10px;
}
.des__item--small{
  width: 100%;
  max-width: 350px;
}

.footer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__item{
  padding: 10px;
  max-width: 300px;
}
.footer__item img{
  width: 200px;
}
.footer__item a {
  text-decoration: none;
  font-size: 1rem;
  color: var(--q-color-info);
}
.footer__item a:hover {
  text-decoration: underline;
}



@media (max-width: 650px) {
  .cards{
    display: flex;
    flex-direction: column;
  }
  .card{
    width: 90%;
    margin: 10px auto;
  }
  .des{
    display: flex;
    margin: 50px 0;
    color: #999;
    flex-direction: column;
  }
  .des__item{
    width: 100%;
    padding: 20px;
  }
  .des__item--small{
    width: 100%;
    max-width: 100%;
  }
}

</style>