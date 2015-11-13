jest.dontMock('./../src/game');

describe("Game", () => {
	let sut = null;
	beforeEach(() => {
		sut = require('./../src/game')();
		console.log("SUT", sut);
	});

	it("Starts with a score of zero", () => {
		expect(sut.getScore()).toEqual(0);
	});
});
