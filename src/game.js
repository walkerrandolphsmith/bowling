import _ from 'lodash';

export default function() {
	var rolls = [];

	function isFrameClosed(i){ return rolls[i] && rolls[i+1]; }

	function frameScore(i){ return rolls[i] + rolls[i+1]; }

	return {
		getScore: function() {
			let score = 0;
			let frame = 0;
			_.times(10, () => {
				if(isFrameClosed(frame))
					score += frameScore(frame);
				frame += 2;
			});
			return score;
		},
		roll: function(pins) { rolls.push(pins); }
	}
}
