const inquirer = require("inquirer")
const fs = require('fs')
// const generateCharacter = require('./utils/generateCharacters')

const createCharacter = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your characters name?',
    },
    {
      type: 'list',
      name: 'race',
      message: 'What race would you like to be?',
      choices: ['Human', 'Elf', 'Dwarf', 'Gnome', 'Blood Elf'],
    },
    {
      type: 'list',
      name: 'sex',
      message: 'Are you male or female?',
      choices: ['Male', 'Female'],
    },
    {
      type: 'list',
      name: 'class',
      message: 'What class do you want to be?',
      choices: ['Warrior', 'Archer', 'Mage'],
    }
  ])
  .then((answers) => {
    // console.log(answers)
    const user = answers.class
    if (user === "Warrior") {
    class Character {
      constructor(name, sex, race) {
        this.name = name
        this.race = race
        this.sex = sex
      }
    }
      class Warrior extends Character {
        constructor(name, race, sex, weapon, stat, hitpoints) {
          super(name, race, sex)
          this.weapon = 'Two-Handed Sword'
          this.stat = 'Strength'
          this.hitpoints = '120 HP'
        }
      }
      const warrior1 = new Warrior(`${answers.name}`, `${answers.race}`, `${answers.sex}`, this.weapon, this.stat, this.hitpoints)
      console.log(warrior1)

      fs.appendFile('rpg.txt', 
      `\n Name: ${warrior1.name}
       Race: ${warrior1.race}
       Sex: ${warrior1.sex}
       Weapon: ${warrior1.weapon}
       Main Stat: ${warrior1.stat}
       Hitpoints: ${warrior1.hitpoints} `, err => {
        if (err) { console.log(err) }
      })

    } else if (user === "Archer") {
      class Character {
        constructor(name, sex, race) {
          this.name = name
          this.race = race
          this.sex = sex
        }
      }
        class Archer extends Character {
          constructor(name, race, sex, weapon, stat, hitpoints) {
            super(name, race, sex)
            this.weapon = 'Bow and Daggers'
            this.stat = 'Dexterity'
            this.hitpoints = '100 HP'
          }
        }
        const archer1 = new Archer(`${answers.name}`, `${answers.race}`, `${answers.sex}`, this.weapon, this.stat, this.hitpoints)
        console.log(archer1)

      fs.appendFile('rpg.txt',
        `\n Name: ${archer1.name}
       Race: ${archer1.race}
       Sex: ${archer1.sex}
       Weapon: ${archer1.weapon}
       Main Stat: ${archer1.stat}
       Hitpoints: ${archer1.hitpoints} `, err => {
        if (err) { console.log(err) }
      })
      
    } else if (user === "Mage") {
      class Character {
        constructor(name, sex, race) {
          this.name = name
          this.race = race
          this.sex = sex
        }
      }
      class Mage extends Character {
        constructor(name, race, sex, weapon, stat, hitpoints) {
          super(name, race, sex)
          this.weapon = 'Staff'
          this.stat = 'Intelligence'
          this.hitpoints = '80 HP'
        }
      }
        const mage1 = new Mage(`${answers.name}`, `${answers.race}`, `${answers.sex}`, this.weapon, this.stat, this.hitpoints)
        console.log(mage1)

      fs.appendFile('rpg.txt',
        `\n Name: ${mage1.name}
       Race: ${mage1.race}
       Sex: ${mage1.sex}
       Weapon: ${mage1.weapon}
       Main Stat: ${mage1.stat}
       Hitpoints: ${mage1.hitpoints} `, err => {
      if (err) { console.log(err) }
      })
    }
  })
.catch ((error) => {
  if (error.isTtyError) {
  }
  });
}
createCharacter()
