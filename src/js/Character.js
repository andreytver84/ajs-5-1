const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type, attack, defence) {
    if (name instanceof String && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть строкой больше 2 символов и меньше 10');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('тип должен соответствовать одному из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.health = 100,
    this.level = 1,
    this.attack = attack,
    this.defence = defence;
  }
}
