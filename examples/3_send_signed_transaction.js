const { ethers } = require("ethers");

const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee'
const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${INFURA_ID}`)

const account1 = '0x657dD02b4EAE6Bf276747bd3B9E54aB034D9F97f'
const account2 = '0x065e3DbaFCb2C26A978720f9eB4Bce6aD9D644a1'

const privateKey1 = '83603c6948cb854c825ccf0e0474d4acb467b7ae5cbfa0ce0067d8fe8e5ab115'
// ur giving ur privatekey to do the transaction 
// can be used to build ur own wallet like metamask 
 const wallet = new ethers.Wallet(privateKey1,provider)

const main = async () => {
    //show account1 before transfer
    const sendB4 = await provider.getBalance(account1)
    //show account2 before transfer 
    const RecieveB4 = await provider.getBalance(account2)

    console.log(`\nSender balance before : ${ethers.utils.formatEther(sendB4)}`)
console.log(`\nReciever balance before : ${ethers.utils.formatEther(RecieveB4)}`)
    // sends ether

const tx = await wallet.sendTransaction({
    to: account2, 
    value: ethers.utils.parseEther('0.1') // converts ether to wei sends 0.1 
})
// wait for the transaction to be mined 
await tx.wait()
console.log(tx)
//show account1 after transfer
const sendAfter = await provider.getBalance(account1)
    //show account2 after transfer 
    const RecieveAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after : ${ethers.utils.formatEther(sendAfter)}`)
console.log(`\nReciever balance after : ${ethers.utils.formatEther(RecieveAfter)}`)

   
}

main()