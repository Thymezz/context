class PartyPlanner {
	constructor() {
	  this.guestList = [];
	}

	addToGuestList(name) {
	  this.guestList.push(name);
	}

	throwParty() {
	  if (this.guestList.length === 0) {
		return "Gotta add people to the guest list";
	  } else {
		const guestNames = this.guestList.join(" and ");
		return `Welcome to the party ${guestNames}`;
	  }
	}
  }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
