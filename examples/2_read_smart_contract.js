const {ethers} = require('ethers');
const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);



const ERC20_ABI
=  [
    "function name() view returns (string )",
    "function symbol() view returns (string )",
    "function totalSupply() view returns (uint256 )",
    "function balanceOf(address) view returns (uint )",

]
// abi passed in the object 
const address ='0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract address
const contract = new ethers.Contract(address, ERC20_ABI, provider);
// calling the contracts address the api and provider 
const main = async () => {
  
  const name = await  contract.name() // storing contracts name in name 
  const symbol = await contract.symbol()  // storing contracts symbol in symbol  
  const totalSupply = await contract.totalSupply() // storing contracts total supply in totalSupply
  const Balance = await contract.balanceOf('0x6B175474E89094C44Da98b954EedeAC495271d0F') // storing contracts balance of address in Balance
  console.log("name:", `${name}`)
  console.log("symbol:", `${symbol}`)
    console.log("totalSupply:", `${totalSupply}`)
    // many crypto has 18 0s at decimal place they follow that standards so we move 18 to the left 
    console.log("Balance:", `${ethers.utils.formatEther(Balance)}`)


}
main()