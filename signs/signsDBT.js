const fs = require('fs');
const { ethers } = require("hardhat");
const Web3 = require("web3")
const web3 = new Web3()

async function main() {
    const owner = await ethers.getSigner()
    // let addresses = await ethers.getSigners()
    //user addresses
    let addresses = [
      {address: ""},
      {address: ""},
      {address: ""},
      {address: ""}
    ]
    for (let i = 0; i < addresses.length; i++) {
      const userAddress = addresses[i].address.toLowerCase()
      const message = ['', userAddress] //PresaleDBT address AND user address
      const hashMessage = ethers.utils.solidityKeccak256([ "uint160", "uint160" ], message)
      const aarr = ethers.utils.arrayify(hashMessage);
      const sign = await owner.signMessage(aarr);
      const r = sign.substr(0, 66)
      const s = '0x' + sign.substr(66, 64);
      const v = web3.utils.toDecimal("0x" + sign.substr(130,2));
      const obj = {
        "address": userAddress,
        "v": v.toString(),
        "r": r,
        "s": s
      }
      const signs = fs.readFileSync('/client/src/signatures/signsDBT.json');
      let Signs = JSON.parse(signs);
      Signs.push(obj)
      const newSigns = JSON.stringify(Signs);
      fs.writeFileSync('/client/src/signatures/signsDBT.json', newSigns);
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
