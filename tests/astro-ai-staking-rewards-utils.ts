import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Claimed,
  NewStake,
  NewStaking,
  OwnershipTransferred,
  UpdatedStake
} from "../generated/AstroAiStakingRewards/AstroAiStakingRewards"

export function createClaimedEvent(id: BigInt): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return claimedEvent
}

export function createNewStakeEvent(stakeId: BigInt): NewStake {
  let newStakeEvent = changetype<NewStake>(newMockEvent())

  newStakeEvent.parameters = new Array()

  newStakeEvent.parameters.push(
    new ethereum.EventParam(
      "stakeId",
      ethereum.Value.fromUnsignedBigInt(stakeId)
    )
  )

  return newStakeEvent
}

export function createNewStakingEvent(
  id: BigInt,
  stakinger: Address
): NewStaking {
  let newStakingEvent = changetype<NewStaking>(newMockEvent())

  newStakingEvent.parameters = new Array()

  newStakingEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  newStakingEvent.parameters.push(
    new ethereum.EventParam("stakinger", ethereum.Value.fromAddress(stakinger))
  )

  return newStakingEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpdatedStakeEvent(stakeId: BigInt): UpdatedStake {
  let updatedStakeEvent = changetype<UpdatedStake>(newMockEvent())

  updatedStakeEvent.parameters = new Array()

  updatedStakeEvent.parameters.push(
    new ethereum.EventParam(
      "stakeId",
      ethereum.Value.fromUnsignedBigInt(stakeId)
    )
  )

  return updatedStakeEvent
}
