const MuzammilCoin = artifacts.require("MuzammilCoin");

contract("MuzammilCoin", (accounts) => {
  it("should put 10000 MuzammilCoin in the first account", async () => {
    const muzammilCoinInstance = await MuzammilCoin.deployed();
    const balance = await muzammilCoinInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it("should call a function that depends on a linked library", async () => {
    const muzammilCoinInstance = await MuzammilCoin.deployed();
    const muzammilCoinBalance = (
      await muzammilCoinInstance.getBalance.call(accounts[0])
    ).toNumber();
    const muzammilCoinEthBalance = (
      await muzammilCoinInstance.getBalanceInEth.call(accounts[0])
    ).toNumber();

    assert.equal(
      muzammilCoinEthBalance,
      2 * muzammilCoinBalance,
      "Library function returned unexpected function, linkage may be broken"
    );
  });
  it("should send coin correctly", async () => {
    const muzammilCoinInstance = await MuzammilCoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (
      await muzammilCoinInstance.getBalance.call(accountOne)
    ).toNumber();
    const accountTwoStartingBalance = (
      await muzammilCoinInstance.getBalance.call(accountTwo)
    ).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await muzammilCoinInstance.sendCoin(accountTwo, amount, {
      from: accountOne,
    });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (
      await muzammilCoinInstance.getBalance.call(accountOne)
    ).toNumber();
    const accountTwoEndingBalance = (
      await muzammilCoinInstance.getBalance.call(accountTwo)
    ).toNumber();

    assert.equal(
      accountOneEndingBalance,
      accountOneStartingBalance - amount,
      "Amount wasn't correctly taken from the sender"
    );
    assert.equal(
      accountTwoEndingBalance,
      accountTwoStartingBalance + amount,
      "Amount wasn't correctly sent to the receiver"
    );
  });
});
