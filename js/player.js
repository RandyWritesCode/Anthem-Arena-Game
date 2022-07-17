
class Being {
  constructor(name, health) {
    this.name = name
    this.health = health
  }
}

//Factions include Freelancer, Sentinal, Arcanist, Dominion and Outlaw
class Human extends Being {
  constructor(name, health, faction) {
    super(name, health)
    this.faction = faction
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}.  Nice to meet you`)
  }

  showHealth() {
    console.log(`Health: ${this.health}`)
  }
}

const erik = new Human('Erik', 100, 'Freelancer')


class Javelin extends Human {
  constructor(name, health, faction, javelinType, shield, armor, gear, power, agility) {
    super(name, health, faction)
    this.javelinType = javelinType
    this.shield = shield
    this.armor = armor
    this.gear = gear
    this.power = power
    this.agility = agility
  }

  fire() {
    console.log('bang!')
  }

  evade() {
    console.log('whoosh')
  }

  melee() {
    console.log('tink')
  }
}

let PlayerMoves = {
  calcAttack: function () {
    //who attacks first
    let getPlayerSpeed = player.agility
    let getEnemySpeed = enemy.agility
  },
  playerAttack: function () {
    let calcBaseDamage
  }
}