jest.dontMock('./../src/game');

describe("Game", () => {
	let sut;
	beforeEach(() => {
		sut = require('./../src/game')();
	});

	describe("Given a new game", () => {
		it("Starts with a score of zero", () => {
			expect(sut.getScore()).toEqual(0);
		});
	});

	describe("Given a game with all gutter balls", () => {
		beforeEach(() => {
			for(var i = 0; i < 20; i++){
				sut.roll(0);
			}
		});

		it('when calculating the score, then the score should equal 0', () => {
			expect(sut.getScore()).toEqual(0);
		});
	});

	describe("Given a game with a 1's rolled", () => {
		beforeEach(() => {
			for(var i =0; i < 20; i++){
				sut.roll(1)
			}
		});

		it('when calculating the score, then the score should equal 20', function(){
				expect(sut.getScore()).toEqual(20);
		});
	});
});
