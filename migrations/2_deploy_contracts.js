const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (deployer) => {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  await deployer.deploy(MetaCoin);
};
