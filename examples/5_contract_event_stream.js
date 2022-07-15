const { ethers } = require("ethers");
// look at events w the help of ether js 

const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
// add the events that you want to listen to when you call the queryFilter function
    "event Transfer(address indexed from, address indexed to, uint amount)"
];
// everytime u call smartcontract function it can create an event
// event listeners could be added to the contract

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
// creates the contracts object so u can call it
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    // gets the blocknumber of the 
    const block = await provider.getBlockNumber()
    // you can see all transfer events that took place for dai contract
// queryfilter and pass the event name and the block number you want to start from 
    const transferEvents = await contract.queryFilter('Transfer', block-10, block)
    console.log(transferEvents)
}

main()