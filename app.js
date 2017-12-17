new Vue ({

  el: '#app',
  data: {
    gameNotStarted: true,
    playerHP: 100,
    monsterHP: 100,

    playerHpBar: {
      width: 80+"%"
    },
    monsterHpBar: {
      width: "80%",
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
      this.monsterHpBar.width = "80%"
      this.playerHpBar.width = "80%"
      this.monsterHpBar.backgroundColor = ''
      this.playerHpBar.backgroundColor = ''
    },
    attack: function () {
      playerDamage = Math.round(Math.random() * 13)
      monsterDamage = Math.round(Math.random() * 10)
      this.playerHP -= monsterDamage
      this.monsterHP -= playerDamage
      this.gameLog.push("YOU HIT MONSTER FOR " + playerDamage + " DAMAGE!")
      this.gameLog.push("MONSTER HITS YOU FOR " + monsterDamage + " DAMAGE!")
      this.monsterHpBar.width = (parseInt(this.monsterHpBar.width) - (0.8 * playerDamage)) + "%"
      if ( this.monsterHP <= 30 ) { this.monsterHpBar.backgroundColor = 'red'}
      this.playerHpBar.width = (parseInt(this.playerHpBar.width) - (0.8 * monsterDamage)) + "%"
      if (this.playerHP <= 30) { this.playerHpBar.backgroundColor = 'red' } 
      this.gameOver()
    },
    specialAttack: function () {
      playerDamage = Math.round(Math.random() * 15)
      monsterDamage = Math.round(Math.random() * 10)
      this.playerHP -= monsterDamage
      this.monsterHP -= playerDamage
      this.gameLog.push("YOU HIT MONSTER FOR " + playerDamage + " DAMAGE!")
      this.gameLog.push("MONSTER HITS YOU FOR " + monsterDamage + " DAMAGE!")
      this.monsterHpBar.width = (parseInt(this.monsterHpBar.width) - (0.8 * playerDamage)) + "%"
      if (this.monsterHP <= 30) { this.monsterHpBar.backgroundColor = 'red' }
      this.playerHpBar.width = (parseInt(this.playerHpBar.width) - (0.8 * monsterDamage)) + "%"
      if (this.playerHP <= 30) { this.playerHpBar.backgroundColor = 'red' }
      this.gameOver()
    },
    heal: function () {
      playerHeal = Math.round(Math.random() * 10)
      monsterDamage = Math.round(Math.random() * 10)
      healTotal = playerHeal - monsterDamage
      this.playerHP += playerHeal
      if ( this.playerHP > 100 ) {  this.playerHP = 100 }
      this.playerHP -= monsterDamage
      this.gameLog.push("YOU HEALED YOURSELF FOR " + playerHeal + " HP!")
      this.gameLog.push("MONSTER HITS YOU FOR " + monsterDamage + " DAMAGE!")
      this.playerHpBar.width = (parseInt(this.playerHpBar.width) + (0.8 * healTotal)) + "%"
      if ( parseInt(this.playerHpBar.width) > 80 ) { this.playerHpBar.width = "80%"}
      if (this.playerHP <= 30) { this.playerHpBar.backgroundColor = 'red' }
      this.gameOver()
    },
    gameOver: function () {
      if ( this.playerHP <= 0) {
        alert("The monster has beat you! Try again!")
        this.gameNotStarted = !this.gameNotStarted
      } else if ( this.monsterHP <= 0 ) {
        alert("You beat the monster! Congratulations!")
        this.gameNotStarted = !this.gameNotStarted
      }
    }
  }
})
