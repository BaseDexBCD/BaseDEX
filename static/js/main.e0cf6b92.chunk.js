(this["webpackJsonp@pancakeswap/interface"] =
  this["webpackJsonp@pancakeswap/interface"] || []).push([
  [2],
  {
    123: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      );
    },
    152: function (e) {
      e.exports = JSON.parse(
        '{"name":"pancakeswap","timestamp":"2023-01-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":1},"tags":{},"logoURI":"/images/coins/wbnb.png","keywords":["pancake","default"],"tokens":[{"name":"Basecoin Dex","symbol":"BCD","address":"0xaCfD2F92444D5C1D7d31171c71091c72c485D7F1","chainId":56,"decimals":18,"logoURI":"https://i.postimg.cc/ydwgBWBG/hh.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"}]}'
      );
    },
    174: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    175: function (e) {
      e.exports = JSON.parse(
        '[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      );
    },
    176: function (e) {
      e.exports = JSON.parse(
        '[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      );
    },
    204: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    205: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    261: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    262: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    263: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]'
      );
    },
    264: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
      );
    },
    353: function (e, n) {},
    476: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(0),
        a = t(1),
        i = t.n(a),
        o = t(108),
        c = t.n(o),
        s = t(5),
        u = t(4),
        l = t(3),
        d = t(34),
        b = t(255),
        p = t.n(b),
        f = function (e, n) {
          return function (t) {
            return p()(t, e, n);
          };
        };

      function j() {
        var e = Object(s.a)(["\n  fill: ", ";\n  ", "\n"]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      var h = u.default.svg(
        j(),
        function (e) {
          var n = e.theme,
            t = e.color;
          return f("colors.".concat(t), t)(n);
        },
        d.space
      );
      h.defaultProps = {
        color: "text",
        width: "20px",
        xmlns: "http://www.w3.org/2000/svg"
      };
      var m = h,
        v = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
                })
              }
            )
          );
        },
        x = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"
                })
              }
            )
          );
        };

      function y() {
        var e = Object(s.a)([
          "\n  color: ",
          ";\n  font-size: ",
          ";\n  font-weight: ",
          ";\n  line-height: 1.5;\n  ",
          "\n"
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      var O = u.default.div(
        y(),
        function (e) {
          var n = e.color,
            t = e.theme;
          return f("colors.".concat(n), n)(t);
        },
        function (e) {
          return e.fontSize || "16px";
        },
        function (e) {
          return e.bold ? 600 : 400;
        },
        d.space
      );
      O.defaultProps = {
        color: "text"
      };
      var g = O,
        C = "info",
        w = "danger",
        k = "success",
        T = "warning";

      function I() {
        var e = Object(s.a)([
          "\n  border-radius: 16px;\n  box-shadow: ",
          ";\n  display: flex;\n\n  ",
          " {\n    flex: 1;\n  }\n"
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }

      function E() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-radius: 0 16px 16px 0;\n  padding: 8px;\n"
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }

      function A() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-radius: 16px 0 0 16px;\n  color: ",
          ";\n  padding: 8px;\n  text-align: center;\n  width: 40px;\n"
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      u.default.div(
        A(),
        function (e) {
          var n = e.theme,
            t = e.variant;
          switch (void 0 === t ? C : t) {
            case w:
              return n.colors.failure;
            case T:
              return n.colors.warning;
            case k:
              return n.colors.success;
            case C:
            default:
              return n.colors.secondary;
          }
        },
        function (e) {
          return e.theme.alert.background;
        }
      );
      var S = u.default.div(E(), function (e) {
          return e.theme.alert.background;
        }),
        N =
          (u.default.div(
            I(),
            function (e) {
              return e.theme.shadows.level1;
            },
            S
          ),
          t(30)),
        R = function () {
          return {
            target: "_blank",
            rel: "noreferrer noopener"
          };
        },
        L = "md",
        U = "primary",
        B = "secondary",
        P = "tertiary",
        M = "text",
        _ = "danger",
        D = "subtle",
        F = "success";

      function z() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  background-color: ",
          ";\n  border: ",
          ";\n  border-radius: 16px;\n  box-shadow: ",
          ";\n  color: ",
          ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ",
          ";\n  height: ",
          ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ",
          ";\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: ",
          ";\n    border-color: ",
          ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ",
          ";\n  }\n\n  &:active {\n    background-color: ",
          ";\n    box-shadow: ",
          ";\n  }\n\n  &:disabled {\n    background-color: ",
          ";\n    border-color: ",
          ";\n    box-shadow: none;\n    color: ",
          ";\n    cursor: not-allowed;\n  }\n  ",
          "\n"
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }

      var q = function (e) {
          return function (n) {
            var t = n.theme,
              r = n.variant,
              a = void 0 === r ? U : r;
            return t.button[a][e];
          };
        },
        V = u.default.button(
          z(),
          q("background"),
          q("border"),
          q("boxShadow"),
          q("color"),
          function (e) {
            return e.fullWidth ? "100%" : "max-content";
          },
          function (e) {
            return "sm" === e.size ? "32px" : "48px";
          },
          function (e) {
            return "sm" === e.size ? "0 16px" : "0 24px";
          },
          q("backgroundHover"),
          q("borderColorHover"),
          function (e) {
            return e.theme.colors.secondary;
          },
          q("backgroundActive"),
          q("boxShadowActive"),
          function (e) {
            return e.theme.colors.backgroundDisabled;
          },
          function (e) {
            return e.theme.colors.backgroundDisabled;
          },
          function (e) {
            return e.theme.colors.textDisabled;
          },
          d.space
        );
      V.defaultProps = {
        fullWidth: !1,
        as: "button"
      };
      var H = V,
        Y = function (e) {
          var n = e.startIcon,
            t = e.endIcon,
            a = e.children,
            o = e.external,
            c = Object(N.a)(e, [
              "startIcon",
              "endIcon",
              "children",
              "external"
            ]),
            s = o ? R() : {};
          return Object(r.jsxs)(
            H,
            Object(l.a)(
              Object(l.a)(Object(l.a)({}, s), c),
              {},
              {
                children: [
                  i.a.isValidElement(n) &&
                    i.a.cloneElement(n, {
                      mr: "0.5rem"
                    }),
                  a,
                  i.a.isValidElement(t) &&
                    i.a.cloneElement(t, {
                      ml: "0.5rem"
                    })
                ]
              }
            )
          );
        };
      Y.defaultProps = {
        variant: U,
        size: L,
        external: !1
      };
      var W = Y;

      function Z() {
        var e = Object(s.a)(["\n  padding: 0;\n  width: ", ";\n"]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      var Q = Object(u.default)(W)(Z(), function (e) {
        return "sm" === e.size ? "32px" : "48px";
      });

      function K() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      var G = u.default.div(K(), function (e) {
          return e.theme.colors.tertiary;
        }),
        J = function (e) {
          var n = e.activeIndex,
            t = void 0 === n ? 0 : n,
            i = e.size,
            o = void 0 === i ? L : i,
            c = e.variant,
            s = void 0 === c ? U : c,
            u = e.onClick,
            l = e.children;
          return Object(r.jsx)(G, {
            children: a.Children.map(l, function (e, n) {
              return Object(a.cloneElement)(e, {
                isActive: t === n,
                onClick: u
                  ? function () {
                      return u(n);
                    }
                  : void 0,
                size: o,
                variant: s
              });
            })
          });
        };

      function X() {
        var e = Object(s.a)(["\n  color: ", ";\n"]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      var $ = Object(u.default)(W)(X(), function (e) {
          var n = e.theme,
            t = e.colorKey;
          return n.colors[t];
        }),
        ee = function (e) {
          var n = e.isActive,
            t = void 0 !== n && n,
            a = e.size,
            i = void 0 === a ? L : a,
            o = e.variant,
            c = void 0 === o ? U : o,
            s = e.as,
            u = Object(N.a)(e, ["isActive", "size", "variant", "as"]);
          return t
            ? Object(r.jsx)(
                W,
                Object(l.a)(
                  {
                    as: s,
                    size: i,
                    variant: c
                  },
                  u
                )
              )
            : Object(r.jsx)(
                $,
                Object(l.a)(
                  {
                    forwardedAs: s,
                    size: i,
                    variant: "tertiary",
                    colorKey: c === U ? "primary" : "textSubtle"
                  },
                  u
                )
              );
        };

      function ne() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border: ",
          ";\n  border-radius: 32px;\n  box-shadow: ",
          ";\n  color: ",
          ";\n  overflow: hidden;\n  position: relative;\n"
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      var te = u.default.div(
        ne(),
        function (e) {
          return e.theme.card.background;
        },
        function (e) {
          return e.theme.card.boxShadow;
        },
        function (e) {
          var n = e.isActive,
            t = e.isSuccess,
            r = e.isWarning,
            a = e.theme;
          return r
            ? a.card.boxShadowWarning
            : t
            ? a.card.boxShadowSuccess
            : n
            ? a.card.boxShadowActive
            : a.card.boxShadow;
        },
        function (e) {
          var n = e.theme,
            t = e.isDisabled;
          return n.colors[t ? "textDisabled" : "text"];
        }
      );
      te.defaultProps = {
        isActive: !1,
        isSuccess: !1,
        isWarning: !1,
        isDisabled: !1
      };
      var re = te,
        ae = function (e) {
          var n = e.ribbon,
            t = e.children,
            a = Object(N.a)(e, ["ribbon", "children"]);
          return Object(r.jsxs)(
            re,
            Object(l.a)(
              Object(l.a)({}, a),
              {},
              {
                children: [n, t]
              }
            )
          );
        };

      function ie() {
        var e = Object(s.a)(["\n  ", "\n"]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      var oe = u.default.div(ie(), d.space);
      oe.defaultProps = {
        p: "24px"
      };
      var ce = oe;

      function se() {
        var e = Object(s.a)(["\n  border-top: 1px solid ", ";\n  ", "\n"]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      var ue = u.default.div(
        se(),
        function (e) {
          return e.theme.colors.borderColor;
        },
        d.space
      );
      ue.defaultProps = {
        p: "24px"
      };

      function le() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
          ';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n'
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      u.default.div(
        le(),
        function (e) {
          var n = e.variantColor,
            t = void 0 === n ? "secondary" : n;
          return e.theme.colors[t];
        },
        function (e) {
          var n = e.variantColor,
            t = void 0 === n ? "secondary" : n;
          return e.theme.colors[t];
        }
      );
      var de = "sm",
        be = "md";

      function pe() {
        var e = Object(s.a)([
          "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
          ";\n  width: ",
          ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",
          ";\n  box-shadow: ",
          ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',
          ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
          ";\n  }\n\n  &:checked {\n    background-color: ",
          ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      var fe = function (e) {
          switch (e.scale) {
            case de:
              return "24px";
            case be:
            default:
              return "32px";
          }
        },
        je = u.default.input.attrs({
          type: "checkbox"
        })(
          pe(),
          fe,
          fe,
          function (e) {
            return e.theme.colors.input;
          },
          function (e) {
            return e.theme.shadows.inset;
          },
          function (e) {
            return e.theme.shadows.focus;
          },
          function (e) {
            return e.theme.shadows.focus;
          },
          function (e) {
            return e.theme.colors.success;
          }
        );
      je.defaultProps = {
        scale: be
      };

      function he() {
        var e = Object(s.a)([
          "\n  position: relative;\n  &:hover ",
          ", &:focus-within ",
          " {\n    display: flex;\n  }\n"
        ]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }

      function me() {
        var e = Object(s.a)([
          "\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background-color: ",
          ";\n  box-shadow: ",
          ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ",
          ";\n  border-radius: ",
          ";\n"
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      var ve = u.default.div(
        me(),
        function (e) {
          return e.theme.nav.background;
        },
        function (e) {
          return e.theme.shadows.level1;
        },
        function (e) {
          return e.theme.zIndices.dropdown;
        },
        function (e) {
          return e.theme.radii.small;
        }
      );
      u.default.div(he(), ve, ve);

      function xe() {
        var e = Object(s.a)(["\n  display: flex;\n  ", "\n  ", "\n"]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      var ye,
        Oe = u.default.div(xe(), d.flexbox, d.space),
        ge = t(12),
        Ce = "md",
        we = "lg",
        ke = "xl",
        Te = "xxl";

      function Ie() {
        var e = Object(s.a)([
          "\n  ",
          "\n  font-weight:600;\n  line-height: 1.1;\n"
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      var Ee =
          ((ye = {}),
          Object(ge.a)(ye, Ce, {
            fontSize: "20px"
          }),
          Object(ge.a)(ye, we, {
            fontSize: "24px"
          }),
          Object(ge.a)(ye, ke, {
            fontSize: "40px"
          }),
          Object(ge.a)(ye, Te, {
            fontSize: "64px"
          }),
          ye),
        Ae = Object(u.default)(g).attrs({
          bold: !0
        })(Ie(), function (e) {
          var n = e.size;
          return Ee[n || Ce];
        });
      Ae.defaultProps = {
        as: "h2"
      };
      var Se = Ae,
        Ne = "sm",
        Re = "md",
        Le = "lg";

      function Ue() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ",
          ";\n  color: ",
          ";\n  display: block;\n  font-size: 16px;\n  height: ",
          ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ",
          ";\n  }\n\n  &:disabled {\n    background-color: ",
          ";\n    box-shadow: none;\n    color: ",
          ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",
          ";\n  }\n"
        ]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      var Be = u.default.input(
        Ue(),
        function (e) {
          return e.theme.colors.input;
        },
        function (e) {
          var n = e.isSuccess,
            t = void 0 !== n && n,
            r = e.isWarning,
            a = void 0 !== r && r,
            i = e.theme;
          return a
            ? i.shadows.warning
            : t
            ? i.shadows.success
            : i.shadows.inset;
        },
        function (e) {
          return e.theme.colors.text;
        },
        function (e) {
          var n = e.scale;
          switch (void 0 === n ? Re : n) {
            case Ne:
              return "32px";
            case Le:
              return "48px";
            case Re:
            default:
              return "40px";
          }
        },
        function (e) {
          return e.theme.colors.textSubtle;
        },
        function (e) {
          return e.theme.colors.backgroundDisabled;
        },
        function (e) {
          return e.theme.colors.textDisabled;
        },
        function (e) {
          return e.theme.shadows.focus;
        }
      );
      Be.defaultProps = {
        scale: Re,
        isSuccess: !1,
        isWarning: !1
      };
      var Pe = Be;

      function Me() {
        var e = Object(s.a)([
          "\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ",
          " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ",
          " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ",
          " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      var _e = u.default.div(
        Me(),
        function (e) {
          return e.theme.mediaQueries.sm;
        },
        function (e) {
          return e.theme.mediaQueries.md;
        },
        function (e) {
          return e.theme.mediaQueries.lg;
        }
      );

      function De() {
        var e = Object(s.a)([
          "\n  & > div {\n    grid-column: span 6;\n    ",
          " {\n      grid-column: span 4;\n    }\n  }\n"
        ]);
        return (
          (De = function () {
            return e;
          }),
          e
        );
      }
      Object(u.default)(_e)(De(), function (e) {
        return e.theme.mediaQueries.sm;
      });
      var Fe = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                })
              }
            )
          );
        },
        ze = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 25"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
                })
              }
            )
          );
        },
        qe = function (e) {
          return Object(r.jsxs)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 16 16"
                },
                e
              ),
              {},
              {
                children: []
              }
            )
          );
        },
        Ve = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 90 90"
                },
                e
              ),
              {},
              {
                children: []
              }
            )
          );
        },
        He = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                })
              }
            )
          );
        },
        Ye = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                })
              }
            )
          );
        },
        We = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 90 90"
                },
                e
              ),
              {},
              {
                children: []
              }
            )
          );
        },
        Ze = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                })
              }
            )
          );
        },
        Qe = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 20 20"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z"
                })
              }
            )
          );
        },
        Ke = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                })
              }
            )
          );
        },
        Ge = function (e) {
          return Object(r.jsxs)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "-100"
                },
                e
              ),
              {},
              {
                children: []
              }
            )
          );
        },
        Je = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 25"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                })
              }
            )
          );
        },
        Xe = function (e, n) {
          return f("colors.".concat(e), e)(n);
        };
      function $e() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  background-color: ",
          ";\n  border: 2px solid ",
          ";\n  border-radius: 16px;\n  color: ",
          ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ",
          ";\n  }\n"
        ]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      var en = function (e) {
          var n = e.outline,
            t = e.variant,
            r = void 0 === t ? "primary" : t,
            a = e.theme;
          return n ? Xe(r, a) : "#ffffff";
        },
        nn = u.default.div(
          $e(),
          function (e) {
            var n = e.outline,
              t = e.theme,
              r = e.variant;
            return n ? "transparent" : Xe(void 0 === r ? "primary" : r, t);
          },
          function (e) {
            var n = e.variant,
              t = void 0 === n ? "primary" : n,
              r = e.theme;
            return Xe(t, r);
          },
          en,
          en
        ),
        tn = function (e) {
          var n = e.startIcon,
            t = e.endIcon,
            a = e.children,
            o = Object(N.a)(e, ["startIcon", "endIcon", "children"]);
          return Object(r.jsxs)(
            nn,
            Object(l.a)(
              Object(l.a)({}, o),
              {},
              {
                children: [
                  i.a.isValidElement(n) &&
                    i.a.cloneElement(n, {
                      mr: "0.5rem"
                    }),
                  a,
                  i.a.isValidElement(t) &&
                    i.a.cloneElement(t, {
                      ml: "0.5rem"
                    })
                ]
              }
            )
          );
        };
      tn.defaultProps = {
        variant: "primary",
        outline: !1
      };

      function rn() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  color: ",
          ";\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"
        ]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      var an = Object(u.default)(g)(rn(), function (e) {
          return e.theme.colors.primary;
        }),
        on = function (e) {
          var n = e.external,
            t = Object(N.a)(e, ["external"]),
            a = n ? R() : {};
          return Object(r.jsx)(
            an,
            Object(l.a)(
              Object(l.a)(
                {
                  as: "a",
                  bold: !0
                },
                a
              ),
              t
            )
          );
        },
        cn = function (e) {
          var n = e.children,
            t = Object(N.a)(e, ["children"]);
          return Object(r.jsxs)(
            on,
            Object(l.a)(
              Object(l.a)(
                {
                  external: !0
                },
                t
              ),
              {},
              {
                children: [
                  n,
                  Object(r.jsx)(Ke, {
                    color: "primary",
                    ml: "4px"
                  })
                ]
              }
            )
          );
        };

      function sn() {
        var e = Object(s.a)([
          "\n  position: relative;\n  background-color: ",
          ";\n  border-radius: 32px;\n  box-shadow: ",
          ";\n  height: 16px;\n  overflow: hidden;\n"
        ]);
        return (
          (sn = function () {
            return e;
          }),
          e
        );
      }

      function un() {
        var e = Object(s.a)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
          ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"
        ]);
        return (
          (un = function () {
            return e;
          }),
          e
        );
      }
      var ln = u.default.div(un(), function (e) {
        return e.primary
          ? e.theme.colors.secondary
          : "".concat(e.theme.colors.secondary, "80");
      });
      ln.defaultProps = {
        primary: !1
      };
      u.default.div(
        sn(),
        function (e) {
          return e.theme.colors.input;
        },
        function (e) {
          return e.theme.shadows.inset;
        }
      );

      function dn() {
        var e = Object(s.a)([
          "\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"
        ]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      u.default.div(dn());
      var bn = "circle";

      function pn() {
        var e = Object(s.a)([
          '\n  position: relative;\n  overflow: hidden;\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ',
          " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }

      function fn() {
        var e = Object(s.a)(["\n  animation: ", " 2s infinite ease-out;\n"]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }

      function jn() {
        var e = Object(s.a)([
          "\n  min-height: 20px;\n  display: block;\n  background-color: ",
          ";\n  width: ",
          ";\n  height: ",
          ";\n  border-radius: ",
          ";\n"
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }

      function hn() {
        var e = Object(s.a)([
          "\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }

      function mn() {
        var e = Object(s.a)([
          "\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      var vn = Object(u.keyframes)(mn()),
        xn = Object(u.keyframes)(hn()),
        yn = u.default.div(
          jn(),
          function (e) {
            return e.theme.colors.textDisabled;
          },
          function (e) {
            var n = e.width;
            return n ? "".concat(n, "px") : "100%";
          },
          function (e) {
            var n = e.height;
            return n ? "".concat(n, "px") : "100%";
          },
          function (e) {
            var n = e.variant,
              t = e.theme;
            return n === bn ? t.radii.circle : t.radii.small;
          }
        );
      Object(u.default)(yn)(fn(), xn), Object(u.default)(yn)(pn(), vn);

      function On() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  background-color: ",
          ";\n  border-radius: 24px;\n  box-shadow: ",
          ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"
        ]);
        return (
          (On = function () {
            return e;
          }),
          e
        );
      }

      function gn() {
        var e = Object(s.a)([
          "\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ",
          " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ",
          " {\n    box-shadow: ",
          ";\n  }\n\n  &:hover + ",
          ":not(:disabled):not(:checked) {\n    box-shadow: ",
          ";\n  }\n"
        ]);
        return (
          (gn = function () {
            return e;
          }),
          e
        );
      }

      function Cn() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"
        ]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      var wn = u.default.div(Cn(), function (e) {
        return e.theme.toggle.handleBackground;
      });
      u.default.input(
        gn(),
        wn,
        wn,
        function (e) {
          return e.theme.shadows.focus;
        },
        wn,
        function (e) {
          return e.theme.shadows.focus;
        }
      ),
        u.default.div(
          On(),
          function (e) {
            var n = e.theme,
              t = e.checked;
            return n.colors[t ? "success" : "input"];
          },
          function (e) {
            return e.theme.shadows.inset;
          }
        ),
        t(257);

      function kn() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px;\n  a:not(:last-child) {\n    margin-bottom: 16px;\n  }\n  ",
          " {\n    a:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 32px;\n    }\n    flex-direction: row;\n  }\n"
        ]);
        return (
          (kn = function () {
            return e;
          }),
          e
        );
      }
      u.default.footer(kn(), function (e) {
        return e.theme.mediaQueries.sm;
      });

      function Tn() {
        var e = Object(s.a)(["\n  padding: 8px;\n  width: 48px;\n"]);
        return (
          (Tn = function () {
            return e;
          }),
          e
        );
      }

      function In() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"
        ]);
        return (
          (In = function () {
            return e;
          }),
          e
        );
      }

      function En() {
        var e = Object(s.a)([
          "\n  background: ",
          ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ",
          ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ",
          ";\n  overflow-y: auto;\n  ",
          " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"
        ]);
        return (
          (En = function () {
            return e;
          }),
          e
        );
      }
      var An = u.default.div(
          En(),
          function (e) {
            return e.theme.modal.background;
          },
          function (e) {
            return e.theme.colors.borderColor;
          },
          function (e) {
            return e.theme.zIndices.modal;
          },
          function (e) {
            return e.theme.mediaQueries.xs;
          }
        ),
        Sn = u.default.div(In()),
        Nn = Object(u.default)(W)(Tn()),
        Rn = function (e) {
          var n = e.title,
            t = e.onDismiss,
            a = e.children;
          return Object(r.jsxs)(An, {
            children: [
              Object(r.jsxs)(Sn, {
                children: [
                  Object(r.jsx)(Se, {
                    children: n
                  }),
                  Object(r.jsx)(Nn, {
                    variant: "text",
                    onClick: t,
                    "aria-label": "Close the dialog",
                    children: Object(r.jsx)(Ye, {
                      color: "primary",
                      onClick: t
                    })
                  })
                ]
              }),
              Object(r.jsx)(Oe, {
                flexDirection: "column",
                p: "24px",
                children: a
              })
            ]
          });
        },
        Ln = t(9);

      function Un() {
        var e = Object(s.a)([
          "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ",
          ";\n  z-index: ",
          ";\n  pointer-events: ",
          ";\n"
        ]);
        return (
          (Un = function () {
            return e;
          }),
          e
        );
      }
      var Bn = u.default.div.attrs({
        role: "presentation"
      })(
        Un(),
        function (e) {
          return e.show ? 0.6 : 0;
        },
        function (e) {
          return e.zIndex;
        },
        function (e) {
          return e.show ? "initial" : "none";
        }
      );
      Bn.defaultProps = {
        show: !1,
        zIndex: 10
      };
      var Pn = Bn;

      function Mn() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ",
          ";\n"
        ]);
        return (
          (Mn = function () {
            return e;
          }),
          e
        );
      }
      var _n = u.default.div(Mn(), function (e) {
          return e.theme.zIndices.modal - 1;
        }),
        Dn = Object(a.createContext)({
          onPresent: function () {
            return null;
          },
          onDismiss: function () {
            return null;
          }
        }),
        Fn = function (e) {
          var n = e.children,
            t = Object(a.useState)(!1),
            o = Object(Ln.a)(t, 2),
            c = o[0],
            s = o[1],
            u = Object(a.useState)(),
            l = Object(Ln.a)(u, 2),
            d = l[0],
            b = l[1],
            p = function () {
              b(void 0), s(!1);
            };
          return Object(r.jsxs)(Dn.Provider, {
            value: {
              onPresent: function (e) {
                b(e), s(!0);
              },
              onDismiss: p
            },
            children: [
              c &&
                Object(r.jsxs)(_n, {
                  children: [
                    Object(r.jsx)(Pn, {
                      show: !0,
                      onClick: p
                    }),
                    i.a.isValidElement(d) &&
                      i.a.cloneElement(d, {
                        onDismiss: p
                      })
                  ]
                }),
              n
            ]
          });
        },
        zn = function (e) {
          var n = Object(a.useContext)(Dn),
            t = n.onPresent,
            r = n.onDismiss;
          return [
            Object(a.useCallback)(
              function () {
                t(e);
              },
              [e, t]
            ),
            r
          ];
        },
        qn = t(36),
        Vn = function (e) {
          e.isDark;
          var n = Object(N.a)(e, ["isDark"]);
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 130 26"
                },
                n
              ),
              {},
              {
                children: Object(r.jsx)("image", {
                  width: "130",
                  height: "26",
                  href: "/images/banner.png"
                })
              }
            )
          );
        };

      function Hn() {
        var e = Object(s.a)(["\n  ", " {\n    display: none;\n  }\n"]);
        return (
          (Hn = function () {
            return e;
          }),
          e
        );
      }

      function Yn() {
        var e = Object(s.a)(["\n  padding: 0 8px;\n  border-radius: 8px;\n"]);
        return (
          (Yn = function () {
            return e;
          }),
          e
        );
      }
      var Wn = Object(u.default)(W)(Yn());
      Wn.defaultProps = {
        variant: "text",
        size: "sm"
      };
      var Zn = Object(u.default)(Wn)(Hn(), function (e) {
          return e.theme.mediaQueries.nav;
        }),
        Qn = [
          {
            title: "Metamask",
            icon: function (e) {
              return Object(r.jsxs)(
                m,
                Object(l.a)(
                  Object(l.a)(
                    {
                      viewBox: "0 0 96 96"
                    },
                    e
                  ),
                  {},
                  {
                    children: [
                      Object(r.jsx)("circle", {
                        cx: "48",
                        cy: "48",
                        r: "48",
                        fill: "white"
                      }),
                      Object(r.jsx)("path", {
                        d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z",
                        fill: "#E17726"
                      }),
                      Object(r.jsx)("path", {
                        d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z",
                        fill: "#E27625"
                      }),
                      Object(r.jsx)("path", {
                        d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z",
                        fill: "#D5BFB2"
                      }),
                      Object(r.jsx)("path", {
                        d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z",
                        fill: "#D5BFB2"
                      }),
                      Object(r.jsx)("path", {
                        d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z",
                        fill: "#233447"
                      }),
                      Object(r.jsx)("path", {
                        d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z",
                        fill: "#233447"
                      }),
                      Object(r.jsx)("path", {
                        d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z",
                        fill: "#CC6228"
                      }),
                      Object(r.jsx)("path", {
                        d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z",
                        fill: "#CC6228"
                      }),
                      Object(r.jsx)("path", {
                        d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z",
                        fill: "#CC6228"
                      }),
                      Object(r.jsx)("path", {
                        d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z",
                        fill: "#CC6228"
                      }),
                      Object(r.jsx)("path", {
                        d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z",
                        fill: "#E27525"
                      }),
                      Object(r.jsx)("path", {
                        d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z",
                        fill: "#E27525"
                      }),
                      Object(r.jsx)("path", {
                        d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z",
                        fill: "#E27525"
                      }),
                      Object(r.jsx)("path", {
                        d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z",
                        fill: "#E27525"
                      }),
                      Object(r.jsx)("path", {
                        d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z",
                        fill: "#F5841F"
                      }),
                      Object(r.jsx)("path", {
                        d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z",
                        fill: "#F5841F"
                      }),
                      Object(r.jsx)("path", {
                        d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",
                        fill: "#C0AC9D"
                      }),
                      Object(r.jsx)("path", {
                        d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z",
                        fill: "#161616"
                      }),
                      Object(r.jsx)("path", {
                        d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",
                        fill: "#763E1A"
                      }),
                      Object(r.jsx)("path", {
                        d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",
                        fill: "#763E1A"
                      }),
                      Object(r.jsx)("path", {
                        d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z",
                        fill: "#F5841F"
                      }),
                      Object(r.jsx)("path", {
                        d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z",
                        fill: "#F5841F"
                      }),
                      Object(r.jsx)("path", {
                        d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",
                        fill: "#F5841F"
                      })
                    ]
                  }
                )
              );
            },
            connectorId: "injected"
          },
          {
            title: "TrustWallet",
            icon: function (e) {
              return Object(r.jsxs)(
                m,
                Object(l.a)(
                  Object(l.a)(
                    {
                      viewBox: "0 0 96 96"
                    },
                    e
                  ),
                  {},
                  {
                    children: [
                      Object(r.jsxs)("g", {
                        clipPath: "url(#clip0)",
                        children: [
                          Object(r.jsx)("path", {
                            d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z",
                            fill: "#3375BB"
                          }),
                          Object(r.jsx)("path", {
                            d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z",
                            fill: "white"
                          })
                        ]
                      }),
                      Object(r.jsx)("defs", {
                        children: Object(r.jsx)("clipPath", {
                          id: "clip0",
                          children: Object(r.jsx)("rect", {
                            width: "96",
                            height: "96",
                            fill: "white"
                          })
                        })
                      })
                    ]
                  }
                )
              );
            },
            connectorId: "injected"
          },
          {
            title: "WalletConnect",
            icon: function (e) {
              return Object(r.jsxs)(
                m,
                Object(l.a)(
                  Object(l.a)(
                    {
                      viewBox: "0 0 96 96"
                    },
                    e
                  ),
                  {},
                  {
                    children: [
                      Object(r.jsx)("path", {
                        d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z",
                        fill: "#3389FB"
                      }),
                      Object(r.jsx)("path", {
                        d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z",
                        fill: "white"
                      })
                    ]
                  }
                )
              );
            },
            connectorId: "walletconnect"
          }
        ],
        Kn = "accountStatus",
        Gn = function (e) {
          var n = e.login,
            t = e.walletConfig,
            a = e.onDismiss,
            i = e.mb,
            o = t.title,
            c = t.icon;
          return Object(r.jsxs)(W, {
            fullWidth: !0,
            variant: "tertiary",
            onClick: function () {
              n(t.connectorId), window.localStorage.setItem(Kn, "1"), a();
            },
            style: {
              justifyContent: "space-between"
            },
            mb: i,
            children: [
              Object(r.jsx)(g, {
                bold: !0,
                color: "primary",
                mr: "16px",
                children: o
              }),
              Object(r.jsx)(c, {
                width: "32px"
              })
            ]
          });
        };

      function Jn() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      var Xn = Object(u.default)(on)(Jn()),
        $n = function (e) {
          var n = e.login,
            t = e.onDismiss,
            a =
              void 0 === t
                ? function () {
                    return null;
                  }
                : t;
          return Object(r.jsxs)(Rn, {
            title: "Connect to a wallet",
            onDismiss: a,
            children: [
              Qn.map(function (e, t) {
                return Object(r.jsx)(
                  Gn,
                  {
                    login: n,
                    walletConfig: e,
                    onDismiss: a,
                    mb: t < Qn.length - 1 ? "8px" : "0"
                  },
                  e.title
                );
              }),
              Object(r.jsxs)(Xn, {
                href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain",
                external: !0,
                children: [
                  Object(r.jsx)(Qe, {
                    color: "primary",
                    mr: "6px"
                  }),
                  "Learn how to connect"
                ]
              })
            ]
          });
        },
        et = function (e) {
          var n = e.account,
            t = e.logout,
            a = e.onDismiss,
            i =
              void 0 === a
                ? function () {
                    return null;
                  }
                : a;
          return Object(r.jsxs)(Rn, {
            title: "Your wallet",
            onDismiss: i,
            children: [
              Object(r.jsx)(g, {
                fontSize: "20px",
                bold: !0,
                style: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: "8px"
                },
                children: n
              }),
              Object(r.jsxs)(on, {
                fontSize: "14px",
                href: "https://bscscan.com/address/".concat(n),
                target: "blank",
                rel: "noopener noreferrer",
                mb: "32px",
                children: [
                  Object(r.jsx)(Ke, {
                    width: "20px",
                    color: "primary",
                    mr: "4px"
                  }),
                  "View on BscScan "
                ]
              }),
              Object(r.jsx)(Oe, {
                justifyContent: "center",
                children: Object(r.jsx)(W, {
                  size: "sm",
                  variant: "secondary",
                  onClick: function () {
                    t(),
                      window.localStorage.removeItem(Kn),
                      i(),
                      window.location.reload();
                  },
                  children: "Logout"
                })
              })
            ]
          });
        },
        nt = function (e, n, t) {
          var a = zn(
              Object(r.jsx)($n, {
                login: e
              })
            ),
            i = Object(Ln.a)(a, 1)[0],
            o = zn(
              Object(r.jsx)(et, {
                account: t,
                logout: n
              })
            );
          return {
            onPresentConnectModal: i,
            onPresentAccountModal: Object(Ln.a)(o, 1)[0]
          };
        },
        tt = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C5.47006 2.33005 1.00006 7.86005 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C14.4001 22.5201 18.1001 20.7201 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C13.1301 16.1601 9.00006 8.96005 11.9701 2.73005Z"
                })
              }
            )
          );
        },
        rt = function (e) {
          return Object(r.jsx)(
            m,
            Object(l.a)(
              Object(l.a)(
                {
                  viewBox: "0 0 24 24"
                },
                e
              ),
              {},
              {
                children: Object(r.jsx)("path", {
                  d: "M6.05 4.59L5.66 4.2C5.27 3.81 4.64 3.82 4.26 4.2L4.25 4.21C3.86 4.6 3.86 5.23 4.25 5.61L4.64 6C5.03 6.39 5.65 6.39 6.04 6L6.05 5.99C6.44 5.61 6.44 4.97 6.05 4.59ZM3.01 10.95H1.99C1.44 10.95 1 11.39 1 11.94V11.95C1 12.5 1.44 12.94 1.99 12.94H3C3.56 12.95 4 12.51 4 11.96V11.95C4 11.39 3.56 10.95 3.01 10.95ZM12.01 1H12C11.44 1 11 1.44 11 1.99V2.95C11 3.5 11.44 3.94 11.99 3.94H12C12.56 3.95 13 3.51 13 2.96V1.99C13 1.44 12.56 1 12.01 1ZM19.75 4.21C19.36 3.82 18.73 3.82 18.34 4.2L17.95 4.59C17.56 4.98 17.56 5.61 17.95 5.99L17.96 6C18.35 6.39 18.98 6.39 19.36 6L19.75 5.61C20.14 5.22 20.14 4.6 19.75 4.21ZM17.94 19.31L18.33 19.7C18.72 20.09 19.35 20.09 19.74 19.7C20.13 19.31 20.13 18.68 19.74 18.29L19.35 17.9C18.96 17.51 18.33 17.52 17.95 17.9C17.55 18.3 17.55 18.92 17.94 19.31ZM20 11.94V11.95C20 12.5 20.44 12.94 20.99 12.94H22C22.55 12.94 22.99 12.5 22.99 11.95V11.94C22.99 11.39 22.55 10.95 22 10.95H20.99C20.44 10.95 20 11.39 20 11.94ZM12 5.95C8.69 5.95 6 8.64 6 11.95C6 15.26 8.69 17.95 12 17.95C15.31 17.95 18 15.26 18 11.95C18 8.64 15.31 5.95 12 5.95ZM11.99 22.9H12C12.55 22.9 12.99 22.46 12.99 21.91V20.95C12.99 20.4 12.55 19.96 12 19.96H11.99C11.44 19.96 11 20.4 11 20.95V21.91C11 22.46 11.44 22.9 11.99 22.9ZM4.25 19.69C4.64 20.08 5.27 20.08 5.66 19.69L6.05 19.3C6.44 18.91 6.43 18.28 6.05 17.9L6.04 17.89C5.65 17.5 5.02 17.5 4.63 17.89L4.24 18.28C3.86 18.68 3.86 19.3 4.25 19.69Z"
                })
              }
            )
          );
        };

      function at() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  order: 1;\n  margin-bottom: 32px;\n  margin-left: 40px;\n  ",
          " {\n    order: 2;\n    margin-bottom: 0;\n    margin-left: 0;\n  }\n"
        ]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      var it,
        ot,
        ct,
        st,
        ut = u.default.div(at(), function (e) {
          return e.theme.mediaQueries.nav;
        }),
        lt = function (e) {
          var n = e.isDark,
            t = e.toggleTheme,
            a = e.account,
            i = e.closeNav,
            o = e.login,
            c = e.logout,
            s = nt(o, c, a),
            u = s.onPresentConnectModal,
            l = s.onPresentAccountModal,
            d = a
              ? ""
                  .concat(a.substring(0, 4), "...")
                  .concat(a.substring(a.length - 4))
              : null;
          return Object(r.jsxs)(ut, {
            children: [
              Object(r.jsx)(Wn, {
                onClick: function () {
                  return t(!n);
                },
                children: n
                  ? Object(r.jsx)(rt, {
                      color: "primary"
                    })
                  : Object(r.jsx)(tt, {
                      color: "primary"
                    })
              }),
              a
                ? Object(r.jsx)(W, {
                    size: "sm",
                    variant: "tertiary",
                    onClick: function () {
                      l(), i();
                    },
                    children: d
                  })
                : Object(r.jsx)(W, {
                    size: "sm",
                    onClick: function () {
                      u(), i();
                    },
                    children: "Connect"
                  })
            ]
          });
        },
        dt = t(6),
        bt = t.n(dt),
        pt = t(24),
        ft = t(68),
        jt = t.n(ft),
        ht = t(15),
        mt = t.n(ht),
        vt = t(17),
        xt = t(29),
        yt = t(180),
        Ot = t.n(yt),
        gt = t(155),
        Ct = t.n(gt),
        wt = t(258),
        kt = t.n(wt),
        Tt = t(144),
        It = t(98),
        Et = (t(94), t(124), t(111));
      !(function (e) {
        (e[(e.MAINNET = 56)] = "MAINNET"),
          (e[(e.BSCTESTNET = 97)] = "BSCTESTNET");
      })(ot || (ot = {})),
        (function (e) {
          (e[(e.EXACT_INPUT = 0)] = "EXACT_INPUT"),
            (e[(e.EXACT_OUTPUT = 1)] = "EXACT_OUTPUT");
        })(ct || (ct = {})),
        (function (e) {
          (e[(e.ROUND_DOWN = 0)] = "ROUND_DOWN"),
            (e[(e.ROUND_HALF_UP = 1)] = "ROUND_HALF_UP"),
            (e[(e.ROUND_UP = 2)] = "ROUND_UP");
        })(st || (st = {}));
      var At,
        St = mt.a.BigInt(1e3),
        Nt = mt.a.BigInt(0),
        Rt = mt.a.BigInt(1),
        Lt = mt.a.BigInt(2),
        Ut = mt.a.BigInt(3),
        Bt = mt.a.BigInt(5),
        Pt = mt.a.BigInt(10),
        Mt = mt.a.BigInt(100),
        _t = mt.a.BigInt(9975),
        Dt = mt.a.BigInt(1e4);
      !(function (e) {
        (e.uint8 = "uint8"), (e.uint256 = "uint256");
      })(At || (At = {}));
      var Ft =
        (((it = {})[At.uint8] = mt.a.BigInt("0xff")),
        (it[At.uint256] = mt.a.BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        )),
        it);

      function zt(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }

      function qt(e, n, t) {
        return n && zt(e.prototype, n), t && zt(e, t), e;
      }

      function Vt() {
        return (Vt =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }

      function Ht(e, n) {
        (e.prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
      }

      function Yt(e) {
        return (Yt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }

      function Wt(e, n) {
        return (Wt =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }

      function Zt() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }

      function Qt(e, n, t) {
        return (Qt = Zt()
          ? Reflect.construct
          : function (e, n, t) {
              var r = [null];
              r.push.apply(r, n);
              var a = new (Function.bind.apply(e, r))();
              return t && Wt(a, t.prototype), a;
            }).apply(null, arguments);
      }

      function Kt(e) {
        var n = "function" === typeof Map ? new Map() : void 0;
        return (Kt = function (e) {
          if (
            null === e ||
            ((t = e), -1 === Function.toString.call(t).indexOf("[native code]"))
          )
            return e;
          var t;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof n) {
            if (n.has(e)) return n.get(e);
            n.set(e, r);
          }

          function r() {
            return Qt(e, arguments, Yt(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            Wt(r, e)
          );
        })(e);
      }

      function Gt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }

      function Jt(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }

      function Xt(e, n) {
        var t;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (e) {
                if ("string" === typeof e) return Jt(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? Jt(e, n)
                    : void 0
                );
              }
            })(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var r = 0;
            return function () {
              return r >= e.length
                ? {
                    done: !0
                  }
                : {
                    done: !1,
                    value: e[r++]
                  };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (t = e[Symbol.iterator]()).next.bind(t);
      }
      var $t = "setPrototypeOf" in Object,
        er = (function (e) {
          function n() {
            var t;
            return (
              ((t = e.call(this) || this).isInsufficientReservesError = !0),
              (t.name = t.constructor.name),
              $t &&
                Object.setPrototypeOf(
                  Gt(t),
                  (this instanceof n ? this.constructor : void 0).prototype
                ),
              t
            );
          }
          return Ht(n, e), n;
        })(Kt(Error)),
        nr = (function (e) {
          function n() {
            var t;
            return (
              ((t = e.call(this) || this).isInsufficientInputAmountError = !0),
              (t.name = t.constructor.name),
              $t &&
                Object.setPrototypeOf(
                  Gt(t),
                  (this instanceof n ? this.constructor : void 0).prototype
                ),
              t
            );
          }
          return Ht(n, e), n;
        })(Kt(Error));

      function tr(e, n) {
        mt.a.greaterThanOrEqual(e, Nt) || Object(vt.a)(!1),
          mt.a.lessThanOrEqual(e, Ft[n]) || Object(vt.a)(!1);
      }

      function rr(e) {
        try {
          return Object(xt.getAddress)(e);
        } catch (n) {
          Object(vt.a)(!1);
        }
      }

      function ar(e) {
        return e instanceof mt.a
          ? e
          : "bigint" === typeof e
          ? mt.a.BigInt(e.toString())
          : mt.a.BigInt(e);
      }

      function ir(e) {
        tr(e, At.uint256);
        var n,
          t = Nt;
        if (mt.a.greaterThan(e, Ut))
          for (
            t = e, n = mt.a.add(mt.a.divide(e, Lt), Rt);
            mt.a.lessThan(n, t);

          )
            (t = n), (n = mt.a.divide(mt.a.add(mt.a.divide(e, n), n), Lt));
        else mt.a.notEqual(e, Nt) && (t = Rt);
        return t;
      }

      function or(e, n, t, r) {
        if (
          (t > 0 || Object(vt.a)(!1),
          e.length <= t || Object(vt.a)(!1),
          0 === e.length)
        )
          return e.push(n), null;
        var a = e.length === t;
        if (a && r(e[e.length - 1], n) <= 0) return n;
        for (var i = 0, o = e.length; i < o; ) {
          var c = (i + o) >>> 1;
          r(e[c], n) <= 0 ? (i = c + 1) : (o = c);
        }
        return e.splice(i, 0, n), a ? e.pop() : null;
      }
      var cr,
        sr = function (e, n, t) {
          tr(mt.a.BigInt(e), At.uint8),
            (this.decimals = e),
            (this.symbol = n),
            (this.name = t);
        },
        ur = (sr.ETHER = new sr(18, "BNB", "BNBChain")),
        lr = (function (e) {
          function n(n, t, r, a, i) {
            var o;
            return (
              ((o = e.call(this, r, a, i) || this).chainId = n),
              (o.address = rr(t)),
              o
            );
          }
          Ht(n, e);
          var t = n.prototype;
          return (
            (t.equals = function (e) {
              return (
                this === e ||
                (this.chainId === e.chainId && this.address === e.address)
              );
            }),
            (t.sortsBefore = function (e) {
              return (
                this.chainId !== e.chainId && Object(vt.a)(!1),
                this.address === e.address && Object(vt.a)(!1),
                this.address.toLowerCase() < e.address.toLowerCase()
              );
            }),
            n
          );
        })(sr);

      function dr(e, n) {
        return e instanceof lr && n instanceof lr
          ? e.equals(n)
          : !(e instanceof lr) && !(n instanceof lr) && e === n;
      }
      var br,
        pr,
        fr =
          (((cr = {})[ot.MAINNET] = new lr(
            ot.MAINNET,
            "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            18,
            "WBNB",
            "Wrapped BNB"
          )),
          (cr[ot.BSCTESTNET] = new lr(
            ot.BSCTESTNET,
            "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e",
            18,
            "WBNB",
            "Wrapped BNB"
          )),
          cr),
        jr = Ct()(kt.a),
        hr = Ct()(Ot.a),
        mr =
          (((br = {})[st.ROUND_DOWN] = jr.ROUND_DOWN),
          (br[st.ROUND_HALF_UP] = jr.ROUND_HALF_UP),
          (br[st.ROUND_UP] = jr.ROUND_UP),
          br),
        vr =
          (((pr = {})[st.ROUND_DOWN] = 0),
          (pr[st.ROUND_HALF_UP] = 1),
          (pr[st.ROUND_UP] = 3),
          pr),
        xr = (function () {
          function e(e, n) {
            void 0 === n && (n = Rt),
              (this.numerator = ar(e)),
              (this.denominator = ar(n));
          }
          var n = e.prototype;
          return (
            (n.invert = function () {
              return new e(this.denominator, this.numerator);
            }),
            (n.add = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return mt.a.equal(this.denominator, t.denominator)
                ? new e(mt.a.add(this.numerator, t.numerator), this.denominator)
                : new e(
                    mt.a.add(
                      mt.a.multiply(this.numerator, t.denominator),
                      mt.a.multiply(t.numerator, this.denominator)
                    ),
                    mt.a.multiply(this.denominator, t.denominator)
                  );
            }),
            (n.subtract = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return mt.a.equal(this.denominator, t.denominator)
                ? new e(
                    mt.a.subtract(this.numerator, t.numerator),
                    this.denominator
                  )
                : new e(
                    mt.a.subtract(
                      mt.a.multiply(this.numerator, t.denominator),
                      mt.a.multiply(t.numerator, this.denominator)
                    ),
                    mt.a.multiply(this.denominator, t.denominator)
                  );
            }),
            (n.lessThan = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return mt.a.lessThan(
                mt.a.multiply(this.numerator, t.denominator),
                mt.a.multiply(t.numerator, this.denominator)
              );
            }),
            (n.equalTo = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return mt.a.equal(
                mt.a.multiply(this.numerator, t.denominator),
                mt.a.multiply(t.numerator, this.denominator)
              );
            }),
            (n.greaterThan = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return mt.a.greaterThan(
                mt.a.multiply(this.numerator, t.denominator),
                mt.a.multiply(t.numerator, this.denominator)
              );
            }),
            (n.multiply = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return new e(
                mt.a.multiply(this.numerator, t.numerator),
                mt.a.multiply(this.denominator, t.denominator)
              );
            }),
            (n.divide = function (n) {
              var t = n instanceof e ? n : new e(ar(n));
              return new e(
                mt.a.multiply(this.numerator, t.denominator),
                mt.a.multiply(this.denominator, t.numerator)
              );
            }),
            (n.toSignificant = function (e, n, t) {
              void 0 === n &&
                (n = {
                  groupSeparator: ""
                }),
                void 0 === t && (t = st.ROUND_HALF_UP),
                Number.isInteger(e) || Object(vt.a)(!1),
                e > 0 || Object(vt.a)(!1),
                jr.set({
                  precision: e + 1,
                  rounding: mr[t]
                });
              var r = new jr(this.numerator.toString())
                .div(this.denominator.toString())
                .toSignificantDigits(e);
              return r.toFormat(r.decimalPlaces(), n);
            }),
            (n.toFixed = function (e, n, t) {
              return (
                void 0 === n &&
                  (n = {
                    groupSeparator: ""
                  }),
                void 0 === t && (t = st.ROUND_HALF_UP),
                Number.isInteger(e) || Object(vt.a)(!1),
                e >= 0 || Object(vt.a)(!1),
                (hr.DP = e),
                (hr.RM = vr[t]),
                new hr(this.numerator.toString())
                  .div(this.denominator.toString())
                  .toFormat(e, n)
              );
            }),
            qt(e, [
              {
                key: "quotient",
                get: function () {
                  return mt.a.divide(this.numerator, this.denominator);
                }
              },
              {
                key: "remainder",
                get: function () {
                  return new e(
                    mt.a.remainder(this.numerator, this.denominator),
                    this.denominator
                  );
                }
              }
            ]),
            e
          );
        })(),
        yr = Ct()(Ot.a),
        Or = (function (e) {
          function n(n, t) {
            var r,
              a = ar(t);
            return (
              tr(a, At.uint256),
              ((r =
                e.call(
                  this,
                  a,
                  mt.a.exponentiate(Pt, mt.a.BigInt(n.decimals))
                ) || this).currency = n),
              r
            );
          }
          Ht(n, e),
            (n.ether = function (e) {
              return new n(ur, e);
            });
          var t = n.prototype;
          return (
            (t.add = function (e) {
              return (
                dr(this.currency, e.currency) || Object(vt.a)(!1),
                new n(this.currency, mt.a.add(this.raw, e.raw))
              );
            }),
            (t.subtract = function (e) {
              return (
                dr(this.currency, e.currency) || Object(vt.a)(!1),
                new n(this.currency, mt.a.subtract(this.raw, e.raw))
              );
            }),
            (t.toSignificant = function (n, t, r) {
              return (
                void 0 === n && (n = 6),
                void 0 === r && (r = st.ROUND_DOWN),
                e.prototype.toSignificant.call(this, n, t, r)
              );
            }),
            (t.toFixed = function (n, t, r) {
              return (
                void 0 === n && (n = this.currency.decimals),
                void 0 === r && (r = st.ROUND_DOWN),
                n <= this.currency.decimals || Object(vt.a)(!1),
                e.prototype.toFixed.call(this, n, t, r)
              );
            }),
            (t.toExact = function (e) {
              return (
                void 0 === e &&
                  (e = {
                    groupSeparator: ""
                  }),
                (yr.DP = this.currency.decimals),
                new yr(this.numerator.toString())
                  .div(this.denominator.toString())
                  .toFormat(e)
              );
            }),
            qt(n, [
              {
                key: "raw",
                get: function () {
                  return this.numerator;
                }
              }
            ]),
            n
          );
        })(xr),
        gr = (function (e) {
          function n(n, t) {
            var r;
            return ((r = e.call(this, n, t) || this).token = n), r;
          }
          Ht(n, e);
          var t = n.prototype;
          return (
            (t.add = function (e) {
              return (
                this.token.equals(e.token) || Object(vt.a)(!1),
                new n(this.token, mt.a.add(this.raw, e.raw))
              );
            }),
            (t.subtract = function (e) {
              return (
                this.token.equals(e.token) || Object(vt.a)(!1),
                new n(this.token, mt.a.subtract(this.raw, e.raw))
              );
            }),
            n
          );
        })(Or),
        Cr = (function (e) {
          function n(n, t, r, a) {
            var i;
            return (
              ((i = e.call(this, a, r) || this).baseCurrency = n),
              (i.quoteCurrency = t),
              (i.scalar = new xr(
                mt.a.exponentiate(Pt, mt.a.BigInt(n.decimals)),
                mt.a.exponentiate(Pt, mt.a.BigInt(t.decimals))
              )),
              i
            );
          }
          Ht(n, e),
            (n.fromRoute = function (e) {
              for (
                var t, r = [], a = Xt(e.pairs.entries());
                !(t = a()).done;

              ) {
                var i = t.value,
                  o = i[0],
                  c = i[1];
                r.push(
                  e.path[o].equals(c.token0)
                    ? new n(
                        c.reserve0.currency,
                        c.reserve1.currency,
                        c.reserve0.raw,
                        c.reserve1.raw
                      )
                    : new n(
                        c.reserve1.currency,
                        c.reserve0.currency,
                        c.reserve1.raw,
                        c.reserve0.raw
                      )
                );
              }
              return r.slice(1).reduce(function (e, n) {
                return e.multiply(n);
              }, r[0]);
            });
          var t = n.prototype;
          return (
            (t.invert = function () {
              return new n(
                this.quoteCurrency,
                this.baseCurrency,
                this.numerator,
                this.denominator
              );
            }),
            (t.multiply = function (t) {
              dr(this.quoteCurrency, t.baseCurrency) || Object(vt.a)(!1);
              var r = e.prototype.multiply.call(this, t);
              return new n(
                this.baseCurrency,
                t.quoteCurrency,
                r.denominator,
                r.numerator
              );
            }),
            (t.quote = function (n) {
              return (
                dr(n.currency, this.baseCurrency) || Object(vt.a)(!1),
                this.quoteCurrency instanceof lr
                  ? new gr(
                      this.quoteCurrency,
                      e.prototype.multiply.call(this, n.raw).quotient
                    )
                  : Or.ether(e.prototype.multiply.call(this, n.raw).quotient)
              );
            }),
            (t.toSignificant = function (e, n, t) {
              return (
                void 0 === e && (e = 6), this.adjusted.toSignificant(e, n, t)
              );
            }),
            (t.toFixed = function (e, n, t) {
              return void 0 === e && (e = 4), this.adjusted.toFixed(e, n, t);
            }),
            qt(n, [
              {
                key: "raw",
                get: function () {
                  return new xr(this.numerator, this.denominator);
                }
              },
              {
                key: "adjusted",
                get: function () {
                  return e.prototype.multiply.call(this, this.scalar);
                }
              }
            ]),
            n
          );
        })(xr),
        wr = {},
        kr = (function () {
          function e(n, t) {
            var r = n.token.sortsBefore(t.token) ? [n, t] : [t, n];
            (this.liquidityToken = new lr(
              r[0].token.chainId,
              e.getAddress(r[0].token, r[1].token),
              18,
              "UNI-V2",
              "Uniswap V2"
            )),
              (this.tokenAmounts = r);
          }
          e.getAddress = function (e, n) {
            var t,
              r,
              a,
              i,
              o,
              c = e.sortsBefore(n) ? [e, n] : [n, e];
            void 0 ===
              (null === (t = wr) ||
              void 0 === t ||
              null === (r = t[c[0].address]) ||
              void 0 === r
                ? void 0
                : r[c[1].address]) &&
              (wr = Vt(
                {},
                wr,
                (((o = {})[c[0].address] = Vt(
                  {},
                  null === (a = wr) || void 0 === a ? void 0 : a[c[0].address],
                  (((i = {})[c[1].address] = Object(xt.getCreate2Address)(
                    "0x9F9c8761d2aa437FA3168d649EbDcE923184Cf9d",
                    Object(Tt.keccak256)(
                      ["bytes"],
                      [
                        Object(Tt.pack)(
                          ["address", "address"],
                          [c[0].address, c[1].address]
                        )
                      ]
                    ),
                    "0x8d3a803a4751545baf7dc3525978e91fbbf84ecaad9c43316bbde4e7e91cbad5"
                  )),
                  i)
                )),
                o)
              ));
            return wr[c[0].address][c[1].address];
          };
          var n = e.prototype;
          return (
            (n.involvesToken = function (e) {
              return e.equals(this.token0) || e.equals(this.token1);
            }),
            (n.priceOf = function (e) {
              return (
                this.involvesToken(e) || Object(vt.a)(!1),
                e.equals(this.token0) ? this.token0Price : this.token1Price
              );
            }),
            (n.reserveOf = function (e) {
              return (
                this.involvesToken(e) || Object(vt.a)(!1),
                e.equals(this.token0) ? this.reserve0 : this.reserve1
              );
            }),
            (n.getOutputAmount = function (n) {
              if (
                (this.involvesToken(n.token) || Object(vt.a)(!1),
                mt.a.equal(this.reserve0.raw, Nt) ||
                  mt.a.equal(this.reserve1.raw, Nt))
              )
                throw new er();
              var t = this.reserveOf(n.token),
                r = this.reserveOf(
                  n.token.equals(this.token0) ? this.token1 : this.token0
                ),
                a = mt.a.multiply(n.raw, _t),
                i = mt.a.multiply(a, r.raw),
                o = mt.a.add(mt.a.multiply(t.raw, Dt), a),
                c = new gr(
                  n.token.equals(this.token0) ? this.token1 : this.token0,
                  mt.a.divide(i, o)
                );
              if (mt.a.equal(c.raw, Nt)) throw new nr();
              return [c, new e(t.add(n), r.subtract(c))];
            }),
            (n.getInputAmount = function (n) {
              if (
                (this.involvesToken(n.token) || Object(vt.a)(!1),
                mt.a.equal(this.reserve0.raw, Nt) ||
                  mt.a.equal(this.reserve1.raw, Nt) ||
                  mt.a.greaterThanOrEqual(n.raw, this.reserveOf(n.token).raw))
              )
                throw new er();
              var t = this.reserveOf(n.token),
                r = this.reserveOf(
                  n.token.equals(this.token0) ? this.token1 : this.token0
                ),
                a = mt.a.multiply(mt.a.multiply(r.raw, n.raw), Dt),
                i = mt.a.multiply(mt.a.subtract(t.raw, n.raw), _t),
                o = new gr(
                  n.token.equals(this.token0) ? this.token1 : this.token0,
                  mt.a.add(mt.a.divide(a, i), Rt)
                );
              return [o, new e(r.add(o), t.subtract(n))];
            }),
            (n.getLiquidityMinted = function (e, n, t) {
              e.token.equals(this.liquidityToken) || Object(vt.a)(!1);
              var r,
                a = n.token.sortsBefore(t.token) ? [n, t] : [t, n];
              if (
                ((a[0].token.equals(this.token0) &&
                  a[1].token.equals(this.token1)) ||
                  Object(vt.a)(!1),
                mt.a.equal(e.raw, Nt))
              )
                r = mt.a.subtract(ir(mt.a.multiply(a[0].raw, a[1].raw)), St);
              else {
                var i = mt.a.divide(
                    mt.a.multiply(a[0].raw, e.raw),
                    this.reserve0.raw
                  ),
                  o = mt.a.divide(
                    mt.a.multiply(a[1].raw, e.raw),
                    this.reserve1.raw
                  );
                r = mt.a.lessThanOrEqual(i, o) ? i : o;
              }
              if (!mt.a.greaterThan(r, Nt)) throw new nr();
              return new gr(this.liquidityToken, r);
            }),
            (n.getLiquidityValue = function (e, n, t, r, a) {
              var i;
              if (
                (void 0 === r && (r = !1),
                this.involvesToken(e) || Object(vt.a)(!1),
                n.token.equals(this.liquidityToken) || Object(vt.a)(!1),
                t.token.equals(this.liquidityToken) || Object(vt.a)(!1),
                mt.a.lessThanOrEqual(t.raw, n.raw) || Object(vt.a)(!1),
                r)
              ) {
                a || Object(vt.a)(!1);
                var o = ar(a);
                if (mt.a.equal(o, Nt)) i = n;
                else {
                  var c = ir(
                      mt.a.multiply(this.reserve0.raw, this.reserve1.raw)
                    ),
                    s = ir(o);
                  if (mt.a.greaterThan(c, s)) {
                    var u = mt.a.multiply(n.raw, mt.a.subtract(c, s)),
                      l = mt.a.add(mt.a.multiply(c, Bt), s),
                      d = mt.a.divide(u, l);
                    i = n.add(new gr(this.liquidityToken, d));
                  } else i = n;
                }
              } else i = n;
              return new gr(
                e,
                mt.a.divide(mt.a.multiply(t.raw, this.reserveOf(e).raw), i.raw)
              );
            }),
            qt(e, [
              {
                key: "token0Price",
                get: function () {
                  return new Cr(
                    this.token0,
                    this.token1,
                    this.tokenAmounts[0].raw,
                    this.tokenAmounts[1].raw
                  );
                }
              },
              {
                key: "token1Price",
                get: function () {
                  return new Cr(
                    this.token1,
                    this.token0,
                    this.tokenAmounts[1].raw,
                    this.tokenAmounts[0].raw
                  );
                }
              },
              {
                key: "chainId",
                get: function () {
                  return this.token0.chainId;
                }
              },
              {
                key: "token0",
                get: function () {
                  return this.tokenAmounts[0].token;
                }
              },
              {
                key: "token1",
                get: function () {
                  return this.tokenAmounts[1].token;
                }
              },
              {
                key: "reserve0",
                get: function () {
                  return this.tokenAmounts[0];
                }
              },
              {
                key: "reserve1",
                get: function () {
                  return this.tokenAmounts[1];
                }
              }
            ]),
            e
          );
        })(),
        Tr = (function () {
          function e(e, n, t) {
            e.length > 0 || Object(vt.a)(!1),
              e.every(function (n) {
                return n.chainId === e[0].chainId;
              }) || Object(vt.a)(!1),
              (n instanceof lr && e[0].involvesToken(n)) ||
                (n === ur && e[0].involvesToken(fr[e[0].chainId])) ||
                Object(vt.a)(!1),
              "undefined" === typeof t ||
                (t instanceof lr && e[e.length - 1].involvesToken(t)) ||
                (t === ur && e[e.length - 1].involvesToken(fr[e[0].chainId])) ||
                Object(vt.a)(!1);
            for (
              var r,
                a = [n instanceof lr ? n : fr[e[0].chainId]],
                i = Xt(e.entries());
              !(r = i()).done;

            ) {
              var o = r.value,
                c = o[0],
                s = o[1],
                u = a[c];
              u.equals(s.token0) || u.equals(s.token1) || Object(vt.a)(!1);
              var l = u.equals(s.token0) ? s.token1 : s.token0;
              a.push(l);
            }
            (this.pairs = e),
              (this.path = a),
              (this.midPrice = Cr.fromRoute(this)),
              (this.input = n),
              (this.output = null !== t && void 0 !== t ? t : a[a.length - 1]);
          }
          return (
            qt(e, [
              {
                key: "chainId",
                get: function () {
                  return this.pairs[0].chainId;
                }
              }
            ]),
            e
          );
        })(),
        Ir = new xr(Mt),
        Er = (function (e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          Ht(n, e);
          var t = n.prototype;
          return (
            (t.toSignificant = function (e, n, t) {
              return (
                void 0 === e && (e = 5),
                this.multiply(Ir).toSignificant(e, n, t)
              );
            }),
            (t.toFixed = function (e, n, t) {
              return (
                void 0 === e && (e = 2), this.multiply(Ir).toFixed(e, n, t)
              );
            }),
            n
          );
        })(xr);

      function Ar(e, n) {
        var t = (function (e, n) {
          return (
            dr(e.inputAmount.currency, n.inputAmount.currency) ||
              Object(vt.a)(!1),
            dr(e.outputAmount.currency, n.outputAmount.currency) ||
              Object(vt.a)(!1),
            e.outputAmount.equalTo(n.outputAmount)
              ? e.inputAmount.equalTo(n.inputAmount)
                ? 0
                : e.inputAmount.lessThan(n.inputAmount)
                ? -1
                : 1
              : e.outputAmount.lessThan(n.outputAmount)
              ? 1
              : -1
          );
        })(e, n);
        return 0 !== t
          ? t
          : e.priceImpact.lessThan(n.priceImpact)
          ? -1
          : e.priceImpact.greaterThan(n.priceImpact)
          ? 1
          : e.route.path.length - n.route.path.length;
      }

      function Sr(e, n) {
        return e instanceof gr
          ? e
          : e.currency === ur
          ? new gr(fr[n], e.raw)
          : void Object(vt.a)(!1);
      }

      function Nr(e, n) {
        return e instanceof lr ? e : e === ur ? fr[n] : void Object(vt.a)(!1);
      }
      var Rr = (function () {
        function e(e, n, t) {
          var r = new Array(e.path.length),
            a = new Array(e.pairs.length);
          if (t === ct.EXACT_INPUT) {
            dr(n.currency, e.input) || Object(vt.a)(!1),
              (r[0] = Sr(n, e.chainId));
            for (var i = 0; i < e.path.length - 1; i++) {
              var o = e.pairs[i].getOutputAmount(r[i]),
                c = o[0],
                s = o[1];
              (r[i + 1] = c), (a[i] = s);
            }
          } else {
            dr(n.currency, e.output) || Object(vt.a)(!1),
              (r[r.length - 1] = Sr(n, e.chainId));
            for (var u = e.path.length - 1; u > 0; u--) {
              var l = e.pairs[u - 1].getInputAmount(r[u]),
                d = l[0],
                b = l[1];
              (r[u - 1] = d), (a[u - 1] = b);
            }
          }
          (this.route = e),
            (this.tradeType = t),
            (this.inputAmount =
              t === ct.EXACT_INPUT
                ? n
                : e.input === ur
                ? Or.ether(r[0].raw)
                : r[0]),
            (this.outputAmount =
              t === ct.EXACT_OUTPUT
                ? n
                : e.output === ur
                ? Or.ether(r[r.length - 1].raw)
                : r[r.length - 1]),
            (this.executionPrice = new Cr(
              this.inputAmount.currency,
              this.outputAmount.currency,
              this.inputAmount.raw,
              this.outputAmount.raw
            )),
            (this.nextMidPrice = Cr.fromRoute(new Tr(a, e.input))),
            (this.priceImpact = (function (e, n, t) {
              var r = e.raw.multiply(n.raw),
                a = r.subtract(t.raw).divide(r);
              return new Er(a.numerator, a.denominator);
            })(e.midPrice, this.inputAmount, this.outputAmount));
        }
        (e.exactIn = function (n, t) {
          return new e(n, t, ct.EXACT_INPUT);
        }),
          (e.exactOut = function (n, t) {
            return new e(n, t, ct.EXACT_OUTPUT);
          });
        var n = e.prototype;
        return (
          (n.minimumAmountOut = function (e) {
            if (
              (e.lessThan(Nt) && Object(vt.a)(!1),
              this.tradeType === ct.EXACT_OUTPUT)
            )
              return this.outputAmount;
            var n = new xr(Rt)
              .add(e)
              .invert()
              .multiply(this.outputAmount.raw).quotient;
            return this.outputAmount instanceof gr
              ? new gr(this.outputAmount.token, n)
              : Or.ether(n);
          }),
          (n.maximumAmountIn = function (e) {
            if (
              (e.lessThan(Nt) && Object(vt.a)(!1),
              this.tradeType === ct.EXACT_INPUT)
            )
              return this.inputAmount;
            var n = new xr(Rt).add(e).multiply(this.inputAmount.raw).quotient;
            return this.inputAmount instanceof gr
              ? new gr(this.inputAmount.token, n)
              : Or.ether(n);
          }),
          (e.bestTradeExactIn = function (n, t, r, a, i, o, c) {
            var s = void 0 === a ? {} : a,
              u = s.maxNumResults,
              l = void 0 === u ? 3 : u,
              d = s.maxHops,
              b = void 0 === d ? 3 : d;
            void 0 === i && (i = []),
              void 0 === o && (o = t),
              void 0 === c && (c = []),
              n.length > 0 || Object(vt.a)(!1),
              b > 0 || Object(vt.a)(!1),
              o === t || i.length > 0 || Object(vt.a)(!1);
            var p =
              t instanceof gr
                ? t.token.chainId
                : r instanceof lr
                ? r.chainId
                : void 0;
            void 0 === p && Object(vt.a)(!1);
            for (var f = Sr(t, p), j = Nr(r, p), h = 0; h < n.length; h++) {
              var m = n[h];
              if (
                (m.token0.equals(f.token) || m.token1.equals(f.token)) &&
                !m.reserve0.equalTo(Nt) &&
                !m.reserve1.equalTo(Nt)
              ) {
                var v = void 0;
                try {
                  v = m.getOutputAmount(f)[0];
                } catch (y) {
                  if (y.isInsufficientInputAmountError) continue;
                  throw y;
                }
                if (v.token.equals(j))
                  or(
                    c,
                    new e(
                      new Tr([].concat(i, [m]), o.currency, r),
                      o,
                      ct.EXACT_INPUT
                    ),
                    l,
                    Ar
                  );
                else if (b > 1 && n.length > 1) {
                  var x = n.slice(0, h).concat(n.slice(h + 1, n.length));
                  e.bestTradeExactIn(
                    x,
                    v,
                    r,
                    {
                      maxNumResults: l,
                      maxHops: b - 1
                    },
                    [].concat(i, [m]),
                    o,
                    c
                  );
                }
              }
            }
            return c;
          }),
          (e.bestTradeExactOut = function (n, t, r, a, i, o, c) {
            var s = void 0 === a ? {} : a,
              u = s.maxNumResults,
              l = void 0 === u ? 3 : u,
              d = s.maxHops,
              b = void 0 === d ? 3 : d;
            void 0 === i && (i = []),
              void 0 === o && (o = r),
              void 0 === c && (c = []),
              n.length > 0 || Object(vt.a)(!1),
              b > 0 || Object(vt.a)(!1),
              o === r || i.length > 0 || Object(vt.a)(!1);
            var p =
              r instanceof gr
                ? r.token.chainId
                : t instanceof lr
                ? t.chainId
                : void 0;
            void 0 === p && Object(vt.a)(!1);
            for (var f = Sr(r, p), j = Nr(t, p), h = 0; h < n.length; h++) {
              var m = n[h];
              if (
                (m.token0.equals(f.token) || m.token1.equals(f.token)) &&
                !m.reserve0.equalTo(Nt) &&
                !m.reserve1.equalTo(Nt)
              ) {
                var v = void 0;
                try {
                  v = m.getInputAmount(f)[0];
                } catch (y) {
                  if (y.isInsufficientReservesError) continue;
                  throw y;
                }
                if (v.token.equals(j))
                  or(
                    c,
                    new e(
                      new Tr([m].concat(i), t, o.currency),
                      o,
                      ct.EXACT_OUTPUT
                    ),
                    l,
                    Ar
                  );
                else if (b > 1 && n.length > 1) {
                  var x = n.slice(0, h).concat(n.slice(h + 1, n.length));
                  e.bestTradeExactOut(
                    x,
                    t,
                    v,
                    {
                      maxNumResults: l,
                      maxHops: b - 1
                    },
                    [m].concat(i),
                    o,
                    c
                  );
                }
              }
            }
            return c;
          }),
          e
        );
      })();

      function Lr(e) {
        return "0x" + e.raw.toString(16);
      }
      var Ur,
        Br,
        Pr,
        Mr,
        _r = "0x0",
        Dr = (function () {
          function e() {}
          return (
            (e.swapCallParameters = function (e, n) {
              var t = e.inputAmount.currency === ur,
                r = e.outputAmount.currency === ur;
              t && r && Object(vt.a)(!1), n.ttl > 0 || Object(vt.a)(!1);
              var a,
                i,
                o,
                c = rr(n.recipient),
                s = Lr(e.maximumAmountIn(n.allowedSlippage)),
                u = Lr(e.minimumAmountOut(n.allowedSlippage)),
                l = e.route.path.map(function (e) {
                  return e.address;
                }),
                d =
                  "0x" +
                  (Math.floor(new Date().getTime() / 1e3) + n.ttl).toString(16),
                b = Boolean(n.feeOnTransfer);
              switch (e.tradeType) {
                case ct.EXACT_INPUT:
                  t
                    ? ((a = b
                        ? "swapExactETHForTokensSupportingFeeOnTransferTokens"
                        : "swapExactETHForTokens"),
                      (i = [u, l, c, d]),
                      (o = s))
                    : r
                    ? ((a = b
                        ? "swapExactTokensForETHSupportingFeeOnTransferTokens"
                        : "swapExactTokensForETH"),
                      (i = [s, u, l, c, d]),
                      (o = _r))
                    : ((a = b
                        ? "swapExactTokensForTokensSupportingFeeOnTransferTokens"
                        : "swapExactTokensForTokens"),
                      (i = [s, u, l, c, d]),
                      (o = _r));
                  break;
                case ct.EXACT_OUTPUT:
                  b && Object(vt.a)(!1),
                    t
                      ? ((a = "swapETHForExactTokens"),
                        (i = [u, l, c, d]),
                        (o = s))
                      : r
                      ? ((a = "swapTokensForExactETH"),
                        (i = [u, s, l, c, d]),
                        (o = _r))
                      : ((a = "swapTokensForExactTokens"),
                        (i = [u, s, l, c, d]),
                        (o = _r));
              }
              return {
                methodName: a,
                args: i,
                value: o
              };
            }),
            e
          );
        })(),
        Fr =
          (((Ur = {})[ot.MAINNET] = {
            "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A": 9
          }),
          t(261)),
        zr = t(262),
        qr = t(119),
        Vr = t(123),
        Hr = t(174),
        Yr = new qr.b(Vr),
        Wr = (new qr.b(Hr), Yr),
        Zr = t(204),
        Qr = "0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b",
        Kr = (t(263), t(264)),
        Gr = t(205),
        Jr =
          ((Br = {}),
          Object(ge.a)(
            Br,
            ot.MAINNET,
            "0xC50F4c1E81c873B2204D7eFf7069Ffec6Fbe136D"
          ),
          Object(ge.a)(
            Br,
            ot.BSCTESTNET,
            "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"
          ),
          Br),
        Xr = t(175),
        $r = t(176),
        ea =
          ((Pr = {}),
          Object(ge.a)(
            Pr,
            ot.MAINNET,
            "0xC07d4604400139108BbdB3076636365A385879eF"
          ),
          Object(ge.a)(
            Pr,
            ot.BSCTESTNET,
            "0x7bd6b6e3c8f9c5C987e47374268599d09F9e16Fd"
          ),
          Pr),
        na = (new qr.b($r), new qr.b(Xr), t(479)),
        ta = t(23),
        ra = t(265),
        aa = t(26),
        ia = t(173),
        oa = t(266),
        ca = t(267),
        sa = t(268),
        ua = t(269),
        la = t(10),
        da = t(11),
        ba = t(13),
        pa = t(14),
        fa = t(270),
        ja =
          ((Mr = {}),
          Object(ge.a)(Mr, ot.MAINNET, void 0),
          Object(ge.a)(Mr, ot.BSCTESTNET, "Bsc-testnet"),
          Mr),
        ha = (function (e) {
          Object(ba.a)(r, e);
          var n = Object(pa.a)(r);

          function r() {
            return Object(la.a)(this, r), n.apply(this, arguments);
          }
          return (
            Object(da.a)(r, [
              {
                key: "activate",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n,
                        r,
                        a,
                        i,
                        o,
                        c,
                        s,
                        u,
                        l,
                        d,
                        b = this;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.fortmatic) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  t.e(1).then(t.t.bind(null, 484, 7))
                                );
                              case 3:
                                if (
                                  ((n = e.sent),
                                  (r = n.default),
                                  (i = (a = this).apiKey),
                                  !((o = a.chainId) in ja))
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                (this.fortmatic = new r(i, ja[o])),
                                  (e.next = 11);
                                break;
                              case 10:
                                throw new Error(
                                  "Unsupported network ID: ".concat(o)
                                );
                              case 11:
                                return (
                                  (c = this.fortmatic.getProvider()),
                                  (s = new Promise(function (e) {
                                    var n = setInterval(function () {
                                      c.overlayReady &&
                                        (clearInterval(n),
                                        b.emit("OVERLAY_READY"),
                                        e());
                                    }, 200);
                                  })),
                                  (e.next = 15),
                                  Promise.all([
                                    c.enable().then(function (e) {
                                      return e[0];
                                    }),
                                    s
                                  ])
                                );
                              case 15:
                                return (
                                  (u = e.sent),
                                  (l = Object(Ln.a)(u, 1)),
                                  (d = l[0]),
                                  e.abrupt("return", {
                                    provider: this.fortmatic.getProvider(),
                                    chainId: this.chainId,
                                    account: d
                                  })
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]),
            r
          );
        })(fa.a),
        ma = t(126),
        va = t(97),
        xa = t(61),
        ya = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t(e, r, a) {
            var i;
            return (
              Object(la.a)(this, t),
              ((i = n.call(this, e)).code = r),
              (i.data = a),
              i
            );
          }
          return t;
        })(Object(va.a)(Error)),
        Oa = function e(n, t, r) {
          var a = this;
          Object(la.a)(this, e),
            (this.isMetaMask = !1),
            (this.chainId = void 0),
            (this.url = void 0),
            (this.host = void 0),
            (this.path = void 0),
            (this.batchWaitTimeMs = void 0),
            (this.nextId = 1),
            (this.batchTimeoutId = null),
            (this.batch = []),
            (this.clearBatch = Object(pt.a)(
              bt.a.mark(function e() {
                var n, t, r, i, o, c, s, u, l, d, b, p, f, j;
                return bt.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.debug("Clearing batch", a.batch),
                            (n = a.batch),
                            (a.batch = []),
                            (a.batchTimeoutId = null),
                            (e.prev = 4),
                            (e.next = 7),
                            fetch(a.url, {
                              method: "POST",
                              headers: {
                                "content-type": "application/json",
                                accept: "application/json"
                              },
                              body: JSON.stringify(
                                n.map(function (e) {
                                  return e.request;
                                })
                              )
                            })
                          );
                        case 7:
                          (t = e.sent), (e.next = 14);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(4)),
                            n.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to send batch call"));
                            }),
                            e.abrupt("return")
                          );
                        case 14:
                          if (t.ok) {
                            e.next = 17;
                            break;
                          }
                          return (
                            n.forEach(function (e) {
                              return (0,
                              e.reject)(new ya("".concat(t.status, ": ").concat(t.statusText), -32e3));
                            }),
                            e.abrupt("return")
                          );
                        case 17:
                          return (e.prev = 17), (e.next = 20), t.json();
                        case 20:
                          (r = e.sent), (e.next = 27);
                          break;
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(17)),
                            n.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to parse JSON response"));
                            }),
                            e.abrupt("return")
                          );
                        case 27:
                          (i = n.reduce(function (e, n) {
                            return (e[n.request.id] = n), e;
                          }, {})),
                            (o = Object(ma.a)(r));
                          try {
                            for (o.s(); !(c = o.n()).done; )
                              (s = c.value),
                                (u = i[s.id]),
                                (l = u.resolve),
                                (d = u.reject),
                                (b = u.request.method),
                                l &&
                                  ("error" in s
                                    ? d(
                                        new ya(
                                          null === s ||
                                          void 0 === s ||
                                          null === (p = s.error) ||
                                          void 0 === p
                                            ? void 0
                                            : p.message,
                                          null === s ||
                                          void 0 === s ||
                                          null === (f = s.error) ||
                                          void 0 === f
                                            ? void 0
                                            : f.code,
                                          null === s ||
                                          void 0 === s ||
                                          null === (j = s.error) ||
                                          void 0 === j
                                            ? void 0
                                            : j.data
                                        )
                                      )
                                    : "result" in s
                                    ? l(s.result)
                                    : d(
                                        new ya(
                                          "Received unexpected JSON-RPC response to ".concat(
                                            b,
                                            " request."
                                          ),
                                          -32e3,
                                          s
                                        )
                                      ));
                          } catch (h) {
                            o.e(h);
                          } finally {
                            o.f();
                          }
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [4, 10],
                    [17, 23]
                  ]
                );
              })
            )),
            (this.sendAsync = function (e, n) {
              a.request(e.method, e.params)
                .then(function (t) {
                  return n(null, {
                    jsonrpc: "2.0",
                    id: e.id,
                    result: t
                  });
                })
                .catch(function (e) {
                  return n(e, null);
                });
            }),
            (this.request = (function () {
              var e = Object(pt.a)(
                bt.a.mark(function e(n, t) {
                  var r, i;
                  return bt.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("string" === typeof n) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            a.request(n.method, n.params)
                          );
                        case 2:
                          if ("eth_chainId" !== n) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            "0x".concat(a.chainId.toString(16))
                          );
                        case 4:
                          return (
                            (i = new Promise(function (e, r) {
                              a.batch.push({
                                request: {
                                  jsonrpc: "2.0",
                                  id: a.nextId++,
                                  method: n,
                                  params: t
                                },
                                resolve: e,
                                reject: r
                              });
                            })),
                            (a.batchTimeoutId =
                              null !== (r = a.batchTimeoutId) && void 0 !== r
                                ? r
                                : setTimeout(a.clearBatch, a.batchWaitTimeMs)),
                            e.abrupt("return", i)
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n, t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.chainId = n),
            (this.url = t);
          var i = new URL(t);
          (this.host = i.host),
            (this.path = i.pathname),
            (this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50);
        },
        ga = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t(e) {
            var r,
              a = e.urls,
              i = e.defaultChainId;
            return (
              Object(la.a)(this, t),
              Object(vt.a)(
                i || 1 === Object.keys(a).length,
                "defaultChainId is a required argument with >1 url"
              ),
              ((r = n.call(this, {
                supportedChainIds: Object.keys(a).map(function (e) {
                  return Number(e);
                })
              })).providers = void 0),
              (r.currentChainId = void 0),
              (r.currentChainId = i || Number(Object.keys(a)[0])),
              (r.providers = Object.keys(a).reduce(function (e, n) {
                return (e[Number(n)] = new Oa(Number(n), a[Number(n)])), e;
              }, {})),
              r
            );
          }
          return (
            Object(da.a)(t, [
              {
                key: "activate",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", {
                                  provider: this.providers[this.currentChainId],
                                  chainId: this.currentChainId,
                                  account: null
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getProvider",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.providers[this.currentChainId]
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getChainId",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", this.currentChainId);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getAccount",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", null);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "deactivate",
                value: function () {}
              },
              {
                key: "provider",
                get: function () {
                  return this.providers[this.currentChainId];
                }
              }
            ]),
            t
          );
        })(xa.a),
        Ca = t(21),
        wa = t(60);

      function ka(e) {
        return e.hasOwnProperty("result") ? e.result : e;
      }
      var Ta = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t() {
            var e;
            return (
              Object(la.a)(this, t),
              ((e = n.call(this)).name = e.constructor.name),
              (e.message = "No BSC provider was found on window.BinanceChain."),
              e
            );
          }
          return t;
        })(Object(va.a)(Error)),
        Ia = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t() {
            var e;
            return (
              Object(la.a)(this, t),
              ((e = n.call(this)).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return t;
        })(Object(va.a)(Error)),
        Ea = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t(e) {
            var r;
            return (
              Object(la.a)(this, t),
              ((r = n.call(this, e)).handleNetworkChanged =
                r.handleNetworkChanged.bind(Object(Ca.a)(r))),
              (r.handleChainChanged = r.handleChainChanged.bind(
                Object(Ca.a)(r)
              )),
              (r.handleAccountsChanged = r.handleAccountsChanged.bind(
                Object(Ca.a)(r)
              )),
              (r.handleClose = r.handleClose.bind(Object(Ca.a)(r))),
              r
            );
          }
          return (
            Object(da.a)(t, [
              {
                key: "handleChainChanged",
                value: function (e) {
                  this.emitUpdate({
                    chainId: e,
                    provider: window.BinanceChain
                  });
                }
              },
              {
                key: "handleAccountsChanged",
                value: function (e) {
                  0 === e.length
                    ? this.emitDeactivate()
                    : this.emitUpdate({
                        account: e[0]
                      });
                }
              },
              {
                key: "handleClose",
                value: function () {
                  this.emitDeactivate();
                }
              },
              {
                key: "handleNetworkChanged",
                value: function (e) {
                  this.emitUpdate({
                    chainId: e,
                    provider: window.BinanceChain
                  });
                }
              },
              {
                key: "activate",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.BinanceChain) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Ta();
                              case 2:
                                return (
                                  window.BinanceChain.on &&
                                    (window.BinanceChain.on(
                                      "chainChanged",
                                      this.handleChainChanged
                                    ),
                                    window.BinanceChain.on(
                                      "accountsChanged",
                                      this.handleAccountsChanged
                                    ),
                                    window.BinanceChain.on(
                                      "close",
                                      this.handleClose
                                    ),
                                    window.BinanceChain.on(
                                      "networkChanged",
                                      this.handleNetworkChanged
                                    )),
                                  window.BinanceChain.isMetaMask &&
                                    (window.BinanceChain.autoRefreshOnNetworkChange =
                                      !1),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  window.BinanceChain.send(
                                    "eth_requestAccounts"
                                  ).then(function (e) {
                                    return ka(e)[0];
                                  })
                                );
                              case 7:
                                (n = e.sent), (e.next = 15);
                                break;
                              case 10:
                                if (
                                  ((e.prev = 10),
                                  (e.t0 = e.catch(4)),
                                  4001 !== e.t0.code)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new Ia();
                              case 14:
                                Object(wa.a)(
                                  !1,
                                  "eth_requestAccounts was unsuccessful, falling back to enable"
                                );
                              case 15:
                                if (n) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 18),
                                  window.BinanceChain.enable().then(function (
                                    e
                                  ) {
                                    return e && ka(e)[0];
                                  })
                                );
                              case 18:
                                n = e.sent;
                              case 19:
                                return e.abrupt(
                                  "return",
                                  Object(l.a)(
                                    {
                                      provider: window.BinanceChain
                                    },
                                    n
                                      ? {
                                          account: n
                                        }
                                      : {}
                                  )
                                );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 10]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getProvider",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", window.BinanceChain);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getChainId",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.BinanceChain) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Ta();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.BinanceChain.send("eth_chainId").then(
                                    ka
                                  )
                                );
                              case 5:
                                (n = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  Object(wa.a)(
                                    !1,
                                    "eth_chainId was unsuccessful, falling back to net_version"
                                  );
                              case 11:
                                if (n) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.BinanceChain.send("net_version").then(
                                    ka
                                  )
                                );
                              case 15:
                                (n = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  Object(wa.a)(
                                    !1,
                                    "net_version was unsuccessful, falling back to net version v2"
                                  );
                              case 21:
                                if (!n)
                                  try {
                                    n = ka(
                                      window.BinanceChain.send({
                                        method: "net_version"
                                      })
                                    );
                                  } catch (t) {
                                    Object(wa.a)(
                                      !1,
                                      "net_version v2 was unsuccessful, falling back to manual matches and static properties"
                                    );
                                  }
                                return (
                                  n ||
                                    (n = window.BinanceChain.isDapper
                                      ? ka(
                                          window.BinanceChain.cachedResults
                                            .net_version
                                        )
                                      : window.BinanceChain.chainId ||
                                        window.BinanceChain.netVersion ||
                                        window.BinanceChain.networkVersion ||
                                        window.BinanceChain._chainId),
                                  e.abrupt("return", n)
                                );
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18]
                        ]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "getAccount",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.BinanceChain) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Ta();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.BinanceChain.send("eth_accounts").then(
                                    function (e) {
                                      return ka(e)[0];
                                    }
                                  )
                                );
                              case 5:
                                (n = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  Object(wa.a)(
                                    !1,
                                    "eth_accounts was unsuccessful, falling back to enable"
                                  );
                              case 11:
                                if (n) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.BinanceChain.enable().then(function (
                                    e
                                  ) {
                                    return ka(e)[0];
                                  })
                                );
                              case 15:
                                (n = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  Object(wa.a)(
                                    !1,
                                    "enable was unsuccessful, falling back to eth_accounts v2"
                                  );
                              case 21:
                                return (
                                  n ||
                                    (n = ka(
                                      window.BinanceChain.send({
                                        method: "eth_accounts"
                                      })
                                    )[0]),
                                  e.abrupt("return", n)
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18]
                        ]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "deactivate",
                value: function () {
                  window.BinanceChain &&
                    window.BinanceChain.removeListener &&
                    (window.BinanceChain.removeListener(
                      "chainChanged",
                      this.handleChainChanged
                    ),
                    window.BinanceChain.removeListener(
                      "accountsChanged",
                      this.handleAccountsChanged
                    ),
                    window.BinanceChain.removeListener(
                      "close",
                      this.handleClose
                    ),
                    window.BinanceChain.removeListener(
                      "networkChanged",
                      this.handleNetworkChanged
                    ));
                }
              },
              {
                key: "isAuthorized",
                value: (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.BinanceChain) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.BinanceChain.send("eth_accounts").then(
                                    function (e) {
                                      return ka(e).length > 0;
                                    }
                                  )
                                );
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt("return", !1)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]),
            t
          );
        })(xa.a),
        Aa = "https://bsc-dataseed1.defibit.io",
        Sa = Object({
          NODE_ENV: "production",
          PUBLIC_URL: ".",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_CHAIN_ID: "56",
          REACT_APP_GTAG: "GTM-TLF66T4",
          REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io"
        }).REACT_APP_FORTMATIC_KEY,
        Na = Object({
          NODE_ENV: "production",
          PUBLIC_URL: ".",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_CHAIN_ID: "56",
          REACT_APP_GTAG: "GTM-TLF66T4",
          REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io"
        }).REACT_APP_PORTIS_ID,
        Ra = parseInt(null !== "56" ? "56" : "1");
      var La,
        Ua = new ga({
          urls: Object(ge.a)({}, Ra, Aa)
        });
      var Ba,
        Pa = new oa.a({
          supportedChainIds: [56, 97]
        }),
        Ma =
          (new Ea({
            supportedChainIds: [56]
          }),
          new ca.a({
            rpc: {
              1: Aa
            },
            bridge: "https://bridge.walletconnect.org",
            qrcode: !0,
            pollingInterval: 15e3
          })),
        _a =
          (new ha({
            apiKey: null !== Sa && void 0 !== Sa ? Sa : "",
            chainId: 1
          }),
          new ua.a({
            dAppId: null !== Na && void 0 !== Na ? Na : "",
            networks: [1]
          }),
          new sa.a({
            url: Aa,
            appName: "Uniswap",
            appLogoUrl:
              "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
          }),
          "0x7bd6b6e3c8f9c5C987e47374268599d09F9e16Fd"),
        Da = new lr(
          ot.MAINNET,
          "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
          18,
          "DAI",
          "Dai Stablecoin"
        ),
        Fa = new lr(
          ot.MAINNET,
          "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          18,
          "BUSD",
          "Binance USD"
        ),
        za = new lr(
          ot.MAINNET,
          "0x55d398326f99059ff775485246999027b3197955",
          18,
          "USDT",
          "Tether USD"
        ),
        qa = new lr(
          ot.MAINNET,
          "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
          18,
          "EOS",
          "EOS Token"
        ),
        Va = new lr(
          ot.MAINNET,
          "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
          18,
          "DOT",
          "Polkadot Token"
        ),
        Ha = new lr(
          ot.MAINNET,
          "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          18,
          "ETH",
          "Ethereum Token"
        ),
        Ya =
          ((Ba = {}),
          Object(ge.a)(Ba, ot.MAINNET, [fr[ot.MAINNET]]),
          Object(ge.a)(Ba, ot.BSCTESTNET, [fr[ot.BSCTESTNET]]),
          Ba),
        Wa = Object(l.a)(
          Object(l.a)({}, Ya),
          {},
          Object(ge.a)(
            {},
            ot.MAINNET,
            [].concat(Object(aa.a)(Ya[ot.MAINNET]), [Da, Fa, za, qa, Va])
          )
        ),
        Za = Object(ge.a)(
          {},
          ot.MAINNET,
          Object(ge.a)({}, Ha.address, [Da, fr[ot.MAINNET]])
        ),
        Qa = Object(l.a)(
          Object(l.a)({}, Ya),
          {},
          Object(ge.a)(
            {},
            ot.MAINNET,
            [].concat(Object(aa.a)(Ya[ot.MAINNET]), [Da, Fa, za])
          )
        ),
        Ka = Object(l.a)(
          Object(l.a)({}, Ya),
          {},
          Object(ge.a)(
            {},
            ot.MAINNET,
            [].concat(Object(aa.a)(Ya[ot.MAINNET]), [Da, Fa, za])
          )
        ),
        Ga = Object(ge.a)({}, ot.MAINNET, [
          [
            new lr(
              ot.MAINNET,
              "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
              18,
              "CAKE",
              "PancakeSwap Token"
            ),
            new lr(
              ot.MAINNET,
              "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
              18,
              "WBNB",
              "Wrapped BNB"
            )
          ],
          [Fa, za],
          [Da, za]
        ]),
        Ja = "NETWORK",
        Xa = 80,
        $a = 1200,
        ei = new Er(mt.a.BigInt(1), mt.a.BigInt(1e4)),
        ni = mt.a.BigInt(1e4),
        ti = new Er(mt.a.BigInt(100), ni),
        ri = new Er(mt.a.BigInt(300), ni),
        ai = new Er(mt.a.BigInt(500), ni),
        ii = new Er(mt.a.BigInt(1e3), ni),
        oi = new Er(mt.a.BigInt(1500), ni),
        ci = mt.a.exponentiate(mt.a.BigInt(10), mt.a.BigInt(16)),
        si = new Er(mt.a.BigInt(75), mt.a.BigInt(1e4));

      function ui(e) {
        try {
          return Object(xt.getAddress)(e);
        } catch (n) {
          return !1;
        }
      }
      var li = {
        56: "BSC",
        97: "Bsc-testnet"
      };

      function di(e, n, t) {
        var r = "https://".concat(li[e] || li[56], "bscscan.com");
        switch (t) {
          case "transaction":
            return "".concat(r, "/tx/").concat(n);
          case "token":
            return "".concat(r, "/token/").concat(n);
          case "address":
          default:
            return "".concat(r, "/address/").concat(n);
        }
      }

      function bi(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          t = ui(e);
        if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return ""
          .concat(t.substring(0, n + 2), "...")
          .concat(t.substring(42 - n));
      }

      function pi(e) {
        return e.mul(ta.a.from(1e4).add(ta.a.from(1e3))).div(ta.a.from(1e4));
      }

      function fi(e, n) {
        if (n < 0 || n > 1e4)
          throw Error("Unexpected slippage value: ".concat(n));
        return [
          mt.a.divide(
            mt.a.multiply(e.raw, mt.a.BigInt(1e4 - n)),
            mt.a.BigInt(1e4)
          ),
          mt.a.divide(
            mt.a.multiply(e.raw, mt.a.BigInt(1e4 + n)),
            mt.a.BigInt(1e4)
          )
        ];
      }

      function ji(e, n, t, r) {
        if (!ui(e) || e === na.a)
          throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return new It.a(
          e,
          n,
          (function (e, n) {
            return n
              ? (function (e, n) {
                  return e.getSigner(n).connectUnchecked();
                })(e, n)
              : e;
          })(t, r)
        );
      }

      function hi(e, n, t) {
        return ji(_a, ra.a, n, t);
      }

      function mi(e, n) {
        var t;
        return (
          n === ur ||
          Boolean(
            n instanceof lr &&
              (null === (t = e[n.chainId]) || void 0 === t
                ? void 0
                : t[n.address])
          )
        );
      }
      var vi = t(58),
        xi = t(127);

      function yi() {
        var e = Object(vi.c)(),
          n = Object(vi.c)(Ja);
        return e.active ? e : n;
      }

      function Oi(e, n) {
        var t =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = yi(),
          i = r.library,
          o = r.account;
        return Object(a.useMemo)(
          function () {
            if (!e || !n || !i) return null;
            try {
              return ji(e, n, i, t && o ? o : void 0);
            } catch (r) {
              return console.error("Failed to get contract", r), null;
            }
          },
          [e, n, i, t, o]
        );
      }

      function gi() {
        var e = yi().chainId;
        return Oi(e && ea[e], $r, !1);
      }

      function Ci(e, n) {
        return Oi(e, Xr, n);
      }

      function wi(e, n) {
        return Oi(e, Vr, n);
      }

      function ki(e) {
        var n = yi().chainId;
        if (n)
          switch (n) {
            case ot.MAINNET:
            case ot.BSCTESTNET:
          }
        return Oi(undefined, Fr, e);
      }

      function Ti(e, n) {
        return Oi(e, zr, n);
      }

      function Ii() {
        var e = yi().chainId;
        return Oi(e && Jr[e], Gr, !1);
      }
      var Ei = "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        Ai = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        Si = "0xf45cd219aef8618a92baa7ad848364a158a24f33",
        Ni = function () {
          var e = Object(a.useState)(0),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            r = n[1],
            i = Ii();
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n, t, a, o, c, s, u, l, d, b, p, f, j;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !i)) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (n = Ai),
                                  (t = Si),
                                  (a = [
                                    [
                                      Ei,
                                      Wr.encodeFunctionData("balanceOf", [t])
                                    ],
                                    [n, Wr.encodeFunctionData("balanceOf", [t])]
                                  ]),
                                  (e.next = 6),
                                  i.aggregate(a)
                                );
                              case 6:
                                (o = e.sent),
                                  (c = Object(Ln.a)(o, 2)),
                                  c[0],
                                  (s = c[1]),
                                  (u = s.map(function (e) {
                                    return Wr.decodeFunctionResult(
                                      "balanceOf",
                                      e
                                    );
                                  })),
                                  (l = Object(Ln.a)(u, 2)),
                                  (d = l[0]),
                                  (b = l[1]),
                                  (p = new jt.a(d)),
                                  (f = new jt.a(b)),
                                  (j = f.div(p).toNumber()),
                                  r(j);
                              case 15:
                                e.next = 20;
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Unable to fetch price data:",
                                    e.t0
                                  );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [i]
            ),
            t
          );
        },
        Ri = "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        Li = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        Ui = "0x7213a321f1855cf1779f42c0cd85d3d95291d34c",
        Bi = function () {
          var e = Object(a.useState)(0),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            r = n[1],
            i = Ii();
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n, t, a, o, c, s, u, l, d, b, p, f, j;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !i)) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (n = Li),
                                  (t = Ui),
                                  (a = [
                                    [
                                      Ri,
                                      Wr.encodeFunctionData("balanceOf", [t])
                                    ],
                                    [n, Wr.encodeFunctionData("balanceOf", [t])]
                                  ]),
                                  (e.next = 6),
                                  i.aggregate(a)
                                );
                              case 6:
                                (o = e.sent),
                                  (c = Object(Ln.a)(o, 2)),
                                  c[0],
                                  (s = c[1]),
                                  (u = s.map(function (e) {
                                    return Wr.decodeFunctionResult(
                                      "balanceOf",
                                      e
                                    );
                                  })),
                                  (l = Object(Ln.a)(u, 2)),
                                  (d = l[0]),
                                  (b = l[1]),
                                  (p = new jt.a(d)),
                                  (f = new jt.a(b)),
                                  (j = f.div(p).toNumber()),
                                  r(j);
                              case 15:
                                e.next = 20;
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Unable to fetch price data:",
                                    e.t0
                                  );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [i]
            ),
            t
          );
        },
        Pi = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        Mi = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        _i = "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
        Di = function () {
          var e = Object(a.useState)(0),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            r = n[1],
            i = Ii();
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n, t, a, o, c, s, u, l, d, b, p, f, j;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !i)) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (n = Mi),
                                  (t = _i),
                                  (a = [
                                    [
                                      Pi,
                                      Wr.encodeFunctionData("balanceOf", [t])
                                    ],
                                    [n, Wr.encodeFunctionData("balanceOf", [t])]
                                  ]),
                                  (e.next = 6),
                                  i.aggregate(a)
                                );
                              case 6:
                                (o = e.sent),
                                  (c = Object(Ln.a)(o, 2)),
                                  c[0],
                                  (s = c[1]),
                                  (u = s.map(function (e) {
                                    return Wr.decodeFunctionResult(
                                      "balanceOf",
                                      e
                                    );
                                  })),
                                  (l = Object(Ln.a)(u, 2)),
                                  (d = l[0]),
                                  (b = l[1]),
                                  (p = new jt.a(d)),
                                  (f = new jt.a(b)),
                                  (j = f.div(p).toNumber()),
                                  r(j);
                              case 15:
                                e.next = 20;
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Unable to fetch price data:",
                                    e.t0
                                  );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [i]
            ),
            t
          );
        };

      function Fi() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"
        ]);
        return (
          (Fi = function () {
            return e;
          }),
          e
        );
      }
      var zi = u.default.a(Fi()),
        qi = function (e) {
          var n = e.cakePriceUsd,
            t = Ni(),
            a = Bi(),
            i = Di();
          return n
            ? Object(r.jsxs)(r.Fragment, {
                children: [
                  Object(r.jsxs)(zi, {
                    href: "#",
                    children: [
                      Object(r.jsx)(Ve, {
                        mr: "4px"
                      }),
                      Object(r.jsx)(g, {
                        bold: !0,
                        mt: "15px",
                        mr: "8px",
                        children: "Exchange"
                      })
                    ]
                  }),
                  Object(r.jsxs)(zi, {
                    href: "#",
                    children: [
                      Object(r.jsx)(We, {
                        mr: "4px"
                      }),
                      Object(r.jsx)(g, {
                        bold: !0,
                        mt: "15px",
                        mr: "8px",
                        children: "Launchpad"
                      })
                    ]
                  }),
                  Object(r.jsxs)(zi, {
                    href: "https://basecoindex.gitbook.io/basedex-whitepaper/",
                    children: [
                      Object(r.jsx)(qe, {
                        mr: "4px"
                      }),
                      Object(r.jsx)(g, {
                        bold: !0,
                        mt: "15px",
                        mr: "8px",
                        children: "Docs"
                      })
                    ]
                  })
                ]
              })
            : Object(r.jsx)(g, {});
        };

      function Vi() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  order: 2;\n  margin-bottom: 32px;\n  ",
          " {\n    order: 1;\n    margin-bottom: 0;\n    flex-direction: row;\n  }\n\n  .link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    min-height: 40px;\n    padding: 8px 40px;\n    font-weight: 600;\n    transition: background-color 0.2s;\n    color: ",
          ";\n    :hover {\n      background-color: ",
          ";\n    }\n    ",
          " {\n      height: 100%;\n      padding: 0 12px;\n    }\n  }\n"
        ]);
        return (
          (Vi = function () {
            return e;
          }),
          e
        );
      }
      function Hi() {
        var e = Object(s.a)([
          "\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background-color: ",
          ";\n  top: 0;\n  right: ",
          ";\n  width: 100%;\n  max-width: 320px;\n  height: 100vh;\n  padding: 32px 0;\n  overflow-y: auto;\n  transition: right 0.4s;\n  z-index: 11;\n  ",
          " {\n    position: unset;\n    max-width: unset;\n    overflow-y: unset;\n    z-index: unset;\n    padding: 0;\n    justify-content: space-between;\n    flex-direction: row;\n    height: 100%;\n  }\n"
        ]);
        return (
          (Hi = function () {
            return e;
          }),
          e
        );
      }
      var Yi = u.default.div(
          Hi(),
          function (e) {
            return e.theme.nav.background;
          },
          function (e) {
            return e.show ? 0 : "-100%";
          },
          function (e) {
            return e.theme.mediaQueries.nav;
          }
        ),
        Wi = u.default.div(
          Vi(),
          function (e) {
            return e.theme.mediaQueries.nav;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.nav.hover;
          },
          function (e) {
            return e.theme.mediaQueries.nav;
          }
        ),
        Zi = function (e) {
          e.links;
          var n = e.show,
            t = e.account,
            a = e.closeNav,
            i = e.login,
            o = e.logout,
            c = e.isDark,
            s = e.toggleTheme,
            u = (e.langs, e.setLang, e.currentLang, e.cakePriceUsd);
          return Object(r.jsxs)(Yi, {
            show: n,
            children: [
              Object(r.jsx)(Zn, {
                onClick: a,
                "aria-label": "Close the menu",
                style: {
                  position: "absolute",
                  top: "5px",
                  right: "5px"
                },
                children: Object(r.jsx)(Ye, {})
              }),
              Object(r.jsx)(Wi, {
                children: Object(r.jsx)(qi, {
                  cakePriceUsd: u
                })
              }),
              Object(r.jsx)(lt, {
                isDark: c,
                toggleTheme: s,
                account: t,
                closeNav: a,
                login: i,
                logout: o
              })
            ]
          });
        };

      function Qi() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"
        ]);
        return (
          (Qi = function () {
            return e;
          }),
          e
        );
      }
      function Ki() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 18px;\n  width: 100%;\n  height: 50px;\n  background-color: ",
          ";\n  ",
          " {\n    justify-content: normal;\n  }\n"
        ]);
        return (
          (Ki = function () {
            return e;
          }),
          e
        );
      }
      var Gi = u.default.nav(
          Ki(),
          function (e) {
            return e.theme.nav.background;
          },
          function (e) {
            return e.theme.mediaQueries.nav;
          }
        ),
        Ji =
          (u.default.a(Qi()),
          function (e) {
            var n = e.links,
              t = e.account,
              i = e.login,
              o = e.logout,
              c = e.isDark,
              s = e.toggleTheme,
              u = e.langs,
              l = e.setLang,
              d = e.currentLang,
              b = e.cakePriceUsd,
              p = Object(a.useState)(!1),
              f = Object(Ln.a)(p, 2),
              j = f[0],
              h = f[1];
            return Object(r.jsxs)(Gi, {
              children: [
                Object(r.jsx)(qn.b, {
                  to: "/",
                  "aria-label": "Pancake home page",
                  style: {
                    marginRight: "16px"
                  },
                  children: Object(r.jsx)(Vn, {
                    isDark: c,
                    width: "160px",
                    height: "100%"
                  })
                }),
                Object(r.jsx)(Zn, {
                  "aria-label": "Open mobile menu",
                  onClick: function () {
                    return h(function (e) {
                      return !e;
                    });
                  },
                  children: Object(r.jsx)(Ze, {})
                }),
                Object(r.jsx)(Zi, {
                  links: n,
                  show: j,
                  account: t,
                  closeNav: function () {
                    return h(!1);
                  },
                  login: i,
                  logout: o,
                  isDark: c,
                  toggleTheme: s,
                  langs: u,
                  setLang: l,
                  currentLang: d,
                  cakePriceUsd: b
                }),
                Object(r.jsx)(Pn, {
                  show: j,
                  onClick: function () {
                    return h(!1);
                  },
                  role: "presentation"
                })
              ]
            });
          });

      function Xi() {
        var e = Object(s.a)([
          '\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role="button"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: \'Kanit\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n'
        ]);
        return (
          (Xi = function () {
            return e;
          }),
          e
        );
      }
      var $i,
        eo,
        no = Object(u.createGlobalStyle)(Xi()),
        to = {
          failure: "#ED4B9E",
          primary: "#2950aa",
          primaryBright: "#2950aa",
          primaryDark: "#2950aa",
          secondary: "#0e0d6b",
          success: "#31D0AA",
          warning: "#FFB237"
        },
        ro = {
          binance: "#F0B90B"
        },
        ao = Object(l.a)(
          Object(l.a)(Object(l.a)({}, to), ro),
          {},
          {
            background: "#FAF9FA",
            backgroundDisabled: "#E9EAEB",
            contrast: "#191326",
            invertedContrast: "#FFFFFF",
            input: "#eeeaf4",
            tertiary: "#EFF4F5",
            text: "#0d0b85",
            textDisabled: "#BDC2C4",
            textSubtle: "#5fafed",
            borderColor: "#E9EAEB",
            card: "#FFFFFF"
          }
        ),
        io = Object(l.a)(
          Object(l.a)(Object(l.a)({}, to), ro),
          {},
          {
            secondary: "#5fafee",
            background: "#343135",
            backgroundDisabled: "#3c3742",
            contrast: "#FFFFFF",
            invertedContrast: "#191326",
            input: "#483f5a",
            primaryDark: "#0098A1",
            tertiary: "#353547",
            text: "#EAE2FC",
            textDisabled: "#666171",
            textSubtle: "#c9c4d4",
            borderColor: "#524B63",
            card: "#27262c"
          }
        ),
        oo = {
          background: ao.card
        },
        co = {
          background: io.card
        },
        so = U,
        uo = B,
        lo = P,
        bo = M,
        po = _,
        fo = D,
        jo = F,
        ho =
          (($i = {}),
          Object(ge.a)($i, so, {
            background: ao.primary,
            backgroundActive: ao.primaryDark,
            backgroundHover: ao.primaryBright,
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
            boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
            color: "#FFFFFF"
          }),
          Object(ge.a)($i, uo, {
            background: "transparent",
            backgroundActive: "transparent",
            backgroundHover: "transparent",
            border: "2px solid ".concat(ao.primary),
            borderColorHover: ao.primaryBright,
            boxShadow: "none",
            boxShadowActive: "none",
            color: ao.primary
          }),
          Object(ge.a)($i, lo, {
            background: ao.tertiary,
            backgroundActive: ao.tertiary,
            backgroundHover: ao.tertiary,
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "none",
            boxShadowActive: "none",
            color: ao.primary
          }),
          Object(ge.a)($i, bo, {
            background: "transparent",
            backgroundActive: "transparent",
            backgroundHover: ao.tertiary,
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "none",
            boxShadowActive: "none",
            color: ao.primary
          }),
          Object(ge.a)($i, po, {
            background: ao.failure,
            backgroundActive: "#D43285",
            backgroundHover: "#FF65B8",
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "none",
            boxShadowActive: "none",
            color: "#FFFFFF"
          }),
          Object(ge.a)($i, fo, {
            background: ao.textSubtle,
            backgroundActive: "".concat(ao.textSubtle, "D9"),
            backgroundHover: "".concat(ao.textSubtle, "B3"),
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "none",
            boxShadowActive: "none",
            color: "#FFFFFF"
          }),
          Object(ge.a)($i, jo, {
            background: ao.success,
            backgroundActive: "".concat(ao.success, "D9"),
            backgroundHover: "".concat(ao.success, "B3"),
            border: 0,
            borderColorHover: "currentColor",
            boxShadow: "none",
            boxShadowActive: "none",
            color: "#FFFFFF"
          }),
          $i),
        mo =
          ((eo = {}),
          Object(ge.a)(eo, so, Object(l.a)({}, ho.primary)),
          Object(ge.a)(eo, uo, Object(l.a)({}, ho.secondary)),
          Object(ge.a)(
            eo,
            lo,
            Object(l.a)(
              Object(l.a)({}, ho.tertiary),
              {},
              {
                background: io.tertiary,
                backgroundActive: io.tertiary,
                backgroundHover: io.tertiary,
                color: io.primary
              }
            )
          ),
          Object(ge.a)(
            eo,
            bo,
            Object(l.a)(
              Object(l.a)({}, ho.text),
              {},
              {
                backgroundHover: io.tertiary
              }
            )
          ),
          Object(ge.a)(eo, po, Object(l.a)({}, ho.danger)),
          Object(ge.a)(eo, fo, Object(l.a)({}, ho.subtle)),
          Object(ge.a)(eo, jo, Object(l.a)({}, ho.success)),
          eo),
        vo = ["370px", "576px", "852px", "968px", "1080px"],
        xo = {
          level1:
            "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
          active:
            "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
          success:
            "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
          warning:
            "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
          focus:
            "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
          inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)"
        },
        yo = {
          siteWidth: 1200,
          breakpoints: vo,
          mediaQueries: {
            xs: "@media screen and (min-width: ".concat(vo[0], ")"),
            sm: "@media screen and (min-width: ".concat(vo[1], ")"),
            md: "@media screen and (min-width: ".concat(vo[2], ")"),
            lg: "@media screen and (min-width: ".concat(vo[3], ")"),
            xl: "@media screen and (min-width: ".concat(vo[4], ")"),
            nav: "@media screen and (min-width: ".concat(vo[3], ")")
          },
          spacing: [0, 4, 8, 16, 24, 32, 48, 64],
          shadows: xo,
          radii: {
            small: "4px",
            default: "16px",
            card: "32px",
            circle: "50%"
          },
          zIndices: {
            dropdown: 10,
            modal: 100
          }
        },
        Oo = {
          background: ao.card,
          boxShadow:
            "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
          boxShadowActive: xo.active,
          boxShadowSuccess: xo.success,
          boxShadowWarning: xo.warning
        },
        go = {
          background: io.card,
          boxShadow:
            "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
          boxShadowActive: xo.active,
          boxShadowSuccess: xo.success,
          boxShadowWarning: xo.warning
        },
        Co = {
          handleBackground: ao.card
        },
        wo = {
          handleBackground: io.card
        },
        ko = {
          handleBackground: ao.card
        },
        To = {
          handleBackground: io.card
        },
        Io = {
          background: ao.card,
          hover: "#EEEAF4"
        },
        Eo = {
          background: io.card,
          hover: "#473d5d"
        },
        Ao = {
          background: ao.card
        },
        So = {
          background: io.card
        },
        No = Object(l.a)(
          Object(l.a)({}, yo),
          {},
          {
            isDark: !0,
            alert: co,
            button: mo,
            colors: io,
            card: go,
            toggle: To,
            nav: Eo,
            modal: So,
            radio: wo
          }
        ),
        Ro = Object(l.a)(
          Object(l.a)({}, yo),
          {},
          {
            isDark: !1,
            alert: oo,
            button: ho,
            colors: ao,
            card: Oo,
            toggle: ko,
            nav: Io,
            modal: Ao,
            radio: Co
          }
        );

      function Lo() {
        var e = Object(s.a)([
          "\n  body {\n    background-color: ",
          ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"
        ]);
        return (
          (Lo = function () {
            return e;
          }),
          e
        );
      }
      var Uo = Object(u.createGlobalStyle)(Lo(), function (e) {
          return e.theme.colors.background;
        }),
        Bo = t(38),
        Po = t(271),
        Mo = t(19),
        _o = Object(Mo.b)("app/updateBlockNumber"),
        Do = Object(Mo.b)("app/toggleWalletModal"),
        Fo = Object(Mo.b)("app/toggleSettingsMenu"),
        zo = Object(Mo.b)("app/addPopup"),
        qo = Object(Mo.b)("app/removePopup"),
        Vo = t(20);

      function Ho() {
        var e = yi().chainId;
        return Object(Vo.d)(function (n) {
          return n.application.blockNumber[null !== e && void 0 !== e ? e : -1];
        });
      }

      function Yo() {
        var e = Object(Vo.c)();
        return Object(a.useCallback)(
          function (n) {
            e(
              qo({
                key: n
              })
            );
          },
          [e]
        );
      }

      function Wo() {
        var e = Object(s.a)([
          "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
          ";\n  justify-items: ",
          ";\n"
        ]);
        return (
          (Wo = function () {
            return e;
          }),
          e
        );
      }

      function Zo() {
        var e = Object(s.a)(["\n  width: 100%;\n  align-items: center;\n"]);
        return (
          (Zo = function () {
            return e;
          }),
          e
        );
      }

      function Qo() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"
        ]);
        return (
          (Qo = function () {
            return e;
          }),
          e
        );
      }
      var Ko = u.default.div(Qo()),
        Go = Object(u.default)(Ko)(Zo()),
        Jo = u.default.div(
          Wo(),
          function (e) {
            var n = e.gap;
            return (
              ("sm" === n ? "8px" : "md" === n && "12px") ||
              ("lg" === n && "24px") ||
              n
            );
          },
          function (e) {
            var n = e.justify;
            return n && n;
          }
        ),
        Xo = Ko,
        $o = t(491),
        ec = t(96),
        nc = t(69),
        tc = t(22),
        rc = {
          pending: Object(Mo.b)("lists/fetchTokenList/pending"),
          fulfilled: Object(Mo.b)("lists/fetchTokenList/fulfilled"),
          rejected: Object(Mo.b)("lists/fetchTokenList/rejected")
        },
        ac = Object(Mo.b)("lists/acceptListUpdate"),
        ic = Object(Mo.b)("lists/addList"),
        oc = Object(Mo.b)("lists/removeList"),
        cc = Object(Mo.b)("lists/selectList"),
        sc = (Object(Mo.b)("lists/rejectVersionUpdate"), t(44)),
        uc = t(492);

      function lc() {
        var e = Object(s.a)(["\n  color: ", ";\n"]);
        return (
          (lc = function () {
            return e;
          }),
          e
        );
      }

      function dc() {
        var e = Object(s.a)([
          "\n  animation: 2s ",
          " linear infinite;\n  width: 16px;\n  height: 16px;\n"
        ]);
        return (
          (dc = function () {
            return e;
          }),
          e
        );
      }

      function bc() {
        var e = Object(s.a)([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"
        ]);
        return (
          (bc = function () {
            return e;
          }),
          e
        );
      }

      function pc() {
        var e = Object(s.a)([
          "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
          ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"
        ]);
        return (
          (pc = function () {
            return e;
          }),
          e
        );
      }

      function fc() {
        var e = Object(s.a)([
          "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
          ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"
        ]);
        return (
          (fc = function () {
            return e;
          }),
          e
        );
      }

      function jc() {
        var e = Object(s.a)([
          "\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
          ";\n  color: ",
          ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
          ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
          ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"
        ]);
        return (
          (jc = function () {
            return e;
          }),
          e
        );
      }

      function hc() {
        var e = Object(s.a)(["\n  cursor: pointer;\n"]);
        return (
          (hc = function () {
            return e;
          }),
          e
        );
      }

      function mc() {
        var e = Object(s.a)([
          "\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ",
          ";\n  #FFFFFFwidth: 100%;\n\n  :hover,\n  :focus {\n    background-color: ",
          ";\n  }\n\n  :active {\n    background-color: ",
          ";\n  }\n\n  :disabled {\n    background-color: ",
          ";\n    color: ",
          ";\n    cursor: auto;\n  }\n"
        ]);
        return (
          (mc = function () {
            return e;
          }),
          e
        );
      }
      u.default.button.attrs(function (e) {
        var n = e.warning,
          t = e.theme;
        return {
          backgroundColor: n ? t.colors.failure : t.colors.primary
        };
      })(
        mc(),
        function (e) {
          return e.backgroundColor;
        },
        function (e) {
          var n = e.backgroundColor;
          return Object(sc.a)(0.05, n);
        },
        function (e) {
          var n = e.backgroundColor;
          return Object(sc.a)(0.1, n);
        },
        function (e) {
          return e.theme.colors.invertedContrast;
        },
        function (e) {
          return e.theme.colors.textDisabled;
        }
      );
      var vc = Object(u.default)($o.a)(hc()),
        xc = u.default.button(
          jc(),
          function (e) {
            return e.disabled ? "default" : "pointer";
          },
          function (e) {
            var n = e.theme;
            return e.disabled ? n.colors.textSubtle : n.colors.primary;
          },
          function (e) {
            return e.disabled ? null : "underline";
          },
          function (e) {
            return e.disabled ? null : "underline";
          }
        ),
        yc = Object(u.default)(qn.b)(fc(), function (e) {
          return e.theme.colors.primary;
        }),
        Oc = u.default.a(pc(), function (e) {
          return e.theme.colors.primary;
        });

      function gc(e) {
        var n = e.target,
          t = void 0 === n ? "_blank" : n,
          i = e.href,
          o = e.rel,
          c = void 0 === o ? "noopener noreferrer" : o,
          s = Object(N.a)(e, ["target", "href", "rel"]),
          u = Object(a.useCallback)(
            function (e) {
              "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault();
            },
            [t]
          );
        return Object(r.jsx)(
          Oc,
          Object(l.a)(
            {
              target: t,
              rel: c,
              href: i,
              onClick: u
            },
            s
          )
        );
      }
      var Cc = Object(u.keyframes)(bc()),
        wc = u.default.img(dc(), Cc),
        kc = Object(u.default)(yc)(lc(), function (e) {
          return e.theme.colors.text;
        });

      function Tc(e) {
        var n = e.to;
        return Object(r.jsx)(kc, {
          to: n,
          children: Object(r.jsx)(uc.a, {})
        });
      }
      var Ic = function (e) {
          return Object(r.jsx)(g, Object(l.a)({}, e));
        },
        Ec = function (e) {
          return Object(r.jsx)(g, Object(l.a)({}, e));
        },
        Ac = function (e) {
          return Object(r.jsx)(g, Object(l.a)({}, e));
        },
        Sc = function (e) {
          return Object(r.jsx)(
            g,
            Object(l.a)(
              {
                bold: !0,
                fontSize: "24px"
              },
              e
            )
          );
        },
        Nc = function (e) {
          return Object(r.jsx)(
            g,
            Object(l.a)(
              {
                bold: !0,
                fontSize: "20px"
              },
              e
            )
          );
        },
        Rc = function (e) {
          return Object(r.jsx)(g, Object(l.a)({}, e));
        },
        Lc = function (e) {
          return Object(r.jsx)(g, Object(l.a)({}, e));
        },
        Uc = function (e) {
          return Object(r.jsx)(
            g,
            Object(l.a)(
              {
                fontSize: "12px",
                style: {
                  fontStyle: "italic"
                }
              },
              e
            )
          );
        },
        Bc = function (e) {
          return Object(r.jsx)(
            g,
            Object(l.a)(
              {
                color: "failure"
              },
              e
            )
          );
        };

      function Pc(e) {
        return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
      }
      var Mc = t(149);

      function _c() {
        var e = Object(s.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
        return (
          (_c = function () {
            return e;
          }),
          e
        );
      }

      function Dc() {
        var e = Object(s.a)([
          "\n  flex-wrap: wrap;\n  margin: ",
          ";\n  justify-content: ",
          ";\n\n  & > * {\n    margin: ",
          " !important;\n  }\n"
        ]);
        return (
          (Dc = function () {
            return e;
          }),
          e
        );
      }

      function Fc() {
        var e = Object(s.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
        return (
          (Fc = function () {
            return e;
          }),
          e
        );
      }

      function zc() {
        var e = Object(s.a)(["\n  justify-content: space-between;\n"]);
        return (
          (zc = function () {
            return e;
          }),
          e
        );
      }

      function qc() {
        var e = Object(s.a)([
          "\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n"
        ]);
        return (
          (qc = function () {
            return e;
          }),
          e
        );
      }
      var Vc = Object(u.default)(Mc.Box)(
          qc(),
          function (e) {
            var n = e.align;
            return n || "center";
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          }
        ),
        Hc = Object(u.default)(Vc)(zc()),
        Yc = u.default.div(Fc()),
        Wc = Object(u.default)(Vc)(
          Dc(),
          function (e) {
            var n = e.gap;
            return n && "-".concat(n);
          },
          function (e) {
            var n = e.justify;
            return n && n;
          },
          function (e) {
            return e.gap;
          }
        ),
        Zc = Object(u.default)(Vc)(_c(), function (e) {
          var n = e.gap;
          return n && "-".concat(n);
        }),
        Qc = Vc;

      function Kc(e) {
        var n = e.popKey,
          t = e.listUrl,
          o = e.oldList,
          c = e.newList,
          s = e.auto,
          u = Yo(),
          l = Object(a.useCallback)(
            function () {
              return u(n);
            },
            [n, u]
          ),
          d = Object(Vo.c)(),
          b = Object(a.useCallback)(
            function () {
              s || (d(ac(t)), l());
            },
            [s, d, t, l]
          ),
          p = Object(a.useMemo)(
            function () {
              return Object(nc.b)(o.tokens, c.tokens);
            },
            [c.tokens, o.tokens]
          ),
          f = p.added,
          j = p.changed,
          h = p.removed,
          m = Object(a.useMemo)(
            function () {
              return Object.keys(j).reduce(function (e, n) {
                return e + Object.keys(j[n]).length;
              }, 0);
            },
            [j]
          );
        return Object(r.jsx)(Wc, {
          children: Object(r.jsx)(Jo, {
            style: {
              flex: "1"
            },
            gap: "8px",
            children: s
              ? Object(r.jsxs)(Ac, {
                  fontWeight: 500,
                  children: [
                    'The token list "',
                    o.name,
                    '" has been updated to',
                    " ",
                    Object(r.jsx)("strong", {
                      children: Pc(c.version)
                    }),
                    "."
                  ]
                })
              : Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsxs)("div", {
                      children: [
                        Object(r.jsxs)(tc.b, {
                          children: [
                            'An update is available for the token list "',
                            o.name,
                            '" (',
                            Pc(o.version),
                            " to ",
                            Pc(c.version),
                            ")."
                          ]
                        }),
                        Object(r.jsxs)("ul", {
                          children: [
                            f.length > 0
                              ? Object(r.jsxs)("li", {
                                  children: [
                                    f.map(function (e, n) {
                                      return Object(r.jsxs)(
                                        i.a.Fragment,
                                        {
                                          children: [
                                            Object(r.jsx)("strong", {
                                              title: e.address,
                                              children: e.symbol
                                            }),
                                            n === f.length - 1 ? null : ", "
                                          ]
                                        },
                                        ""
                                          .concat(e.chainId, "-")
                                          .concat(e.address)
                                      );
                                    }),
                                    " ",
                                    "added"
                                  ]
                                })
                              : null,
                            h.length > 0
                              ? Object(r.jsxs)("li", {
                                  children: [
                                    h.map(function (e, n) {
                                      return Object(r.jsxs)(
                                        i.a.Fragment,
                                        {
                                          children: [
                                            Object(r.jsx)("strong", {
                                              title: e.address,
                                              children: e.symbol
                                            }),
                                            n === h.length - 1 ? null : ", "
                                          ]
                                        },
                                        ""
                                          .concat(e.chainId, "-")
                                          .concat(e.address)
                                      );
                                    }),
                                    " ",
                                    "removed"
                                  ]
                                })
                              : null,
                            m > 0
                              ? Object(r.jsxs)("li", {
                                  children: [m, " tokens updated"]
                                })
                              : null
                          ]
                        })
                      ]
                    }),
                    Object(r.jsxs)(Wc, {
                      children: [
                        Object(r.jsx)("div", {
                          style: {
                            flexGrow: 1,
                            marginRight: 12
                          },
                          children: Object(r.jsx)(W, {
                            onClick: b,
                            children: "Accept update"
                          })
                        }),
                        Object(r.jsx)("div", {
                          style: {
                            flexGrow: 1
                          },
                          children: Object(r.jsx)(W, {
                            onClick: l,
                            children: "Dismiss"
                          })
                        })
                      ]
                    })
                  ]
                })
          })
        });
      }
      var Gc = t(493),
        Jc = t(494);

      function Xc() {
        var e = Object(s.a)(["\n  flex-wrap: nowrap;\n"]);
        return (
          (Xc = function () {
            return e;
          }),
          e
        );
      }
      var $c = Object(u.default)(Wc)(Xc());

      function es(e) {
        var n = e.hash,
          t = e.success,
          i = e.summary,
          o = yi().chainId,
          c = Object(a.useContext)(u.ThemeContext);
        return Object(r.jsxs)($c, {
          children: [
            Object(r.jsx)("div", {
              style: {
                paddingRight: 16
              },
              children: t
                ? Object(r.jsx)(Gc.a, {
                    color: c.colors.success,
                    size: 24
                  })
                : Object(r.jsx)(Jc.a, {
                    color: c.colors.failure,
                    size: 24
                  })
            }),
            Object(r.jsxs)(Jo, {
              gap: "8px",
              children: [
                Object(r.jsx)(Ac, {
                  fontWeight: 500,
                  children:
                    null !== i && void 0 !== i
                      ? i
                      : "Hash: " + n.slice(0, 8) + "..." + n.slice(58, 65)
                }),
                o &&
                  Object(r.jsx)(gc, {
                    href: di(o, n, "transaction"),
                    children: "View on BscScan"
                  })
              ]
            })
          ]
        });
      }

      function ns() {
        var e = Object(s.a)([
          "\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
          ";\n"
        ]);
        return (
          (ns = function () {
            return e;
          }),
          e
        );
      }

      function ts() {
        var e = Object(s.a)([
          "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
          ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
          " {\n    min-width: 290px;\n  }\n"
        ]);
        return (
          (ts = function () {
            return e;
          }),
          e
        );
      }

      function rs() {
        var e = Object(s.a)([
          "\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"
        ]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      var as = Object(u.default)($o.a)(rs()),
        is = u.default.div(
          ts(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        ),
        os = u.default.div(ns(), function (e) {
          return e.theme.colors.tertiary;
        }),
        cs = Object(ec.a)(os);

      function ss(e) {
        var n = e.removeAfterMs,
          t = e.content,
          i = e.popKey,
          o = Yo(),
          c = Object(a.useCallback)(
            function () {
              return o(i);
            },
            [i, o]
          );
        Object(a.useEffect)(
          function () {
            if (null !== n) {
              var e = setTimeout(function () {
                c();
              }, n);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [n, c]
        );
        var s,
          l = Object(a.useContext)(u.ThemeContext);
        if ("txn" in t) {
          var d = t.txn,
            b = d.hash,
            p = d.success,
            f = d.summary;
          s = Object(r.jsx)(es, {
            hash: b,
            success: p,
            summary: f
          });
        } else if ("listUpdate" in t) {
          var j = t.listUpdate,
            h = j.listUrl,
            m = j.oldList,
            v = j.newList,
            x = j.auto;
          s = Object(r.jsx)(Kc, {
            popKey: i,
            listUrl: h,
            oldList: m,
            newList: v,
            auto: x
          });
        }
        var y = Object(ec.b)({
          from: {
            width: "100%"
          },
          to: {
            width: "0%"
          },
          config: {
            duration: null !== n && void 0 !== n ? n : void 0
          }
        });
        return Object(r.jsxs)(is, {
          children: [
            Object(r.jsx)(as, {
              color: l.colors.textSubtle,
              onClick: c
            }),
            s,
            null !== n
              ? Object(r.jsx)(cs, {
                  style: y
                })
              : null
          ]
        });
      }

      function us() {
        var e = Object(s.a)([
          "\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ",
          " {\n    display: none;\n  }\n"
        ]);
        return (
          (us = function () {
            return e;
          }),
          e
        );
      }

      function ls() {
        var e = Object(s.a)([
          "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"
        ]);
        return (
          (ls = function () {
            return e;
          }),
          e
        );
      }

      function ds() {
        var e = Object(s.a)([
          "\n  position: relative;\n  max-width: 100%;\n  height: ",
          ";\n  margin: ",
          ";\n  margin-bottom: ",
          "};\n  display: none;\n\n  ",
          " {\n    display: block;\n  }\n"
        ]);
        return (
          (ds = function () {
            return e;
          }),
          e
        );
      }
      var bs = u.default.div(
          ds(),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.height ? "0 auto;" : 0;
          },
          function (e) {
            return e.height ? "20px" : 0;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        ),
        ps = u.default.div(ls()),
        fs = Object(u.default)(Jo)(us(), function (e) {
          return e.theme.mediaQueries.sm;
        });

      function js() {
        var e = (function () {
          var e = Object(Vo.d)(function (e) {
            return e.application.popupList;
          });
          return Object(a.useMemo)(
            function () {
              return e.filter(function (e) {
                return e.show;
              });
            },
            [e]
          );
        })();
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(fs, {
              gap: "20px",
              children: e.map(function (e) {
                return Object(r.jsx)(
                  ss,
                  {
                    content: e.content,
                    popKey: e.key,
                    removeAfterMs: e.removeAfterMs
                  },
                  e.key
                );
              })
            }),
            Object(r.jsx)(bs, {
              height:
                (null === e || void 0 === e ? void 0 : e.length) > 0
                  ? "fit-content"
                  : 0,
              children: Object(r.jsx)(ps, {
                children: e
                  .slice(0)
                  .reverse()
                  .map(function (e) {
                    return Object(r.jsx)(
                      ss,
                      {
                        content: e.content,
                        popKey: e.key,
                        removeAfterMs: e.removeAfterMs
                      },
                      e.key
                    );
                  })
              })
            })
          ]
        });
      }
      var hs = t(114);

      function ms() {
        var e = Object(s.a)([
          "\n  animation: 2s ",
          " linear infinite;\n  height: ",
          ";\n  width: ",
          ";\n  path {\n    stroke: ",
          ";\n  }\n"
        ]);
        return (
          (ms = function () {
            return e;
          }),
          e
        );
      }

      function vs() {
        var e = Object(s.a)([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"
        ]);
        return (
          (vs = function () {
            return e;
          }),
          e
        );
      }
      var xs = Object(u.keyframes)(vs()),
        ys = u.default.svg(
          ms(),
          xs,
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            var n = e.stroke,
              t = e.theme;
            return null !== n && void 0 !== n ? n : t.colors.primary;
          }
        );

      function Os(e) {
        var n = e.size,
          t = void 0 === n ? "16px" : n,
          a = e.stroke,
          i = Object(N.a)(e, ["size", "stroke"]);
        return Object(r.jsx)(
          ys,
          Object(l.a)(
            Object(l.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                size: t,
                stroke: a
              },
              i
            ),
            {},
            {
              children: Object(r.jsx)("path", {
                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            }
          )
        );
      }

      function gs() {
        var e = Object(s.a)(["\n  color: ", ";\n"]);
        return (
          (gs = function () {
            return e;
          }),
          e
        );
      }

      function Cs() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"
        ]);
        return (
          (Cs = function () {
            return e;
          }),
          e
        );
      }
      var ws = u.default.div(Cs()),
        ks = u.default.h2(gs(), function (e) {
          return e.theme.colors.primaryDark;
        });

      function Ts(e) {
        var n = e.children,
          t = Object(hs.b)().t,
          i = Object(vi.c)().active,
          o = Object(vi.c)(Ja),
          c = o.active,
          s = o.error,
          u = o.activate,
          l = (function () {
            var e = Object(vi.c)(),
              n = e.activate,
              t = e.active,
              r = Object(a.useState)(!1),
              i = Object(Ln.a)(r, 2),
              o = i[0],
              c = i[1];
            return (
              Object(a.useEffect)(
                function () {
                  Pa.isAuthorized().then(function (e) {
                    var t = window.localStorage.getItem("accountStatus");
                    (e && t) || (xi.isMobile && window.ethereum && t)
                      ? n(Pa, void 0, !0).catch(function () {
                          c(!0);
                        })
                      : c(!0);
                  });
                },
                [n]
              ),
              Object(a.useEffect)(
                function () {
                  t && c(!0);
                },
                [t]
              ),
              o
            );
          })();
        Object(a.useEffect)(
          function () {
            !l || c || s || i || u(Ua);
          },
          [l, c, s, u, i]
        ),
          (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = Object(vi.c)(),
              t = n.active,
              r = n.error,
              i = n.activate;
            Object(a.useEffect)(
              function () {
                var n = window.ethereum;
                if (n && n.on && !t && !r && !e) {
                  var a = function () {
                      i(Pa, void 0, !0).catch(function (e) {
                        console.error(
                          "Failed to activate after chain changed",
                          e
                        );
                      });
                    },
                    o = function (e) {
                      e.length > 0 &&
                        i(Pa, void 0, !0).catch(function (e) {
                          console.error(
                            "Failed to activate after accounts changed",
                            e
                          );
                        });
                    };
                  return (
                    n.on("chainChanged", a),
                    n.on("accountsChanged", o),
                    function () {
                      n.removeListener &&
                        (n.removeListener("chainChanged", a),
                        n.removeListener("accountsChanged", o));
                    }
                  );
                }
              },
              [t, r, e, i]
            );
          })(!l);
        var d = Object(a.useState)(!1),
          b = Object(Ln.a)(d, 2),
          p = b[0],
          f = b[1];
        return (
          Object(a.useEffect)(function () {
            var e = setTimeout(function () {
              f(!0);
            }, 600);
            return function () {
              clearTimeout(e);
            };
          }, []),
          l
            ? !i && s
              ? Object(r.jsx)(ws, {
                  children: Object(r.jsx)(ks, {
                    children: t("unknownError")
                  })
                })
              : i || c
              ? n
              : p
              ? Object(r.jsx)(ws, {
                  children: Object(r.jsx)(Os, {})
                })
              : null
            : null
        );
      }

      function Is() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  color: ",
          ";\n  border-radius: 12px;\n  width: fit-content;\n"
        ]);
        return (
          (Is = function () {
            return e;
          }),
          e
        );
      }

      function Es() {
        var e = Object(s.a)([
          "\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ",
          ";\n  font-weight: 500;\n"
        ]);
        return (
          (Es = function () {
            return e;
          }),
          e
        );
      }

      function As() {
        var e = Object(s.a)([
          "\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ",
          ";\n  font-weight: 500;\n"
        ]);
        return (
          (As = function () {
            return e;
          }),
          e
        );
      }

      function Ss() {
        var e = Object(s.a)(["\n  border: 1px solid ", ";\n"]);
        return (
          (Ss = function () {
            return e;
          }),
          e
        );
      }

      function Ns() {
        var e = Object(s.a)(["\n  background-color: ", ";\n"]);
        return (
          (Ns = function () {
            return e;
          }),
          e
        );
      }

      function Rs() {
        var e = Object(s.a)([
          "\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n"
        ]);
        return (
          (Rs = function () {
            return e;
          }),
          e
        );
      }

      function Ls() {
        var e = Object(s.a)([
          "\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n"
        ]);
        return (
          (Ls = function () {
            return e;
          }),
          e
        );
      }
      var Us = Object(u.default)(Mc.Box)(
          Ls(),
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          }
        ),
        Bs = Us,
        Ps = Object(u.default)(Us)(
          Rs(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          }
        ),
        Ms = Object(u.default)(Us)(Ns(), function (e) {
          return e.theme.colors.tertiary;
        }),
        _s =
          (Object(u.default)(Us)(Ss(), function (e) {
            return e.theme.colors.tertiary;
          }),
          Object(u.default)(Us)(As(), function (e) {
            return e.theme.colors.binance;
          })),
        Ds = Object(u.default)(Us)(Es(), function (e) {
          return e.theme.colors.primary;
        }),
        Fs =
          (Object(u.default)(Us)(
            Is(),
            function (e) {
              return e.theme.colors.primaryDark;
            },
            function (e) {
              return e.theme.colors.primary;
            }
          ),
          t(185));
      t(402);

      function zs() {
        var e = Object(s.a)(["\n        min-height: ", "vh;\n      "]);
        return (
          (zs = function () {
            return e;
          }),
          e
        );
      }

      function qs() {
        var e = Object(s.a)(["\n        max-height: ", "vh;\n      "]);
        return (
          (qs = function () {
            return e;
          }),
          e
        );
      }

      function Vs() {
        var e = Object(s.a)([
          "\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ",
          ";\n    background-color: ",
          ";\n    box-shadow: 0 4px 8px 0 ",
          ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ",
          ";\n\n    max-width: 420px;\n    ",
          "\n    ",
          "\n    display: flex;\n    border-radius: 20px;\n\n    ",
          " {\n      width: 65vw;\n    }\n    ",
          " {\n      width: 85vw;\n    }\n  }\n"
        ]);
        return (
          (Vs = function () {
            return e;
          }),
          e
        );
      }

      function Hs() {
        var e = Object(s.a)([
          "\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"
        ]);
        return (
          (Hs = function () {
            return e;
          }),
          e
        );
      }
      var Ys = Object(ec.a)(Fs.b),
        Ws = Object(u.default)(Ys)(Hs()),
        Zs = Object(ec.a)(Fs.a),
        Qs = Object(u.default)(function (e) {
          e.minHeight, e.maxHeight, e.mobile, e.isOpen;
          var n = Object(N.a)(e, [
            "minHeight",
            "maxHeight",
            "mobile",
            "isOpen"
          ]);
          return Object(r.jsx)(Zs, Object(l.a)({}, n));
        }).attrs({
          "aria-label": "dialog"
        })(
          Vs(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          Object(sc.b)(0.95, "#191326"),
          function (e) {
            return e.mobile ? "flex-end" : "center";
          },
          function (e) {
            var n = e.maxHeight;
            return n && Object(u.css)(qs(), n);
          },
          function (e) {
            var n = e.minHeight;
            return n && Object(u.css)(zs(), n);
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        );

      function Ks(e) {
        var n = e.isOpen,
          t = e.onDismiss,
          a = e.minHeight,
          i = void 0 !== a && a,
          o = e.maxHeight,
          c = void 0 === o ? 50 : o,
          s = e.initialFocusRef,
          u = e.children,
          l = Object(ec.c)(n, null, {
            config: {
              duration: 200
            },
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            }
          });
        return Object(r.jsx)(r.Fragment, {
          children: l.map(function (e) {
            var n = e.item,
              a = e.key,
              o = e.props;
            return (
              n &&
              Object(r.jsx)(
                Ws,
                {
                  style: o,
                  onDismiss: t,
                  initialFocusRef: s,
                  children: Object(r.jsxs)(Qs, {
                    "aria-label": "dialog content",
                    minHeight: i,
                    maxHeight: c,
                    mobile: xi.isMobile,
                    children: [
                      !s && xi.isMobile
                        ? Object(r.jsx)("div", {
                            tabIndex: 1
                          })
                        : null,
                      u
                    ]
                  })
                },
                a
              )
            );
          })
        });
      }
      var Gs = t.p + "static/media/blue-loader.114872da.svg";

      function Js() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  display: flex;\n\n  & > ",
          " {\n    flex: 1;\n  }\n"
        ]);
        return (
          (Js = function () {
            return e;
          }),
          e
        );
      }

      function Xs() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"
        ]);
        return (
          (Xs = function () {
            return e;
          }),
          e
        );
      }

      function $s() {
        var e = Object(s.a)(["\n  padding: 40px 0;\n"]);
        return (
          ($s = function () {
            return e;
          }),
          e
        );
      }

      function eu() {
        var e = Object(s.a)(["\n  padding: 24px;\n"]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }

      function nu() {
        var e = Object(s.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      var tu = u.default.div(nu()),
        ru = Object(u.default)(Jo)(eu()),
        au = Object(u.default)(Go)($s()),
        iu = Object(u.default)(ru)(Xs(), function (e) {
          return e.theme.colors.invertedContrast;
        }),
        ou = u.default.div(Js(), Se),
        cu = function (e) {
          var n = e.children,
            t = e.onDismiss;
          return Object(r.jsxs)(ou, {
            children: [
              Object(r.jsx)(Se, {
                children: n
              }),
              Object(r.jsx)(Q, {
                onClick: t,
                variant: "text",
                children: Object(r.jsx)(Ye, {
                  color: "primary"
                })
              })
            ]
          });
        };

      function su() {
        var e = Object(s.a)(["\n  height: ", ";\n  width: ", ";\n"]);
        return (
          (su = function () {
            return e;
          }),
          e
        );
      }
      var uu = Object(u.default)(wc)(
          su(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        lu = function (e) {
          var n = e.onDismiss,
            t = e.pendingText;
          return Object(r.jsx)(tu, {
            children: Object(r.jsxs)(ru, {
              children: [
                Object(r.jsx)(cu, {
                  onDismiss: n,
                  children: "Waiting for confirmation"
                }),
                Object(r.jsx)(au, {
                  children: Object(r.jsx)(uu, {
                    src: Gs,
                    alt: "loader",
                    size: "90px"
                  })
                }),
                Object(r.jsxs)(Jo, {
                  gap: "12px",
                  justify: "center",
                  children: [
                    Object(r.jsx)(Jo, {
                      gap: "12px",
                      justify: "center",
                      children: Object(r.jsx)(g, {
                        fontSize: "14px",
                        children: Object(r.jsx)("strong", {
                          children: t
                        })
                      })
                    }),
                    Object(r.jsx)(g, {
                      fontSize: "14px",
                      children: "Confirm this transaction in your wallet"
                    })
                  ]
                })
              ]
            })
          });
        },
        du = t(495),
        bu = function (e) {
          var n = e.onDismiss,
            t = e.chainId,
            i = e.hash,
            o = Object(a.useContext)(u.ThemeContext);
          return Object(r.jsx)(tu, {
            children: Object(r.jsxs)(ru, {
              children: [
                Object(r.jsx)(cu, {
                  onDismiss: n,
                  children: "Transaction submitted"
                }),
                Object(r.jsx)(au, {
                  children: Object(r.jsx)(du.a, {
                    strokeWidth: 0.5,
                    size: 97,
                    color: o.colors.primary
                  })
                }),
                Object(r.jsxs)(Jo, {
                  gap: "8px",
                  justify: "center",
                  children: [
                    t &&
                      i &&
                      Object(r.jsx)(cn, {
                        href: di(t, i, "transaction"),
                        children: "View on BscScan"
                      }),
                    Object(r.jsx)(W, {
                      onClick: n,
                      mt: "20px",
                      children: "Close"
                    })
                  ]
                })
              ]
            })
          });
        },
        pu = function (e) {
          var n = e.isOpen,
            t = e.onDismiss,
            a = e.attemptingTxn,
            i = e.hash,
            o = e.pendingText,
            c = e.content,
            s = yi().chainId;
          return s
            ? Object(r.jsx)(Ks, {
                isOpen: n,
                onDismiss: t,
                maxHeight: 90,
                children: a
                  ? Object(r.jsx)(lu, {
                      onDismiss: t,
                      pendingText: o
                    })
                  : i
                  ? Object(r.jsx)(bu, {
                      chainId: s,
                      hash: i,
                      onDismiss: t
                    })
                  : c()
              })
            : null;
        },
        fu = function (e) {
          var n = e.title,
            t = e.bottomContent,
            a = e.onDismiss,
            i = e.topContent;
          return Object(r.jsxs)(tu, {
            children: [
              Object(r.jsxs)(ru, {
                children: [
                  Object(r.jsx)(cu, {
                    onDismiss: a,
                    children: n
                  }),
                  i()
                ]
              }),
              Object(r.jsx)(iu, {
                gap: "12px",
                children: t()
              })
            ]
          });
        },
        ju = t(496),
        hu = function (e) {
          var n = e.message,
            t = e.onDismiss,
            i = Object(a.useContext)(u.ThemeContext);
          return Object(r.jsxs)(tu, {
            children: [
              Object(r.jsxs)(ru, {
                children: [
                  Object(r.jsx)(cu, {
                    onDismiss: t,
                    children: "Error"
                  }),
                  Object(r.jsxs)(Jo, {
                    style: {
                      marginTop: 20,
                      padding: "2rem 0"
                    },
                    gap: "24px",
                    justify: "center",
                    children: [
                      Object(r.jsx)(ju.a, {
                        color: i.colors.failure,
                        style: {
                          strokeWidth: 1.5
                        },
                        size: 64
                      }),
                      Object(r.jsx)(tc.b, {
                        fontWeight: 500,
                        fontSize: 16,
                        color: i.colors.failure,
                        style: {
                          textAlign: "center",
                          width: "85%"
                        },
                        children: n
                      })
                    ]
                  })
                ]
              }),
              Object(r.jsx)(iu, {
                gap: "12px",
                children: Object(r.jsx)(W, {
                  onClick: t,
                  children: "Dismiss"
                })
              })
            ]
          });
        },
        mu = pu,
        vu = {
          translations: [],
          setTranslations: function () {}
        },
        xu = Object(a.createContext)(vu),
        yu = /%(.*?)%/,
        Ou = function (e, n, t) {
          var r = e.find(function (e) {
            return e.data.stringId === n;
          });
          if (r) {
            var a = r.data.text;
            return a.includes("%")
              ? (function (e, n) {
                  var t = yu.exec(e)[0],
                    r = e.split(" ").indexOf(t),
                    a = n.split(" ")[r];
                  return e.replace(t, a);
                })(a, t)
              : a;
          }
          return t;
        },
        gu = function (e, n) {
          var t = Object(a.useContext)(xu).translations;
          return "error" === t[0] ? n : t.length > 0 ? Ou(t, e, n) : void 0;
        },
        Cu = function () {
          var e = Object(a.useContext)(xu).translations;
          return function (n, t) {
            return "error" === e[0] ? t : e.length > 0 ? Ou(e, n, t) : t;
          };
        },
        wu = function (e) {
          var n = e.translationId,
            t = e.children,
            a = Cu();
          return Object(r.jsx)(r.Fragment, {
            children: a(n, t)
          });
        };

      function ku() {
        var e = Object(s.a)(["\n  margin-bottom: 40px;\n"]);
        return (
          (ku = function () {
            return e;
          }),
          e
        );
      }
      var Tu,
        Iu = u.default.div(ku()),
        Eu = function (e) {
          var n = e.activeIndex,
            t = void 0 === n ? 0 : n;
          return Object(r.jsx)(Iu, {
            children: Object(r.jsxs)(J, {
              activeIndex: t,
              size: "sm",
              variant: "subtle",
              children: [
                Object(r.jsx)(ee, {
                  id: "swap-nav-link",
                  to: "/swap",
                  as: qn.b,
                  children: Object(r.jsx)(wu, {
                    translationId: 8,
                    children: "Swap"
                  })
                }),
                Object(r.jsx)(ee, {
                  id: "pool-nav-link",
                  to: "/pool",
                  as: qn.b,
                  children: Object(r.jsx)(wu, {
                    translationId: 74,
                    children: "Liquidity"
                  })
                }),
                Object(r.jsx)(ee, {
                  id: "pool-nav-link",
                  as: "a",
                  href: "#",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "Bridge"
                }),
                Object(r.jsx)(ee, {
                  id: "pool-nav-link",
                  as: "a",
                  href: "#",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "Staking"
                })
              ]
            })
          });
        },
        Au = t(161),
        Su = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t(e, r) {
            var a;
            return (
              Object(la.a)(this, t),
              ((a = n.call(
                this,
                e.chainId,
                e.address,
                e.decimals,
                e.symbol,
                e.name
              )).tokenInfo = void 0),
              (a.tags = void 0),
              (a.tokenInfo = e),
              (a.tags = r),
              a
            );
          }
          return (
            Object(da.a)(t, [
              {
                key: "logoURI",
                get: function () {
                  return this.tokenInfo.logoURI;
                }
              }
            ]),
            t
          );
        })(lr),
        Nu =
          ((Tu = {}),
          Object(ge.a)(Tu, ot.MAINNET, {}),
          Object(ge.a)(Tu, ot.BSCTESTNET, {}),
          Tu),
        Ru = "undefined" !== typeof WeakMap ? new WeakMap() : null;

      function Lu(e) {
        var n = Object(Vo.d)(function (e) {
          return e.lists.byUrl;
        });
        return Object(a.useMemo)(
          function () {
            var t;
            if (!e) return Nu;
            var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
            if (!r) return Nu;
            try {
              return (function (e) {
                var n = null === Ru || void 0 === Ru ? void 0 : Ru.get(e);
                if (n) return n;
                var t = e.tokens.reduce(function (n, t) {
                  var r,
                    a,
                    i,
                    o =
                      null !==
                        (r =
                          null === (a = t.tags) ||
                          void 0 === a ||
                          null ===
                            (i = a.map(function (n) {
                              var t;
                              if (
                                null === (t = e.tags) || void 0 === t
                                  ? void 0
                                  : t[n]
                              )
                                return Object(l.a)(
                                  Object(l.a)({}, e.tags[n]),
                                  {},
                                  {
                                    id: n
                                  }
                                );
                            })) ||
                          void 0 === i
                            ? void 0
                            : i.filter(function (e) {
                                return Boolean(e);
                              })) && void 0 !== r
                        ? r
                        : [],
                    c = new Su(t, o);
                  if (void 0 !== n[c.chainId][c.address])
                    throw Error("Duplicate tokens.");
                  return Object(l.a)(
                    Object(l.a)({}, n),
                    {},
                    Object(ge.a)(
                      {},
                      c.chainId,
                      Object(l.a)(
                        Object(l.a)({}, n[c.chainId]),
                        {},
                        Object(ge.a)({}, c.address, c)
                      )
                    )
                  );
                }, Object(l.a)({}, Nu));
                return null === Ru || void 0 === Ru || Ru.set(e, t), t;
              })(r);
            } catch (a) {
              return (
                console.error("Could not show token list due to error", a), Nu
              );
            }
          },
          [n, e]
        );
      }

      function Uu() {
        return Object(Vo.d)(function (e) {
          return e.lists.selectedListUrl;
        });
      }

      function Bu() {
        return Lu(Uu());
      }
      var Pu = /^0x[a-fA-F0-9]{40}$/,
        Mu = /^0x[a-f0-9]*$/;

      function _u(e) {
        if (!Pu.test(e.address))
          throw new Error("Invalid address: ".concat(e.address));
        if (!Mu.test(e.callData))
          throw new Error("Invalid hex: ".concat(e.callData));
        return "".concat(e.address, "-").concat(e.callData);
      }

      function Du(e) {
        var n = e.split("-");
        if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
        return {
          address: n[0],
          callData: n[1]
        };
      }
      var Fu = Object(Mo.b)("multicall/addMulticallListeners"),
        zu = Object(Mo.b)("multicall/removeMulticallListeners"),
        qu = Object(Mo.b)("multicall/fetchingMulticallResults"),
        Vu = Object(Mo.b)("multicall/errorFetchingMulticallResults"),
        Hu = Object(Mo.b)("multicall/updateMulticallResults");

      function Yu(e) {
        return -1 !== ["string", "number"].indexOf(typeof e);
      }

      function Wu(e) {
        return (
          void 0 === e ||
          (Array.isArray(e) &&
            e.every(function (e) {
              return Yu(e) || (Array.isArray(e) && e.every(Yu));
            }))
        );
      }
      var Zu = {
          valid: !1,
          blockNumber: void 0,
          data: void 0
        },
        Qu = {
          blocksPerFetch: 1 / 0
        };

      function Ku(e, n) {
        var t = yi().chainId,
          r = Object(Vo.d)(function (e) {
            return e.multicall.callResults;
          }),
          i = Object(Vo.c)(),
          o = Object(a.useMemo)(
            function () {
              var n, t, r;
              return JSON.stringify(
                null !==
                  (n =
                    null === e ||
                    void 0 === e ||
                    null ===
                      (t = e.filter(function (e) {
                        return Boolean(e);
                      })) ||
                    void 0 === t ||
                    null === (r = t.map(_u)) ||
                    void 0 === r
                      ? void 0
                      : r.sort()) && void 0 !== n
                  ? n
                  : []
              );
            },
            [e]
          );
        return (
          Object(a.useEffect)(
            function () {
              var e = JSON.parse(o);
              if (t && 0 !== e.length) {
                var r = e.map(function (e) {
                  return Du(e);
                });
                return (
                  i(
                    Fu({
                      chainId: t,
                      calls: r,
                      options: n
                    })
                  ),
                  function () {
                    i(
                      zu({
                        chainId: t,
                        calls: r,
                        options: n
                      })
                    );
                  }
                );
              }
            },
            [t, i, n, o]
          ),
          Object(a.useMemo)(
            function () {
              return e.map(function (e) {
                var n;
                if (!t || !e) return Zu;
                var a,
                  i = null === (n = r[t]) || void 0 === n ? void 0 : n[_u(e)];
                return (
                  (null === i || void 0 === i ? void 0 : i.data) &&
                    "0x" !== (null === i || void 0 === i ? void 0 : i.data) &&
                    (a = i.data),
                  {
                    valid: !0,
                    data: a,
                    blockNumber:
                      null === i || void 0 === i ? void 0 : i.blockNumber
                  }
                );
              });
            },
            [r, e, t]
          )
        );
      }
      var Gu = {
          valid: !1,
          result: void 0,
          loading: !1,
          syncing: !1,
          error: !1
        },
        Ju = {
          valid: !0,
          result: void 0,
          loading: !0,
          syncing: !0,
          error: !1
        };

      function Xu(e, n, t, r) {
        if (!e) return Gu;
        var a = e.valid,
          i = e.data,
          o = e.blockNumber;
        if (!a) return Gu;
        if (a && !o) return Ju;
        if (!n || !t || !r) return Ju;
        var c = i && i.length > 2,
          s = (null !== o && void 0 !== o ? o : 0) < r,
          u = void 0;
        if (c && i)
          try {
            u = n.decodeFunctionResult(t, i);
          } catch (l) {
            return (
              console.debug("Result data parsing failed", t, i),
              {
                valid: !0,
                loading: !1,
                error: !0,
                syncing: s,
                result: u
              }
            );
          }
        return {
          valid: !0,
          loading: !1,
          syncing: s,
          result: u,
          error: !c
        };
      }

      function $u(e, n, t, r) {
        var i = Object(a.useMemo)(
            function () {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.interface) ||
                void 0 === t
                ? void 0
                : t.getFunction(n);
            },
            [e, n]
          ),
          o = Ku(
            Object(a.useMemo)(
              function () {
                return e && i && t && t.length > 0
                  ? t.map(function (n) {
                      return {
                        address: e.address,
                        callData: e.interface.encodeFunctionData(i, n)
                      };
                    })
                  : [];
              },
              [t, e, i]
            ),
            r
          ),
          c = Ho();
        return Object(a.useMemo)(
          function () {
            return o.map(function (n) {
              return Xu(
                n,
                null === e || void 0 === e ? void 0 : e.interface,
                i,
                c
              );
            });
          },
          [i, e, o, c]
        );
      }

      function el(e, n, t, r, i) {
        var o = Object(a.useMemo)(
            function () {
              return n.getFunction(t);
            },
            [n, t]
          ),
          c = Object(a.useMemo)(
            function () {
              return o && Wu(r) ? n.encodeFunctionData(o, r) : void 0;
            },
            [r, n, o]
          ),
          s = Ku(
            Object(a.useMemo)(
              function () {
                return o && e && e.length > 0 && c
                  ? e.map(function (e) {
                      return e && c
                        ? {
                            address: e,
                            callData: c
                          }
                        : void 0;
                    })
                  : [];
              },
              [e, c, o]
            ),
            i
          ),
          u = Ho();
        return Object(a.useMemo)(
          function () {
            return s.map(function (e) {
              return Xu(e, n, o, u);
            });
          },
          [o, s, n, u]
        );
      }

      function nl(e, n, t, r) {
        var i = Object(a.useMemo)(
            function () {
              var t;
              return null === e ||
                void 0 === e ||
                null === (t = e.interface) ||
                void 0 === t
                ? void 0
                : t.getFunction(n);
            },
            [e, n]
          ),
          o = Ku(
            Object(a.useMemo)(
              function () {
                return e && i && Wu(t)
                  ? [
                      {
                        address: e.address,
                        callData: e.interface.encodeFunctionData(i, t)
                      }
                    ]
                  : [];
              },
              [e, i, t]
            ),
            r
          )[0],
          c = Ho();
        return Object(a.useMemo)(
          function () {
            return Xu(
              o,
              null === e || void 0 === e ? void 0 : e.interface,
              i,
              c
            );
          },
          [o, e, i, c]
        );
      }
      var tl = t(139),
        rl = t.n(tl),
        al = Object(Mo.b)("user/updateMatchesDarkMode"),
        il = Object(Mo.b)("user/updateUserDarkMode"),
        ol = Object(Mo.b)("user/updateUserExpertMode"),
        cl = Object(Mo.b)("user/updateUserSlippageTolerance"),
        sl = Object(Mo.b)("user/updateUserDeadline"),
        ul = Object(Mo.b)("user/addSerializedToken"),
        ll = Object(Mo.b)("user/removeSerializedToken"),
        dl = Object(Mo.b)("user/addSerializedPair"),
        bl = Object(Mo.b)("user/removeSerializedPair"),
        pl = Object(Mo.b)("user/muteAudio"),
        fl = Object(Mo.b)("user/unmuteAudio"),
        jl = "IS_DARK";

      function hl(e) {
        return {
          chainId: e.chainId,
          address: e.address,
          decimals: e.decimals,
          symbol: e.symbol,
          name: e.name
        };
      }

      function ml(e) {
        return new lr(e.chainId, e.address, e.decimals, e.symbol, e.name);
      }

      function vl() {
        return Object(Vo.d)(function (e) {
          return e.user.userExpertMode;
        });
      }

      function xl() {
        var e = Object(Vo.c)();
        return [
          Object(Vo.d)(function (e) {
            return e.user.userSlippageTolerance;
          }),
          Object(a.useCallback)(
            function (n) {
              e(
                cl({
                  userSlippageTolerance: n
                })
              );
            },
            [e]
          )
        ];
      }

      function yl() {
        var e = Object(Vo.c)();
        return [
          Object(Vo.d)(function (e) {
            return e.user.userDeadline;
          }),
          Object(a.useCallback)(
            function (n) {
              e(
                sl({
                  userDeadline: n
                })
              );
            },
            [e]
          )
        ];
      }

      function Ol() {
        var e = Object(Vo.c)();
        return Object(a.useCallback)(
          function (n) {
            e(
              ul({
                serializedToken: hl(n)
              })
            );
          },
          [e]
        );
      }

      function gl() {
        var e = yi().chainId,
          n = Object(Vo.d)(function (e) {
            return e.user.tokens;
          });
        return Object(a.useMemo)(
          function () {
            var t;
            return e
              ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(
                  ml
                )
              : [];
          },
          [n, e]
        );
      }

      function Cl(e) {
        return {
          token0: hl(e.token0),
          token1: hl(e.token1)
        };
      }

      function wl(e) {
        var n = Object(Ln.a)(e, 2),
          t = n[0],
          r = n[1];
        return new lr(t.chainId, kr.getAddress(t, r), 18, "BCD-LP", "BaseDex");
      }

      function kl() {
        var e = yi().chainId,
          n = gl(),
          t = Bu();
        return Object(a.useMemo)(
          function () {
            return e
              ? n.reduce(function (e, n) {
                  return (e[n.address] = n), e;
                }, Object(l.a)({}, t[e]))
              : {};
          },
          [e, n, t]
        );
      }
      var Tl = /^0x[a-fA-F0-9]{64}$/;

      function Il(e, n, t) {
        return e && e.length > 0 ? e : n && Tl.test(n) ? Object(Au.b)(n) : t;
      }

      function El(e) {
        var n = yi().chainId,
          t = kl(),
          r = ui(e),
          i = wi(r || void 0, !1),
          o = (function (e, n) {
            return Oi(e, Hr, n);
          })(r || void 0, !1),
          c = r ? t[r] : void 0,
          s = nl(c ? void 0 : i, "name", void 0, Qu),
          u = nl(c ? void 0 : o, "name", void 0, Qu),
          l = nl(c ? void 0 : i, "symbol", void 0, Qu),
          d = nl(c ? void 0 : o, "symbol", void 0, Qu),
          b = nl(c ? void 0 : i, "decimals", void 0, Qu);
        return Object(a.useMemo)(
          function () {
            if (c) return c;
            if (n && r) {
              if (b.loading || l.loading || s.loading) return null;
              var e, t, a, i;
              if (b.result)
                return new lr(
                  n,
                  r,
                  b.result[0],
                  Il(
                    null === (e = l.result) || void 0 === e ? void 0 : e[0],
                    null === (t = d.result) || void 0 === t ? void 0 : t[0],
                    "UNKNOWN"
                  ),
                  Il(
                    null === (a = s.result) || void 0 === a ? void 0 : a[0],
                    null === (i = u.result) || void 0 === i ? void 0 : i[0],
                    "Unknown Token"
                  )
                );
            }
          },
          [
            r,
            n,
            b.loading,
            b.result,
            l.loading,
            l.result,
            d.result,
            c,
            s.loading,
            s.result,
            u.result
          ]
        );
      }

      function Al(e) {
        var n =
            "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
          t = El(n ? void 0 : e);
        return n ? ur : t;
      }

      function Sl(e) {
        var n = Ii(),
          t = Object(a.useMemo)(
            function () {
              return e
                ? e
                    .map(ui)
                    .filter(function (e) {
                      return !1 !== e;
                    })
                    .sort()
                : [];
            },
            [e]
          ),
          r = $u(
            n,
            "getEthBalance",
            t.map(function (e) {
              return [e];
            })
          );
        return Object(a.useMemo)(
          function () {
            return t.reduce(function (e, n, t) {
              var a,
                i,
                o =
                  null === r ||
                  void 0 === r ||
                  null === (a = r[t]) ||
                  void 0 === a ||
                  null === (i = a.result) ||
                  void 0 === i
                    ? void 0
                    : i[0];
              return o && (e[n] = Or.ether(mt.a.BigInt(o.toString()))), e;
            }, {});
          },
          [t, r]
        );
      }

      function Nl(e, n) {
        var t = Object(a.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === n || void 0 === n
                    ? void 0
                    : n.filter(function (e) {
                        return (
                          !1 !==
                          ui(null === e || void 0 === e ? void 0 : e.address)
                        );
                      })) && void 0 !== e
                ? e
                : [];
            },
            [n]
          ),
          r = el(
            Object(a.useMemo)(
              function () {
                return t.map(function (e) {
                  return e.address;
                });
              },
              [t]
            ),
            Wr,
            "balanceOf",
            [e]
          ),
          i = Object(a.useMemo)(
            function () {
              return r.some(function (e) {
                return e.loading;
              });
            },
            [r]
          );
        return [
          Object(a.useMemo)(
            function () {
              return e && t.length > 0
                ? t.reduce(function (e, n, t) {
                    var a,
                      i,
                      o =
                        null === r ||
                        void 0 === r ||
                        null === (a = r[t]) ||
                        void 0 === a ||
                        null === (i = a.result) ||
                        void 0 === i
                          ? void 0
                          : i[0],
                      c = o ? mt.a.BigInt(o.toString()) : void 0;
                    return c && (e[n.address] = new gr(n, c)), e;
                  }, {})
                : {};
            },
            [e, t, r]
          ),
          i
        ];
      }

      function Rl(e, n) {
        return Nl(e, n)[0];
      }

      function Ll(e, n) {
        var t = Rl(e, [n]);
        if (n) return t[n.address];
      }

      function Ul(e, n) {
        var t = Object(a.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === n || void 0 === n
                    ? void 0
                    : n.filter(function (e) {
                        return e instanceof lr;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [n]
          ),
          r = Rl(e, t),
          i = Sl(
            Object(a.useMemo)(
              function () {
                var e;
                return (
                  null !==
                    (e =
                      null === n || void 0 === n
                        ? void 0
                        : n.some(function (e) {
                            return e === ur;
                          })) &&
                  void 0 !== e &&
                  e
                );
              },
              [n]
            )
              ? [e]
              : []
          );
        return Object(a.useMemo)(
          function () {
            var t;
            return null !==
              (t =
                null === n || void 0 === n
                  ? void 0
                  : n.map(function (n) {
                      if (e && n)
                        return n instanceof lr
                          ? r[n.address]
                          : n === ur
                          ? i[e]
                          : void 0;
                    })) && void 0 !== t
              ? t
              : [];
          },
          [e, n, i, r]
        );
      }

      function Bl(e, n) {
        return Ul(e, [n])[0];
      }

      function Pl(e, n) {
        var t = Object(a.useState)(n && n(e) ? e : void 0),
          r = Object(Ln.a)(t, 2),
          i = r[0],
          o = r[1];
        return (
          Object(a.useEffect)(
            function () {
              o(function (t) {
                return !n || n(e) ? e : t;
              });
            },
            [n, e]
          ),
          i
        );
      }

      function Ml(e) {
        return null !== e && void 0 !== e;
      }
      var _l = t(183),
        Dl = t.n(_l),
        Fl = t(128),
        zl = t(113);
      var ql = new TextDecoder();

      function Vl(e) {
        var n = (function (e) {
            if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
              throw new Error("hex must have length that is multiple of 2");
            for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++)
              n[t] = parseInt(e.substr(2 * t, 2), 16);
            return n;
          })(e),
          t = Object(Fl.getCodec)(n);
        switch (t) {
          case "ipfs-ns":
            var r = Object(Fl.rmPrefix)(n),
              a = new Dl.a(r);
            return "ipfs://".concat(Object(zl.toB58String)(a.multihash));
          case "ipns-ns":
            var i = Object(Fl.rmPrefix)(n),
              o = new Dl.a(i),
              c = Object(zl.decode)(o.multihash);
            return "identity" === c.name
              ? "ipns://".concat(ql.decode(c.digest).trim())
              : "ipns://".concat(Object(zl.toB58String)(o.multihash));
          default:
            throw new Error("Unrecognized codec: ".concat(t));
        }
      }
      var Hl = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

      function Yl(e) {
        var n = e.match(Hl);
        if (n)
          return {
            ensName: "".concat(n[1].toLowerCase(), "eth"),
            ensPath: n[3]
          };
      }

      function Wl(e) {
        var n, t;
        switch (e.split(":")[0].toLowerCase()) {
          case "https":
            return [e];
          case "http":
            return ["https" + e.substr(4), e];
          case "ipfs":
            var r =
              null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n
                ? void 0
                : n[2];
            return [
              "https://cloudflare-ipfs.com/ipfs/".concat(r, "/"),
              "https://ipfs.io/ipfs/".concat(r, "/")
            ];
          case "ipns":
            var a =
              null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t
                ? void 0
                : t[2];
            return [
              "https://cloudflare-ipfs.com/ipns/".concat(a, "/"),
              "https://ipfs.io/ipns/".concat(a, "/")
            ];
          default:
            return [];
        }
      }
      var Zl = t(91);

      function Ql(e) {
        return /^0x0*$/.test(e);
      }

      function Kl(e) {
        var n = Object(a.useMemo)(
            function () {
              return e ? Yl(e) : void 0;
            },
            [e]
          ),
          t = (function (e) {
            var n,
              t,
              r,
              i = Object(a.useMemo)(
                function () {
                  if (!e) return [void 0];
                  try {
                    return e ? [Object(Zl.namehash)(e)] : [void 0];
                  } catch (n) {
                    return [void 0];
                  }
                },
                [e]
              ),
              o = nl(ki(!1), "resolver", i),
              c = null === (n = o.result) || void 0 === n ? void 0 : n[0],
              s = nl(Ti(c && Ql(c) ? void 0 : c, !1), "contenthash", i);
            return {
              contenthash:
                null !==
                  (t =
                    null === (r = s.result) || void 0 === r ? void 0 : r[0]) &&
                void 0 !== t
                  ? t
                  : null,
              loading: o.loading || s.loading
            };
          })(null === n || void 0 === n ? void 0 : n.ensName);
        return Object(a.useMemo)(
          function () {
            return n
              ? t.contenthash
                ? Wl(Vl(t.contenthash))
                : []
              : e
              ? Wl(e)
              : [];
          },
          [n, t.contenthash, e]
        );
      }
      var Gl = t(497),
        Jl = {};

      function Xl(e) {
        var n = e.srcs,
          t = e.alt,
          i = Object(N.a)(e, ["srcs", "alt"]),
          o = Object(a.useState)(0),
          c = Object(Ln.a)(o, 2)[1],
          s = n.find(function (e) {
            return !Jl[e];
          });
        return s
          ? Object(r.jsx)(
              "img",
              Object(l.a)(
                Object(l.a)({}, i),
                {},
                {
                  alt: t,
                  src: s,
                  onError: function () {
                    s && (Jl[s] = !0),
                      c(function (e) {
                        return e + 1;
                      });
                  }
                }
              )
            )
          : Object(r.jsx)(Gl.a, Object(l.a)({}, i));
      }

      function $l() {
        var e = Object(s.a)(["\n  width: ", ";\n  height: ", ";\n"]);
        return (
          ($l = function () {
            return e;
          }),
          e
        );
      }
      var ed = Object(u.default)(Xl)(
        $l(),
        function (e) {
          return e.size;
        },
        function (e) {
          return e.size;
        }
      );

      function nd(e) {
        var n = e.logoURI,
          t = e.style,
          a = e.size,
          i = void 0 === a ? "24px" : a,
          o = e.alt,
          c = Kl(n);
        return Object(r.jsx)(ed, {
          alt: o,
          size: i,
          srcs: c,
          style: t
        });
      }
      var td = t(504);

      function rd(e, n) {
        var t =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = Object(a.useRef)();
        Object(a.useEffect)(
          function () {
            r.current = e;
          },
          [e]
        ),
          Object(a.useEffect)(
            function () {
              function e() {
                var e = r.current;
                e && e();
              }
              if (null !== n) {
                t && e();
                var a = setInterval(e, n);
                return function () {
                  return clearInterval(a);
                };
              }
            },
            [n, t]
          );
      }
      var ad = t(150);

      function id() {
        var e = Object(s.a)([
          "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
          ";\n    transform: rotate(45deg);\n    background: ",
          ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"
        ]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }

      function od() {
        var e = Object(s.a)(["\n  display: inline-block;\n"]);
        return (
          (od = function () {
            return e;
          }),
          e
        );
      }

      function cd() {
        var e = Object(s.a)([
          "\n  z-index: 9999;\n\n  visibility: ",
          ";\n  opacity: ",
          ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
          ";\n  border: 1px solid ",
          ";\n  box-shadow: 0 4px 8px 0 ",
          ";\n  color: ",
          ";\n  border-radius: 8px;\n"
        ]);
        return (
          (cd = function () {
            return e;
          }),
          e
        );
      }
      var sd = u.default.div(
          cd(),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          Object(sc.b)(0.9, "#2F80ED"),
          function (e) {
            return e.theme.colors.textSubtle;
          }
        ),
        ud = u.default.div(od()),
        ld = u.default.div(
          id(),
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          }
        );

      function dd(e) {
        var n,
          t,
          i = e.content,
          o = e.show,
          c = e.children,
          s = e.placement,
          u = void 0 === s ? "auto" : s,
          d = Object(a.useState)(null),
          b = Object(Ln.a)(d, 2),
          p = b[0],
          f = b[1],
          j = Object(a.useState)(null),
          h = Object(Ln.a)(j, 2),
          m = h[0],
          v = h[1],
          x = Object(a.useState)(null),
          y = Object(Ln.a)(x, 2),
          O = y[0],
          g = y[1],
          C = Object(td.a)(p, m, {
            placement: u,
            strategy: "fixed",
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [8, 8]
                }
              },
              {
                name: "arrow",
                options: {
                  element: O
                }
              }
            ]
          }),
          w = C.styles,
          k = C.update,
          T = C.attributes;
        return (
          rd(
            Object(a.useCallback)(
              function () {
                k && k();
              },
              [k]
            ),
            o ? 100 : null
          ),
          Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(ud, {
                ref: f,
                children: c
              }),
              Object(r.jsx)(ad.a, {
                children: Object(r.jsxs)(
                  sd,
                  Object(l.a)(
                    Object(l.a)(
                      {
                        show: o,
                        ref: v,
                        style: w.popper
                      },
                      T.popper
                    ),
                    {},
                    {
                      children: [
                        i,
                        Object(r.jsx)(
                          ld,
                          Object(l.a)(
                            {
                              className: "arrow-".concat(
                                null !==
                                  (n =
                                    null === (t = T.popper) || void 0 === t
                                      ? void 0
                                      : t["data-popper-placement"]) &&
                                  void 0 !== n
                                  ? n
                                  : ""
                              ),
                              ref: g,
                              style: w.arrow
                            },
                            T.arrow
                          )
                        )
                      ]
                    }
                  )
                )
              })
            ]
          })
        );
      }

      function bd() {
        var e = Object(s.a)([
          "\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"
        ]);
        return (
          (bd = function () {
            return e;
          }),
          e
        );
      }
      var pd = u.default.div(bd());

      function fd(e) {
        var n = e.text,
          t = Object(N.a)(e, ["text"]);
        return Object(r.jsx)(
          dd,
          Object(l.a)(
            {
              content: Object(r.jsx)(pd, {
                children: n
              })
            },
            t
          )
        );
      }

      function jd(e) {
        var n = e.children,
          t = Object(N.a)(e, ["children"]),
          i = Object(a.useState)(!1),
          o = Object(Ln.a)(i, 2),
          c = o[0],
          s = o[1],
          u = Object(a.useCallback)(
            function () {
              return s(!0);
            },
            [s]
          ),
          d = Object(a.useCallback)(
            function () {
              return s(!1);
            },
            [s]
          );
        return Object(r.jsx)(
          fd,
          Object(l.a)(
            Object(l.a)({}, t),
            {},
            {
              show: c,
              children: Object(r.jsx)("div", {
                onMouseEnter: u,
                onMouseLeave: d,
                children: n
              })
            }
          )
        );
      }

      function hd() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
          ";\n  color: ",
          ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"
        ]);
        return (
          (hd = function () {
            return e;
          }),
          e
        );
      }
      var md = u.default.div(
        hd(),
        function (e) {
          return e.theme.colors.invertedContrast;
        },
        function (e) {
          return e.theme.colors.textSubtle;
        }
      );

      function vd(e) {
        var n = e.text,
          t = Object(a.useState)(!1),
          i = Object(Ln.a)(t, 2),
          o = i[0],
          c = i[1],
          s = Object(a.useCallback)(
            function () {
              return c(!0);
            },
            [c]
          ),
          u = Object(a.useCallback)(
            function () {
              return c(!1);
            },
            [c]
          );
        return Object(r.jsx)("span", {
          style: {
            marginLeft: 4
          },
          children: Object(r.jsx)(fd, {
            text: n,
            show: o,
            children: Object(r.jsx)(md, {
              onClick: s,
              onMouseEnter: s,
              onMouseLeave: u,
              children: Object(r.jsx)(Gl.a, {
                size: 16
              })
            })
          })
        });
      }

      function xd() {
        var e = Object(s.a)(["\n  width: ", ";\n  height: ", ";\n"]);
        return (
          (xd = function () {
            return e;
          }),
          e
        );
      }
      var yd = Object(u.default)(Xl)(
        xd(),
        function (e) {
          return e.size;
        },
        function (e) {
          return e.size;
        }
      );

      function Od() {
        var e = Object(s.a)(["\n  width: ", ";\n  height: ", ";\n"]);
        return (
          (Od = function () {
            return e;
          }),
          e
        );
      }

      function gd() {
        var e = Object(s.a)([
          "\n  width: ",
          ";\n  height: ",
          ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"
        ]);
        return (
          (gd = function () {
            return e;
          }),
          e
        );
      }
      var Cd = function (e) {
          return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
            e,
            "/logo.png"
          );
        },
        wd = u.default.img(
          gd(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        kd = Object(u.default)(Xl)(
          Od(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        );

      function Td(e) {
        var n,
          t,
          i = e.currency,
          o = e.size,
          c = void 0 === o ? "24px" : o,
          s = e.style,
          u = Kl(i instanceof Su ? i.logoURI : void 0),
          l = Object(a.useMemo)(
            function () {
              return i === ur
                ? []
                : i instanceof lr
                ? i instanceof Su
                  ? [].concat(Object(aa.a)(u), [
                      "/images/coins/".concat(
                        null !==
                          (n =
                            null === i || void 0 === i ? void 0 : i.symbol) &&
                          void 0 !== n
                          ? n
                          : "token",
                        ".png"
                      ),
                      Cd(i.address)
                    ])
                  : [
                      "/images/coins/".concat(
                        null !==
                          (e =
                            null === i || void 0 === i ? void 0 : i.symbol) &&
                          void 0 !== e
                          ? e
                          : "token",
                        ".png"
                      ),
                      Cd(i.address)
                    ]
                : [];
              var e, n;
            },
            [i, u]
          );
        return i === ur
          ? Object(r.jsx)(wd, {
              src: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
              size: c,
              style: s
            })
          : (null === i || void 0 === i ? void 0 : i.symbol)
          ? Object(r.jsx)(yd, {
              size: c,
              srcs: l,
              alt: "".concat(
                null !== (n = null === i || void 0 === i ? void 0 : i.symbol) &&
                  void 0 !== n
                  ? n
                  : "token",
                " logo"
              ),
              style: s
            })
          : Object(r.jsx)(kd, {
              size: c,
              srcs: l,
              alt: "".concat(
                null !== (t = null === i || void 0 === i ? void 0 : i.symbol) &&
                  void 0 !== t
                  ? t
                  : "token",
                " logo"
              ),
              style: s
            });
      }

      function Id() {
        var e = Object(s.a)([
          "\n  border: 1px solid ",
          ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
          ";\n    background-color: ",
          ";\n  }\n\n  background-color: ",
          ";\n  opacity: ",
          ";\n"
        ]);
        return (
          (Id = function () {
            return e;
          }),
          e
        );
      }
      var Ed = u.default.div(
        Id(),
        function (e) {
          var n = e.theme;
          return e.disable ? "transparent" : n.colors.tertiary;
        },
        function (e) {
          return !e.disable && "pointer";
        },
        function (e) {
          var n = e.theme;
          return !e.disable && n.colors.invertedContrast;
        },
        function (e) {
          var n = e.theme;
          return e.disable && n.colors.tertiary;
        },
        function (e) {
          return e.disable && "0.4";
        }
      );

      function Ad(e) {
        var n = e.chainId,
          t = e.onSelect,
          a = e.selectedCurrency;
        return Object(r.jsxs)(Jo, {
          gap: "md",
          children: [
            Object(r.jsxs)(Wc, {
              children: [
                Object(r.jsx)(tc.b, {
                  fontWeight: 500,
                  fontSize: 14,
                  children: "Common bases"
                }),
                Object(r.jsx)(vd, {
                  text: "These tokens are commonly paired with other tokens."
                })
              ]
            }),
            Object(r.jsxs)(Wc, {
              gap: "4px",
              children: [
                Object(r.jsxs)(Ed, {
                  onClick: function () {
                    (a && dr(a, ur)) || t(ur);
                  },
                  disable: a === ur,
                  children: [
                    Object(r.jsx)(Td, {
                      currency: ur,
                      style: {
                        marginRight: 8
                      }
                    }),
                    Object(r.jsx)(tc.b, {
                      fontWeight: 500,
                      fontSize: 16,
                      children: "BNB"
                    })
                  ]
                }),
                (n ? Qa[n] : []).map(function (e) {
                  var n = a instanceof lr && a.address === e.address;
                  return Object(r.jsxs)(
                    Ed,
                    {
                      onClick: function () {
                        return !n && t(e);
                      },
                      disable: n,
                      children: [
                        Object(r.jsx)(Td, {
                          currency: e,
                          style: {
                            marginRight: 8
                          }
                        }),
                        Object(r.jsx)(tc.b, {
                          fontWeight: 500,
                          fontSize: 16,
                          children: e.symbol
                        })
                      ]
                    },
                    e.address
                  );
                })
              ]
            })
          ]
        });
      }
      var Sd = t(283);

      function Nd() {
        var e = Object(s.a)([
          "\n  width: 100%;\n  height: 1px;\n  background-color: ",
          ";\n"
        ]);
        return (
          (Nd = function () {
            return e;
          }),
          e
        );
      }

      function Rd() {
        var e = Object(s.a)([
          "\n  width: 100%;\n  height: 1px;\n  background-color: ",
          ";\n"
        ]);
        return (
          (Rd = function () {
            return e;
          }),
          e
        );
      }

      function Ld() {
        var e = Object(s.a)([
          "\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
          ";\n  border-style: solid;\n  border: 1px solid ",
          ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
          ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
          ";\n    outline: none;\n  }\n"
        ]);
        return (
          (Ld = function () {
            return e;
          }),
          e
        );
      }

      function Ud() {
        var e = Object(s.a)([
          "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
          ";\n  pointer-events: ",
          ";\n  :hover {\n    background-color: ",
          ";\n  }\n  opacity: ",
          ";\n"
        ]);
        return (
          (Ud = function () {
            return e;
          }),
          e
        );
      }

      function Bd() {
        var e = Object(s.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
        return (
          (Bd = function () {
            return e;
          }),
          e
        );
      }

      function Pd() {
        var e = Object(s.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
        return (
          (Pd = function () {
            return e;
          }),
          e
        );
      }

      function Md() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n"
        ]);
        return (
          (Md = function () {
            return e;
          }),
          e
        );
      }
      u.default.div(Md());
      var _d = Object(u.default)(Zc)(Pd(), function (e) {
          return e.theme.colors.primary;
        }),
        Dd = Object(u.default)(Jo)(Bd()),
        Fd = Object(u.default)(Hc)(
          Ud(),
          function (e) {
            return !e.disabled && "pointer";
          },
          function (e) {
            return e.disabled && "none";
          },
          function (e) {
            var n = e.theme;
            return !e.disabled && n.colors.invertedContrast;
          },
          function (e) {
            var n = e.disabled,
              t = e.selected;
            return n || t ? 0.5 : 1;
          }
        ),
        zd = u.default.input(
          Ld(),
          function (e) {
            return e.theme.colors.text;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.textDisabled;
          },
          function (e) {
            return e.theme.colors.primary;
          }
        ),
        qd = u.default.div(Rd(), function (e) {
          return e.theme.colors.invertedContrast;
        }),
        Vd = u.default.div(Nd(), function (e) {
          return e.theme.colors.tertiary;
        });

      function Hd() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: flex-end;\n"
        ]);
        return (
          (Hd = function () {
            return e;
          }),
          e
        );
      }

      function Yd() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  color: ",
          ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"
        ]);
        return (
          (Yd = function () {
            return e;
          }),
          e
        );
      }

      function Wd() {
        var e = Object(s.a)([
          "\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"
        ]);
        return (
          (Wd = function () {
            return e;
          }),
          e
        );
      }

      function Zd(e) {
        return e instanceof lr ? e.address : e === ur ? "ETHER" : "";
      }
      var Qd = Object(u.default)(g)(Wd()),
        Kd = u.default.div(
          Yd(),
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        );

      function Gd(e) {
        var n = e.balance;
        return Object(r.jsx)(Qd, {
          title: n.toExact(),
          children: n.toSignificant(4)
        });
      }
      var Jd = u.default.div(Hd());

      function Xd(e) {
        var n = e.currency;
        if (!(n instanceof Su)) return Object(r.jsx)("span", {});
        var t = n.tags;
        if (!t || 0 === t.length) return Object(r.jsx)("span", {});
        var a = t[0];
        return Object(r.jsxs)(Jd, {
          children: [
            Object(r.jsx)(jd, {
              text: a.description,
              children: Object(r.jsx)(
                Kd,
                {
                  children: a.name
                },
                a.id
              )
            }),
            t.length > 1
              ? Object(r.jsx)(jd, {
                  text: t
                    .slice(1)
                    .map(function (e) {
                      var n = e.name,
                        t = e.description;
                      return "".concat(n, ": ").concat(t);
                    })
                    .join("; \n"),
                  children: Object(r.jsx)(Kd, {
                    children: "..."
                  })
                })
              : null
          ]
        });
      }

      function $d(e) {
        var n = e.currency,
          t = e.onSelect,
          i = e.isSelected,
          o = e.otherSelected,
          c = e.style,
          s = yi(),
          u = s.account,
          l = s.chainId,
          d = Zd(n),
          b = mi(Bu(), n),
          p = (function (e) {
            return !!gl().find(function (n) {
              return dr(e, n);
            });
          })(n),
          f = Bl(null !== u && void 0 !== u ? u : void 0, n),
          j = (function () {
            var e = Object(Vo.c)();
            return Object(a.useCallback)(
              function (n, t) {
                e(
                  ll({
                    chainId: n,
                    address: t
                  })
                );
              },
              [e]
            );
          })(),
          h = Ol();
        return Object(r.jsxs)(Fd, {
          style: c,
          className: "token-item-".concat(d),
          onClick: function () {
            return i ? null : t();
          },
          disabled: i,
          selected: o,
          children: [
            Object(r.jsx)(Td, {
              currency: n,
              size: "24px"
            }),
            Object(r.jsxs)(Xo, {
              children: [
                Object(r.jsx)(g, {
                  title: n.name,
                  children: n.symbol
                }),
                Object(r.jsxs)(_d, {
                  children: [
                    b || !p || n instanceof Su
                      ? null
                      : Object(r.jsxs)(Ic, {
                          fontWeight: 500,
                          children: [
                            "Added by user",
                            Object(r.jsx)(xc, {
                              onClick: function (e) {
                                e.stopPropagation(),
                                  l && n instanceof lr && j(l, n.address);
                              },
                              children: "(Remove)"
                            })
                          ]
                        }),
                    b || p || n instanceof Su
                      ? null
                      : Object(r.jsxs)(Ic, {
                          fontWeight: 500,
                          children: [
                            "Found by address",
                            Object(r.jsx)(xc, {
                              onClick: function (e) {
                                e.stopPropagation(), n instanceof lr && h(n);
                              },
                              children: "(Add)"
                            })
                          ]
                        })
                  ]
                })
              ]
            }),
            Object(r.jsx)(Xd, {
              currency: n
            }),
            Object(r.jsx)(Zc, {
              style: {
                justifySelf: "flex-end"
              },
              children: f
                ? Object(r.jsx)(Gd, {
                    balance: f
                  })
                : u
                ? Object(r.jsx)(Os, {})
                : null
            })
          ]
        });
      }

      function eb(e) {
        var n = e.height,
          t = e.currencies,
          i = e.selectedCurrency,
          o = e.onCurrencySelect,
          c = e.otherCurrency,
          s = e.fixedListRef,
          u = e.showETH,
          l = Object(a.useMemo)(
            function () {
              return u ? [sr.ETHER].concat(Object(aa.a)(t)) : Object(aa.a)(t);
            },
            [t, u]
          ),
          d = Object(a.useCallback)(
            function (e) {
              var n = e.data,
                t = e.index,
                a = e.style,
                s = n[t],
                u = Boolean(i && dr(i, s)),
                l = Boolean(c && dr(c, s));
              return Object(r.jsx)($d, {
                style: a,
                currency: s,
                isSelected: u,
                onSelect: function () {
                  return o(s);
                },
                otherSelected: l
              });
            },
            [o, c, i]
          ),
          b = Object(a.useCallback)(function (e, n) {
            return Zd(n[e]);
          }, []);
        return Object(r.jsx)(Sd.a, {
          height: n,
          ref: s,
          width: "100%",
          itemData: l,
          itemCount: l.length,
          itemSize: 56,
          itemKey: b,
          children: d
        });
      }

      function nb() {
        var e = Object(s.a)([
          "\n  padding: 8px;\n  background-color: ",
          ";\n  color: ",
          ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"
        ]);
        return (
          (nb = function () {
            return e;
          }),
          e
        );
      }
      var tb = Object(u.default)(Zc)(
        nb(),
        function (e) {
          return e.theme.colors.invertedContrast;
        },
        function (e) {
          return e.theme.colors.text;
        }
      );

      function rb(e) {
        var n = e.toggleSortOrder,
          t = e.ascending;
        return Object(r.jsx)(tb, {
          onClick: n,
          children: Object(r.jsx)(tc.b, {
            fontSize: 14,
            fontWeight: 500,
            children: t ? "\u2191" : "\u2193"
          })
        });
      }

      function ab(e) {
        var n = (function () {
            var e = yi().account,
              n = kl(),
              t = Rl(
                null !== e && void 0 !== e ? e : void 0,
                Object(a.useMemo)(
                  function () {
                    return Object.values(null !== n && void 0 !== n ? n : {});
                  },
                  [n]
                )
              );
            return null !== t && void 0 !== t ? t : {};
          })(),
          t = Object(a.useMemo)(
            function () {
              return (function (e) {
                return function (n, t) {
                  var r,
                    a,
                    i =
                      ((r = e[n.address]),
                      (a = e[t.address]),
                      r && a
                        ? r.greaterThan(a)
                          ? -1
                          : r.equalTo(a)
                          ? 0
                          : 1
                        : r && r.greaterThan("0")
                        ? -1
                        : a && a.greaterThan("0")
                        ? 1
                        : 0);
                  return 0 !== i
                    ? i
                    : n.symbol && t.symbol
                    ? n.symbol.toLowerCase() < t.symbol.toLowerCase()
                      ? -1
                      : 1
                    : n.symbol || t.symbol
                    ? -1
                    : 0;
                };
              })(null !== n && void 0 !== n ? n : {});
            },
            [n]
          );
        return Object(a.useMemo)(
          function () {
            return e
              ? function (e, n) {
                  return -1 * t(e, n);
                }
              : t;
          },
          [e, t]
        );
      }
      var ib = t(277);

      function ob(e) {
        var n = e.selectedCurrency,
          t = e.onCurrencySelect,
          i = e.otherSelectedCurrency,
          o = e.showCommonBases,
          c = e.onDismiss,
          s = e.isOpen,
          l = (e.onChangeList, Object(hs.b)().t),
          d = yi().chainId,
          b = (Object(a.useContext)(u.ThemeContext), Object(a.useRef)()),
          p = Object(a.useState)(""),
          f = Object(Ln.a)(p, 2),
          j = f[0],
          h = f[1],
          m = Object(a.useState)(!1),
          v = Object(Ln.a)(m, 2),
          x = v[0],
          y = v[1],
          O = kl(),
          C = ui(j),
          w = El(j),
          k = Object(a.useMemo)(
            function () {
              var e = j.toLowerCase().trim();
              return "" === e || "b" === e || "bn" === e || "bnb" === e;
            },
            [j]
          ),
          T = ab(x),
          I = Object(Vo.d)(function (e) {
            return e.user.audioPlay;
          }),
          E = Object(a.useMemo)(
            function () {
              return C
                ? w
                  ? [w]
                  : []
                : (function (e, n) {
                    if (0 === n.length) return e;
                    var t = ui(n);
                    if (t)
                      return e.filter(function (e) {
                        return e.address === t;
                      });
                    var r = n
                      .toLowerCase()
                      .split(/\s+/)
                      .filter(function (e) {
                        return e.length > 0;
                      });
                    if (0 === r.length) return e;
                    var a = function (e) {
                      var n = e
                        .toLowerCase()
                        .split(/\s+/)
                        .filter(function (e) {
                          return e.length > 0;
                        });
                      return r.every(function (e) {
                        return (
                          0 === e.length ||
                          n.some(function (n) {
                            return n.startsWith(e) || n.endsWith(e);
                          })
                        );
                      });
                    };
                    return e.filter(function (e) {
                      var n = e.symbol,
                        t = e.name;
                      return (n && a(n)) || (t && a(t));
                    });
                  })(Object.values(O), j);
            },
            [C, w, O, j]
          ),
          A = Object(a.useMemo)(
            function () {
              if (w) return [w];
              var e = E.sort(T),
                n = j
                  .toLowerCase()
                  .split(/\s+/)
                  .filter(function (e) {
                    return e.length > 0;
                  });
              return n.length > 1
                ? e
                : [].concat(
                    Object(aa.a)(w ? [w] : []),
                    Object(aa.a)(
                      e.filter(function (e) {
                        var t;
                        return (
                          (null === (t = e.symbol) || void 0 === t
                            ? void 0
                            : t.toLowerCase()) === n[0]
                        );
                      })
                    ),
                    Object(aa.a)(
                      e.filter(function (e) {
                        var t;
                        return (
                          (null === (t = e.symbol) || void 0 === t
                            ? void 0
                            : t.toLowerCase()) !== n[0]
                        );
                      })
                    )
                  );
            },
            [E, j, w, T]
          ),
          S = Object(a.useCallback)(
            function (e) {
              if ((t(e), c(), I)) {
                var n = document.getElementById("bgMusic");
                n && n.play();
              }
            },
            [c, t, I]
          );
        Object(a.useEffect)(
          function () {
            s && h("");
          },
          [s]
        );
        var N = Object(a.useRef)(),
          R = Object(a.useCallback)(function (e) {
            var n,
              t = e.target.value,
              r = ui(t);
            h(r || t),
              null === (n = b.current) || void 0 === n || n.scrollTo(0);
          }, []),
          L = Object(a.useCallback)(
            function (e) {
              if ("Enter" === e.key)
                if ("eth" === j.toLowerCase().trim()) S(ur);
                else if (A.length > 0) {
                  var n;
                  ((null === (n = A[0].symbol) || void 0 === n
                    ? void 0
                    : n.toLowerCase()) !== j.trim().toLowerCase() &&
                    1 !== A.length) ||
                    S(A[0]);
                }
            },
            [A, S, j]
          );
        !(function () {
          var e,
            n,
            t = Uu(),
            r = Object(Vo.d)(function (e) {
              return e.lists.byUrl;
            }),
            a = t ? r[t] : void 0;
          (e = null === a || void 0 === a ? void 0 : a.current),
            (n = null === a || void 0 === a ? void 0 : a.pendingUpdate),
            null === a || void 0 === a || a.loadingRequestId;
        })();
        return Object(r.jsxs)(Xo, {
          style: {
            width: "100%",
            flex: "1 1"
          },
          children: [
            Object(r.jsxs)(Dd, {
              gap: "14px",
              children: [
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsxs)(g, {
                      children: [
                        Object(r.jsx)(wu, {
                          translationId: 82,
                          children: "Select a token"
                        }),
                        Object(r.jsx)(vd, {
                          text: gu(
                            130,
                            "Find a token by searching for its name or symbol or by pasting its address below."
                          )
                        })
                      ]
                    }),
                    Object(r.jsx)(Ye, {
                      onClick: c
                    })
                  ]
                }),
                Object(r.jsx)(zd, {
                  type: "text",
                  id: "token-search-input",
                  placeholder: l("tokenSearchPlaceholder"),
                  value: j,
                  ref: N,
                  onChange: R,
                  onKeyDown: L
                }),
                o &&
                  Object(r.jsx)(Ad, {
                    chainId: d,
                    onSelect: S,
                    selectedCurrency: n
                  }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsx)(g, {
                      fontSize: "14px",
                      children: Object(r.jsx)(wu, {
                        translationId: 126,
                        children: "Token name"
                      })
                    }),
                    Object(r.jsx)(rb, {
                      ascending: x,
                      toggleSortOrder: function () {
                        return y(function (e) {
                          return !e;
                        });
                      }
                    })
                  ]
                })
              ]
            }),
            Object(r.jsx)(qd, {}),
            Object(r.jsx)("div", {
              style: {
                flex: "1"
              },
              children: Object(r.jsx)(ib.a, {
                disableWidth: !0,
                children: function (e) {
                  var t = e.height;
                  return Object(r.jsx)(eb, {
                    height: t,
                    showETH: k,
                    currencies: A,
                    onCurrencySelect: S,
                    otherCurrency: i,
                    selectedCurrency: n,
                    fixedListRef: b
                  });
                }
              })
            }),
            null
          ]
        });
      }

      function cb() {
        return (cb =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }

      function sb(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var ub = a.createElement("path", {
        d: "M0.97168 1L6.20532 6L11.439 1",
        stroke: "#AEAEAE"
      });

      function lb(e, n) {
        var t = e.title,
          r = e.titleId,
          i = sb(e, ["title", "titleId"]);
        return a.createElement(
          "svg",
          cb(
            {
              width: 12,
              height: 7,
              viewBox: "0 0 12 7",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": r
            },
            i
          ),
          t
            ? a.createElement(
                "title",
                {
                  id: r
                },
                t
              )
            : null,
          ub
        );
      }
      var db = a.forwardRef(lb),
        bb = (t.p, t(278)),
        pb = t(279),
        fb = t.n(pb),
        jb = "pancakeswap",
        hb = [jb],
        mb = t(152),
        vb = new fb.a({
          allErrors: !0
        }).compile(bb);

      function xb(e, n) {
        return yb.apply(this, arguments);
      }

      function yb() {
        return (yb = Object(pt.a)(
          bt.a.mark(function e(n, t) {
            var r, a, i, o, c, s, u, l, d, b, p, f, j;
            return bt.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n !== jb) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", mb);
                    case 2:
                      if (!(r = Yl(n))) {
                        e.next = 25;
                        break;
                      }
                      return (e.prev = 4), (e.next = 7), t(r.ensName);
                    case 7:
                      (o = e.sent), (e.next = 14);
                      break;
                    case 10:
                      throw (
                        ((e.prev = 10),
                        (e.t0 = e.catch(4)),
                        console.debug(
                          "Failed to resolve ENS name: ".concat(r.ensName),
                          e.t0
                        ),
                        new Error(
                          "Failed to resolve ENS name: ".concat(r.ensName)
                        ))
                      );
                    case 14:
                      (e.prev = 14), (c = Vl(o)), (e.next = 22);
                      break;
                    case 18:
                      throw (
                        ((e.prev = 18),
                        (e.t1 = e.catch(14)),
                        console.debug(
                          "Failed to translate contenthash to URI",
                          o
                        ),
                        new Error(
                          "Failed to translate contenthash to URI: ".concat(o)
                        ))
                      );
                    case 22:
                      (a = Wl(
                        ""
                          .concat(c)
                          .concat(
                            null !== (i = r.ensPath) && void 0 !== i ? i : ""
                          )
                      )),
                        (e.next = 26);
                      break;
                    case 25:
                      a = Wl(n);
                    case 26:
                      s = 0;
                    case 27:
                      if (!(s < a.length)) {
                        e.next = 57;
                        break;
                      }
                      return (
                        (u = a[s]),
                        (l = s === a.length - 1),
                        (d = void 0),
                        (e.prev = 31),
                        (e.next = 34),
                        fetch(u)
                      );
                    case 34:
                      (d = e.sent), (e.next = 43);
                      break;
                    case 37:
                      if (
                        ((e.prev = 37),
                        (e.t2 = e.catch(31)),
                        console.debug("Failed to fetch list", n, e.t2),
                        !l)
                      ) {
                        e.next = 42;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(n));
                    case 42:
                      return e.abrupt("continue", 54);
                    case 43:
                      if (d.ok) {
                        e.next = 47;
                        break;
                      }
                      if (!l) {
                        e.next = 46;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(n));
                    case 46:
                      return e.abrupt("continue", 54);
                    case 47:
                      return (e.next = 49), d.json();
                    case 49:
                      if (((b = e.sent), vb(b))) {
                        e.next = 53;
                        break;
                      }
                      throw (
                        ((j =
                          null !==
                            (p =
                              null === (f = vb.errors) || void 0 === f
                                ? void 0
                                : f.reduce(function (e, n) {
                                    var t,
                                      r = ""
                                        .concat(n.dataPath, " ")
                                        .concat(
                                          null !== (t = n.message) &&
                                            void 0 !== t
                                            ? t
                                            : ""
                                        );
                                    return e.length > 0
                                      ? "".concat(e, "; ").concat(r)
                                      : "".concat(r);
                                  }, "")) && void 0 !== p
                            ? p
                            : "unknown error"),
                        new Error("Token list failed validation: ".concat(j)))
                      );
                    case 53:
                      return e.abrupt("return", b);
                    case 54:
                      s++, (e.next = 27);
                      break;
                    case 57:
                      throw new Error("Unrecognized list URL protocol.");
                    case 58:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [4, 10],
                [14, 18],
                [31, 37]
              ]
            );
          })
        )).apply(this, arguments);
      }
      var Ob = [
          {
            constant: !0,
            inputs: [
              {
                name: "node",
                type: "bytes32"
              }
            ],
            name: "resolver",
            outputs: [
              {
                name: "resolverAddress",
                type: "address"
              }
            ],
            payable: !1,
            stateMutability: "view",
            type: "function"
          }
        ],
        gb = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        Cb = [
          {
            constant: !0,
            inputs: [
              {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
              }
            ],
            name: "contenthash",
            outputs: [
              {
                internalType: "bytes",
                name: "",
                type: "bytes"
              }
            ],
            payable: !1,
            stateMutability: "view",
            type: "function"
          }
        ];

      function wb(e, n) {
        return new It.a(e, Cb, n);
      }

      function kb(e, n) {
        return Tb.apply(this, arguments);
      }

      function Tb() {
        return (Tb = Object(pt.a)(
          bt.a.mark(function e(n, t) {
            var r, a, i;
            return bt.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = new It.a(gb, Ob, t)),
                      (a = Object(Zl.namehash)(n)),
                      (e.next = 4),
                      r.resolver(a)
                    );
                  case 4:
                    return (
                      (i = e.sent), e.abrupt("return", wb(i, t).contenthash(a))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function Ib() {
        var e = yi(),
          n = e.chainId,
          t = e.library,
          r = Object(Vo.c)(),
          i = Object(a.useCallback)(
            function (e) {
              if (!t || n !== ot.MAINNET) {
                if (Ra === ot.MAINNET) {
                  var r = (function () {
                    var e;
                    return (La =
                      null !== (e = La) && void 0 !== e
                        ? e
                        : new ia.a(Ua.provider));
                  })();
                  if (r) return kb(e, r);
                }
                throw new Error("Could not construct mainnet ENS resolver");
              }
              return kb(e, t);
            },
            [n, t]
          );
        return Object(a.useCallback)(
          (function () {
            var e = Object(pt.a)(
              bt.a.mark(function e(n) {
                var t;
                return bt.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = Object(Mo.e)()),
                          r(
                            rc.pending({
                              requestId: t,
                              url: n
                            })
                          ),
                          e.abrupt(
                            "return",
                            xb(n, i)
                              .then(function (e) {
                                return (
                                  r(
                                    rc.fulfilled({
                                      url: n,
                                      tokenList: e,
                                      requestId: t
                                    })
                                  ),
                                  e
                                );
                              })
                              .catch(function (e) {
                                throw (
                                  (console.debug(
                                    "Failed to get list at url ".concat(n),
                                    e
                                  ),
                                  r(
                                    rc.rejected({
                                      url: n,
                                      requestId: t,
                                      errorMessage: e.message
                                    })
                                  ),
                                  e)
                                );
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          [r, i]
        );
      }

      function Eb() {
        var e = Object(s.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
        return (
          (Eb = function () {
            return e;
          }),
          e
        );
      }

      function Ab() {
        var e = Object(s.a)([
          "\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"
        ]);
        return (
          (Ab = function () {
            return e;
          }),
          e
        );
      }

      function Sb() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"
        ]);
        return (
          (Sb = function () {
            return e;
          }),
          e
        );
      }

      function Nb() {
        var e = Object(s.a)([
          "\n  z-index: 100;\n  visibility: ",
          ";\n  opacity: ",
          ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
          ";\n  border: 1px solid ",
          ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
          ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"
        ]);
        return (
          (Nb = function () {
            return e;
          }),
          e
        );
      }

      function Rb() {
        var e = Object(s.a)([
          "\n  padding: 0;\n  font-size: 1rem;\n  opacity: ",
          ";\n"
        ]);
        return (
          (Rb = function () {
            return e;
          }),
          e
        );
      }
      var Lb = Object(u.default)(xc)(Rb(), function (e) {
          return e.disabled ? "0.4" : "1";
        }),
        Ub = u.default.div(
          Nb(),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        ),
        Bb = u.default.div(Sb()),
        Pb = u.default.div(Ab());

      function Mb(e) {
        var n = e.listUrl,
          t = Object(a.useMemo)(
            function () {
              var e;
              return null === (e = Yl(n)) || void 0 === e ? void 0 : e.ensName;
            },
            [n]
          ),
          i = Object(a.useMemo)(
            function () {
              if (!t) {
                var e = n.toLowerCase();
                if (e.startsWith("ipfs://") || e.startsWith("ipns://"))
                  return n;
                try {
                  return new URL(n).host;
                } catch (r) {
                  return;
                }
              }
            },
            [n, t]
          );
        return Object(r.jsx)(r.Fragment, {
          children: null !== t && void 0 !== t ? t : i
        });
      }

      function _b(e) {
        return "list-row-".concat(e.replace(/\./g, "-"));
      }
      var Db = Object(a.memo)(function (e) {
          var n = e.listUrl,
            t = e.onBack,
            i = Object(Vo.d)(function (e) {
              return e.lists.byUrl;
            }),
            o = Uu(),
            c = Object(Vo.c)(),
            s = i[n],
            u = s.current,
            d = s.pendingUpdate,
            b = n === o,
            p = (function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                n = Object(a.useState)(e),
                t = Object(Ln.a)(n, 2),
                r = t[0],
                i = t[1],
                o = Object(a.useCallback)(function () {
                  return i(function (e) {
                    return !e;
                  });
                }, []);
              return [r, o];
            })(!1),
            f = Object(Ln.a)(p, 2),
            j = f[0],
            h = f[1],
            m = Object(a.useRef)(),
            v = Object(a.useState)(),
            x = Object(Ln.a)(v, 2),
            y = x[0],
            O = x[1],
            g = Object(a.useState)(),
            C = Object(Ln.a)(g, 2),
            w = C[0],
            k = C[1],
            T = Object(td.a)(y, w, {
              placement: "auto",
              strategy: "fixed",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [8, 8]
                  }
                }
              ]
            }),
            I = T.styles,
            E = T.attributes;
          !(function (e, n) {
            var t = Object(a.useRef)(n);
            Object(a.useEffect)(
              function () {
                t.current = n;
              },
              [n]
            ),
              Object(a.useEffect)(
                function () {
                  var n = function (n) {
                    var r, a;
                    (null !==
                      (r =
                        null === (a = e.current) || void 0 === a
                          ? void 0
                          : a.contains(n.target)) &&
                      void 0 !== r &&
                      r) ||
                      (t.current && t.current());
                  };
                  return (
                    document.addEventListener("mousedown", n),
                    function () {
                      document.removeEventListener("mousedown", n);
                    }
                  );
                },
                [e]
              );
          })(m, j ? h : void 0);
          var A = Object(a.useCallback)(
              function () {
                b || (c(cc(n)), t());
              },
              [c, b, n, t]
            ),
            S = Object(a.useCallback)(
              function () {
                d && c(ac(n));
              },
              [c, n, d]
            ),
            N = Object(a.useCallback)(
              function () {
                "REMOVE" ===
                  window.prompt(
                    "Please confirm you would like to remove this list by typing REMOVE"
                  ) && c(oc(n));
              },
              [c, n]
            );
          return u
            ? Object(r.jsxs)(
                Qc,
                {
                  align: "center",
                  padding: "16px",
                  id: _b(n),
                  children: [
                    u.logoURI
                      ? Object(r.jsx)(nd, {
                          style: {
                            marginRight: "1rem"
                          },
                          logoURI: u.logoURI,
                          alt: "".concat(u.name, " list logo")
                        })
                      : Object(r.jsx)("div", {
                          style: {
                            width: "24px",
                            height: "24px",
                            marginRight: "1rem"
                          }
                        }),
                    Object(r.jsxs)(Xo, {
                      style: {
                        flex: "1"
                      },
                      children: [
                        Object(r.jsx)(Qc, {
                          children: Object(r.jsx)(tc.b, {
                            fontWeight: b ? 500 : 400,
                            fontSize: 16,
                            style: {
                              overflow: "hidden",
                              textOverflow: "ellipsis"
                            },
                            children: u.name
                          })
                        }),
                        Object(r.jsx)(Qc, {
                          style: {
                            marginTop: "4px"
                          },
                          children: Object(r.jsx)(Pb, {
                            title: n,
                            children: Object(r.jsx)(Mb, {
                              listUrl: n
                            })
                          })
                        })
                      ]
                    }),
                    Object(r.jsxs)(Bb, {
                      ref: m,
                      children: [
                        Object(r.jsx)("div", {
                          style: {
                            display: "inline-block"
                          },
                          ref: O,
                          children: Object(r.jsx)(W, {
                            style: {
                              width: "32px",
                              marginRight: "8px"
                            },
                            onClick: h,
                            variant: "secondary",
                            children: Object(r.jsx)(db, {})
                          })
                        }),
                        j &&
                          Object(r.jsxs)(
                            Ub,
                            Object(l.a)(
                              Object(l.a)(
                                {
                                  show: !0,
                                  ref: k,
                                  style: I.popper
                                },
                                E.popper
                              ),
                              {},
                              {
                                children: [
                                  Object(r.jsx)("div", {
                                    children: u && Pc(u.version)
                                  }),
                                  Object(r.jsx)(Vd, {}),
                                  Object(r.jsx)(gc, {
                                    href: "https://tokenlists.org/token-list?url=".concat(
                                      n
                                    ),
                                    children: "View list"
                                  }),
                                  Object(r.jsx)(Lb, {
                                    onClick: N,
                                    disabled: 1 === Object.keys(i).length,
                                    children: "Remove list"
                                  }),
                                  d &&
                                    Object(r.jsx)(Lb, {
                                      onClick: S,
                                      children: "Update list"
                                    })
                                ]
                              }
                            )
                          )
                      ]
                    }),
                    b
                      ? Object(r.jsx)(W, {
                          disabled: !0,
                          style: {
                            width: "5rem",
                            minWidth: "5rem"
                          },
                          children: "Selected"
                        })
                      : Object(r.jsx)(r.Fragment, {
                          children: Object(r.jsx)(W, {
                            className: "select-button",
                            style: {
                              width: "5rem",
                              minWidth: "4.5rem"
                            },
                            onClick: A,
                            children: "Select"
                          })
                        })
                  ]
                },
                n
              )
            : null;
        }),
        Fb = u.default.div(Eb());

      function zb(e) {
        var n,
          t = e.onDismiss,
          i = e.onBack,
          o = Object(a.useState)(""),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          u = c[1],
          l = Object(Vo.c)(),
          d = Object(Vo.d)(function (e) {
            return e.lists.byUrl;
          }),
          b = Boolean(
            null === (n = d[s]) || void 0 === n ? void 0 : n.loadingRequestId
          ),
          p = Object(a.useState)(null),
          f = Object(Ln.a)(p, 2),
          j = f[0],
          h = f[1],
          m = Object(a.useCallback)(function (e) {
            u(e.target.value), h(null);
          }, []),
          v = Ib(),
          x = Object(a.useCallback)(
            function () {
              b ||
                (h(null),
                v(s)
                  .then(function () {
                    u("");
                  })
                  .catch(function (e) {
                    h(e.message), l(oc(s));
                  }));
            },
            [b, l, v, s]
          ),
          y = Object(a.useMemo)(
            function () {
              return Wl(s).length > 0 || Boolean(Yl(s));
            },
            [s]
          ),
          O = Object(a.useCallback)(
            function (e) {
              y && "Enter" === e.key && x();
            },
            [x, y]
          ),
          g = Object(a.useMemo)(
            function () {
              return Object.keys(d)
                .filter(function (e) {
                  return Boolean(d[e].current);
                })
                .sort(function (e, n) {
                  var t = d[e].current,
                    r = d[n].current;
                  return t && r
                    ? t.name.toLowerCase() < r.name.toLowerCase()
                      ? -1
                      : t.name.toLowerCase() === r.name.toLowerCase()
                      ? 0
                      : 1
                    : t
                    ? -1
                    : r
                    ? 1
                    : 0;
                });
            },
            [d]
          );
        return Object(r.jsxs)(Xo, {
          style: {
            width: "100%",
            flex: "1 1"
          },
          children: [
            Object(r.jsx)(Dd, {
              children: Object(r.jsxs)(Hc, {
                children: [
                  Object(r.jsx)("div", {
                    children: Object(r.jsx)(uc.a, {
                      style: {
                        cursor: "pointer"
                      },
                      onClick: i
                    })
                  }),
                  Object(r.jsx)(tc.b, {
                    fontWeight: 500,
                    fontSize: 20,
                    children: "Manage Lists"
                  }),
                  Object(r.jsx)(vc, {
                    onClick: t
                  })
                ]
              })
            }),
            Object(r.jsx)(qd, {}),
            Object(r.jsxs)(Dd, {
              gap: "14px",
              children: [
                Object(r.jsxs)(tc.b, {
                  fontWeight: 600,
                  children: [
                    "Add a list",
                    " ",
                    Object(r.jsx)(vd, {
                      text: "Token lists are an open specification for lists of ERC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious ERC20 tokens."
                    })
                  ]
                }),
                Object(r.jsxs)(Qc, {
                  children: [
                    Object(r.jsx)(zd, {
                      type: "text",
                      id: "list-add-input",
                      placeholder: "https:// or ipfs:// or ENS name",
                      value: s,
                      onChange: m,
                      onKeyDown: O,
                      style: {
                        height: "2.75rem",
                        borderRadius: 12,
                        padding: "12px"
                      }
                    }),
                    Object(r.jsx)(W, {
                      onClick: x,
                      style: {
                        maxWidth: "4em",
                        marginLeft: "1em"
                      },
                      disabled: !y,
                      children: "Add"
                    })
                  ]
                }),
                j
                  ? Object(r.jsx)(Bc, {
                      title: j,
                      style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                      },
                      error: !0,
                      children: j
                    })
                  : null
              ]
            }),
            Object(r.jsx)(qd, {}),
            Object(r.jsx)(Fb, {
              children: g.map(function (e) {
                return Object(r.jsx)(
                  Db,
                  {
                    listUrl: e,
                    onBack: i
                  },
                  e
                );
              })
            }),
            Object(r.jsx)(qd, {}),
            Object(r.jsx)("div", {
              style: {
                padding: "16px",
                textAlign: "center"
              },
              children: Object(r.jsx)(gc, {
                href: "https://tokenlists.org",
                children: "Browse lists"
              })
            })
          ]
        });
      }

      function qb(e) {
        var n = e.isOpen,
          t = e.onDismiss,
          i = e.onCurrencySelect,
          o = e.selectedCurrency,
          c = e.otherSelectedCurrency,
          s = Object(a.useState)(!1),
          u = Object(Ln.a)(s, 2),
          l = u[0],
          d = u[1],
          b = Pl(n);
        Object(a.useEffect)(
          function () {
            n && !b && d(!1);
          },
          [n, b]
        );
        var p = Object(a.useCallback)(
            function (e) {
              i(e), t();
            },
            [t, i]
          ),
          f = Object(a.useCallback)(function () {
            d(!0);
          }, []),
          j = Object(a.useCallback)(function () {
            d(!1);
          }, []),
          h = !Uu();
        return Object(r.jsx)(Ks, {
          isOpen: n,
          onDismiss: t,
          maxHeight: 90,
          minHeight: l ? 40 : h ? 0 : 80,
          children: l
            ? Object(r.jsx)(zb, {
                onDismiss: t,
                onBack: j
              })
            : Object(r.jsx)(ob, {
                isOpen: n,
                onDismiss: t,
                onCurrencySelect: p,
                onChangeList: f,
                selectedCurrency: o,
                otherSelectedCurrency: c,
                showCommonBases: !1
              })
        });
      }

      function Vb() {
        var e = Object(s.a)(["\n  position: absolute;\n  left: ", ";\n"]);
        return (
          (Vb = function () {
            return e;
          }),
          e
        );
      }

      function Hb() {
        var e = Object(s.a)(["\n  z-index: 2;\n"]);
        return (
          (Hb = function () {
            return e;
          }),
          e
        );
      }

      function Yb() {
        var e = Object(s.a)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ",
          ";\n"
        ]);
        return (
          (Yb = function () {
            return e;
          }),
          e
        );
      }
      var Wb = u.default.div(Yb(), function (e) {
          var n = e.sizeraw;
          return e.margin && (n / 3 + 8).toString() + "px";
        }),
        Zb = Object(u.default)(Td)(Hb()),
        Qb = Object(u.default)(Td)(Vb(), function (e) {
          return (e.sizeraw / 2).toString() + "px";
        });

      function Kb(e) {
        var n = e.currency0,
          t = e.currency1,
          a = e.size,
          i = void 0 === a ? 16 : a,
          o = e.margin,
          c = void 0 !== o && o;
        return Object(r.jsxs)(Wb, {
          sizeraw: i,
          margin: c,
          children: [
            n &&
              Object(r.jsx)(Zb, {
                currency: n,
                size: i.toString() + "px"
              }),
            t &&
              Object(r.jsx)(Qb, {
                currency: t,
                size: i.toString() + "px",
                sizeraw: i
              })
          ]
        });
      }

      function Gb() {
        var e = Object(s.a)([
          "\n  color: ",
          ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",
          ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
          ";\n  }\n"
        ]);
        return (
          (Gb = function () {
            return e;
          }),
          e
        );
      }
      var Jb = u.default.input(
          Gb(),
          function (e) {
            var n = e.error,
              t = e.theme;
            return n ? t.colors.failure : t.colors.text;
          },
          function (e) {
            var n = e.align;
            return n && n;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        ),
        Xb = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        $b = i.a.memo(function (e) {
          var n = e.value,
            t = e.onUserInput,
            a = e.placeholder,
            i = Object(N.a)(e, ["value", "onUserInput", "placeholder"]);
          return Object(r.jsx)(
            Jb,
            Object(l.a)(
              Object(l.a)({}, i),
              {},
              {
                value: n,
                onChange: function (e) {
                  var n;
                  ("" === (n = e.target.value.replace(/,/g, ".")) ||
                    Xb.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) &&
                    t(n);
                },
                inputMode: "decimal",
                title: "Token Amount",
                autoComplete: "off",
                autoCorrect: "off",
                type: "text",
                pattern: "^[0-9]*[.,]?[0-9]*$",
                placeholder: a || "0.0",
                minLength: 1,
                maxLength: 79,
                spellCheck: "false"
              }
            )
          );
        });

      function ep() {
        var e = Object(s.a)([
          "\n  border-radius: 16px;\n  background-color: ",
          ";\n  box-shadow: ",
          ";\n"
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }

      function np() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ",
          ";\n  background-color: ",
          ";\n  z-index: 1;\n"
        ]);
        return (
          (np = function () {
            return e;
          }),
          e
        );
      }

      function tp() {
        var e = Object(s.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"
        ]);
        return (
          (tp = function () {
            return e;
          }),
          e
        );
      }

      function rp() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",
          ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
          ";\n  }\n"
        ]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }

      function ap() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",
          ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ",
          ";\n  }\n"
        ]);
        return (
          (ap = function () {
            return e;
          }),
          e
        );
      }

      function ip() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",
          ";\n"
        ]);
        return (
          (ip = function () {
            return e;
          }),
          e
        );
      }
      var op = u.default.div(ip(), function (e) {
          return e.selected
            ? "0.75rem 0.5rem 0.75rem 1rem"
            : "0.75rem 0.75rem 0.75rem 1rem";
        }),
        cp = u.default.button(
          ap(),
          function (e) {
            var n = e.selected,
              t = e.theme;
            return n ? t.colors.text : "#FFFFFF";
          },
          function (e) {
            var n = e.theme;
            return Object(sc.a)(0.05, n.colors.input);
          }
        ),
        sp = u.default.div(
          rp(),
          function (e) {
            return e.theme.colors.text;
          },
          function (e) {
            var n = e.theme;
            return Object(sc.a)(0.2, n.colors.textSubtle);
          }
        ),
        up = u.default.span(tp()),
        lp = u.default.div(
          np(),
          function (e) {
            return e.hideInput ? "8px" : "20px";
          },
          function (e) {
            return e.theme.colors.background;
          }
        ),
        dp = u.default.div(
          ep(),
          function (e) {
            return e.theme.colors.input;
          },
          function (e) {
            return e.theme.shadows.inset;
          }
        );

      function bp(e) {
        var n = e.value,
          t = e.onUserInput,
          i = e.onMax,
          o = e.showMaxButton,
          c = e.label,
          s = void 0 === c ? gu(132, "Input") : c,
          u = e.onCurrencySelect,
          l = e.currency,
          d = e.disableCurrencySelect,
          b = void 0 !== d && d,
          p = e.hideBalance,
          f = void 0 !== p && p,
          j = e.pair,
          h = void 0 === j ? null : j,
          m = e.hideInput,
          v = void 0 !== m && m,
          x = e.otherCurrency,
          y = e.id,
          O = e.showCommonBases,
          C = Object(a.useState)(!1),
          w = Object(Ln.a)(C, 2),
          k = w[0],
          T = w[1],
          I = yi().account,
          E = Bl(
            null !== I && void 0 !== I ? I : void 0,
            null !== l && void 0 !== l ? l : void 0
          ),
          A = Object(a.useCallback)(
            function () {
              T(!1);
            },
            [T]
          );
        return Object(r.jsxs)(lp, {
          id: y,
          children: [
            Object(r.jsxs)(dp, {
              hideInput: v,
              children: [
                !v &&
                  Object(r.jsx)(sp, {
                    children: Object(r.jsxs)(Hc, {
                      children: [
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          children: s
                        }),
                        I &&
                          Object(r.jsx)(g, {
                            onClick: i,
                            fontSize: "14px",
                            style: {
                              display: "inline",
                              cursor: "pointer"
                            },
                            children:
                              !f && l && E
                                ? "Balance: " +
                                  (null === E || void 0 === E
                                    ? void 0
                                    : E.toSignificant(6))
                                : " -"
                          })
                      ]
                    })
                  }),
                Object(r.jsxs)(op, {
                  style: v
                    ? {
                        padding: "0",
                        borderRadius: "8px"
                      }
                    : {},
                  selected: b,
                  children: [
                    !v &&
                      Object(r.jsxs)(r.Fragment, {
                        children: [
                          Object(r.jsx)($b, {
                            className: "token-amount-input",
                            value: n,
                            onUserInput: function (e) {
                              t(e);
                            }
                          }),
                          I &&
                            l &&
                            o &&
                            "To" !== s &&
                            Object(r.jsx)(W, {
                              onClick: i,
                              size: "sm",
                              variant: "text",
                              children: "MAX"
                            })
                        ]
                      }),
                    Object(r.jsx)(cp, {
                      selected: !!l,
                      className: "open-currency-select-button",
                      onClick: function () {
                        b || T(!0);
                      },
                      children: Object(r.jsxs)(up, {
                        children: [
                          h
                            ? Object(r.jsx)(Kb, {
                                currency0: h.token0,
                                currency1: h.token1,
                                size: 16,
                                margin: !0
                              })
                            : l
                            ? Object(r.jsx)(Td, {
                                currency: l,
                                size: "24px",
                                style: {
                                  marginRight: "8px"
                                }
                              })
                            : null,
                          h
                            ? Object(r.jsxs)(g, {
                                children: [
                                  null === h || void 0 === h
                                    ? void 0
                                    : h.token0.symbol,
                                  ":",
                                  null === h || void 0 === h
                                    ? void 0
                                    : h.token1.symbol
                                ]
                              })
                            : Object(r.jsx)(g, {
                                children:
                                  (l && l.symbol && l.symbol.length > 20
                                    ? l.symbol.slice(0, 4) +
                                      "..." +
                                      l.symbol.slice(
                                        l.symbol.length - 5,
                                        l.symbol.length
                                      )
                                    : null === l || void 0 === l
                                    ? void 0
                                    : l.symbol) ||
                                  Object(r.jsx)(wu, {
                                    translationId: 82,
                                    children: "Select a currency"
                                  })
                              }),
                          !b && Object(r.jsx)(He, {})
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            !b &&
              u &&
              Object(r.jsx)(qb, {
                isOpen: k,
                onDismiss: A,
                onCurrencySelect: u,
                selectedCurrency: l,
                otherSelectedCurrency: x,
                showCommonBases: O
              })
          ]
        });
      }

      function pp() {
        var e = Object(s.a)(["\n  color: ", ";\n"]);
        return (
          (pp = function () {
            return e;
          }),
          e
        );
      }

      function fp() {
        var e = Object(s.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
        return (
          (fp = function () {
            return e;
          }),
          e
        );
      }

      function jp() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
          ";\n  font-size: 20px;\n\n  &.",
          " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
          ";\n  }\n\n  :hover,\n  :focus {\n    color: ",
          ";\n  }\n"
        ]);
        return (
          (jp = function () {
            return e;
          }),
          e
        );
      }

      function hp() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
          ";\n  font-size: 20px;\n\n  &.",
          " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
          ";\n  }\n\n  :hover,\n  :focus {\n    color: ",
          ";\n  }\n"
        ]);
        return (
          (hp = function () {
            return e;
          }),
          e
        );
      }

      function mp() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"
        ]);
        return (
          (mp = function () {
            return e;
          }),
          e
        );
      }
      var vp = u.default.div(mp()),
        xp = "ACTIVE",
        yp =
          (u.default.a(
            hp(),
            function (e) {
              return e.theme.colors.textDisabled;
            },
            xp,
            function (e) {
              return e.theme.colors.text;
            },
            function (e) {
              var n = e.theme;
              return Object(sc.a)(0.1, n.colors.text);
            }
          ),
          Object(u.default)(qn.c).attrs({
            activeClassName: xp
          })(
            jp(),
            function (e) {
              return e.theme.colors.textDisabled;
            },
            xp,
            function (e) {
              return e.theme.colors.text;
            },
            function (e) {
              var n = e.theme;
              return Object(sc.a)(0.1, n.colors.text);
            }
          ),
          u.default.div(fp())),
        Op = Object(u.default)(uc.a)(pp(), function (e) {
          return e.theme.colors.text;
        });

      function gp() {
        return Object(r.jsx)(vp, {
          children: Object(r.jsxs)(Hc, {
            style: {
              padding: "1rem"
            },
            children: [
              Object(r.jsx)(qn.b, {
                to: "/pool",
                children: Object(r.jsx)(Op, {})
              }),
              Object(r.jsx)(yp, {
                children: "Import Pool"
              }),
              Object(r.jsx)(vd, {
                text: "Use this tool to find pairs that don't automatically appear in the interface."
              })
            ]
          })
        });
      }

      function Cp(e) {
        var n = e.adding;
        return Object(r.jsx)(vp, {
          children: Object(r.jsxs)(Hc, {
            style: {
              padding: "1rem"
            },
            children: [
              Object(r.jsx)(qn.b, {
                to: "/pool",
                children: Object(r.jsx)(Op, {})
              }),
              Object(r.jsxs)(yp, {
                children: [n ? "Add" : "Remove", " Liquidity"]
              }),
              Object(r.jsx)(vd, {
                text: n
                  ? "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time."
                  : "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."
              })
            ]
          })
        });
      }
      var wp = t(498),
        kp = t(499);

      function Tp(e) {
        var n,
          t,
          r =
            null ===
              (n = nl(
                wi(null === e || void 0 === e ? void 0 : e.address, !1),
                "totalSupply"
              )) ||
            void 0 === n ||
            null === (t = n.result) ||
            void 0 === t
              ? void 0
              : t[0];
        return e && r ? new gr(e, r.toString()) : void 0;
      }

      function Ip(e) {
        if (e === ur) return "ETH";
        if (e instanceof lr) return e.address;
        throw new Error("invalid currency");
      }

      function Ep(e, n) {
        return n && e === ur ? fr[n] : e instanceof lr ? e : void 0;
      }

      function Ap(e, n) {
        var t = e && n ? Ep(e.currency, n) : void 0;
        return t && e ? new gr(t, e.raw) : void 0;
      }

      function Sp(e) {
        return e.equals(fr[e.chainId]) ? ur : e;
      }

      function Np() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  color: ",
          ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"
        ]);
        return (
          (Np = function () {
            return e;
          }),
          e
        );
      }

      function Rp() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"
        ]);
        return (
          (Rp = function () {
            return e;
          }),
          e
        );
      }

      function Lp() {
        var e = Object(s.a)([
          "\n  background-color: ",
          ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
          ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"
        ]);
        return (
          (Lp = function () {
            return e;
          }),
          e
        );
      }

      function Up() {
        var e = Object(s.a)([
          "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"
        ]);
        return (
          (Up = function () {
            return e;
          }),
          e
        );
      }

      function Bp() {
        var e = Object(s.a)([
          "\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n"
        ]);
        return (
          (Bp = function () {
            return e;
          }),
          e
        );
      }

      function Pp() {
        var e = Object(s.a)([
          "\n  height: 22px;\n  width: 22px;\n  background-color: ",
          ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
          ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
          ";\n  }\n  :focus {\n    background-color: ",
          ";\n    outline: none;\n  }\n"
        ]);
        return (
          (Pp = function () {
            return e;
          }),
          e
        );
      }

      function Mp() {
        var e = Object(s.a)(["\n  color: ", ";\n"]);
        return (
          (Mp = function () {
            return e;
          }),
          e
        );
      }

      function _p() {
        var e = Object(s.a)(["\n  margin-top: 1rem;\n"]);
        return (
          (_p = function () {
            return e;
          }),
          e
        );
      }

      function Dp() {
        var e = Object(s.a)([
          "\n  height: 1px;\n  width: 100%;\n  background-color: ",
          ";\n"
        ]);
        return (
          (Dp = function () {
            return e;
          }),
          e
        );
      }

      function Fp() {
        var e = Object(s.a)([
          "\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "
        ]);
        return (
          (Fp = function () {
            return e;
          }),
          e
        );
      }

      function zp() {
        var e = Object(s.a)(["\n  padding: 2px;\n\n  ", "\n"]);
        return (
          (zp = function () {
            return e;
          }),
          e
        );
      }

      function qp() {
        var e = Object(s.a)(["\n  position: relative;\n"]);
        return (
          (qp = function () {
            return e;
          }),
          e
        );
      }
      var Vp = u.default.div(qp()),
        Hp = u.default.div(zp(), function (e) {
          return e.clickable ? Object(u.css)(Fp()) : null;
        }),
        Yp = u.default.div(Dp(), function (e) {
          return e.theme.colors.tertiary;
        }),
        Wp = u.default.div(_p()),
        Zp = Object(u.default)(tc.b)(Mp(), function (e) {
          var n = e.theme,
            t = e.severity;
          return 3 === t || 4 === t
            ? n.colors.failure
            : 2 === t
            ? n.colors.binance
            : 1 === t
            ? n.colors.text
            : n.colors.success;
        }),
        Qp = u.default.button(
          Pp(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.tertiary;
          }
        ),
        Kp = (Object(u.default)(tc.b)(Bp()), u.default.span(Up())),
        Gp = u.default.div(
          Lp(),
          function (e) {
            var n = e.theme;
            return Object(sc.b)(0.9, n.colors.failure);
          },
          function (e) {
            return e.theme.colors.failure;
          }
        ),
        Jp = u.default.div(Rp(), function (e) {
          var n = e.theme;
          return Object(sc.b)(0.9, n.colors.failure);
        });

      function Xp(e) {
        var n = e.error;
        return Object(r.jsxs)(Gp, {
          children: [
            Object(r.jsx)(Jp, {
              children: Object(r.jsx)(ju.a, {
                size: 24
              })
            }),
            Object(r.jsx)("p", {
              children: n
            })
          ]
        });
      }
      var $p = Object(u.default)(Jo)(
        Np(),
        function (e) {
          var n = e.theme;
          return Object(sc.b)(0.9, n.colors.primary);
        },
        function (e) {
          return e.theme.colors.primary;
        }
      );

      function ef() {
        var e = Object(s.a)([
          "\n  border: 1px solid ",
          ";\n  :hover {\n    border: 1px solid ",
          ";\n  }\n"
        ]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }

      function nf() {
        var e = Object(s.a)(["\n  height: 24px;\n"]);
        return (
          (nf = function () {
            return e;
          }),
          e
        );
      }
      var tf = Object(u.default)(Hc)(nf()),
        rf = Object(u.default)(Bs)(
          ef(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            var n = e.theme;
            return Object(sc.a)(0.06, n.colors.invertedContrast);
          }
        );

      function af(e) {
        var n = e.pair,
          t = e.showUnwrapped,
          i = void 0 !== t && t,
          o = yi().account,
          c = i ? n.token0 : Sp(n.token0),
          s = i ? n.token1 : Sp(n.token1),
          u = Object(a.useState)(!1),
          l = Object(Ln.a)(u, 2),
          d = l[0],
          b = l[1],
          p = Ll(null !== o && void 0 !== o ? o : void 0, n.liquidityToken),
          f = Tp(n.liquidityToken),
          j =
            n && f && p && mt.a.greaterThanOrEqual(f.raw, p.raw)
              ? [
                  n.getLiquidityValue(n.token0, f, p, !1),
                  n.getLiquidityValue(n.token1, f, p, !1)
                ]
              : [void 0, void 0],
          h = Object(Ln.a)(j, 2),
          m = h[0],
          v = h[1];
        return Object(r.jsx)(r.Fragment, {
          children:
            p &&
            Object(r.jsx)(ae, {
              children: Object(r.jsx)(ce, {
                children: Object(r.jsxs)(Jo, {
                  gap: "12px",
                  children: [
                    Object(r.jsx)(tf, {
                      children: Object(r.jsx)(Zc, {
                        children: Object(r.jsx)(g, {
                          style: {
                            textTransform: "uppercase",
                            fontWeight: 600
                          },
                          fontSize: "14px",
                          color: "textSubtle",
                          children: "LP Tokens in your Wallet"
                        })
                      })
                    }),
                    Object(r.jsxs)(tf, {
                      onClick: function () {
                        return b(!d);
                      },
                      children: [
                        Object(r.jsxs)(Zc, {
                          children: [
                            Object(r.jsx)(Kb, {
                              currency0: c,
                              currency1: s,
                              margin: !0,
                              size: 20
                            }),
                            Object(r.jsxs)(g, {
                              fontSize: "14px",
                              children: [c.symbol, "/", s.symbol]
                            })
                          ]
                        }),
                        Object(r.jsx)(Zc, {
                          children: Object(r.jsx)(g, {
                            fontSize: "14px",
                            children: p ? p.toSignificant(4) : "-"
                          })
                        })
                      ]
                    }),
                    Object(r.jsxs)(Jo, {
                      gap: "4px",
                      children: [
                        Object(r.jsxs)(tf, {
                          children: [
                            Object(r.jsxs)(g, {
                              fontSize: "14px",
                              children: [c.symbol, ":"]
                            }),
                            m
                              ? Object(r.jsx)(Zc, {
                                  children: Object(r.jsx)(g, {
                                    ml: "6px",
                                    fontSize: "14px",
                                    children:
                                      null === m || void 0 === m
                                        ? void 0
                                        : m.toSignificant(6)
                                  })
                                })
                              : "-"
                          ]
                        }),
                        Object(r.jsxs)(tf, {
                          children: [
                            Object(r.jsxs)(g, {
                              fontSize: "14px",
                              children: [s.symbol, ":"]
                            }),
                            v
                              ? Object(r.jsx)(Zc, {
                                  children: Object(r.jsx)(g, {
                                    ml: "6px",
                                    fontSize: "14px",
                                    children:
                                      null === v || void 0 === v
                                        ? void 0
                                        : v.toSignificant(6)
                                  })
                                })
                              : "-"
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            })
        });
      }

      function of(e) {
        var n = e.pair,
          t = yi().account,
          i = Sp(n.token0),
          o = Sp(n.token1),
          c = Object(a.useState)(!1),
          s = Object(Ln.a)(c, 2),
          u = s[0],
          l = s[1],
          d = Ll(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
          b = Tp(n.liquidityToken),
          p =
            d && b && mt.a.greaterThanOrEqual(b.raw, d.raw)
              ? new Er(d.raw, b.raw)
              : void 0,
          f =
            n && b && d && mt.a.greaterThanOrEqual(b.raw, d.raw)
              ? [
                  n.getLiquidityValue(n.token0, b, d, !1),
                  n.getLiquidityValue(n.token1, b, d, !1)
                ]
              : [void 0, void 0],
          j = Object(Ln.a)(f, 2),
          h = j[0],
          m = j[1];
        return Object(r.jsx)(rf, {
          children: Object(r.jsxs)(Jo, {
            gap: "12px",
            children: [
              Object(r.jsxs)(tf, {
                onClick: function () {
                  return l(!u);
                },
                style: {
                  cursor: "pointer"
                },
                children: [
                  Object(r.jsxs)(Zc, {
                    children: [
                      Object(r.jsx)(Kb, {
                        currency0: i,
                        currency1: o,
                        margin: !0,
                        size: 20
                      }),
                      Object(r.jsx)(g, {
                        children:
                          i && o
                            ? "".concat(i.symbol, "/").concat(o.symbol)
                            : Object(r.jsx)(Kp, {
                                children: "Loading"
                              })
                      })
                    ]
                  }),
                  Object(r.jsx)(Zc, {
                    children: u
                      ? Object(r.jsx)(wp.a, {
                          size: "20",
                          style: {
                            marginLeft: "10px"
                          }
                        })
                      : Object(r.jsx)(kp.a, {
                          size: "20",
                          style: {
                            marginLeft: "10px"
                          }
                        })
                  })
                ]
              }),
              u &&
                Object(r.jsxs)(Jo, {
                  gap: "8px",
                  children: [
                    Object(r.jsxs)(tf, {
                      children: [
                        Object(r.jsx)(Zc, {
                          children: Object(r.jsxs)(g, {
                            children: ["Pooled ", i.symbol, ":"]
                          })
                        }),
                        h
                          ? Object(r.jsxs)(Zc, {
                              children: [
                                Object(r.jsx)(g, {
                                  ml: "6px",
                                  children:
                                    null === h || void 0 === h
                                      ? void 0
                                      : h.toSignificant(6)
                                }),
                                Object(r.jsx)(Td, {
                                  size: "20px",
                                  style: {
                                    marginLeft: "8px"
                                  },
                                  currency: i
                                })
                              ]
                            })
                          : "-"
                      ]
                    }),
                    Object(r.jsxs)(tf, {
                      children: [
                        Object(r.jsx)(Zc, {
                          children: Object(r.jsxs)(g, {
                            children: ["Pooled ", o.symbol, ":"]
                          })
                        }),
                        m
                          ? Object(r.jsxs)(Zc, {
                              children: [
                                Object(r.jsx)(g, {
                                  ml: "6px",
                                  children:
                                    null === m || void 0 === m
                                      ? void 0
                                      : m.toSignificant(6)
                                }),
                                Object(r.jsx)(Td, {
                                  size: "20px",
                                  style: {
                                    marginLeft: "8px"
                                  },
                                  currency: o
                                })
                              ]
                            })
                          : "-"
                      ]
                    }),
                    Object(r.jsxs)(tf, {
                      children: [
                        Object(r.jsx)(g, {
                          children: "Your pool tokens:"
                        }),
                        Object(r.jsx)(g, {
                          children: d ? d.toSignificant(4) : "-"
                        })
                      ]
                    }),
                    Object(r.jsxs)(tf, {
                      children: [
                        Object(r.jsx)(g, {
                          children: "Your pool share:"
                        }),
                        Object(r.jsx)(g, {
                          children: p ? p.toFixed(2) + "%" : "-"
                        })
                      ]
                    }),
                    Object(r.jsxs)(Hc, {
                      marginTop: "10px",
                      children: [
                        Object(r.jsx)(W, {
                          as: qn.b,
                          to: "/add/".concat(Ip(i), "/").concat(Ip(o)),
                          style: {
                            width: "48%"
                          },
                          children: "Add"
                        }),
                        Object(r.jsx)(W, {
                          as: qn.b,
                          style: {
                            width: "48%"
                          },
                          to: "/remove/".concat(Ip(i), "/").concat(Ip(o)),
                          children: "Remove"
                        })
                      ]
                    })
                  ]
                })
            ]
          })
        });
      }
      var cf,
        sf = new qr.b(Et.abi);

      function uf(e) {
        var n = yi().chainId,
          t = Object(a.useMemo)(
            function () {
              return e.map(function (e) {
                var t = Object(Ln.a)(e, 2),
                  r = t[0],
                  a = t[1];
                return [Ep(r, n), Ep(a, n)];
              });
            },
            [n, e]
          ),
          r = el(
            Object(a.useMemo)(
              function () {
                return t.map(function (e) {
                  var n = Object(Ln.a)(e, 2),
                    t = n[0],
                    r = n[1];
                  return t && r && !t.equals(r) ? kr.getAddress(t, r) : void 0;
                });
              },
              [t]
            ),
            sf,
            "getReserves"
          );
        return Object(a.useMemo)(
          function () {
            return r.map(function (e, n) {
              var r = e.result,
                a = e.loading,
                i = t[n][0],
                o = t[n][1];
              if (a) return [cf.LOADING, null];
              if (!i || !o || i.equals(o)) return [cf.INVALID, null];
              if (!r) return [cf.NOT_EXISTS, null];
              var c = r.reserve0,
                s = r.reserve1,
                u = i.sortsBefore(o) ? [i, o] : [o, i],
                l = Object(Ln.a)(u, 2),
                d = l[0],
                b = l[1];
              return [
                cf.EXISTS,
                new kr(new gr(d, c.toString()), new gr(b, s.toString()))
              ];
            });
          },
          [r, t]
        );
      }

      function lf(e, n) {
        return uf([[e, n]])[0];
      }
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"),
          (e[(e.EXISTS = 2)] = "EXISTS"),
          (e[(e.INVALID = 3)] = "INVALID");
      })(cf || (cf = {}));
      var df = t(490);
      var bf,
        pf = t(153);

      function ff() {
        var e = Object(Bo.g)().search;
        return Object(a.useMemo)(
          function () {
            return e && e.length > 1
              ? Object(pf.parse)(e, {
                  parseArrays: !1,
                  ignoreQueryPrefix: !0
                })
              : {};
          },
          [e]
        );
      }
      !(function (e) {
        (e.v1 = "v1"), (e.v2 = "v2");
      })(bf || (bf = {}));
      var jf = bf.v2;

      function hf() {
        var e = ff().use;
        return e && "string" === typeof e
          ? "v1" === e.toLowerCase()
            ? bf.v1
            : jf
          : bf.v2;
      }

      function mf(e) {
        var n, t;
        return null ===
          (n = nl(
            gi(),
            "getExchange",
            Object(a.useMemo)(
              function () {
                return [e];
              },
              [e]
            )
          )) ||
          void 0 === n ||
          null === (t = n.result) ||
          void 0 === t
          ? void 0
          : t[0];
      }
      var vf = (function (e) {
        Object(ba.a)(t, e);
        var n = Object(pa.a)(t);

        function t(e, r) {
          return (
            Object(la.a)(this, t),
            n.call(this, r, new gr(fr[r.token.chainId], e))
          );
        }
        return t;
      })(kr);

      function xf(e) {
        var n = e instanceof lr ? e : void 0,
          t = mf(
            Boolean(n && n.equals(fr[n.chainId])) || null === n || void 0 === n
              ? void 0
              : n.address
          ),
          r = Ll(t, n),
          i = Sl([t])[null !== t && void 0 !== t ? t : ""];
        return Object(a.useMemo)(
          function () {
            return n && r && i && e ? new vf(i.raw, r) : void 0;
          },
          [i, e, n, r]
        );
      }

      function yf() {
        var e = kl(),
          n = gi(),
          t = Object(a.useMemo)(
            function () {
              return Object.keys(e).map(function (e) {
                return [e];
              });
            },
            [e]
          ),
          r = $u(n, "getExchange", t, Qu);
        return Object(a.useMemo)(
          function () {
            var n;
            return null !==
              (n =
                null === r || void 0 === r
                  ? void 0
                  : r.reduce(function (n, r, a) {
                      var i = r.result;
                      return (
                        (null === i || void 0 === i ? void 0 : i[0]) &&
                          i[0] !== na.a &&
                          (n[i[0]] = e[t[a][0]]),
                        n
                      );
                    }, {})) && void 0 !== n
              ? n
              : {};
          },
          [e, t, r]
        );
      }

      function Of(e) {
        var n,
          t,
          r =
            null === e ||
            void 0 === e ||
            null === (n = e.route) ||
            void 0 === n ||
            null === (t = n.pairs) ||
            void 0 === t
              ? void 0
              : t.some(function (e) {
                  return e instanceof vf;
                });
        return r ? bf.v1 : !1 === r ? bf.v2 : void 0;
      }

      function gf(e) {
        return mf(
          Object(a.useMemo)(
            function () {
              if (e && Of(e) === bf.v1)
                return e.inputAmount instanceof gr
                  ? e.inputAmount.token.address
                  : e.outputAmount instanceof gr
                  ? e.outputAmount.token.address
                  : void 0;
            },
            [e]
          )
        );
      }
      var Cf,
        wf = new Er("0"),
        kf = new Er("1");

      function Tf(e, n) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wf;
        if (e && !n) return !1;
        if (n && !e) return !0;
        if (e && n) {
          if (
            e.tradeType !== n.tradeType ||
            !dr(e.inputAmount.currency, n.inputAmount.currency) ||
            !dr(n.outputAmount.currency, n.outputAmount.currency)
          )
            throw new Error("Trades are not comparable");
          return t.equalTo(wf)
            ? e.executionPrice.lessThan(n.executionPrice)
            : e.executionPrice.raw
                .multiply(t.add(kf))
                .lessThan(n.executionPrice);
        }
      }
      !(function (e) {
        (e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
      })(Cf || (Cf = {}));
      var If = Object(Mo.b)("swap/selectCurrency"),
        Ef = Object(Mo.b)("swap/switchCurrencies"),
        Af = Object(Mo.b)("swap/typeInput"),
        Sf = Object(Mo.b)("swap/replaceSwapState"),
        Nf = Object(Mo.b)("swap/setRecipient"),
        Rf = Object(Mo.b)("transactions/addTransaction"),
        Lf = Object(Mo.b)("transactions/clearAllTransactions"),
        Uf = Object(Mo.b)("transactions/finalizeTransaction"),
        Bf = Object(Mo.b)("transactions/checkedTransaction");

      function Pf() {
        var e = yi(),
          n = e.chainId,
          t = e.account,
          r = Object(Vo.c)();
        return Object(a.useCallback)(
          function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = a.summary,
              o = a.approval;
            if (t && n) {
              var c = e.hash;
              if (!c) throw Error("No transaction hash found.");
              r(
                Rf({
                  hash: c,
                  from: t,
                  chainId: n,
                  approval: o,
                  summary: i
                })
              );
            }
          },
          [r, n, t]
        );
      }

      function Mf() {
        var e,
          n = yi().chainId,
          t = Object(Vo.d)(function (e) {
            return e.transactions;
          });
        return n && null !== (e = t[n]) && void 0 !== e ? e : {};
      }

      function _f(e) {
        var n = Mf();
        return !(!e || !n[e]) && !n[e].receipt;
      }

      function Df(e) {
        return new Date().getTime() - e.addedTime < 864e5;
      }
      var Ff,
        zf,
        qf = new Er(mt.a.BigInt(25), mt.a.BigInt(1e4)),
        Vf = new Er(mt.a.BigInt(1e4), mt.a.BigInt(1e4)),
        Hf = Vf.subtract(qf);

      function Yf(e) {
        var n = e
            ? Vf.subtract(
                e.route.pairs.reduce(function (e) {
                  return e.multiply(Hf);
                }, Vf)
              )
            : void 0,
          t = e && n ? e.priceImpact.subtract(n) : void 0;
        return {
          priceImpactWithoutFee: t
            ? new Er(
                null === t || void 0 === t ? void 0 : t.numerator,
                null === t || void 0 === t ? void 0 : t.denominator
              )
            : void 0,
          realizedLPFee:
            n &&
            e &&
            (e.inputAmount instanceof gr
              ? new gr(
                  e.inputAmount.token,
                  n.multiply(e.inputAmount.raw).quotient
                )
              : Or.ether(n.multiply(e.inputAmount.raw).quotient))
        };
      }

      function Wf(e, n) {
        var t,
          r,
          a = ((r = n), new Er(mt.a.BigInt(r), mt.a.BigInt(1e4)));
        return (
          (t = {}),
          Object(ge.a)(
            t,
            Cf.INPUT,
            null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)
          ),
          Object(ge.a)(
            t,
            Cf.OUTPUT,
            null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)
          ),
          t
        );
      }

      function Zf(e) {
        return (null === e || void 0 === e ? void 0 : e.lessThan(oi))
          ? (null === e || void 0 === e ? void 0 : e.lessThan(ai))
            ? (null === e || void 0 === e ? void 0 : e.lessThan(ri))
              ? (null === e || void 0 === e ? void 0 : e.lessThan(ti))
                ? 0
                : 1
              : 2
            : 3
          : 4;
      }

      function Qf(e, n) {
        return e
          ? n
            ? ""
                .concat(e.executionPrice.invert().toSignificant(6), " ")
                .concat(e.inputAmount.currency.symbol, " / ")
                .concat(e.outputAmount.currency.symbol)
            : ""
                .concat(e.executionPrice.toSignificant(6), " ")
                .concat(e.outputAmount.currency.symbol, " / ")
                .concat(e.inputAmount.currency.symbol)
          : "";
      }

      function Kf(e, n) {
        var t = yi().account,
          r = e instanceof gr ? e.token : void 0,
          i = (function (e, n, t) {
            var r = nl(
              wi(null === e || void 0 === e ? void 0 : e.address, !1),
              "allowance",
              Object(a.useMemo)(
                function () {
                  return [n, t];
                },
                [n, t]
              )
            ).result;
            return Object(a.useMemo)(
              function () {
                return e && r ? new gr(e, r.toString()) : void 0;
              },
              [e, r]
            );
          })(r, null !== t && void 0 !== t ? t : void 0, n),
          o = (function (e, n) {
            var t = Mf();
            return Object(a.useMemo)(
              function () {
                return (
                  "string" === typeof e &&
                  "string" === typeof n &&
                  Object.keys(t).some(function (r) {
                    var a = t[r];
                    if (!a) return !1;
                    if (a.receipt) return !1;
                    var i = a.approval;
                    return (
                      !!i && i.spender === n && i.tokenAddress === e && Df(a)
                    );
                  })
                );
              },
              [t, n, e]
            );
          })(null === r || void 0 === r ? void 0 : r.address, n),
          c = Object(a.useMemo)(
            function () {
              return e && n
                ? e.currency === ur
                  ? Ff.APPROVED
                  : i
                  ? i.lessThan(e)
                    ? o
                      ? Ff.PENDING
                      : Ff.NOT_APPROVED
                    : Ff.APPROVED
                  : Ff.UNKNOWN
                : Ff.UNKNOWN;
            },
            [e, i, o, n]
          ),
          s = wi(null === r || void 0 === r ? void 0 : r.address),
          u = Pf(),
          l = Object(a.useCallback)(
            Object(pt.a)(
              bt.a.mark(function t() {
                var a, i;
                return bt.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (c === Ff.NOT_APPROVED) {
                          t.next = 3;
                          break;
                        }
                        return (
                          console.error("approve was called unnecessarily"),
                          t.abrupt("return")
                        );
                      case 3:
                        if (r) {
                          t.next = 6;
                          break;
                        }
                        return console.error("no token"), t.abrupt("return");
                      case 6:
                        if (s) {
                          t.next = 9;
                          break;
                        }
                        return (
                          console.error("tokenContract is null"),
                          t.abrupt("return")
                        );
                      case 9:
                        if (e) {
                          t.next = 12;
                          break;
                        }
                        return (
                          console.error("missing amount to approve"),
                          t.abrupt("return")
                        );
                      case 12:
                        if (n) {
                          t.next = 15;
                          break;
                        }
                        return console.error("no spender"), t.abrupt("return");
                      case 15:
                        return (
                          (a = !1),
                          (t.next = 18),
                          s.estimateGas.approve(n, df.a).catch(function () {
                            return (
                              (a = !0),
                              s.estimateGas.approve(n, e.raw.toString())
                            );
                          })
                        );
                      case 18:
                        return (
                          (i = t.sent),
                          t.abrupt(
                            "return",
                            s
                              .approve(n, a ? e.raw.toString() : df.a, {
                                gasLimit: pi(i)
                              })
                              .then(function (t) {
                                u(t, {
                                  summary: "Approve " + e.currency.symbol,
                                  approval: {
                                    tokenAddress: r.address,
                                    spender: n
                                  }
                                });
                              })
                              .catch(function (e) {
                                throw (
                                  (console.debug("Failed to approve token", e),
                                  e)
                                );
                              })
                          )
                        );
                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [c, r, s, e, n, u]
          );
        return [c, l];
      }
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(Ff || (Ff = {})),
        (function (e) {
          (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
        })(zf || (zf = {}));
      var Gf = Object(Mo.b)("mint/typeInputMint"),
        Jf = Object(Mo.b)("mint/resetMintState");

      function Xf(e, n) {
        var t = Object(a.useState)(e),
          r = Object(Ln.a)(t, 2),
          i = r[0],
          o = r[1];
        return (
          Object(a.useEffect)(
            function () {
              var t = setTimeout(function () {
                o(e);
              }, n);
              return function () {
                clearTimeout(t);
              };
            },
            [e, n]
          ),
          i
        );
      }

      function $f(e) {
        var n = ui(e),
          t = (function (e) {
            var n,
              t,
              r,
              i = Xf(e, 200),
              o = Object(a.useMemo)(
                function () {
                  if (!i || !ui(i)) return [void 0];
                  try {
                    return i
                      ? [
                          Object(Zl.namehash)(
                            "".concat(
                              i.toLowerCase().substr(2),
                              ".addr.reverse"
                            )
                          )
                        ]
                      : [void 0];
                  } catch (e) {
                    return [void 0];
                  }
                },
                [i]
              ),
              c = nl(ki(!1), "resolver", o),
              s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
              u = nl(Ti(s && !Ql(s) ? s : void 0, !1), "name", o),
              l = i !== e;
            return {
              ENSName: l
                ? null
                : null !==
                    (t =
                      null === (r = u.result) || void 0 === r
                        ? void 0
                        : r[0]) && void 0 !== t
                ? t
                : null,
              loading: l || c.loading || u.loading
            };
          })(n || void 0),
          r = (function (e) {
            var n,
              t,
              r,
              i = Xf(e, 200),
              o = Object(a.useMemo)(
                function () {
                  if (!i) return [void 0];
                  try {
                    return i ? [Object(Zl.namehash)(i)] : [void 0];
                  } catch (e) {
                    return [void 0];
                  }
                },
                [i]
              ),
              c = nl(ki(!1), "resolver", o),
              s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
              u = nl(Ti(s && !Ql(s) ? s : void 0, !1), "addr", o),
              l = i !== e;
            return {
              address: l
                ? null
                : null !==
                    (t =
                      null === (r = u.result) || void 0 === r
                        ? void 0
                        : r[0]) && void 0 !== t
                ? t
                : null,
              loading: l || c.loading || u.loading
            };
          })(e);
        return {
          loading: t.loading || r.loading,
          address: n || r.address,
          name: t.ENSName ? t.ENSName : (!n && r.address && e) || null
        };
      }
      var ej = t(177);

      function nj(e, n) {
        var t = yi().chainId,
          r = t ? Wa[t] : [],
          i = t ? [Ep(e, t), Ep(n, t)] : [void 0, void 0],
          o = Object(Ln.a)(i, 2),
          c = o[0],
          s = o[1],
          u = Object(a.useMemo)(
            function () {
              return rl()(r, function (e) {
                return r.map(function (n) {
                  return [e, n];
                });
              }).filter(function (e) {
                var n = Object(Ln.a)(e, 2),
                  t = n[0],
                  r = n[1];
                return t.address !== r.address;
              });
            },
            [r]
          ),
          l = uf(
            Object(a.useMemo)(
              function () {
                return c && s
                  ? [[c, s]]
                      .concat(
                        Object(aa.a)(
                          r.map(function (e) {
                            return [c, e];
                          })
                        ),
                        Object(aa.a)(
                          r.map(function (e) {
                            return [s, e];
                          })
                        ),
                        Object(aa.a)(u)
                      )
                      .filter(function (e) {
                        return Boolean(e[0] && e[1]);
                      })
                      .filter(function (e) {
                        var n = Object(Ln.a)(e, 2),
                          t = n[0],
                          r = n[1];
                        return t.address !== r.address;
                      })
                      .filter(function (e) {
                        var n = Object(Ln.a)(e, 2),
                          r = n[0],
                          a = n[1];
                        if (!t) return !0;
                        var i = Za[t];
                        if (!i) return !0;
                        var o = i[r.address],
                          c = i[a.address];
                        return (
                          (!o && !c) ||
                          (!(
                            o &&
                            !o.find(function (e) {
                              return a.equals(e);
                            })
                          ) &&
                            !(
                              c &&
                              !c.find(function (e) {
                                return r.equals(e);
                              })
                            ))
                        );
                      })
                  : [];
              },
              [c, s, r, u, t]
            )
          );
        return Object(a.useMemo)(
          function () {
            return Object.values(
              l
                .filter(function (e) {
                  return Boolean(e[0] === cf.EXISTS && e[1]);
                })
                .reduce(function (e, n) {
                  var t,
                    r = Object(Ln.a)(n, 2)[1];
                  return (
                    (e[r.liquidityToken.address] =
                      null !== (t = e[r.liquidityToken.address]) && void 0 !== t
                        ? t
                        : r),
                    e
                  );
                }, {})
            );
          },
          [l]
        );
      }

      function tj() {
        return Object(Vo.d)(function (e) {
          return e.swap;
        });
      }

      function rj(e, n) {
        if (e && n)
          try {
            var t = Object(ej.parseUnits)(e, n.decimals).toString();
            if ("0" !== t)
              return n instanceof lr
                ? new gr(n, mt.a.BigInt(t))
                : Or.ether(mt.a.BigInt(t));
          } catch (r) {
            console.debug('Failed to parse input amount: "'.concat(e, '"'), r);
          }
      }
      var aj = [
        "0x9F9c8761d2aa437FA3168d649EbDcE923184Cf9d",
        "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        "0x7bd6b6e3c8f9c5C987e47374268599d09F9e16Fd"
      ];

      function ij(e, n) {
        return (
          e.route.path.some(function (e) {
            return e.address === n;
          }) ||
          e.route.pairs.some(function (e) {
            return e.liquidityToken.address === n;
          })
        );
      }

      function oj() {
        var e,
          n,
          t,
          r,
          i,
          o,
          c,
          s = yi().account,
          u = hf(),
          l = tj(),
          d = l.independentField,
          b = l.typedValue,
          p = l[Cf.INPUT].currencyId,
          f = l[Cf.OUTPUT].currencyId,
          j = l.recipient,
          h = Al(p),
          m = Al(f),
          v = $f(null !== j && void 0 !== j ? j : void 0),
          x =
            null !== (e = null === j ? s : v.address) && void 0 !== e
              ? e
              : null,
          y = Ul(null !== s && void 0 !== s ? s : void 0, [
            null !== h && void 0 !== h ? h : void 0,
            null !== m && void 0 !== m ? m : void 0
          ]),
          O = d === Cf.INPUT,
          g = rj(b, null !== (n = O ? h : m) && void 0 !== n ? n : void 0),
          C = (function (e, n) {
            var t = nj(null === e || void 0 === e ? void 0 : e.currency, n);
            return Object(a.useMemo)(
              function () {
                var r;
                return e &&
                  n &&
                  t.length > 0 &&
                  null !==
                    (r = Rr.bestTradeExactIn(t, e, n, {
                      maxHops: 3,
                      maxNumResults: 1
                    })[0]) &&
                  void 0 !== r
                  ? r
                  : null;
              },
              [t, e, n]
            );
          })(O ? g : void 0, null !== m && void 0 !== m ? m : void 0),
          w = (function (e, n) {
            var t = nj(e, null === n || void 0 === n ? void 0 : n.currency);
            return Object(a.useMemo)(
              function () {
                var r;
                return e &&
                  n &&
                  t.length > 0 &&
                  null !==
                    (r = Rr.bestTradeExactOut(t, e, n, {
                      maxHops: 3,
                      maxNumResults: 1
                    })[0]) &&
                  void 0 !== r
                  ? r
                  : null;
              },
              [t, e, n]
            );
          })(null !== h && void 0 !== h ? h : void 0, O ? void 0 : g),
          k = O ? C : w,
          T =
            ((t = {}),
            Object(ge.a)(t, Cf.INPUT, y[0]),
            Object(ge.a)(t, Cf.OUTPUT, y[1]),
            t),
          I =
            ((r = {}),
            Object(ge.a)(r, Cf.INPUT, null !== h && void 0 !== h ? h : void 0),
            Object(ge.a)(r, Cf.OUTPUT, null !== m && void 0 !== m ? m : void 0),
            r),
          E = (function (e, n, t, r) {
            var a = xf(n),
              i = xf(t),
              o = [];
            n === ur && i
              ? (o = [i])
              : t === ur && a
              ? (o = [a])
              : a && i && (o = [a, i]);
            var c,
              s = n && o && o.length > 0 && new Tr(o, n, t);
            try {
              c =
                s && r
                  ? new Rr(s, r, e ? ct.EXACT_INPUT : ct.EXACT_OUTPUT)
                  : void 0;
            } catch (u) {
              console.debug("Failed to create V1 trade", u);
            }
            return c;
          })(O, I[Cf.INPUT], I[Cf.OUTPUT], g);
        (s || (i = "Connect Wallet"), g) ||
          (i = null !== (o = i) && void 0 !== o ? o : "Enter an amount");
        (I[Cf.INPUT] && I[Cf.OUTPUT]) ||
          (i = null !== (c = i) && void 0 !== c ? c : "Select a token");
        var A,
          S,
          N = ui(x);
        x && N
          ? (-1 !== aj.indexOf(N) || (C && ij(C, N)) || (w && ij(w, N))) &&
            (i = null !== (A = i) && void 0 !== A ? A : "Invalid recipient")
          : (i = null !== (S = i) && void 0 !== S ? S : "Enter a recipient");
        var R = xl(),
          L = Object(Ln.a)(R, 1)[0],
          U = k && L && Wf(k, L),
          B = E && L && Wf(E, L),
          P = [
            T[Cf.INPUT],
            u === bf.v1 ? (B ? B[Cf.INPUT] : null) : U ? U[Cf.INPUT] : null
          ],
          M = P[0],
          _ = P[1];
        return (
          M &&
            _ &&
            M.lessThan(_) &&
            (i = "Insufficient " + _.currency.symbol + " balance"),
          {
            currencies: I,
            currencyBalances: T,
            parsedAmount: g,
            v2Trade: null !== k && void 0 !== k ? k : void 0,
            inputError: i,
            v1Trade: E
          }
        );
      }

      function cj(e) {
        if ("string" === typeof e) {
          var n = ui(e);
          if (n) return n;
          if ("ETH" === e.toUpperCase()) return "ETH";
          if (!1 === n) return "ETH";
        }
        return null !== "ETH" ? "ETH" : "";
      }
      var sj =
          /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
        uj = /^0x[a-fA-F0-9]{40}$/;

      function lj(e) {
        var n,
          t = cj(e.inputCurrency),
          r = cj(e.outputCurrency);
        t === r && ("string" === typeof e.outputCurrency ? (t = "") : (r = ""));
        var a,
          i = (function (e) {
            return "string" !== typeof e
              ? null
              : ui(e) || (sj.test(e) || uj.test(e) ? e : null);
          })(e.recipient);
        return (
          (n = {}),
          Object(ge.a)(n, Cf.INPUT, {
            currencyId: t
          }),
          Object(ge.a)(n, Cf.OUTPUT, {
            currencyId: r
          }),
          Object(ge.a)(
            n,
            "typedValue",
            "string" !== typeof (a = e.exactAmount) || isNaN(parseFloat(a))
              ? ""
              : a
          ),
          Object(ge.a)(
            n,
            "independentField",
            (function (e) {
              return "string" === typeof e && "output" === e.toLowerCase()
                ? Cf.OUTPUT
                : Cf.INPUT;
            })(e.exactField)
          ),
          Object(ge.a)(n, "recipient", i),
          n
        );
      }
      var dj = mt.a.BigInt(0);

      function bj() {
        return Object(Vo.d)(function (e) {
          return e.mint;
        });
      }

      function pj(e) {
        if (e)
          return e.currency === ur
            ? mt.a.greaterThan(e.raw, ci)
              ? Or.ether(mt.a.subtract(e.raw, ci))
              : Or.ether(mt.a.BigInt(0))
            : e;
      }

      function fj() {
        var e = Object(s.a)([
          "\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n"
        ]);
        return (
          (fj = function () {
            return e;
          }),
          e
        );
      }
      var jj = Object(u.default)(ae)(fj());

      function hj(e) {
        var n = e.children;
        return Object(r.jsx)(jj, {
          children: n
        });
      }

      function mj() {
        var e = Object(s.a)([
          "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"
        ]);
        return (
          (mj = function () {
            return e;
          }),
          e
        );
      }

      function vj() {
        var e = Object(s.a)([
          "\n  padding: 0.5rem 1rem;\n  background-color: ",
          ";\n  border: 1px solid ",
          ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ",
          " {\n    padding: 0.25rem 0.5rem;\n  }\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ",
          ";\n  :hover {\n    border: 1px solid ",
          ";\n  }\n  :focus {\n    border: 1px solid ",
          ";\n    outline: none;\n  }\n"
        ]);
        return (
          (vj = function () {
            return e;
          }),
          e
        );
      }

      function xj() {
        var e = Object(s.a)([
          "\n  :hover {\n    cursor: pointer;\n  }\n  color: ",
          ";\n"
        ]);
        return (
          (xj = function () {
            return e;
          }),
          e
        );
      }

      function yj() {
        var e = Object(s.a)(["\n  position: relative;\n"]);
        return (
          (yj = function () {
            return e;
          }),
          e
        );
      }
      var Oj = u.default.div(yj()),
        gj = Object(u.default)(g)(xj(), function (e) {
          return e.theme.colors.primary;
        }),
        Cj =
          (u.default.button(
            vj(),
            function (e) {
              return e.theme.colors.primaryDark;
            },
            function (e) {
              return e.theme.colors.primaryDark;
            },
            function (e) {
              return e.theme.mediaQueries.sm;
            },
            function (e) {
              return e.theme.colors.primary;
            },
            function (e) {
              return e.theme.colors.primary;
            },
            function (e) {
              return e.theme.colors.primary;
            }
          ),
          u.default.span(mj()));

      function wj(e) {
        var n,
          t,
          a,
          i,
          o,
          c,
          s,
          u,
          l = e.noLiquidity,
          d = e.price,
          b = e.currencies,
          p = e.parsedAmounts,
          f = e.poolTokenPercentage,
          j = e.onAdd;
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)(Hc, {
              children: [
                Object(r.jsxs)(Ac, {
                  children: [
                    null === (n = b[zf.CURRENCY_A]) || void 0 === n
                      ? void 0
                      : n.symbol,
                    " Deposited"
                  ]
                }),
                Object(r.jsxs)(Zc, {
                  children: [
                    Object(r.jsx)(Td, {
                      currency: b[zf.CURRENCY_A],
                      style: {
                        marginRight: "8px"
                      }
                    }),
                    Object(r.jsx)(Ac, {
                      children:
                        null === (t = p[zf.CURRENCY_A]) || void 0 === t
                          ? void 0
                          : t.toSignificant(6)
                    })
                  ]
                })
              ]
            }),
            Object(r.jsxs)(Hc, {
              children: [
                Object(r.jsxs)(Ac, {
                  children: [
                    null === (a = b[zf.CURRENCY_B]) || void 0 === a
                      ? void 0
                      : a.symbol,
                    " Deposited"
                  ]
                }),
                Object(r.jsxs)(Zc, {
                  children: [
                    Object(r.jsx)(Td, {
                      currency: b[zf.CURRENCY_B],
                      style: {
                        marginRight: "8px"
                      }
                    }),
                    Object(r.jsx)(Ac, {
                      children:
                        null === (i = p[zf.CURRENCY_B]) || void 0 === i
                          ? void 0
                          : i.toSignificant(6)
                    })
                  ]
                })
              ]
            }),
            Object(r.jsxs)(Hc, {
              children: [
                Object(r.jsx)(Ac, {
                  children: "Rates"
                }),
                Object(r.jsx)(Ac, {
                  children: "1 "
                    .concat(
                      null === (o = b[zf.CURRENCY_A]) || void 0 === o
                        ? void 0
                        : o.symbol,
                      " = "
                    )
                    .concat(
                      null === d || void 0 === d ? void 0 : d.toSignificant(4),
                      " "
                    )
                    .concat(
                      null === (c = b[zf.CURRENCY_B]) || void 0 === c
                        ? void 0
                        : c.symbol
                    )
                })
              ]
            }),
            Object(r.jsx)(Hc, {
              style: {
                justifyContent: "flex-end"
              },
              children: Object(r.jsx)(Ac, {
                children: "1 "
                  .concat(
                    null === (s = b[zf.CURRENCY_B]) || void 0 === s
                      ? void 0
                      : s.symbol,
                    " = "
                  )
                  .concat(
                    null === d || void 0 === d
                      ? void 0
                      : d.invert().toSignificant(4),
                    " "
                  )
                  .concat(
                    null === (u = b[zf.CURRENCY_A]) || void 0 === u
                      ? void 0
                      : u.symbol
                  )
              })
            }),
            Object(r.jsxs)(Hc, {
              children: [
                Object(r.jsx)(Ac, {
                  children: "Share of Pool:"
                }),
                Object(r.jsxs)(Ac, {
                  children: [
                    l
                      ? "100"
                      : null === f || void 0 === f
                      ? void 0
                      : f.toSignificant(4),
                    "%"
                  ]
                })
              ]
            }),
            Object(r.jsx)(W, {
              mt: "20px",
              onClick: j,
              children: l ? "Create Pool & Supply" : "Confirm Supply"
            })
          ]
        });
      }

      function kj(e) {
        var n,
          t,
          i,
          o,
          c,
          s,
          l,
          d,
          b = e.currencies,
          p = e.noLiquidity,
          f = e.poolTokenPercentage,
          j = e.price,
          h = Object(a.useContext)(u.ThemeContext);
        return Object(r.jsx)(Jo, {
          gap: "md",
          children: Object(r.jsxs)(Wc, {
            justify: "space-around",
            gap: "4px",
            children: [
              Object(r.jsxs)(Jo, {
                justify: "center",
                children: [
                  Object(r.jsx)(Ec, {
                    children:
                      null !==
                        (n =
                          null === j || void 0 === j
                            ? void 0
                            : j.toSignificant(6)) && void 0 !== n
                        ? n
                        : "-"
                  }),
                  Object(r.jsxs)(tc.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: h.colors.textSubtle,
                    pt: 1,
                    children: [
                      null === (t = b[zf.CURRENCY_B]) || void 0 === t
                        ? void 0
                        : t.symbol,
                      " per ",
                      null === (i = b[zf.CURRENCY_A]) || void 0 === i
                        ? void 0
                        : i.symbol
                    ]
                  })
                ]
              }),
              Object(r.jsxs)(Jo, {
                justify: "center",
                children: [
                  Object(r.jsx)(Ec, {
                    children:
                      null !==
                        (o =
                          null === j ||
                          void 0 === j ||
                          null === (c = j.invert()) ||
                          void 0 === c
                            ? void 0
                            : c.toSignificant(6)) && void 0 !== o
                        ? o
                        : "-"
                  }),
                  Object(r.jsxs)(tc.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: h.colors.textSubtle,
                    pt: 1,
                    children: [
                      null === (s = b[zf.CURRENCY_A]) || void 0 === s
                        ? void 0
                        : s.symbol,
                      " per ",
                      null === (l = b[zf.CURRENCY_B]) || void 0 === l
                        ? void 0
                        : l.symbol
                    ]
                  })
                ]
              }),
              Object(r.jsxs)(Jo, {
                justify: "center",
                children: [
                  Object(r.jsxs)(Ec, {
                    children: [
                      p && j
                        ? "100"
                        : null !==
                            (d = (
                              null === f || void 0 === f
                                ? void 0
                                : f.lessThan(ei)
                            )
                              ? "<0.01"
                              : null === f || void 0 === f
                              ? void 0
                              : f.toFixed(2)) && void 0 !== d
                        ? d
                        : "0",
                      "%"
                    ]
                  }),
                  Object(r.jsx)(tc.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: h.colors.textSubtle,
                    pt: 1,
                    children: "Share of Pool"
                  })
                ]
              })
            ]
          })
        });
      }

      function Tj() {
        var e = Object(s.a)([
          "\n  border: 2px solid ",
          ";\n  border-radius: 16px;\n  padding: 16px;\n"
        ]);
        return (
          (Tj = function () {
            return e;
          }),
          e
        );
      }
      var Ij = u.default.div(Tj(), function (e) {
          return e.theme.colors.borderColor;
        }),
        Ej = function (e) {
          var n = Cu(),
            t = Object(vi.c)(),
            a = t.account,
            i = t.activate,
            o = t.deactivate,
            c = nt(
              function (e) {
                return i("walletconnect" === e ? Ma : Pa);
              },
              o,
              a
            ).onPresentConnectModal;
          return Object(r.jsx)(
            W,
            Object(l.a)(
              Object(l.a)(
                {
                  onClick: c
                },
                e
              ),
              {},
              {
                children: n(292, "Unlock Wallet")
              }
            )
          );
        };

      function Aj(e) {
        var n,
          t,
          i,
          o,
          c,
          s,
          u,
          d,
          b,
          p,
          f,
          j = e.match.params,
          h = j.currencyIdA,
          m = j.currencyIdB,
          v = e.history,
          x = yi(),
          y = x.account,
          O = x.chainId,
          C = x.library,
          w = Al(h),
          k = Al(m),
          T = Boolean(O && ((w && dr(w, fr[O])) || (k && dr(k, fr[O])))),
          I = vl(),
          E = bj(),
          A = E.independentField,
          S = E.typedValue,
          N = E.otherTypedValue,
          R = (function (e, n) {
            var t,
              r,
              i,
              o,
              c,
              s,
              u,
              l = yi(),
              d = l.account,
              b = l.chainId,
              p = bj(),
              f = p.independentField,
              j = p.typedValue,
              h = p.otherTypedValue,
              m = f === zf.CURRENCY_A ? zf.CURRENCY_B : zf.CURRENCY_A,
              v = Object(a.useMemo)(
                function () {
                  var t;
                  return (
                    (t = {}),
                    Object(ge.a)(
                      t,
                      zf.CURRENCY_A,
                      null !== e && void 0 !== e ? e : void 0
                    ),
                    Object(ge.a)(
                      t,
                      zf.CURRENCY_B,
                      null !== n && void 0 !== n ? n : void 0
                    ),
                    t
                  );
                },
                [e, n]
              ),
              x = lf(v[zf.CURRENCY_A], v[zf.CURRENCY_B]),
              y = Object(Ln.a)(x, 2),
              O = y[0],
              g = y[1],
              C = Tp(null === g || void 0 === g ? void 0 : g.liquidityToken),
              w = O === cf.NOT_EXISTS || Boolean(C && mt.a.equal(C.raw, dj)),
              k = Ul(null !== d && void 0 !== d ? d : void 0, [
                v[zf.CURRENCY_A],
                v[zf.CURRENCY_B]
              ]),
              T =
                ((t = {}),
                Object(ge.a)(t, zf.CURRENCY_A, k[0]),
                Object(ge.a)(t, zf.CURRENCY_B, k[1]),
                t),
              I = rj(j, v[f]),
              E = Object(a.useMemo)(
                function () {
                  if (w) return h && v[m] ? rj(h, v[m]) : void 0;
                  if (I) {
                    var t = Ap(I, b),
                      r = [Ep(e, b), Ep(n, b)],
                      a = r[0],
                      i = r[1];
                    if (a && i && t && g) {
                      var o = m === zf.CURRENCY_B ? n : e,
                        c =
                          m === zf.CURRENCY_B
                            ? g.priceOf(a).quote(t)
                            : g.priceOf(i).quote(t);
                      return o === ur ? Or.ether(c.raw) : c;
                    }
                  }
                },
                [w, h, v, m, I, e, b, n, g]
              ),
              A =
                ((r = {}),
                Object(ge.a)(r, zf.CURRENCY_A, f === zf.CURRENCY_A ? I : E),
                Object(ge.a)(r, zf.CURRENCY_B, f === zf.CURRENCY_A ? E : I),
                r),
              S = Object(a.useMemo)(
                function () {
                  if (w) {
                    var n = A[zf.CURRENCY_A],
                      t = A[zf.CURRENCY_B];
                    return n && t
                      ? new Cr(n.currency, t.currency, n.raw, t.raw)
                      : void 0;
                  }
                  var r = Ep(e, b);
                  return g && r ? g.priceOf(r) : void 0;
                },
                [b, e, w, g, A]
              ),
              N = Object(a.useMemo)(
                function () {
                  var e = A[zf.CURRENCY_A],
                    n = A[zf.CURRENCY_B],
                    t = [Ap(e, b), Ap(n, b)],
                    r = t[0],
                    a = t[1];
                  return g && C && r && a
                    ? g.getLiquidityMinted(C, r, a)
                    : void 0;
                },
                [A, b, g, C]
              ),
              R = Object(a.useMemo)(
                function () {
                  return N && C ? new Er(N.raw, C.add(N).raw) : void 0;
                },
                [N, C]
              );
            d || (c = "Connect Wallet"),
              O === cf.INVALID &&
                (c =
                  null !== (s = c) && void 0 !== s
                    ? s
                    : gu(136, "Invalid pair")),
              (A[zf.CURRENCY_A] && A[zf.CURRENCY_B]) ||
                (c =
                  null !== (u = c) && void 0 !== u
                    ? u
                    : gu(84, "Enter an amount"));
            var L,
              U,
              B = A[zf.CURRENCY_A],
              P = A[zf.CURRENCY_B];
            return (
              B &&
                (null === T ||
                void 0 === T ||
                null === (i = T[zf.CURRENCY_A]) ||
                void 0 === i
                  ? void 0
                  : i.lessThan(B)) &&
                (c =
                  "Insufficient " +
                  (null === (L = v[zf.CURRENCY_A]) || void 0 === L
                    ? void 0
                    : L.symbol) +
                  " balance"),
              P &&
                (null === T ||
                void 0 === T ||
                null === (o = T[zf.CURRENCY_B]) ||
                void 0 === o
                  ? void 0
                  : o.lessThan(P)) &&
                (c =
                  "Insufficient " +
                  (null === (U = v[zf.CURRENCY_B]) || void 0 === U
                    ? void 0
                    : U.symbol) +
                  " balance"),
              {
                dependentField: m,
                currencies: v,
                pair: g,
                pairState: O,
                currencyBalances: T,
                parsedAmounts: A,
                price: S,
                noLiquidity: w,
                liquidityMinted: N,
                poolTokenPercentage: R,
                error: c
              }
            );
          })(
            null !== w && void 0 !== w ? w : void 0,
            null !== k && void 0 !== k ? k : void 0
          ),
          L = R.dependentField,
          U = R.currencies,
          B = R.pair,
          P = R.pairState,
          M = R.currencyBalances,
          _ = R.parsedAmounts,
          D = R.price,
          F = R.noLiquidity,
          z = R.liquidityMinted,
          q = R.poolTokenPercentage,
          V = R.error,
          H = (function (e) {
            var n = Object(Vo.c)();
            return {
              onFieldAInput: Object(a.useCallback)(
                function (t) {
                  n(
                    Gf({
                      field: zf.CURRENCY_A,
                      typedValue: t,
                      noLiquidity: !0 === e
                    })
                  );
                },
                [n, e]
              ),
              onFieldBInput: Object(a.useCallback)(
                function (t) {
                  n(
                    Gf({
                      field: zf.CURRENCY_B,
                      typedValue: t,
                      noLiquidity: !0 === e
                    })
                  );
                },
                [n, e]
              )
            };
          })(F),
          Y = H.onFieldAInput,
          Z = H.onFieldBInput,
          Q = !V,
          K = Object(a.useState)(!1),
          G = Object(Ln.a)(K, 2),
          J = G[0],
          X = G[1],
          $ = Object(a.useState)(!1),
          ee = Object(Ln.a)($, 2),
          ne = ee[0],
          te = ee[1],
          re = yl(),
          ae = Object(Ln.a)(re, 1)[0],
          ie = xl(),
          oe = Object(Ln.a)(ie, 1)[0],
          se = Object(a.useState)(""),
          ue = Object(Ln.a)(se, 2),
          le = ue[0],
          de = ue[1],
          be =
            ((i = {}),
            Object(ge.a)(i, A, S),
            Object(ge.a)(
              i,
              L,
              F
                ? N
                : null !==
                    (n =
                      null === (t = _[L]) || void 0 === t
                        ? void 0
                        : t.toSignificant(6)) && void 0 !== n
                ? n
                : ""
            ),
            i),
          pe = [zf.CURRENCY_A, zf.CURRENCY_B].reduce(function (e, n) {
            return Object(l.a)(
              Object(l.a)({}, e),
              {},
              Object(ge.a)({}, n, pj(M[n]))
            );
          }, {}),
          fe = [zf.CURRENCY_A, zf.CURRENCY_B].reduce(function (e, n) {
            var t, r;
            return Object(l.a)(
              Object(l.a)({}, e),
              {},
              Object(ge.a)(
                {},
                n,
                null === (t = pe[n]) || void 0 === t
                  ? void 0
                  : t.equalTo(null !== (r = _[n]) && void 0 !== r ? r : "0")
              )
            );
          }, {}),
          je = Kf(_[zf.CURRENCY_A], _a),
          he = Object(Ln.a)(je, 2),
          me = he[0],
          ve = he[1],
          xe = Kf(_[zf.CURRENCY_B], _a),
          ye = Object(Ln.a)(xe, 2),
          Oe = ye[0],
          Ce = ye[1],
          we = Pf();

        function ke() {
          return Te.apply(this, arguments);
        }

        function Te() {
          return (Te = Object(pt.a)(
            bt.a.mark(function e() {
              var n, t, r, a, i, o, c, s, u, d, b, p, f, j, h, m, v;
              return bt.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (O && C && y) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((t = hi(0, C, y)),
                        (r = _[zf.CURRENCY_A]),
                        (a = _[zf.CURRENCY_B]),
                        r && a && w && k)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      return (
                        (n = {}),
                        Object(ge.a)(n, zf.CURRENCY_A, fi(r, F ? 0 : oe)[0]),
                        Object(ge.a)(n, zf.CURRENCY_B, fi(a, F ? 0 : oe)[0]),
                        (i = n),
                        (o = Math.ceil(Date.now() / 1e3) + ae),
                        w === ur || k === ur
                          ? ((f = k === ur),
                            (c = t.estimateGas.addLiquidityETH),
                            (s = t.addLiquidityETH),
                            (u = [
                              null !==
                                (b =
                                  null === (p = Ep(f ? w : k, O)) ||
                                  void 0 === p
                                    ? void 0
                                    : p.address) && void 0 !== b
                                ? b
                                : "",
                              (f ? r : a).raw.toString(),
                              i[f ? zf.CURRENCY_A : zf.CURRENCY_B].toString(),
                              i[f ? zf.CURRENCY_B : zf.CURRENCY_A].toString(),
                              y,
                              o
                            ]),
                            (d = ta.a.from((f ? a : r).raw.toString())))
                          : ((c = t.estimateGas.addLiquidity),
                            (s = t.addLiquidity),
                            (u = [
                              null !==
                                (j =
                                  null === (h = Ep(w, O)) || void 0 === h
                                    ? void 0
                                    : h.address) && void 0 !== j
                                ? j
                                : "",
                              null !==
                                (m =
                                  null === (v = Ep(k, O)) || void 0 === v
                                    ? void 0
                                    : v.address) && void 0 !== m
                                ? m
                                : "",
                              r.raw.toString(),
                              a.raw.toString(),
                              i[zf.CURRENCY_A].toString(),
                              i[zf.CURRENCY_B].toString(),
                              y,
                              o
                            ]),
                            (d = null)),
                        te(!0),
                        (e.next = 12),
                        c
                          .apply(
                            void 0,
                            Object(aa.a)(u).concat([
                              d
                                ? {
                                    value: d
                                  }
                                : {}
                            ])
                          )
                          .then(function (e) {
                            return s
                              .apply(
                                void 0,
                                Object(aa.a)(u).concat([
                                  Object(l.a)(
                                    Object(l.a)(
                                      {},
                                      d
                                        ? {
                                            value: d
                                          }
                                        : {}
                                    ),
                                    {},
                                    {
                                      gasLimit: pi(e)
                                    }
                                  )
                                ])
                              )
                              .then(function (e) {
                                var n, t, r, a;
                                te(!1),
                                  we(e, {
                                    summary:
                                      "Add " +
                                      (null === (n = _[zf.CURRENCY_A]) ||
                                      void 0 === n
                                        ? void 0
                                        : n.toSignificant(3)) +
                                      " " +
                                      (null === (t = U[zf.CURRENCY_A]) ||
                                      void 0 === t
                                        ? void 0
                                        : t.symbol) +
                                      " and " +
                                      (null === (r = _[zf.CURRENCY_B]) ||
                                      void 0 === r
                                        ? void 0
                                        : r.toSignificant(3)) +
                                      " " +
                                      (null === (a = U[zf.CURRENCY_B]) ||
                                      void 0 === a
                                        ? void 0
                                        : a.symbol)
                                  }),
                                  de(e.hash);
                              });
                          })
                          .catch(function (e) {
                            console.log(e),
                              te(!1),
                              4001 !==
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.code) && console.error(e);
                          })
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var Ie = function () {
            var e, n, t, a;
            return F
              ? Object(r.jsx)(Jo, {
                  gap: "20px",
                  children: Object(r.jsx)(Ps, {
                    mt: "20px",
                    borderRadius: "20px",
                    children: Object(r.jsxs)(Yc, {
                      children: [
                        Object(r.jsx)(tc.b, {
                          fontSize: "48px",
                          fontWeight: 500,
                          lineHeight: "42px",
                          marginRight: 10,
                          children:
                            (null === (e = U[zf.CURRENCY_A]) || void 0 === e
                              ? void 0
                              : e.symbol) +
                            "/" +
                            (null === (n = U[zf.CURRENCY_B]) || void 0 === n
                              ? void 0
                              : n.symbol)
                        }),
                        Object(r.jsx)(Kb, {
                          currency0: U[zf.CURRENCY_A],
                          currency1: U[zf.CURRENCY_B],
                          size: 30
                        })
                      ]
                    })
                  })
                })
              : Object(r.jsxs)(Jo, {
                  gap: "20px",
                  children: [
                    Object(r.jsxs)(Yc, {
                      style: {
                        marginTop: "20px"
                      },
                      children: [
                        Object(r.jsx)(tc.b, {
                          fontSize: "48px",
                          fontWeight: 500,
                          lineHeight: "42px",
                          marginRight: 10,
                          children:
                            null === z || void 0 === z
                              ? void 0
                              : z.toSignificant(6)
                        }),
                        Object(r.jsx)(Kb, {
                          currency0: U[zf.CURRENCY_A],
                          currency1: U[zf.CURRENCY_B],
                          size: 30
                        })
                      ]
                    }),
                    Object(r.jsx)(Qc, {
                      children: Object(r.jsx)(tc.b, {
                        fontSize: "24px",
                        children:
                          (null === (t = U[zf.CURRENCY_A]) || void 0 === t
                            ? void 0
                            : t.symbol) +
                          "/" +
                          (null === (a = U[zf.CURRENCY_B]) || void 0 === a
                            ? void 0
                            : a.symbol) +
                          " Pool Tokens"
                      })
                    }),
                    Object(r.jsx)(Uc, {
                      fontSize: 12,
                      textAlign: "left",
                      padding: "8px 0 0 0 ",
                      children:
                        "Output is estimated. If the price changes by more than ".concat(
                          oe / 100,
                          "% your transaction will revert."
                        )
                    })
                  ]
                });
          },
          Ee = function () {
            return Object(r.jsx)(wj, {
              price: D,
              currencies: U,
              parsedAmounts: _,
              noLiquidity: F,
              onAdd: ke,
              poolTokenPercentage: q
            });
          },
          Ae = "Supplying "
            .concat(
              null === (o = _[zf.CURRENCY_A]) || void 0 === o
                ? void 0
                : o.toSignificant(6),
              " "
            )
            .concat(
              null === (c = U[zf.CURRENCY_A]) || void 0 === c
                ? void 0
                : c.symbol,
              " and "
            )
            .concat(
              null === (s = _[zf.CURRENCY_B]) || void 0 === s
                ? void 0
                : s.toSignificant(6),
              " "
            )
            .concat(
              null === (u = U[zf.CURRENCY_B]) || void 0 === u
                ? void 0
                : u.symbol
            ),
          Se = Object(a.useCallback)(
            function (e) {
              var n = Ip(e);
              n === m
                ? v.push("/add/".concat(m, "/").concat(h))
                : v.push("/add/".concat(n, "/").concat(m));
            },
            [m, v, h]
          ),
          Ne = Object(a.useCallback)(
            function (e) {
              var n = Ip(e);
              h === n
                ? m
                  ? v.push("/add/".concat(m, "/").concat(n))
                  : v.push("/add/".concat(n))
                : v.push("/add/".concat(h || "ETH", "/").concat(n));
            },
            [h, v, m]
          ),
          Re = Object(a.useCallback)(
            function () {
              X(!1), le && Y(""), de("");
            },
            [Y, le]
          );
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(Eu, {
              activeIndex: 1
            }),
            Object(r.jsxs)(hj, {
              children: [
                Object(r.jsx)(Cp, {
                  adding: !0
                }),
                Object(r.jsxs)(Oj, {
                  children: [
                    Object(r.jsx)(mu, {
                      isOpen: J,
                      onDismiss: Re,
                      attemptingTxn: ne,
                      hash: le,
                      content: function () {
                        return Object(r.jsx)(fu, {
                          title: F
                            ? "You are creating a pool"
                            : "You will receive",
                          onDismiss: Re,
                          topContent: Ie,
                          bottomContent: Ee
                        });
                      },
                      pendingText: Ae
                    }),
                    Object(r.jsx)(ce, {
                      children: Object(r.jsxs)(Jo, {
                        gap: "20px",
                        children: [
                          F &&
                            Object(r.jsx)(Go, {
                              children: Object(r.jsx)(Ij, {
                                children: Object(r.jsxs)(Jo, {
                                  gap: "12px",
                                  children: [
                                    Object(r.jsx)(tc.b, {
                                      children:
                                        "You are the first liquidity provider."
                                    }),
                                    Object(r.jsx)(tc.b, {
                                      children:
                                        "The ratio of tokens you add will set the price of this pool."
                                    }),
                                    Object(r.jsx)(tc.b, {
                                      children:
                                        "Once you are happy with the rate click supply to review."
                                    })
                                  ]
                                })
                              })
                            }),
                          Object(r.jsx)(bp, {
                            value: be[zf.CURRENCY_A],
                            onUserInput: Y,
                            onMax: function () {
                              var e, n;
                              Y(
                                null !==
                                  (e =
                                    null === (n = pe[zf.CURRENCY_A]) ||
                                    void 0 === n
                                      ? void 0
                                      : n.toExact()) && void 0 !== e
                                  ? e
                                  : ""
                              );
                            },
                            onCurrencySelect: Se,
                            showMaxButton: !fe[zf.CURRENCY_A],
                            currency: U[zf.CURRENCY_A],
                            id: "add-liquidity-input-tokena",
                            showCommonBases: !1
                          }),
                          Object(r.jsx)(Go, {
                            children: Object(r.jsx)(Fe, {
                              color: "textSubtle"
                            })
                          }),
                          Object(r.jsx)(bp, {
                            value: be[zf.CURRENCY_B],
                            onUserInput: Z,
                            onCurrencySelect: Ne,
                            onMax: function () {
                              var e, n;
                              Z(
                                null !==
                                  (e =
                                    null === (n = pe[zf.CURRENCY_B]) ||
                                    void 0 === n
                                      ? void 0
                                      : n.toExact()) && void 0 !== e
                                  ? e
                                  : ""
                              );
                            },
                            showMaxButton: !fe[zf.CURRENCY_B],
                            currency: U[zf.CURRENCY_B],
                            id: "add-liquidity-input-tokenb",
                            showCommonBases: !1
                          }),
                          U[zf.CURRENCY_A] &&
                            U[zf.CURRENCY_B] &&
                            P !== cf.INVALID &&
                            Object(r.jsxs)("div", {
                              children: [
                                Object(r.jsx)(g, {
                                  style: {
                                    textTransform: "uppercase",
                                    fontWeight: 600
                                  },
                                  color: "textSubtle",
                                  fontSize: "12px",
                                  mb: "2px",
                                  children: F
                                    ? "Initial prices and pool share"
                                    : "Prices and pool share"
                                }),
                                Object(r.jsx)(Ij, {
                                  children: Object(r.jsx)(kj, {
                                    currencies: U,
                                    poolTokenPercentage: q,
                                    noLiquidity: F,
                                    price: D
                                  })
                                })
                              ]
                            }),
                          y
                            ? Object(r.jsxs)(Jo, {
                                gap: "md",
                                children: [
                                  (me === Ff.NOT_APPROVED ||
                                    me === Ff.PENDING ||
                                    Oe === Ff.NOT_APPROVED ||
                                    Oe === Ff.PENDING) &&
                                    Q &&
                                    Object(r.jsxs)(Hc, {
                                      children: [
                                        me !== Ff.APPROVED &&
                                          Object(r.jsx)(W, {
                                            onClick: ve,
                                            disabled: me === Ff.PENDING,
                                            style: {
                                              width:
                                                Oe !== Ff.APPROVED
                                                  ? "48%"
                                                  : "100%"
                                            },
                                            children:
                                              me === Ff.PENDING
                                                ? Object(r.jsxs)(Cj, {
                                                    children: [
                                                      "Approving ",
                                                      null ===
                                                        (d =
                                                          U[zf.CURRENCY_A]) ||
                                                      void 0 === d
                                                        ? void 0
                                                        : d.symbol
                                                    ]
                                                  })
                                                : "Approve ".concat(
                                                    null ===
                                                      (b = U[zf.CURRENCY_A]) ||
                                                      void 0 === b
                                                      ? void 0
                                                      : b.symbol
                                                  )
                                          }),
                                        Oe !== Ff.APPROVED &&
                                          Object(r.jsx)(W, {
                                            onClick: Ce,
                                            disabled: Oe === Ff.PENDING,
                                            style: {
                                              width:
                                                me !== Ff.APPROVED
                                                  ? "48%"
                                                  : "100%"
                                            },
                                            children:
                                              Oe === Ff.PENDING
                                                ? Object(r.jsxs)(Cj, {
                                                    children: [
                                                      "Approving ",
                                                      null ===
                                                        (p =
                                                          U[zf.CURRENCY_B]) ||
                                                      void 0 === p
                                                        ? void 0
                                                        : p.symbol
                                                    ]
                                                  })
                                                : "Approve ".concat(
                                                    null ===
                                                      (f = U[zf.CURRENCY_B]) ||
                                                      void 0 === f
                                                      ? void 0
                                                      : f.symbol
                                                  )
                                          })
                                      ]
                                    }),
                                  Object(r.jsx)(W, {
                                    onClick: function () {
                                      I ? ke() : X(!0);
                                    },
                                    disabled:
                                      !Q ||
                                      me !== Ff.APPROVED ||
                                      Oe !== Ff.APPROVED,
                                    variant:
                                      !Q && _[zf.CURRENCY_A] && _[zf.CURRENCY_B]
                                        ? "danger"
                                        : "primary",
                                    fullWidth: !0,
                                    children:
                                      null !== V && void 0 !== V ? V : "Supply"
                                  })
                                ]
                              })
                            : Object(r.jsx)(Ej, {
                                fullWidth: !0
                              })
                        ]
                      })
                    })
                  ]
                })
              ]
            }),
            B && !F && P !== cf.INVALID
              ? Object(r.jsx)(Jo, {
                  style: {
                    minWidth: "20rem",
                    marginTop: "1rem"
                  },
                  children: Object(r.jsx)(af, {
                    showUnwrapped: T,
                    pair: B
                  })
                })
              : null
          ]
        });
      }

      function Sj() {
        return Object(r.jsx)(Bo.a, {
          to: "/add/"
        });
      }
      var Nj = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function Rj(e) {
        var n = e.match.params.currencyIdA.match(Nj);
        return (null === n || void 0 === n ? void 0 : n.length)
          ? Object(r.jsx)(Bo.a, {
              to: "/add/".concat(n[1], "/").concat(n[2])
            })
          : Object(r.jsx)(Aj, Object(l.a)({}, e));
      }

      function Lj(e) {
        var n = e.match.params,
          t = n.currencyIdA,
          a = n.currencyIdB;
        return t.toLowerCase() === a.toLowerCase()
          ? Object(r.jsx)(Bo.a, {
              to: "/add/".concat(t)
            })
          : Object(r.jsx)(Aj, Object(l.a)({}, e));
      }

      function Uj(e) {
        var n = e.message;
        return Object(r.jsx)(Jo, {
          style: {
            minHeight: 200,
            justifyContent: "center",
            alignItems: "center"
          },
          children: Object(r.jsx)(Ac, {
            children: n
          })
        });
      }
      var Bj = Object(Bo.h)(function (e) {
        var n = e.token,
          t = e.V1LiquidityBalance,
          i = Object(a.useContext)(u.ThemeContext),
          o = yi().chainId;
        return Object(r.jsx)(rf, {
          children: Object(r.jsxs)(Jo, {
            gap: "12px",
            children: [
              Object(r.jsx)(tf, {
                children: Object(r.jsxs)(Zc, {
                  children: [
                    Object(r.jsx)(Kb, {
                      currency0: n,
                      margin: !0,
                      size: 20
                    }),
                    Object(r.jsx)(tc.b, {
                      fontWeight: 500,
                      fontSize: 20,
                      style: {
                        marginLeft: ""
                      },
                      children: "".concat(
                        o && n.equals(fr[o]) ? "WETH" : n.symbol,
                        "/ETH"
                      )
                    }),
                    Object(r.jsx)(tc.b, {
                      fontSize: 12,
                      fontWeight: 500,
                      ml: "0.5rem",
                      px: "0.75rem",
                      py: "0.25rem",
                      style: {
                        borderRadius: "1rem"
                      },
                      backgroundColor: i.colors.binance,
                      color: "black",
                      children: "V1"
                    })
                  ]
                })
              }),
              Object(r.jsx)(Jo, {
                gap: "8px",
                children: Object(r.jsxs)(Hc, {
                  marginTop: "10px",
                  children: [
                    Object(r.jsx)(W, {
                      style: {
                        width: "68%"
                      },
                      as: qn.b,
                      to: "/migrate/v1/".concat(t.token.address),
                      children: "Migrate"
                    }),
                    Object(r.jsx)(W, {
                      variant: "secondary",
                      style: {
                        width: "28%"
                      },
                      as: qn.b,
                      to: "/remove/v1/".concat(t.token.address),
                      children: "Remove"
                    })
                  ]
                })
              })
            ]
          })
        });
      });

      function Pj() {
        var e,
          n = Object(a.useContext)(u.ThemeContext),
          t = yi(),
          i = t.account,
          o = t.chainId,
          c = Object(a.useState)(""),
          s = Object(Ln.a)(c, 2),
          l = s[0],
          d = s[1],
          b = Object(a.useCallback)(
            function (e) {
              return d(e.target.value);
            },
            [d]
          ),
          p = El(l),
          f = mi(Bu(), null !== p && void 0 !== p ? p : void 0),
          j = kl(),
          h = Ol();
        Object(a.useEffect)(
          function () {
            !p || f || j[p.address] || h(p);
          },
          [p, f, h, j]
        );
        var m = yf(),
          v = Object(a.useMemo)(
            function () {
              return o
                ? Object.keys(m).map(function (e) {
                    return new lr(o, e, 18, "UNI-V1", "Uniswap V1");
                  })
                : [];
            },
            [o, m]
          ),
          x = Nl(null !== i && void 0 !== i ? i : void 0, v),
          y = Object(Ln.a)(x, 2),
          O = y[0],
          g = y[1],
          C = v
            .filter(function (e) {
              var n = null === O || void 0 === O ? void 0 : O[e.address];
              return n && mt.a.greaterThan(n.raw, mt.a.BigInt(0));
            })
            .map(function (e) {
              var n = O[e.address];
              return n
                ? Object(r.jsx)(
                    Bj,
                    {
                      token: m[e.address],
                      V1LiquidityBalance: n
                    },
                    e.address
                  )
                : null;
            }),
          w =
            0 ===
              (null === (e = Object.keys(m)) || void 0 === e
                ? void 0
                : e.length) || g;
        return Object(r.jsx)(jj, {
          children: Object(r.jsxs)(Jo, {
            gap: "16px",
            children: [
              Object(r.jsxs)(Wc, {
                style: {
                  alignItems: "center",
                  justifyContent: "space-between"
                },
                gap: "8px",
                children: [
                  Object(r.jsx)(Tc, {
                    to: "/pool"
                  }),
                  Object(r.jsx)(Nc, {
                    children: "Migrate V1 Liquidity"
                  }),
                  Object(r.jsx)("div", {
                    children: Object(r.jsx)(vd, {
                      text: "Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."
                    })
                  })
                ]
              }),
              Object(r.jsx)(Ac, {
                style: {
                  marginBottom: 8,
                  fontWeight: 400
                },
                children:
                  "For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2."
              }),
              i
                ? w
                  ? Object(r.jsx)(Ps, {
                      padding: "40px",
                      children: Object(r.jsx)(Ac, {
                        color: n.colors.textDisabled,
                        textAlign: "center",
                        children: Object(r.jsx)(Kp, {
                          children: "Loading"
                        })
                      })
                    })
                  : Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsx)(Wc, {
                          children: Object(r.jsx)(zd, {
                            value: l,
                            onChange: b,
                            placeholder:
                              "Enter a token address to find liquidity"
                          })
                        }),
                        (null === C || void 0 === C ? void 0 : C.length) > 0
                          ? Object(r.jsx)(r.Fragment, {
                              children: C
                            })
                          : Object(r.jsx)(Uj, {
                              message: "No V1 Liquidity found."
                            })
                      ]
                    })
                : Object(r.jsx)(Ps, {
                    padding: "40px",
                    children: Object(r.jsx)(Ac, {
                      color: n.colors.textDisabled,
                      textAlign: "center",
                      children: "Connect to a wallet to view your V1 liquidity."
                    })
                  })
            ]
          })
        });
      }
      var Mj = new xr(mt.a.BigInt(1), mt.a.BigInt(1e6)),
        _j = mt.a.exponentiate(mt.a.BigInt(10), mt.a.BigInt(18)),
        Dj = mt.a.BigInt(0),
        Fj = mt.a.BigInt(1),
        zj = new xr(Dj, Fj),
        qj = new Er(mt.a.BigInt(9920), mt.a.BigInt(1e4));

      function Vj(e) {
        var n = e.currencyAmount;
        return Object(r.jsx)(r.Fragment, {
          children: n.equalTo(mt.a.BigInt(0))
            ? "0"
            : n.greaterThan(Mj)
            ? n.toSignificant(4)
            : "<".concat(Mj.toSignificant(1))
        });
      }

      function Hj(e) {
        var n = e.token,
          t = e.liquidityTokenAmount,
          a = e.tokenWorth,
          i = e.ethWorth,
          o = yi().chainId;
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)(Wc, {
              style: {
                justifyContent: "flex-start",
                width: "fit-content"
              },
              children: [
                Object(r.jsx)(Td, {
                  size: "24px",
                  currency: n
                }),
                Object(r.jsx)("div", {
                  style: {
                    marginLeft: ".75rem"
                  },
                  children: Object(r.jsxs)(Nc, {
                    children: [
                      Object(r.jsx)(Vj, {
                        currencyAmount: t
                      }),
                      " ",
                      o && n.equals(fr[o]) ? "WETH" : n.symbol,
                      "/ETH"
                    ]
                  })
                })
              ]
            }),
            Object(r.jsxs)(Hc, {
              my: "1rem",
              children: [
                Object(r.jsxs)(tc.b, {
                  fontSize: 16,
                  fontWeight: 500,
                  children: [
                    "Pooled ",
                    o && n.equals(fr[o]) ? "WETH" : n.symbol,
                    ":"
                  ]
                }),
                Object(r.jsxs)(Zc, {
                  children: [
                    Object(r.jsx)(tc.b, {
                      fontSize: 16,
                      fontWeight: 500,
                      marginLeft: "6px",
                      children: a.toSignificant(4)
                    }),
                    Object(r.jsx)(Td, {
                      size: "20px",
                      style: {
                        marginLeft: "8px"
                      },
                      currency: n
                    })
                  ]
                })
              ]
            }),
            Object(r.jsxs)(Hc, {
              mb: "1rem",
              children: [
                Object(r.jsx)(tc.b, {
                  fontSize: 16,
                  fontWeight: 500,
                  children: "Pooled ETH:"
                }),
                Object(r.jsxs)(Zc, {
                  children: [
                    Object(r.jsx)(tc.b, {
                      fontSize: 16,
                      fontWeight: 500,
                      marginLeft: "6px",
                      children: Object(r.jsx)(Vj, {
                        currencyAmount: i
                      })
                    }),
                    Object(r.jsx)(Td, {
                      size: "20px",
                      style: {
                        marginLeft: "8px"
                      },
                      currency: sr.ETHER
                    })
                  ]
                })
              ]
            })
          ]
        });
      }

      function Yj(e) {
        var n,
          t,
          i,
          o,
          c = e.liquidityTokenAmount,
          s = e.token,
          u = yi(),
          l = u.account,
          d = u.chainId,
          b = Tp(c.token),
          p =
            null === (n = Sl([c.token.address])) || void 0 === n
              ? void 0
              : n[c.token.address],
          f = Ll(c.token.address, s),
          j = lf(d ? fr[d] : void 0, s),
          h = Object(Ln.a)(j, 2),
          m = h[0],
          v = h[1],
          x = m === cf.NOT_EXISTS,
          y = d && v ? v.reserveOf(s).divide(v.reserveOf(fr[d])) : void 0,
          O = Object(a.useState)(!1),
          g = Object(Ln.a)(O, 2),
          C = g[0],
          w = g[1],
          k = Object(a.useState)(null),
          T = Object(Ln.a)(k, 2),
          I = T[0],
          E = T[1],
          A = b ? new Er(c.raw, b.raw) : zj,
          S = p ? Or.ether(p.multiply(A).multiply(_j).quotient) : Or.ether(Dj),
          N = new gr(s, f ? A.multiply(f.raw).quotient : Dj),
          R = Kf(c, Qr),
          L = Object(Ln.a)(R, 2),
          U = L[0],
          B = L[1],
          P = f && p ? f.divide(new xr(p.raw, _j)) : null,
          M = P && y ? P.divide(y).multiply("100").subtract("100") : void 0,
          _ = (null === M || void 0 === M ? void 0 : M.lessThan(Dj))
            ? null === M || void 0 === M
              ? void 0
              : M.multiply("-1")
            : M,
          D =
            y && N
              ? N.divide(y).multiply(_j).multiply(qj).quotient
              : null === S || void 0 === S
              ? void 0
              : S.numerator,
          F =
            y && S
              ? S.multiply(y)
                  .multiply(
                    mt.a.exponentiate(mt.a.BigInt(10), mt.a.BigInt(s.decimals))
                  )
                  .multiply(qj).quotient
              : null === N || void 0 === N
              ? void 0
              : N.numerator,
          z = Pf(),
          q = _f(null !== I && void 0 !== I ? I : void 0),
          V = Oi(Qr, Zr, !0),
          H = Object(a.useCallback)(
            function () {
              F &&
                D &&
                V &&
                (w(!0),
                V.migrate(
                  s.address,
                  F.toString(),
                  D.toString(),
                  l,
                  Math.floor(new Date().getTime() / 1e3) + $a
                )
                  .then(function (e) {
                    z(e, {
                      summary: "Migrate ".concat(s.symbol, " liquidity to V2")
                    }),
                      E(e.hash);
                  })
                  .catch(function () {
                    w(!1);
                  }));
            },
            [F, D, V, s, l, z]
          ),
          Y = !!c && c.equalTo(Dj),
          Z = !!_ && !_.lessThan(mt.a.BigInt(5)),
          Q = !!I && Y;
        return Object(r.jsxs)(Jo, {
          gap: "20px",
          children: [
            Object(r.jsxs)(Ac, {
              my: 9,
              style: {
                fontWeight: 400
              },
              children: [
                "This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the",
                " ",
                d &&
                  Object(r.jsx)(gc, {
                    href: di(d, Qr, "address"),
                    children: Object(r.jsx)(Rc, {
                      display: "inline",
                      children: "Uniswap migration contract\u2197"
                    })
                  }),
                "."
              ]
            }),
            !x && Z
              ? Object(r.jsxs)(_s, {
                  children: [
                    Object(r.jsxs)(Ac, {
                      style: {
                        marginBottom: 8,
                        fontWeight: 400
                      },
                      children: [
                        "It",
                        "'",
                        "s best to deposit liquidity into Uniswap V2 at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so."
                      ]
                    }),
                    Object(r.jsxs)(Jo, {
                      gap: "8px",
                      children: [
                        Object(r.jsxs)(Hc, {
                          children: [
                            Object(r.jsx)(Ac, {
                              children: "V1 Price:"
                            }),
                            Object(r.jsxs)(Ec, {
                              children: [
                                null === P || void 0 === P
                                  ? void 0
                                  : P.toSignificant(6),
                                " ",
                                s.symbol,
                                "/ETH"
                              ]
                            })
                          ]
                        }),
                        Object(r.jsxs)(Hc, {
                          children: [
                            Object(r.jsx)("div", {}),
                            Object(r.jsxs)(Ec, {
                              children: [
                                null === P ||
                                void 0 === P ||
                                null === (t = P.invert()) ||
                                void 0 === t
                                  ? void 0
                                  : t.toSignificant(6),
                                " ETH/",
                                s.symbol
                              ]
                            })
                          ]
                        }),
                        Object(r.jsxs)(Hc, {
                          children: [
                            Object(r.jsx)(Ac, {
                              children: "V2 Price:"
                            }),
                            Object(r.jsxs)(Ec, {
                              children: [
                                null === y || void 0 === y
                                  ? void 0
                                  : y.toSignificant(6),
                                " ",
                                s.symbol,
                                "/ETH"
                              ]
                            })
                          ]
                        }),
                        Object(r.jsxs)(Hc, {
                          children: [
                            Object(r.jsx)("div", {}),
                            Object(r.jsxs)(Ec, {
                              children: [
                                null === y ||
                                void 0 === y ||
                                null === (i = y.invert()) ||
                                void 0 === i
                                  ? void 0
                                  : i.toSignificant(6),
                                " ETH/",
                                s.symbol
                              ]
                            })
                          ]
                        }),
                        Object(r.jsxs)(Hc, {
                          children: [
                            Object(r.jsx)(Ac, {
                              color: "inherit",
                              children: "Price Difference:"
                            }),
                            Object(r.jsxs)(Ec, {
                              color: "inherit",
                              children: [
                                null === _ || void 0 === _
                                  ? void 0
                                  : _.toSignificant(4),
                                "%"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              : null,
            x &&
              Object(r.jsxs)(Ds, {
                children: [
                  Object(r.jsx)(Ac, {
                    style: {
                      marginBottom: 8,
                      fontWeight: 400
                    },
                    children:
                      "You are the first liquidity provider for this pair on Uniswap V2. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool."
                  }),
                  Object(r.jsxs)(Jo, {
                    gap: "8px",
                    children: [
                      Object(r.jsxs)(Hc, {
                        children: [
                          Object(r.jsx)(Ac, {
                            children: "V1 Price:"
                          }),
                          Object(r.jsxs)(Ec, {
                            children: [
                              null === P || void 0 === P
                                ? void 0
                                : P.toSignificant(6),
                              " ",
                              s.symbol,
                              "/ETH"
                            ]
                          })
                        ]
                      }),
                      Object(r.jsxs)(Hc, {
                        children: [
                          Object(r.jsx)("div", {}),
                          Object(r.jsxs)(Ec, {
                            children: [
                              null === P ||
                              void 0 === P ||
                              null === (o = P.invert()) ||
                              void 0 === o
                                ? void 0
                                : o.toSignificant(6),
                              " ETH/",
                              s.symbol
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
            Object(r.jsxs)(Ps, {
              children: [
                Object(r.jsx)(Hj, {
                  token: s,
                  liquidityTokenAmount: c,
                  tokenWorth: N,
                  ethWorth: S
                }),
                Object(r.jsxs)("div", {
                  style: {
                    display: "flex",
                    marginTop: "1rem"
                  },
                  children: [
                    Object(r.jsx)(Jo, {
                      gap: "12px",
                      style: {
                        flex: "1",
                        marginRight: 12
                      },
                      children: Object(r.jsx)(W, {
                        variant: U === Ff.APPROVED ? "success" : "primary",
                        disabled: U !== Ff.NOT_APPROVED,
                        onClick: B,
                        children:
                          U === Ff.PENDING
                            ? Object(r.jsx)(Kp, {
                                children: "Approving"
                              })
                            : U === Ff.APPROVED
                            ? "Approved"
                            : "Approve"
                      })
                    }),
                    Object(r.jsx)(Jo, {
                      gap: "12px",
                      style: {
                        flex: "1"
                      },
                      children: Object(r.jsx)(W, {
                        variant: Q ? "success" : "primary",
                        disabled: Q || Y || q || U !== Ff.APPROVED || C,
                        onClick: H,
                        children: Q
                          ? "Success"
                          : q
                          ? Object(r.jsx)(Kp, {
                              children: "Migrating"
                            })
                          : "Migrate"
                      })
                    })
                  ]
                })
              ]
            }),
            Object(r.jsx)(Lc, {
              style: {
                textAlign: "center"
              },
              children: "Your Uniswap V1 "
                .concat(s.symbol, "/ETH liquidity will become Uniswap V2 ")
                .concat(s.symbol, "/ETH liquidity.")
            })
          ]
        });
      }

      function Wj(e) {
        var n,
          t,
          i = e.history,
          o = e.match.params.address,
          c = ui(o),
          s = yi(),
          u = s.chainId,
          l = s.account,
          d =
            null === (n = nl(Ci(c || void 0), "tokenAddress", void 0, Qu)) ||
            void 0 === n ||
            null === (t = n.result) ||
            void 0 === t
              ? void 0
              : t[0],
          b = El(d),
          p = Ll(
            null !== l && void 0 !== l ? l : void 0,
            Object(a.useMemo)(
              function () {
                return c && u && b
                  ? new lr(u, c, 18, "UNI-V1-".concat(b.symbol), "Uniswap V1")
                  : void 0;
              },
              [u, c, b]
            )
          );
        return c && d !== na.a
          ? Object(r.jsx)(jj, {
              children: Object(r.jsxs)(Jo, {
                gap: "16px",
                children: [
                  Object(r.jsxs)(Wc, {
                    style: {
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    gap: "8px",
                    children: [
                      Object(r.jsx)(Tc, {
                        to: "/migrate/v1"
                      }),
                      Object(r.jsx)(Nc, {
                        children: "Migrate V1 Liquidity"
                      }),
                      Object(r.jsx)("div", {
                        children: Object(r.jsx)(vd, {
                          text: "Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."
                        })
                      })
                    ]
                  }),
                  l
                    ? c &&
                      u &&
                      (null === b || void 0 === b ? void 0 : b.equals(fr[u]))
                      ? Object(r.jsxs)(r.Fragment, {
                          children: [
                            Object(r.jsx)(Ac, {
                              my: 9,
                              style: {
                                fontWeight: 400
                              },
                              children:
                                "Because Uniswap V2 uses WETH under the hood, your Uniswap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead."
                            }),
                            Object(r.jsx)(W, {
                              onClick: function () {
                                i.push("/remove/v1/".concat(c));
                              },
                              children: "Remove"
                            })
                          ]
                        })
                      : p && b
                      ? Object(r.jsx)(Yj, {
                          liquidityTokenAmount: p,
                          token: b
                        })
                      : Object(r.jsx)(Uj, {
                          message: "Loading..."
                        })
                    : Object(r.jsx)(Sc, {
                        children: "You must connect an account."
                      })
                ]
              })
            })
          : (console.error("Invalid address in path", o),
            Object(r.jsx)(Bo.a, {
              to: "/migrate/v1"
            }));
      }
      var Zj = mt.a.exponentiate(mt.a.BigInt(10), mt.a.BigInt(18)),
        Qj = mt.a.BigInt(0),
        Kj = mt.a.BigInt(1),
        Gj = new xr(Qj, Kj);

      function Jj(e) {
        var n,
          t = e.exchangeContract,
          i = e.liquidityTokenAmount,
          o = e.token,
          c = yi().chainId,
          s = Tp(i.token),
          u =
            null === (n = Sl([i.token.address])) || void 0 === n
              ? void 0
              : n[i.token.address],
          l = Ll(i.token.address, o),
          d = Object(a.useState)(!1),
          b = Object(Ln.a)(d, 2),
          p = b[0],
          f = b[1],
          j = Object(a.useState)(null),
          h = Object(Ln.a)(j, 2),
          m = h[0],
          v = h[1],
          x = s ? new Er(i.raw, s.raw) : Gj,
          y = u ? Or.ether(u.multiply(x).multiply(Zj).quotient) : Or.ether(Qj),
          O = new gr(o, l ? x.multiply(l.raw).quotient : Qj),
          g = Pf(),
          C = _f(null !== m && void 0 !== m ? m : void 0),
          w = Object(a.useCallback)(
            function () {
              i &&
                (f(!0),
                t
                  .removeLiquidity(
                    i.raw.toString(),
                    1,
                    1,
                    Math.floor(new Date().getTime() / 1e3) + $a
                  )
                  .then(function (e) {
                    g(e, {
                      summary: "Remove ".concat(
                        c && o.equals(fr[c]) ? "WETH" : o.symbol,
                        "/ETH V1 liquidity"
                      )
                    }),
                      v(e.hash);
                  })
                  .catch(function (e) {
                    console.error(e), f(!1);
                  }));
            },
            [t, i, o, c, g]
          ),
          k = !!i && i.equalTo(Qj),
          T = !!m && k;
        return Object(r.jsxs)(Jo, {
          gap: "20px",
          children: [
            Object(r.jsx)(Ac, {
              my: 9,
              style: {
                fontWeight: 400
              },
              children:
                "This tool will remove your V1 liquidity and send the underlying assets to your wallet."
            }),
            Object(r.jsxs)(Ps, {
              children: [
                Object(r.jsx)(Hj, {
                  token: o,
                  liquidityTokenAmount: i,
                  tokenWorth: O,
                  ethWorth: y
                }),
                Object(r.jsx)("div", {
                  style: {
                    display: "flex",
                    marginTop: "1rem"
                  },
                  children: Object(r.jsx)(W, {
                    variant: T ? "success" : "primary",
                    disabled: T || k || C || p,
                    onClick: w,
                    children: T
                      ? "Success"
                      : C
                      ? Object(r.jsx)(Kp, {
                          children: "Removing"
                        })
                      : "Remove"
                  })
                })
              ]
            }),
            Object(r.jsx)(Lc, {
              style: {
                textAlign: "center"
              },
              children: "Your Uniswap V1 ".concat(
                c && o.equals(fr[c]) ? "WETH" : o.symbol,
                "/ETH liquidity will be redeemed for underlying assets."
              )
            })
          ]
        });
      }

      function Xj(e) {
        var n,
          t,
          i = e.match.params.address,
          o = ui(i),
          c = yi(),
          s = c.chainId,
          u = c.account,
          l = Ci(o || void 0, !0),
          d =
            null === (n = nl(l, "tokenAddress", void 0, Qu)) ||
            void 0 === n ||
            null === (t = n.result) ||
            void 0 === t
              ? void 0
              : t[0],
          b = El(d),
          p = Ll(
            null !== u && void 0 !== u ? u : void 0,
            Object(a.useMemo)(
              function () {
                return o && s && b
                  ? new lr(s, o, 18, "UNI-V1-".concat(b.symbol), "Uniswap V1")
                  : void 0;
              },
              [s, o, b]
            )
          );
        return o && d !== na.a
          ? Object(r.jsx)(jj, {
              children: Object(r.jsxs)(Jo, {
                gap: "16px",
                children: [
                  Object(r.jsxs)(Wc, {
                    style: {
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    gap: "8px",
                    children: [
                      Object(r.jsx)(Tc, {
                        to: "/migrate/v1"
                      }),
                      Object(r.jsx)(Nc, {
                        children: "Remove V1 Liquidity"
                      }),
                      Object(r.jsx)("div", {
                        children: Object(r.jsx)(vd, {
                          text: "Remove your Uniswap V1 liquidity tokens."
                        })
                      })
                    ]
                  }),
                  u
                    ? p && b && l
                      ? Object(r.jsx)(Jj, {
                          exchangeContract: l,
                          liquidityTokenAmount: p,
                          token: b
                        })
                      : Object(r.jsx)(Uj, {
                          message: "Loading..."
                        })
                    : Object(r.jsx)(Sc, {
                        children: "You must connect an account."
                      })
                ]
              })
            })
          : (console.error("Invalid address in path", i),
            Object(r.jsx)(Bo.a, {
              to: "/migrate/v1"
            }));
      }

      function $j() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"
        ]);
        return (
          ($j = function () {
            return e;
          }),
          e
        );
      }

      function eh() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ",
          ":first-child {\n    padding-left: 0;\n  }\n\n  ",
          ":last-child {\n    padding-right: 0;\n  }\n\n  ",
          " {\n    flex-direction: row;\n  }\n"
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }

      function nh() {
        var e = Object(s.a)(["\n  padding: 0 4px;\n"]);
        return (
          (nh = function () {
            return e;
          }),
          e
        );
      }

      function th() {
        var e = Object(s.a)(["\n  margin-bottom: 16px;\n"]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      var rh = u.default.div(th()),
        ah = u.default.div(nh()),
        ih = u.default.div(eh(), ah, ah, function (e) {
          return e.theme.mediaQueries.sm;
        }),
        oh = u.default.div($j()),
        ch = [
          {
            label: "0.1%",
            value: 0.1
          },
          {
            label: "0.5%",
            value: 0.5
          },
          {
            label: "1%",
            value: 1
          }
        ],
        sh = function () {
          var e = xl(),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            i = n[1],
            o = Object(a.useState)(t / 100),
            c = Object(Ln.a)(o, 2),
            s = c[0],
            u = c[1],
            l = Object(a.useState)(null),
            d = Object(Ln.a)(l, 2),
            b = d[0],
            p = d[1];
          return (
            Object(a.useEffect)(
              function () {
                try {
                  var e = 100 * s;
                  !Number.isNaN(e) && e > 0 && e < 5e3
                    ? (i(e), p(null))
                    : p("Enter a valid slippage percentage");
                } catch (n) {
                  p("Enter a valid slippage percentage");
                }
              },
              [s, p, i]
            ),
            Object(a.useEffect)(
              function () {
                t < 50
                  ? p("Your transaction may fail")
                  : t > 500 && p("Your transaction may be frontrun");
              },
              [t, p]
            ),
            Object(r.jsxs)(rh, {
              children: [
                Object(r.jsxs)(oh, {
                  children: [
                    Object(r.jsx)(g, {
                      style: {
                        fontWeight: 600
                      },
                      children: Object(r.jsx)(wu, {
                        translationId: 88,
                        children: "Slippage tolerance"
                      })
                    }),
                    Object(r.jsx)(vd, {
                      text: "Your transaction will revert if the price changes unfavorably by more than this percentage."
                    })
                  ]
                }),
                Object(r.jsxs)(ih, {
                  children: [
                    Object(r.jsx)(Oe, {
                      mb: ["8px", 0],
                      mr: [0, "8px"],
                      children: ch.map(function (e) {
                        var n = e.label,
                          t = e.value;
                        return Object(r.jsx)(
                          ah,
                          {
                            children: Object(r.jsx)(W, {
                              variant: s === t ? "primary" : "tertiary",
                              onClick: function () {
                                return u(t);
                              },
                              children: n
                            })
                          },
                          t
                        );
                      })
                    }),
                    Object(r.jsxs)(Oe, {
                      alignItems: "center",
                      children: [
                        Object(r.jsx)(ah, {
                          children: Object(r.jsx)(Pe, {
                            type: "number",
                            scale: "lg",
                            step: 0.1,
                            min: 0.1,
                            placeholder: "5%",
                            value: s,
                            onChange: function (e) {
                              var n = e.target.value;
                              u(parseFloat(n));
                            },
                            isWarning: null !== b
                          })
                        }),
                        Object(r.jsx)(ah, {
                          children: Object(r.jsx)(g, {
                            fontSize: "18px",
                            children: "%"
                          })
                        })
                      ]
                    })
                  ]
                }),
                b &&
                  Object(r.jsx)(g, {
                    mt: "8px",
                    color: "failure",
                    children: b
                  })
              ]
            })
          );
        };

      function uh() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  display: inline-flex;\n\n  & > ",
          " {\n    max-width: 100px;\n  }\n\n  & > ",
          " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"
        ]);
        return (
          (uh = function () {
            return e;
          }),
          e
        );
      }

      function lh() {
        var e = Object(s.a)([
          "\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"
        ]);
        return (
          (lh = function () {
            return e;
          }),
          e
        );
      }

      function dh() {
        var e = Object(s.a)(["\n  margin-bottom: 16px;\n"]);
        return (
          (dh = function () {
            return e;
          }),
          e
        );
      }
      var bh = u.default.div(dh()),
        ph = u.default.div(lh()),
        fh = u.default.div(uh(), Pe, g),
        jh = function () {
          var e = yl(),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            i = n[1],
            o = Object(a.useState)(t / 60),
            c = Object(Ln.a)(o, 2),
            s = c[0],
            u = c[1],
            l = Object(a.useState)(null),
            d = Object(Ln.a)(l, 2),
            b = d[0],
            p = d[1];
          return (
            Object(a.useEffect)(
              function () {
                try {
                  var e = 60 * s;
                  !Number.isNaN(e) && e > 0
                    ? (i(e), p(null))
                    : p("Enter a valid deadline");
                } catch (n) {
                  p("Enter a valid deadline");
                }
              },
              [s, p, i]
            ),
            Object(r.jsxs)(bh, {
              children: [
                Object(r.jsxs)(ph, {
                  children: [
                    Object(r.jsx)(g, {
                      style: {
                        fontWeight: 600
                      },
                      children: Object(r.jsx)(wu, {
                        translationId: 90,
                        children: "Transaction deadline"
                      })
                    }),
                    Object(r.jsx)(vd, {
                      text: "Your transaction will revert if it is pending for more than this long."
                    })
                  ]
                }),
                Object(r.jsxs)(fh, {
                  children: [
                    Object(r.jsx)(Pe, {
                      type: "number",
                      step: "1",
                      min: "1",
                      value: s,
                      onChange: function (e) {
                        var n = e.target.value;
                        u(parseInt(n, 10));
                      }
                    }),
                    Object(r.jsx)(g, {
                      children: "Minutes"
                    })
                  ]
                }),
                b &&
                  Object(r.jsx)(g, {
                    mt: "8px",
                    color: "failure",
                    children: b
                  })
              ]
            })
          );
        },
        hh = function () {
          return null;
        },
        mh = function (e) {
          var n = e.onDismiss,
            t = void 0 === n ? hh : n;
          return Object(r.jsxs)(Rn, {
            title: "Settings",
            onDismiss: t,
            children: [Object(r.jsx)(sh, {}), Object(r.jsx)(jh, {})]
          });
        },
        vh = function () {
          return null;
        },
        xh = function (e, n) {
          return n.addedTime - e.addedTime;
        },
        yh = function (e) {
          var n = e.onDismiss,
            t = void 0 === n ? vh : n,
            i = yi(),
            o = i.account,
            c = i.chainId,
            s = Mf(),
            u = Object(a.useMemo)(
              function () {
                return Object.values(s).filter(Df).sort(xh);
              },
              [s]
            );
          return (
            console.log(u),
            Object(r.jsxs)(Rn, {
              title: "Recent Transactions",
              onDismiss: t,
              children: [
                !o &&
                  Object(r.jsxs)(Oe, {
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    children: [
                      Object(r.jsx)(g, {
                        mb: "8px",
                        bold: !0,
                        children:
                          "Please connect your wallet to view your recent transactions"
                      }),
                      Object(r.jsx)(W, {
                        variant: "tertiary",
                        size: "sm",
                        onClick: t,
                        children: "Close"
                      })
                    ]
                  }),
                o &&
                  c &&
                  0 === u.length &&
                  Object(r.jsxs)(Oe, {
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    children: [
                      Object(r.jsx)(g, {
                        mb: "8px",
                        bold: !0,
                        children: "No recent transactions"
                      }),
                      Object(r.jsx)(W, {
                        variant: "tertiary",
                        size: "sm",
                        onClick: t,
                        children: "Close"
                      })
                    ]
                  }),
                o &&
                  c &&
                  u.map(function (e) {
                    var n = e.hash,
                      t = e.summary,
                      a = (function (e) {
                        var n = e.hash,
                          t = e.receipt;
                        return n
                          ? n &&
                            1 ===
                              (null === t || void 0 === t ? void 0 : t.status)
                            ? {
                                icon: Object(r.jsx)(v, {
                                  color: "success"
                                }),
                                color: "success"
                              }
                            : {
                                icon: Object(r.jsx)(x, {
                                  color: "failure"
                                }),
                                color: "failure"
                              }
                          : {
                              icon: Object(r.jsx)(Os, {}),
                              color: "text"
                            };
                      })(e),
                      i = a.icon,
                      o = a.color;
                    return Object(r.jsx)(r.Fragment, {
                      children: Object(r.jsxs)(
                        Oe,
                        {
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: "4px",
                          children: [
                            Object(r.jsx)(cn, {
                              href: di(c, n, "transaction"),
                              color: o,
                              children: null !== t && void 0 !== t ? t : n
                            }),
                            i
                          ]
                        },
                        n
                      )
                    });
                  })
              ]
            })
          );
        };

      function Oh() {
        var e = Object(s.a)(["\n  flex: 1;\n"]);
        return (
          (Oh = function () {
            return e;
          }),
          e
        );
      }

      function gh() {
        var e = Object(s.a)([
          "\n  border-bottom: 1px solid ",
          ";\n  padding: 24px;\n"
        ]);
        return (
          (gh = function () {
            return e;
          }),
          e
        );
      }
      var Ch,
        wh = function () {
          return Object(r.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(r.jsx)("path", {
              d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z",
              fill: "currentColor"
            })
          });
        },
        kh = function () {
          return Object(r.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(r.jsx)("path", {
              d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
              fill: "currentColor"
            })
          });
        },
        Th = u.default.div(gh(), function (e) {
          return e.theme.colors.borderColor;
        }),
        Ih = u.default.div(Oh()),
        Eh = function (e) {
          var n = e.title,
            t = e.description,
            a = e.children,
            i = zn(Object(r.jsx)(mh, {})),
            o = Object(Ln.a)(i, 1)[0],
            c = zn(Object(r.jsx)(yh, {})),
            s = Object(Ln.a)(c, 1)[0];
          return Object(r.jsxs)(Th, {
            children: [
              Object(r.jsxs)(Oe, {
                alignItems: "center",
                children: [
                  Object(r.jsxs)(Ih, {
                    children: [
                      Object(r.jsx)(Se, {
                        mb: "8px",
                        children: n
                      }),
                      t &&
                        Object(r.jsx)(g, {
                          color: "textSubtle",
                          fontSize: "14px",
                          children: t
                        })
                    ]
                  }),
                  Object(r.jsx)(Q, {
                    variant: "text",
                    onClick: o,
                    title: "Settings",
                    children: Object(r.jsx)(wh, {})
                  }),
                  Object(r.jsx)(Q, {
                    variant: "text",
                    onClick: s,
                    title: "Recent transactions",
                    children: Object(r.jsx)(kh, {})
                  })
                ]
              }),
              a &&
                Object(r.jsx)(g, {
                  mt: "16px",
                  children: a
                })
            ]
          });
        };

      function Ah() {
        var e = Object(a.useContext)(u.ThemeContext),
          n = yi().account,
          t = (function () {
            var e = yi().chainId,
              n = kl(),
              t = Object(a.useMemo)(
                function () {
                  var n;
                  return e && null !== (n = Ga[e]) && void 0 !== n ? n : [];
                },
                [e]
              ),
              r = Object(a.useMemo)(
                function () {
                  return e
                    ? rl()(Object.keys(n), function (t) {
                        var r,
                          a = n[t];
                        return (null !== (r = Ka[e]) && void 0 !== r ? r : [])
                          .map(function (e) {
                            return e.address === a.address ? null : [e, a];
                          })
                          .filter(function (e) {
                            return null !== e;
                          });
                      })
                    : [];
                },
                [n, e]
              ),
              i = Object(Vo.d)(function (e) {
                return e.user.pairs;
              }),
              o = Object(a.useMemo)(
                function () {
                  if (!e || !i) return [];
                  var n = i[e];
                  return n
                    ? Object.keys(n).map(function (e) {
                        return [ml(n[e].token0), ml(n[e].token1)];
                      })
                    : [];
                },
                [i, e]
              ),
              c = Object(a.useMemo)(
                function () {
                  return o.concat(r).concat(t);
                },
                [r, t, o]
              );
            return Object(a.useMemo)(
              function () {
                var e = c.reduce(function (e, n) {
                  var t = Object(Ln.a)(n, 2),
                    r = t[0],
                    a = t[1],
                    i = r.sortsBefore(a),
                    o = i
                      ? "".concat(r.address, ":").concat(a.address)
                      : "".concat(a.address, ":").concat(r.address);
                  return e[o] || (e[o] = i ? [r, a] : [a, r]), e;
                }, {});
                return Object.keys(e).map(function (n) {
                  return e[n];
                });
              },
              [c]
            );
          })(),
          i = Object(a.useMemo)(
            function () {
              return t.map(function (e) {
                return {
                  liquidityToken: wl(e),
                  tokens: e
                };
              });
            },
            [t]
          ),
          o = Nl(
            null !== n && void 0 !== n ? n : void 0,
            Object(a.useMemo)(
              function () {
                return i.map(function (e) {
                  return e.liquidityToken;
                });
              },
              [i]
            )
          ),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          l = c[1],
          d = Object(a.useMemo)(
            function () {
              return i.filter(function (e) {
                var n,
                  t = e.liquidityToken;
                return null === (n = s[t.address]) || void 0 === n
                  ? void 0
                  : n.greaterThan("0");
              });
            },
            [i, s]
          ),
          b = uf(
            d.map(function (e) {
              return e.tokens;
            })
          ),
          p =
            l ||
            (null === b || void 0 === b ? void 0 : b.length) < d.length ||
            (null === b || void 0 === b
              ? void 0
              : b.some(function (e) {
                  return !e;
                })),
          f = b
            .map(function (e) {
              return Object(Ln.a)(e, 2)[1];
            })
            .filter(function (e) {
              return Boolean(e);
            }),
          j = (function () {
            var e = yi(),
              n = e.account,
              t = e.chainId,
              r = yf(),
              i = Rl(
                null !== n && void 0 !== n ? n : void 0,
                Object(a.useMemo)(
                  function () {
                    return t
                      ? Object.keys(r).map(function (e) {
                          return new lr(t, e, 18, "UNI-V1", "Uniswap V1");
                        })
                      : [];
                  },
                  [t, r]
                )
              );
            return Object(a.useMemo)(
              function () {
                return Object.keys(i).some(function (e) {
                  var n,
                    t = null === (n = i[e]) || void 0 === n ? void 0 : n.raw;
                  return t && mt.a.greaterThan(t, mt.a.BigInt(0));
                });
              },
              [i]
            );
          })();
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(Eu, {
              activeIndex: 1
            }),
            Object(r.jsxs)(hj, {
              children: [
                Object(r.jsx)(Eh, {
                  title: "Liquidity",
                  description: "Add liquidity to receive LP tokens",
                  children: Object(r.jsx)(W, {
                    id: "join-pool-button",
                    as: qn.b,
                    to: "/add/ETH",
                    children: Object(r.jsx)(wu, {
                      translationId: 100,
                      children: "Add Liquidity"
                    })
                  })
                }),
                Object(r.jsx)(Jo, {
                  gap: "lg",
                  justify: "center",
                  children: Object(r.jsx)(ce, {
                    children: Object(r.jsxs)(Jo, {
                      gap: "12px",
                      style: {
                        width: "100%"
                      },
                      children: [
                        Object(r.jsxs)(Hc, {
                          padding: "0 8px",
                          children: [
                            Object(r.jsx)(tc.b, {
                              color: e.colors.text,
                              fontWeight: 500,
                              children: Object(r.jsx)(wu, {
                                translationId: 102,
                                children: "Your Liquidity"
                              })
                            }),
                            Object(r.jsx)(vd, {
                              text: gu(
                                130,
                                "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below."
                              )
                            })
                          ]
                        }),
                        n
                          ? p
                            ? Object(r.jsx)(Ps, {
                                padding: "40px",
                                children: Object(r.jsx)(Ac, {
                                  color: e.colors.textDisabled,
                                  textAlign: "center",
                                  children: Object(r.jsx)(Kp, {
                                    children: "Loading"
                                  })
                                })
                              })
                            : (null === f || void 0 === f ? void 0 : f.length) >
                              0
                            ? Object(r.jsx)(r.Fragment, {
                                children: f.map(function (e) {
                                  return Object(r.jsx)(
                                    of,
                                    {
                                      pair: e
                                    },
                                    e.liquidityToken.address
                                  );
                                })
                              })
                            : Object(r.jsx)(Ps, {
                                padding: "40px",
                                children: Object(r.jsx)(Ac, {
                                  color: e.colors.textDisabled,
                                  textAlign: "center",
                                  children: Object(r.jsx)(wu, {
                                    translationId: 104,
                                    children: "No liquidity found."
                                  })
                                })
                              })
                          : Object(r.jsx)(Ps, {
                              padding: "40px",
                              children: Object(r.jsx)(Ac, {
                                color: e.colors.textDisabled,
                                textAlign: "center",
                                children:
                                  "Connect to a wallet to view your liquidity."
                              })
                            }),
                        Object(r.jsxs)("div", {
                          children: [
                            Object(r.jsxs)(tc.b, {
                              textAlign: "left",
                              fontSize: 14,
                              style: {
                                padding: ".5rem 0 .5rem 0"
                              },
                              children: [
                                j
                                  ? "Uniswap V1 liquidity found!"
                                  : gu(106, "Don't see a pool you joined?"),
                                " ",
                                Object(r.jsx)(yc, {
                                  id: "import-pool-link",
                                  to: j ? "/migrate/v1" : "/find",
                                  children: j
                                    ? "Migrate now."
                                    : gu(108, "Import it.")
                                })
                              ]
                            }),
                            Object(r.jsx)(tc.b, {
                              textAlign: "left",
                              fontSize: 14,
                              style: {
                                padding: ".5rem 0 .5rem 0"
                              },
                              children:
                                "Or, if you staked your LP tokens in a farm, unstake them to see them here."
                            })
                          ]
                        })
                      ]
                    })
                  })
                })
              ]
            })
          ]
        });
      }

      function Sh() {
        var e,
          n = yi().account,
          t = Object(a.useState)(!1),
          i = Object(Ln.a)(t, 2),
          o = i[0],
          c = i[1],
          s = Object(a.useState)(Ch.TOKEN1),
          u = Object(Ln.a)(s, 2),
          l = u[0],
          d = u[1],
          b = Object(a.useState)(ur),
          p = Object(Ln.a)(b, 2),
          f = p[0],
          j = p[1],
          h = Object(a.useState)(null),
          m = Object(Ln.a)(h, 2),
          v = m[0],
          x = m[1],
          y = lf(
            null !== f && void 0 !== f ? f : void 0,
            null !== v && void 0 !== v ? v : void 0
          ),
          O = Object(Ln.a)(y, 2),
          g = O[0],
          C = O[1],
          w = (function () {
            var e = Object(Vo.c)();
            return Object(a.useCallback)(
              function (n) {
                e(
                  dl({
                    serializedPair: Cl(n)
                  })
                );
              },
              [e]
            );
          })();
        Object(a.useEffect)(
          function () {
            C && w(C);
          },
          [C, w]
        );
        var k =
            g === cf.NOT_EXISTS ||
            Boolean(
              g === cf.EXISTS &&
                C &&
                mt.a.equal(C.reserve0.raw, mt.a.BigInt(0)) &&
                mt.a.equal(C.reserve1.raw, mt.a.BigInt(0))
            ),
          T = Ll(
            null !== n && void 0 !== n ? n : void 0,
            null === C || void 0 === C ? void 0 : C.liquidityToken
          ),
          I = Boolean(T && mt.a.greaterThan(T.raw, mt.a.BigInt(0))),
          E = Object(a.useCallback)(
            function (e) {
              l === Ch.TOKEN0 ? j(e) : x(e);
            },
            [l]
          ),
          A = Object(a.useCallback)(
            function () {
              c(!1);
            },
            [c]
          ),
          S = Object(r.jsx)(Ps, {
            padding: "45px 10px",
            children: Object(r.jsx)(tc.b, {
              textAlign: "center",
              children: n
                ? "Select a token to find your liquidity."
                : "Connect to a wallet to find pools"
            })
          });
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(Eu, {
              activeIndex: 1
            }),
            Object(r.jsxs)(hj, {
              children: [
                Object(r.jsx)(gp, {}),
                Object(r.jsxs)(ce, {
                  children: [
                    Object(r.jsxs)(Jo, {
                      gap: "md",
                      children: [
                        Object(r.jsx)(W, {
                          onClick: function () {
                            c(!0), d(Ch.TOKEN0);
                          },
                          startIcon: f
                            ? Object(r.jsx)(Td, {
                                currency: f,
                                style: {
                                  marginRight: ".5rem"
                                }
                              })
                            : null,
                          endIcon: Object(r.jsx)(He, {
                            width: "24px",
                            color: "white"
                          }),
                          fullWidth: !0,
                          children: f
                            ? f.symbol
                            : Object(r.jsx)(wu, {
                                translationId: 82,
                                children: "Select a Token"
                              })
                        }),
                        Object(r.jsx)(Go, {
                          children: Object(r.jsx)(Fe, {
                            color: "textSubtle"
                          })
                        }),
                        Object(r.jsx)(W, {
                          onClick: function () {
                            c(!0), d(Ch.TOKEN1);
                          },
                          startIcon: v
                            ? Object(r.jsx)(Td, {
                                currency: v,
                                style: {
                                  marginRight: ".5rem"
                                }
                              })
                            : null,
                          endIcon: Object(r.jsx)(He, {
                            width: "24px",
                            color: "white"
                          }),
                          fullWidth: !0,
                          children: v
                            ? v.symbol
                            : Object(r.jsx)(wu, {
                                translationId: 82,
                                children: "Select a Token"
                              })
                        }),
                        I &&
                          Object(r.jsx)(Go, {
                            style: {
                              justifyItems: "center",
                              backgroundColor: "",
                              padding: "12px 0px",
                              borderRadius: "12px"
                            },
                            children: Object(r.jsx)(tc.b, {
                              textAlign: "center",
                              fontWeight: 500,
                              children: "Pool Found!"
                            })
                          }),
                        f && v
                          ? g === cf.EXISTS
                            ? I && C
                              ? Object(r.jsx)(af, {
                                  pair: C
                                })
                              : Object(r.jsx)(Ps, {
                                  padding: "45px 10px",
                                  children: Object(r.jsxs)(Jo, {
                                    gap: "sm",
                                    justify: "center",
                                    children: [
                                      Object(r.jsx)(tc.b, {
                                        textAlign: "center",
                                        children:
                                          "You don\u2019t have liquidity in this pool yet."
                                      }),
                                      Object(r.jsx)(yc, {
                                        to: "/add/"
                                          .concat(Ip(f), "/")
                                          .concat(Ip(v)),
                                        children: Object(r.jsx)(tc.b, {
                                          textAlign: "center",
                                          children: Object(r.jsx)(wu, {
                                            translationId: 100,
                                            children: "Add Liquidity"
                                          })
                                        })
                                      })
                                    ]
                                  })
                                })
                            : k
                            ? Object(r.jsx)(Ps, {
                                padding: "45px 10px",
                                children: Object(r.jsxs)(Jo, {
                                  gap: "sm",
                                  justify: "center",
                                  children: [
                                    Object(r.jsx)(tc.b, {
                                      textAlign: "center",
                                      children: "No pool found."
                                    }),
                                    Object(r.jsx)(yc, {
                                      to: "/add/"
                                        .concat(Ip(f), "/")
                                        .concat(Ip(v)),
                                      children: "Create pool."
                                    })
                                  ]
                                })
                              })
                            : g === cf.INVALID
                            ? Object(r.jsx)(Ps, {
                                padding: "45px 10px",
                                children: Object(r.jsx)(Jo, {
                                  gap: "sm",
                                  justify: "center",
                                  children: Object(r.jsx)(tc.b, {
                                    textAlign: "center",
                                    fontWeight: 500,
                                    children: Object(r.jsx)(wu, {
                                      translationId: 136,
                                      children: "Invalid pair."
                                    })
                                  })
                                })
                              })
                            : g === cf.LOADING
                            ? Object(r.jsx)(Ps, {
                                padding: "45px 10px",
                                children: Object(r.jsx)(Jo, {
                                  gap: "sm",
                                  justify: "center",
                                  children: Object(r.jsxs)(tc.b, {
                                    textAlign: "center",
                                    children: ["Loading", Object(r.jsx)(Cj, {})]
                                  })
                                })
                              })
                            : null
                          : S
                      ]
                    }),
                    Object(r.jsx)(qb, {
                      isOpen: o,
                      onCurrencySelect: E,
                      onDismiss: A,
                      showCommonBases: !0,
                      selectedCurrency:
                        null !== (e = l === Ch.TOKEN0 ? v : f) && void 0 !== e
                          ? e
                          : void 0
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
      !(function (e) {
        (e[(e.TOKEN0 = 0)] = "TOKEN0"), (e[(e.TOKEN1 = 1)] = "TOKEN1");
      })(Ch || (Ch = {}));
      var Nh = t(2),
        Rh = t(500),
        Lh = t(501);

      function Uh() {
        var e = Object(s.a)([
          "\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
          "px;\n    width: ",
          "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
          ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
          "px;\n    width: ",
          "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
          ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
          "px;\n    width: ",
          "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
          ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ",
          ",\n      ",
          "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ",
          ",\n      ",
          "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
          ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
          ";\n  }\n  &::-ms-fill-upper {\n    background: ",
          ";\n  }\n"
        ]);
        return (
          (Uh = function () {
            return e;
          }),
          e
        );
      }
      var Bh,
        Ph = u.default.input(
          Uh(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.primaryDark;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.primaryDark;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.primaryDark;
          },
          function (e) {
            return e.theme.colors.primaryDark;
          },
          function (e) {
            return e.theme.colors.tertiary;
          }
        );

      function Mh(e) {
        var n = e.value,
          t = e.onChange,
          i = e.min,
          o = void 0 === i ? 0 : i,
          c = e.step,
          s = void 0 === c ? 1 : c,
          u = e.max,
          l = void 0 === u ? 100 : u,
          d = e.size,
          b = void 0 === d ? 28 : d,
          p = Object(a.useCallback)(
            function (e) {
              t(parseInt(e.target.value));
            },
            [t]
          );
        return Object(r.jsx)(Ph, {
          size: b,
          type: "range",
          value: n,
          style: {
            width: "90%",
            marginLeft: 15,
            marginRight: 15,
            padding: "15px 0"
          },
          onChange: p,
          "aria-labelledby": "input slider",
          step: s,
          min: o,
          max: l
        });
      }
      !(function (e) {
        (e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"),
          (e.LIQUIDITY = "LIQUIDITY"),
          (e.CURRENCY_A = "CURRENCY_A"),
          (e.CURRENCY_B = "CURRENCY_B");
      })(Bh || (Bh = {}));
      var _h = Object(Mo.b)("burn/typeInputBurn");

      function Dh() {
        return Object(Vo.d)(function (e) {
          return e.burn;
        });
      }

      function Fh() {
        var e = Object(s.a)([
          "\n  padding-left: 24px;\n  padding-right: 24px;\n"
        ]);
        return (
          (Fh = function () {
            return e;
          }),
          e
        );
      }

      function zh() {
        var e = Object(s.a)([
          "\n  border: 1px solid ",
          ";\n  border-radius: 16px;\n  padding: 24px;\n"
        ]);
        return (
          (zh = function () {
            return e;
          }),
          e
        );
      }
      var qh = u.default.div(zh(), function (e) {
          return e.theme.colors.borderColor;
        }),
        Vh = u.default.div(Fh());

      function Hh(e) {
        var n,
          t,
          i,
          o,
          c,
          s,
          l,
          d,
          b,
          p,
          f,
          j,
          h,
          m,
          v = e.history,
          x = e.match.params,
          y = x.currencyIdA,
          O = x.currencyIdB,
          C = null !== (n = Al(y)) && void 0 !== n ? n : void 0,
          w = null !== (t = Al(O)) && void 0 !== t ? t : void 0,
          k = yi(),
          T = k.account,
          I = k.chainId,
          E = k.library,
          A = Object(a.useMemo)(
            function () {
              return [Ep(C, I), Ep(w, I)];
            },
            [C, w, I]
          ),
          S = Object(Ln.a)(A, 2),
          N = S[0],
          R = S[1],
          L = Object(a.useContext)(u.ThemeContext),
          U = Dh(),
          B = U.independentField,
          P = U.typedValue,
          M = (function (e, n) {
            var t,
              r,
              a,
              i,
              o,
              c = yi(),
              s = c.account,
              u = c.chainId,
              l = Dh(),
              d = l.independentField,
              b = l.typedValue,
              p = lf(e, n),
              f = Object(Ln.a)(p, 2)[1],
              j = Rl(null !== s && void 0 !== s ? s : void 0, [
                null === f || void 0 === f ? void 0 : f.liquidityToken
              ]),
              h =
                null === j || void 0 === j
                  ? void 0
                  : j[
                      null !==
                        (t =
                          null === f ||
                          void 0 === f ||
                          null === (r = f.liquidityToken) ||
                          void 0 === r
                            ? void 0
                            : r.address) && void 0 !== t
                        ? t
                        : ""
                    ],
              m = [Ep(e, u), Ep(n, u)],
              v = m[0],
              x = m[1],
              y =
                ((a = {}),
                Object(ge.a)(a, Bh.CURRENCY_A, v),
                Object(ge.a)(a, Bh.CURRENCY_B, x),
                Object(ge.a)(
                  a,
                  Bh.LIQUIDITY,
                  null === f || void 0 === f ? void 0 : f.liquidityToken
                ),
                a),
              O = Tp(null === f || void 0 === f ? void 0 : f.liquidityToken),
              g =
                f && O && h && v && mt.a.greaterThanOrEqual(O.raw, h.raw)
                  ? new gr(v, f.getLiquidityValue(v, O, h, !1).raw)
                  : void 0,
              C =
                f && O && h && x && mt.a.greaterThanOrEqual(O.raw, h.raw)
                  ? new gr(x, f.getLiquidityValue(x, O, h, !1).raw)
                  : void 0,
              w =
                ((i = {}),
                Object(ge.a)(i, Bh.CURRENCY_A, g),
                Object(ge.a)(i, Bh.CURRENCY_B, C),
                i),
              k = new Er("0", "100");
            if (d === Bh.LIQUIDITY_PERCENT) k = new Er(b, "100");
            else if (d === Bh.LIQUIDITY) {
              if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
                var T = rj(b, f.liquidityToken);
                T && h && !T.greaterThan(h) && (k = new Er(T.raw, h.raw));
              }
            } else if (y[d]) {
              var I = rj(b, y[d]),
                E = w[d];
              I && E && !I.greaterThan(E) && (k = new Er(I.raw, E.raw));
            }
            var A,
              S,
              N =
                ((o = {}),
                Object(ge.a)(o, Bh.LIQUIDITY_PERCENT, k),
                Object(ge.a)(
                  o,
                  Bh.LIQUIDITY,
                  h && k && k.greaterThan("0")
                    ? new gr(h.token, k.multiply(h.raw).quotient)
                    : void 0
                ),
                Object(ge.a)(
                  o,
                  Bh.CURRENCY_A,
                  v && k && k.greaterThan("0") && g
                    ? new gr(v, k.multiply(g.raw).quotient)
                    : void 0
                ),
                Object(ge.a)(
                  o,
                  Bh.CURRENCY_B,
                  x && k && k.greaterThan("0") && C
                    ? new gr(x, k.multiply(C.raw).quotient)
                    : void 0
                ),
                o);
            return (
              s || (A = "Connect Wallet"),
              (N[Bh.LIQUIDITY] && N[Bh.CURRENCY_A] && N[Bh.CURRENCY_B]) ||
                (A = null !== (S = A) && void 0 !== S ? S : "Enter an amount"),
              {
                pair: f,
                parsedAmounts: N,
                error: A
              }
            );
          })(
            null !== C && void 0 !== C ? C : void 0,
            null !== w && void 0 !== w ? w : void 0
          ),
          _ = M.pair,
          D = M.parsedAmounts,
          F = M.error,
          z = (function () {
            var e = Object(Vo.c)();
            return {
              onUserInput: Object(a.useCallback)(
                function (n, t) {
                  e(
                    _h({
                      field: n,
                      typedValue: t
                    })
                  );
                },
                [e]
              )
            };
          })().onUserInput,
          q = !F,
          V = Object(a.useState)(!1),
          H = Object(Ln.a)(V, 2),
          Y = H[0],
          Z = H[1],
          Q = Object(a.useState)(!1),
          K = Object(Ln.a)(Q, 2),
          G = K[0],
          J = K[1],
          X = Object(a.useState)(!1),
          $ = Object(Ln.a)(X, 2),
          ee = $[0],
          ne = $[1],
          te = Object(a.useState)(""),
          re = Object(Ln.a)(te, 2),
          ae = re[0],
          ie = re[1],
          oe = yl(),
          ce = Object(Ln.a)(oe, 1)[0],
          se = xl(),
          ue = Object(Ln.a)(se, 1)[0],
          le =
            ((b = {}),
            Object(ge.a)(
              b,
              Bh.LIQUIDITY_PERCENT,
              D[Bh.LIQUIDITY_PERCENT].equalTo("0")
                ? "0"
                : D[Bh.LIQUIDITY_PERCENT].lessThan(new Er("1", "100"))
                ? "<1"
                : D[Bh.LIQUIDITY_PERCENT].toFixed(0)
            ),
            Object(ge.a)(
              b,
              Bh.LIQUIDITY,
              B === Bh.LIQUIDITY
                ? P
                : null !==
                    (i =
                      null === (o = D[Bh.LIQUIDITY]) || void 0 === o
                        ? void 0
                        : o.toSignificant(6)) && void 0 !== i
                ? i
                : ""
            ),
            Object(ge.a)(
              b,
              Bh.CURRENCY_A,
              B === Bh.CURRENCY_A
                ? P
                : null !==
                    (c =
                      null === (s = D[Bh.CURRENCY_A]) || void 0 === s
                        ? void 0
                        : s.toSignificant(6)) && void 0 !== c
                ? c
                : ""
            ),
            Object(ge.a)(
              b,
              Bh.CURRENCY_B,
              B === Bh.CURRENCY_B
                ? P
                : null !==
                    (l =
                      null === (d = D[Bh.CURRENCY_B]) || void 0 === d
                        ? void 0
                        : d.toSignificant(6)) && void 0 !== l
                ? l
                : ""
            ),
            b),
          de =
            null === (p = D[Bh.LIQUIDITY_PERCENT]) || void 0 === p
              ? void 0
              : p.equalTo(new Er("1")),
          be = Oi(
            null === _ ||
              void 0 === _ ||
              null === (f = _.liquidityToken) ||
              void 0 === f
              ? void 0
              : f.address,
            Et.abi,
            m
          ),
          pe = Object(a.useState)(null),
          fe = Object(Ln.a)(pe, 2),
          je = fe[0],
          he = fe[1],
          me = Kf(D[Bh.LIQUIDITY], _a),
          ve = Object(Ln.a)(me, 2),
          xe = ve[0],
          ye = ve[1];

        function Ce() {
          return (Ce = Object(pt.a)(
            bt.a.mark(function e() {
              var n, t, r, a, i, o, c, s;
              return bt.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (be && _ && E) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if ((n = D[Bh.LIQUIDITY])) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 5:
                      return (e.next = 7), be.nonces(T);
                    case 7:
                      (t = e.sent),
                        (r = Math.ceil(Date.now() / 1e3) + ce),
                        (a = [
                          {
                            name: "name",
                            type: "string"
                          },
                          {
                            name: "version",
                            type: "string"
                          },
                          {
                            name: "chainId",
                            type: "uint256"
                          },
                          {
                            name: "verifyingContract",
                            type: "address"
                          }
                        ]),
                        (i = {
                          name: "BaseDex",
                          version: "1",
                          chainId: I,
                          verifyingContract: _.liquidityToken.address
                        }),
                        (o = [
                          {
                            name: "owner",
                            type: "address"
                          },
                          {
                            name: "spender",
                            type: "address"
                          },
                          {
                            name: "value",
                            type: "uint256"
                          },
                          {
                            name: "nonce",
                            type: "uint256"
                          },
                          {
                            name: "deadline",
                            type: "uint256"
                          }
                        ]),
                        (c = {
                          owner: T,
                          spender: _a,
                          value: n.raw.toString(),
                          nonce: t.toHexString(),
                          deadline: r
                        }),
                        (s = JSON.stringify({
                          types: {
                            EIP712Domain: a,
                            Permit: o
                          },
                          domain: i,
                          primaryType: "Permit",
                          message: c
                        })),
                        E.send("eth_signTypedData_v4", [T, s])
                          .then(Nh.splitSignature)
                          .then(function (e) {
                            he({
                              v: e.v,
                              r: e.r,
                              s: e.s,
                              deadline: r
                            });
                          })
                          .catch(function (e) {
                            4001 !==
                              (null === e || void 0 === e ? void 0 : e.code) &&
                              ye();
                          });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var we = Object(a.useCallback)(
            function (e, n) {
              return he(null), z(e, n);
            },
            [z]
          ),
          ke = Object(a.useCallback)(
            function (e) {
              return we(Bh.LIQUIDITY, e);
            },
            [we]
          ),
          Te = Object(a.useCallback)(
            function (e) {
              return we(Bh.CURRENCY_A, e);
            },
            [we]
          ),
          Ie = Object(a.useCallback)(
            function (e) {
              return we(Bh.CURRENCY_B, e);
            },
            [we]
          ),
          Ee = Pf();

        function Ae() {
          return Se.apply(this, arguments);
        }

        function Se() {
          return (Se = Object(pt.a)(
            bt.a.mark(function e() {
              var n, t, r, a, i, o, c, s, u, l, d, b, p, f, j;
              return bt.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (I && E && T) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if (
                        ((t = D[Bh.CURRENCY_A]), (r = D[Bh.CURRENCY_B]), t && r)
                      ) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing currency amounts");
                    case 5:
                      if (
                        ((a = hi(0, E, T)),
                        (n = {}),
                        Object(ge.a)(n, Bh.CURRENCY_A, fi(t, ue)[0]),
                        Object(ge.a)(n, Bh.CURRENCY_B, fi(r, ue)[0]),
                        (i = n),
                        C && w)
                      ) {
                        e.next = 9;
                        break;
                      }
                      throw new Error("missing tokens");
                    case 9:
                      if ((o = D[Bh.LIQUIDITY])) {
                        e.next = 12;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 12:
                      if (
                        ((c = w === ur),
                        (s = C === ur || c),
                        (u = Math.ceil(Date.now() / 1e3) + ce),
                        N && R)
                      ) {
                        e.next = 17;
                        break;
                      }
                      throw new Error("could not wrap");
                    case 17:
                      if (xe !== Ff.APPROVED) {
                        e.next = 21;
                        break;
                      }
                      s
                        ? ((l = [
                            "removeLiquidityETH",
                            "removeLiquidityETHSupportingFeeOnTransferTokens"
                          ]),
                          (d = [
                            c ? N.address : R.address,
                            o.raw.toString(),
                            i[c ? Bh.CURRENCY_A : Bh.CURRENCY_B].toString(),
                            i[c ? Bh.CURRENCY_B : Bh.CURRENCY_A].toString(),
                            T,
                            u
                          ]))
                        : ((l = ["removeLiquidity"]),
                          (d = [
                            N.address,
                            R.address,
                            o.raw.toString(),
                            i[Bh.CURRENCY_A].toString(),
                            i[Bh.CURRENCY_B].toString(),
                            T,
                            u
                          ])),
                        (e.next = 26);
                      break;
                    case 21:
                      if (null === je) {
                        e.next = 25;
                        break;
                      }
                      s
                        ? ((l = [
                            "removeLiquidityETHWithPermit",
                            "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"
                          ]),
                          (d = [
                            c ? N.address : R.address,
                            o.raw.toString(),
                            i[c ? Bh.CURRENCY_A : Bh.CURRENCY_B].toString(),
                            i[c ? Bh.CURRENCY_B : Bh.CURRENCY_A].toString(),
                            T,
                            je.deadline,
                            !1,
                            je.v,
                            je.r,
                            je.s
                          ]))
                        : ((l = ["removeLiquidityWithPermit"]),
                          (d = [
                            N.address,
                            R.address,
                            o.raw.toString(),
                            i[Bh.CURRENCY_A].toString(),
                            i[Bh.CURRENCY_B].toString(),
                            T,
                            je.deadline,
                            !1,
                            je.v,
                            je.r,
                            je.s
                          ])),
                        (e.next = 26);
                      break;
                    case 25:
                      throw new Error(
                        "Attempting to confirm without approval or a signature. Please contact support."
                      );
                    case 26:
                      return (
                        (e.next = 28),
                        Promise.all(
                          l.map(function (e, n) {
                            var t;
                            return (t = a.estimateGas)[e]
                              .apply(t, Object(aa.a)(d))
                              .then(pi)
                              .catch(function (t) {
                                console.error("estimateGas failed", n, e, d, t);
                              });
                          })
                        )
                      );
                    case 28:
                      if (
                        ((b = e.sent),
                        -1 !==
                          (p = b.findIndex(function (e) {
                            return ta.a.isBigNumber(e);
                          })))
                      ) {
                        e.next = 34;
                        break;
                      }
                      console.error(
                        "This transaction would fail. Please contact support."
                      ),
                        (e.next = 39);
                      break;
                    case 34:
                      return (
                        (f = l[p]),
                        (j = b[p]),
                        ne(!0),
                        (e.next = 39),
                        a[f]
                          .apply(
                            a,
                            Object(aa.a)(d).concat([
                              {
                                gasLimit: j
                              }
                            ])
                          )
                          .then(function (e) {
                            var n, t;
                            ne(!1),
                              Ee(e, {
                                summary:
                                  "Remove " +
                                  (null === (n = D[Bh.CURRENCY_A]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.toSignificant(3)) +
                                  " " +
                                  (null === C || void 0 === C
                                    ? void 0
                                    : C.symbol) +
                                  " and " +
                                  (null === (t = D[Bh.CURRENCY_B]) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toSignificant(3)) +
                                  " " +
                                  (null === w || void 0 === w
                                    ? void 0
                                    : w.symbol)
                              }),
                              ie(e.hash);
                          })
                          .catch(function (e) {
                            ne(!1), console.error(e);
                          })
                      );
                    case 39:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function Ne() {
          var e, n;
          return Object(r.jsxs)(Jo, {
            gap: "md",
            style: {
              marginTop: "20px"
            },
            children: [
              Object(r.jsxs)(Hc, {
                align: "flex-end",
                children: [
                  Object(r.jsx)(g, {
                    fontSize: "24px",
                    children:
                      null === (e = D[Bh.CURRENCY_A]) || void 0 === e
                        ? void 0
                        : e.toSignificant(6)
                  }),
                  Object(r.jsxs)(Zc, {
                    gap: "4px",
                    children: [
                      Object(r.jsx)(Td, {
                        currency: C,
                        size: "24px"
                      }),
                      Object(r.jsx)(g, {
                        fontSize: "24px",
                        style: {
                          marginLeft: "10px"
                        },
                        children: null === C || void 0 === C ? void 0 : C.symbol
                      })
                    ]
                  })
                ]
              }),
              Object(r.jsx)(Zc, {
                children: Object(r.jsx)(Rh.a, {
                  size: "16",
                  color: L.colors.textSubtle
                })
              }),
              Object(r.jsxs)(Hc, {
                align: "flex-end",
                children: [
                  Object(r.jsx)(g, {
                    fontSize: "24px",
                    children:
                      null === (n = D[Bh.CURRENCY_B]) || void 0 === n
                        ? void 0
                        : n.toSignificant(6)
                  }),
                  Object(r.jsxs)(Zc, {
                    gap: "4px",
                    children: [
                      Object(r.jsx)(Td, {
                        currency: w,
                        size: "24px"
                      }),
                      Object(r.jsx)(g, {
                        fontSize: "24px",
                        style: {
                          marginLeft: "10px"
                        },
                        children: null === w || void 0 === w ? void 0 : w.symbol
                      })
                    ]
                  })
                ]
              }),
              Object(r.jsx)(Uc, {
                fontSize: 12,
                color: L.colors.textSubtle,
                textAlign: "left",
                padding: "12px 0 0 0",
                children:
                  "Output is estimated. If the price changes by more than ".concat(
                    ue / 100,
                    "% your transaction will revert."
                  )
              })
            ]
          });
        }

        function Re() {
          var e;
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsxs)(Hc, {
                children: [
                  Object(r.jsxs)(g, {
                    color: "textSubtle",
                    children: [
                      "LP " +
                        (null === C || void 0 === C ? void 0 : C.symbol) +
                        "/" +
                        (null === w || void 0 === w ? void 0 : w.symbol),
                      " Burned"
                    ]
                  }),
                  Object(r.jsxs)(Zc, {
                    children: [
                      Object(r.jsx)(Kb, {
                        currency0: C,
                        currency1: w,
                        margin: !0
                      }),
                      Object(r.jsx)(g, {
                        children:
                          null === (e = D[Bh.LIQUIDITY]) || void 0 === e
                            ? void 0
                            : e.toSignificant(6)
                      })
                    ]
                  })
                ]
              }),
              _ &&
                Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsxs)(Hc, {
                      children: [
                        Object(r.jsx)(g, {
                          color: "textSubtle",
                          children: "Price"
                        }),
                        Object(r.jsxs)(g, {
                          children: [
                            "1 ",
                            null === C || void 0 === C ? void 0 : C.symbol,
                            " = ",
                            N ? _.priceOf(N).toSignificant(6) : "-",
                            " ",
                            null === w || void 0 === w ? void 0 : w.symbol
                          ]
                        })
                      ]
                    }),
                    Object(r.jsxs)(Hc, {
                      children: [
                        Object(r.jsx)("div", {}),
                        Object(r.jsxs)(g, {
                          children: [
                            "1 ",
                            null === w || void 0 === w ? void 0 : w.symbol,
                            " = ",
                            R ? _.priceOf(R).toSignificant(6) : "-",
                            " ",
                            null === C || void 0 === C ? void 0 : C.symbol
                          ]
                        })
                      ]
                    })
                  ]
                }),
              Object(r.jsx)(W, {
                disabled: !(xe === Ff.APPROVED || null !== je),
                onClick: Ae,
                children: "Confirm"
              })
            ]
          });
        }
        var Le = "Removing "
            .concat(
              null === (j = D[Bh.CURRENCY_A]) || void 0 === j
                ? void 0
                : j.toSignificant(6),
              " "
            )
            .concat(null === C || void 0 === C ? void 0 : C.symbol, " and ")
            .concat(
              null === (h = D[Bh.CURRENCY_B]) || void 0 === h
                ? void 0
                : h.toSignificant(6),
              " "
            )
            .concat(null === w || void 0 === w ? void 0 : w.symbol),
          Ue = Object(a.useCallback)(
            function (e) {
              we(Bh.LIQUIDITY_PERCENT, e.toString());
            },
            [we]
          ),
          Be = C === ur || w === ur,
          Pe = Boolean(I && ((C && dr(fr[I], C)) || (w && dr(fr[I], w)))),
          Me = Object(a.useCallback)(
            function (e) {
              O && Ip(e) === O
                ? v.push("/remove/".concat(Ip(e), "/").concat(y))
                : v.push("/remove/".concat(Ip(e), "/").concat(O));
            },
            [y, O, v]
          ),
          _e = Object(a.useCallback)(
            function (e) {
              y && Ip(e) === y
                ? v.push("/remove/".concat(O, "/").concat(Ip(e)))
                : v.push("/remove/".concat(y, "/").concat(Ip(e)));
            },
            [y, O, v]
          ),
          De = Object(a.useCallback)(
            function () {
              Z(!1), he(null), ae && we(Bh.LIQUIDITY_PERCENT, "0"), ie("");
            },
            [we, ae]
          ),
          Fe = (function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 100,
              r = Object(a.useState)(function () {
                return e;
              }),
              i = Object(Ln.a)(r, 2),
              o = i[0],
              c = i[1],
              s = Object(a.useRef)(),
              u = Object(a.useCallback)(
                function (e) {
                  c(e),
                    s.current && clearTimeout(s.current),
                    (s.current = setTimeout(function () {
                      n(e), (s.current = void 0);
                    }, t));
                },
                [t, n]
              );
            return (
              Object(a.useEffect)(
                function () {
                  s.current && (clearTimeout(s.current), (s.current = void 0)),
                    c(e);
                },
                [e]
              ),
              [o, u]
            );
          })(Number.parseInt(D[Bh.LIQUIDITY_PERCENT].toFixed(0)), Ue),
          ze = Object(Ln.a)(Fe, 2),
          qe = ze[0],
          Ve = ze[1];
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)(hj, {
              children: [
                Object(r.jsx)(Cp, {
                  adding: !1
                }),
                Object(r.jsxs)(Oj, {
                  children: [
                    Object(r.jsx)(mu, {
                      isOpen: Y,
                      onDismiss: De,
                      attemptingTxn: ee,
                      hash: ae || "",
                      content: function () {
                        return Object(r.jsx)(fu, {
                          title: "You will receive",
                          onDismiss: De,
                          topContent: Ne,
                          bottomContent: Re
                        });
                      },
                      pendingText: Le
                    }),
                    Object(r.jsxs)(Jo, {
                      gap: "md",
                      children: [
                        Object(r.jsx)(Vh, {
                          children: Object(r.jsx)(qh, {
                            children: Object(r.jsxs)(Jo, {
                              children: [
                                Object(r.jsxs)(Hc, {
                                  children: [
                                    Object(r.jsx)(g, {
                                      children: "Amount"
                                    }),
                                    Object(r.jsx)(gj, {
                                      onClick: function () {
                                        J(!G);
                                      },
                                      children: G ? "Simple" : "Detailed"
                                    })
                                  ]
                                }),
                                Object(r.jsx)(Oe, {
                                  justifyContent: "start",
                                  children: Object(r.jsxs)(g, {
                                    fontSize: "64px",
                                    children: [le[Bh.LIQUIDITY_PERCENT], "%"]
                                  })
                                }),
                                !G &&
                                  Object(r.jsxs)(r.Fragment, {
                                    children: [
                                      Object(r.jsx)(Oe, {
                                        mb: "8px",
                                        children: Object(r.jsx)(Mh, {
                                          value: qe,
                                          onChange: Ve
                                        })
                                      }),
                                      Object(r.jsxs)(Oe, {
                                        justifyContent: "space-around",
                                        children: [
                                          Object(r.jsx)(W, {
                                            variant: "tertiary",
                                            size: "sm",
                                            onClick: function () {
                                              return we(
                                                Bh.LIQUIDITY_PERCENT,
                                                "25"
                                              );
                                            },
                                            children: "25%"
                                          }),
                                          Object(r.jsx)(W, {
                                            variant: "tertiary",
                                            size: "sm",
                                            onClick: function () {
                                              return we(
                                                Bh.LIQUIDITY_PERCENT,
                                                "50"
                                              );
                                            },
                                            children: "50%"
                                          }),
                                          Object(r.jsx)(W, {
                                            variant: "tertiary",
                                            size: "sm",
                                            onClick: function () {
                                              return we(
                                                Bh.LIQUIDITY_PERCENT,
                                                "75"
                                              );
                                            },
                                            children: "75%"
                                          }),
                                          Object(r.jsx)(W, {
                                            variant: "tertiary",
                                            size: "sm",
                                            onClick: function () {
                                              return we(
                                                Bh.LIQUIDITY_PERCENT,
                                                "100"
                                              );
                                            },
                                            children: "Max"
                                          })
                                        ]
                                      })
                                    ]
                                  })
                              ]
                            })
                          })
                        }),
                        !G &&
                          Object(r.jsxs)(r.Fragment, {
                            children: [
                              Object(r.jsx)(Go, {
                                children: Object(r.jsx)(Lh.a, {
                                  size: "16",
                                  color: L.colors.textSubtle
                                })
                              }),
                              Object(r.jsx)(Vh, {
                                children: Object(r.jsx)(qh, {
                                  children: Object(r.jsxs)(Jo, {
                                    gap: "10px",
                                    children: [
                                      Object(r.jsxs)(Hc, {
                                        children: [
                                          Object(r.jsx)(g, {
                                            fontSize: "24px",
                                            children: le[Bh.CURRENCY_A] || "-"
                                          }),
                                          Object(r.jsxs)(Zc, {
                                            children: [
                                              Object(r.jsx)(Td, {
                                                currency: C,
                                                style: {
                                                  marginRight: "12px"
                                                }
                                              }),
                                              Object(r.jsx)(g, {
                                                fontSize: "24px",
                                                id: "remove-liquidity-tokena-symbol",
                                                children:
                                                  null === C || void 0 === C
                                                    ? void 0
                                                    : C.symbol
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      Object(r.jsxs)(Hc, {
                                        children: [
                                          Object(r.jsx)(g, {
                                            fontSize: "24px",
                                            children: le[Bh.CURRENCY_B] || "-"
                                          }),
                                          Object(r.jsxs)(Zc, {
                                            children: [
                                              Object(r.jsx)(Td, {
                                                currency: w,
                                                style: {
                                                  marginRight: "12px"
                                                }
                                              }),
                                              Object(r.jsx)(g, {
                                                fontSize: "24px",
                                                id: "remove-liquidity-tokenb-symbol",
                                                children:
                                                  null === w || void 0 === w
                                                    ? void 0
                                                    : w.symbol
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      I && (Pe || Be)
                                        ? Object(r.jsx)(Hc, {
                                            style: {
                                              justifyContent: "flex-end"
                                            },
                                            children: Be
                                              ? Object(r.jsx)(yc, {
                                                  to: "/remove/"
                                                    .concat(
                                                      C === ur
                                                        ? fr[I].address
                                                        : y,
                                                      "/"
                                                    )
                                                    .concat(
                                                      w === ur
                                                        ? fr[I].address
                                                        : O
                                                    ),
                                                  children: "Receive WBNB"
                                                })
                                              : Pe
                                              ? Object(r.jsx)(yc, {
                                                  to: "/remove/"
                                                    .concat(
                                                      C && dr(C, fr[I])
                                                        ? "ETH"
                                                        : y,
                                                      "/"
                                                    )
                                                    .concat(
                                                      w && dr(w, fr[I])
                                                        ? "ETH"
                                                        : O
                                                    ),
                                                  children: "Receive BNB"
                                                })
                                              : null
                                          })
                                        : null
                                    ]
                                  })
                                })
                              })
                            ]
                          }),
                        Object(r.jsxs)(Vh, {
                          style: {
                            paddingBottom: "24px"
                          },
                          children: [
                            G &&
                              Object(r.jsxs)(r.Fragment, {
                                children: [
                                  Object(r.jsx)(bp, {
                                    value: le[Bh.LIQUIDITY],
                                    onUserInput: ke,
                                    onMax: function () {
                                      we(Bh.LIQUIDITY_PERCENT, "100");
                                    },
                                    showMaxButton: !de,
                                    disableCurrencySelect: !0,
                                    currency:
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.liquidityToken,
                                    pair: _,
                                    id: "liquidity-amount"
                                  }),
                                  Object(r.jsx)(Go, {
                                    children: Object(r.jsx)(Lh.a, {
                                      size: "16",
                                      color: L.colors.textSubtle
                                    })
                                  }),
                                  Object(r.jsx)(bp, {
                                    hideBalance: !0,
                                    value: le[Bh.CURRENCY_A],
                                    onUserInput: Te,
                                    onMax: function () {
                                      return we(Bh.LIQUIDITY_PERCENT, "100");
                                    },
                                    showMaxButton: !de,
                                    currency: C,
                                    label: "Output",
                                    onCurrencySelect: Me,
                                    id: "remove-liquidity-tokena"
                                  }),
                                  Object(r.jsx)(Go, {
                                    children: Object(r.jsx)(Rh.a, {
                                      size: "16",
                                      color: L.colors.textSubtle
                                    })
                                  }),
                                  Object(r.jsx)(bp, {
                                    hideBalance: !0,
                                    value: le[Bh.CURRENCY_B],
                                    onUserInput: Ie,
                                    onMax: function () {
                                      return we(Bh.LIQUIDITY_PERCENT, "100");
                                    },
                                    showMaxButton: !de,
                                    currency: w,
                                    label: "Output",
                                    onCurrencySelect: _e,
                                    id: "remove-liquidity-tokenb"
                                  })
                                ]
                              }),
                            _ &&
                              Object(r.jsxs)("div", {
                                style: {
                                  padding: "24px"
                                },
                                children: [
                                  Object(r.jsxs)(Oe, {
                                    justifyContent: "space-between",
                                    mb: "8px",
                                    children: [
                                      "Price:",
                                      Object(r.jsxs)("div", {
                                        children: [
                                          "1 ",
                                          null === C || void 0 === C
                                            ? void 0
                                            : C.symbol,
                                          " = ",
                                          N
                                            ? _.priceOf(N).toSignificant(6)
                                            : "-",
                                          " ",
                                          null === w || void 0 === w
                                            ? void 0
                                            : w.symbol
                                        ]
                                      })
                                    ]
                                  }),
                                  Object(r.jsxs)(Oe, {
                                    justifyContent: "space-between",
                                    children: [
                                      Object(r.jsx)("div", {}),
                                      Object(r.jsxs)("div", {
                                        children: [
                                          "1 ",
                                          null === w || void 0 === w
                                            ? void 0
                                            : w.symbol,
                                          " = ",
                                          R
                                            ? _.priceOf(R).toSignificant(6)
                                            : "-",
                                          " ",
                                          null === C || void 0 === C
                                            ? void 0
                                            : C.symbol
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              }),
                            Object(r.jsx)("div", {
                              style: {
                                position: "relative"
                              },
                              children: T
                                ? Object(r.jsxs)(Hc, {
                                    children: [
                                      Object(r.jsx)(W, {
                                        onClick: function () {
                                          return Ce.apply(this, arguments);
                                        },
                                        variant:
                                          xe === Ff.APPROVED || null !== je
                                            ? "success"
                                            : "primary",
                                        disabled:
                                          xe !== Ff.NOT_APPROVED || null !== je,
                                        mr: "8px",
                                        children:
                                          xe === Ff.PENDING
                                            ? Object(r.jsx)(Kp, {
                                                children: "Approving"
                                              })
                                            : xe === Ff.APPROVED || null !== je
                                            ? "Approved"
                                            : "Approve"
                                      }),
                                      Object(r.jsx)(W, {
                                        onClick: function () {
                                          Z(!0);
                                        },
                                        disabled:
                                          !q ||
                                          (null === je && xe !== Ff.APPROVED),
                                        variant:
                                          !q &&
                                          D[Bh.CURRENCY_A] &&
                                          D[Bh.CURRENCY_B]
                                            ? "danger"
                                            : "primary",
                                        children: F || "Remove"
                                      })
                                    ]
                                  })
                                : Object(r.jsx)(Ej, {
                                    fullWidth: !0
                                  })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            _
              ? Object(r.jsx)(Jo, {
                  style: {
                    minWidth: "20rem",
                    marginTop: "1rem"
                  },
                  children: Object(r.jsx)(af, {
                    showUnwrapped: Pe,
                    pair: _
                  })
                })
              : null
          ]
        });
      }
      var Yh = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function Wh(e) {
        var n = e.match.params.tokens;
        if (!Yh.test(n))
          return Object(r.jsx)(Bo.a, {
            to: "/pool"
          });
        var t = n.split("-"),
          a = Object(Ln.a)(t, 2),
          i = a[0],
          o = a[1];
        return Object(r.jsx)(Bo.a, {
          to: "/remove/".concat(i, "/").concat(o)
        });
      }

      function Zh() {
        var e = Object(s.a)([
          "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
          ";\n  transition: color 300ms ",
          ";\n  color: ",
          ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
          ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
          ";\n  }\n"
        ]);
        return (
          (Zh = function () {
            return e;
          }),
          e
        );
      }

      function Qh() {
        var e = Object(s.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
        return (
          (Qh = function () {
            return e;
          }),
          e
        );
      }

      function Kh() {
        var e = Object(s.a)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
          ";\n  transition: border-color 300ms ",
          ",\n    color 500ms ",
          ";\n  background-color: ",
          ";\n"
        ]);
        return (
          (Kh = function () {
            return e;
          }),
          e
        );
      }

      function Gh() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",
          ";\n  z-index: 1;\n  width: 100%;\n"
        ]);
        return (
          (Gh = function () {
            return e;
          }),
          e
        );
      }
      var Jh = u.default.div(Gh(), function (e) {
          return e.theme.colors.invertedContrast;
        }),
        Xh = u.default.div(
          Kh(),
          function (e) {
            var n = e.error,
              t = e.theme;
            return n ? t.colors.failure : t.colors.invertedContrast;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          }
        ),
        $h = u.default.div(Qh()),
        em = u.default.input(
          Zh(),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            var n = e.error,
              t = e.theme;
            return n ? t.colors.failure : t.colors.primary;
          },
          function (e) {
            return e.theme.colors.textDisabled;
          },
          function (e) {
            return e.theme.colors.textDisabled;
          }
        );

      function nm(e) {
        var n = e.id,
          t = e.value,
          i = e.onChange,
          o = yi().chainId,
          c = Object(a.useContext)(u.ThemeContext),
          s = $f(t),
          l = s.address,
          d = s.loading,
          b = s.name,
          p = Object(a.useCallback)(
            function (e) {
              var n = e.target.value.replace(/\s+/g, "");
              i(n);
            },
            [i]
          ),
          f = Boolean(t.length > 0 && !d && !l);
        return Object(r.jsx)(Jh, {
          id: n,
          children: Object(r.jsx)(Xh, {
            error: f,
            children: Object(r.jsx)($h, {
              children: Object(r.jsxs)(Jo, {
                gap: "md",
                children: [
                  Object(r.jsxs)(Hc, {
                    children: [
                      Object(r.jsx)(Ec, {
                        color: c.colors.textSubtle,
                        fontWeight: 500,
                        fontSize: 14,
                        children: "Recipient"
                      }),
                      l &&
                        o &&
                        Object(r.jsx)(gc, {
                          href: di(
                            o,
                            null !== b && void 0 !== b ? b : l,
                            "address"
                          ),
                          style: {
                            fontSize: "14px"
                          },
                          children: "(View on BscScan)"
                        })
                    ]
                  }),
                  Object(r.jsx)(em, {
                    className: "recipient-address-input",
                    type: "text",
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    placeholder: "Wallet Address or ENS name",
                    error: f,
                    pattern: "^(0x[a-fA-F0-9]{40})$",
                    onChange: p,
                    value: t
                  })
                ]
              })
            })
          })
        });
      }
      var tm = t(502);

      function rm(e) {
        var n = e.priceImpact;
        return Object(r.jsx)(Zp, {
          fontWeight: 500,
          fontSize: 14,
          severity: Zf(n),
          children: n
            ? n.lessThan(ei)
              ? "<0.01%"
              : "".concat(n.toFixed(2), "%")
            : "-"
        });
      }

      function am(e) {
        var n,
          t,
          i,
          o,
          c = e.trade,
          s = e.onConfirm,
          u = e.allowedSlippage,
          l = e.swapErrorMessage,
          d = e.disabledConfirm,
          b = Object(a.useState)(!1),
          p = Object(Ln.a)(b, 2),
          f = p[0],
          j = p[1],
          h = Object(a.useMemo)(
            function () {
              return Wf(c, u);
            },
            [u, c]
          ),
          m = Object(a.useMemo)(
            function () {
              return Yf(c);
            },
            [c]
          ),
          v = m.priceImpactWithoutFee,
          x = m.realizedLPFee,
          y = Zf(v);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)(Jo, {
              gap: "0px",
              children: [
                Object(r.jsxs)(Hc, {
                  align: "center",
                  children: [
                    Object(r.jsx)(g, {
                      fontSize: "14px",
                      children: "Price"
                    }),
                    Object(r.jsxs)(g, {
                      fontSize: "14px",
                      style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        textAlign: "right",
                        paddingLeft: "8px",
                        fontWeight: 500
                      },
                      children: [
                        Qf(c, f),
                        Object(r.jsx)(Qp, {
                          onClick: function () {
                            return j(!f);
                          },
                          children: Object(r.jsx)(tm.a, {
                            size: 14
                          })
                        })
                      ]
                    })
                  ]
                }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsxs)(Zc, {
                      children: [
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          children:
                            c.tradeType === ct.EXACT_INPUT
                              ? "Minimum received"
                              : "Maximum sold"
                        }),
                        Object(r.jsx)(vd, {
                          text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                        })
                      ]
                    }),
                    Object(r.jsxs)(Zc, {
                      children: [
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          children:
                            c.tradeType === ct.EXACT_INPUT
                              ? null !==
                                  (n =
                                    null === (t = h[Cf.OUTPUT]) || void 0 === t
                                      ? void 0
                                      : t.toSignificant(4)) && void 0 !== n
                                ? n
                                : "-"
                              : null !==
                                  (i =
                                    null === (o = h[Cf.INPUT]) || void 0 === o
                                      ? void 0
                                      : o.toSignificant(4)) && void 0 !== i
                              ? i
                              : "-"
                        }),
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          marginLeft: "4px",
                          children:
                            c.tradeType === ct.EXACT_INPUT
                              ? c.outputAmount.currency.symbol
                              : c.inputAmount.currency.symbol
                        })
                      ]
                    })
                  ]
                }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsxs)(Zc, {
                      children: [
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          children: "Price Impact"
                        }),
                        Object(r.jsx)(vd, {
                          text: "The difference between the market price and your price due to trade size."
                        })
                      ]
                    }),
                    Object(r.jsx)(rm, {
                      priceImpact: v
                    })
                  ]
                }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsxs)(Zc, {
                      children: [
                        Object(r.jsx)(g, {
                          fontSize: "14px",
                          children: "Liquidity Provider Fee"
                        }),
                        Object(r.jsx)(vd, {
                          text: "For each trade a 0.25% fee is paid. 0.17% goes to liquidity providers and 0.08% goes to the PancakeSwap treasury."
                        })
                      ]
                    }),
                    Object(r.jsx)(g, {
                      fontSize: "14px",
                      children: x
                        ? (null === x || void 0 === x
                            ? void 0
                            : x.toSignificant(6)) +
                          " " +
                          c.inputAmount.currency.symbol
                        : "-"
                    })
                  ]
                })
              ]
            }),
            Object(r.jsxs)(Wc, {
              children: [
                Object(r.jsx)(W, {
                  onClick: s,
                  disabled: d,
                  variant: y > 2 ? "danger" : "primary",
                  mt: "10px",
                  id: "confirm-swap-or-send",
                  fullWidth: !0,
                  children: y > 2 ? "Swap Anyway" : "Confirm Swap"
                }),
                l
                  ? Object(r.jsx)(Xp, {
                      error: l
                    })
                  : null
              ]
            })
          ]
        });
      }

      function im() {
        var e = Object(s.a)([
          "\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ",
          ";\n    font-weight: 600;\n  }\n"
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      var om = Object(u.default)(g)(im(), function (e) {
        return e.theme.colors.primary;
      });

      function cm(e) {
        var n,
          t,
          i = e.trade,
          o = e.allowedSlippage,
          c = e.recipient,
          s = e.showAcceptChanges,
          l = e.onAcceptChanges,
          d = Object(a.useMemo)(
            function () {
              return Wf(i, o);
            },
            [i, o]
          ),
          b = Zf(
            Object(a.useMemo)(
              function () {
                return Yf(i);
              },
              [i]
            ).priceImpactWithoutFee
          ),
          p = Object(a.useContext)(u.ThemeContext);
        return Object(r.jsxs)(Jo, {
          gap: "md",
          style: {
            marginTop: "20px"
          },
          children: [
            Object(r.jsxs)(Hc, {
              align: "flex-end",
              children: [
                Object(r.jsxs)(Zc, {
                  gap: "0px",
                  children: [
                    Object(r.jsx)(Td, {
                      currency: i.inputAmount.currency,
                      size: "24px",
                      style: {
                        marginRight: "12px"
                      }
                    }),
                    Object(r.jsx)(g, {
                      fontSize: "24px",
                      color:
                        s && i.tradeType === ct.EXACT_OUTPUT
                          ? p.colors.primary
                          : "text",
                      children: i.inputAmount.toSignificant(6)
                    })
                  ]
                }),
                Object(r.jsx)(Zc, {
                  gap: "0px",
                  children: Object(r.jsx)(g, {
                    fontSize: "24px",
                    style: {
                      marginLeft: "10px",
                      fontWeight: 500
                    },
                    children: i.inputAmount.currency.symbol
                  })
                })
              ]
            }),
            Object(r.jsx)(Zc, {
              children: Object(r.jsx)(Lh.a, {
                size: "16",
                color: p.colors.textSubtle,
                style: {
                  marginLeft: "4px",
                  minWidth: "16px"
                }
              })
            }),
            Object(r.jsxs)(Hc, {
              align: "flex-end",
              children: [
                Object(r.jsxs)(Zc, {
                  gap: "0px",
                  children: [
                    Object(r.jsx)(Td, {
                      currency: i.outputAmount.currency,
                      size: "24px",
                      style: {
                        marginRight: "12px"
                      }
                    }),
                    Object(r.jsx)(g, {
                      fontSize: "24px",
                      style: {
                        marginLeft: "10px",
                        fontWeight: 500
                      },
                      color:
                        b > 2
                          ? p.colors.failure
                          : s && i.tradeType === ct.EXACT_INPUT
                          ? p.colors.primary
                          : "text",
                      children: i.outputAmount.toSignificant(6)
                    })
                  ]
                }),
                Object(r.jsx)(Zc, {
                  gap: "0px",
                  children: Object(r.jsx)(g, {
                    fontSize: "24px",
                    style: {
                      marginLeft: "10px",
                      fontWeight: 500
                    },
                    children: i.outputAmount.currency.symbol
                  })
                })
              ]
            }),
            s
              ? Object(r.jsx)($p, {
                  justify: "flex-start",
                  gap: "0px",
                  children: Object(r.jsxs)(Hc, {
                    children: [
                      Object(r.jsxs)(Zc, {
                        children: [
                          Object(r.jsx)(ju.a, {
                            size: 20,
                            style: {
                              marginRight: "8px",
                              minWidth: 24
                            }
                          }),
                          Object(r.jsx)(Ic, {
                            color: p.colors.primary,
                            children: " Price Updated"
                          })
                        ]
                      }),
                      Object(r.jsx)(W, {
                        onClick: l,
                        children: "Accept"
                      })
                    ]
                  })
                })
              : null,
            Object(r.jsx)(Jo, {
              justify: "flex-start",
              gap: "sm",
              style: {
                padding: "16px 0 0"
              },
              children:
                i.tradeType === ct.EXACT_INPUT
                  ? Object(r.jsxs)(om, {
                      children: [
                        "Output is estimated. You will receive at least ",
                        Object(r.jsxs)("span", {
                          children: [
                            null === (n = d[Cf.OUTPUT]) || void 0 === n
                              ? void 0
                              : n.toSignificant(6),
                            " ",
                            i.outputAmount.currency.symbol
                          ]
                        }),
                        " or the transaction will revert."
                      ]
                    })
                  : Object(r.jsxs)(om, {
                      children: [
                        "Input is estimated. You will sell at most ",
                        Object(r.jsxs)("span", {
                          children: [
                            null === (t = d[Cf.INPUT]) || void 0 === t
                              ? void 0
                              : t.toSignificant(6),
                            " ",
                            i.inputAmount.currency.symbol
                          ]
                        }),
                        " or the transaction will revert."
                      ]
                    })
            }),
            null !== c
              ? Object(r.jsx)(Jo, {
                  justify: "flex-start",
                  gap: "sm",
                  style: {
                    padding: "16px 0 0"
                  },
                  children: Object(r.jsxs)(Ic, {
                    children: [
                      "Output will be sent to",
                      " ",
                      Object(r.jsx)("b", {
                        title: c,
                        children: ui(c) ? bi(c) : c
                      })
                    ]
                  })
                })
              : null
          ]
        });
      }

      function sm(e) {
        var n,
          t,
          i,
          o,
          c,
          s,
          u = e.trade,
          l = e.originalTrade,
          d = e.onAcceptChanges,
          b = e.allowedSlippage,
          p = e.onConfirm,
          f = e.onDismiss,
          j = e.recipient,
          h = e.swapErrorMessage,
          m = e.isOpen,
          v = e.attemptingTxn,
          x = e.txHash,
          y = Object(a.useMemo)(
            function () {
              return Boolean(
                u &&
                  l &&
                  ((n = l),
                  (e = u).tradeType !== n.tradeType ||
                    !dr(e.inputAmount.currency, n.inputAmount.currency) ||
                    !e.inputAmount.equalTo(n.inputAmount) ||
                    !dr(e.outputAmount.currency, n.outputAmount.currency) ||
                    !e.outputAmount.equalTo(n.outputAmount))
              );
              var e, n;
            },
            [l, u]
          ),
          O = Object(a.useCallback)(
            function () {
              return u
                ? Object(r.jsx)(cm, {
                    trade: u,
                    allowedSlippage: b,
                    recipient: j,
                    showAcceptChanges: y,
                    onAcceptChanges: d
                  })
                : null;
            },
            [b, d, j, y, u]
          ),
          g = Object(a.useCallback)(
            function () {
              return u
                ? Object(r.jsx)(am, {
                    onConfirm: p,
                    trade: u,
                    disabledConfirm: y,
                    swapErrorMessage: h,
                    allowedSlippage: b
                  })
                : null;
            },
            [b, p, y, h, u]
          ),
          C = "Swapping "
            .concat(
              null === u ||
                void 0 === u ||
                null === (n = u.inputAmount) ||
                void 0 === n
                ? void 0
                : n.toSignificant(6),
              " "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (t = u.inputAmount) ||
                void 0 === t ||
                null === (i = t.currency) ||
                void 0 === i
                ? void 0
                : i.symbol,
              " for "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (o = u.outputAmount) ||
                void 0 === o
                ? void 0
                : o.toSignificant(6),
              " "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (c = u.outputAmount) ||
                void 0 === c ||
                null === (s = c.currency) ||
                void 0 === s
                ? void 0
                : s.symbol
            ),
          w = Object(a.useCallback)(
            function () {
              return h
                ? Object(r.jsx)(hu, {
                    onDismiss: f,
                    message: h
                  })
                : Object(r.jsx)(fu, {
                    title: "Confirm Swap",
                    onDismiss: f,
                    topContent: O,
                    bottomContent: g
                  });
            },
            [f, g, O, h]
          );
        return Object(r.jsx)(mu, {
          isOpen: m,
          onDismiss: f,
          attemptingTxn: v,
          hash: x,
          content: w,
          pendingText: C
        });
      }
      var um = t(503),
        lm = Object(a.memo)(function (e) {
          var n = e.trade,
            t = Object(a.useContext)(u.ThemeContext);
          return Object(r.jsx)(tc.a, {
            px: "1rem",
            py: "0.5rem",
            my: "0.5rem",
            style: {
              border: "1px solid ".concat(t.colors.tertiary),
              borderRadius: "1rem"
            },
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
            children: n.route.path.map(function (e, n, i) {
              var o = n === i.length - 1;
              return Object(r.jsxs)(
                a.Fragment,
                {
                  children: [
                    Object(r.jsxs)(tc.a, {
                      my: "0.5rem",
                      alignItems: "center",
                      style: {
                        flexShrink: 0
                      },
                      children: [
                        Object(r.jsx)(Td, {
                          currency: e,
                          size: "1.5rem"
                        }),
                        Object(r.jsx)(Ec, {
                          fontSize: 14,
                          color: t.colors.text,
                          ml: "0.5rem",
                          children: e.symbol
                        })
                      ]
                    }),
                    o
                      ? null
                      : Object(r.jsx)(um.a, {
                          color: t.colors.textSubtle
                        })
                  ]
                },
                n
              );
            })
          });
        });

      function dm(e) {
        var n,
          t,
          a,
          i,
          o = e.trade,
          c = e.allowedSlippage,
          s = Yf(o),
          u = s.priceImpactWithoutFee,
          l = s.realizedLPFee,
          d = o.tradeType === ct.EXACT_INPUT,
          b = Wf(o, c);
        return Object(r.jsx)(ae, {
          children: Object(r.jsxs)(ce, {
            children: [
              Object(r.jsxs)(Hc, {
                children: [
                  Object(r.jsxs)(Zc, {
                    children: [
                      Object(r.jsx)(g, {
                        fontSize: "14px",
                        children: d ? "Minimum received" : "Maximum sold"
                      }),
                      Object(r.jsx)(vd, {
                        text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                      })
                    ]
                  }),
                  Object(r.jsx)(Zc, {
                    children: Object(r.jsx)(g, {
                      fontSize: "14px",
                      children: d
                        ? null !==
                            (n = ""
                              .concat(
                                null === (t = b[Cf.OUTPUT]) || void 0 === t
                                  ? void 0
                                  : t.toSignificant(4),
                                " "
                              )
                              .concat(o.outputAmount.currency.symbol)) &&
                          void 0 !== n
                          ? n
                          : "-"
                        : null !==
                            (a = ""
                              .concat(
                                null === (i = b[Cf.INPUT]) || void 0 === i
                                  ? void 0
                                  : i.toSignificant(4),
                                " "
                              )
                              .concat(o.inputAmount.currency.symbol)) &&
                          void 0 !== a
                        ? a
                        : "-"
                    })
                  })
                ]
              }),
              Object(r.jsxs)(Hc, {
                children: [
                  Object(r.jsxs)(Zc, {
                    children: [
                      Object(r.jsx)(g, {
                        fontSize: "14px",
                        children: "Price Impact"
                      }),
                      Object(r.jsx)(vd, {
                        text: "The difference between the market price and estimated price due to trade size."
                      })
                    ]
                  }),
                  Object(r.jsx)(rm, {
                    priceImpact: u
                  })
                ]
              }),
              Object(r.jsxs)(Hc, {
                children: [
                  Object(r.jsxs)(Zc, {
                    children: [
                      Object(r.jsx)(g, {
                        fontSize: "14px",
                        children: "Liquidity Provider Fee"
                      }),
                      Object(r.jsx)(vd, {
                        text: "For each trade a 0.25% fee is paid. 0.17% goes to liquidity providers and 0.08% goes to the PancakeSwap treasury."
                      })
                    ]
                  }),
                  Object(r.jsx)(g, {
                    fontSize: "14px",
                    children: l
                      ? ""
                          .concat(l.toSignificant(4), " ")
                          .concat(o.inputAmount.currency.symbol)
                      : "-"
                  })
                ]
              })
            ]
          })
        });
      }

      function bm(e) {
        var n = e.trade,
          t = xl(),
          a = Object(Ln.a)(t, 1)[0],
          i = Boolean(n && n.route.path.length > 2);
        return Object(r.jsx)(Jo, {
          gap: "md",
          children:
            n &&
            Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(dm, {
                  trade: n,
                  allowedSlippage: a
                }),
                i &&
                  Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(Yp, {}),
                      Object(r.jsxs)(Jo, {
                        style: {
                          padding: "0 24px"
                        },
                        children: [
                          Object(r.jsxs)(Zc, {
                            children: [
                              Object(r.jsx)(g, {
                                fontSize: "14px",
                                children: "Route"
                              }),
                              Object(r.jsx)(vd, {
                                text: "Routing through these tokens resulted in the best price for your trade."
                              })
                            ]
                          }),
                          Object(r.jsx)(lm, {
                            trade: n
                          })
                        ]
                      })
                    ]
                  })
              ]
            })
        });
      }

      function pm() {
        var e = Object(s.a)([
          "\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
          ";\n  background-color: ",
          ";\n  z-index: -1;\n\n  transform: ",
          ";\n  transition: transform 300ms ease-in-out;\n"
        ]);
        return (
          (pm = function () {
            return e;
          }),
          e
        );
      }
      var fm = u.default.div(
        pm(),
        function (e) {
          return e.theme.colors.textSubtle;
        },
        function (e) {
          return e.theme.colors.background;
        },
        function (e) {
          return e.show ? "translateY(0%)" : "translateY(-100%)";
        }
      );

      function jm(e) {
        var n,
          t = e.trade,
          a = Object(N.a)(e, ["trade"]),
          i = Pl(t, Ml);
        return Object(r.jsx)(fm, {
          show: Boolean(t),
          children: Object(r.jsx)(
            bm,
            Object(l.a)(
              Object(l.a)({}, a),
              {},
              {
                trade:
                  null !== (n = null !== t && void 0 !== t ? t : i) &&
                  void 0 !== n
                    ? n
                    : void 0
              }
            )
          )
        });
      }

      function hm(e) {
        var n = e.version,
          t = Object(a.useContext)(u.ThemeContext),
          i = Object(Bo.g)(),
          o = ff(),
          c = Object(a.useMemo)(
            function () {
              return Object(l.a)(
                Object(l.a)({}, i),
                {},
                {
                  search: "?".concat(
                    Object(pf.stringify)(
                      Object(l.a)(
                        Object(l.a)({}, o),
                        {},
                        {
                          use: n !== jf ? n : void 0
                        }
                      )
                    )
                  )
                }
              );
            },
            [i, o, n]
          );
        return Object(r.jsx)(_s, {
          style: {
            marginTop: "12px",
            padding: "8px 4px"
          },
          children: Object(r.jsx)(Jo, {
            gap: "sm",
            justify: "center",
            style: {
              alignItems: "center",
              textAlign: "center"
            },
            children: Object(r.jsxs)(tc.b, {
              lineHeight: "145.23%;",
              fontSize: 14,
              fontWeight: 400,
              color: t.colors.text,
              children: [
                "There is a better price for this trade on",
                " ",
                Object(r.jsx)(yc, {
                  to: c,
                  children: Object(r.jsxs)("b", {
                    children: ["Uniswap ", n.toUpperCase(), " \u2197"]
                  })
                })
              ]
            })
          })
        });
      }

      function mm(e) {
        var n,
          t,
          a,
          i,
          o,
          c = e.price,
          s = e.showInverted,
          u = e.setShowInverted,
          l = s
            ? null === c || void 0 === c
              ? void 0
              : c.toSignificant(6)
            : null === c ||
              void 0 === c ||
              null === (n = c.invert()) ||
              void 0 === n
            ? void 0
            : n.toSignificant(6),
          d = Boolean(
            (null === c || void 0 === c ? void 0 : c.baseCurrency) &&
              (null === c || void 0 === c ? void 0 : c.quoteCurrency)
          ),
          b = s
            ? ""
                .concat(
                  null === c ||
                    void 0 === c ||
                    null === (t = c.quoteCurrency) ||
                    void 0 === t
                    ? void 0
                    : t.symbol,
                  " per "
                )
                .concat(
                  null === c ||
                    void 0 === c ||
                    null === (a = c.baseCurrency) ||
                    void 0 === a
                    ? void 0
                    : a.symbol
                )
            : ""
                .concat(
                  null === c ||
                    void 0 === c ||
                    null === (i = c.baseCurrency) ||
                    void 0 === i
                    ? void 0
                    : i.symbol,
                  " per "
                )
                .concat(
                  null === c ||
                    void 0 === c ||
                    null === (o = c.quoteCurrency) ||
                    void 0 === o
                    ? void 0
                    : o.symbol
                );
        return Object(r.jsx)(g, {
          fontSize: "14px",
          style: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          },
          children: d
            ? Object(r.jsxs)(r.Fragment, {
                children: [
                  null !== l && void 0 !== l ? l : "-",
                  " ",
                  b,
                  Object(r.jsx)(Qp, {
                    onClick: function () {
                      return u(!s);
                    },
                    children: Object(r.jsx)(Je, {
                      width: "20px",
                      color: "primary"
                    })
                  })
                ]
              })
            : "-"
        });
      }

      function vm() {
        var e = Object(s.a)(["\n  stroke: ", ";\n"]);
        return (
          (vm = function () {
            return e;
          }),
          e
        );
      }

      function xm() {
        var e = Object(s.a)([
          "\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"
        ]);
        return (
          (xm = function () {
            return e;
          }),
          e
        );
      }

      function ym() {
        var e = Object(s.a)([
          "\n  background: ",
          ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"
        ]);
        return (
          (ym = function () {
            return e;
          }),
          e
        );
      }
      var Om = u.default.div(ym(), function (e) {
          var n = e.theme;
          return Object(sc.b)(0.6, n.colors.tertiary);
        }),
        gm = u.default.div(xm()),
        Cm = Object(u.default)(ju.a)(vm(), function (e) {
          return e.theme.colors.failure;
        });

      function wm(e) {
        var n,
          t,
          i,
          o,
          c = e.token,
          s = yi().chainId,
          u =
            null !==
              (n =
                null === c ||
                void 0 === c ||
                null === (t = c.symbol) ||
                void 0 === t
                  ? void 0
                  : t.toLowerCase()) && void 0 !== n
              ? n
              : "",
          l =
            null !==
              (i =
                null === c ||
                void 0 === c ||
                null === (o = c.name) ||
                void 0 === o
                  ? void 0
                  : o.toLowerCase()) && void 0 !== i
              ? i
              : "",
          d = kl(),
          b = Object(a.useMemo)(
            function () {
              return (
                !(!c || !s) &&
                Object.keys(d).some(function (e) {
                  var n,
                    t,
                    r = d[e];
                  return (
                    !r.equals(c) &&
                    ((null === (n = r.symbol) || void 0 === n
                      ? void 0
                      : n.toLowerCase()) === u ||
                      (null === (t = r.name) || void 0 === t
                        ? void 0
                        : t.toLowerCase()) === l)
                  );
                })
              );
            },
            [c, s, d, u, l]
          );
        return c
          ? Object(r.jsx)(Om, {
              error: b,
              children: Object(r.jsxs)(Wc, {
                gap: "6px",
                children: [
                  Object(r.jsxs)(Jo, {
                    gap: "24px",
                    children: [
                      Object(r.jsx)(Td, {
                        currency: c,
                        size: "16px"
                      }),
                      Object(r.jsx)("div", {
                        children: " "
                      })
                    ]
                  }),
                  Object(r.jsxs)(Jo, {
                    gap: "10px",
                    justify: "flex-start",
                    children: [
                      Object(r.jsxs)(Ic, {
                        children: [
                          c && c.name && c.symbol && c.name !== c.symbol
                            ? "".concat(c.name, " (").concat(c.symbol, ")")
                            : c.name || c.symbol,
                          " "
                        ]
                      }),
                      s &&
                        Object(r.jsx)(gc, {
                          style: {
                            fontWeight: 400
                          },
                          href: di(s, c.address, "token"),
                          children: Object(r.jsxs)(Rc, {
                            title: c.address,
                            children: [bi(c.address), " (View on BscScan)"]
                          })
                        })
                    ]
                  })
                ]
              })
            })
          : null;
      }

      function km(e) {
        var n = e.isOpen,
          t = e.tokens,
          i = e.onConfirm,
          o = Object(a.useState)(!1),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          u = c[1],
          l = Object(a.useCallback)(function () {
            return u(function (e) {
              return !e;
            });
          }, []),
          d = Object(a.useCallback)(function () {
            return null;
          }, []);
        return Object(r.jsx)(Ks, {
          isOpen: n,
          onDismiss: d,
          maxHeight: 90,
          children: Object(r.jsx)(gm, {
            className: "token-warning-container",
            children: Object(r.jsxs)(Jo, {
              gap: "lg",
              children: [
                Object(r.jsxs)(Wc, {
                  gap: "6px",
                  children: [
                    Object(r.jsx)(Cm, {}),
                    Object(r.jsx)(g, {
                      color: "failure",
                      children: "Token imported"
                    })
                  ]
                }),
                Object(r.jsxs)(g, {
                  children: [
                    "Anyone can create an ERC20 token on BSC Chain with ",
                    Object(r.jsx)("em", {
                      children: "any"
                    }),
                    " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."
                  ]
                }),
                Object(r.jsx)(g, {
                  children:
                    "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary ERC20 tokens."
                }),
                Object(r.jsxs)(g, {
                  children: [
                    "If you purchase an arbitrary token, ",
                    Object(r.jsx)("strong", {
                      children: "you may be unable to sell it back."
                    })
                  ]
                }),
                t.map(function (e) {
                  return Object(r.jsx)(
                    wm,
                    {
                      token: e
                    },
                    e.address
                  );
                }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsx)("div", {
                      children: Object(r.jsxs)("label", {
                        style: {
                          cursor: "pointer",
                          userSelect: "none"
                        },
                        children: [
                          Object(r.jsx)("input", {
                            type: "checkbox",
                            className: "understand-checkbox",
                            checked: s,
                            onChange: l
                          }),
                          " ",
                          Object(r.jsx)(g, {
                            as: "span",
                            ml: "4px",
                            children: "I understand"
                          })
                        ]
                      })
                    }),
                    Object(r.jsx)(W, {
                      disabled: !s,
                      variant: "danger",
                      style: {
                        width: "140px"
                      },
                      className: "token-dismiss-button",
                      onClick: function () {
                        i();
                      },
                      children: "Continue"
                    })
                  ]
                })
              ]
            })
          })
        });
      }

      function Tm() {
        var e = Object(s.a)(["\n  stroke: ", ";\n"]);
        return (
          (Tm = function () {
            return e;
          }),
          e
        );
      }

      function Im() {
        var e = Object(s.a)([
          "\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"
        ]);
        return (
          (Im = function () {
            return e;
          }),
          e
        );
      }
      var Em = u.default.div(Im()),
        Am = Object(u.default)(ju.a)(Tm(), function (e) {
          return e.theme.colors.failure;
        });

      function Sm(e) {
        var n = e.isOpen,
          t = e.transactionType,
          i = e.onConfirm,
          o = Object(a.useState)(!1),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          u = c[1],
          l = Object(a.useCallback)(function () {
            return u(function (e) {
              return !e;
            });
          }, []),
          d = Object(a.useCallback)(function () {
            return null;
          }, []);
        return Object(r.jsx)(Ks, {
          isOpen: n,
          onDismiss: d,
          maxHeight: 90,
          children: Object(r.jsx)(Em, {
            className: "token-warning-container",
            children: Object(r.jsxs)(Jo, {
              gap: "lg",
              children: [
                Object(r.jsxs)(Wc, {
                  gap: "6px",
                  children: [
                    Object(r.jsx)(Am, {}),
                    Object(r.jsx)(Ic, {
                      color: "red2",
                      children: "Syrup Warning"
                    })
                  ]
                }),
                "" !== t &&
                  Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsxs)(Ac, {
                        color: "red2",
                        children: [
                          "Please be careful when ",
                          Object(r.jsx)("strong", {
                            children: t
                          }),
                          " SYRUP."
                        ]
                      }),
                      Object(r.jsx)(Ac, {
                        color: "red2",
                        children:
                          "Buying" === t
                            ? "You will not receive CAKE rewards for holding purchased SYRUP."
                            : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE."
                      })
                    ]
                  }),
                Object(r.jsxs)(Hc, {
                  children: [
                    Object(r.jsx)("div", {
                      children: Object(r.jsxs)("label", {
                        style: {
                          cursor: "pointer",
                          userSelect: "none"
                        },
                        children: [
                          Object(r.jsx)("input", {
                            type: "checkbox",
                            className: "understand-checkbox",
                            checked: s,
                            onChange: l
                          }),
                          " ",
                          "I understand"
                        ]
                      })
                    }),
                    Object(r.jsx)(W, {
                      disabled: !s,
                      variant: "danger",
                      style: {
                        width: "140px"
                      },
                      onClick: function () {
                        u(!1), i();
                      },
                      children: "Continue"
                    })
                  ]
                })
              ]
            })
          })
        });
      }

      function Nm() {
        var e = Object(s.a)([
          "\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ",
          " 0%,\n    ",
          " 80%\n  );\n  opacity: 0.6;\n"
        ]);
        return (
          (Nm = function () {
            return e;
          }),
          e
        );
      }

      function Rm() {
        var e = Object(s.a)([
          "\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"
        ]);
        return (
          (Rm = function () {
            return e;
          }),
          e
        );
      }

      function Lm() {
        var e = Object(s.a)([
          "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
          ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ",
          ";\n"
        ]);
        return (
          (Lm = function () {
            return e;
          }),
          e
        );
      }

      function Um() {
        var e = Object(s.a)(["\n  width: 50%;\n"]);
        return (
          (Um = function () {
            return e;
          }),
          e
        );
      }

      function Bm() {
        var e = Object(s.a)(["\n  margin-top: 1.25rem;\n"]);
        return (
          (Bm = function () {
            return e;
          }),
          e
        );
      }
      var Pm,
        Mm,
        _m = Object(u.default)(Jo)(Bm()),
        Dm = Object(u.default)(Hc)(Um()),
        Fm = u.default.div(
          Lm(),
          function (e) {
            var n = e.theme,
              t = e.confirmed;
            return e.disabled
              ? n.colors.backgroundDisabled
              : t
              ? n.colors.success
              : n.colors.primary;
          },
          function (e) {
            var n = e.theme,
              t = e.confirmed;
            return e.disabled
              ? n.colors.text
              : t
              ? n.colors.success
              : "#FFFFFF";
          }
        ),
        zm = u.default.div(Rm()),
        qm = u.default.div(
          Nm(),
          function (e) {
            var n = e.theme,
              t = e.prevConfirmed;
            return Object(sc.b)(0.5, t ? n.colors.success : n.colors.primary);
          },
          function (e) {
            var n = e.theme;
            return e.prevConfirmed
              ? n.colors.primary
              : n.colors.backgroundDisabled;
          }
        );

      function Vm(e) {
        var n = e.steps;
        return Object(r.jsx)(_m, {
          justify: "center",
          children: Object(r.jsxs)(Dm, {
            children: [
              n.map(function (e, t) {
                return Object(r.jsxs)(
                  zm,
                  {
                    children: [
                      Object(r.jsx)(Fm, {
                        confirmed: e,
                        disabled: !n[t - 1] && 0 !== t,
                        children: e ? "\u2713" : t + 1
                      }),
                      Object(r.jsx)(qm, {
                        prevConfirmed: e
                      })
                    ]
                  },
                  t
                );
              }),
              Object(r.jsx)(Fm, {
                disabled: !n[n.length - 1],
                children: n.length + 1
              })
            ]
          })
        });
      }

      function Hm(e) {
        return "0x".concat(e.raw.toString(16));
      }

      function Ym(e, n) {
        if (Of(e) !== bf.v1) throw new Error("invalid trade version");
        if (e.route.pairs.length > 2) throw new Error("too many pairs");
        var t = e.tradeType === ct.EXACT_INPUT,
          r = e.inputAmount.currency === ur,
          a = e.outputAmount.currency === ur;
        if (r && a) throw new Error("ETHER to ETHER");
        var i,
          o = Hm(e.minimumAmountOut(n.allowedSlippage)),
          c = Hm(e.maximumAmountIn(n.allowedSlippage)),
          s =
            ((i = n.ttl),
            "0x".concat(
              (Math.floor(new Date().getTime() / 1e3) + i).toString(16)
            ));
        if (t) {
          if (r)
            return {
              methodName: "ethToTokenTransferInput",
              args: [o, s, n.recipient],
              value: c
            };
          if (a)
            return {
              methodName: "tokenToEthTransferInput",
              args: [c, o, s, n.recipient],
              value: "0x0"
            };
          var u = e.outputAmount.currency;
          if (!(u instanceof lr)) throw new Error("token to token");
          return {
            methodName: "tokenToTokenTransferInput",
            args: [c, o, "0x1", s, n.recipient, u.address],
            value: "0x0"
          };
        }
        if (r)
          return {
            methodName: "ethToTokenTransferOutput",
            args: [o, s, n.recipient],
            value: c
          };
        if (a)
          return {
            methodName: "tokenToEthTransferOutput",
            args: [o, c, s, n.recipient],
            value: "0x0"
          };
        var l = e.outputAmount.currency;
        if (!(l instanceof lr))
          throw new Error("invalid output amount currency");
        return {
          methodName: "tokenToTokenTransferOutput",
          args: [o, c, df.a.toHexString(), s, n.recipient, l.address],
          value: "0x0"
        };
      }

      function Wm(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xa,
          t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $a,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = yi(),
          o = i.account,
          c = i.chainId,
          s = i.library,
          u = $f(r),
          l = u.address,
          d = null === r ? o : l,
          b = Ci(gf(e), !0);
        return Object(a.useMemo)(
          function () {
            var r = Of(e);
            if (!e || !d || !s || !o || !r || !c) return [];
            var a = r === bf.v2 ? hi(0, s, o) : b;
            if (!a) return [];
            var i = [];
            switch (r) {
              case bf.v2:
                i.push(
                  Dr.swapCallParameters(e, {
                    feeOnTransfer: !1,
                    allowedSlippage: new Er(mt.a.BigInt(n), ni),
                    recipient: d,
                    ttl: t
                  })
                ),
                  e.tradeType === ct.EXACT_INPUT &&
                    i.push(
                      Dr.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: new Er(mt.a.BigInt(n), ni),
                        recipient: d,
                        ttl: t
                      })
                    );
                break;
              case bf.v1:
                i.push(
                  Ym(e, {
                    allowedSlippage: new Er(mt.a.BigInt(n), ni),
                    recipient: d,
                    ttl: t
                  })
                );
            }
            return i.map(function (e) {
              return {
                parameters: e,
                contract: a
              };
            });
          },
          [o, n, c, t, s, d, e, b]
        );
      }
      !(function (e) {
        (e[(e.INVALID = 0)] = "INVALID"),
          (e[(e.LOADING = 1)] = "LOADING"),
          (e[(e.VALID = 2)] = "VALID");
      })(Pm || (Pm = {})),
        (function (e) {
          (e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
            (e[(e.WRAP = 1)] = "WRAP"),
            (e[(e.UNWRAP = 2)] = "UNWRAP");
        })(Mm || (Mm = {}));
      var Zm = {
        wrapType: Mm.NOT_APPLICABLE
      };

      function Qm(e, n, t) {
        var r = yi(),
          i = r.chainId,
          o = r.account,
          c = (function (e) {
            var n = yi().chainId;
            return Oi(n ? fr[n].address : void 0, Kr, e);
          })(),
          s = Bl(null !== o && void 0 !== o ? o : void 0, e),
          u = Object(a.useMemo)(
            function () {
              return rj(t, e);
            },
            [e, t]
          ),
          l = Pf();
        return Object(a.useMemo)(
          function () {
            if (!c || !i || !e || !n) return Zm;
            var t = u && s && !s.lessThan(u);
            return e === ur && dr(fr[i], n)
              ? {
                  wrapType: Mm.WRAP,
                  execute:
                    t && u
                      ? Object(pt.a)(
                          bt.a.mark(function e() {
                            var n;
                            return bt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.deposit({
                                          value: "0x".concat(u.raw.toString(16))
                                        })
                                      );
                                    case 3:
                                      (n = e.sent),
                                        l(n, {
                                          summary: "Wrap ".concat(
                                            u.toSignificant(6),
                                            " BNB to WBNB"
                                          )
                                        }),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "Could not deposit",
                                          e.t0
                                        );
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        )
                      : void 0,
                  inputError: t ? void 0 : "Insufficient BNB balance"
                }
              : dr(fr[i], e) && n === ur
              ? {
                  wrapType: Mm.UNWRAP,
                  execute:
                    t && u
                      ? Object(pt.a)(
                          bt.a.mark(function e() {
                            var n;
                            return bt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.withdraw(
                                          "0x".concat(u.raw.toString(16))
                                        )
                                      );
                                    case 3:
                                      (n = e.sent),
                                        l(n, {
                                          summary: "Unwrap ".concat(
                                            u.toSignificant(6),
                                            " WBNB to BNB"
                                          )
                                        }),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "Could not withdraw",
                                          e.t0
                                        );
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        )
                      : void 0,
                  inputError: t ? void 0 : "Insufficient WBNB balance"
                }
              : Zm;
          },
          [c, i, e, n, u, s, l]
        );
      }
      var Km = function () {
        var e,
          n,
          t,
          i,
          o,
          c,
          s,
          d,
          b,
          p,
          f,
          j = (function () {
            var e = yi().chainId,
              n = Object(Vo.c)(),
              t = ff(),
              r = Object(a.useState)(),
              i = Object(Ln.a)(r, 2),
              o = i[0],
              c = i[1];
            return (
              Object(a.useEffect)(
                function () {
                  if (e) {
                    var r = lj(t);
                    n(
                      Sf({
                        typedValue: r.typedValue,
                        field: r.independentField,
                        inputCurrencyId: r[Cf.INPUT].currencyId,
                        outputCurrencyId: r[Cf.OUTPUT].currencyId,
                        recipient: r.recipient
                      })
                    ),
                      c({
                        inputCurrencyId: r[Cf.INPUT].currencyId,
                        outputCurrencyId: r[Cf.OUTPUT].currencyId
                      });
                  }
                },
                [n, e]
              ),
              o
            );
          })(),
          h = [
            Al(null === j || void 0 === j ? void 0 : j.inputCurrencyId),
            Al(null === j || void 0 === j ? void 0 : j.outputCurrencyId)
          ],
          m = h[0],
          v = h[1],
          x = Object(a.useState)(!1),
          y = Object(Ln.a)(x, 2),
          O = y[0],
          C = y[1],
          w = Object(a.useState)(!1),
          k = Object(Ln.a)(w, 2),
          T = k[0],
          I = k[1],
          E = Object(a.useState)(""),
          A = Object(Ln.a)(E, 2),
          S = A[0],
          N = A[1],
          R = Object(a.useMemo)(
            function () {
              var e, n;
              return null !==
                (e =
                  null === (n = [m, v]) || void 0 === n
                    ? void 0
                    : n.filter(function (e) {
                        return e instanceof lr;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [m, v]
          ),
          L = Object(a.useCallback)(function () {
            C(!0);
          }, []),
          U = Object(a.useCallback)(function () {
            I(!1), N("");
          }, []),
          B = yi().account,
          P = Object(a.useContext)(u.ThemeContext),
          M = (function () {
            var e = Object(Vo.c)(),
              n = vl(),
              t = Object(a.useCallback)(
                function () {
                  e(
                    ol({
                      userExpertMode: !n
                    })
                  );
                },
                [n, e]
              );
            return [n, t];
          })(),
          _ = Object(Ln.a)(M, 1)[0],
          D = yl(),
          F = Object(Ln.a)(D, 1)[0],
          z = xl(),
          q = Object(Ln.a)(z, 1)[0],
          V = tj(),
          H = V.independentField,
          Y = V.typedValue,
          Z = V.recipient,
          K = oj(),
          G = K.v1Trade,
          J = K.v2Trade,
          X = K.currencyBalances,
          $ = K.parsedAmount,
          ee = K.currencies,
          ne = K.inputError,
          te = Qm(ee[Cf.INPUT], ee[Cf.OUTPUT], Y),
          re = te.wrapType,
          ae = te.execute,
          ie = te.inputError,
          oe = re !== Mm.NOT_APPLICABLE,
          se = hf(),
          ue = oe
            ? void 0
            : ((e = {}),
              Object(ge.a)(e, bf.v1, G),
              Object(ge.a)(e, bf.v2, J),
              e)[se],
          le =
            se === bf.v2 && Tf(J, G, si)
              ? bf.v1
              : se === bf.v1 && Tf(G, J)
              ? bf.v2
              : void 0,
          de = oe
            ? ((n = {}),
              Object(ge.a)(n, Cf.INPUT, $),
              Object(ge.a)(n, Cf.OUTPUT, $),
              n)
            : ((t = {}),
              Object(ge.a)(
                t,
                Cf.INPUT,
                H === Cf.INPUT
                  ? $
                  : null === ue || void 0 === ue
                  ? void 0
                  : ue.inputAmount
              ),
              Object(ge.a)(
                t,
                Cf.OUTPUT,
                H === Cf.OUTPUT
                  ? $
                  : null === ue || void 0 === ue
                  ? void 0
                  : ue.outputAmount
              ),
              t),
          be = (function () {
            var e = Object(Vo.c)(),
              n = Object(a.useCallback)(
                function (n, t) {
                  e(
                    If({
                      field: n,
                      currencyId:
                        t instanceof lr ? t.address : t === ur ? "ETH" : ""
                    })
                  );
                },
                [e]
              );
            return {
              onSwitchTokens: Object(a.useCallback)(
                function () {
                  e(Ef());
                },
                [e]
              ),
              onCurrencySelection: n,
              onUserInput: Object(a.useCallback)(
                function (n, t) {
                  e(
                    Af({
                      field: n,
                      typedValue: t
                    })
                  );
                },
                [e]
              ),
              onChangeRecipient: Object(a.useCallback)(
                function (n) {
                  e(
                    Nf({
                      recipient: n
                    })
                  );
                },
                [e]
              )
            };
          })(),
          pe = be.onSwitchTokens,
          fe = be.onCurrencySelection,
          je = be.onUserInput,
          he = be.onChangeRecipient,
          me = !ne,
          ve = H === Cf.INPUT ? Cf.OUTPUT : Cf.INPUT,
          xe = Object(a.useCallback)(
            function (e) {
              je(Cf.INPUT, e);
            },
            [je]
          ),
          ye = Object(a.useCallback)(
            function (e) {
              je(Cf.OUTPUT, e);
            },
            [je]
          ),
          Oe = Object(a.useState)({
            showConfirm: !1,
            tradeToConfirm: void 0,
            attemptingTxn: !1,
            swapErrorMessage: void 0,
            txHash: void 0
          }),
          Ce = Object(Ln.a)(Oe, 2),
          we = Ce[0],
          ke = we.showConfirm,
          Te = we.tradeToConfirm,
          Ie = we.swapErrorMessage,
          Ee = we.attemptingTxn,
          Ae = we.txHash,
          Se = Ce[1],
          Ne =
            ((d = {}),
            Object(ge.a)(d, H, Y),
            Object(ge.a)(
              d,
              ve,
              oe
                ? null !==
                    (i =
                      null === (o = de[H]) || void 0 === o
                        ? void 0
                        : o.toExact()) && void 0 !== i
                  ? i
                  : ""
                : null !==
                    (c =
                      null === (s = de[ve]) || void 0 === s
                        ? void 0
                        : s.toSignificant(6)) && void 0 !== c
                ? c
                : ""
            ),
            d),
          Re = null === ue || void 0 === ue ? void 0 : ue.route,
          Le = Boolean(
            ee[Cf.INPUT] &&
              ee[Cf.OUTPUT] &&
              (null === (b = de[H]) || void 0 === b
                ? void 0
                : b.greaterThan(mt.a.BigInt(0)))
          ),
          Ue = !Re,
          Be = (function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              t = Object(a.useMemo)(
                function () {
                  return e ? Wf(e, n)[Cf.INPUT] : void 0;
                },
                [e, n]
              ),
              r = Of(e) === bf.v1,
              i = gf(e);
            return Kf(t, r ? i : _a);
          })(ue, q),
          Pe = Object(Ln.a)(Be, 2),
          Me = Pe[0],
          _e = Pe[1],
          De = Object(a.useState)(!1),
          Fe = Object(Ln.a)(De, 2),
          qe = Fe[0],
          Ve = Fe[1];
        Object(a.useEffect)(
          function () {
            Me === Ff.PENDING && Ve(!0);
          },
          [Me, qe]
        );
        var He = pj(X[Cf.INPUT]),
          Ye = Boolean(
            He &&
              (null === (p = de[Cf.INPUT]) || void 0 === p
                ? void 0
                : p.equalTo(He))
          ),
          We = (function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Xa,
              t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : $a,
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = yi(),
              o = i.account,
              c = i.chainId,
              s = i.library,
              u = Wm(e, n, t, r),
              d = Pf(),
              b = $f(r).address,
              p = null === r ? o : b;
            return Object(a.useMemo)(
              function () {
                if (!e || !s || !o || !c)
                  return {
                    state: Pm.INVALID,
                    callback: null,
                    error: "Missing dependencies"
                  };
                if (!p)
                  return null !== r
                    ? {
                        state: Pm.INVALID,
                        callback: null,
                        error: "Invalid recipient"
                      }
                    : {
                        state: Pm.LOADING,
                        callback: null,
                        error: null
                      };
                var n = Of(e);
                return {
                  state: Pm.VALID,
                  callback: (function () {
                    var t = Object(pt.a)(
                      bt.a.mark(function t() {
                        var a, i, c, s, b, f, j, h, m, v;
                        return bt.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  Promise.all(
                                    u.map(function (e) {
                                      var n,
                                        t = e.parameters,
                                        r = t.methodName,
                                        a = t.args,
                                        i = t.value,
                                        o = e.contract,
                                        c =
                                          !i || Ql(i)
                                            ? {}
                                            : {
                                                value: i
                                              };
                                      return (n = o.estimateGas)[r]
                                        .apply(n, Object(aa.a)(a).concat([c]))
                                        .then(function (n) {
                                          return {
                                            call: e,
                                            gasEstimate: n
                                          };
                                        })
                                        .catch(function (n) {
                                          var t;
                                          return (
                                            console.debug(
                                              "Gas estimate failed, trying eth_call to extract error",
                                              e
                                            ),
                                            (t = o.callStatic)[r]
                                              .apply(
                                                t,
                                                Object(aa.a)(a).concat([c])
                                              )
                                              .then(function (t) {
                                                return (
                                                  console.debug(
                                                    "Unexpected successful call after failed estimate gas",
                                                    e,
                                                    n,
                                                    t
                                                  ),
                                                  {
                                                    call: e,
                                                    error: new Error(
                                                      "Unexpected issue with estimating the gas. Please try again."
                                                    )
                                                  }
                                                );
                                              })
                                              .catch(function (n) {
                                                var t;
                                                switch (
                                                  (console.debug(
                                                    "Call threw error",
                                                    e,
                                                    n
                                                  ),
                                                  n.reason)
                                                ) {
                                                  case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                  case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                    t =
                                                      "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                    break;
                                                  default:
                                                    t =
                                                      "The transaction cannot succeed due to error: ".concat(
                                                        n.reason,
                                                        ". This is probably an issue with one of the tokens you are swapping."
                                                      );
                                                }
                                                return {
                                                  call: e,
                                                  error: new Error(t)
                                                };
                                              })
                                          );
                                        });
                                    })
                                  )
                                );
                              case 2:
                                if (
                                  ((a = t.sent),
                                  (i = a.find(function (e, n, t) {
                                    return (
                                      "gasEstimate" in e &&
                                      (n === t.length - 1 ||
                                        "gasEstimate" in t[n + 1])
                                    );
                                  })))
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                if (
                                  !(
                                    (c = a.filter(function (e) {
                                      return "error" in e;
                                    })).length > 0
                                  )
                                ) {
                                  t.next = 8;
                                  break;
                                }
                                throw c[c.length - 1].error;
                              case 8:
                                throw new Error(
                                  "Unexpected error. Please contact support: none of the calls threw an error"
                                );
                              case 9:
                                return (
                                  (s = i.call),
                                  (b = s.contract),
                                  (f = s.parameters),
                                  (j = f.methodName),
                                  (h = f.args),
                                  (m = f.value),
                                  (v = i.gasEstimate),
                                  t.abrupt(
                                    "return",
                                    b[j]
                                      .apply(
                                        b,
                                        Object(aa.a)(h).concat([
                                          Object(l.a)(
                                            {
                                              gasLimit: pi(v)
                                            },
                                            m && !Ql(m)
                                              ? {
                                                  value: m,
                                                  from: o
                                                }
                                              : {
                                                  from: o
                                                }
                                          )
                                        ])
                                      )
                                      .then(function (t) {
                                        var a = e.inputAmount.currency.symbol,
                                          i = e.outputAmount.currency.symbol,
                                          c = e.inputAmount.toSignificant(3),
                                          s = e.outputAmount.toSignificant(3),
                                          u = "Swap "
                                            .concat(c, " ")
                                            .concat(a, " for ")
                                            .concat(s, " ")
                                            .concat(i),
                                          l =
                                            p === o
                                              ? u
                                              : ""
                                                  .concat(u, " to ")
                                                  .concat(
                                                    r && ui(r) ? bi(r) : r
                                                  ),
                                          b =
                                            n === bf.v2
                                              ? l
                                              : ""
                                                  .concat(l, " on ")
                                                  .concat(n.toUpperCase());
                                        return (
                                          d(t, {
                                            summary: b
                                          }),
                                          t.hash
                                        );
                                      })
                                      .catch(function (e) {
                                        throw 4001 ===
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.code)
                                          ? new Error("Transaction rejected.")
                                          : (console.error(
                                              "Swap failed",
                                              e,
                                              j,
                                              h,
                                              m
                                            ),
                                            new Error(
                                              "Swap failed: ".concat(e.message)
                                            ));
                                      })
                                  )
                                );
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  error: null
                };
              },
              [e, s, o, c, p, r, u, d]
            );
          })(ue, q, F, Z),
          Ze = We.callback,
          Qe = We.error,
          Ke = Yf(ue).priceImpactWithoutFee,
          Ge = Object(a.useCallback)(
            function () {
              (Ke &&
                !(function (e) {
                  return e.lessThan(ii)
                    ? !!e.lessThan(ai) ||
                        window.confirm(
                          "This swap has a price impact of at least ".concat(
                            ai.toFixed(0),
                            "%. Please confirm that you would like to continue with this swap."
                          )
                        )
                    : "confirm" ===
                        window.prompt(
                          "This swap has a price impact of at least ".concat(
                            ii.toFixed(0),
                            '%. Please type the word "confirm" to continue with this swap.'
                          )
                        );
                })(Ke)) ||
                (Ze &&
                  (Se(function (e) {
                    return Object(l.a)(
                      Object(l.a)({}, e),
                      {},
                      {
                        attemptingTxn: !0,
                        swapErrorMessage: void 0,
                        txHash: void 0
                      }
                    );
                  }),
                  Ze()
                    .then(function (e) {
                      Se(function (n) {
                        return Object(l.a)(
                          Object(l.a)({}, n),
                          {},
                          {
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            txHash: e
                          }
                        );
                      });
                    })
                    .catch(function (e) {
                      Se(function (n) {
                        return Object(l.a)(
                          Object(l.a)({}, n),
                          {},
                          {
                            attemptingTxn: !1,
                            swapErrorMessage: e.message,
                            txHash: void 0
                          }
                        );
                      });
                    })));
            },
            [Ke, Ze, Se]
          ),
          Je = Object(a.useState)(!1),
          Xe = Object(Ln.a)(Je, 2),
          $e = Xe[0],
          en = Xe[1],
          nn = Zf(Ke),
          tn =
            !ne &&
            (Me === Ff.NOT_APPROVED ||
              Me === Ff.PENDING ||
              (qe && Me === Ff.APPROVED)) &&
            !(nn > 3 && !_),
          rn = Object(a.useCallback)(
            function () {
              Se(function (e) {
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    showConfirm: !1
                  }
                );
              }),
                Ae && je(Cf.INPUT, "");
            },
            [je, Ae, Se]
          ),
          an = Object(a.useCallback)(
            function () {
              Se(function (e) {
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    tradeToConfirm: ue
                  }
                );
              });
            },
            [ue]
          ),
          on = Object(a.useCallback)(
            function (e, n) {
              "syrup" === e && (I(!0), N(n));
            },
            [I, N]
          ),
          cn = Object(a.useCallback)(
            function (e) {
              Ve(!1),
                fe(Cf.INPUT, e),
                "syrup" === e.symbol.toLowerCase() &&
                  on(e.symbol.toLowerCase(), "Selling");
            },
            [fe, Ve, on]
          ),
          sn = Object(a.useCallback)(
            function () {
              He && je(Cf.INPUT, He.toExact());
            },
            [He, je]
          ),
          un = Object(a.useCallback)(
            function (e) {
              fe(Cf.OUTPUT, e),
                "syrup" === e.symbol.toLowerCase() &&
                  on(e.symbol.toLowerCase(), "Buying");
            },
            [fe, on]
          );
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(km, {
              isOpen: R.length > 0 && !O,
              tokens: R,
              onConfirm: L
            }),
            Object(r.jsx)(Sm, {
              isOpen: T,
              transactionType: S,
              onConfirm: U
            }),
            Object(r.jsx)(Eu, {}),
            Object(r.jsx)(hj, {
              children: Object(r.jsxs)(Vp, {
                id: "swap-page",
                children: [
                  Object(r.jsx)(sm, {
                    isOpen: ke,
                    trade: ue,
                    originalTrade: Te,
                    onAcceptChanges: an,
                    attemptingTxn: Ee,
                    txHash: Ae,
                    recipient: Z,
                    allowedSlippage: q,
                    onConfirm: Ge,
                    swapErrorMessage: Ie,
                    onDismiss: rn
                  }),
                  Object(r.jsx)(Eh, {
                    title: "Exchange",
                    description: "Trade tokens in an instant"
                  }),
                  Object(r.jsxs)(ce, {
                    children: [
                      Object(r.jsxs)(Jo, {
                        gap: "md",
                        children: [
                          Object(r.jsx)(bp, {
                            label:
                              H === Cf.OUTPUT && !oe && ue
                                ? "From (estimated)"
                                : gu(76, "From"),
                            value: Ne[Cf.INPUT],
                            showMaxButton: !Ye,
                            currency: ee[Cf.INPUT],
                            onUserInput: xe,
                            onMax: sn,
                            onCurrencySelect: cn,
                            otherCurrency: ee[Cf.OUTPUT],
                            id: "swap-currency-input"
                          }),
                          Object(r.jsx)(Jo, {
                            justify: "space-between",
                            children: Object(r.jsxs)(Wc, {
                              justify: _ ? "space-between" : "center",
                              style: {
                                padding: "0 1rem"
                              },
                              children: [
                                Object(r.jsx)(Hp, {
                                  clickable: !0,
                                  children: Object(r.jsx)(Q, {
                                    variant: "tertiary",
                                    onClick: function () {
                                      Ve(!1), pe();
                                    },
                                    style: {
                                      borderRadius: "50%"
                                    },
                                    size: "sm",
                                    children: Object(r.jsx)(ze, {
                                      color: "primary",
                                      width: "24px"
                                    })
                                  })
                                }),
                                null === Z && !oe && _
                                  ? Object(r.jsx)(xc, {
                                      id: "add-recipient-button",
                                      onClick: function () {
                                        return he("");
                                      },
                                      children: "+ Add a send (optional)"
                                    })
                                  : null
                              ]
                            })
                          }),
                          Object(r.jsx)(bp, {
                            value: Ne[Cf.OUTPUT],
                            onUserInput: ye,
                            label:
                              H === Cf.INPUT && !oe && ue
                                ? "To (estimated)"
                                : gu(80, "To"),
                            showMaxButton: !1,
                            currency: ee[Cf.OUTPUT],
                            onCurrencySelect: un,
                            otherCurrency: ee[Cf.INPUT],
                            id: "swap-currency-output"
                          }),
                          null === Z || oe
                            ? null
                            : Object(r.jsxs)(r.Fragment, {
                                children: [
                                  Object(r.jsxs)(Wc, {
                                    justify: "space-between",
                                    style: {
                                      padding: "0 1rem"
                                    },
                                    children: [
                                      Object(r.jsx)(Hp, {
                                        clickable: !1,
                                        children: Object(r.jsx)(Lh.a, {
                                          size: "16",
                                          color: P.colors.textSubtle
                                        })
                                      }),
                                      Object(r.jsx)(xc, {
                                        id: "remove-recipient-button",
                                        onClick: function () {
                                          return he(null);
                                        },
                                        children: "- Remove send"
                                      })
                                    ]
                                  }),
                                  Object(r.jsx)(nm, {
                                    id: "recipient",
                                    value: Z,
                                    onChange: he
                                  })
                                ]
                              }),
                          oe
                            ? null
                            : Object(r.jsx)(Bs, {
                                padding: ".25rem .75rem 0 .75rem",
                                borderRadius: "20px",
                                children: Object(r.jsxs)(Jo, {
                                  gap: "4px",
                                  children: [
                                    Boolean(ue) &&
                                      Object(r.jsxs)(Hc, {
                                        align: "center",
                                        children: [
                                          Object(r.jsx)(tc.b, {
                                            fontSize: 14,
                                            children: "Price"
                                          }),
                                          Object(r.jsx)(mm, {
                                            price:
                                              null === ue || void 0 === ue
                                                ? void 0
                                                : ue.executionPrice,
                                            showInverted: $e,
                                            setShowInverted: en
                                          })
                                        ]
                                      }),
                                    q !== Xa &&
                                      Object(r.jsxs)(Hc, {
                                        align: "center",
                                        children: [
                                          Object(r.jsx)(g, {
                                            fontSize: "14px",
                                            children: "Slippage Tolerance"
                                          }),
                                          Object(r.jsxs)(g, {
                                            fontSize: "14px",
                                            children: [q / 100, "%"]
                                          })
                                        ]
                                      })
                                  ]
                                })
                              })
                        ]
                      }),
                      Object(r.jsxs)(Wp, {
                        children: [
                          B
                            ? oe
                              ? Object(r.jsx)(W, {
                                  disabled: Boolean(ie),
                                  onClick: ae,
                                  fullWidth: !0,
                                  children:
                                    null !== ie && void 0 !== ie
                                      ? ie
                                      : re === Mm.WRAP
                                      ? "Wrap"
                                      : re === Mm.UNWRAP
                                      ? "Unwrap"
                                      : null
                                })
                              : Ue && Le
                              ? Object(r.jsx)(Ms, {
                                  style: {
                                    textAlign: "center"
                                  },
                                  children: Object(r.jsx)(Ic, {
                                    mb: "4px",
                                    children:
                                      "Insufficient liquidity for this trade."
                                  })
                                })
                              : tn
                              ? Object(r.jsxs)(Hc, {
                                  children: [
                                    Object(r.jsx)(W, {
                                      onClick: _e,
                                      disabled: Me !== Ff.NOT_APPROVED || qe,
                                      style: {
                                        width: "48%"
                                      },
                                      variant:
                                        Me === Ff.APPROVED
                                          ? "success"
                                          : "primary",
                                      children:
                                        Me === Ff.PENDING
                                          ? Object(r.jsxs)(Wc, {
                                              gap: "6px",
                                              justify: "center",
                                              children: [
                                                "Approving ",
                                                Object(r.jsx)(Os, {
                                                  stroke: "white"
                                                })
                                              ]
                                            })
                                          : qe && Me === Ff.APPROVED
                                          ? "Approved"
                                          : "Approve " +
                                            (null === (f = ee[Cf.INPUT]) ||
                                            void 0 === f
                                              ? void 0
                                              : f.symbol)
                                    }),
                                    Object(r.jsx)(W, {
                                      onClick: function () {
                                        _
                                          ? Ge()
                                          : Se({
                                              tradeToConfirm: ue,
                                              attemptingTxn: !1,
                                              swapErrorMessage: void 0,
                                              showConfirm: !0,
                                              txHash: void 0
                                            });
                                      },
                                      style: {
                                        width: "48%"
                                      },
                                      id: "swap-button",
                                      disabled:
                                        !me ||
                                        Me !== Ff.APPROVED ||
                                        (nn > 3 && !_),
                                      variant:
                                        me && nn > 2 ? "danger" : "primary",
                                      children:
                                        nn > 3 && !_
                                          ? "Price Impact High"
                                          : "Swap".concat(
                                              nn > 2 ? " Anyway" : ""
                                            )
                                    })
                                  ]
                                })
                              : Object(r.jsx)(W, {
                                  onClick: function () {
                                    _
                                      ? Ge()
                                      : Se({
                                          tradeToConfirm: ue,
                                          attemptingTxn: !1,
                                          swapErrorMessage: void 0,
                                          showConfirm: !0,
                                          txHash: void 0
                                        });
                                  },
                                  id: "swap-button",
                                  disabled: !me || (nn > 3 && !_) || !!Qe,
                                  variant:
                                    me && nn > 2 && !Qe ? "danger" : "primary",
                                  fullWidth: !0,
                                  children:
                                    ne ||
                                    (nn > 3 && !_
                                      ? "Price Impact Too High"
                                      : "Swap".concat(nn > 2 ? " Anyway" : ""))
                                })
                            : Object(r.jsx)(Ej, {
                                fullWidth: !0
                              }),
                          tn &&
                            Object(r.jsx)(Vm, {
                              steps: [Me === Ff.APPROVED]
                            }),
                          _ && Ie
                            ? Object(r.jsx)(Xp, {
                                error: Ie
                              })
                            : null,
                          le &&
                            Object(r.jsx)(hm, {
                              version: le
                            })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            Object(r.jsx)(jm, {
              trade: ue
            })
          ]
        });
      };

      function Gm(e) {
        var n = e.location;
        return Object(r.jsx)(Bo.a, {
          to: Object(l.a)(
            Object(l.a)({}, n),
            {},
            {
              pathname: "/swap"
            }
          )
        });
      }

      function Jm(e) {
        var n = e.location.search,
          t = e.match.params.outputCurrency;
        return Object(r.jsx)(Bo.a, {
          to: Object(l.a)(
            Object(l.a)({}, e.location),
            {},
            {
              pathname: "/swap",
              search:
                n && n.length > 1
                  ? "".concat(n, "&outputCurrency=").concat(t)
                  : "?outputCurrency=".concat(t)
            }
          )
        });
      }
      var Xm = {
          code: "en",
          language: "English"
        },
        $m = [Xm],
        ev = {
          selectedLanguage: {
            code: "",
            language: ""
          },
          setSelectedLanguage: function () {},
          translatedLanguage: {
            code: "",
            language: ""
          },
          setTranslatedLanguage: function () {}
        },
        nv = Object(a.createContext)(ev),
        tv = "IS_DARK",
        rv = i.a.createContext({
          isDark: !1,
          toggleTheme: function () {}
        }),
        av = function (e) {
          var n = e.children,
            t = Object(a.useState)(function () {
              var e = localStorage.getItem(tv);
              return !!e && JSON.parse(e);
            }),
            i = Object(Ln.a)(t, 2),
            o = i[0],
            c = i[1];
          return Object(r.jsx)(rv.Provider, {
            value: {
              isDark: o,
              toggleTheme: function () {
                c(function (e) {
                  return localStorage.setItem(tv, JSON.stringify(!e)), !e;
                });
              }
            },
            children: Object(r.jsx)(u.ThemeProvider, {
              theme: o ? No : Ro,
              children: n
            })
          });
        },
        iv = function () {
          var e = Object(a.useContext)(rv);
          return {
            isDark: e.isDark,
            toggleTheme: e.toggleTheme,
            theme: Object(a.useContext)(u.ThemeContext)
          };
        },
        ov = "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        cv = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        sv = "0x804678fa97d91b974ec2af3c843270886528a9e6",
        uv = function () {
          var e = Object(a.useState)(0),
            n = Object(Ln.a)(e, 2),
            t = n[0],
            r = n[1],
            i = Ii();
          return (
            Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(pt.a)(
                    bt.a.mark(function e() {
                      var n, t, a, o, c, s, u, l, d, b, p, f, j;
                      return bt.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !i)) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (n = cv),
                                  (t = sv),
                                  (a = [
                                    [
                                      ov,
                                      Wr.encodeFunctionData("balanceOf", [t])
                                    ],
                                    [n, Wr.encodeFunctionData("balanceOf", [t])]
                                  ]),
                                  (e.next = 6),
                                  i.aggregate(a)
                                );
                              case 6:
                                (o = e.sent),
                                  (c = Object(Ln.a)(o, 2)),
                                  c[0],
                                  (s = c[1]),
                                  (u = s.map(function (e) {
                                    return Wr.decodeFunctionResult(
                                      "balanceOf",
                                      e
                                    );
                                  })),
                                  (l = Object(Ln.a)(u, 2)),
                                  (d = l[0]),
                                  (b = l[1]),
                                  (p = new jt.a(d)),
                                  (f = new jt.a(b)),
                                  (j = f.div(p).toNumber()),
                                  r(j);
                              case 15:
                                e.next = 20;
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Unable to fetch price data:",
                                    e.t0
                                  );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [i]
            ),
            t
          );
        },
        lv = [
          {
            label: "Exchange",
            href: "/swap"
          },
          {
            label: "Liquidity",
            href: "/pool"
          }
        ],
        dv = function () {
          var e = Object(vi.c)(),
            n = e.account,
            t = e.activate,
            i = e.deactivate,
            o = Object(a.useContext)(nv),
            c = o.selectedLanguage,
            s = o.setSelectedLanguage,
            u = iv(),
            l = u.isDark,
            d = u.toggleTheme,
            b = uv();
          return Object(r.jsx)(Ji, {
            links: lv,
            account: n,
            login: function (e) {
              return t("walletconnect" === e ? Ma : Pa);
            },
            logout: i,
            isDark: l,
            toggleTheme: d,
            currentLang: (null === c || void 0 === c ? void 0 : c.code) || "",
            langs: $m,
            setLang: s,
            cakePriceUsd: b
          });
        },
        bv = function () {
          var e = Ni() || 0;
          var n =
            Number.isNaN(e) || 0 === e
              ? ""
              : "$".concat(
                  e
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                  " - "
                );
          Object(a.useEffect)(
            function () {
              document.title = "".concat(n, "BaseDex");
            },
            [n]
          );
        };

      function pv() {
        var e = Object(s.a)(["\n  margin-top: 5rem;\n"]);
        return (
          (pv = function () {
            return e;
          }),
          e
        );
      }

      function fv() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  min-height: calc(100vh - 152px);\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n\n  background-image: url('/static/media/static/media/bg.bfd323f2.png');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: contain;\n"
        ]);
        return (
          (fv = function () {
            return e;
          }),
          e
        );
      }

      function jv() {
        var e = Object(s.a)([
          "\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"
        ]);
        return (
          (jv = function () {
            return e;
          }),
          e
        );
      }
      var hv = u.default.div(jv()),
        mv = u.default.div(fv()),
        vv = u.default.div(pv());

      function xv() {
        var e = Object(a.useState)(void 0),
          n = Object(Ln.a)(e, 2),
          t = n[0],
          i = n[1],
          o = Object(a.useState)(void 0),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          u = c[1],
          l = Object(a.useState)([]),
          d = Object(Ln.a)(l, 2),
          b = d[0],
          p = d[1],
          f = "".concat(
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: ".",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_CHAIN_ID: "56",
              REACT_APP_GTAG: "GTM-TLF66T4",
              REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io"
            }).REACT_APP_CROWDIN_APIKEY
          ),
          j = parseInt(
            "".concat(
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: ".",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_CHAIN_ID: "56",
                REACT_APP_GTAG: "GTM-TLF66T4",
                REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io"
              }).REACT_APP_CROWDIN_PROJECTID
            )
          ),
          h = {
            token: f
          },
          m = new Po.StringTranslations(h);
        Object(a.useEffect)(function () {
          var e = localStorage.getItem("pancakeSwapLanguage");
          if (e) {
            var n = (function (e) {
              return $m.filter(function (n) {
                return n.code === e;
              })[0];
            })(e);
            i(n);
          } else i(Xm);
        }, []);
        var v = (function () {
          var e = Object(pt.a)(
            bt.a.mark(function e() {
              return bt.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      m.listLanguageTranslations(j, t.code, void 0, 6, 200)
                        .then(function (e) {
                          e.data.length < 1 ? p(["error"]) : p(e.data);
                        })
                        .then(function () {
                          return u(t);
                        })
                        .catch(function (e) {
                          p(["error"]), console.error(e);
                        });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return (
          Object(a.useEffect)(
            function () {
              t && v();
            },
            [t]
          ),
          bv(),
          Object(r.jsx)(a.Suspense, {
            fallback: null,
            children: Object(r.jsx)(qn.a, {
              children: Object(r.jsx)(hv, {
                children: Object(r.jsx)(nv.Provider, {
                  value: {
                    selectedLanguage: t,
                    setSelectedLanguage: i,
                    translatedLanguage: s,
                    setTranslatedLanguage: u
                  },
                  children: Object(r.jsxs)(xu.Provider, {
                    value: {
                      translations: b,
                      setTranslations: p
                    },
                    children: [
                      Object(r.jsx)(dv, {}),
                      Object(r.jsxs)(mv, {
                        children: [
                          Object(r.jsx)(js, {}),
                          Object(r.jsx)(Ts, {
                            children: Object(r.jsxs)(Bo.d, {
                              children: [
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/swap",
                                  component: Km
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/swap/:outputCurrency",
                                  component: Jm
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/send",
                                  component: Gm
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/find",
                                  component: Sh
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/pool",
                                  component: Ah
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/create",
                                  component: Sj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  path: "/add",
                                  component: Aj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  path: "/add/:currencyIdA",
                                  component: Rj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  path: "/add/:currencyIdA/:currencyIdB",
                                  component: Lj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/remove/v1/:address",
                                  component: Xj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/remove/:tokens",
                                  component: Wh
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/remove/:currencyIdA/:currencyIdB",
                                  component: Hh
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/migrate/v1",
                                  component: Pj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  exact: !0,
                                  strict: !0,
                                  path: "/migrate/v1/:address",
                                  component: Wj
                                }),
                                Object(r.jsx)(Bo.b, {
                                  component: Gm
                                })
                              ]
                            })
                          }),
                          Object(r.jsx)(vv, {})
                        ]
                      })
                    ]
                  })
                })
              })
            })
          })
        );
      }
      var yv = "visibilityState" in document;

      function Ov() {
        return !yv || "hidden" !== document.visibilityState;
      }

      function gv() {
        var e = Object(a.useState)(Ov()),
          n = Object(Ln.a)(e, 2),
          t = n[0],
          r = n[1],
          i = Object(a.useCallback)(
            function () {
              r(Ov());
            },
            [r]
          );
        return (
          Object(a.useEffect)(
            function () {
              if (yv)
                return (
                  document.addEventListener("visibilitychange", i),
                  function () {
                    document.removeEventListener("visibilitychange", i);
                  }
                );
            },
            [i]
          ),
          t
        );
      }

      function Cv() {
        var e = yi(),
          n = e.library,
          t = e.chainId,
          r = Object(Vo.c)(),
          i = gv(),
          o = Object(a.useState)({
            chainId: t,
            blockNumber: null
          }),
          c = Object(Ln.a)(o, 2),
          s = c[0],
          u = c[1],
          l = Object(a.useCallback)(
            function (e) {
              u(function (n) {
                return t === n.chainId
                  ? "number" !== typeof n.blockNumber
                    ? {
                        chainId: t,
                        blockNumber: e
                      }
                    : {
                        chainId: t,
                        blockNumber: Math.max(e, n.blockNumber)
                      }
                  : n;
              });
            },
            [t, u]
          );
        Object(a.useEffect)(
          function () {
            if (n && t && i)
              return (
                u({
                  chainId: t,
                  blockNumber: null
                }),
                n
                  .getBlockNumber()
                  .then(l)
                  .catch(function (e) {
                    return console.error(
                      "Failed to get block number for chainId: ".concat(t),
                      e
                    );
                  }),
                n.on("block", l),
                function () {
                  n.removeListener("block", l);
                }
              );
          },
          [r, t, n, l, i]
        );
        var d = Xf(s, 100);
        return (
          Object(a.useEffect)(
            function () {
              d.chainId &&
                d.blockNumber &&
                i &&
                r(
                  _o({
                    chainId: d.chainId,
                    blockNumber: d.blockNumber
                  })
                );
            },
            [i, r, d.blockNumber, d.chainId]
          ),
          null
        );
      }

      function wv() {
        var e = yi().library,
          n = Object(Vo.c)(),
          t = Object(Vo.d)(function (e) {
            return e.lists.byUrl;
          }),
          r = gv(),
          i = Ib();
        return (
          rd(
            Object(a.useCallback)(
              function () {
                r &&
                  Object.keys(t).forEach(function (e) {
                    return i(e).catch(function (e) {
                      return console.debug("interval list fetching error", e);
                    });
                  });
              },
              [i, r, t]
            ),
            e ? 6e5 : null
          ),
          Object(a.useEffect)(
            function () {
              Object.keys(t).forEach(function (e) {
                var n = t[e];
                n.current ||
                  n.loadingRequestId ||
                  n.error ||
                  i(e).catch(function (e) {
                    return console.debug("list added fetching error", e);
                  });
              });
            },
            [n, i, e, t]
          ),
          Object(a.useEffect)(
            function () {
              Object.keys(t).forEach(function (e) {
                var r = t[e];
                if (r.current && r.pendingUpdate) {
                  var a = Object(nc.c)(
                    r.current.version,
                    r.pendingUpdate.version
                  );
                  switch (a) {
                    case nc.a.NONE:
                      throw new Error("unexpected no version bump");
                    case nc.a.PATCH:
                    case nc.a.MINOR:
                      a >=
                      Object(nc.d)(r.current.tokens, r.pendingUpdate.tokens)
                        ? (n(ac(e)),
                          n(
                            zo({
                              key: e,
                              content: {
                                listUpdate: {
                                  listUrl: e,
                                  oldList: r.current,
                                  newList: r.pendingUpdate,
                                  auto: !0
                                }
                              }
                            })
                          ))
                        : console.error(
                            "List at url ".concat(
                              e,
                              " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
                            )
                          );
                      break;
                    case nc.a.MAJOR:
                      n(
                        zo({
                          key: e,
                          content: {
                            listUpdate: {
                              listUrl: e,
                              auto: !1,
                              oldList: r.current,
                              newList: r.pendingUpdate
                            }
                          },
                          removeAfterMs: null
                        })
                      );
                  }
                }
              });
            },
            [n, t]
          ),
          null
        );
      }

      function kv(e, n) {
        return (
          (t = e + Math.round(Math.random() * Math.max(0, n - e))),
          new Promise(function (e) {
            return setTimeout(e, t);
          })
        );
        var t;
      }
      var Tv = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t() {
            return Object(la.a)(this, t), n.call(this, "Cancelled");
          }
          return t;
        })(Object(va.a)(Error)),
        Iv = (function (e) {
          Object(ba.a)(t, e);
          var n = Object(pa.a)(t);

          function t() {
            return Object(la.a)(this, t), n.apply(this, arguments);
          }
          return t;
        })(Object(va.a)(Error));

      function Ev() {
        return (Ev = Object(pt.a)(
          bt.a.mark(function e(n, t, r) {
            var a, i, o, c;
            return bt.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.debug("Fetching chunk", n, t, r),
                        (e.prev = 1),
                        (e.next = 5),
                        n.aggregate(
                          t.map(function (e) {
                            return [e.address, e.callData];
                          })
                        )
                      );
                    case 5:
                      (o = e.sent),
                        (c = Object(Ln.a)(o, 2)),
                        (a = c[0]),
                        (i = c[1]),
                        (e.next = 15);
                      break;
                    case 11:
                      throw (
                        ((e.prev = 11),
                        (e.t0 = e.catch(1)),
                        console.debug(
                          "Failed to fetch chunk inside retry",
                          e.t0
                        ),
                        e.t0)
                      );
                    case 15:
                      if (!(a.toNumber() < r)) {
                        e.next = 18;
                        break;
                      }
                      throw (
                        (console.debug(
                          "Fetched results for old block number: "
                            .concat(a.toString(), " vs. ")
                            .concat(r)
                        ),
                        new Iv("Fetched for old block number"))
                      );
                    case 18:
                      return e.abrupt("return", {
                        results: i,
                        blockNumber: a.toNumber()
                      });
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 11]]
            );
          })
        )).apply(this, arguments);
      }

      function Av() {
        var e = Object(Vo.c)(),
          n = Object(Vo.d)(function (e) {
            return e.multicall;
          }),
          t = Xf(n.callListeners, 100),
          r = Ho(),
          i = yi().chainId,
          o = Ii(),
          c = Object(a.useRef)(),
          s = Object(a.useMemo)(
            function () {
              return (function (e, n) {
                if (!e || !n) return {};
                var t = e[n];
                return t
                  ? Object.keys(t).reduce(function (e, n) {
                      var r = t[n];
                      return (
                        (e[n] = Object.keys(r)
                          .filter(function (e) {
                            var n = parseInt(e);
                            return !(n <= 0) && r[n] > 0;
                          })
                          .reduce(function (e, n) {
                            return Math.min(e, parseInt(n));
                          }, 1 / 0)),
                        e
                      );
                    }, {})
                  : {};
              })(t, i);
            },
            [t, i]
          ),
          u = Object(a.useMemo)(
            function () {
              return (function (e, n, t, r) {
                return t && r
                  ? e[t]
                    ? Object.keys(n).filter(function (a) {
                        var i = n[a],
                          o = e[t][a];
                        if (!o) return !0;
                        var c = r - (i - 1);
                        return (
                          !(
                            o.fetchingBlockNumber && o.fetchingBlockNumber >= c
                          ) &&
                          (!o.blockNumber || o.blockNumber < c)
                        );
                      })
                    : Object.keys(n)
                  : [];
              })(n.callResults, s, i, r);
            },
            [i, n.callResults, s, r]
          ),
          l = Object(a.useMemo)(
            function () {
              return JSON.stringify(u.sort());
            },
            [u]
          );
        return (
          Object(a.useEffect)(
            function () {
              var n;
              if (r && i && o) {
                var t = JSON.parse(l);
                if (0 !== t.length) {
                  var a,
                    s,
                    u = t.map(function (e) {
                      return Du(e);
                    }),
                    d = (function (e, n) {
                      if (n < 1) throw new Error("maxChunkSize must be gte 1");
                      if (e.length <= n) return [e];
                      var t = Math.ceil(e.length / n),
                        r = Math.ceil(e.length / t);
                      return Object(aa.a)(Array(t).keys()).map(function (n) {
                        return e.slice(n * r, n * r + r);
                      });
                    })(u, 500);
                  if (
                    (null === (n = c.current) || void 0 === n
                      ? void 0
                      : n.blockNumber) !== r
                  )
                    null === (a = c.current) ||
                      void 0 === a ||
                      null === (s = a.cancellations) ||
                      void 0 === s ||
                      s.forEach(function (e) {
                        return e();
                      });
                  e(
                    qu({
                      calls: u,
                      chainId: i,
                      fetchingBlockNumber: r
                    })
                  ),
                    (c.current = {
                      blockNumber: r,
                      cancellations: d.map(function (n, a) {
                        var s = (function (e, n) {
                            var t,
                              r = n.n,
                              a = n.minWait,
                              i = n.maxWait,
                              o = !1;
                            return {
                              promise: new Promise(
                                (function () {
                                  var n = Object(pt.a)(
                                    bt.a.mark(function n(c, s) {
                                      var u;
                                      return bt.a.wrap(
                                        function (n) {
                                          for (;;)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                t = s;
                                              case 1:
                                                return (
                                                  (u = void 0),
                                                  (n.prev = 3),
                                                  (n.next = 6),
                                                  e()
                                                );
                                              case 6:
                                                return (
                                                  (u = n.sent),
                                                  o || (c(u), (o = !0)),
                                                  n.abrupt("break", 24)
                                                );
                                              case 11:
                                                if (
                                                  ((n.prev = 11),
                                                  (n.t0 = n.catch(3)),
                                                  !o)
                                                ) {
                                                  n.next = 15;
                                                  break;
                                                }
                                                return n.abrupt("break", 24);
                                              case 15:
                                                if (
                                                  !(r <= 0) &&
                                                  n.t0 instanceof Iv
                                                ) {
                                                  n.next = 19;
                                                  break;
                                                }
                                                return (
                                                  s(n.t0),
                                                  (o = !0),
                                                  n.abrupt("break", 24)
                                                );
                                              case 19:
                                                r--;
                                              case 20:
                                                return (n.next = 22), kv(a, i);
                                              case 22:
                                                n.next = 1;
                                                break;
                                              case 24:
                                              case "end":
                                                return n.stop();
                                            }
                                        },
                                        n,
                                        null,
                                        [[3, 11]]
                                      );
                                    })
                                  );
                                  return function (e, t) {
                                    return n.apply(this, arguments);
                                  };
                                })()
                              ),
                              cancel: function () {
                                o || ((o = !0), t(new Tv()));
                              }
                            };
                          })(
                            function () {
                              return (function (e, n, t) {
                                return Ev.apply(this, arguments);
                              })(o, n, r);
                            },
                            {
                              n: 1 / 0,
                              minWait: 2500,
                              maxWait: 3500
                            }
                          ),
                          u = s.cancel;
                        return (
                          s.promise
                            .then(function (o) {
                              var s = o.results,
                                u = o.blockNumber;
                              c.current = {
                                cancellations: [],
                                blockNumber: r
                              };
                              var l = d.slice(0, a).reduce(function (e, n) {
                                  return e + n.length;
                                }, 0),
                                b = l + s.length;
                              e(
                                Hu({
                                  chainId: i,
                                  results: t
                                    .slice(l, b)
                                    .reduce(function (e, n, t) {
                                      var r;
                                      return (
                                        (e[n] =
                                          null !== (r = s[t]) && void 0 !== r
                                            ? r
                                            : null),
                                        e
                                      );
                                    }, {}),
                                  blockNumber: u
                                })
                              ),
                                console.log(
                                  "Success to fetch multicall chunk",
                                  n,
                                  i
                                );
                            })
                            .catch(function (t) {
                              t instanceof Tv
                                ? console.debug(
                                    "Cancelled fetch for blockNumber",
                                    r
                                  )
                                : (console.error(
                                    "Failed to fetch multicall chunk",
                                    n,
                                    i,
                                    t
                                  ),
                                  e(
                                    Vu({
                                      calls: n,
                                      chainId: i,
                                      fetchingBlockNumber: r
                                    })
                                  ));
                            }),
                          u
                        );
                      })
                    });
                }
              }
            },
            [i, o, e, l, r]
          ),
          null
        );
      }

      function Sv() {
        var e,
          n = yi(),
          t = n.chainId,
          r = n.library,
          i = Ho(),
          o = Object(Vo.c)(),
          c = Object(Vo.d)(function (e) {
            return e.transactions;
          }),
          s = t && null !== (e = c[t]) && void 0 !== e ? e : {},
          u = (function () {
            var e = Object(Vo.c)();
            return Object(a.useCallback)(
              function (n, t) {
                e(
                  zo({
                    content: n,
                    key: t
                  })
                );
              },
              [e]
            );
          })();
        return (
          Object(a.useEffect)(
            function () {
              t &&
                r &&
                i &&
                Object.keys(s)
                  .filter(function (e) {
                    return (function (e, n) {
                      if (n.receipt) return !1;
                      if (!n.lastCheckedBlockNumber) return !0;
                      var t = e - n.lastCheckedBlockNumber;
                      if (t < 1) return !1;
                      var r = (new Date().getTime() - n.addedTime) / 1e3 / 60;
                      return r > 60 ? t > 9 : !(r > 5) || t > 2;
                    })(i, s[e]);
                  })
                  .forEach(function (e) {
                    r.getTransactionReceipt(e)
                      .then(function (n) {
                        var r;
                        n
                          ? (o(
                              Uf({
                                chainId: t,
                                hash: e,
                                receipt: {
                                  blockHash: n.blockHash,
                                  blockNumber: n.blockNumber,
                                  contractAddress: n.contractAddress,
                                  from: n.from,
                                  status: n.status,
                                  to: n.to,
                                  transactionHash: n.transactionHash,
                                  transactionIndex: n.transactionIndex
                                }
                              })
                            ),
                            u(
                              {
                                txn: {
                                  hash: e,
                                  success: 1 === n.status,
                                  summary:
                                    null === (r = s[e]) || void 0 === r
                                      ? void 0
                                      : r.summary
                                }
                              },
                              e
                            ))
                          : o(
                              Bf({
                                chainId: t,
                                hash: e,
                                blockNumber: i
                              })
                            );
                      })
                      .catch(function (n) {
                        console.error(
                          "failed to check transaction hash: ".concat(e),
                          n
                        );
                      });
                  });
            },
            [t, r, s, i, o, u]
          ),
          null
        );
      }
      var Nv = t(184),
        Rv = Object(Mo.c)(
          {
            blockNumber: {},
            popupList: [],
            walletModalOpen: !1,
            settingsMenuOpen: !1
          },
          function (e) {
            return e
              .addCase(_o, function (e, n) {
                var t = n.payload,
                  r = t.chainId,
                  a = t.blockNumber;
                "number" !== typeof e.blockNumber[r]
                  ? (e.blockNumber[r] = a)
                  : (e.blockNumber[r] = Math.max(a, e.blockNumber[r]));
              })
              .addCase(Do, function (e) {
                e.walletModalOpen = !e.walletModalOpen;
              })
              .addCase(Fo, function (e) {
                e.settingsMenuOpen = !e.settingsMenuOpen;
              })
              .addCase(zo, function (e, n) {
                var t = n.payload,
                  r = t.content,
                  a = t.key,
                  i = t.removeAfterMs,
                  o = void 0 === i ? 15e3 : i;
                e.popupList = (
                  a
                    ? e.popupList.filter(function (e) {
                        return e.key !== a;
                      })
                    : e.popupList
                ).concat([
                  {
                    key: a || Object(Mo.e)(),
                    show: !0,
                    content: r,
                    removeAfterMs: o
                  }
                ]);
              })
              .addCase(qo, function (e, n) {
                var t = n.payload.key;
                e.popupList.forEach(function (e) {
                  e.key === t && (e.show = !1);
                });
              });
          }
        ),
        Lv = Object(Mo.b)("global/updateVersion"),
        Uv = function () {
          return new Date().getTime();
        };

      function Bv(e, n) {
        return "".concat(e, ";").concat(n);
      }
      var Pv,
        Mv = {
          userDarkMode: null,
          matchesDarkMode: !1,
          userExpertMode: !1,
          userSlippageTolerance: Xa,
          userDeadline: $a,
          tokens: {},
          pairs: {},
          timestamp: Uv(),
          audioPlay: !0
        },
        _v = Object(Mo.c)(Mv, function (e) {
          return e
            .addCase(Lv, function (e) {
              "number" !== typeof e.userSlippageTolerance &&
                (e.userSlippageTolerance = Xa),
                "number" !== typeof e.userDeadline && (e.userDeadline = $a),
                (e.lastUpdateVersionTimestamp = Uv());
            })
            .addCase(il, function (e, n) {
              (e.userDarkMode = n.payload.userDarkMode), (e.timestamp = Uv());
            })
            .addCase(al, function (e, n) {
              (e.matchesDarkMode = n.payload.matchesDarkMode),
                (e.timestamp = Uv());
            })
            .addCase(ol, function (e, n) {
              (e.userExpertMode = n.payload.userExpertMode),
                (e.timestamp = Uv());
            })
            .addCase(cl, function (e, n) {
              (e.userSlippageTolerance = n.payload.userSlippageTolerance),
                (e.timestamp = Uv());
            })
            .addCase(sl, function (e, n) {
              (e.userDeadline = n.payload.userDeadline), (e.timestamp = Uv());
            })
            .addCase(ul, function (e, n) {
              var t = n.payload.serializedToken;
              (e.tokens[t.chainId] = e.tokens[t.chainId] || {}),
                (e.tokens[t.chainId][t.address] = t),
                (e.timestamp = Uv());
            })
            .addCase(ll, function (e, n) {
              var t = n.payload,
                r = t.address,
                a = t.chainId;
              (e.tokens[a] = e.tokens[a] || {}),
                delete e.tokens[a][r],
                (e.timestamp = Uv());
            })
            .addCase(dl, function (e, n) {
              var t = n.payload.serializedPair;
              if (
                t.token0.chainId === t.token1.chainId &&
                t.token0.address !== t.token1.address
              ) {
                var r = t.token0.chainId;
                (e.pairs[r] = e.pairs[r] || {}),
                  (e.pairs[r][Bv(t.token0.address, t.token1.address)] = t);
              }
              e.timestamp = Uv();
            })
            .addCase(bl, function (e, n) {
              var t = n.payload,
                r = t.chainId,
                a = t.tokenAAddress,
                i = t.tokenBAddress;
              e.pairs[r] &&
                (delete e.pairs[r][Bv(a, i)], delete e.pairs[r][Bv(i, a)]),
                (e.timestamp = Uv());
            })
            .addCase(pl, function (e) {
              e.audioPlay = !1;
            })
            .addCase(fl, function (e) {
              e.audioPlay = !0;
            });
        }),
        Dv = function () {
          return new Date().getTime();
        },
        Fv = Object(Mo.c)({}, function (e) {
          return e
            .addCase(Rf, function (e, n) {
              var t,
                r,
                a = n.payload,
                i = a.chainId,
                o = a.from,
                c = a.hash,
                s = a.approval,
                u = a.summary;
              if (null === (t = e[i]) || void 0 === t ? void 0 : t[c])
                throw Error("Attempted to add existing transaction.");
              var l = null !== (r = e[i]) && void 0 !== r ? r : {};
              (l[c] = {
                hash: c,
                approval: s,
                summary: u,
                from: o,
                addedTime: Dv()
              }),
                (e[i] = l);
            })
            .addCase(Lf, function (e, n) {
              var t = n.payload.chainId;
              e[t] && (e[t] = {});
            })
            .addCase(Bf, function (e, n) {
              var t,
                r = n.payload,
                a = r.chainId,
                i = r.hash,
                o = r.blockNumber,
                c = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
              c &&
                (c.lastCheckedBlockNumber
                  ? (c.lastCheckedBlockNumber = Math.max(
                      o,
                      c.lastCheckedBlockNumber
                    ))
                  : (c.lastCheckedBlockNumber = o));
            })
            .addCase(Uf, function (e, n) {
              var t,
                r = n.payload,
                a = r.hash,
                i = r.chainId,
                o = r.receipt,
                c = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
              c && ((c.receipt = o), (c.confirmedTime = Dv()));
            });
        }),
        zv =
          ((Pv = {
            independentField: Cf.INPUT,
            typedValue: ""
          }),
          Object(ge.a)(Pv, Cf.INPUT, {
            currencyId: ""
          }),
          Object(ge.a)(Pv, Cf.OUTPUT, {
            currencyId: ""
          }),
          Object(ge.a)(Pv, "recipient", null),
          Pv),
        qv = Object(Mo.c)(zv, function (e) {
          return e
            .addCase(Sf, function (e, n) {
              var t,
                r = n.payload,
                a = r.typedValue,
                i = r.recipient,
                o = r.field,
                c = r.inputCurrencyId,
                s = r.outputCurrencyId;
              return (
                (t = {}),
                Object(ge.a)(t, Cf.INPUT, {
                  currencyId: c
                }),
                Object(ge.a)(t, Cf.OUTPUT, {
                  currencyId: s
                }),
                Object(ge.a)(t, "independentField", o),
                Object(ge.a)(t, "typedValue", a),
                Object(ge.a)(t, "recipient", i),
                t
              );
            })
            .addCase(If, function (e, n) {
              var t,
                r = n.payload,
                a = r.currencyId,
                i = r.field,
                o = i === Cf.INPUT ? Cf.OUTPUT : Cf.INPUT;
              return a === e[o].currencyId
                ? Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    ((t = {
                      independentField:
                        e.independentField === Cf.INPUT ? Cf.OUTPUT : Cf.INPUT
                    }),
                    Object(ge.a)(t, i, {
                      currencyId: a
                    }),
                    Object(ge.a)(t, o, {
                      currencyId: e[i].currencyId
                    }),
                    t)
                  )
                : Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    Object(ge.a)({}, i, {
                      currencyId: a
                    })
                  );
            })
            .addCase(Ef, function (e) {
              var n;
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                ((n = {
                  independentField:
                    e.independentField === Cf.INPUT ? Cf.OUTPUT : Cf.INPUT
                }),
                Object(ge.a)(n, Cf.INPUT, {
                  currencyId: e[Cf.OUTPUT].currencyId
                }),
                Object(ge.a)(n, Cf.OUTPUT, {
                  currencyId: e[Cf.INPUT].currencyId
                }),
                n)
              );
            })
            .addCase(Af, function (e, n) {
              var t = n.payload,
                r = t.field,
                a = t.typedValue;
              return (
                console.log(a),
                Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    independentField: r,
                    typedValue: a
                  }
                )
              );
            })
            .addCase(Nf, function (e, n) {
              var t = n.payload.recipient;
              e.recipient = t;
            });
        }),
        Vv = {
          independentField: zf.CURRENCY_A,
          typedValue: "",
          otherTypedValue: ""
        },
        Hv = Object(Mo.c)(Vv, function (e) {
          return e
            .addCase(Jf, function () {
              return Vv;
            })
            .addCase(Gf, function (e, n) {
              var t = n.payload,
                r = t.field,
                a = t.typedValue;
              return t.noLiquidity
                ? r === e.independentField
                  ? Object(l.a)(
                      Object(l.a)({}, e),
                      {},
                      {
                        independentField: r,
                        typedValue: a
                      }
                    )
                  : Object(l.a)(
                      Object(l.a)({}, e),
                      {},
                      {
                        independentField: r,
                        typedValue: a,
                        otherTypedValue: e.typedValue
                      }
                    )
                : Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    {
                      independentField: r,
                      typedValue: a,
                      otherTypedValue: ""
                    }
                  );
            });
        }),
        Yv = {
          error: null,
          current: null,
          loadingRequestId: null,
          pendingUpdate: null
        },
        Wv = {
          lastInitializedDefaultListOfLists: hb,
          byUrl: Object(l.a)(
            Object(l.a)(
              {},
              hb.reduce(function (e, n) {
                return (e[n] = Yv), e;
              }, {})
            ),
            {},
            Object(ge.a)({}, jb, {
              error: null,
              current: mb,
              loadingRequestId: null,
              pendingUpdate: null
            })
          ),
          selectedListUrl: jb
        },
        Zv = Object(Mo.c)(Wv, function (e) {
          return e
            .addCase(rc.pending, function (e, n) {
              var t = n.payload,
                r = t.requestId,
                a = t.url;
              e.byUrl[a] = Object(l.a)(
                Object(l.a)(
                  {
                    current: null,
                    pendingUpdate: null
                  },
                  e.byUrl[a]
                ),
                {},
                {
                  loadingRequestId: r,
                  error: null
                }
              );
            })
            .addCase(rc.fulfilled, function (e, n) {
              var t,
                r,
                a = n.payload,
                i = a.requestId,
                o = a.tokenList,
                c = a.url,
                s =
                  null === (t = e.byUrl[c]) || void 0 === t
                    ? void 0
                    : t.current,
                u =
                  null === (r = e.byUrl[c]) || void 0 === r
                    ? void 0
                    : r.loadingRequestId;
              if (s) {
                if (Object(nc.c)(s.version, o.version) === nc.a.NONE) return;
                (null !== u && u !== i) ||
                  (e.byUrl[c] = Object(l.a)(
                    Object(l.a)({}, e.byUrl[c]),
                    {},
                    {
                      loadingRequestId: null,
                      error: null,
                      current: s,
                      pendingUpdate: o
                    }
                  ));
              } else
                e.byUrl[c] = Object(l.a)(
                  Object(l.a)({}, e.byUrl[c]),
                  {},
                  {
                    loadingRequestId: null,
                    error: null,
                    current: o,
                    pendingUpdate: null
                  }
                );
            })
            .addCase(rc.rejected, function (e, n) {
              var t,
                r = n.payload,
                a = r.url,
                i = r.requestId,
                o = r.errorMessage;
              (null === (t = e.byUrl[a]) || void 0 === t
                ? void 0
                : t.loadingRequestId) === i &&
                (e.byUrl[a] = Object(l.a)(
                  Object(l.a)({}, e.byUrl[a]),
                  {},
                  {
                    loadingRequestId: null,
                    error: o,
                    current: null,
                    pendingUpdate: null
                  }
                ));
            })
            .addCase(cc, function (e, n) {
              var t = n.payload;
              (e.selectedListUrl = t), e.byUrl[t] || (e.byUrl[t] = Yv);
            })
            .addCase(ic, function (e, n) {
              var t = n.payload;
              e.byUrl[t] || (e.byUrl[t] = Yv);
            })
            .addCase(oc, function (e, n) {
              var t = n.payload;
              e.byUrl[t] && delete e.byUrl[t],
                e.selectedListUrl === t &&
                  (e.selectedListUrl = Object.keys(e.byUrl)[0]);
            })
            .addCase(ac, function (e, n) {
              var t,
                r = n.payload;
              if (
                !(null === (t = e.byUrl[r]) || void 0 === t
                  ? void 0
                  : t.pendingUpdate)
              )
                throw new Error(
                  "accept list update called without pending update"
                );
              e.byUrl[r] = Object(l.a)(
                Object(l.a)({}, e.byUrl[r]),
                {},
                {
                  pendingUpdate: null,
                  current: e.byUrl[r].pendingUpdate
                }
              );
            })
            .addCase(Lv, function (e) {
              if (e.lastInitializedDefaultListOfLists) {
                if (e.lastInitializedDefaultListOfLists) {
                  var n = e.lastInitializedDefaultListOfLists.reduce(function (
                      e,
                      n
                    ) {
                      return e.add(n);
                    },
                    new Set()),
                    t = hb.reduce(function (e, n) {
                      return e.add(n);
                    }, new Set());
                  hb.forEach(function (t) {
                    n.has(t) || (e.byUrl[t] = Yv);
                  }),
                    e.lastInitializedDefaultListOfLists.forEach(function (n) {
                      t.has(n) || delete e.byUrl[n];
                    });
                }
              } else (e.byUrl = Wv.byUrl), (e.selectedListUrl = void 0);
              e.lastInitializedDefaultListOfLists = hb;
            });
        }),
        Qv = {
          independentField: Bh.LIQUIDITY_PERCENT,
          typedValue: "0"
        },
        Kv = Object(Mo.c)(Qv, function (e) {
          return e.addCase(_h, function (e, n) {
            var t = n.payload,
              r = t.field,
              a = t.typedValue;
            return Object(l.a)(
              Object(l.a)({}, e),
              {},
              {
                independentField: r,
                typedValue: a
              }
            );
          });
        }),
        Gv = Object(Mo.c)(
          {
            callResults: {}
          },
          function (e) {
            return e
              .addCase(Fu, function (e, n) {
                var t,
                  r = n.payload,
                  a = r.calls,
                  i = r.chainId,
                  o = r.options,
                  c = (o = void 0 === o ? {} : o).blocksPerFetch,
                  s = void 0 === c ? 1 : c,
                  u = e.callListeners
                    ? e.callListeners
                    : (e.callListeners = {});
                (u[i] = null !== (t = u[i]) && void 0 !== t ? t : {}),
                  a.forEach(function (e) {
                    var n,
                      t,
                      r = _u(e);
                    (u[i][r] = null !== (n = u[i][r]) && void 0 !== n ? n : {}),
                      (u[i][r][s] =
                        (null !== (t = u[i][r][s]) && void 0 !== t ? t : 0) +
                        1);
                  });
              })
              .addCase(zu, function (e, n) {
                var t = n.payload,
                  r = t.chainId,
                  a = t.calls,
                  i = t.options,
                  o = (i = void 0 === i ? {} : i).blocksPerFetch,
                  c = void 0 === o ? 1 : o,
                  s = e.callListeners
                    ? e.callListeners
                    : (e.callListeners = {});
                s[r] &&
                  a.forEach(function (e) {
                    var n = _u(e);
                    s[r][n] &&
                      s[r][n][c] &&
                      (1 === s[r][n][c] ? delete s[r][n][c] : s[r][n][c]--);
                  });
              })
              .addCase(qu, function (e, n) {
                var t,
                  r = n.payload,
                  a = r.chainId,
                  i = r.fetchingBlockNumber,
                  o = r.calls;
                (e.callResults[a] =
                  null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                  o.forEach(function (n) {
                    var t = _u(n),
                      r = e.callResults[a][t];
                    if (r) {
                      var o;
                      if (
                        (null !== (o = r.fetchingBlockNumber) && void 0 !== o
                          ? o
                          : 0) >= i
                      )
                        return;
                      e.callResults[a][t].fetchingBlockNumber = i;
                    } else
                      e.callResults[a][t] = {
                        fetchingBlockNumber: i
                      };
                  });
              })
              .addCase(Vu, function (e, n) {
                var t,
                  r = n.payload,
                  a = r.fetchingBlockNumber,
                  i = r.chainId,
                  o = r.calls;
                (e.callResults[i] =
                  null !== (t = e.callResults[i]) && void 0 !== t ? t : {}),
                  o.forEach(function (n) {
                    var t = _u(n),
                      r = e.callResults[i][t];
                    r &&
                      r.fetchingBlockNumber === a &&
                      (delete r.fetchingBlockNumber,
                      (r.data = null),
                      (r.blockNumber = a));
                  });
              })
              .addCase(Hu, function (e, n) {
                var t,
                  r = n.payload,
                  a = r.chainId,
                  i = r.results,
                  o = r.blockNumber;
                (e.callResults[a] =
                  null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                  Object.keys(i).forEach(function (n) {
                    var t,
                      r = e.callResults[a][n];
                    (null !==
                      (t =
                        null === r || void 0 === r ? void 0 : r.blockNumber) &&
                    void 0 !== t
                      ? t
                      : 0) > o ||
                      (e.callResults[a][n] = {
                        data: i[n],
                        blockNumber: o
                      });
                  });
              });
          }
        ),
        Jv = ["user", "transactions"],
        Xv = Object(Nv.load)({
          states: Jv
        });
      Xv.user &&
        (Xv.user.userDarkMode = (function () {
          var e = null;
          try {
            null !== (e = localStorage.getItem(jl)) && (e = JSON.parse(e));
          } catch (n) {}
          return e;
        })());
      var $v = Object(Mo.a)({
        reducer: {
          application: Rv,
          user: _v,
          transactions: Fv,
          swap: qv,
          mint: Hv,
          burn: Kv,
          multicall: Gv,
          lists: Zv
        },
        middleware: [].concat(
          Object(aa.a)(
            Object(Mo.d)({
              thunk: !1
            })
          ),
          [
            Object(Nv.save)({
              states: Jv
            })
          ]
        ),
        preloadedState: Xv
      });
      $v.dispatch(Lv());
      var ex = $v;

      function nx(e) {
        var n = new ia.a(e);
        return (n.pollingInterval = 15e3), n;
      }
      var tx = Object(vi.b)(Ja),
        rx = function (e) {
          var n = e.children;
          return Object(r.jsx)(vi.a, {
            getLibrary: nx,
            children: Object(r.jsx)(tx, {
              getLibrary: nx,
              children: Object(r.jsx)(Vo.a, {
                store: ex,
                children: Object(r.jsx)(av, {
                  children: Object(r.jsx)(Fn, {
                    children: n
                  })
                })
              })
            })
          });
        },
        ax = (t(459), t(186)),
        ix = t(281),
        ox = t.n(ix),
        cx = t(282),
        sx = t.n(cx);
      ax.a
        .use(ox.a)
        .use(sx.a)
        .use(hs.a)
        .init({
          backend: {
            loadPath: "./locales/{{lng}}.json"
          },
          react: {
            useSuspense: !0
          },
          fallbackLng: "en",
          preload: ["en"],
          keySeparator: !1,
          interpolation: {
            escapeValue: !1
          }
        });
      ax.a;
      "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
        window.addEventListener("error", function () {
          localStorage &&
            localStorage.removeItem("redux_localstorage_simple_lists");
        }),
        c.a.render(
          Object(r.jsx)(a.StrictMode, {
            children: Object(r.jsxs)(rx, {
              children: [
                Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)(wv, {}),
                    Object(r.jsx)(Cv, {}),
                    Object(r.jsx)(Sv, {}),
                    Object(r.jsx)(Av, {})
                  ]
                }),
                Object(r.jsx)(no, {}),
                Object(r.jsx)(Uo, {}),
                Object(r.jsx)(xv, {})
              ]
            })
          }),
          document.getElementById("root")
        );
    }
  },
  [[476, 3, 4]]
]);
