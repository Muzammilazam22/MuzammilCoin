const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (deployer) => {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  const metaCoinInstance = await deployer.deploy(MetaCoin);

  // You can use both . cute choice is yours
  console.log("metaCoinInstance", metaCoinInstance.address);
  console.log("MetaCoin.address", MetaCoin.address);
};
