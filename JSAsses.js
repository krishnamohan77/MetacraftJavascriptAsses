let NFTs = [];

function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    NFTs.push(nft);
    console.log("Minted: " + name);
    console.log("\n");
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        let nft = NFTs[i];
        console.log(`Name: ${nft.name}, \nEye Color: ${nft.eyeColor}, \nShirt Type: ${nft.shirtType}, \nBling: ${nft.bling}\n`);
    }
}

function TotalSupply() {
    console.log("Total NFTs Minted: " + NFTs.length);
}

mintNFT("Krishna", "Black", "Jacket", "Silver Ring");
listNFTs();
TotalSupply();
