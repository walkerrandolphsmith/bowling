jest.dontMock('./../src/game');

describe("Game", () => {

	describe("Given a new game", () => {
		let sut = null;
		beforeEach(() => {
			sut = require('./../src/game')();
		});

		it("Starts with a score of zero", () => {
			expect(sut.getScore()).toEqual(0);
		});
	});

	describe("Given a game with all gutter balls", () => {
		let sut = null;
		beforeEach(() => {
			sut = require('./../src/game')();
			for(var i = 0; i < 20; i++){
				sut.roll(0);
			}
		});

		it('when calculating the score, then the score should equal 0', () => {
			expect(sut.getScore()).toEqual(0);
		});
	});
});
