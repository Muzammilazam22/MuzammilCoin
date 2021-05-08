pragma solidity >=0.4.25 <0.7.0;
// SPDX-License-Identifier: MIT
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MuzammilCoin.sol";

contract TestMuzammilCoin {
    function testInitialBalanceUsingDeployedContract() public {
        MuzammilCoin muzammil = MuzammilCoin(DeployedAddresses.MuzammilCoin());

        uint256 expected = 10000;

        Assert.equal(
            muzammil.getBalance(tx.origin),
            expected,
            "Owner should have 10000 MuzammilCoin initially"
        );
    }

    function testInitialBalanceWithNewMuzammilCoin() public {
        MuzammilCoin muzammil = new MuzammilCoin();

        uint256 expected = 10000;

        Assert.equal(
            muzammil.getBalance(tx.origin),
            expected,
            "Owner should have 10000 MuzammilCoin initially"
        );
    }
}
