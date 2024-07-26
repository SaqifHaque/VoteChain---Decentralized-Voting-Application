const VoteContract = artifacts.require("VoteContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("VoteContract", function (/* accounts */) {
  it("should assert true", async function () {
    await VoteContract.deployed();
    return assert.isTrue(true);
  });
});
