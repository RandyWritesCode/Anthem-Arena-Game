let GameManager = {
  setGameStart: function (javelinType) {
    this.resetPlayer(javelinType)
    this.setPreFight()
  },
  resetPlayer: function (javelinType) {
    switch (javelinType) {
      case "Ranger":
        console.log(javelinType)
        player = new Javelin('userName', 100, 'Freelancer', javelinType, 50, 150, 100, 75, 125)
        console.log(player.shield)
        break
      case "Storm":
        player = new Javelin('userName', 100, 'Freelancer', javelinType, 75, 75, 200, 50, 75)
        break
      case "Interceptor":
        player = new Javelin('userName', 100, 'Freelancer', javelinType, 50, 100, 200, 100, 200)
        break
      case "Colossus":
        player = new Javelin('userName', 100, 'Freelancer', javelinType, 0, 200, 50, 100, 50)
        break
    }
    let getInterface = document.querySelector('.interface')
    getInterface.innerHTML = `<div class="item"><img src="images/${javelinType.toLowerCase()}.png" alt="${javelinType}" class="img-avetar">
    
    <h3>${javelinType}</h3>
    <p>Name: ${player.name}</p>
    <p>Health: ${player.health}</p>
    <p>Faction: ${player.faction}</p>
    <p>Shield: ${player.shield}</p>
    <p>Armor: ${player.armor}</p>
    <p>Gear: ${player.gear}</p>
    <p>Power: ${player.power}</p>
    <p>Agility: ${player.agility}</p>
    </div>`
  },
  setPreFight: function () {
    let getHeader = document.querySelector('.header')
    let getActions = document.querySelector('.actions')
    let getArena = document.querySelector('.arena')
    getHeader.innerHTML = `<p>Task: Find an enemy!</p>`
    getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>`
    getArena.style.visibility = 'visible'
  },
  setFight: function () {
    let getHeader = document.querySelector('.header')
    let getActions = document.querySelector('.actions')
    let getEnemy = document.querySelector('.enemy')
    //Create enemy
    let enemy00 = new Javelin('CPU', 100, 'Dominion', 'Valkyrie', 50, 50, 175, 25, 50)
    let enemy01 = new Javelin('CPU', 100, 'Outlaw', 'Lancer', 25, 125, 75, 50, 100)
    let enemy02 = new Javelin('CPU', 100, 'Scar', 'Enforcer', 0, 175, 25, 75, 25)
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3))
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00
        break
      case 1:
        enemy = enemy01
        break
      case 2:
        enemy = enemy02
        break
    }//enemy variable not declared
    console.log(enemy)
    getHeader.innerHTML = '<p>Task: Choose your move</p>'
    getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>`
    getEnemy.innerHTML = `<div class="item"><img src="images/${enemy.javelinType.toLowerCase()}.png" alt="${enemy.javelinType}" class="img-avetar">
    
    <h3>${enemy.javelinType}</h3>
    <p>Name: ${enemy.name}</p>
    <p>Faction: ${enemy.faction}</p>
    <p>Shield: ${enemy.shield}</p>
    <p>Armor: ${enemy.armor}</p>
    <p>Gear: ${enemy.gear}</p>
    <p>Power: ${enemy.power}</p>
    <p>Agility: ${enemy.agility}</p>
    </div>`

  }
} 