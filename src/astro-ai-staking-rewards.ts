import {
  Claimed as ClaimedEvent,
  NewStake as NewStakeEvent,
  NewStaking as NewStakingEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdatedStake as UpdatedStakeEvent
} from "../generated/AstroAiStakingRewards/AstroAiStakingRewards"
import {
  Claimed,
  NewStake,
  NewStaking,
  OwnershipTransferred,
  UpdatedStake
} from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimedId = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewStake(event: NewStakeEvent): void {
  let entity = new NewStake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakeId = event.params.stakeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewStaking(event: NewStakingEvent): void {
  let entity = new NewStaking(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newStakingId = event.params.id
  entity.stakinger = event.params.stakinger

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedStake(event: UpdatedStakeEvent): void {
  let entity = new UpdatedStake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stakeId = event.params.stakeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
