const ConvertLib = artifacts.require("ConvertLib");
const MuzammilCoin = artifacts.require("MuzammilCoin");

module.exports = async (deployer, networks, addresses) => {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MuzammilCoin);
  const muzammilCoinInstance = await deployer.deploy(MuzammilCoin);

  // bill of roti on tandoor example
  //const txHash = await muzammilCoinInstance.sendCoin(addresses[1], 100);
  //console.log("txHash", txHash.tx);

  // DEBUG
  // 1st create transaction
  // 2nd run that transaction from truffle develop
  // 3rd pick that transaction hash and use command truffle debug hash
};
