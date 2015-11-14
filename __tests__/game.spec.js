jest.dontMock('./../src/game');
jest.dontMock('lodash');

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

	describe("Given a game with alternating 2 and 3 rolls", () => {
		beforeEach(() => {
			for(var i =0; i < 10; i++){
				sut.roll(2);
				sut.roll(3);
			}
		});

		it('when calculating the score, then the score should equal 50', function(){
				expect(sut.getScore()).toEqual(50);
		});
	});

	describe("Given a game with one roll", () => {
		beforeEach(() => {
			sut.roll(2);
		});

		it('when calculating the score, then the score should equal 0', function(){
				expect(sut.getScore()).toEqual(0);
		});
	});

	describe("Given a game with a spare", () => {
		beforeEach(() => {
			sut.roll(3);
			sut.roll(7);
			sut.roll(4);
			sut.roll(2);
		});

		it('when calculating the score, then the score should include the bonus', function(){
				expect(sut.getScore()).toEqual(20);
		});
	});
});
