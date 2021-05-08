const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (deployer, networks, addresses) => {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  const metaCoinInstance = await deployer.deploy(MetaCoin);

  // bill of roti on tandoor example
  const txHash = await metaCoinInstance.sendCoin(addresses[1], 100);
  console.log("txHash", txHash.tx);

  // DEBUG
  // 1st create transaction
  // 2nd run that transaction from truffle develop
  // 3rd pick that transaction hash and use command truffle debug hash
};
