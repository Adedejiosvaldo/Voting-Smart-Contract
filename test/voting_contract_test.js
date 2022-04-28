const votingContractTest = artifacts.require("votingContractTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("votingContractTest", function (/* accounts */) {
  it("should assert true", async function () {
    await votingContractTest.deployed();
    return assert.isTrue(true);
  });
});
