const hre = require("hardhat");
require("dotenv").config();

async function main() {

  const [deployer] = await  ethers.getSigners();

  console.log("Deploying contracts with th account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
/**
 * deployImplementation
 */
  // const Implementation = await ethers.getContractFactory("Implementation");
  // const implementation = await Implementation.deploy();
  // console.log("implementation address:", implementation.address);

/**
 *deployProxy1967 
 */
  // const Proxy = await ethers.getContractFactory("MyProxyBaseContract");
  // const proxy = await Proxy.deploy(process.env.IMPLEMENTATION,"0x");
  // console.log("Proxy address:", proxy.address);

/**
 * Logic implement to proxy
 */
  //const implementation = Implementation.attach(process.env.PROXY1967);
  
/**
  *deploytoken
  */
  // const Token = await ethers.getContractFactory("Token");
  // const token = await Token.deploy(process.env.PROXY1967, "Thang","Than");
  // console.log("Token address:", token.address);

/**
 * deployHandler
 */
  // const Handler = await ethers.getContractFactory("AirdropHandler");
  // const handler = await Handler.deploy();
  // console.log("Handler address:", handler.address);

/**
  *set Airdrophandler
  */
  // const setAirdrophandler = await implementation.setAirdropHandler(process.env.HANDLER);
  // await setAirdrophandler.wait();

/**
  *set WHITELIST
  */
  // const setWhitelist = await implementation.setWhitelist(process.env.WHITELIST);
  // await setWhitelist.wait();

/**
  *AIRDROP
  */
  // const airdrop = await implementation.Airdrop([process.env.RECEIVER_ADDRESS],2001);
  // await airdrop.wait();

  /**
  *DEPLOY IMPLE_V1
  */
  // const ImplementationV1  = await ethers.getContractFactory("ImplementationV1");
  // const implementationV1 = await ImplementationV1.deploy();
  // console.log("ImplementationV1 address:", implementationV1.address);

  /**
  *UPDATE IMPLE_V1
  */
  // const ImplementationV1 = await ethers.getContractFactory("MyProxyBaseContract");
  // const implementationV1 = ImplementationV1.attach(process.env.PROXY1967);
  // const setImplementation = await implementationV1.upgrade(process.env.IMPLEMENTATION_V1);
  // console.log("SetImplementation address:", setImplementation.address);
  // await implementationV1.wait();

  /**
  *deploy SwapHandler
  */
  // const SwapHandler = await ethers.getContractFactory("SwapHandler");
  // const swapHandler = await SwapHandler.deploy();
  // console.log("SwapHandler address:", swapHandler.address);

   /**
  *set Swap
  */
  // const setSwapHandler = await implementationV1.setswapHandler(process.env.SWAPHANDLER);
  // await setSwapHandler.wait();

   /**
  *set Rate
  */
  // const setRate = await implementationV1.setRate(process.env.RATE);
  // await setRate.wait();

   /**
  *set Receiver
  */
  // const setReceiver = await implementationV1.setReceiver(process.env.RECEIVER);
  // await setReceiver.wait();

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});