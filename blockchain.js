
//Import
const Block = require("./block");

class Blockchain{

    constructor(){
        // Array m. Genesis-Block [0]
        this.chain = [Block.genesis()];
    }

    addBlock(blockData){
        //index = arr.length - 1
        const lastBlock = this.chain[this.chain.lenght -1];
        const block = Block.mineBlock(lastBlock,blockData);
        this.chain.push(block);

    }

}

module.exports = Blockchain;