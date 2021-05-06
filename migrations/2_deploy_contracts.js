const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (deployer) => {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  const metaCoinInstance = await deployer.deploy(MetaCoin);

  // DEBUG
  // 1st create transaction
  // 2nd run that transaction from truffle develop
  // 3rd pick that transaction hash and use command truffle debug hash
};
