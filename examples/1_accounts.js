const {ethers} = require('ethers');
const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee'; 
const provider =new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
 // providing the network id to provide ethers 
const address = '0x67790d0eaea043330be5415c0b512d8e0a2ab5c2'
const main = async ()=> { 
const Balance =    await provider.getBalance(address);
console.log(`\neth balance of ${address} is ${ethers.utils.formatEther(Balance)} eth\n`);
 }

main()
// gets the balance of the account
