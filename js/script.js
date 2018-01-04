new Vue({

  el: '#app',
  data: {
    gameNotStarted: true,
    playerHP: 100,
    monsterHP: 100,

    playerHpBar: {
      width: '100%',
      backgroundColor: ''
    },
    monsterHpBar: {
      width: '100%',
      backgroundColor: ''
    },

    gameLog: [],
  },
  methods: {
    startGame: function () {
      this.gameNotStarted = !this.gameNotStarted
      this.playerHP = 100
      this.monsterHP = 100
      this.gameLog = []
      this.monsterHpBar.width = "100%"
      this.playerHpBar.width = "100%"
      this.monsterHpBar.backgroundColor = ''
      this.playerHpBar.backgroundColor = ''
    },
    attack: function () {
      this.dealDamage(13, 10)
      this.gameOver()
    },
    spAttack: function () {
      this.dealDamage(15, 10)
      this.gameOver()
    },
    heal: function () {
      this.healSelf(10, 10)
      this.gameOver()
    },
    gameOver: function () {
      if (this.playerHP <= 0) {
        alert("The monster has beat you! Try again!")
        this.gameNotStarted = !this.gameNotStarted
      } else if (this.monsterHP <= 0) {
        alert("You beat the monster! Congratulations!")
        this.gameNotStarted = !this.gameNotStarted
      }
    },
    dealDamage: function (player, monster) {
      var playerDamage = Math.round(Math.random() * player)
      var monsterDamage = Math.round(Math.random() * monster)
      this.playerHP -= monsterDamage
      this.monsterHP -= playerDamage
      this.gameLog.unshift("YOU HIT MONSTER FOR " + playerDamage + " DAMAGE!")
      this.gameLog.unshift("MONSTER HITS YOU FOR " + monsterDamage + " DAMAGE!")
      this.monsterHpBar.width = this.monsterHP + "%"
      if (this.monsterHP <= 30) { this.monsterHpBar.backgroundColor = 'red' }
      this.playerHpBar.width = this.playerHP + "%"
      if (this.playerHP <= 30) { this.playerHpBar.backgroundColor = 'red' }
    },
    healSelf: function (heal, monster) {
      var playerHeal = Math.round(Math.random() * heal)
      var monsterDamage = Math.round(Math.random() * monster)
      var healTotal = playerHeal - monsterDamage
      this.playerHP += playerHeal
      if (this.playerHP > 100) { this.playerHP = 100 }
      this.playerHP -= monsterDamage
      this.gameLog.unshift("YOU HEALED YOURSELF FOR " + playerHeal + " HP!")
      this.gameLog.unshift("MONSTER HITS YOU FOR " + monsterDamage + " DAMAGE!")
      this.playerHpBar.width = this.playerHP + "%"
      if (this.playerHP <= 30) { this.playerHpBar.backgroundColor = 'red' }
    }
  }
})
