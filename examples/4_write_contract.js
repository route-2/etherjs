const { ethers } = require("ethers");
 // transfer tokens from account1 to account2
    // in this case its link 
const INFURA_ID = '01d39543d4884207bdccff4e64f5c7ee'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const account1 = '0x657dD02b4EAE6Bf276747bd3B9E54aB034D9F97f' // Your account address 1
const account2 = '0x065e3DbaFCb2C26A978720f9eB4Bce6aD9D644a1' // Your account address 2

const privateKey1 = '83603c6948cb854c825ccf0e0474d4acb467b7ae5cbfa0ce0067d8fe8e5ab115' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)
// send tokens or request tokens from the contract

// get erc 20 abi
const ERC20_ABI = [
"function balanceOf(address) view returns (uint256)",
"function transfer(address to, uint amount) returns (bool)",]

const address = '0x01be23585060835e02b77ef475b0cc51aa1e0709' // contract address 
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () =>{ 


    //get balance contract account1 
    const balance = await contract.balanceOf(account1)
    console.log(`balance of sender: ${balance}\n`)

    console.log(`\n reading from ${address}`)
// connects the wallet to the provider
    const contractWithWallet = contract.connect(wallet) 
    // transfer tokens from account1 to account2
    // in this case its link 
    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()
    console.log(tx)

    const balanceoFSender = await contract.balanceOf(account1)
    const balanceOfReceiver = await contract.balanceOf(account2)


    console.log(`\n balance of Sender ${balanceoFSender}`)
     console.log(`\n balance of Receiver ${balanceOfReceiver}`)

}

main()