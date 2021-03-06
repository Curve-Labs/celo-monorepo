# Class: BaseWrapper <**T**>

Base ContractWrapper

## Type parameters

▪ **T**: *Contract*

## Hierarchy

* **BaseWrapper**

  ↳ [AccountsWrapper](_wrappers_accounts_.accountswrapper.md)

  ↳ [ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)

  ↳ [AttestationsWrapper](_wrappers_attestations_.attestationswrapper.md)

  ↳ [BlockchainParametersWrapper](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)

  ↳ [BaseSlasher](_wrappers_baseslasher_.baseslasher.md)

  ↳ [ElectionWrapper](_wrappers_election_.electionwrapper.md)

  ↳ [EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)

  ↳ [ExchangeWrapper](_wrappers_exchange_.exchangewrapper.md)

  ↳ [FreezerWrapper](_wrappers_freezer_.freezerwrapper.md)

  ↳ [GasPriceMinimumWrapper](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)

  ↳ [GoldTokenWrapper](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

  ↳ [GovernanceWrapper](_wrappers_governance_.governancewrapper.md)

  ↳ [LockedGoldWrapper](_wrappers_lockedgold_.lockedgoldwrapper.md)

  ↳ [MetaTransactionWalletWrapper](_wrappers_metatransactionwallet_.metatransactionwalletwrapper.md)

  ↳ [MetaTransactionWalletDeployerWrapper](_wrappers_metatransactionwalletdeployer_.metatransactionwalletdeployerwrapper.md)

  ↳ [MultiSigWrapper](_wrappers_multisig_.multisigwrapper.md)

  ↳ [ReserveWrapper](_wrappers_reserve_.reservewrapper.md)

  ↳ [SortedOraclesWrapper](_wrappers_sortedoracles_.sortedoracleswrapper.md)

  ↳ [StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)

  ↳ [ReleaseGoldWrapper](_wrappers_releasegold_.releasegoldwrapper.md)

## Index

### Constructors

* [constructor](_wrappers_basewrapper_.basewrapper.md#constructor)

### Properties

* [eventTypes](_wrappers_basewrapper_.basewrapper.md#eventtypes)
* [events](_wrappers_basewrapper_.basewrapper.md#events)
* [methodIds](_wrappers_basewrapper_.basewrapper.md#methodids)

### Accessors

* [address](_wrappers_basewrapper_.basewrapper.md#address)

### Methods

* [getPastEvents](_wrappers_basewrapper_.basewrapper.md#getpastevents)

## Constructors

###  constructor

\+ **new BaseWrapper**(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: T): *[BaseWrapper](_wrappers_basewrapper_.basewrapper.md)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:26](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |
`contract` | T |

**Returns:** *[BaseWrapper](_wrappers_basewrapper_.basewrapper.md)*

## Properties

###  eventTypes

• **eventTypes**: *EventsEnum‹T›* = Object.keys(this.events).reduce<EventsEnum<T>>(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as any
  )

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:41](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L41)*

___

###  events

• **events**: *T["events"]* = this.contract.events

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:39](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L39)*

___

###  methodIds

• **methodIds**: *Record‹keyof T["methods"], string›* = Object.keys(this.contract.methods).reduce<Record<Methods<T>, string>>(
    (acc, method: Methods<T>) => {
      const methodABI = this.contract.options.jsonInterface.find((item) => item.name === method)

      acc[method] =
        methodABI === undefined
          ? '0x'
          : this.kit.connection.getAbiCoder().encodeFunctionSignature(methodABI)

      return acc
    },
    {} as any
  )

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:46](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L46)*

## Accessors

###  address

• **get address**(): *string*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:30](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L30)*

Contract address

**Returns:** *string*

## Methods

###  getPastEvents

▸ **getPastEvents**(`event`: Events‹T›, `options`: PastEventOptions): *Promise‹EventLog[]›*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:35](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L35)*

Contract getPastEvents

**Parameters:**

Name | Type |
------ | ------ |
`event` | Events‹T› |
`options` | PastEventOptions |

**Returns:** *Promise‹EventLog[]›*
