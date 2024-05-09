const { ethers } = require("hardhat");

async function main() {
  const protocolContract = await ethers.getContractFactory("SUCCESS");
  let protocol = await protocolContract.deploy();
  await protocol.deployed();

  console.log(protocol.address);
}

main()
  .then(() => {
    console.log("complete");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
