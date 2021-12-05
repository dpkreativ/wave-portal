const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners(); // Manual get the wallet address of the contract owner, and that of a random person.
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // This will compile our contract and generate the necessary files we need to work with our contract under the "artifacts" directory.

  const waveContract = await waveContractFactory.deploy(); // This makes Hardhat to create a local Ethereum network for us, only for this contract. It destroys the network after the script is complete so that everytime you run the script, it's on a fresh blockchain. This helps with debugging for errors.

  await waveContract.deployed(); // This keeps us waiting until the contract has been fully deployed on the blockchain

  console.log("Contract deployed to: ", waveContract.address); // This shows us the address of our deployed contract. With this address, we can find our contract among millions of other contracts on the blockchain.

  console.log("Contract deployed by: ", owner.address); // Display the wallet address of the smart contract's owner.

  // Manually call our smart contract functions that we created in WavePortal.sol
  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();

// hre stands for Hardhat Runtime Environment, and you don't need to import it to use.
