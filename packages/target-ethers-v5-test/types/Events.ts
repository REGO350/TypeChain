/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface EventsInterface extends ethers.utils.Interface {
  functions: {
    "emit_anon1()": FunctionFragment;
    "emit_event1()": FunctionFragment;
    "emit_event2()": FunctionFragment;
    "emit_event3()": FunctionFragment;
    "emit_event3_overloaded()": FunctionFragment;
    "emit_event4()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emit_anon1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3_overloaded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event4",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emit_anon1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emit_event1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3_overloaded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event4",
    data: BytesLike
  ): Result;

  events: {
    "AnonEvent1(uint256)": EventFragment;
    "Event1(uint256,uint256)": EventFragment;
    "Event2(uint256)": EventFragment;
    "Event3(bool,uint256)": EventFragment;
    "Event4(tuple)": EventFragment;
    "NoArgsEvent()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnonEvent1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event3"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event4"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NoArgsEvent"): EventFragment;
}

export type AnonEvent1Event = TypedEvent<[BigNumber], { value1: BigNumber }>;

export type Event1Event = TypedEvent<
  [BigNumber, BigNumber],
  { value1: BigNumber; value2: BigNumber }
>;

export type Event2Event = TypedEvent<[BigNumber], { arg0: BigNumber }>;

export type Event3_bool_uint256_Event = TypedEvent<
  [boolean, BigNumber],
  { value1: boolean; value2: BigNumber }
>;

export type Event3_uint256_Event = TypedEvent<
  [BigNumber],
  { value1: BigNumber }
>;

export type Event4Event = TypedEvent<
  [[BigNumber, string] & { index: BigNumber; name: string }],
  { data: [BigNumber, string] & { index: BigNumber; name: string } }
>;

export type NoArgsEventEvent = TypedEvent<[], {}>;

export interface Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  emit_anon1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event2(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3_overloaded(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event4(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    emit_anon1(overrides?: CallOverrides): Promise<void>;

    emit_event1(overrides?: CallOverrides): Promise<void>;

    emit_event2(overrides?: CallOverrides): Promise<void>;

    emit_event3(overrides?: CallOverrides): Promise<void>;

    emit_event3_overloaded(overrides?: CallOverrides): Promise<void>;

    emit_event4(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AnonEvent1(uint256)"(
      value1?: BigNumberish | null
    ): TypedEventFilter<AnonEvent1Event>;
    AnonEvent1(value1?: BigNumberish | null): TypedEventFilter<AnonEvent1Event>;

    "Event1(uint256,uint256)"(
      value1?: BigNumberish | null,
      value2?: null
    ): TypedEventFilter<Event1Event>;
    Event1(
      value1?: BigNumberish | null,
      value2?: null
    ): TypedEventFilter<Event1Event>;

    "Event2(uint256)"(undefined?: null): TypedEventFilter<Event2Event>;
    Event2(undefined?: null): TypedEventFilter<Event2Event>;

    "Event3(bool,uint256)"(
      value1?: boolean | null,
      value2?: null
    ): TypedEventFilter<Event3_bool_uint256_Event>;
    "Event3(uint256)"(
      value1?: BigNumberish | null
    ): TypedEventFilter<Event3_uint256_Event>;

    "Event4(tuple)"(data?: null): TypedEventFilter<Event4Event>;
    Event4(data?: null): TypedEventFilter<Event4Event>;

    "NoArgsEvent()"(): TypedEventFilter<NoArgsEventEvent>;
    NoArgsEvent(): TypedEventFilter<NoArgsEventEvent>;
  };

  estimateGas: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
