import _ from 'lodash';

export default function() {
	var rolls = [];

	function isFrameClosed(i){ return rolls[i] && rolls[i+1]; }

	function frameScore(i){ return rolls[i] + rolls[i+1]; }

	function isSpare(i){ return rolls[i] + rolls[i+1] === 10; }

	function spareBonus(i){ return rolls[i+2]; }

	function isStrike(i){ return rolls[i] === 10; }

	function strikeBonus(i){ return rolls[i+2] + rolls[i+3]; }

	return {
		getScore: function() {
			let score = 0;
			let frame = 0;
			_.times(10, () => {
				if(isSpare(frame))
					score += 10 + spareBonus(frame);
				else if(isStrike(frame))
					score += 10 + strikeBonus(frame);
				else if(isFrameClosed(frame))
					score += frameScore(frame);
				frame += 2;
			});
			return score;
		},
		roll: function(pins) { rolls.push(pins); if(pins === 10) rolls.push(true); }
	}
}
