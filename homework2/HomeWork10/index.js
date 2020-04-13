function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(distance) {
  if (this.maxDistance >= distance) {
    return true;
  } else {
    return false;
  }
};
function Army(defaultUnits) {
  this.units = [];
  if (defaultUnits) this.combineUnits(defaultUnits);
}

Unit.prototype.isReadyToFight = function(health) {
  if (this.maxHealth === 100 && health >= 50) {
    return true;
  } else {
    return false;
  }
};

Unit.prototype.restore = function(health) {
  if (this.health <= this.maxHealth) {
   this.health = this.maxHealth;
   }
  };
    

Unit.prototype.clone = function () {
  return Object.assign({}, this);
};

Army.prototype.isReadyToMove = function(distance) {
  for (let i = 0; i < this.units.length; i++) {
    const unit = this.units[i];
    if (unit.isReadyToMove(distance) === false) {
      return false;
    }
  }
  return true;
};

Army.prototype.isReadyToFight = function(health) {
  for (let i = 0; i < this.units.length; i++) {
    const unit = this.units[i];
    if ( unit.isRedyToFight(health) === false) {
      return false;
    }
  }
return true;
};

Army.prototype.restore =  function(health) {
  if (this.health <= this.maxHealth) {
   this.health = this.maxHealth;
   }
  };

Army.prototype.getReadyToMoveUnits = function(distance) {
  for (let i = 0; i < this.units.length; i++) {
    const unit = this.units[i];
    if ( unit.isRedyToMoveUnits(distance) === false) {
      return false;
    }
  }
return true;
};

Army.prototype.combineUnits = function(defaultUnits) {
  for (let i = 0; i < defaultUnits.lenght; i++) {
   const unit = defaultUnits[i];
   this.units.push(unit);
  }
};
Army.prototype.cloneUnit = function () {
  return Object.assign({}, this);
};

const unut1 = new Unit("1", 100, 100, 50);
const unut2 = new Unit("1", 100, 100, 50);
const unut3 = new Unit ();
const unut4 = new Unit ("new Unit");

const units = [unut1, unut2];
const army = new Army(units);

console.log(unut1.isReadyToMove(50));
console.log(unut2.isReadyToFight(50));
console.log(unut3.restore());
console.log(unut4.clone());

console.log(army);
console.log(army.isReadyToMove(100));
console.log(army.isReadyToFight(100));
console.log(army.restore(100));
console.log(army.cloneUnit());
console.log(army.getReadyToMoveUnits());