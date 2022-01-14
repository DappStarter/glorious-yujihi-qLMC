require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remove concert heavy ensure bottom genre'; 
let testAccounts = [
"0xe19512160c77910ea4cd537ac9c3541e3f22938a9dfc6225a258abf889e7cb21",
"0xf1636d68d09c3f0777484421751410bd7d0598fd1bc85237cf0d790a883f5215",
"0xf65db2684dad3a32d1200ef3cc59d4750d522cc9844e2f5ef2f48e3b84620201",
"0x6750aa5098cb46e3081dbc950dcc7f1ab77daa30108d8f8a432fae1a57f47f20",
"0x08cd4a7f640cf4415a1338e960ac8295071440100568d1fe8ad4588c3a12a77a",
"0x218bee3b89f404e3f2a3c3197179d7fef0f2550bc8dcd27f05a133402de4be0a",
"0xef3d49c717a3b1ddd18bcddb01f82d34d9951a2ff7e2652c947fecd97b23cc87",
"0x73395c22518cbb3366e32aa76132bb9bd01c8207bffe9087b5f78c3ec3be6483",
"0xa86f2c29561d9e2aa0fd050e0680fbf13fd3605c86b4487deef421044b8db304",
"0x3c43fda59b7fde00c75e01d026d7fe6b673ad4a4fac066b8df58cf231139c003"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


