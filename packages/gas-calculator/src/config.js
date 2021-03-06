const {configs: {mapEnv}} = require('@welldone-software/node-toolbelt')

module.exports = mapEnv({
  databaseUrl: '',
  gasCalculatorCron: '',
  web3Url: '',
  refreshGasPricesPeriodSeconds: '',
  maximumNumberOfBlocksToCheck: '',
  minimumTransactionsForGasCalculation: '',
})
