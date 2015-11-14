export default function() {
	var rolls = [];
	return {
		getScore: function() { return rolls.reduce((score, roll) => { return score + roll}, 0)},
		roll: function(pins) { rolls.push(pins); }
	}
}
