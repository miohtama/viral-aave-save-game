const { web3tx } = require("@decentral.ee/web3-test-helpers");
const configs = require("./configs");

module.exports = async function (callback) {
    try {
        global.web3 = web3;
        const network = await web3.eth.net.getNetworkType();

        console.log("network: ", network);
        const ViralBank = artifacts.require("ViralBank");
        const config = configs[network];

        const bank = await web3tx(ViralBank.new, "ViralBank.new")(
            config.token.address,
            config.aToken.address,
            config.pap.address);
        console.log("bank address", bank.address);

        callback();
    } catch (err) {
        callback(err);
    }
};
