const { ethers } = require("ethers");
// look at blockchain and inspect from blocks themselves and transactions
const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
// node provider 





const main = async () => {
    // get the blocknumber
    const block = await provider.getBlockNumber(15149360)
    // get the block by blocknumber
    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)
// all the transactions in the block 
    const { transactions } = await provider.getBlockWithTransactions(block)
// destructure the transactions in the block
console.log(`\nLogging first 10 transaction in block:\n`)
    for (let i = 0; i < 10; i++) {
       transactions[i]
        const timetaken = i + 1
        console.log('The time taken ' + timetaken + ' seconds')
       
        console.log(transactions[i])
      }
      
     
    
    
}

main()