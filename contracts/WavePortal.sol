// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  // Update smart contract to store waves
  uint256 totalWaves;

  constructor() {
    console.log("To infinity and beyond!");
  }

  function wave() public {
    totalWaves += 1;
    console.log("%s has waved!", msg.sender); // msg.sender is the wallet address of the person calling this function. It's helps to ensure that to call the function, you must have a valid wallet address.
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves!", totalWaves);
    return totalWaves;
  }

}