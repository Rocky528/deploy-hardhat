//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.6;

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "hardhat/console.sol";

contract Greeter is Initializable {
    string private _greeting;

    function initialize(string memory greeting) public initializer {
        console.log("Deploying a Greeter with greeting:", greeting);
        _greeting = greeting;
    }

    function greet() public view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string memory greeting) public {
        console.log("Changing greeting from '%s' to '%s'", _greeting, greeting);
        _greeting = greeting;
    }
}
