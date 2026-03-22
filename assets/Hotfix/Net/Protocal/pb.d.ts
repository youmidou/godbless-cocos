import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pb. */
export namespace pb {

    /** Properties of a Base_Activity_ActivityInfo. */
    interface IBase_Activity_ActivityInfo {

        /** Base_Activity_ActivityInfo DailyTaskActivityInfo */
        DailyTaskActivityInfo?: (pb.IBase_Activity_DailyTaskActivityInfo|null);
    }

    /** Represents a Base_Activity_ActivityInfo. */
    class Base_Activity_ActivityInfo implements IBase_Activity_ActivityInfo {

        /**
         * Constructs a new Base_Activity_ActivityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Activity_ActivityInfo);

        /** Base_Activity_ActivityInfo DailyTaskActivityInfo. */
        public DailyTaskActivityInfo?: (pb.IBase_Activity_DailyTaskActivityInfo|null);

        /**
         * Creates a new Base_Activity_ActivityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Activity_ActivityInfo instance
         */
        public static create(properties?: pb.IBase_Activity_ActivityInfo): pb.Base_Activity_ActivityInfo;

        /**
         * Encodes the specified Base_Activity_ActivityInfo message. Does not implicitly {@link pb.Base_Activity_ActivityInfo.verify|verify} messages.
         * @param message Base_Activity_ActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Activity_ActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Activity_ActivityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Activity_ActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Activity_ActivityInfo;

        /**
         * Gets the default type url for Base_Activity_ActivityInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Activity_DailyTaskActivityInfo. */
    interface IBase_Activity_DailyTaskActivityInfo {

        /** Base_Activity_DailyTaskActivityInfo FireDragonTreasureValue */
        FireDragonTreasureValue?: (number|null);

        /** Base_Activity_DailyTaskActivityInfo FireDragonTreasureBit */
        FireDragonTreasureBit?: (number|null);

        /** Base_Activity_DailyTaskActivityInfo AdsBit */
        AdsBit?: (number|Long|null);
    }

    /** Represents a Base_Activity_DailyTaskActivityInfo. */
    class Base_Activity_DailyTaskActivityInfo implements IBase_Activity_DailyTaskActivityInfo {

        /**
         * Constructs a new Base_Activity_DailyTaskActivityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Activity_DailyTaskActivityInfo);

        /** Base_Activity_DailyTaskActivityInfo FireDragonTreasureValue. */
        public FireDragonTreasureValue: number;

        /** Base_Activity_DailyTaskActivityInfo FireDragonTreasureBit. */
        public FireDragonTreasureBit: number;

        /** Base_Activity_DailyTaskActivityInfo AdsBit. */
        public AdsBit: (number|Long);

        /**
         * Creates a new Base_Activity_DailyTaskActivityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Activity_DailyTaskActivityInfo instance
         */
        public static create(properties?: pb.IBase_Activity_DailyTaskActivityInfo): pb.Base_Activity_DailyTaskActivityInfo;

        /**
         * Encodes the specified Base_Activity_DailyTaskActivityInfo message. Does not implicitly {@link pb.Base_Activity_DailyTaskActivityInfo.verify|verify} messages.
         * @param message Base_Activity_DailyTaskActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Activity_DailyTaskActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Activity_DailyTaskActivityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Activity_DailyTaskActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Activity_DailyTaskActivityInfo;

        /**
         * Gets the default type url for Base_Activity_DailyTaskActivityInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Activity_AdsInfo. */
    interface IBase_Activity_AdsInfo {
    }

    /** Represents a Base_Activity_AdsInfo. */
    class Base_Activity_AdsInfo implements IBase_Activity_AdsInfo {

        /**
         * Constructs a new Base_Activity_AdsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Activity_AdsInfo);

        /**
         * Creates a new Base_Activity_AdsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Activity_AdsInfo instance
         */
        public static create(properties?: pb.IBase_Activity_AdsInfo): pb.Base_Activity_AdsInfo;

        /**
         * Encodes the specified Base_Activity_AdsInfo message. Does not implicitly {@link pb.Base_Activity_AdsInfo.verify|verify} messages.
         * @param message Base_Activity_AdsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Activity_AdsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Activity_AdsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Activity_AdsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Activity_AdsInfo;

        /**
         * Gets the default type url for Base_Activity_AdsInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Activity_UpdateActivityRet. */
    interface INet_Activity_UpdateActivityRet {

        /** Net_Activity_UpdateActivityRet ActivityInfo */
        ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);
    }

    /** Represents a Net_Activity_UpdateActivityRet. */
    class Net_Activity_UpdateActivityRet implements INet_Activity_UpdateActivityRet {

        /**
         * Constructs a new Net_Activity_UpdateActivityRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Activity_UpdateActivityRet);

        /** Net_Activity_UpdateActivityRet ActivityInfo. */
        public ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);

        /**
         * Creates a new Net_Activity_UpdateActivityRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Activity_UpdateActivityRet instance
         */
        public static create(properties?: pb.INet_Activity_UpdateActivityRet): pb.Net_Activity_UpdateActivityRet;

        /**
         * Encodes the specified Net_Activity_UpdateActivityRet message. Does not implicitly {@link pb.Net_Activity_UpdateActivityRet.verify|verify} messages.
         * @param message Net_Activity_UpdateActivityRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Activity_UpdateActivityRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Activity_UpdateActivityRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Activity_UpdateActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Activity_UpdateActivityRet;

        /**
         * Gets the default type url for Net_Activity_UpdateActivityRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Activity_AdsUpdateUserTypeReq. */
    interface INet_Activity_AdsUpdateUserTypeReq {
    }

    /** Represents a Net_Activity_AdsUpdateUserTypeReq. */
    class Net_Activity_AdsUpdateUserTypeReq implements INet_Activity_AdsUpdateUserTypeReq {

        /**
         * Constructs a new Net_Activity_AdsUpdateUserTypeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Activity_AdsUpdateUserTypeReq);

        /**
         * Creates a new Net_Activity_AdsUpdateUserTypeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Activity_AdsUpdateUserTypeReq instance
         */
        public static create(properties?: pb.INet_Activity_AdsUpdateUserTypeReq): pb.Net_Activity_AdsUpdateUserTypeReq;

        /**
         * Encodes the specified Net_Activity_AdsUpdateUserTypeReq message. Does not implicitly {@link pb.Net_Activity_AdsUpdateUserTypeReq.verify|verify} messages.
         * @param message Net_Activity_AdsUpdateUserTypeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Activity_AdsUpdateUserTypeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Activity_AdsUpdateUserTypeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Activity_AdsUpdateUserTypeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Activity_AdsUpdateUserTypeReq;

        /**
         * Gets the default type url for Net_Activity_AdsUpdateUserTypeReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Activity_AdsUpdateUserTypeRet. */
    interface INet_Activity_AdsUpdateUserTypeRet {
    }

    /** Represents a Net_Activity_AdsUpdateUserTypeRet. */
    class Net_Activity_AdsUpdateUserTypeRet implements INet_Activity_AdsUpdateUserTypeRet {

        /**
         * Constructs a new Net_Activity_AdsUpdateUserTypeRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Activity_AdsUpdateUserTypeRet);

        /**
         * Creates a new Net_Activity_AdsUpdateUserTypeRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Activity_AdsUpdateUserTypeRet instance
         */
        public static create(properties?: pb.INet_Activity_AdsUpdateUserTypeRet): pb.Net_Activity_AdsUpdateUserTypeRet;

        /**
         * Encodes the specified Net_Activity_AdsUpdateUserTypeRet message. Does not implicitly {@link pb.Net_Activity_AdsUpdateUserTypeRet.verify|verify} messages.
         * @param message Net_Activity_AdsUpdateUserTypeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Activity_AdsUpdateUserTypeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Activity_AdsUpdateUserTypeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Activity_AdsUpdateUserTypeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Activity_AdsUpdateUserTypeRet;

        /**
         * Gets the default type url for Net_Activity_AdsUpdateUserTypeRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Activity_ReceiveFireDragonTreasureRewardsReq. */
    interface INet_Activity_ReceiveFireDragonTreasureRewardsReq {

        /** Net_Activity_ReceiveFireDragonTreasureRewardsReq Index */
        Index?: (number|null);
    }

    /** Represents a Net_Activity_ReceiveFireDragonTreasureRewardsReq. */
    class Net_Activity_ReceiveFireDragonTreasureRewardsReq implements INet_Activity_ReceiveFireDragonTreasureRewardsReq {

        /**
         * Constructs a new Net_Activity_ReceiveFireDragonTreasureRewardsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq);

        /** Net_Activity_ReceiveFireDragonTreasureRewardsReq Index. */
        public Index: number;

        /**
         * Creates a new Net_Activity_ReceiveFireDragonTreasureRewardsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Activity_ReceiveFireDragonTreasureRewardsReq instance
         */
        public static create(properties?: pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq): pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq;

        /**
         * Encodes the specified Net_Activity_ReceiveFireDragonTreasureRewardsReq message. Does not implicitly {@link pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq.verify|verify} messages.
         * @param message Net_Activity_ReceiveFireDragonTreasureRewardsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Activity_ReceiveFireDragonTreasureRewardsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq;

        /**
         * Gets the default type url for Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Activity_ReceiveFireDragonTreasureRewardsRet. */
    interface INet_Activity_ReceiveFireDragonTreasureRewardsRet {

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet Ret */
        Ret?: (number|null);

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureValue */
        FireDragonTreasureValue?: (number|null);

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureBit */
        FireDragonTreasureBit?: (number|null);
    }

    /** Represents a Net_Activity_ReceiveFireDragonTreasureRewardsRet. */
    class Net_Activity_ReceiveFireDragonTreasureRewardsRet implements INet_Activity_ReceiveFireDragonTreasureRewardsRet {

        /**
         * Constructs a new Net_Activity_ReceiveFireDragonTreasureRewardsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet);

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet Ret. */
        public Ret: number;

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureValue. */
        public FireDragonTreasureValue: number;

        /** Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureBit. */
        public FireDragonTreasureBit: number;

        /**
         * Creates a new Net_Activity_ReceiveFireDragonTreasureRewardsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Activity_ReceiveFireDragonTreasureRewardsRet instance
         */
        public static create(properties?: pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet): pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet;

        /**
         * Encodes the specified Net_Activity_ReceiveFireDragonTreasureRewardsRet message. Does not implicitly {@link pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet.verify|verify} messages.
         * @param message Net_Activity_ReceiveFireDragonTreasureRewardsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Activity_ReceiveFireDragonTreasureRewardsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet;

        /**
         * Gets the default type url for Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Ads_AdsTasksInfo. */
    interface IBase_Ads_AdsTasksInfo {

        /** Base_Ads_AdsTasksInfo AdsTasksItemList */
        AdsTasksItemList?: (pb.IBase_Ads_AdsTasksItemInfo[]|null);

        /** Base_Ads_AdsTasksInfo AdsBit */
        AdsBit?: (number|Long|null);
    }

    /** Represents a Base_Ads_AdsTasksInfo. */
    class Base_Ads_AdsTasksInfo implements IBase_Ads_AdsTasksInfo {

        /**
         * Constructs a new Base_Ads_AdsTasksInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Ads_AdsTasksInfo);

        /** Base_Ads_AdsTasksInfo AdsTasksItemList. */
        public AdsTasksItemList: pb.IBase_Ads_AdsTasksItemInfo[];

        /** Base_Ads_AdsTasksInfo AdsBit. */
        public AdsBit: (number|Long);

        /**
         * Creates a new Base_Ads_AdsTasksInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Ads_AdsTasksInfo instance
         */
        public static create(properties?: pb.IBase_Ads_AdsTasksInfo): pb.Base_Ads_AdsTasksInfo;

        /**
         * Encodes the specified Base_Ads_AdsTasksInfo message. Does not implicitly {@link pb.Base_Ads_AdsTasksInfo.verify|verify} messages.
         * @param message Base_Ads_AdsTasksInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Ads_AdsTasksInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Ads_AdsTasksInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Ads_AdsTasksInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Ads_AdsTasksInfo;

        /**
         * Gets the default type url for Base_Ads_AdsTasksInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Ads_AdsTasksItemInfo. */
    interface IBase_Ads_AdsTasksItemInfo {

        /** Base_Ads_AdsTasksItemInfo Id */
        Id?: (number|null);

        /** Base_Ads_AdsTasksItemInfo ItemId */
        ItemId?: (number|null);

        /** Base_Ads_AdsTasksItemInfo ItemNum */
        ItemNum?: (number|null);
    }

    /** Represents a Base_Ads_AdsTasksItemInfo. */
    class Base_Ads_AdsTasksItemInfo implements IBase_Ads_AdsTasksItemInfo {

        /**
         * Constructs a new Base_Ads_AdsTasksItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Ads_AdsTasksItemInfo);

        /** Base_Ads_AdsTasksItemInfo Id. */
        public Id: number;

        /** Base_Ads_AdsTasksItemInfo ItemId. */
        public ItemId: number;

        /** Base_Ads_AdsTasksItemInfo ItemNum. */
        public ItemNum: number;

        /**
         * Creates a new Base_Ads_AdsTasksItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Ads_AdsTasksItemInfo instance
         */
        public static create(properties?: pb.IBase_Ads_AdsTasksItemInfo): pb.Base_Ads_AdsTasksItemInfo;

        /**
         * Encodes the specified Base_Ads_AdsTasksItemInfo message. Does not implicitly {@link pb.Base_Ads_AdsTasksItemInfo.verify|verify} messages.
         * @param message Base_Ads_AdsTasksItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Ads_AdsTasksItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Ads_AdsTasksItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Ads_AdsTasksItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Ads_AdsTasksItemInfo;

        /**
         * Gets the default type url for Base_Ads_AdsTasksItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Ads_CollectAdsRewardReq. */
    interface INet_Ads_CollectAdsRewardReq {

        /** Net_Ads_CollectAdsRewardReq TaskId */
        TaskId?: (number|null);
    }

    /** Represents a Net_Ads_CollectAdsRewardReq. */
    class Net_Ads_CollectAdsRewardReq implements INet_Ads_CollectAdsRewardReq {

        /**
         * Constructs a new Net_Ads_CollectAdsRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Ads_CollectAdsRewardReq);

        /** Net_Ads_CollectAdsRewardReq TaskId. */
        public TaskId: number;

        /**
         * Creates a new Net_Ads_CollectAdsRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Ads_CollectAdsRewardReq instance
         */
        public static create(properties?: pb.INet_Ads_CollectAdsRewardReq): pb.Net_Ads_CollectAdsRewardReq;

        /**
         * Encodes the specified Net_Ads_CollectAdsRewardReq message. Does not implicitly {@link pb.Net_Ads_CollectAdsRewardReq.verify|verify} messages.
         * @param message Net_Ads_CollectAdsRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Ads_CollectAdsRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Ads_CollectAdsRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Ads_CollectAdsRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Ads_CollectAdsRewardReq;

        /**
         * Gets the default type url for Net_Ads_CollectAdsRewardReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Ads_CollectAdsRewardRet. */
    interface INet_Ads_CollectAdsRewardRet {

        /** Net_Ads_CollectAdsRewardRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Ads_CollectAdsRewardRet. */
    class Net_Ads_CollectAdsRewardRet implements INet_Ads_CollectAdsRewardRet {

        /**
         * Constructs a new Net_Ads_CollectAdsRewardRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Ads_CollectAdsRewardRet);

        /** Net_Ads_CollectAdsRewardRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Ads_CollectAdsRewardRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Ads_CollectAdsRewardRet instance
         */
        public static create(properties?: pb.INet_Ads_CollectAdsRewardRet): pb.Net_Ads_CollectAdsRewardRet;

        /**
         * Encodes the specified Net_Ads_CollectAdsRewardRet message. Does not implicitly {@link pb.Net_Ads_CollectAdsRewardRet.verify|verify} messages.
         * @param message Net_Ads_CollectAdsRewardRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Ads_CollectAdsRewardRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Ads_CollectAdsRewardRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Ads_CollectAdsRewardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Ads_CollectAdsRewardRet;

        /**
         * Gets the default type url for Net_Ads_CollectAdsRewardRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Auth_GameInfo. */
    interface IBase_Auth_GameInfo {

        /** Base_Auth_GameInfo GameId */
        GameId?: (string|null);

        /** Base_Auth_GameInfo GameType */
        GameType?: (string|null);

        /** Base_Auth_GameInfo GameAddress */
        GameAddress?: (string|null);
    }

    /** Represents a Base_Auth_GameInfo. */
    class Base_Auth_GameInfo implements IBase_Auth_GameInfo {

        /**
         * Constructs a new Base_Auth_GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Auth_GameInfo);

        /** Base_Auth_GameInfo GameId. */
        public GameId: string;

        /** Base_Auth_GameInfo GameType. */
        public GameType: string;

        /** Base_Auth_GameInfo GameAddress. */
        public GameAddress: string;

        /**
         * Creates a new Base_Auth_GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Auth_GameInfo instance
         */
        public static create(properties?: pb.IBase_Auth_GameInfo): pb.Base_Auth_GameInfo;

        /**
         * Encodes the specified Base_Auth_GameInfo message. Does not implicitly {@link pb.Base_Auth_GameInfo.verify|verify} messages.
         * @param message Base_Auth_GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Auth_GameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Auth_GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Auth_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Auth_GameInfo;

        /**
         * Gets the default type url for Base_Auth_GameInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_LoginReq. */
    interface INet_Auth_LoginReq {

        /** Net_Auth_LoginReq DeviceId */
        DeviceId?: (string|null);

        /** Net_Auth_LoginReq FacebookId */
        FacebookId?: (string|null);

        /** Net_Auth_LoginReq AppleId */
        AppleId?: (string|null);

        /** Net_Auth_LoginReq FacebookName */
        FacebookName?: (string|null);
    }

    /** Represents a Net_Auth_LoginReq. */
    class Net_Auth_LoginReq implements INet_Auth_LoginReq {

        /**
         * Constructs a new Net_Auth_LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_LoginReq);

        /** Net_Auth_LoginReq DeviceId. */
        public DeviceId: string;

        /** Net_Auth_LoginReq FacebookId. */
        public FacebookId: string;

        /** Net_Auth_LoginReq AppleId. */
        public AppleId: string;

        /** Net_Auth_LoginReq FacebookName. */
        public FacebookName: string;

        /**
         * Creates a new Net_Auth_LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_LoginReq instance
         */
        public static create(properties?: pb.INet_Auth_LoginReq): pb.Net_Auth_LoginReq;

        /**
         * Encodes the specified Net_Auth_LoginReq message. Does not implicitly {@link pb.Net_Auth_LoginReq.verify|verify} messages.
         * @param message Net_Auth_LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_LoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_LoginReq;

        /**
         * Gets the default type url for Net_Auth_LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_LoginRet. */
    interface INet_Auth_LoginRet {

        /** Net_Auth_LoginRet Ret */
        Ret?: (number|null);

        /** Net_Auth_LoginRet ErrorMessage */
        ErrorMessage?: (string|null);

        /** Net_Auth_LoginRet AuthToken */
        AuthToken?: (string|null);

        /** Net_Auth_LoginRet GameServerAddress */
        GameServerAddress?: (string|null);
    }

    /** Represents a Net_Auth_LoginRet. */
    class Net_Auth_LoginRet implements INet_Auth_LoginRet {

        /**
         * Constructs a new Net_Auth_LoginRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_LoginRet);

        /** Net_Auth_LoginRet Ret. */
        public Ret: number;

        /** Net_Auth_LoginRet ErrorMessage. */
        public ErrorMessage: string;

        /** Net_Auth_LoginRet AuthToken. */
        public AuthToken: string;

        /** Net_Auth_LoginRet GameServerAddress. */
        public GameServerAddress: string;

        /**
         * Creates a new Net_Auth_LoginRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_LoginRet instance
         */
        public static create(properties?: pb.INet_Auth_LoginRet): pb.Net_Auth_LoginRet;

        /**
         * Encodes the specified Net_Auth_LoginRet message. Does not implicitly {@link pb.Net_Auth_LoginRet.verify|verify} messages.
         * @param message Net_Auth_LoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_LoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_LoginRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_LoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_LoginRet;

        /**
         * Gets the default type url for Net_Auth_LoginRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_LogoutReq. */
    interface INet_Auth_LogoutReq {

        /** Net_Auth_LogoutReq AuthToken */
        AuthToken?: (string|null);
    }

    /** Represents a Net_Auth_LogoutReq. */
    class Net_Auth_LogoutReq implements INet_Auth_LogoutReq {

        /**
         * Constructs a new Net_Auth_LogoutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_LogoutReq);

        /** Net_Auth_LogoutReq AuthToken. */
        public AuthToken: string;

        /**
         * Creates a new Net_Auth_LogoutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_LogoutReq instance
         */
        public static create(properties?: pb.INet_Auth_LogoutReq): pb.Net_Auth_LogoutReq;

        /**
         * Encodes the specified Net_Auth_LogoutReq message. Does not implicitly {@link pb.Net_Auth_LogoutReq.verify|verify} messages.
         * @param message Net_Auth_LogoutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_LogoutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_LogoutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_LogoutReq;

        /**
         * Gets the default type url for Net_Auth_LogoutReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_LogoutRet. */
    interface INet_Auth_LogoutRet {

        /** Net_Auth_LogoutRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Auth_LogoutRet. */
    class Net_Auth_LogoutRet implements INet_Auth_LogoutRet {

        /**
         * Constructs a new Net_Auth_LogoutRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_LogoutRet);

        /** Net_Auth_LogoutRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Auth_LogoutRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_LogoutRet instance
         */
        public static create(properties?: pb.INet_Auth_LogoutRet): pb.Net_Auth_LogoutRet;

        /**
         * Encodes the specified Net_Auth_LogoutRet message. Does not implicitly {@link pb.Net_Auth_LogoutRet.verify|verify} messages.
         * @param message Net_Auth_LogoutRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_LogoutRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_LogoutRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_LogoutRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_LogoutRet;

        /**
         * Gets the default type url for Net_Auth_LogoutRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_RegisterReq. */
    interface INet_Auth_RegisterReq {
    }

    /** Represents a Net_Auth_RegisterReq. */
    class Net_Auth_RegisterReq implements INet_Auth_RegisterReq {

        /**
         * Constructs a new Net_Auth_RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_RegisterReq);

        /**
         * Creates a new Net_Auth_RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_RegisterReq instance
         */
        public static create(properties?: pb.INet_Auth_RegisterReq): pb.Net_Auth_RegisterReq;

        /**
         * Encodes the specified Net_Auth_RegisterReq message. Does not implicitly {@link pb.Net_Auth_RegisterReq.verify|verify} messages.
         * @param message Net_Auth_RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_RegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_RegisterReq;

        /**
         * Gets the default type url for Net_Auth_RegisterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Auth_RegisterRet. */
    interface INet_Auth_RegisterRet {
    }

    /** Represents a Net_Auth_RegisterRet. */
    class Net_Auth_RegisterRet implements INet_Auth_RegisterRet {

        /**
         * Constructs a new Net_Auth_RegisterRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Auth_RegisterRet);

        /**
         * Creates a new Net_Auth_RegisterRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Auth_RegisterRet instance
         */
        public static create(properties?: pb.INet_Auth_RegisterRet): pb.Net_Auth_RegisterRet;

        /**
         * Encodes the specified Net_Auth_RegisterRet message. Does not implicitly {@link pb.Net_Auth_RegisterRet.verify|verify} messages.
         * @param message Net_Auth_RegisterRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Auth_RegisterRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Auth_RegisterRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Auth_RegisterRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Auth_RegisterRet;

        /**
         * Gets the default type url for Net_Auth_RegisterRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** EBackpack enum. */
    enum EBackpack {
        EBackpackTypeIdle = 0,
        EBackpackTypeItem = 1,
        EBackpackTypeDepot = 2,
        EBackpackTypeDummy = 3,
        EBackpackMaxGridNum = 100
    }

    /** EBagId enum. */
    enum EBagId {
        EBagIdIdle = 0,
        EBagIdMain = 101,
        EBagIdPet = 102,
        EBagIdDepot = 201
    }

    /** EItemId enum. */
    enum EItemId {
        BackpackItemIdle = 0,
        CoinItemId = 1001,
        GoldItemId = 1002,
        HolyGrailItemId = 2001,
        ItemId4002 = 4002
    }

    /** EPutReasonType enum. */
    enum EPutReasonType {
        PutReasonInvalid = 0,
        PutReasonNoNotice = 1,
        PutReasonGM = 2
    }

    /** Properties of a Base_Backpack_BackpackInfo. */
    interface IBase_Backpack_BackpackInfo {

        /** Base_Backpack_BackpackInfo ItemInfoList */
        ItemInfoList?: ({ [k: string]: number }|null);
    }

    /** Represents a Base_Backpack_BackpackInfo. */
    class Base_Backpack_BackpackInfo implements IBase_Backpack_BackpackInfo {

        /**
         * Constructs a new Base_Backpack_BackpackInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_BackpackInfo);

        /** Base_Backpack_BackpackInfo ItemInfoList. */
        public ItemInfoList: { [k: string]: number };

        /**
         * Creates a new Base_Backpack_BackpackInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_BackpackInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_BackpackInfo): pb.Base_Backpack_BackpackInfo;

        /**
         * Encodes the specified Base_Backpack_BackpackInfo message. Does not implicitly {@link pb.Base_Backpack_BackpackInfo.verify|verify} messages.
         * @param message Base_Backpack_BackpackInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_BackpackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_BackpackInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_BackpackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_BackpackInfo;

        /**
         * Gets the default type url for Base_Backpack_BackpackInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_ConsumeOperationOrderInfo. */
    interface IBase_Backpack_ConsumeOperationOrderInfo {

        /** Base_Backpack_ConsumeOperationOrderInfo OperationType */
        OperationType?: (number|null);

        /** Base_Backpack_ConsumeOperationOrderInfo ConsumeItemList */
        ConsumeItemList?: (number|null);

        /** Base_Backpack_ConsumeOperationOrderInfo AcquireItemList */
        AcquireItemList?: (number|null);
    }

    /** Represents a Base_Backpack_ConsumeOperationOrderInfo. */
    class Base_Backpack_ConsumeOperationOrderInfo implements IBase_Backpack_ConsumeOperationOrderInfo {

        /**
         * Constructs a new Base_Backpack_ConsumeOperationOrderInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_ConsumeOperationOrderInfo);

        /** Base_Backpack_ConsumeOperationOrderInfo OperationType. */
        public OperationType: number;

        /** Base_Backpack_ConsumeOperationOrderInfo ConsumeItemList. */
        public ConsumeItemList: number;

        /** Base_Backpack_ConsumeOperationOrderInfo AcquireItemList. */
        public AcquireItemList: number;

        /**
         * Creates a new Base_Backpack_ConsumeOperationOrderInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_ConsumeOperationOrderInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_ConsumeOperationOrderInfo): pb.Base_Backpack_ConsumeOperationOrderInfo;

        /**
         * Encodes the specified Base_Backpack_ConsumeOperationOrderInfo message. Does not implicitly {@link pb.Base_Backpack_ConsumeOperationOrderInfo.verify|verify} messages.
         * @param message Base_Backpack_ConsumeOperationOrderInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_ConsumeOperationOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_ConsumeOperationOrderInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_ConsumeOperationOrderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_ConsumeOperationOrderInfo;

        /**
         * Gets the default type url for Base_Backpack_ConsumeOperationOrderInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_MoneyInfo. */
    interface IBase_Backpack_MoneyInfo {

        /** Base_Backpack_MoneyInfo Coin */
        Coin?: (number|null);

        /** Base_Backpack_MoneyInfo Gold */
        Gold?: (number|null);
    }

    /** Represents a Base_Backpack_MoneyInfo. */
    class Base_Backpack_MoneyInfo implements IBase_Backpack_MoneyInfo {

        /**
         * Constructs a new Base_Backpack_MoneyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_MoneyInfo);

        /** Base_Backpack_MoneyInfo Coin. */
        public Coin: number;

        /** Base_Backpack_MoneyInfo Gold. */
        public Gold: number;

        /**
         * Creates a new Base_Backpack_MoneyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_MoneyInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_MoneyInfo): pb.Base_Backpack_MoneyInfo;

        /**
         * Encodes the specified Base_Backpack_MoneyInfo message. Does not implicitly {@link pb.Base_Backpack_MoneyInfo.verify|verify} messages.
         * @param message Base_Backpack_MoneyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_MoneyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_MoneyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_MoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_MoneyInfo;

        /**
         * Gets the default type url for Base_Backpack_MoneyInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_AnItemInfo. */
    interface IBase_Backpack_AnItemInfo {

        /** Base_Backpack_AnItemInfo Id */
        Id?: (number|null);

        /** Base_Backpack_AnItemInfo Num */
        Num?: (number|null);

        /** Base_Backpack_AnItemInfo IsBind */
        IsBind?: (boolean|null);

        /** Base_Backpack_AnItemInfo HasParam */
        HasParam?: (string|null);

        /** Base_Backpack_AnItemInfo InvalidTime */
        InvalidTime?: (number|Long|null);

        /** Base_Backpack_AnItemInfo GoldPrice */
        GoldPrice?: (number|null);
    }

    /** Represents a Base_Backpack_AnItemInfo. */
    class Base_Backpack_AnItemInfo implements IBase_Backpack_AnItemInfo {

        /**
         * Constructs a new Base_Backpack_AnItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_AnItemInfo);

        /** Base_Backpack_AnItemInfo Id. */
        public Id: number;

        /** Base_Backpack_AnItemInfo Num. */
        public Num: number;

        /** Base_Backpack_AnItemInfo IsBind. */
        public IsBind: boolean;

        /** Base_Backpack_AnItemInfo HasParam. */
        public HasParam: string;

        /** Base_Backpack_AnItemInfo InvalidTime. */
        public InvalidTime: (number|Long);

        /** Base_Backpack_AnItemInfo GoldPrice. */
        public GoldPrice: number;

        /**
         * Creates a new Base_Backpack_AnItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_AnItemInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_AnItemInfo): pb.Base_Backpack_AnItemInfo;

        /**
         * Encodes the specified Base_Backpack_AnItemInfo message. Does not implicitly {@link pb.Base_Backpack_AnItemInfo.verify|verify} messages.
         * @param message Base_Backpack_AnItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_AnItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_AnItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_AnItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_AnItemInfo;

        /**
         * Gets the default type url for Base_Backpack_AnItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_ItemConsumeInfo. */
    interface IBase_Backpack_ItemConsumeInfo {

        /** Base_Backpack_ItemConsumeInfo ConsumeBindItemNum */
        ConsumeBindItemNum?: (number|null);

        /** Base_Backpack_ItemConsumeInfo ConsumeNoBindItemNum */
        ConsumeNoBindItemNum?: (number|null);

        /** Base_Backpack_ItemConsumeInfo ConsumeNumList */
        ConsumeNumList?: (number|null);
    }

    /** Represents a Base_Backpack_ItemConsumeInfo. */
    class Base_Backpack_ItemConsumeInfo implements IBase_Backpack_ItemConsumeInfo {

        /**
         * Constructs a new Base_Backpack_ItemConsumeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_ItemConsumeInfo);

        /** Base_Backpack_ItemConsumeInfo ConsumeBindItemNum. */
        public ConsumeBindItemNum: number;

        /** Base_Backpack_ItemConsumeInfo ConsumeNoBindItemNum. */
        public ConsumeNoBindItemNum: number;

        /** Base_Backpack_ItemConsumeInfo ConsumeNumList. */
        public ConsumeNumList: number;

        /**
         * Creates a new Base_Backpack_ItemConsumeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_ItemConsumeInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_ItemConsumeInfo): pb.Base_Backpack_ItemConsumeInfo;

        /**
         * Encodes the specified Base_Backpack_ItemConsumeInfo message. Does not implicitly {@link pb.Base_Backpack_ItemConsumeInfo.verify|verify} messages.
         * @param message Base_Backpack_ItemConsumeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_ItemConsumeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_ItemConsumeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_ItemConsumeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_ItemConsumeInfo;

        /**
         * Gets the default type url for Base_Backpack_ItemConsumeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_BuyItemInfo. */
    interface IBase_Backpack_BuyItemInfo {

        /** Base_Backpack_BuyItemInfo ItemId */
        ItemId?: (number|null);

        /** Base_Backpack_BuyItemInfo ItemCount */
        ItemCount?: (number|null);
    }

    /** Represents a Base_Backpack_BuyItemInfo. */
    class Base_Backpack_BuyItemInfo implements IBase_Backpack_BuyItemInfo {

        /**
         * Constructs a new Base_Backpack_BuyItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_BuyItemInfo);

        /** Base_Backpack_BuyItemInfo ItemId. */
        public ItemId: number;

        /** Base_Backpack_BuyItemInfo ItemCount. */
        public ItemCount: number;

        /**
         * Creates a new Base_Backpack_BuyItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_BuyItemInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_BuyItemInfo): pb.Base_Backpack_BuyItemInfo;

        /**
         * Encodes the specified Base_Backpack_BuyItemInfo message. Does not implicitly {@link pb.Base_Backpack_BuyItemInfo.verify|verify} messages.
         * @param message Base_Backpack_BuyItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_BuyItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_BuyItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_BuyItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_BuyItemInfo;

        /**
         * Gets the default type url for Base_Backpack_BuyItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_ItemConsumeList. */
    interface IBase_Backpack_ItemConsumeList {

        /** Base_Backpack_ItemConsumeList BindItemNum */
        BindItemNum?: (number|null);

        /** Base_Backpack_ItemConsumeList NoBindItemNum */
        NoBindItemNum?: (number|null);

        /** Base_Backpack_ItemConsumeList NeedGoldNum */
        NeedGoldNum?: (number|null);

        /** Base_Backpack_ItemConsumeList CostBindCoinFirst */
        CostBindCoinFirst?: (number|null);

        /** Base_Backpack_ItemConsumeList Count */
        Count?: (number|null);

        /** Base_Backpack_ItemConsumeList IndexList */
        IndexList?: (number[]|null);

        /** Base_Backpack_ItemConsumeList NumList */
        NumList?: (number[]|null);

        /** Base_Backpack_ItemConsumeList BuyCount */
        BuyCount?: (number|null);

        /** Base_Backpack_ItemConsumeList BuyItemInfo */
        BuyItemInfo?: (pb.IBase_Backpack_BuyItemInfo[]|null);
    }

    /** Represents a Base_Backpack_ItemConsumeList. */
    class Base_Backpack_ItemConsumeList implements IBase_Backpack_ItemConsumeList {

        /**
         * Constructs a new Base_Backpack_ItemConsumeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_ItemConsumeList);

        /** Base_Backpack_ItemConsumeList BindItemNum. */
        public BindItemNum: number;

        /** Base_Backpack_ItemConsumeList NoBindItemNum. */
        public NoBindItemNum: number;

        /** Base_Backpack_ItemConsumeList NeedGoldNum. */
        public NeedGoldNum: number;

        /** Base_Backpack_ItemConsumeList CostBindCoinFirst. */
        public CostBindCoinFirst: number;

        /** Base_Backpack_ItemConsumeList Count. */
        public Count: number;

        /** Base_Backpack_ItemConsumeList IndexList. */
        public IndexList: number[];

        /** Base_Backpack_ItemConsumeList NumList. */
        public NumList: number[];

        /** Base_Backpack_ItemConsumeList BuyCount. */
        public BuyCount: number;

        /** Base_Backpack_ItemConsumeList BuyItemInfo. */
        public BuyItemInfo: pb.IBase_Backpack_BuyItemInfo[];

        /**
         * Creates a new Base_Backpack_ItemConsumeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_ItemConsumeList instance
         */
        public static create(properties?: pb.IBase_Backpack_ItemConsumeList): pb.Base_Backpack_ItemConsumeList;

        /**
         * Encodes the specified Base_Backpack_ItemConsumeList message. Does not implicitly {@link pb.Base_Backpack_ItemConsumeList.verify|verify} messages.
         * @param message Base_Backpack_ItemConsumeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_ItemConsumeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_ItemConsumeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_ItemConsumeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_ItemConsumeList;

        /**
         * Gets the default type url for Base_Backpack_ItemConsumeList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_GetBackpackInfoReq. */
    interface INet_Backpack_GetBackpackInfoReq {
    }

    /** Represents a Net_Backpack_GetBackpackInfoReq. */
    class Net_Backpack_GetBackpackInfoReq implements INet_Backpack_GetBackpackInfoReq {

        /**
         * Constructs a new Net_Backpack_GetBackpackInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_GetBackpackInfoReq);

        /**
         * Creates a new Net_Backpack_GetBackpackInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_GetBackpackInfoReq instance
         */
        public static create(properties?: pb.INet_Backpack_GetBackpackInfoReq): pb.Net_Backpack_GetBackpackInfoReq;

        /**
         * Encodes the specified Net_Backpack_GetBackpackInfoReq message. Does not implicitly {@link pb.Net_Backpack_GetBackpackInfoReq.verify|verify} messages.
         * @param message Net_Backpack_GetBackpackInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_GetBackpackInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_GetBackpackInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_GetBackpackInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_GetBackpackInfoReq;

        /**
         * Gets the default type url for Net_Backpack_GetBackpackInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_GetBackpackInfoRet. */
    interface INet_Backpack_GetBackpackInfoRet {

        /** Net_Backpack_GetBackpackInfoRet BackpackInfo */
        BackpackInfo?: (pb.IBase_Backpack_BackpackInfo|null);
    }

    /** Represents a Net_Backpack_GetBackpackInfoRet. */
    class Net_Backpack_GetBackpackInfoRet implements INet_Backpack_GetBackpackInfoRet {

        /**
         * Constructs a new Net_Backpack_GetBackpackInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_GetBackpackInfoRet);

        /** Net_Backpack_GetBackpackInfoRet BackpackInfo. */
        public BackpackInfo?: (pb.IBase_Backpack_BackpackInfo|null);

        /**
         * Creates a new Net_Backpack_GetBackpackInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_GetBackpackInfoRet instance
         */
        public static create(properties?: pb.INet_Backpack_GetBackpackInfoRet): pb.Net_Backpack_GetBackpackInfoRet;

        /**
         * Encodes the specified Net_Backpack_GetBackpackInfoRet message. Does not implicitly {@link pb.Net_Backpack_GetBackpackInfoRet.verify|verify} messages.
         * @param message Net_Backpack_GetBackpackInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_GetBackpackInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_GetBackpackInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_GetBackpackInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_GetBackpackInfoRet;

        /**
         * Gets the default type url for Net_Backpack_GetBackpackInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_BackpackUpdateRet. */
    interface INet_Backpack_BackpackUpdateRet {

        /** Net_Backpack_BackpackUpdateRet DelItems */
        DelItems?: (number|null);

        /** Net_Backpack_BackpackUpdateRet AddItems */
        AddItems?: (number|null);

        /** Net_Backpack_BackpackUpdateRet UpdateItems */
        UpdateItems?: (number|null);

        /** Net_Backpack_BackpackUpdateRet UpdateItemList */
        UpdateItemList?: ({ [k: string]: number }|null);
    }

    /** Represents a Net_Backpack_BackpackUpdateRet. */
    class Net_Backpack_BackpackUpdateRet implements INet_Backpack_BackpackUpdateRet {

        /**
         * Constructs a new Net_Backpack_BackpackUpdateRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_BackpackUpdateRet);

        /** Net_Backpack_BackpackUpdateRet DelItems. */
        public DelItems: number;

        /** Net_Backpack_BackpackUpdateRet AddItems. */
        public AddItems: number;

        /** Net_Backpack_BackpackUpdateRet UpdateItems. */
        public UpdateItems: number;

        /** Net_Backpack_BackpackUpdateRet UpdateItemList. */
        public UpdateItemList: { [k: string]: number };

        /**
         * Creates a new Net_Backpack_BackpackUpdateRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_BackpackUpdateRet instance
         */
        public static create(properties?: pb.INet_Backpack_BackpackUpdateRet): pb.Net_Backpack_BackpackUpdateRet;

        /**
         * Encodes the specified Net_Backpack_BackpackUpdateRet message. Does not implicitly {@link pb.Net_Backpack_BackpackUpdateRet.verify|verify} messages.
         * @param message Net_Backpack_BackpackUpdateRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_BackpackUpdateRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_BackpackUpdateRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_BackpackUpdateRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_BackpackUpdateRet;

        /**
         * Gets the default type url for Net_Backpack_BackpackUpdateRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_UseItemsReq. */
    interface INet_Backpack_UseItemsReq {

        /** Net_Backpack_UseItemsReq itemId */
        itemId?: (number|null);
    }

    /** Represents a Net_Backpack_UseItemsReq. */
    class Net_Backpack_UseItemsReq implements INet_Backpack_UseItemsReq {

        /**
         * Constructs a new Net_Backpack_UseItemsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_UseItemsReq);

        /** Net_Backpack_UseItemsReq itemId. */
        public itemId: number;

        /**
         * Creates a new Net_Backpack_UseItemsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_UseItemsReq instance
         */
        public static create(properties?: pb.INet_Backpack_UseItemsReq): pb.Net_Backpack_UseItemsReq;

        /**
         * Encodes the specified Net_Backpack_UseItemsReq message. Does not implicitly {@link pb.Net_Backpack_UseItemsReq.verify|verify} messages.
         * @param message Net_Backpack_UseItemsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_UseItemsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_UseItemsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_UseItemsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_UseItemsReq;

        /**
         * Gets the default type url for Net_Backpack_UseItemsReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_UseItemsRet. */
    interface INet_Backpack_UseItemsRet {

        /** Net_Backpack_UseItemsRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Backpack_UseItemsRet. */
    class Net_Backpack_UseItemsRet implements INet_Backpack_UseItemsRet {

        /**
         * Constructs a new Net_Backpack_UseItemsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_UseItemsRet);

        /** Net_Backpack_UseItemsRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Backpack_UseItemsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_UseItemsRet instance
         */
        public static create(properties?: pb.INet_Backpack_UseItemsRet): pb.Net_Backpack_UseItemsRet;

        /**
         * Encodes the specified Net_Backpack_UseItemsRet message. Does not implicitly {@link pb.Net_Backpack_UseItemsRet.verify|verify} messages.
         * @param message Net_Backpack_UseItemsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_UseItemsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_UseItemsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_UseItemsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_UseItemsRet;

        /**
         * Gets the default type url for Net_Backpack_UseItemsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Backpack_CellInfo. */
    interface IBase_Backpack_CellInfo {

        /** Base_Backpack_CellInfo Opened */
        Opened?: (number|null);

        /** Base_Backpack_CellInfo Used */
        Used?: (number|null);

        /** Base_Backpack_CellInfo Unused */
        Unused?: (number|null);
    }

    /** Represents a Base_Backpack_CellInfo. */
    class Base_Backpack_CellInfo implements IBase_Backpack_CellInfo {

        /**
         * Constructs a new Base_Backpack_CellInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Backpack_CellInfo);

        /** Base_Backpack_CellInfo Opened. */
        public Opened: number;

        /** Base_Backpack_CellInfo Used. */
        public Used: number;

        /** Base_Backpack_CellInfo Unused. */
        public Unused: number;

        /**
         * Creates a new Base_Backpack_CellInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Backpack_CellInfo instance
         */
        public static create(properties?: pb.IBase_Backpack_CellInfo): pb.Base_Backpack_CellInfo;

        /**
         * Encodes the specified Base_Backpack_CellInfo message. Does not implicitly {@link pb.Base_Backpack_CellInfo.verify|verify} messages.
         * @param message Base_Backpack_CellInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Backpack_CellInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Backpack_CellInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Backpack_CellInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Backpack_CellInfo;

        /**
         * Gets the default type url for Base_Backpack_CellInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_OpenCellReq. */
    interface INet_Backpack_OpenCellReq {
    }

    /** Represents a Net_Backpack_OpenCellReq. */
    class Net_Backpack_OpenCellReq implements INet_Backpack_OpenCellReq {

        /**
         * Constructs a new Net_Backpack_OpenCellReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_OpenCellReq);

        /**
         * Creates a new Net_Backpack_OpenCellReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_OpenCellReq instance
         */
        public static create(properties?: pb.INet_Backpack_OpenCellReq): pb.Net_Backpack_OpenCellReq;

        /**
         * Encodes the specified Net_Backpack_OpenCellReq message. Does not implicitly {@link pb.Net_Backpack_OpenCellReq.verify|verify} messages.
         * @param message Net_Backpack_OpenCellReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_OpenCellReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_OpenCellReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_OpenCellReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_OpenCellReq;

        /**
         * Gets the default type url for Net_Backpack_OpenCellReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Backpack_OpenCellRet. */
    interface INet_Backpack_OpenCellRet {
    }

    /** Represents a Net_Backpack_OpenCellRet. */
    class Net_Backpack_OpenCellRet implements INet_Backpack_OpenCellRet {

        /**
         * Constructs a new Net_Backpack_OpenCellRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Backpack_OpenCellRet);

        /**
         * Creates a new Net_Backpack_OpenCellRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Backpack_OpenCellRet instance
         */
        public static create(properties?: pb.INet_Backpack_OpenCellRet): pb.Net_Backpack_OpenCellRet;

        /**
         * Encodes the specified Net_Backpack_OpenCellRet message. Does not implicitly {@link pb.Net_Backpack_OpenCellRet.verify|verify} messages.
         * @param message Net_Backpack_OpenCellRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Backpack_OpenCellRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Backpack_OpenCellRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Backpack_OpenCellRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Backpack_OpenCellRet;

        /**
         * Gets the default type url for Net_Backpack_OpenCellRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** EErrorNum enum. */
    enum EErrorNum {
        ErrorNumIde = 0,
        EN_KNAPSACK_USE_NOT_DIRECT = 1
    }

    /** Properties of a Net_Error_ErrorRet. */
    interface INet_Error_ErrorRet {

        /** Net_Error_ErrorRet Code */
        Code?: (number|null);

        /** Net_Error_ErrorRet Msg */
        Msg?: (string|null);
    }

    /** Represents a Net_Error_ErrorRet. */
    class Net_Error_ErrorRet implements INet_Error_ErrorRet {

        /**
         * Constructs a new Net_Error_ErrorRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Error_ErrorRet);

        /** Net_Error_ErrorRet Code. */
        public Code: number;

        /** Net_Error_ErrorRet Msg. */
        public Msg: string;

        /**
         * Creates a new Net_Error_ErrorRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Error_ErrorRet instance
         */
        public static create(properties?: pb.INet_Error_ErrorRet): pb.Net_Error_ErrorRet;

        /**
         * Encodes the specified Net_Error_ErrorRet message. Does not implicitly {@link pb.Net_Error_ErrorRet.verify|verify} messages.
         * @param message Net_Error_ErrorRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Error_ErrorRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Error_ErrorRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Error_ErrorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Error_ErrorRet;

        /**
         * Gets the default type url for Net_Error_ErrorRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Guide_GuideInfo. */
    interface IBase_Guide_GuideInfo {

        /** Base_Guide_GuideInfo CompletedGuide */
        CompletedGuide?: ({ [k: string]: number }|null);
    }

    /** Represents a Base_Guide_GuideInfo. */
    class Base_Guide_GuideInfo implements IBase_Guide_GuideInfo {

        /**
         * Constructs a new Base_Guide_GuideInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Guide_GuideInfo);

        /** Base_Guide_GuideInfo CompletedGuide. */
        public CompletedGuide: { [k: string]: number };

        /**
         * Creates a new Base_Guide_GuideInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Guide_GuideInfo instance
         */
        public static create(properties?: pb.IBase_Guide_GuideInfo): pb.Base_Guide_GuideInfo;

        /**
         * Encodes the specified Base_Guide_GuideInfo message. Does not implicitly {@link pb.Base_Guide_GuideInfo.verify|verify} messages.
         * @param message Base_Guide_GuideInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Guide_GuideInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Guide_GuideInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Guide_GuideInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Guide_GuideInfo;

        /**
         * Gets the default type url for Base_Guide_GuideInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Guide_MarkCompleteReq. */
    interface INet_Guide_MarkCompleteReq {

        /** Net_Guide_MarkCompleteReq GuideId */
        GuideId?: (number|null);
    }

    /** Represents a Net_Guide_MarkCompleteReq. */
    class Net_Guide_MarkCompleteReq implements INet_Guide_MarkCompleteReq {

        /**
         * Constructs a new Net_Guide_MarkCompleteReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Guide_MarkCompleteReq);

        /** Net_Guide_MarkCompleteReq GuideId. */
        public GuideId: number;

        /**
         * Creates a new Net_Guide_MarkCompleteReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Guide_MarkCompleteReq instance
         */
        public static create(properties?: pb.INet_Guide_MarkCompleteReq): pb.Net_Guide_MarkCompleteReq;

        /**
         * Encodes the specified Net_Guide_MarkCompleteReq message. Does not implicitly {@link pb.Net_Guide_MarkCompleteReq.verify|verify} messages.
         * @param message Net_Guide_MarkCompleteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Guide_MarkCompleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Guide_MarkCompleteReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Guide_MarkCompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Guide_MarkCompleteReq;

        /**
         * Gets the default type url for Net_Guide_MarkCompleteReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Guide_MarkCompleteRet. */
    interface INet_Guide_MarkCompleteRet {

        /** Net_Guide_MarkCompleteRet Ret */
        Ret?: (number|null);

        /** Net_Guide_MarkCompleteRet GuideId */
        GuideId?: (number|null);
    }

    /** Represents a Net_Guide_MarkCompleteRet. */
    class Net_Guide_MarkCompleteRet implements INet_Guide_MarkCompleteRet {

        /**
         * Constructs a new Net_Guide_MarkCompleteRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Guide_MarkCompleteRet);

        /** Net_Guide_MarkCompleteRet Ret. */
        public Ret: number;

        /** Net_Guide_MarkCompleteRet GuideId. */
        public GuideId: number;

        /**
         * Creates a new Net_Guide_MarkCompleteRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Guide_MarkCompleteRet instance
         */
        public static create(properties?: pb.INet_Guide_MarkCompleteRet): pb.Net_Guide_MarkCompleteRet;

        /**
         * Encodes the specified Net_Guide_MarkCompleteRet message. Does not implicitly {@link pb.Net_Guide_MarkCompleteRet.verify|verify} messages.
         * @param message Net_Guide_MarkCompleteRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Guide_MarkCompleteRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Guide_MarkCompleteRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Guide_MarkCompleteRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Guide_MarkCompleteRet;

        /**
         * Gets the default type url for Net_Guide_MarkCompleteRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** InboxType enum. */
    enum InboxType {
        InboxIdle = 0,
        InboxTypeSys = 1
    }

    /** Properties of a Base_Inbox_InboxInfo. */
    interface IBase_Inbox_InboxInfo {

        /** Base_Inbox_InboxInfo ItemList */
        ItemList?: (pb.IBase_Inbox_InboxItemInfo[]|null);
    }

    /** Represents a Base_Inbox_InboxInfo. */
    class Base_Inbox_InboxInfo implements IBase_Inbox_InboxInfo {

        /**
         * Constructs a new Base_Inbox_InboxInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Inbox_InboxInfo);

        /** Base_Inbox_InboxInfo ItemList. */
        public ItemList: pb.IBase_Inbox_InboxItemInfo[];

        /**
         * Creates a new Base_Inbox_InboxInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Inbox_InboxInfo instance
         */
        public static create(properties?: pb.IBase_Inbox_InboxInfo): pb.Base_Inbox_InboxInfo;

        /**
         * Encodes the specified Base_Inbox_InboxInfo message. Does not implicitly {@link pb.Base_Inbox_InboxInfo.verify|verify} messages.
         * @param message Base_Inbox_InboxInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Inbox_InboxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Inbox_InboxInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Inbox_InboxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Inbox_InboxInfo;

        /**
         * Gets the default type url for Base_Inbox_InboxInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Inbox_InboxItemInfo. */
    interface IBase_Inbox_InboxItemInfo {

        /** Base_Inbox_InboxItemInfo Id */
        Id?: (number|null);

        /** Base_Inbox_InboxItemInfo Type */
        Type?: (number|null);

        /** Base_Inbox_InboxItemInfo ReceiverId */
        ReceiverId?: (string|null);

        /** Base_Inbox_InboxItemInfo SenderId */
        SenderId?: (string|null);

        /** Base_Inbox_InboxItemInfo SenderName */
        SenderName?: (string|null);

        /** Base_Inbox_InboxItemInfo Title */
        Title?: (string|null);

        /** Base_Inbox_InboxItemInfo Content */
        Content?: (string|null);

        /** Base_Inbox_InboxItemInfo IsRead */
        IsRead?: (boolean|null);

        /** Base_Inbox_InboxItemInfo IsClaimReward */
        IsClaimReward?: (boolean|null);

        /** Base_Inbox_InboxItemInfo ItemId1 */
        ItemId1?: (number|null);

        /** Base_Inbox_InboxItemInfo ItemNum1 */
        ItemNum1?: (number|null);

        /** Base_Inbox_InboxItemInfo ItemId2 */
        ItemId2?: (number|null);

        /** Base_Inbox_InboxItemInfo ItemNum2 */
        ItemNum2?: (number|null);

        /** Base_Inbox_InboxItemInfo ItemId3 */
        ItemId3?: (number|null);

        /** Base_Inbox_InboxItemInfo ItemNum3 */
        ItemNum3?: (number|null);

        /** Base_Inbox_InboxItemInfo Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a Base_Inbox_InboxItemInfo. */
    class Base_Inbox_InboxItemInfo implements IBase_Inbox_InboxItemInfo {

        /**
         * Constructs a new Base_Inbox_InboxItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Inbox_InboxItemInfo);

        /** Base_Inbox_InboxItemInfo Id. */
        public Id: number;

        /** Base_Inbox_InboxItemInfo Type. */
        public Type: number;

        /** Base_Inbox_InboxItemInfo ReceiverId. */
        public ReceiverId: string;

        /** Base_Inbox_InboxItemInfo SenderId. */
        public SenderId: string;

        /** Base_Inbox_InboxItemInfo SenderName. */
        public SenderName: string;

        /** Base_Inbox_InboxItemInfo Title. */
        public Title: string;

        /** Base_Inbox_InboxItemInfo Content. */
        public Content: string;

        /** Base_Inbox_InboxItemInfo IsRead. */
        public IsRead: boolean;

        /** Base_Inbox_InboxItemInfo IsClaimReward. */
        public IsClaimReward: boolean;

        /** Base_Inbox_InboxItemInfo ItemId1. */
        public ItemId1: number;

        /** Base_Inbox_InboxItemInfo ItemNum1. */
        public ItemNum1: number;

        /** Base_Inbox_InboxItemInfo ItemId2. */
        public ItemId2: number;

        /** Base_Inbox_InboxItemInfo ItemNum2. */
        public ItemNum2: number;

        /** Base_Inbox_InboxItemInfo ItemId3. */
        public ItemId3: number;

        /** Base_Inbox_InboxItemInfo ItemNum3. */
        public ItemNum3: number;

        /** Base_Inbox_InboxItemInfo Ts. */
        public Ts: (number|Long);

        /**
         * Creates a new Base_Inbox_InboxItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Inbox_InboxItemInfo instance
         */
        public static create(properties?: pb.IBase_Inbox_InboxItemInfo): pb.Base_Inbox_InboxItemInfo;

        /**
         * Encodes the specified Base_Inbox_InboxItemInfo message. Does not implicitly {@link pb.Base_Inbox_InboxItemInfo.verify|verify} messages.
         * @param message Base_Inbox_InboxItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Inbox_InboxItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Inbox_InboxItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Inbox_InboxItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Inbox_InboxItemInfo;

        /**
         * Gets the default type url for Base_Inbox_InboxItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_UpdateItemsInfoRet. */
    interface INet_Inbox_UpdateItemsInfoRet {

        /** Net_Inbox_UpdateItemsInfoRet UpdateItemList */
        UpdateItemList?: ({ [k: string]: pb.IBase_Inbox_InboxItemInfo }|null);
    }

    /** Represents a Net_Inbox_UpdateItemsInfoRet. */
    class Net_Inbox_UpdateItemsInfoRet implements INet_Inbox_UpdateItemsInfoRet {

        /**
         * Constructs a new Net_Inbox_UpdateItemsInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_UpdateItemsInfoRet);

        /** Net_Inbox_UpdateItemsInfoRet UpdateItemList. */
        public UpdateItemList: { [k: string]: pb.IBase_Inbox_InboxItemInfo };

        /**
         * Creates a new Net_Inbox_UpdateItemsInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_UpdateItemsInfoRet instance
         */
        public static create(properties?: pb.INet_Inbox_UpdateItemsInfoRet): pb.Net_Inbox_UpdateItemsInfoRet;

        /**
         * Encodes the specified Net_Inbox_UpdateItemsInfoRet message. Does not implicitly {@link pb.Net_Inbox_UpdateItemsInfoRet.verify|verify} messages.
         * @param message Net_Inbox_UpdateItemsInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_UpdateItemsInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_UpdateItemsInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_UpdateItemsInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_UpdateItemsInfoRet;

        /**
         * Gets the default type url for Net_Inbox_UpdateItemsInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_SendEmailReq. */
    interface INet_Inbox_SendEmailReq {

        /** Net_Inbox_SendEmailReq InboxItemInfo */
        InboxItemInfo?: (pb.IBase_Inbox_InboxItemInfo|null);
    }

    /** Represents a Net_Inbox_SendEmailReq. */
    class Net_Inbox_SendEmailReq implements INet_Inbox_SendEmailReq {

        /**
         * Constructs a new Net_Inbox_SendEmailReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_SendEmailReq);

        /** Net_Inbox_SendEmailReq InboxItemInfo. */
        public InboxItemInfo?: (pb.IBase_Inbox_InboxItemInfo|null);

        /**
         * Creates a new Net_Inbox_SendEmailReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_SendEmailReq instance
         */
        public static create(properties?: pb.INet_Inbox_SendEmailReq): pb.Net_Inbox_SendEmailReq;

        /**
         * Encodes the specified Net_Inbox_SendEmailReq message. Does not implicitly {@link pb.Net_Inbox_SendEmailReq.verify|verify} messages.
         * @param message Net_Inbox_SendEmailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_SendEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_SendEmailReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_SendEmailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_SendEmailReq;

        /**
         * Gets the default type url for Net_Inbox_SendEmailReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_SendEmailRet. */
    interface INet_Inbox_SendEmailRet {

        /** Net_Inbox_SendEmailRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Inbox_SendEmailRet. */
    class Net_Inbox_SendEmailRet implements INet_Inbox_SendEmailRet {

        /**
         * Constructs a new Net_Inbox_SendEmailRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_SendEmailRet);

        /** Net_Inbox_SendEmailRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Inbox_SendEmailRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_SendEmailRet instance
         */
        public static create(properties?: pb.INet_Inbox_SendEmailRet): pb.Net_Inbox_SendEmailRet;

        /**
         * Encodes the specified Net_Inbox_SendEmailRet message. Does not implicitly {@link pb.Net_Inbox_SendEmailRet.verify|verify} messages.
         * @param message Net_Inbox_SendEmailRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_SendEmailRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_SendEmailRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_SendEmailRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_SendEmailRet;

        /**
         * Gets the default type url for Net_Inbox_SendEmailRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_DeleteEmailReq. */
    interface INet_Inbox_DeleteEmailReq {

        /** Net_Inbox_DeleteEmailReq EmailIds */
        EmailIds?: (number[]|null);
    }

    /** Represents a Net_Inbox_DeleteEmailReq. */
    class Net_Inbox_DeleteEmailReq implements INet_Inbox_DeleteEmailReq {

        /**
         * Constructs a new Net_Inbox_DeleteEmailReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_DeleteEmailReq);

        /** Net_Inbox_DeleteEmailReq EmailIds. */
        public EmailIds: number[];

        /**
         * Creates a new Net_Inbox_DeleteEmailReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_DeleteEmailReq instance
         */
        public static create(properties?: pb.INet_Inbox_DeleteEmailReq): pb.Net_Inbox_DeleteEmailReq;

        /**
         * Encodes the specified Net_Inbox_DeleteEmailReq message. Does not implicitly {@link pb.Net_Inbox_DeleteEmailReq.verify|verify} messages.
         * @param message Net_Inbox_DeleteEmailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_DeleteEmailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_DeleteEmailReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_DeleteEmailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_DeleteEmailReq;

        /**
         * Gets the default type url for Net_Inbox_DeleteEmailReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_DeleteEmailRet. */
    interface INet_Inbox_DeleteEmailRet {

        /** Net_Inbox_DeleteEmailRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Inbox_DeleteEmailRet. */
    class Net_Inbox_DeleteEmailRet implements INet_Inbox_DeleteEmailRet {

        /**
         * Constructs a new Net_Inbox_DeleteEmailRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_DeleteEmailRet);

        /** Net_Inbox_DeleteEmailRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Inbox_DeleteEmailRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_DeleteEmailRet instance
         */
        public static create(properties?: pb.INet_Inbox_DeleteEmailRet): pb.Net_Inbox_DeleteEmailRet;

        /**
         * Encodes the specified Net_Inbox_DeleteEmailRet message. Does not implicitly {@link pb.Net_Inbox_DeleteEmailRet.verify|verify} messages.
         * @param message Net_Inbox_DeleteEmailRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_DeleteEmailRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_DeleteEmailRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_DeleteEmailRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_DeleteEmailRet;

        /**
         * Gets the default type url for Net_Inbox_DeleteEmailRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_ClaimRewardGiftsReq. */
    interface INet_Inbox_ClaimRewardGiftsReq {

        /** Net_Inbox_ClaimRewardGiftsReq EmailId */
        EmailId?: (number|null);
    }

    /** Represents a Net_Inbox_ClaimRewardGiftsReq. */
    class Net_Inbox_ClaimRewardGiftsReq implements INet_Inbox_ClaimRewardGiftsReq {

        /**
         * Constructs a new Net_Inbox_ClaimRewardGiftsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_ClaimRewardGiftsReq);

        /** Net_Inbox_ClaimRewardGiftsReq EmailId. */
        public EmailId: number;

        /**
         * Creates a new Net_Inbox_ClaimRewardGiftsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_ClaimRewardGiftsReq instance
         */
        public static create(properties?: pb.INet_Inbox_ClaimRewardGiftsReq): pb.Net_Inbox_ClaimRewardGiftsReq;

        /**
         * Encodes the specified Net_Inbox_ClaimRewardGiftsReq message. Does not implicitly {@link pb.Net_Inbox_ClaimRewardGiftsReq.verify|verify} messages.
         * @param message Net_Inbox_ClaimRewardGiftsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_ClaimRewardGiftsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_ClaimRewardGiftsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_ClaimRewardGiftsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_ClaimRewardGiftsReq;

        /**
         * Gets the default type url for Net_Inbox_ClaimRewardGiftsReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_ClaimRewardGiftsRet. */
    interface INet_Inbox_ClaimRewardGiftsRet {

        /** Net_Inbox_ClaimRewardGiftsRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Inbox_ClaimRewardGiftsRet. */
    class Net_Inbox_ClaimRewardGiftsRet implements INet_Inbox_ClaimRewardGiftsRet {

        /**
         * Constructs a new Net_Inbox_ClaimRewardGiftsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_ClaimRewardGiftsRet);

        /** Net_Inbox_ClaimRewardGiftsRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Inbox_ClaimRewardGiftsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_ClaimRewardGiftsRet instance
         */
        public static create(properties?: pb.INet_Inbox_ClaimRewardGiftsRet): pb.Net_Inbox_ClaimRewardGiftsRet;

        /**
         * Encodes the specified Net_Inbox_ClaimRewardGiftsRet message. Does not implicitly {@link pb.Net_Inbox_ClaimRewardGiftsRet.verify|verify} messages.
         * @param message Net_Inbox_ClaimRewardGiftsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_ClaimRewardGiftsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_ClaimRewardGiftsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_ClaimRewardGiftsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_ClaimRewardGiftsRet;

        /**
         * Gets the default type url for Net_Inbox_ClaimRewardGiftsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_GetInboxListRet. */
    interface INet_Inbox_GetInboxListRet {

        /** Net_Inbox_GetInboxListRet InboxItemInfoList */
        InboxItemInfoList?: ({ [k: string]: pb.IBase_Inbox_InboxItemInfo }|null);
    }

    /** Represents a Net_Inbox_GetInboxListRet. */
    class Net_Inbox_GetInboxListRet implements INet_Inbox_GetInboxListRet {

        /**
         * Constructs a new Net_Inbox_GetInboxListRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_GetInboxListRet);

        /** Net_Inbox_GetInboxListRet InboxItemInfoList. */
        public InboxItemInfoList: { [k: string]: pb.IBase_Inbox_InboxItemInfo };

        /**
         * Creates a new Net_Inbox_GetInboxListRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_GetInboxListRet instance
         */
        public static create(properties?: pb.INet_Inbox_GetInboxListRet): pb.Net_Inbox_GetInboxListRet;

        /**
         * Encodes the specified Net_Inbox_GetInboxListRet message. Does not implicitly {@link pb.Net_Inbox_GetInboxListRet.verify|verify} messages.
         * @param message Net_Inbox_GetInboxListRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_GetInboxListRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_GetInboxListRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_GetInboxListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_GetInboxListRet;

        /**
         * Gets the default type url for Net_Inbox_GetInboxListRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_ReceiveGiftsReq. */
    interface INet_Inbox_ReceiveGiftsReq {

        /** Net_Inbox_ReceiveGiftsReq Index */
        Index?: (number|null);
    }

    /** Represents a Net_Inbox_ReceiveGiftsReq. */
    class Net_Inbox_ReceiveGiftsReq implements INet_Inbox_ReceiveGiftsReq {

        /**
         * Constructs a new Net_Inbox_ReceiveGiftsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_ReceiveGiftsReq);

        /** Net_Inbox_ReceiveGiftsReq Index. */
        public Index: number;

        /**
         * Creates a new Net_Inbox_ReceiveGiftsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_ReceiveGiftsReq instance
         */
        public static create(properties?: pb.INet_Inbox_ReceiveGiftsReq): pb.Net_Inbox_ReceiveGiftsReq;

        /**
         * Encodes the specified Net_Inbox_ReceiveGiftsReq message. Does not implicitly {@link pb.Net_Inbox_ReceiveGiftsReq.verify|verify} messages.
         * @param message Net_Inbox_ReceiveGiftsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_ReceiveGiftsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_ReceiveGiftsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_ReceiveGiftsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_ReceiveGiftsReq;

        /**
         * Gets the default type url for Net_Inbox_ReceiveGiftsReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Inbox_ReceiveGiftsRet. */
    interface INet_Inbox_ReceiveGiftsRet {

        /** Net_Inbox_ReceiveGiftsRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Inbox_ReceiveGiftsRet. */
    class Net_Inbox_ReceiveGiftsRet implements INet_Inbox_ReceiveGiftsRet {

        /**
         * Constructs a new Net_Inbox_ReceiveGiftsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Inbox_ReceiveGiftsRet);

        /** Net_Inbox_ReceiveGiftsRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Inbox_ReceiveGiftsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Inbox_ReceiveGiftsRet instance
         */
        public static create(properties?: pb.INet_Inbox_ReceiveGiftsRet): pb.Net_Inbox_ReceiveGiftsRet;

        /**
         * Encodes the specified Net_Inbox_ReceiveGiftsRet message. Does not implicitly {@link pb.Net_Inbox_ReceiveGiftsRet.verify|verify} messages.
         * @param message Net_Inbox_ReceiveGiftsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Inbox_ReceiveGiftsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Inbox_ReceiveGiftsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Inbox_ReceiveGiftsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Inbox_ReceiveGiftsRet;

        /**
         * Gets the default type url for Net_Inbox_ReceiveGiftsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Item_ItemData. */
    interface IBase_Item_ItemData {

        /** Base_Item_ItemData Id */
        Id?: (number|null);

        /** Base_Item_ItemData Count */
        Count?: (number|null);

        /** Base_Item_ItemData Bind */
        Bind?: (number|null);

        /** Base_Item_ItemData ExpireAt */
        ExpireAt?: (number|Long|null);
    }

    /** Represents a Base_Item_ItemData. */
    class Base_Item_ItemData implements IBase_Item_ItemData {

        /**
         * Constructs a new Base_Item_ItemData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Item_ItemData);

        /** Base_Item_ItemData Id. */
        public Id: number;

        /** Base_Item_ItemData Count. */
        public Count: number;

        /** Base_Item_ItemData Bind. */
        public Bind: number;

        /** Base_Item_ItemData ExpireAt. */
        public ExpireAt: (number|Long);

        /**
         * Creates a new Base_Item_ItemData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Item_ItemData instance
         */
        public static create(properties?: pb.IBase_Item_ItemData): pb.Base_Item_ItemData;

        /**
         * Encodes the specified Base_Item_ItemData message. Does not implicitly {@link pb.Base_Item_ItemData.verify|verify} messages.
         * @param message Base_Item_ItemData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Item_ItemData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Item_ItemData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Item_ItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Item_ItemData;

        /**
         * Gets the default type url for Base_Item_ItemData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Item_ItemInfo. */
    interface IBase_Item_ItemInfo {

        /** Base_Item_ItemInfo ItemDataList */
        ItemDataList?: ({ [k: string]: pb.IBase_Item_ItemData }|null);
    }

    /** Represents a Base_Item_ItemInfo. */
    class Base_Item_ItemInfo implements IBase_Item_ItemInfo {

        /**
         * Constructs a new Base_Item_ItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Item_ItemInfo);

        /** Base_Item_ItemInfo ItemDataList. */
        public ItemDataList: { [k: string]: pb.IBase_Item_ItemData };

        /**
         * Creates a new Base_Item_ItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Item_ItemInfo instance
         */
        public static create(properties?: pb.IBase_Item_ItemInfo): pb.Base_Item_ItemInfo;

        /**
         * Encodes the specified Base_Item_ItemInfo message. Does not implicitly {@link pb.Base_Item_ItemInfo.verify|verify} messages.
         * @param message Base_Item_ItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Item_ItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Item_ItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Item_ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Item_ItemInfo;

        /**
         * Gets the default type url for Base_Item_ItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ItemType enum. */
    enum ItemType {
        ItemTypeIdle = 0,
        ItemTypeExpense = 1,
        ItemTypeHolyGrails = 3,
        ItemTypeGift = 4,
        ItemTypeHeroCard = 5
    }

    /** EItemType enum. */
    enum EItemType {
        BackItemInvalid = 0,
        ExpenseType = 1,
        GiftType = 6,
        MedicineType = 3,
        TASKType = 4,
        OtherType = 8,
        BuffType = 10,
        EquipmentType = 100
    }

    /** ENoRexItemType enum. */
    enum ENoRexItemType {
        NoRexItemInvalid = 0,
        NoRexItemCoinCard = 1,
        NoRexItemGoldCard = 2,
        NoRexItemHolyGrailCard = 3,
        NoRexItemJingYanDan = 4,
        NoRexItemJingYanGuo = 5,
        NoRexItemVipCard = 6,
        NoRexItemSkillBook = 7,
        NoRexItemShiZhuangItem = 8,
        NoRexItemShiZhuangImageCard = 9,
        NoRexItemTitleCard = 10,
        NoRexItemPetEgg = 11,
        NoRexItemVipJingYanDan = 15,
        NoRexItemGoldBindCard = 24,
        NoRexItemChangeSex = 26
    }

    /** Properties of a Net_Lobby_LuckyWheelReq. */
    interface INet_Lobby_LuckyWheelReq {
    }

    /** Represents a Net_Lobby_LuckyWheelReq. */
    class Net_Lobby_LuckyWheelReq implements INet_Lobby_LuckyWheelReq {

        /**
         * Constructs a new Net_Lobby_LuckyWheelReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_LuckyWheelReq);

        /**
         * Creates a new Net_Lobby_LuckyWheelReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_LuckyWheelReq instance
         */
        public static create(properties?: pb.INet_Lobby_LuckyWheelReq): pb.Net_Lobby_LuckyWheelReq;

        /**
         * Encodes the specified Net_Lobby_LuckyWheelReq message. Does not implicitly {@link pb.Net_Lobby_LuckyWheelReq.verify|verify} messages.
         * @param message Net_Lobby_LuckyWheelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_LuckyWheelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_LuckyWheelReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_LuckyWheelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_LuckyWheelReq;

        /**
         * Gets the default type url for Net_Lobby_LuckyWheelReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_LuckyWheelRet. */
    interface INet_Lobby_LuckyWheelRet {

        /** Net_Lobby_LuckyWheelRet Ret */
        Ret?: (number|null);

        /** Net_Lobby_LuckyWheelRet WinningId */
        WinningId?: (number|null);

        /** Net_Lobby_LuckyWheelRet PrizeId */
        PrizeId?: (number|null);

        /** Net_Lobby_LuckyWheelRet PrizeNum */
        PrizeNum?: (number|null);
    }

    /** Represents a Net_Lobby_LuckyWheelRet. */
    class Net_Lobby_LuckyWheelRet implements INet_Lobby_LuckyWheelRet {

        /**
         * Constructs a new Net_Lobby_LuckyWheelRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_LuckyWheelRet);

        /** Net_Lobby_LuckyWheelRet Ret. */
        public Ret: number;

        /** Net_Lobby_LuckyWheelRet WinningId. */
        public WinningId: number;

        /** Net_Lobby_LuckyWheelRet PrizeId. */
        public PrizeId: number;

        /** Net_Lobby_LuckyWheelRet PrizeNum. */
        public PrizeNum: number;

        /**
         * Creates a new Net_Lobby_LuckyWheelRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_LuckyWheelRet instance
         */
        public static create(properties?: pb.INet_Lobby_LuckyWheelRet): pb.Net_Lobby_LuckyWheelRet;

        /**
         * Encodes the specified Net_Lobby_LuckyWheelRet message. Does not implicitly {@link pb.Net_Lobby_LuckyWheelRet.verify|verify} messages.
         * @param message Net_Lobby_LuckyWheelRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_LuckyWheelRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_LuckyWheelRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_LuckyWheelRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_LuckyWheelRet;

        /**
         * Gets the default type url for Net_Lobby_LuckyWheelRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_CollectFcmRewardsRet. */
    interface INet_Lobby_CollectFcmRewardsRet {

        /** Net_Lobby_CollectFcmRewardsRet InvalidType */
        InvalidType?: (number|null);

        /** Net_Lobby_CollectFcmRewardsRet FcmRewards */
        FcmRewards?: (string|null);

        /** Net_Lobby_CollectFcmRewardsRet Type */
        Type?: (string|null);
    }

    /** Represents a Net_Lobby_CollectFcmRewardsRet. */
    class Net_Lobby_CollectFcmRewardsRet implements INet_Lobby_CollectFcmRewardsRet {

        /**
         * Constructs a new Net_Lobby_CollectFcmRewardsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_CollectFcmRewardsRet);

        /** Net_Lobby_CollectFcmRewardsRet InvalidType. */
        public InvalidType: number;

        /** Net_Lobby_CollectFcmRewardsRet FcmRewards. */
        public FcmRewards: string;

        /** Net_Lobby_CollectFcmRewardsRet Type. */
        public Type: string;

        /**
         * Creates a new Net_Lobby_CollectFcmRewardsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_CollectFcmRewardsRet instance
         */
        public static create(properties?: pb.INet_Lobby_CollectFcmRewardsRet): pb.Net_Lobby_CollectFcmRewardsRet;

        /**
         * Encodes the specified Net_Lobby_CollectFcmRewardsRet message. Does not implicitly {@link pb.Net_Lobby_CollectFcmRewardsRet.verify|verify} messages.
         * @param message Net_Lobby_CollectFcmRewardsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_CollectFcmRewardsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_CollectFcmRewardsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_CollectFcmRewardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_CollectFcmRewardsRet;

        /**
         * Gets the default type url for Net_Lobby_CollectFcmRewardsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Lobby_WeeklyPrize. */
    interface IBase_Lobby_WeeklyPrize {

        /** Base_Lobby_WeeklyPrize Coins */
        Coins?: (number|null);

        /** Base_Lobby_WeeklyPrize Golds */
        Golds?: (number|null);

        /** Base_Lobby_WeeklyPrize HolyGrails */
        HolyGrails?: (number|null);
    }

    /** Represents a Base_Lobby_WeeklyPrize. */
    class Base_Lobby_WeeklyPrize implements IBase_Lobby_WeeklyPrize {

        /**
         * Constructs a new Base_Lobby_WeeklyPrize.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Lobby_WeeklyPrize);

        /** Base_Lobby_WeeklyPrize Coins. */
        public Coins: number;

        /** Base_Lobby_WeeklyPrize Golds. */
        public Golds: number;

        /** Base_Lobby_WeeklyPrize HolyGrails. */
        public HolyGrails: number;

        /**
         * Creates a new Base_Lobby_WeeklyPrize instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Lobby_WeeklyPrize instance
         */
        public static create(properties?: pb.IBase_Lobby_WeeklyPrize): pb.Base_Lobby_WeeklyPrize;

        /**
         * Encodes the specified Base_Lobby_WeeklyPrize message. Does not implicitly {@link pb.Base_Lobby_WeeklyPrize.verify|verify} messages.
         * @param message Base_Lobby_WeeklyPrize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Lobby_WeeklyPrize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Lobby_WeeklyPrize message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Lobby_WeeklyPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Lobby_WeeklyPrize;

        /**
         * Gets the default type url for Base_Lobby_WeeklyPrize
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_CollectLoginBonusReq. */
    interface INet_Lobby_CollectLoginBonusReq {
    }

    /** Represents a Net_Lobby_CollectLoginBonusReq. */
    class Net_Lobby_CollectLoginBonusReq implements INet_Lobby_CollectLoginBonusReq {

        /**
         * Constructs a new Net_Lobby_CollectLoginBonusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_CollectLoginBonusReq);

        /**
         * Creates a new Net_Lobby_CollectLoginBonusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_CollectLoginBonusReq instance
         */
        public static create(properties?: pb.INet_Lobby_CollectLoginBonusReq): pb.Net_Lobby_CollectLoginBonusReq;

        /**
         * Encodes the specified Net_Lobby_CollectLoginBonusReq message. Does not implicitly {@link pb.Net_Lobby_CollectLoginBonusReq.verify|verify} messages.
         * @param message Net_Lobby_CollectLoginBonusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_CollectLoginBonusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_CollectLoginBonusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_CollectLoginBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_CollectLoginBonusReq;

        /**
         * Gets the default type url for Net_Lobby_CollectLoginBonusReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_CollectLoginBonusRet. */
    interface INet_Lobby_CollectLoginBonusRet {

        /** Net_Lobby_CollectLoginBonusRet Ret */
        Ret?: (number|null);

        /** Net_Lobby_CollectLoginBonusRet WeeklyPrize */
        WeeklyPrize?: (pb.IBase_Lobby_WeeklyPrize|null);

        /** Net_Lobby_CollectLoginBonusRet CurrentCoins */
        CurrentCoins?: (number|null);

        /** Net_Lobby_CollectLoginBonusRet CurrentGolds */
        CurrentGolds?: (number|null);

        /** Net_Lobby_CollectLoginBonusRet CurrentHolyGrails */
        CurrentHolyGrails?: (number|null);
    }

    /** Represents a Net_Lobby_CollectLoginBonusRet. */
    class Net_Lobby_CollectLoginBonusRet implements INet_Lobby_CollectLoginBonusRet {

        /**
         * Constructs a new Net_Lobby_CollectLoginBonusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_CollectLoginBonusRet);

        /** Net_Lobby_CollectLoginBonusRet Ret. */
        public Ret: number;

        /** Net_Lobby_CollectLoginBonusRet WeeklyPrize. */
        public WeeklyPrize?: (pb.IBase_Lobby_WeeklyPrize|null);

        /** Net_Lobby_CollectLoginBonusRet CurrentCoins. */
        public CurrentCoins: number;

        /** Net_Lobby_CollectLoginBonusRet CurrentGolds. */
        public CurrentGolds: number;

        /** Net_Lobby_CollectLoginBonusRet CurrentHolyGrails. */
        public CurrentHolyGrails: number;

        /**
         * Creates a new Net_Lobby_CollectLoginBonusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_CollectLoginBonusRet instance
         */
        public static create(properties?: pb.INet_Lobby_CollectLoginBonusRet): pb.Net_Lobby_CollectLoginBonusRet;

        /**
         * Encodes the specified Net_Lobby_CollectLoginBonusRet message. Does not implicitly {@link pb.Net_Lobby_CollectLoginBonusRet.verify|verify} messages.
         * @param message Net_Lobby_CollectLoginBonusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_CollectLoginBonusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_CollectLoginBonusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_CollectLoginBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_CollectLoginBonusRet;

        /**
         * Gets the default type url for Net_Lobby_CollectLoginBonusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_ReissueLoginBonusReq. */
    interface INet_Lobby_ReissueLoginBonusReq {

        /** Net_Lobby_ReissueLoginBonusReq MonthCount */
        MonthCount?: (number|null);
    }

    /** Represents a Net_Lobby_ReissueLoginBonusReq. */
    class Net_Lobby_ReissueLoginBonusReq implements INet_Lobby_ReissueLoginBonusReq {

        /**
         * Constructs a new Net_Lobby_ReissueLoginBonusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_ReissueLoginBonusReq);

        /** Net_Lobby_ReissueLoginBonusReq MonthCount. */
        public MonthCount: number;

        /**
         * Creates a new Net_Lobby_ReissueLoginBonusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_ReissueLoginBonusReq instance
         */
        public static create(properties?: pb.INet_Lobby_ReissueLoginBonusReq): pb.Net_Lobby_ReissueLoginBonusReq;

        /**
         * Encodes the specified Net_Lobby_ReissueLoginBonusReq message. Does not implicitly {@link pb.Net_Lobby_ReissueLoginBonusReq.verify|verify} messages.
         * @param message Net_Lobby_ReissueLoginBonusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_ReissueLoginBonusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_ReissueLoginBonusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_ReissueLoginBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_ReissueLoginBonusReq;

        /**
         * Gets the default type url for Net_Lobby_ReissueLoginBonusReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_ReissueLoginBonusRet. */
    interface INet_Lobby_ReissueLoginBonusRet {

        /** Net_Lobby_ReissueLoginBonusRet Ret */
        Ret?: (number|null);

        /** Net_Lobby_ReissueLoginBonusRet WeeklyPrize */
        WeeklyPrize?: (pb.IBase_Lobby_WeeklyPrize|null);

        /** Net_Lobby_ReissueLoginBonusRet CurrentCoins */
        CurrentCoins?: (number|null);

        /** Net_Lobby_ReissueLoginBonusRet CurrentGolds */
        CurrentGolds?: (number|null);

        /** Net_Lobby_ReissueLoginBonusRet CurrentHolyGrails */
        CurrentHolyGrails?: (number|null);
    }

    /** Represents a Net_Lobby_ReissueLoginBonusRet. */
    class Net_Lobby_ReissueLoginBonusRet implements INet_Lobby_ReissueLoginBonusRet {

        /**
         * Constructs a new Net_Lobby_ReissueLoginBonusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_ReissueLoginBonusRet);

        /** Net_Lobby_ReissueLoginBonusRet Ret. */
        public Ret: number;

        /** Net_Lobby_ReissueLoginBonusRet WeeklyPrize. */
        public WeeklyPrize?: (pb.IBase_Lobby_WeeklyPrize|null);

        /** Net_Lobby_ReissueLoginBonusRet CurrentCoins. */
        public CurrentCoins: number;

        /** Net_Lobby_ReissueLoginBonusRet CurrentGolds. */
        public CurrentGolds: number;

        /** Net_Lobby_ReissueLoginBonusRet CurrentHolyGrails. */
        public CurrentHolyGrails: number;

        /**
         * Creates a new Net_Lobby_ReissueLoginBonusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_ReissueLoginBonusRet instance
         */
        public static create(properties?: pb.INet_Lobby_ReissueLoginBonusRet): pb.Net_Lobby_ReissueLoginBonusRet;

        /**
         * Encodes the specified Net_Lobby_ReissueLoginBonusRet message. Does not implicitly {@link pb.Net_Lobby_ReissueLoginBonusRet.verify|verify} messages.
         * @param message Net_Lobby_ReissueLoginBonusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_ReissueLoginBonusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_ReissueLoginBonusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_ReissueLoginBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_ReissueLoginBonusRet;

        /**
         * Gets the default type url for Net_Lobby_ReissueLoginBonusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_GetDailyBonusReq. */
    interface INet_Lobby_GetDailyBonusReq {
    }

    /** Represents a Net_Lobby_GetDailyBonusReq. */
    class Net_Lobby_GetDailyBonusReq implements INet_Lobby_GetDailyBonusReq {

        /**
         * Constructs a new Net_Lobby_GetDailyBonusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_GetDailyBonusReq);

        /**
         * Creates a new Net_Lobby_GetDailyBonusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_GetDailyBonusReq instance
         */
        public static create(properties?: pb.INet_Lobby_GetDailyBonusReq): pb.Net_Lobby_GetDailyBonusReq;

        /**
         * Encodes the specified Net_Lobby_GetDailyBonusReq message. Does not implicitly {@link pb.Net_Lobby_GetDailyBonusReq.verify|verify} messages.
         * @param message Net_Lobby_GetDailyBonusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_GetDailyBonusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_GetDailyBonusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_GetDailyBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_GetDailyBonusReq;

        /**
         * Gets the default type url for Net_Lobby_GetDailyBonusReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_GetDailyBonusRet. */
    interface INet_Lobby_GetDailyBonusRet {
    }

    /** Represents a Net_Lobby_GetDailyBonusRet. */
    class Net_Lobby_GetDailyBonusRet implements INet_Lobby_GetDailyBonusRet {

        /**
         * Constructs a new Net_Lobby_GetDailyBonusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_GetDailyBonusRet);

        /**
         * Creates a new Net_Lobby_GetDailyBonusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_GetDailyBonusRet instance
         */
        public static create(properties?: pb.INet_Lobby_GetDailyBonusRet): pb.Net_Lobby_GetDailyBonusRet;

        /**
         * Encodes the specified Net_Lobby_GetDailyBonusRet message. Does not implicitly {@link pb.Net_Lobby_GetDailyBonusRet.verify|verify} messages.
         * @param message Net_Lobby_GetDailyBonusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_GetDailyBonusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_GetDailyBonusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_GetDailyBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_GetDailyBonusRet;

        /**
         * Gets the default type url for Net_Lobby_GetDailyBonusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_CollectDailyBonusReq. */
    interface INet_Lobby_CollectDailyBonusReq {

        /** Net_Lobby_CollectDailyBonusReq TickIndex */
        TickIndex?: (number|null);
    }

    /** Represents a Net_Lobby_CollectDailyBonusReq. */
    class Net_Lobby_CollectDailyBonusReq implements INet_Lobby_CollectDailyBonusReq {

        /**
         * Constructs a new Net_Lobby_CollectDailyBonusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_CollectDailyBonusReq);

        /** Net_Lobby_CollectDailyBonusReq TickIndex. */
        public TickIndex: number;

        /**
         * Creates a new Net_Lobby_CollectDailyBonusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_CollectDailyBonusReq instance
         */
        public static create(properties?: pb.INet_Lobby_CollectDailyBonusReq): pb.Net_Lobby_CollectDailyBonusReq;

        /**
         * Encodes the specified Net_Lobby_CollectDailyBonusReq message. Does not implicitly {@link pb.Net_Lobby_CollectDailyBonusReq.verify|verify} messages.
         * @param message Net_Lobby_CollectDailyBonusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_CollectDailyBonusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_CollectDailyBonusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_CollectDailyBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_CollectDailyBonusReq;

        /**
         * Gets the default type url for Net_Lobby_CollectDailyBonusReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Lobby_CollectDailyBonusRet. */
    interface INet_Lobby_CollectDailyBonusRet {

        /** Net_Lobby_CollectDailyBonusRet TickIndex */
        TickIndex?: (number|null);

        /** Net_Lobby_CollectDailyBonusRet IsBool */
        IsBool?: (boolean|null);
    }

    /** Represents a Net_Lobby_CollectDailyBonusRet. */
    class Net_Lobby_CollectDailyBonusRet implements INet_Lobby_CollectDailyBonusRet {

        /**
         * Constructs a new Net_Lobby_CollectDailyBonusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Lobby_CollectDailyBonusRet);

        /** Net_Lobby_CollectDailyBonusRet TickIndex. */
        public TickIndex: number;

        /** Net_Lobby_CollectDailyBonusRet IsBool. */
        public IsBool: boolean;

        /**
         * Creates a new Net_Lobby_CollectDailyBonusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Lobby_CollectDailyBonusRet instance
         */
        public static create(properties?: pb.INet_Lobby_CollectDailyBonusRet): pb.Net_Lobby_CollectDailyBonusRet;

        /**
         * Encodes the specified Net_Lobby_CollectDailyBonusRet message. Does not implicitly {@link pb.Net_Lobby_CollectDailyBonusRet.verify|verify} messages.
         * @param message Net_Lobby_CollectDailyBonusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Lobby_CollectDailyBonusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Lobby_CollectDailyBonusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Lobby_CollectDailyBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Lobby_CollectDailyBonusRet;

        /**
         * Gets the default type url for Net_Lobby_CollectDailyBonusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_ErrorRet. */
    interface INet_Login_ErrorRet {

        /** Net_Login_ErrorRet ErrorNum */
        ErrorNum?: (number|null);

        /** Net_Login_ErrorRet ErrorStr */
        ErrorStr?: (string|null);
    }

    /** Represents a Net_Login_ErrorRet. */
    class Net_Login_ErrorRet implements INet_Login_ErrorRet {

        /**
         * Constructs a new Net_Login_ErrorRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_ErrorRet);

        /** Net_Login_ErrorRet ErrorNum. */
        public ErrorNum: number;

        /** Net_Login_ErrorRet ErrorStr. */
        public ErrorStr: string;

        /**
         * Creates a new Net_Login_ErrorRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_ErrorRet instance
         */
        public static create(properties?: pb.INet_Login_ErrorRet): pb.Net_Login_ErrorRet;

        /**
         * Encodes the specified Net_Login_ErrorRet message. Does not implicitly {@link pb.Net_Login_ErrorRet.verify|verify} messages.
         * @param message Net_Login_ErrorRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_ErrorRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_ErrorRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_ErrorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_ErrorRet;

        /**
         * Gets the default type url for Net_Login_ErrorRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_LoginReq. */
    interface INet_Login_LoginReq {

        /** Net_Login_LoginReq AuthToken */
        AuthToken?: (string|null);

        /** Net_Login_LoginReq DeviceId */
        DeviceId?: (string|null);

        /** Net_Login_LoginReq Package */
        Package?: (string|null);

        /** Net_Login_LoginReq Version */
        Version?: (string|null);

        /** Net_Login_LoginReq HotVersion */
        HotVersion?: (string|null);

        /** Net_Login_LoginReq DeviceModel */
        DeviceModel?: (string|null);

        /** Net_Login_LoginReq SysVersion */
        SysVersion?: (string|null);
    }

    /** Represents a Net_Login_LoginReq. */
    class Net_Login_LoginReq implements INet_Login_LoginReq {

        /**
         * Constructs a new Net_Login_LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_LoginReq);

        /** Net_Login_LoginReq AuthToken. */
        public AuthToken: string;

        /** Net_Login_LoginReq DeviceId. */
        public DeviceId: string;

        /** Net_Login_LoginReq Package. */
        public Package: string;

        /** Net_Login_LoginReq Version. */
        public Version: string;

        /** Net_Login_LoginReq HotVersion. */
        public HotVersion: string;

        /** Net_Login_LoginReq DeviceModel. */
        public DeviceModel: string;

        /** Net_Login_LoginReq SysVersion. */
        public SysVersion: string;

        /**
         * Creates a new Net_Login_LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_LoginReq instance
         */
        public static create(properties?: pb.INet_Login_LoginReq): pb.Net_Login_LoginReq;

        /**
         * Encodes the specified Net_Login_LoginReq message. Does not implicitly {@link pb.Net_Login_LoginReq.verify|verify} messages.
         * @param message Net_Login_LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_LoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_LoginReq;

        /**
         * Gets the default type url for Net_Login_LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_LoginRet. */
    interface INet_Login_LoginRet {

        /** Net_Login_LoginRet Ret */
        Ret?: (number|null);

        /** Net_Login_LoginRet ServerTime */
        ServerTime?: (number|Long|null);

        /** Net_Login_LoginRet Credential */
        Credential?: (string|null);

        /** Net_Login_LoginRet DifferentDevice */
        DifferentDevice?: (number|null);

        /** Net_Login_LoginRet IsFirstLogin */
        IsFirstLogin?: (boolean|null);

        /** Net_Login_LoginRet GameUserInfo */
        GameUserInfo?: (pb.IBase_User_GameUserInfo|null);
    }

    /** Represents a Net_Login_LoginRet. */
    class Net_Login_LoginRet implements INet_Login_LoginRet {

        /**
         * Constructs a new Net_Login_LoginRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_LoginRet);

        /** Net_Login_LoginRet Ret. */
        public Ret: number;

        /** Net_Login_LoginRet ServerTime. */
        public ServerTime: (number|Long);

        /** Net_Login_LoginRet Credential. */
        public Credential: string;

        /** Net_Login_LoginRet DifferentDevice. */
        public DifferentDevice: number;

        /** Net_Login_LoginRet IsFirstLogin. */
        public IsFirstLogin: boolean;

        /** Net_Login_LoginRet GameUserInfo. */
        public GameUserInfo?: (pb.IBase_User_GameUserInfo|null);

        /**
         * Creates a new Net_Login_LoginRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_LoginRet instance
         */
        public static create(properties?: pb.INet_Login_LoginRet): pb.Net_Login_LoginRet;

        /**
         * Encodes the specified Net_Login_LoginRet message. Does not implicitly {@link pb.Net_Login_LoginRet.verify|verify} messages.
         * @param message Net_Login_LoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_LoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_LoginRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_LoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_LoginRet;

        /**
         * Gets the default type url for Net_Login_LoginRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_KeepAliveReq. */
    interface INet_Login_KeepAliveReq {
    }

    /** Represents a Net_Login_KeepAliveReq. */
    class Net_Login_KeepAliveReq implements INet_Login_KeepAliveReq {

        /**
         * Constructs a new Net_Login_KeepAliveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_KeepAliveReq);

        /**
         * Creates a new Net_Login_KeepAliveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_KeepAliveReq instance
         */
        public static create(properties?: pb.INet_Login_KeepAliveReq): pb.Net_Login_KeepAliveReq;

        /**
         * Encodes the specified Net_Login_KeepAliveReq message. Does not implicitly {@link pb.Net_Login_KeepAliveReq.verify|verify} messages.
         * @param message Net_Login_KeepAliveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_KeepAliveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_KeepAliveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_KeepAliveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_KeepAliveReq;

        /**
         * Gets the default type url for Net_Login_KeepAliveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_KeepAliveRet. */
    interface INet_Login_KeepAliveRet {

        /** Net_Login_KeepAliveRet Coins */
        Coins?: (number|null);

        /** Net_Login_KeepAliveRet CurrentServerTime */
        CurrentServerTime?: (number|Long|null);
    }

    /** Represents a Net_Login_KeepAliveRet. */
    class Net_Login_KeepAliveRet implements INet_Login_KeepAliveRet {

        /**
         * Constructs a new Net_Login_KeepAliveRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_KeepAliveRet);

        /** Net_Login_KeepAliveRet Coins. */
        public Coins: number;

        /** Net_Login_KeepAliveRet CurrentServerTime. */
        public CurrentServerTime: (number|Long);

        /**
         * Creates a new Net_Login_KeepAliveRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_KeepAliveRet instance
         */
        public static create(properties?: pb.INet_Login_KeepAliveRet): pb.Net_Login_KeepAliveRet;

        /**
         * Encodes the specified Net_Login_KeepAliveRet message. Does not implicitly {@link pb.Net_Login_KeepAliveRet.verify|verify} messages.
         * @param message Net_Login_KeepAliveRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_KeepAliveRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_KeepAliveRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_KeepAliveRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_KeepAliveRet;

        /**
         * Gets the default type url for Net_Login_KeepAliveRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_ReconnectReq. */
    interface INet_Login_ReconnectReq {

        /** Net_Login_ReconnectReq ThemeId */
        ThemeId?: (number|null);

        /** Net_Login_ReconnectReq Quest */
        Quest?: (boolean|null);

        /** Net_Login_ReconnectReq NormalQuest */
        NormalQuest?: (boolean|null);
    }

    /** Represents a Net_Login_ReconnectReq. */
    class Net_Login_ReconnectReq implements INet_Login_ReconnectReq {

        /**
         * Constructs a new Net_Login_ReconnectReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_ReconnectReq);

        /** Net_Login_ReconnectReq ThemeId. */
        public ThemeId: number;

        /** Net_Login_ReconnectReq Quest. */
        public Quest: boolean;

        /** Net_Login_ReconnectReq NormalQuest. */
        public NormalQuest: boolean;

        /**
         * Creates a new Net_Login_ReconnectReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_ReconnectReq instance
         */
        public static create(properties?: pb.INet_Login_ReconnectReq): pb.Net_Login_ReconnectReq;

        /**
         * Encodes the specified Net_Login_ReconnectReq message. Does not implicitly {@link pb.Net_Login_ReconnectReq.verify|verify} messages.
         * @param message Net_Login_ReconnectReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_ReconnectReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_ReconnectReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_ReconnectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_ReconnectReq;

        /**
         * Gets the default type url for Net_Login_ReconnectReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_ReconnectRet. */
    interface INet_Login_ReconnectRet {

        /** Net_Login_ReconnectRet Ret */
        Ret?: (number|null);

        /** Net_Login_ReconnectRet GameUserInfo */
        GameUserInfo?: (pb.IBase_User_GameUserInfo|null);
    }

    /** Represents a Net_Login_ReconnectRet. */
    class Net_Login_ReconnectRet implements INet_Login_ReconnectRet {

        /**
         * Constructs a new Net_Login_ReconnectRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_ReconnectRet);

        /** Net_Login_ReconnectRet Ret. */
        public Ret: number;

        /** Net_Login_ReconnectRet GameUserInfo. */
        public GameUserInfo?: (pb.IBase_User_GameUserInfo|null);

        /**
         * Creates a new Net_Login_ReconnectRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_ReconnectRet instance
         */
        public static create(properties?: pb.INet_Login_ReconnectRet): pb.Net_Login_ReconnectRet;

        /**
         * Encodes the specified Net_Login_ReconnectRet message. Does not implicitly {@link pb.Net_Login_ReconnectRet.verify|verify} messages.
         * @param message Net_Login_ReconnectRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_ReconnectRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_ReconnectRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_ReconnectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_ReconnectRet;

        /**
         * Gets the default type url for Net_Login_ReconnectRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_MultiUserLoginRet. */
    interface INet_Login_MultiUserLoginRet {

        /** Net_Login_MultiUserLoginRet LoginAddress */
        LoginAddress?: (string|null);
    }

    /** Represents a Net_Login_MultiUserLoginRet. */
    class Net_Login_MultiUserLoginRet implements INet_Login_MultiUserLoginRet {

        /**
         * Constructs a new Net_Login_MultiUserLoginRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_MultiUserLoginRet);

        /** Net_Login_MultiUserLoginRet LoginAddress. */
        public LoginAddress: string;

        /**
         * Creates a new Net_Login_MultiUserLoginRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_MultiUserLoginRet instance
         */
        public static create(properties?: pb.INet_Login_MultiUserLoginRet): pb.Net_Login_MultiUserLoginRet;

        /**
         * Encodes the specified Net_Login_MultiUserLoginRet message. Does not implicitly {@link pb.Net_Login_MultiUserLoginRet.verify|verify} messages.
         * @param message Net_Login_MultiUserLoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_MultiUserLoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_MultiUserLoginRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_MultiUserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_MultiUserLoginRet;

        /**
         * Gets the default type url for Net_Login_MultiUserLoginRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_LogoutReq. */
    interface INet_Login_LogoutReq {
    }

    /** Represents a Net_Login_LogoutReq. */
    class Net_Login_LogoutReq implements INet_Login_LogoutReq {

        /**
         * Constructs a new Net_Login_LogoutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_LogoutReq);

        /**
         * Creates a new Net_Login_LogoutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_LogoutReq instance
         */
        public static create(properties?: pb.INet_Login_LogoutReq): pb.Net_Login_LogoutReq;

        /**
         * Encodes the specified Net_Login_LogoutReq message. Does not implicitly {@link pb.Net_Login_LogoutReq.verify|verify} messages.
         * @param message Net_Login_LogoutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_LogoutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_LogoutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_LogoutReq;

        /**
         * Gets the default type url for Net_Login_LogoutReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Login_LogoutRet. */
    interface INet_Login_LogoutRet {
    }

    /** Represents a Net_Login_LogoutRet. */
    class Net_Login_LogoutRet implements INet_Login_LogoutRet {

        /**
         * Constructs a new Net_Login_LogoutRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Login_LogoutRet);

        /**
         * Creates a new Net_Login_LogoutRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Login_LogoutRet instance
         */
        public static create(properties?: pb.INet_Login_LogoutRet): pb.Net_Login_LogoutRet;

        /**
         * Encodes the specified Net_Login_LogoutRet message. Does not implicitly {@link pb.Net_Login_LogoutRet.verify|verify} messages.
         * @param message Net_Login_LogoutRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Login_LogoutRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Login_LogoutRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Login_LogoutRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Login_LogoutRet;

        /**
         * Gets the default type url for Net_Login_LogoutRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ECurrency enum. */
    enum ECurrency {
        Golds = 0,
        Coins = 1
    }

    /** Properties of a Base_User_GameUserInfo. */
    interface IBase_User_GameUserInfo {

        /** Base_User_GameUserInfo UserId */
        UserId?: (string|null);

        /** Base_User_GameUserInfo AreaId */
        AreaId?: (string|null);

        /** Base_User_GameUserInfo RoleInfo */
        RoleInfo?: (pb.IBase_User_RoleInfo|null);

        /** Base_User_GameUserInfo ItemInfo */
        ItemInfo?: (pb.IBase_Item_ItemInfo|null);

        /** Base_User_GameUserInfo MoneyInfo */
        MoneyInfo?: (pb.IBase_Player_MoneyInfo|null);

        /** Base_User_GameUserInfo BackpackInfo */
        BackpackInfo?: (pb.IBase_Backpack_BackpackInfo|null);

        /** Base_User_GameUserInfo LoginBonusInfo */
        LoginBonusInfo?: (pb.IBase_Player_LoginBonusInfo|null);

        /** Base_User_GameUserInfo DailyBonusInfo */
        DailyBonusInfo?: (pb.IBase_Player_DailyBonusInfo|null);

        /** Base_User_GameUserInfo VipInfo */
        VipInfo?: (pb.IBase_Vip_VipInfo|null);

        /** Base_User_GameUserInfo ActivityInfo */
        ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);

        /** Base_User_GameUserInfo ThemeInfo */
        ThemeInfo?: (pb.IBase_Player_ThemeInfo|null);

        /** Base_User_GameUserInfo ShopInfo */
        ShopInfo?: (pb.IBase_Shop_ShopInfo|null);

        /** Base_User_GameUserInfo InboxInfo */
        InboxInfo?: (pb.IBase_Inbox_InboxInfo|null);

        /** Base_User_GameUserInfo TaskInfo */
        TaskInfo?: (pb.IBase_Task_TaskInfo|null);

        /** Base_User_GameUserInfo CupTaskInfo */
        CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);

        /** Base_User_GameUserInfo GuideInfo */
        GuideInfo?: (pb.IBase_Guide_GuideInfo|null);
    }

    /** Represents a Base_User_GameUserInfo. */
    class Base_User_GameUserInfo implements IBase_User_GameUserInfo {

        /**
         * Constructs a new Base_User_GameUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_User_GameUserInfo);

        /** Base_User_GameUserInfo UserId. */
        public UserId: string;

        /** Base_User_GameUserInfo AreaId. */
        public AreaId: string;

        /** Base_User_GameUserInfo RoleInfo. */
        public RoleInfo?: (pb.IBase_User_RoleInfo|null);

        /** Base_User_GameUserInfo ItemInfo. */
        public ItemInfo?: (pb.IBase_Item_ItemInfo|null);

        /** Base_User_GameUserInfo MoneyInfo. */
        public MoneyInfo?: (pb.IBase_Player_MoneyInfo|null);

        /** Base_User_GameUserInfo BackpackInfo. */
        public BackpackInfo?: (pb.IBase_Backpack_BackpackInfo|null);

        /** Base_User_GameUserInfo LoginBonusInfo. */
        public LoginBonusInfo?: (pb.IBase_Player_LoginBonusInfo|null);

        /** Base_User_GameUserInfo DailyBonusInfo. */
        public DailyBonusInfo?: (pb.IBase_Player_DailyBonusInfo|null);

        /** Base_User_GameUserInfo VipInfo. */
        public VipInfo?: (pb.IBase_Vip_VipInfo|null);

        /** Base_User_GameUserInfo ActivityInfo. */
        public ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);

        /** Base_User_GameUserInfo ThemeInfo. */
        public ThemeInfo?: (pb.IBase_Player_ThemeInfo|null);

        /** Base_User_GameUserInfo ShopInfo. */
        public ShopInfo?: (pb.IBase_Shop_ShopInfo|null);

        /** Base_User_GameUserInfo InboxInfo. */
        public InboxInfo?: (pb.IBase_Inbox_InboxInfo|null);

        /** Base_User_GameUserInfo TaskInfo. */
        public TaskInfo?: (pb.IBase_Task_TaskInfo|null);

        /** Base_User_GameUserInfo CupTaskInfo. */
        public CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);

        /** Base_User_GameUserInfo GuideInfo. */
        public GuideInfo?: (pb.IBase_Guide_GuideInfo|null);

        /**
         * Creates a new Base_User_GameUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_User_GameUserInfo instance
         */
        public static create(properties?: pb.IBase_User_GameUserInfo): pb.Base_User_GameUserInfo;

        /**
         * Encodes the specified Base_User_GameUserInfo message. Does not implicitly {@link pb.Base_User_GameUserInfo.verify|verify} messages.
         * @param message Base_User_GameUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_User_GameUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_User_GameUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_User_GameUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_User_GameUserInfo;

        /**
         * Gets the default type url for Base_User_GameUserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_User_RoleInfo. */
    interface IBase_User_RoleInfo {

        /** Base_User_RoleInfo UserId */
        UserId?: (string|null);

        /** Base_User_RoleInfo NickName */
        NickName?: (string|null);

        /** Base_User_RoleInfo Gold */
        Gold?: (number|null);

        /** Base_User_RoleInfo Coin */
        Coin?: (number|null);

        /** Base_User_RoleInfo Level */
        Level?: (number|null);

        /** Base_User_RoleInfo Exp */
        Exp?: (number|null);

        /** Base_User_RoleInfo ExpLimit */
        ExpLimit?: (number|null);

        /** Base_User_RoleInfo IsNewPlayer */
        IsNewPlayer?: (number|null);
    }

    /** Represents a Base_User_RoleInfo. */
    class Base_User_RoleInfo implements IBase_User_RoleInfo {

        /**
         * Constructs a new Base_User_RoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_User_RoleInfo);

        /** Base_User_RoleInfo UserId. */
        public UserId: string;

        /** Base_User_RoleInfo NickName. */
        public NickName: string;

        /** Base_User_RoleInfo Gold. */
        public Gold: number;

        /** Base_User_RoleInfo Coin. */
        public Coin: number;

        /** Base_User_RoleInfo Level. */
        public Level: number;

        /** Base_User_RoleInfo Exp. */
        public Exp: number;

        /** Base_User_RoleInfo ExpLimit. */
        public ExpLimit: number;

        /** Base_User_RoleInfo IsNewPlayer. */
        public IsNewPlayer: number;

        /**
         * Creates a new Base_User_RoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_User_RoleInfo instance
         */
        public static create(properties?: pb.IBase_User_RoleInfo): pb.Base_User_RoleInfo;

        /**
         * Encodes the specified Base_User_RoleInfo message. Does not implicitly {@link pb.Base_User_RoleInfo.verify|verify} messages.
         * @param message Base_User_RoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_User_RoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_User_RoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_User_RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_User_RoleInfo;

        /**
         * Gets the default type url for Base_User_RoleInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_User_UpdateCurrencyRet. */
    interface INet_User_UpdateCurrencyRet {
    }

    /** Represents a Net_User_UpdateCurrencyRet. */
    class Net_User_UpdateCurrencyRet implements INet_User_UpdateCurrencyRet {

        /**
         * Constructs a new Net_User_UpdateCurrencyRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_User_UpdateCurrencyRet);

        /**
         * Creates a new Net_User_UpdateCurrencyRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_User_UpdateCurrencyRet instance
         */
        public static create(properties?: pb.INet_User_UpdateCurrencyRet): pb.Net_User_UpdateCurrencyRet;

        /**
         * Encodes the specified Net_User_UpdateCurrencyRet message. Does not implicitly {@link pb.Net_User_UpdateCurrencyRet.verify|verify} messages.
         * @param message Net_User_UpdateCurrencyRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_User_UpdateCurrencyRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_User_UpdateCurrencyRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_User_UpdateCurrencyRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_User_UpdateCurrencyRet;

        /**
         * Gets the default type url for Net_User_UpdateCurrencyRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Player_LoginBonusInfo. */
    interface IBase_Player_LoginBonusInfo {

        /** Base_Player_LoginBonusInfo CheckIn */
        CheckIn?: (number|null);

        /** Base_Player_LoginBonusInfo TypeWeek */
        TypeWeek?: (number|null);

        /** Base_Player_LoginBonusInfo WeeklyCount */
        WeeklyCount?: (number|null);

        /** Base_Player_LoginBonusInfo MonthlyCount */
        MonthlyCount?: (number|null);

        /** Base_Player_LoginBonusInfo MonthStatus */
        MonthStatus?: (number[]|null);
    }

    /** Represents a Base_Player_LoginBonusInfo. */
    class Base_Player_LoginBonusInfo implements IBase_Player_LoginBonusInfo {

        /**
         * Constructs a new Base_Player_LoginBonusInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Player_LoginBonusInfo);

        /** Base_Player_LoginBonusInfo CheckIn. */
        public CheckIn: number;

        /** Base_Player_LoginBonusInfo TypeWeek. */
        public TypeWeek: number;

        /** Base_Player_LoginBonusInfo WeeklyCount. */
        public WeeklyCount: number;

        /** Base_Player_LoginBonusInfo MonthlyCount. */
        public MonthlyCount: number;

        /** Base_Player_LoginBonusInfo MonthStatus. */
        public MonthStatus: number[];

        /**
         * Creates a new Base_Player_LoginBonusInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Player_LoginBonusInfo instance
         */
        public static create(properties?: pb.IBase_Player_LoginBonusInfo): pb.Base_Player_LoginBonusInfo;

        /**
         * Encodes the specified Base_Player_LoginBonusInfo message. Does not implicitly {@link pb.Base_Player_LoginBonusInfo.verify|verify} messages.
         * @param message Base_Player_LoginBonusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Player_LoginBonusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Player_LoginBonusInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Player_LoginBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Player_LoginBonusInfo;

        /**
         * Gets the default type url for Base_Player_LoginBonusInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Player_ThemeInfo. */
    interface IBase_Player_ThemeInfo {
    }

    /** Represents a Base_Player_ThemeInfo. */
    class Base_Player_ThemeInfo implements IBase_Player_ThemeInfo {

        /**
         * Constructs a new Base_Player_ThemeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Player_ThemeInfo);

        /**
         * Creates a new Base_Player_ThemeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Player_ThemeInfo instance
         */
        public static create(properties?: pb.IBase_Player_ThemeInfo): pb.Base_Player_ThemeInfo;

        /**
         * Encodes the specified Base_Player_ThemeInfo message. Does not implicitly {@link pb.Base_Player_ThemeInfo.verify|verify} messages.
         * @param message Base_Player_ThemeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Player_ThemeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Player_ThemeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Player_ThemeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Player_ThemeInfo;

        /**
         * Gets the default type url for Base_Player_ThemeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Player_DailyBonusInfo. */
    interface IBase_Player_DailyBonusInfo {

        /** Base_Player_DailyBonusInfo DailyBonusStatus */
        DailyBonusStatus?: (number[]|null);
    }

    /** Represents a Base_Player_DailyBonusInfo. */
    class Base_Player_DailyBonusInfo implements IBase_Player_DailyBonusInfo {

        /**
         * Constructs a new Base_Player_DailyBonusInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Player_DailyBonusInfo);

        /** Base_Player_DailyBonusInfo DailyBonusStatus. */
        public DailyBonusStatus: number[];

        /**
         * Creates a new Base_Player_DailyBonusInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Player_DailyBonusInfo instance
         */
        public static create(properties?: pb.IBase_Player_DailyBonusInfo): pb.Base_Player_DailyBonusInfo;

        /**
         * Encodes the specified Base_Player_DailyBonusInfo message. Does not implicitly {@link pb.Base_Player_DailyBonusInfo.verify|verify} messages.
         * @param message Base_Player_DailyBonusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Player_DailyBonusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Player_DailyBonusInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Player_DailyBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Player_DailyBonusInfo;

        /**
         * Gets the default type url for Base_Player_DailyBonusInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Player_PlayerMark. */
    interface IBase_Player_PlayerMark {

        /** Base_Player_PlayerMark AttributeType */
        AttributeType?: (number|null);

        /** Base_Player_PlayerMark AttributeValue */
        AttributeValue?: (number|null);
    }

    /** Represents a Base_Player_PlayerMark. */
    class Base_Player_PlayerMark implements IBase_Player_PlayerMark {

        /**
         * Constructs a new Base_Player_PlayerMark.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Player_PlayerMark);

        /** Base_Player_PlayerMark AttributeType. */
        public AttributeType: number;

        /** Base_Player_PlayerMark AttributeValue. */
        public AttributeValue: number;

        /**
         * Creates a new Base_Player_PlayerMark instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Player_PlayerMark instance
         */
        public static create(properties?: pb.IBase_Player_PlayerMark): pb.Base_Player_PlayerMark;

        /**
         * Encodes the specified Base_Player_PlayerMark message. Does not implicitly {@link pb.Base_Player_PlayerMark.verify|verify} messages.
         * @param message Base_Player_PlayerMark message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Player_PlayerMark, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Player_PlayerMark message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Player_PlayerMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Player_PlayerMark;

        /**
         * Gets the default type url for Base_Player_PlayerMark
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Player_MoneyInfo. */
    interface IBase_Player_MoneyInfo {

        /** Base_Player_MoneyInfo Gold */
        Gold?: (number|null);

        /** Base_Player_MoneyInfo GoldBind */
        GoldBind?: (number|null);

        /** Base_Player_MoneyInfo Coin */
        Coin?: (number|null);

        /** Base_Player_MoneyInfo CoinBind */
        CoinBind?: (number|null);

        /** Base_Player_MoneyInfo HolyGrail */
        HolyGrail?: (number|null);

        /** Base_Player_MoneyInfo LuckyWheelCoin */
        LuckyWheelCoin?: (number|null);
    }

    /** Represents a Base_Player_MoneyInfo. */
    class Base_Player_MoneyInfo implements IBase_Player_MoneyInfo {

        /**
         * Constructs a new Base_Player_MoneyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Player_MoneyInfo);

        /** Base_Player_MoneyInfo Gold. */
        public Gold: number;

        /** Base_Player_MoneyInfo GoldBind. */
        public GoldBind: number;

        /** Base_Player_MoneyInfo Coin. */
        public Coin: number;

        /** Base_Player_MoneyInfo CoinBind. */
        public CoinBind: number;

        /** Base_Player_MoneyInfo HolyGrail. */
        public HolyGrail: number;

        /** Base_Player_MoneyInfo LuckyWheelCoin. */
        public LuckyWheelCoin: number;

        /**
         * Creates a new Base_Player_MoneyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Player_MoneyInfo instance
         */
        public static create(properties?: pb.IBase_Player_MoneyInfo): pb.Base_Player_MoneyInfo;

        /**
         * Encodes the specified Base_Player_MoneyInfo message. Does not implicitly {@link pb.Base_Player_MoneyInfo.verify|verify} messages.
         * @param message Base_Player_MoneyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Player_MoneyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Player_MoneyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Player_MoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Player_MoneyInfo;

        /**
         * Gets the default type url for Base_Player_MoneyInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Player_UpdateMoneyInfoRet. */
    interface INet_Player_UpdateMoneyInfoRet {

        /** Net_Player_UpdateMoneyInfoRet MoneyInfo */
        MoneyInfo?: (pb.IBase_Player_MoneyInfo|null);
    }

    /** Represents a Net_Player_UpdateMoneyInfoRet. */
    class Net_Player_UpdateMoneyInfoRet implements INet_Player_UpdateMoneyInfoRet {

        /**
         * Constructs a new Net_Player_UpdateMoneyInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Player_UpdateMoneyInfoRet);

        /** Net_Player_UpdateMoneyInfoRet MoneyInfo. */
        public MoneyInfo?: (pb.IBase_Player_MoneyInfo|null);

        /**
         * Creates a new Net_Player_UpdateMoneyInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Player_UpdateMoneyInfoRet instance
         */
        public static create(properties?: pb.INet_Player_UpdateMoneyInfoRet): pb.Net_Player_UpdateMoneyInfoRet;

        /**
         * Encodes the specified Net_Player_UpdateMoneyInfoRet message. Does not implicitly {@link pb.Net_Player_UpdateMoneyInfoRet.verify|verify} messages.
         * @param message Net_Player_UpdateMoneyInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Player_UpdateMoneyInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Player_UpdateMoneyInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Player_UpdateMoneyInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Player_UpdateMoneyInfoRet;

        /**
         * Gets the default type url for Net_Player_UpdateMoneyInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Player_PlayerUpdatesInfoRet. */
    interface INet_Player_PlayerUpdatesInfoRet {

        /** Net_Player_PlayerUpdatesInfoRet PlayerMarkList */
        PlayerMarkList?: ({ [k: string]: pb.IBase_Player_PlayerMark }|null);

        /** Net_Player_PlayerUpdatesInfoRet ActivityInfo */
        ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);

        /** Net_Player_PlayerUpdatesInfoRet TaskInfo */
        TaskInfo?: (pb.IBase_Task_TaskInfo|null);
    }

    /** Represents a Net_Player_PlayerUpdatesInfoRet. */
    class Net_Player_PlayerUpdatesInfoRet implements INet_Player_PlayerUpdatesInfoRet {

        /**
         * Constructs a new Net_Player_PlayerUpdatesInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Player_PlayerUpdatesInfoRet);

        /** Net_Player_PlayerUpdatesInfoRet PlayerMarkList. */
        public PlayerMarkList: { [k: string]: pb.IBase_Player_PlayerMark };

        /** Net_Player_PlayerUpdatesInfoRet ActivityInfo. */
        public ActivityInfo?: (pb.IBase_Activity_ActivityInfo|null);

        /** Net_Player_PlayerUpdatesInfoRet TaskInfo. */
        public TaskInfo?: (pb.IBase_Task_TaskInfo|null);

        /**
         * Creates a new Net_Player_PlayerUpdatesInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Player_PlayerUpdatesInfoRet instance
         */
        public static create(properties?: pb.INet_Player_PlayerUpdatesInfoRet): pb.Net_Player_PlayerUpdatesInfoRet;

        /**
         * Encodes the specified Net_Player_PlayerUpdatesInfoRet message. Does not implicitly {@link pb.Net_Player_PlayerUpdatesInfoRet.verify|verify} messages.
         * @param message Net_Player_PlayerUpdatesInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Player_PlayerUpdatesInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Player_PlayerUpdatesInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Player_PlayerUpdatesInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Player_PlayerUpdatesInfoRet;

        /**
         * Gets the default type url for Net_Player_PlayerUpdatesInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Player_ChangeNameReq. */
    interface INet_Player_ChangeNameReq {

        /** Net_Player_ChangeNameReq NickName */
        NickName?: (string|null);
    }

    /** Represents a Net_Player_ChangeNameReq. */
    class Net_Player_ChangeNameReq implements INet_Player_ChangeNameReq {

        /**
         * Constructs a new Net_Player_ChangeNameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Player_ChangeNameReq);

        /** Net_Player_ChangeNameReq NickName. */
        public NickName: string;

        /**
         * Creates a new Net_Player_ChangeNameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Player_ChangeNameReq instance
         */
        public static create(properties?: pb.INet_Player_ChangeNameReq): pb.Net_Player_ChangeNameReq;

        /**
         * Encodes the specified Net_Player_ChangeNameReq message. Does not implicitly {@link pb.Net_Player_ChangeNameReq.verify|verify} messages.
         * @param message Net_Player_ChangeNameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Player_ChangeNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Player_ChangeNameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Player_ChangeNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Player_ChangeNameReq;

        /**
         * Gets the default type url for Net_Player_ChangeNameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Player_ChangeNameRet. */
    interface INet_Player_ChangeNameRet {

        /** Net_Player_ChangeNameRet Ret */
        Ret?: (number|null);

        /** Net_Player_ChangeNameRet NickName */
        NickName?: (string|null);
    }

    /** Represents a Net_Player_ChangeNameRet. */
    class Net_Player_ChangeNameRet implements INet_Player_ChangeNameRet {

        /**
         * Constructs a new Net_Player_ChangeNameRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Player_ChangeNameRet);

        /** Net_Player_ChangeNameRet Ret. */
        public Ret: number;

        /** Net_Player_ChangeNameRet NickName. */
        public NickName: string;

        /**
         * Creates a new Net_Player_ChangeNameRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Player_ChangeNameRet instance
         */
        public static create(properties?: pb.INet_Player_ChangeNameRet): pb.Net_Player_ChangeNameRet;

        /**
         * Encodes the specified Net_Player_ChangeNameRet message. Does not implicitly {@link pb.Net_Player_ChangeNameRet.verify|verify} messages.
         * @param message Net_Player_ChangeNameRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Player_ChangeNameRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Player_ChangeNameRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Player_ChangeNameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Player_ChangeNameRet;

        /**
         * Gets the default type url for Net_Player_ChangeNameRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Shop_AnItemInfo. */
    interface IBase_Shop_AnItemInfo {

        /** Base_Shop_AnItemInfo Id */
        Id?: (number|null);

        /** Base_Shop_AnItemInfo BuyNum */
        BuyNum?: (number|null);
    }

    /** Represents a Base_Shop_AnItemInfo. */
    class Base_Shop_AnItemInfo implements IBase_Shop_AnItemInfo {

        /**
         * Constructs a new Base_Shop_AnItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Shop_AnItemInfo);

        /** Base_Shop_AnItemInfo Id. */
        public Id: number;

        /** Base_Shop_AnItemInfo BuyNum. */
        public BuyNum: number;

        /**
         * Creates a new Base_Shop_AnItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Shop_AnItemInfo instance
         */
        public static create(properties?: pb.IBase_Shop_AnItemInfo): pb.Base_Shop_AnItemInfo;

        /**
         * Encodes the specified Base_Shop_AnItemInfo message. Does not implicitly {@link pb.Base_Shop_AnItemInfo.verify|verify} messages.
         * @param message Base_Shop_AnItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Shop_AnItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Shop_AnItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Shop_AnItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Shop_AnItemInfo;

        /**
         * Gets the default type url for Base_Shop_AnItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Shop_ShelvesInfo. */
    interface IBase_Shop_ShelvesInfo {

        /** Base_Shop_ShelvesInfo Id */
        Id?: (number|null);

        /** Base_Shop_ShelvesInfo Name */
        Name?: (string|null);

        /** Base_Shop_ShelvesInfo Quantity */
        Quantity?: (number|null);

        /** Base_Shop_ShelvesInfo ItemList */
        ItemList?: (pb.IBase_Shop_AnItemInfo[]|null);

        /** Base_Shop_ShelvesInfo NextRefreshTime */
        NextRefreshTime?: (number|Long|null);
    }

    /** Represents a Base_Shop_ShelvesInfo. */
    class Base_Shop_ShelvesInfo implements IBase_Shop_ShelvesInfo {

        /**
         * Constructs a new Base_Shop_ShelvesInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Shop_ShelvesInfo);

        /** Base_Shop_ShelvesInfo Id. */
        public Id: number;

        /** Base_Shop_ShelvesInfo Name. */
        public Name: string;

        /** Base_Shop_ShelvesInfo Quantity. */
        public Quantity: number;

        /** Base_Shop_ShelvesInfo ItemList. */
        public ItemList: pb.IBase_Shop_AnItemInfo[];

        /** Base_Shop_ShelvesInfo NextRefreshTime. */
        public NextRefreshTime: (number|Long);

        /**
         * Creates a new Base_Shop_ShelvesInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Shop_ShelvesInfo instance
         */
        public static create(properties?: pb.IBase_Shop_ShelvesInfo): pb.Base_Shop_ShelvesInfo;

        /**
         * Encodes the specified Base_Shop_ShelvesInfo message. Does not implicitly {@link pb.Base_Shop_ShelvesInfo.verify|verify} messages.
         * @param message Base_Shop_ShelvesInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Shop_ShelvesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Shop_ShelvesInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Shop_ShelvesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Shop_ShelvesInfo;

        /**
         * Gets the default type url for Base_Shop_ShelvesInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Shop_AShopInfo. */
    interface IBase_Shop_AShopInfo {

        /** Base_Shop_AShopInfo Id */
        Id?: (number|null);

        /** Base_Shop_AShopInfo Name */
        Name?: (string|null);

        /** Base_Shop_AShopInfo ItemList */
        ItemList?: (pb.IBase_Shop_ShelvesInfo[]|null);
    }

    /** Represents a Base_Shop_AShopInfo. */
    class Base_Shop_AShopInfo implements IBase_Shop_AShopInfo {

        /**
         * Constructs a new Base_Shop_AShopInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Shop_AShopInfo);

        /** Base_Shop_AShopInfo Id. */
        public Id: number;

        /** Base_Shop_AShopInfo Name. */
        public Name: string;

        /** Base_Shop_AShopInfo ItemList. */
        public ItemList: pb.IBase_Shop_ShelvesInfo[];

        /**
         * Creates a new Base_Shop_AShopInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Shop_AShopInfo instance
         */
        public static create(properties?: pb.IBase_Shop_AShopInfo): pb.Base_Shop_AShopInfo;

        /**
         * Encodes the specified Base_Shop_AShopInfo message. Does not implicitly {@link pb.Base_Shop_AShopInfo.verify|verify} messages.
         * @param message Base_Shop_AShopInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Shop_AShopInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Shop_AShopInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Shop_AShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Shop_AShopInfo;

        /**
         * Gets the default type url for Base_Shop_AShopInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Shop_ShopInfo. */
    interface IBase_Shop_ShopInfo {

        /** Base_Shop_ShopInfo AShopInfoList */
        AShopInfoList?: (pb.IBase_Shop_AShopInfo[]|null);

        /** Base_Shop_ShopInfo ShopBuyLimitNumList */
        ShopBuyLimitNumList?: ({ [k: string]: pb.IBase_Shop_AnItemInfo }|null);
    }

    /** Represents a Base_Shop_ShopInfo. */
    class Base_Shop_ShopInfo implements IBase_Shop_ShopInfo {

        /**
         * Constructs a new Base_Shop_ShopInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Shop_ShopInfo);

        /** Base_Shop_ShopInfo AShopInfoList. */
        public AShopInfoList: pb.IBase_Shop_AShopInfo[];

        /** Base_Shop_ShopInfo ShopBuyLimitNumList. */
        public ShopBuyLimitNumList: { [k: string]: pb.IBase_Shop_AnItemInfo };

        /**
         * Creates a new Base_Shop_ShopInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Shop_ShopInfo instance
         */
        public static create(properties?: pb.IBase_Shop_ShopInfo): pb.Base_Shop_ShopInfo;

        /**
         * Encodes the specified Base_Shop_ShopInfo message. Does not implicitly {@link pb.Base_Shop_ShopInfo.verify|verify} messages.
         * @param message Base_Shop_ShopInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Shop_ShopInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Shop_ShopInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Shop_ShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Shop_ShopInfo;

        /**
         * Gets the default type url for Base_Shop_ShopInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_GetShopInfoReq. */
    interface INet_Shop_GetShopInfoReq {
    }

    /** Represents a Net_Shop_GetShopInfoReq. */
    class Net_Shop_GetShopInfoReq implements INet_Shop_GetShopInfoReq {

        /**
         * Constructs a new Net_Shop_GetShopInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_GetShopInfoReq);

        /**
         * Creates a new Net_Shop_GetShopInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_GetShopInfoReq instance
         */
        public static create(properties?: pb.INet_Shop_GetShopInfoReq): pb.Net_Shop_GetShopInfoReq;

        /**
         * Encodes the specified Net_Shop_GetShopInfoReq message. Does not implicitly {@link pb.Net_Shop_GetShopInfoReq.verify|verify} messages.
         * @param message Net_Shop_GetShopInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_GetShopInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_GetShopInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_GetShopInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_GetShopInfoReq;

        /**
         * Gets the default type url for Net_Shop_GetShopInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_GetShopInfoRet. */
    interface INet_Shop_GetShopInfoRet {

        /** Net_Shop_GetShopInfoRet ShopInfo */
        ShopInfo?: (pb.IBase_Shop_ShopInfo|null);
    }

    /** Represents a Net_Shop_GetShopInfoRet. */
    class Net_Shop_GetShopInfoRet implements INet_Shop_GetShopInfoRet {

        /**
         * Constructs a new Net_Shop_GetShopInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_GetShopInfoRet);

        /** Net_Shop_GetShopInfoRet ShopInfo. */
        public ShopInfo?: (pb.IBase_Shop_ShopInfo|null);

        /**
         * Creates a new Net_Shop_GetShopInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_GetShopInfoRet instance
         */
        public static create(properties?: pb.INet_Shop_GetShopInfoRet): pb.Net_Shop_GetShopInfoRet;

        /**
         * Encodes the specified Net_Shop_GetShopInfoRet message. Does not implicitly {@link pb.Net_Shop_GetShopInfoRet.verify|verify} messages.
         * @param message Net_Shop_GetShopInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_GetShopInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_GetShopInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_GetShopInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_GetShopInfoRet;

        /**
         * Gets the default type url for Net_Shop_GetShopInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_BuyItemReq. */
    interface INet_Shop_BuyItemReq {

        /** Net_Shop_BuyItemReq ShopItemId */
        ShopItemId?: (number|null);

        /** Net_Shop_BuyItemReq ShopItemNum */
        ShopItemNum?: (number|null);
    }

    /** Represents a Net_Shop_BuyItemReq. */
    class Net_Shop_BuyItemReq implements INet_Shop_BuyItemReq {

        /**
         * Constructs a new Net_Shop_BuyItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_BuyItemReq);

        /** Net_Shop_BuyItemReq ShopItemId. */
        public ShopItemId: number;

        /** Net_Shop_BuyItemReq ShopItemNum. */
        public ShopItemNum: number;

        /**
         * Creates a new Net_Shop_BuyItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_BuyItemReq instance
         */
        public static create(properties?: pb.INet_Shop_BuyItemReq): pb.Net_Shop_BuyItemReq;

        /**
         * Encodes the specified Net_Shop_BuyItemReq message. Does not implicitly {@link pb.Net_Shop_BuyItemReq.verify|verify} messages.
         * @param message Net_Shop_BuyItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_BuyItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_BuyItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_BuyItemReq;

        /**
         * Gets the default type url for Net_Shop_BuyItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_BuyItemRet. */
    interface INet_Shop_BuyItemRet {

        /** Net_Shop_BuyItemRet Ret */
        Ret?: (number|null);

        /** Net_Shop_BuyItemRet ShopItemId */
        ShopItemId?: (number|null);

        /** Net_Shop_BuyItemRet ShopItemNum */
        ShopItemNum?: (number|null);

        /** Net_Shop_BuyItemRet ItemId */
        ItemId?: (number|null);

        /** Net_Shop_BuyItemRet ItemNum */
        ItemNum?: (number|null);
    }

    /** Represents a Net_Shop_BuyItemRet. */
    class Net_Shop_BuyItemRet implements INet_Shop_BuyItemRet {

        /**
         * Constructs a new Net_Shop_BuyItemRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_BuyItemRet);

        /** Net_Shop_BuyItemRet Ret. */
        public Ret: number;

        /** Net_Shop_BuyItemRet ShopItemId. */
        public ShopItemId: number;

        /** Net_Shop_BuyItemRet ShopItemNum. */
        public ShopItemNum: number;

        /** Net_Shop_BuyItemRet ItemId. */
        public ItemId: number;

        /** Net_Shop_BuyItemRet ItemNum. */
        public ItemNum: number;

        /**
         * Creates a new Net_Shop_BuyItemRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_BuyItemRet instance
         */
        public static create(properties?: pb.INet_Shop_BuyItemRet): pb.Net_Shop_BuyItemRet;

        /**
         * Encodes the specified Net_Shop_BuyItemRet message. Does not implicitly {@link pb.Net_Shop_BuyItemRet.verify|verify} messages.
         * @param message Net_Shop_BuyItemRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_BuyItemRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_BuyItemRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_BuyItemRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_BuyItemRet;

        /**
         * Gets the default type url for Net_Shop_BuyItemRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_PayReq. */
    interface INet_Shop_PayReq {

        /** Net_Shop_PayReq Cmd */
        Cmd?: (number|null);

        /** Net_Shop_PayReq Data */
        Data?: (string|null);

        /** Net_Shop_PayReq ShopItemId */
        ShopItemId?: (number|null);

        /** Net_Shop_PayReq ShopItemNum */
        ShopItemNum?: (number|null);
    }

    /** Represents a Net_Shop_PayReq. */
    class Net_Shop_PayReq implements INet_Shop_PayReq {

        /**
         * Constructs a new Net_Shop_PayReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_PayReq);

        /** Net_Shop_PayReq Cmd. */
        public Cmd: number;

        /** Net_Shop_PayReq Data. */
        public Data: string;

        /** Net_Shop_PayReq ShopItemId. */
        public ShopItemId: number;

        /** Net_Shop_PayReq ShopItemNum. */
        public ShopItemNum: number;

        /**
         * Creates a new Net_Shop_PayReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_PayReq instance
         */
        public static create(properties?: pb.INet_Shop_PayReq): pb.Net_Shop_PayReq;

        /**
         * Encodes the specified Net_Shop_PayReq message. Does not implicitly {@link pb.Net_Shop_PayReq.verify|verify} messages.
         * @param message Net_Shop_PayReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_PayReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_PayReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_PayReq;

        /**
         * Gets the default type url for Net_Shop_PayReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Shop_PayRet. */
    interface INet_Shop_PayRet {

        /** Net_Shop_PayRet Ret */
        Ret?: (number|null);

        /** Net_Shop_PayRet ProductId */
        ProductId?: (number|null);

        /** Net_Shop_PayRet OrderId */
        OrderId?: (string|null);

        /** Net_Shop_PayRet Price */
        Price?: (number|null);

        /** Net_Shop_PayRet Status */
        Status?: (number|null);
    }

    /** Represents a Net_Shop_PayRet. */
    class Net_Shop_PayRet implements INet_Shop_PayRet {

        /**
         * Constructs a new Net_Shop_PayRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Shop_PayRet);

        /** Net_Shop_PayRet Ret. */
        public Ret: number;

        /** Net_Shop_PayRet ProductId. */
        public ProductId: number;

        /** Net_Shop_PayRet OrderId. */
        public OrderId: string;

        /** Net_Shop_PayRet Price. */
        public Price: number;

        /** Net_Shop_PayRet Status. */
        public Status: number;

        /**
         * Creates a new Net_Shop_PayRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Shop_PayRet instance
         */
        public static create(properties?: pb.INet_Shop_PayRet): pb.Net_Shop_PayRet;

        /**
         * Encodes the specified Net_Shop_PayRet message. Does not implicitly {@link pb.Net_Shop_PayRet.verify|verify} messages.
         * @param message Net_Shop_PayRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Shop_PayRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Shop_PayRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Shop_PayRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Shop_PayRet;

        /**
         * Gets the default type url for Net_Shop_PayRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ETaskStatus enum. */
    enum ETaskStatus {
        Incomplete = 0,
        Complete = 1,
        Got = 2
    }

    /** ETask enum. */
    enum ETask {
        TaskIdle = 0,
        Task1001 = 1001,
        Task1002 = 1002,
        Task1003 = 1003,
        Task1004 = 1004,
        Task1005 = 1005,
        Task1006 = 1006,
        Task1007 = 1007,
        Task2001 = 2001,
        Task2002 = 2002,
        Task2003 = 2003,
        Task2004 = 2004,
        Task2005 = 2005,
        Task2006 = 2006
    }

    /** Properties of a Base_Task_TaskInfo. */
    interface IBase_Task_TaskInfo {

        /** Base_Task_TaskInfo AdsTasksInfo */
        AdsTasksInfo?: (pb.IBase_Ads_AdsTasksInfo|null);

        /** Base_Task_TaskInfo CupTaskInfo */
        CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);

        /** Base_Task_TaskInfo TaskItemList */
        TaskItemList?: ({ [k: string]: pb.IBase_Task_TaskItemInfo }|null);
    }

    /** Represents a Base_Task_TaskInfo. */
    class Base_Task_TaskInfo implements IBase_Task_TaskInfo {

        /**
         * Constructs a new Base_Task_TaskInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Task_TaskInfo);

        /** Base_Task_TaskInfo AdsTasksInfo. */
        public AdsTasksInfo?: (pb.IBase_Ads_AdsTasksInfo|null);

        /** Base_Task_TaskInfo CupTaskInfo. */
        public CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);

        /** Base_Task_TaskInfo TaskItemList. */
        public TaskItemList: { [k: string]: pb.IBase_Task_TaskItemInfo };

        /**
         * Creates a new Base_Task_TaskInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Task_TaskInfo instance
         */
        public static create(properties?: pb.IBase_Task_TaskInfo): pb.Base_Task_TaskInfo;

        /**
         * Encodes the specified Base_Task_TaskInfo message. Does not implicitly {@link pb.Base_Task_TaskInfo.verify|verify} messages.
         * @param message Base_Task_TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Task_TaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Task_TaskInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Task_TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Task_TaskInfo;

        /**
         * Gets the default type url for Base_Task_TaskInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Task_TaskItemInfo. */
    interface IBase_Task_TaskItemInfo {

        /** Base_Task_TaskItemInfo State */
        State?: (number|null);

        /** Base_Task_TaskItemInfo ProgressValue */
        ProgressValue?: (number|null);
    }

    /** Represents a Base_Task_TaskItemInfo. */
    class Base_Task_TaskItemInfo implements IBase_Task_TaskItemInfo {

        /**
         * Constructs a new Base_Task_TaskItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Task_TaskItemInfo);

        /** Base_Task_TaskItemInfo State. */
        public State: number;

        /** Base_Task_TaskItemInfo ProgressValue. */
        public ProgressValue: number;

        /**
         * Creates a new Base_Task_TaskItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Task_TaskItemInfo instance
         */
        public static create(properties?: pb.IBase_Task_TaskItemInfo): pb.Base_Task_TaskItemInfo;

        /**
         * Encodes the specified Base_Task_TaskItemInfo message. Does not implicitly {@link pb.Base_Task_TaskItemInfo.verify|verify} messages.
         * @param message Base_Task_TaskItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Task_TaskItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Task_TaskItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Task_TaskItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Task_TaskItemInfo;

        /**
         * Gets the default type url for Base_Task_TaskItemInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Task_CupTaskInfo. */
    interface IBase_Task_CupTaskInfo {

        /** Base_Task_CupTaskInfo CupTaskStatus */
        CupTaskStatus?: ({ [k: string]: number }|null);
    }

    /** Represents a Base_Task_CupTaskInfo. */
    class Base_Task_CupTaskInfo implements IBase_Task_CupTaskInfo {

        /**
         * Constructs a new Base_Task_CupTaskInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Task_CupTaskInfo);

        /** Base_Task_CupTaskInfo CupTaskStatus. */
        public CupTaskStatus: { [k: string]: number };

        /**
         * Creates a new Base_Task_CupTaskInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Task_CupTaskInfo instance
         */
        public static create(properties?: pb.IBase_Task_CupTaskInfo): pb.Base_Task_CupTaskInfo;

        /**
         * Encodes the specified Base_Task_CupTaskInfo message. Does not implicitly {@link pb.Base_Task_CupTaskInfo.verify|verify} messages.
         * @param message Base_Task_CupTaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Task_CupTaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Task_CupTaskInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Task_CupTaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Task_CupTaskInfo;

        /**
         * Gets the default type url for Base_Task_CupTaskInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_UpdateCupTaskRet. */
    interface INet_Task_UpdateCupTaskRet {

        /** Net_Task_UpdateCupTaskRet CupTaskInfo */
        CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);
    }

    /** Represents a Net_Task_UpdateCupTaskRet. */
    class Net_Task_UpdateCupTaskRet implements INet_Task_UpdateCupTaskRet {

        /**
         * Constructs a new Net_Task_UpdateCupTaskRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_UpdateCupTaskRet);

        /** Net_Task_UpdateCupTaskRet CupTaskInfo. */
        public CupTaskInfo?: (pb.IBase_Task_CupTaskInfo|null);

        /**
         * Creates a new Net_Task_UpdateCupTaskRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_UpdateCupTaskRet instance
         */
        public static create(properties?: pb.INet_Task_UpdateCupTaskRet): pb.Net_Task_UpdateCupTaskRet;

        /**
         * Encodes the specified Net_Task_UpdateCupTaskRet message. Does not implicitly {@link pb.Net_Task_UpdateCupTaskRet.verify|verify} messages.
         * @param message Net_Task_UpdateCupTaskRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_UpdateCupTaskRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_UpdateCupTaskRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_UpdateCupTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_UpdateCupTaskRet;

        /**
         * Gets the default type url for Net_Task_UpdateCupTaskRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_UpdateTaskRet. */
    interface INet_Task_UpdateTaskRet {

        /** Net_Task_UpdateTaskRet UpdateItemList */
        UpdateItemList?: ({ [k: string]: pb.IBase_Task_TaskItemInfo }|null);
    }

    /** Represents a Net_Task_UpdateTaskRet. */
    class Net_Task_UpdateTaskRet implements INet_Task_UpdateTaskRet {

        /**
         * Constructs a new Net_Task_UpdateTaskRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_UpdateTaskRet);

        /** Net_Task_UpdateTaskRet UpdateItemList. */
        public UpdateItemList: { [k: string]: pb.IBase_Task_TaskItemInfo };

        /**
         * Creates a new Net_Task_UpdateTaskRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_UpdateTaskRet instance
         */
        public static create(properties?: pb.INet_Task_UpdateTaskRet): pb.Net_Task_UpdateTaskRet;

        /**
         * Encodes the specified Net_Task_UpdateTaskRet message. Does not implicitly {@link pb.Net_Task_UpdateTaskRet.verify|verify} messages.
         * @param message Net_Task_UpdateTaskRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_UpdateTaskRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_UpdateTaskRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_UpdateTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_UpdateTaskRet;

        /**
         * Gets the default type url for Net_Task_UpdateTaskRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_ReceiveTaskRewardReq. */
    interface INet_Task_ReceiveTaskRewardReq {

        /** Net_Task_ReceiveTaskRewardReq TaskId */
        TaskId?: (number|null);
    }

    /** Represents a Net_Task_ReceiveTaskRewardReq. */
    class Net_Task_ReceiveTaskRewardReq implements INet_Task_ReceiveTaskRewardReq {

        /**
         * Constructs a new Net_Task_ReceiveTaskRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_ReceiveTaskRewardReq);

        /** Net_Task_ReceiveTaskRewardReq TaskId. */
        public TaskId: number;

        /**
         * Creates a new Net_Task_ReceiveTaskRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_ReceiveTaskRewardReq instance
         */
        public static create(properties?: pb.INet_Task_ReceiveTaskRewardReq): pb.Net_Task_ReceiveTaskRewardReq;

        /**
         * Encodes the specified Net_Task_ReceiveTaskRewardReq message. Does not implicitly {@link pb.Net_Task_ReceiveTaskRewardReq.verify|verify} messages.
         * @param message Net_Task_ReceiveTaskRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_ReceiveTaskRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_ReceiveTaskRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_ReceiveTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_ReceiveTaskRewardReq;

        /**
         * Gets the default type url for Net_Task_ReceiveTaskRewardReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_ReceiveTaskRewardRet. */
    interface INet_Task_ReceiveTaskRewardRet {

        /** Net_Task_ReceiveTaskRewardRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Task_ReceiveTaskRewardRet. */
    class Net_Task_ReceiveTaskRewardRet implements INet_Task_ReceiveTaskRewardRet {

        /**
         * Constructs a new Net_Task_ReceiveTaskRewardRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_ReceiveTaskRewardRet);

        /** Net_Task_ReceiveTaskRewardRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Task_ReceiveTaskRewardRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_ReceiveTaskRewardRet instance
         */
        public static create(properties?: pb.INet_Task_ReceiveTaskRewardRet): pb.Net_Task_ReceiveTaskRewardRet;

        /**
         * Encodes the specified Net_Task_ReceiveTaskRewardRet message. Does not implicitly {@link pb.Net_Task_ReceiveTaskRewardRet.verify|verify} messages.
         * @param message Net_Task_ReceiveTaskRewardRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_ReceiveTaskRewardRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_ReceiveTaskRewardRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_ReceiveTaskRewardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_ReceiveTaskRewardRet;

        /**
         * Gets the default type url for Net_Task_ReceiveTaskRewardRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_GetCupTaskReq. */
    interface INet_Task_GetCupTaskReq {
    }

    /** Represents a Net_Task_GetCupTaskReq. */
    class Net_Task_GetCupTaskReq implements INet_Task_GetCupTaskReq {

        /**
         * Constructs a new Net_Task_GetCupTaskReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_GetCupTaskReq);

        /**
         * Creates a new Net_Task_GetCupTaskReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_GetCupTaskReq instance
         */
        public static create(properties?: pb.INet_Task_GetCupTaskReq): pb.Net_Task_GetCupTaskReq;

        /**
         * Encodes the specified Net_Task_GetCupTaskReq message. Does not implicitly {@link pb.Net_Task_GetCupTaskReq.verify|verify} messages.
         * @param message Net_Task_GetCupTaskReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_GetCupTaskReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_GetCupTaskReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_GetCupTaskReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_GetCupTaskReq;

        /**
         * Gets the default type url for Net_Task_GetCupTaskReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_GetCupTaskRet. */
    interface INet_Task_GetCupTaskRet {

        /** Net_Task_GetCupTaskRet CupTaskStatus */
        CupTaskStatus?: ({ [k: string]: number }|null);
    }

    /** Represents a Net_Task_GetCupTaskRet. */
    class Net_Task_GetCupTaskRet implements INet_Task_GetCupTaskRet {

        /**
         * Constructs a new Net_Task_GetCupTaskRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_GetCupTaskRet);

        /** Net_Task_GetCupTaskRet CupTaskStatus. */
        public CupTaskStatus: { [k: string]: number };

        /**
         * Creates a new Net_Task_GetCupTaskRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_GetCupTaskRet instance
         */
        public static create(properties?: pb.INet_Task_GetCupTaskRet): pb.Net_Task_GetCupTaskRet;

        /**
         * Encodes the specified Net_Task_GetCupTaskRet message. Does not implicitly {@link pb.Net_Task_GetCupTaskRet.verify|verify} messages.
         * @param message Net_Task_GetCupTaskRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_GetCupTaskRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_GetCupTaskRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_GetCupTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_GetCupTaskRet;

        /**
         * Gets the default type url for Net_Task_GetCupTaskRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_ReceiveCupTaskAwardReq. */
    interface INet_Task_ReceiveCupTaskAwardReq {

        /** Net_Task_ReceiveCupTaskAwardReq TaskId */
        TaskId?: (number|null);
    }

    /** Represents a Net_Task_ReceiveCupTaskAwardReq. */
    class Net_Task_ReceiveCupTaskAwardReq implements INet_Task_ReceiveCupTaskAwardReq {

        /**
         * Constructs a new Net_Task_ReceiveCupTaskAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_ReceiveCupTaskAwardReq);

        /** Net_Task_ReceiveCupTaskAwardReq TaskId. */
        public TaskId: number;

        /**
         * Creates a new Net_Task_ReceiveCupTaskAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_ReceiveCupTaskAwardReq instance
         */
        public static create(properties?: pb.INet_Task_ReceiveCupTaskAwardReq): pb.Net_Task_ReceiveCupTaskAwardReq;

        /**
         * Encodes the specified Net_Task_ReceiveCupTaskAwardReq message. Does not implicitly {@link pb.Net_Task_ReceiveCupTaskAwardReq.verify|verify} messages.
         * @param message Net_Task_ReceiveCupTaskAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_ReceiveCupTaskAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_ReceiveCupTaskAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_ReceiveCupTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_ReceiveCupTaskAwardReq;

        /**
         * Gets the default type url for Net_Task_ReceiveCupTaskAwardReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Task_ReceiveCupTaskAwardRet. */
    interface INet_Task_ReceiveCupTaskAwardRet {

        /** Net_Task_ReceiveCupTaskAwardRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Task_ReceiveCupTaskAwardRet. */
    class Net_Task_ReceiveCupTaskAwardRet implements INet_Task_ReceiveCupTaskAwardRet {

        /**
         * Constructs a new Net_Task_ReceiveCupTaskAwardRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Task_ReceiveCupTaskAwardRet);

        /** Net_Task_ReceiveCupTaskAwardRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Task_ReceiveCupTaskAwardRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Task_ReceiveCupTaskAwardRet instance
         */
        public static create(properties?: pb.INet_Task_ReceiveCupTaskAwardRet): pb.Net_Task_ReceiveCupTaskAwardRet;

        /**
         * Encodes the specified Net_Task_ReceiveCupTaskAwardRet message. Does not implicitly {@link pb.Net_Task_ReceiveCupTaskAwardRet.verify|verify} messages.
         * @param message Net_Task_ReceiveCupTaskAwardRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Task_ReceiveCupTaskAwardRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Task_ReceiveCupTaskAwardRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Task_ReceiveCupTaskAwardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Task_ReceiveCupTaskAwardRet;

        /**
         * Gets the default type url for Net_Task_ReceiveCupTaskAwardRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Vip_VipInfo. */
    interface IBase_Vip_VipInfo {

        /** Base_Vip_VipInfo FreeExp */
        FreeExp?: (number|null);

        /** Base_Vip_VipInfo Exp */
        Exp?: (number|null);

        /** Base_Vip_VipInfo Level */
        Level?: (number|null);

        /** Base_Vip_VipInfo NeedExp */
        NeedExp?: (number|null);
    }

    /** Represents a Base_Vip_VipInfo. */
    class Base_Vip_VipInfo implements IBase_Vip_VipInfo {

        /**
         * Constructs a new Base_Vip_VipInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Vip_VipInfo);

        /** Base_Vip_VipInfo FreeExp. */
        public FreeExp: number;

        /** Base_Vip_VipInfo Exp. */
        public Exp: number;

        /** Base_Vip_VipInfo Level. */
        public Level: number;

        /** Base_Vip_VipInfo NeedExp. */
        public NeedExp: number;

        /**
         * Creates a new Base_Vip_VipInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Vip_VipInfo instance
         */
        public static create(properties?: pb.IBase_Vip_VipInfo): pb.Base_Vip_VipInfo;

        /**
         * Encodes the specified Base_Vip_VipInfo message. Does not implicitly {@link pb.Base_Vip_VipInfo.verify|verify} messages.
         * @param message Base_Vip_VipInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Vip_VipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Vip_VipInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Vip_VipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Vip_VipInfo;

        /**
         * Gets the default type url for Base_Vip_VipInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Other_xxxx. */
    interface IBase_Other_xxxx {

        /** Base_Other_xxxx Id */
        Id?: (number|null);

        /** Base_Other_xxxx BuyNum */
        BuyNum?: (number|null);
    }

    /** Represents a Base_Other_xxxx. */
    class Base_Other_xxxx implements IBase_Other_xxxx {

        /**
         * Constructs a new Base_Other_xxxx.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Other_xxxx);

        /** Base_Other_xxxx Id. */
        public Id: number;

        /** Base_Other_xxxx BuyNum. */
        public BuyNum: number;

        /**
         * Creates a new Base_Other_xxxx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Other_xxxx instance
         */
        public static create(properties?: pb.IBase_Other_xxxx): pb.Base_Other_xxxx;

        /**
         * Encodes the specified Base_Other_xxxx message. Does not implicitly {@link pb.Base_Other_xxxx.verify|verify} messages.
         * @param message Base_Other_xxxx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Other_xxxx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Other_xxxx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Other_xxxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Other_xxxx;

        /**
         * Gets the default type url for Base_Other_xxxx
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Cmd enum. */
    enum Cmd {
        CmdIdle = 0,
        Login_Error = 1001000,
        Login_Login = 1001001,
        Login_Logout = 1001002,
        Login_KeepAlive = 1001003,
        Login_Reconnect = 1001004,
        Login_FacebookSetUserInfo = 1001007,
        Login_CollectFacebookReward = 1001008,
        Login_MultiUserLogin = 1001011,
        Lobby_UpdateMoneyInfo = 21,
        Lobby_ChangeName = 32,
        Lobby_GetThemeList = 1002004,
        Lobby_VipNewRule = 1003007,
        Lobby_RateUs = 1003008,
        Lobby_GetRanking = 1003009,
        Lobby_LuckyWheel = 1003003,
        Lobby_EnterStampGame = 1003010,
        Lobby_CollectLoginBonus = 1003011,
        Lobby_ReissueLoginBonus = 1003012,
        Lobby_GetDailyBonus = 1003015,
        Lobby_CollectDailyBonus = 1003016,
        Room_GetThemeList = 10040011,
        Room_CreateRoom = 1004001,
        Room_JoinRoom = 1004002,
        Room_DissolveRoom = 1004004,
        Room_Leave = 1004005,
        Room_NoticeNewMemberJoinRoom = 1004006,
        Room_NoticeRoleLeaveRoom = 1004007,
        Room_NoticeRoleOnline = 1004003,
        Room_QuitRoom = 1004008,
        ZJH_CreateRoom = 1005001,
        ZJH_JoinRoom = 1005002,
        ZJH_LeaveRoom = 1005003,
        ZJH_GetRoomInfo = 1005004,
        ZJH_RoleGoldChange = 1005005,
        ZJH_Ready = 1005007,
        ZJH_StartGame = 1005009,
        ZJH_KanPai = 1005010,
        ZJH_BiPai = 1005011,
        ZJH_JiaZhu = 1005012,
        ZJH_GenZhu = 1005013,
        ZJH_NextOperator = 1005014,
        Activity_UpdateActivity = 1006001,
        Activity_ReceiveFireDragonTreasureRewards = 1006002,
        Activity_UpdateAdsUserType = 1006003,
        Task_UpdateTask = 1007001,
        Task_UpdateCupTask = 1007002,
        Task_GetCupTask = 1007003,
        Task_ReceiveCupTaskAward = 1007004,
        Task_ReceiveTaskReward = 1007005,
        Shop_GetShopInfo = 1008001,
        Shop_BuyItem = 1008002,
        Shop_Pay = 1008003,
        Inbox_UpdateItemsInfo = 1009001,
        Inbox_SendEmail = 1009002,
        Inbox_DeleteEmail = 1009003,
        Inbox_ClaimRewardGifts = 1009004,
        Lobby_GetFcmRewards = 1009005,
        Lobby_CollectFcmRewards = 1009006,
        Collect_WelcomeBack = 1009007,
        Guide_MarkComplete = 1010001,
        Ads_GetAdsTasks = 1011001,
        Ads_CollectAdsReward = 1011002,
        PassCheck_UpdateItemsInfo = 1012001,
        PassCheck_ClaimReward = 1012002,
        PassCheck_Buy = 1012003,
        Slots_Spin = 1021001
    }

    /** Properties of a Base_Ranking_ARankingInfo. */
    interface IBase_Ranking_ARankingInfo {

        /** Base_Ranking_ARankingInfo Index */
        Index?: (number|null);

        /** Base_Ranking_ARankingInfo Id */
        Id?: (string|null);

        /** Base_Ranking_ARankingInfo NickName */
        NickName?: (string|null);

        /** Base_Ranking_ARankingInfo HolyGrail */
        HolyGrail?: (number|null);
    }

    /** Represents a Base_Ranking_ARankingInfo. */
    class Base_Ranking_ARankingInfo implements IBase_Ranking_ARankingInfo {

        /**
         * Constructs a new Base_Ranking_ARankingInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Ranking_ARankingInfo);

        /** Base_Ranking_ARankingInfo Index. */
        public Index: number;

        /** Base_Ranking_ARankingInfo Id. */
        public Id: string;

        /** Base_Ranking_ARankingInfo NickName. */
        public NickName: string;

        /** Base_Ranking_ARankingInfo HolyGrail. */
        public HolyGrail: number;

        /**
         * Creates a new Base_Ranking_ARankingInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Ranking_ARankingInfo instance
         */
        public static create(properties?: pb.IBase_Ranking_ARankingInfo): pb.Base_Ranking_ARankingInfo;

        /**
         * Encodes the specified Base_Ranking_ARankingInfo message. Does not implicitly {@link pb.Base_Ranking_ARankingInfo.verify|verify} messages.
         * @param message Base_Ranking_ARankingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Ranking_ARankingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Ranking_ARankingInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Ranking_ARankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Ranking_ARankingInfo;

        /**
         * Gets the default type url for Base_Ranking_ARankingInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Ranking_GetRankingReq. */
    interface INet_Ranking_GetRankingReq {
    }

    /** Represents a Net_Ranking_GetRankingReq. */
    class Net_Ranking_GetRankingReq implements INet_Ranking_GetRankingReq {

        /**
         * Constructs a new Net_Ranking_GetRankingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Ranking_GetRankingReq);

        /**
         * Creates a new Net_Ranking_GetRankingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Ranking_GetRankingReq instance
         */
        public static create(properties?: pb.INet_Ranking_GetRankingReq): pb.Net_Ranking_GetRankingReq;

        /**
         * Encodes the specified Net_Ranking_GetRankingReq message. Does not implicitly {@link pb.Net_Ranking_GetRankingReq.verify|verify} messages.
         * @param message Net_Ranking_GetRankingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Ranking_GetRankingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Ranking_GetRankingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Ranking_GetRankingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Ranking_GetRankingReq;

        /**
         * Gets the default type url for Net_Ranking_GetRankingReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Ranking_GetRankingRet. */
    interface INet_Ranking_GetRankingRet {

        /** Net_Ranking_GetRankingRet RankingList */
        RankingList?: (pb.IBase_Ranking_ARankingInfo[]|null);
    }

    /** Represents a Net_Ranking_GetRankingRet. */
    class Net_Ranking_GetRankingRet implements INet_Ranking_GetRankingRet {

        /**
         * Constructs a new Net_Ranking_GetRankingRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Ranking_GetRankingRet);

        /** Net_Ranking_GetRankingRet RankingList. */
        public RankingList: pb.IBase_Ranking_ARankingInfo[];

        /**
         * Creates a new Net_Ranking_GetRankingRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Ranking_GetRankingRet instance
         */
        public static create(properties?: pb.INet_Ranking_GetRankingRet): pb.Net_Ranking_GetRankingRet;

        /**
         * Encodes the specified Net_Ranking_GetRankingRet message. Does not implicitly {@link pb.Net_Ranking_GetRankingRet.verify|verify} messages.
         * @param message Net_Ranking_GetRankingRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Ranking_GetRankingRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Ranking_GetRankingRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Ranking_GetRankingRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Ranking_GetRankingRet;

        /**
         * Gets the default type url for Net_Ranking_GetRankingRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Room_CfgRoomInfo. */
    interface IBase_Room_CfgRoomInfo {

        /** Base_Room_CfgRoomInfo RoomId */
        RoomId?: (number|null);

        /** Base_Room_CfgRoomInfo ThemeType */
        ThemeType?: (number|null);

        /** Base_Room_CfgRoomInfo ThemeName */
        ThemeName?: (string|null);

        /** Base_Room_CfgRoomInfo LowestCoinsLimit */
        LowestCoinsLimit?: (number|null);

        /** Base_Room_CfgRoomInfo LimitLevel */
        LimitLevel?: (number|null);

        /** Base_Room_CfgRoomInfo IsOpen */
        IsOpen?: (number|null);
    }

    /** Represents a Base_Room_CfgRoomInfo. */
    class Base_Room_CfgRoomInfo implements IBase_Room_CfgRoomInfo {

        /**
         * Constructs a new Base_Room_CfgRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Room_CfgRoomInfo);

        /** Base_Room_CfgRoomInfo RoomId. */
        public RoomId: number;

        /** Base_Room_CfgRoomInfo ThemeType. */
        public ThemeType: number;

        /** Base_Room_CfgRoomInfo ThemeName. */
        public ThemeName: string;

        /** Base_Room_CfgRoomInfo LowestCoinsLimit. */
        public LowestCoinsLimit: number;

        /** Base_Room_CfgRoomInfo LimitLevel. */
        public LimitLevel: number;

        /** Base_Room_CfgRoomInfo IsOpen. */
        public IsOpen: number;

        /**
         * Creates a new Base_Room_CfgRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Room_CfgRoomInfo instance
         */
        public static create(properties?: pb.IBase_Room_CfgRoomInfo): pb.Base_Room_CfgRoomInfo;

        /**
         * Encodes the specified Base_Room_CfgRoomInfo message. Does not implicitly {@link pb.Base_Room_CfgRoomInfo.verify|verify} messages.
         * @param message Base_Room_CfgRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Room_CfgRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Room_CfgRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Room_CfgRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Room_CfgRoomInfo;

        /**
         * Gets the default type url for Base_Room_CfgRoomInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_GetThemeListReq. */
    interface INet_Room_GetThemeListReq {
    }

    /** Represents a Net_Room_GetThemeListReq. */
    class Net_Room_GetThemeListReq implements INet_Room_GetThemeListReq {

        /**
         * Constructs a new Net_Room_GetThemeListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_GetThemeListReq);

        /**
         * Creates a new Net_Room_GetThemeListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_GetThemeListReq instance
         */
        public static create(properties?: pb.INet_Room_GetThemeListReq): pb.Net_Room_GetThemeListReq;

        /**
         * Encodes the specified Net_Room_GetThemeListReq message. Does not implicitly {@link pb.Net_Room_GetThemeListReq.verify|verify} messages.
         * @param message Net_Room_GetThemeListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_GetThemeListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_GetThemeListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_GetThemeListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_GetThemeListReq;

        /**
         * Gets the default type url for Net_Room_GetThemeListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_GetThemeListRet. */
    interface INet_Room_GetThemeListRet {

        /** Net_Room_GetThemeListRet Ret */
        Ret?: (number|null);

        /** Net_Room_GetThemeListRet RoomInfos */
        RoomInfos?: (pb.IBase_Room_CfgRoomInfo[]|null);
    }

    /** Represents a Net_Room_GetThemeListRet. */
    class Net_Room_GetThemeListRet implements INet_Room_GetThemeListRet {

        /**
         * Constructs a new Net_Room_GetThemeListRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_GetThemeListRet);

        /** Net_Room_GetThemeListRet Ret. */
        public Ret: number;

        /** Net_Room_GetThemeListRet RoomInfos. */
        public RoomInfos: pb.IBase_Room_CfgRoomInfo[];

        /**
         * Creates a new Net_Room_GetThemeListRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_GetThemeListRet instance
         */
        public static create(properties?: pb.INet_Room_GetThemeListRet): pb.Net_Room_GetThemeListRet;

        /**
         * Encodes the specified Net_Room_GetThemeListRet message. Does not implicitly {@link pb.Net_Room_GetThemeListRet.verify|verify} messages.
         * @param message Net_Room_GetThemeListRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_GetThemeListRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_GetThemeListRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_GetThemeListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_GetThemeListRet;

        /**
         * Gets the default type url for Net_Room_GetThemeListRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Room_RoomInfo. */
    interface IBase_Room_RoomInfo {

        /** Base_Room_RoomInfo RoomId */
        RoomId?: (number|null);

        /** Base_Room_RoomInfo HomeownerId */
        HomeownerId?: (string|null);
    }

    /** Represents a Base_Room_RoomInfo. */
    class Base_Room_RoomInfo implements IBase_Room_RoomInfo {

        /**
         * Constructs a new Base_Room_RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Room_RoomInfo);

        /** Base_Room_RoomInfo RoomId. */
        public RoomId: number;

        /** Base_Room_RoomInfo HomeownerId. */
        public HomeownerId: string;

        /**
         * Creates a new Base_Room_RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Room_RoomInfo instance
         */
        public static create(properties?: pb.IBase_Room_RoomInfo): pb.Base_Room_RoomInfo;

        /**
         * Encodes the specified Base_Room_RoomInfo message. Does not implicitly {@link pb.Base_Room_RoomInfo.verify|verify} messages.
         * @param message Base_Room_RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Room_RoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Room_RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Room_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Room_RoomInfo;

        /**
         * Gets the default type url for Base_Room_RoomInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_CreateRoomReq. */
    interface INet_Room_CreateRoomReq {

        /** Net_Room_CreateRoomReq RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_Room_CreateRoomReq. */
    class Net_Room_CreateRoomReq implements INet_Room_CreateRoomReq {

        /**
         * Constructs a new Net_Room_CreateRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_CreateRoomReq);

        /** Net_Room_CreateRoomReq RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_Room_CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_CreateRoomReq instance
         */
        public static create(properties?: pb.INet_Room_CreateRoomReq): pb.Net_Room_CreateRoomReq;

        /**
         * Encodes the specified Net_Room_CreateRoomReq message. Does not implicitly {@link pb.Net_Room_CreateRoomReq.verify|verify} messages.
         * @param message Net_Room_CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_CreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_CreateRoomReq;

        /**
         * Gets the default type url for Net_Room_CreateRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_CreateRoomRet. */
    interface INet_Room_CreateRoomRet {

        /** Net_Room_CreateRoomRet Ret */
        Ret?: (number|null);

        /** Net_Room_CreateRoomRet RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_Room_CreateRoomRet. */
    class Net_Room_CreateRoomRet implements INet_Room_CreateRoomRet {

        /**
         * Constructs a new Net_Room_CreateRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_CreateRoomRet);

        /** Net_Room_CreateRoomRet Ret. */
        public Ret: number;

        /** Net_Room_CreateRoomRet RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_Room_CreateRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_CreateRoomRet instance
         */
        public static create(properties?: pb.INet_Room_CreateRoomRet): pb.Net_Room_CreateRoomRet;

        /**
         * Encodes the specified Net_Room_CreateRoomRet message. Does not implicitly {@link pb.Net_Room_CreateRoomRet.verify|verify} messages.
         * @param message Net_Room_CreateRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_CreateRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_CreateRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_CreateRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_CreateRoomRet;

        /**
         * Gets the default type url for Net_Room_CreateRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_JoinRoomReq. */
    interface INet_Room_JoinRoomReq {

        /** Net_Room_JoinRoomReq RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_Room_JoinRoomReq. */
    class Net_Room_JoinRoomReq implements INet_Room_JoinRoomReq {

        /**
         * Constructs a new Net_Room_JoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_JoinRoomReq);

        /** Net_Room_JoinRoomReq RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_Room_JoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_JoinRoomReq instance
         */
        public static create(properties?: pb.INet_Room_JoinRoomReq): pb.Net_Room_JoinRoomReq;

        /**
         * Encodes the specified Net_Room_JoinRoomReq message. Does not implicitly {@link pb.Net_Room_JoinRoomReq.verify|verify} messages.
         * @param message Net_Room_JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_JoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_JoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_JoinRoomReq;

        /**
         * Gets the default type url for Net_Room_JoinRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_JoinRoomRet. */
    interface INet_Room_JoinRoomRet {

        /** Net_Room_JoinRoomRet Ret */
        Ret?: (number|null);

        /** Net_Room_JoinRoomRet RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_Room_JoinRoomRet. */
    class Net_Room_JoinRoomRet implements INet_Room_JoinRoomRet {

        /**
         * Constructs a new Net_Room_JoinRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_JoinRoomRet);

        /** Net_Room_JoinRoomRet Ret. */
        public Ret: number;

        /** Net_Room_JoinRoomRet RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_Room_JoinRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_JoinRoomRet instance
         */
        public static create(properties?: pb.INet_Room_JoinRoomRet): pb.Net_Room_JoinRoomRet;

        /**
         * Encodes the specified Net_Room_JoinRoomRet message. Does not implicitly {@link pb.Net_Room_JoinRoomRet.verify|verify} messages.
         * @param message Net_Room_JoinRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_JoinRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_JoinRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_JoinRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_JoinRoomRet;

        /**
         * Gets the default type url for Net_Room_JoinRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_DissolveRoomReq. */
    interface INet_Room_DissolveRoomReq {
    }

    /** Represents a Net_Room_DissolveRoomReq. */
    class Net_Room_DissolveRoomReq implements INet_Room_DissolveRoomReq {

        /**
         * Constructs a new Net_Room_DissolveRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_DissolveRoomReq);

        /**
         * Creates a new Net_Room_DissolveRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_DissolveRoomReq instance
         */
        public static create(properties?: pb.INet_Room_DissolveRoomReq): pb.Net_Room_DissolveRoomReq;

        /**
         * Encodes the specified Net_Room_DissolveRoomReq message. Does not implicitly {@link pb.Net_Room_DissolveRoomReq.verify|verify} messages.
         * @param message Net_Room_DissolveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_DissolveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_DissolveRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_DissolveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_DissolveRoomReq;

        /**
         * Gets the default type url for Net_Room_DissolveRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_DissolveRoomRet. */
    interface INet_Room_DissolveRoomRet {

        /** Net_Room_DissolveRoomRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Room_DissolveRoomRet. */
    class Net_Room_DissolveRoomRet implements INet_Room_DissolveRoomRet {

        /**
         * Constructs a new Net_Room_DissolveRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_DissolveRoomRet);

        /** Net_Room_DissolveRoomRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Room_DissolveRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_DissolveRoomRet instance
         */
        public static create(properties?: pb.INet_Room_DissolveRoomRet): pb.Net_Room_DissolveRoomRet;

        /**
         * Encodes the specified Net_Room_DissolveRoomRet message. Does not implicitly {@link pb.Net_Room_DissolveRoomRet.verify|verify} messages.
         * @param message Net_Room_DissolveRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_DissolveRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_DissolveRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_DissolveRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_DissolveRoomRet;

        /**
         * Gets the default type url for Net_Room_DissolveRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_LeaveReq. */
    interface INet_Room_LeaveReq {
    }

    /** Represents a Net_Room_LeaveReq. */
    class Net_Room_LeaveReq implements INet_Room_LeaveReq {

        /**
         * Constructs a new Net_Room_LeaveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_LeaveReq);

        /**
         * Creates a new Net_Room_LeaveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_LeaveReq instance
         */
        public static create(properties?: pb.INet_Room_LeaveReq): pb.Net_Room_LeaveReq;

        /**
         * Encodes the specified Net_Room_LeaveReq message. Does not implicitly {@link pb.Net_Room_LeaveReq.verify|verify} messages.
         * @param message Net_Room_LeaveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_LeaveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_LeaveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_LeaveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_LeaveReq;

        /**
         * Gets the default type url for Net_Room_LeaveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Room_LeaveRet. */
    interface INet_Room_LeaveRet {

        /** Net_Room_LeaveRet Ret */
        Ret?: (number|null);

        /** Net_Room_LeaveRet RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_Room_LeaveRet. */
    class Net_Room_LeaveRet implements INet_Room_LeaveRet {

        /**
         * Constructs a new Net_Room_LeaveRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Room_LeaveRet);

        /** Net_Room_LeaveRet Ret. */
        public Ret: number;

        /** Net_Room_LeaveRet RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_Room_LeaveRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Room_LeaveRet instance
         */
        public static create(properties?: pb.INet_Room_LeaveRet): pb.Net_Room_LeaveRet;

        /**
         * Encodes the specified Net_Room_LeaveRet message. Does not implicitly {@link pb.Net_Room_LeaveRet.verify|verify} messages.
         * @param message Net_Room_LeaveRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Room_LeaveRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Room_LeaveRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Room_LeaveRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Room_LeaveRet;

        /**
         * Gets the default type url for Net_Room_LeaveRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_Slots_SlotsInfo. */
    interface IBase_Slots_SlotsInfo {
    }

    /** Represents a Base_Slots_SlotsInfo. */
    class Base_Slots_SlotsInfo implements IBase_Slots_SlotsInfo {

        /**
         * Constructs a new Base_Slots_SlotsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_Slots_SlotsInfo);

        /**
         * Creates a new Base_Slots_SlotsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_Slots_SlotsInfo instance
         */
        public static create(properties?: pb.IBase_Slots_SlotsInfo): pb.Base_Slots_SlotsInfo;

        /**
         * Encodes the specified Base_Slots_SlotsInfo message. Does not implicitly {@link pb.Base_Slots_SlotsInfo.verify|verify} messages.
         * @param message Base_Slots_SlotsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_Slots_SlotsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_Slots_SlotsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_Slots_SlotsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_Slots_SlotsInfo;

        /**
         * Gets the default type url for Base_Slots_SlotsInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Slots_SpinReq. */
    interface INet_Slots_SpinReq {

        /** Net_Slots_SpinReq TaskId */
        TaskId?: (number|null);
    }

    /** Represents a Net_Slots_SpinReq. */
    class Net_Slots_SpinReq implements INet_Slots_SpinReq {

        /**
         * Constructs a new Net_Slots_SpinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Slots_SpinReq);

        /** Net_Slots_SpinReq TaskId. */
        public TaskId: number;

        /**
         * Creates a new Net_Slots_SpinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Slots_SpinReq instance
         */
        public static create(properties?: pb.INet_Slots_SpinReq): pb.Net_Slots_SpinReq;

        /**
         * Encodes the specified Net_Slots_SpinReq message. Does not implicitly {@link pb.Net_Slots_SpinReq.verify|verify} messages.
         * @param message Net_Slots_SpinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Slots_SpinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Slots_SpinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Slots_SpinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Slots_SpinReq;

        /**
         * Gets the default type url for Net_Slots_SpinReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_Slots_SpinRet. */
    interface INet_Slots_SpinRet {

        /** Net_Slots_SpinRet Ret */
        Ret?: (number|null);
    }

    /** Represents a Net_Slots_SpinRet. */
    class Net_Slots_SpinRet implements INet_Slots_SpinRet {

        /**
         * Constructs a new Net_Slots_SpinRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_Slots_SpinRet);

        /** Net_Slots_SpinRet Ret. */
        public Ret: number;

        /**
         * Creates a new Net_Slots_SpinRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_Slots_SpinRet instance
         */
        public static create(properties?: pb.INet_Slots_SpinRet): pb.Net_Slots_SpinRet;

        /**
         * Encodes the specified Net_Slots_SpinRet message. Does not implicitly {@link pb.Net_Slots_SpinRet.verify|verify} messages.
         * @param message Net_Slots_SpinRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_Slots_SpinRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_Slots_SpinRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_Slots_SpinRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_Slots_SpinRet;

        /**
         * Gets the default type url for Net_Slots_SpinRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** EZJHConstant enum. */
    enum EZJHConstant {
        Invalid = 0,
        TotalRoles = 9
    }

    /** EZJH enum. */
    enum EZJH {
        NotStarted = 0,
        InPreparation = 1,
        InGame = 2
    }

    /** C_ZJH enum. */
    enum C_ZJH {
        C_ZJH_INVALID = 0,
        ReadySeconds = 30,
        NotReadySeconds = 60
    }

    /** E_ZJH_Operation enum. */
    enum E_ZJH_Operation {
        start = 0,
        Chupai = 2,
        gen_zhu = 3,
        jia_zhu = 4,
        bi_pai = 5,
        look_card = 6,
        qi_pai = 7,
        ya_man = 8,
        DiuChouMa = 9,
        tx_RatioCard = 10,
        tx_liangpaihecai = 11
    }

    /** Properties of a Base_ZJH_UserInfo. */
    interface IBase_ZJH_UserInfo {

        /** Base_ZJH_UserInfo UserId */
        UserId?: (string|null);

        /** Base_ZJH_UserInfo NickName */
        NickName?: (string|null);

        /** Base_ZJH_UserInfo Coins */
        Coins?: (number|Long|null);

        /** Base_ZJH_UserInfo IsOffline */
        IsOffline?: (boolean|null);

        /** Base_ZJH_UserInfo ChairId */
        ChairId?: (number|null);

        /** Base_ZJH_UserInfo IsReady */
        IsReady?: (boolean|null);

        /** Base_ZJH_UserInfo IsKanPai */
        IsKanPai?: (boolean|null);

        /** Base_ZJH_UserInfo Cards */
        Cards?: (string[]|null);

        /** Base_ZJH_UserInfo BettingNum */
        BettingNum?: (number|null);

        /** Base_ZJH_UserInfo TotalBettingNum */
        TotalBettingNum?: (number|null);

        /** Base_ZJH_UserInfo MaxScore */
        MaxScore?: (number|null);

        /** Base_ZJH_UserInfo MinScore */
        MinScore?: (number|null);

        /** Base_ZJH_UserInfo NextOperatorId */
        NextOperatorId?: (string|null);
    }

    /** Represents a Base_ZJH_UserInfo. */
    class Base_ZJH_UserInfo implements IBase_ZJH_UserInfo {

        /**
         * Constructs a new Base_ZJH_UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_ZJH_UserInfo);

        /** Base_ZJH_UserInfo UserId. */
        public UserId: string;

        /** Base_ZJH_UserInfo NickName. */
        public NickName: string;

        /** Base_ZJH_UserInfo Coins. */
        public Coins: (number|Long);

        /** Base_ZJH_UserInfo IsOffline. */
        public IsOffline: boolean;

        /** Base_ZJH_UserInfo ChairId. */
        public ChairId: number;

        /** Base_ZJH_UserInfo IsReady. */
        public IsReady: boolean;

        /** Base_ZJH_UserInfo IsKanPai. */
        public IsKanPai: boolean;

        /** Base_ZJH_UserInfo Cards. */
        public Cards: string[];

        /** Base_ZJH_UserInfo BettingNum. */
        public BettingNum: number;

        /** Base_ZJH_UserInfo TotalBettingNum. */
        public TotalBettingNum: number;

        /** Base_ZJH_UserInfo MaxScore. */
        public MaxScore: number;

        /** Base_ZJH_UserInfo MinScore. */
        public MinScore: number;

        /** Base_ZJH_UserInfo NextOperatorId. */
        public NextOperatorId: string;

        /**
         * Creates a new Base_ZJH_UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_ZJH_UserInfo instance
         */
        public static create(properties?: pb.IBase_ZJH_UserInfo): pb.Base_ZJH_UserInfo;

        /**
         * Encodes the specified Base_ZJH_UserInfo message. Does not implicitly {@link pb.Base_ZJH_UserInfo.verify|verify} messages.
         * @param message Base_ZJH_UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_ZJH_UserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_ZJH_UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_ZJH_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_ZJH_UserInfo;

        /**
         * Gets the default type url for Base_ZJH_UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Base_ZJH_RoomInfo. */
    interface IBase_ZJH_RoomInfo {

        /** Base_ZJH_RoomInfo RoomId */
        RoomId?: (number|null);

        /** Base_ZJH_RoomInfo HomeownerId */
        HomeownerId?: (string|null);

        /** Base_ZJH_RoomInfo RoomLevel */
        RoomLevel?: (number|null);

        /** Base_ZJH_RoomInfo State */
        State?: (number|null);

        /** Base_ZJH_RoomInfo ReadyCountdown */
        ReadyCountdown?: (number|null);

        /** Base_ZJH_RoomInfo RoleInfos */
        RoleInfos?: (pb.IBase_ZJH_UserInfo[]|null);

        /** Base_ZJH_RoomInfo NextOperatorId */
        NextOperatorId?: (string|null);

        /** Base_ZJH_RoomInfo WheelNum */
        WheelNum?: (number|null);

        /** Base_ZJH_RoomInfo RoomTotalBettingNum */
        RoomTotalBettingNum?: (number|null);

        /** Base_ZJH_RoomInfo RoomBettingChipList */
        RoomBettingChipList?: (number|null);

        /** Base_ZJH_RoomInfo OperationTime */
        OperationTime?: (number|Long|null);
    }

    /** Represents a Base_ZJH_RoomInfo. */
    class Base_ZJH_RoomInfo implements IBase_ZJH_RoomInfo {

        /**
         * Constructs a new Base_ZJH_RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBase_ZJH_RoomInfo);

        /** Base_ZJH_RoomInfo RoomId. */
        public RoomId: number;

        /** Base_ZJH_RoomInfo HomeownerId. */
        public HomeownerId: string;

        /** Base_ZJH_RoomInfo RoomLevel. */
        public RoomLevel: number;

        /** Base_ZJH_RoomInfo State. */
        public State: number;

        /** Base_ZJH_RoomInfo ReadyCountdown. */
        public ReadyCountdown: number;

        /** Base_ZJH_RoomInfo RoleInfos. */
        public RoleInfos: pb.IBase_ZJH_UserInfo[];

        /** Base_ZJH_RoomInfo NextOperatorId. */
        public NextOperatorId: string;

        /** Base_ZJH_RoomInfo WheelNum. */
        public WheelNum: number;

        /** Base_ZJH_RoomInfo RoomTotalBettingNum. */
        public RoomTotalBettingNum: number;

        /** Base_ZJH_RoomInfo RoomBettingChipList. */
        public RoomBettingChipList: number;

        /** Base_ZJH_RoomInfo OperationTime. */
        public OperationTime: (number|Long);

        /**
         * Creates a new Base_ZJH_RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base_ZJH_RoomInfo instance
         */
        public static create(properties?: pb.IBase_ZJH_RoomInfo): pb.Base_ZJH_RoomInfo;

        /**
         * Encodes the specified Base_ZJH_RoomInfo message. Does not implicitly {@link pb.Base_ZJH_RoomInfo.verify|verify} messages.
         * @param message Base_ZJH_RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBase_ZJH_RoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base_ZJH_RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base_ZJH_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Base_ZJH_RoomInfo;

        /**
         * Gets the default type url for Base_ZJH_RoomInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_GoldChangeRet. */
    interface INet_ZJH_GoldChangeRet {
    }

    /** Represents a Net_ZJH_GoldChangeRet. */
    class Net_ZJH_GoldChangeRet implements INet_ZJH_GoldChangeRet {

        /**
         * Constructs a new Net_ZJH_GoldChangeRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_GoldChangeRet);

        /**
         * Creates a new Net_ZJH_GoldChangeRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_GoldChangeRet instance
         */
        public static create(properties?: pb.INet_ZJH_GoldChangeRet): pb.Net_ZJH_GoldChangeRet;

        /**
         * Encodes the specified Net_ZJH_GoldChangeRet message. Does not implicitly {@link pb.Net_ZJH_GoldChangeRet.verify|verify} messages.
         * @param message Net_ZJH_GoldChangeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_GoldChangeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_GoldChangeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_GoldChangeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_GoldChangeRet;

        /**
         * Gets the default type url for Net_ZJH_GoldChangeRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_CreateRoomReq. */
    interface INet_ZJH_CreateRoomReq {

        /** Net_ZJH_CreateRoomReq RoomLevel */
        RoomLevel?: (number|null);
    }

    /** Represents a Net_ZJH_CreateRoomReq. */
    class Net_ZJH_CreateRoomReq implements INet_ZJH_CreateRoomReq {

        /**
         * Constructs a new Net_ZJH_CreateRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_CreateRoomReq);

        /** Net_ZJH_CreateRoomReq RoomLevel. */
        public RoomLevel: number;

        /**
         * Creates a new Net_ZJH_CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_CreateRoomReq instance
         */
        public static create(properties?: pb.INet_ZJH_CreateRoomReq): pb.Net_ZJH_CreateRoomReq;

        /**
         * Encodes the specified Net_ZJH_CreateRoomReq message. Does not implicitly {@link pb.Net_ZJH_CreateRoomReq.verify|verify} messages.
         * @param message Net_ZJH_CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_CreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_CreateRoomReq;

        /**
         * Gets the default type url for Net_ZJH_CreateRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_CreateRoomRet. */
    interface INet_ZJH_CreateRoomRet {

        /** Net_ZJH_CreateRoomRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_CreateRoomRet RoomId */
        RoomId?: (number|null);
    }

    /** Represents a Net_ZJH_CreateRoomRet. */
    class Net_ZJH_CreateRoomRet implements INet_ZJH_CreateRoomRet {

        /**
         * Constructs a new Net_ZJH_CreateRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_CreateRoomRet);

        /** Net_ZJH_CreateRoomRet Ret. */
        public Ret: number;

        /** Net_ZJH_CreateRoomRet RoomId. */
        public RoomId: number;

        /**
         * Creates a new Net_ZJH_CreateRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_CreateRoomRet instance
         */
        public static create(properties?: pb.INet_ZJH_CreateRoomRet): pb.Net_ZJH_CreateRoomRet;

        /**
         * Encodes the specified Net_ZJH_CreateRoomRet message. Does not implicitly {@link pb.Net_ZJH_CreateRoomRet.verify|verify} messages.
         * @param message Net_ZJH_CreateRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_CreateRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_CreateRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_CreateRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_CreateRoomRet;

        /**
         * Gets the default type url for Net_ZJH_CreateRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_JoinRoomReq. */
    interface INet_ZJH_JoinRoomReq {

        /** Net_ZJH_JoinRoomReq RoomNum */
        RoomNum?: (number|null);
    }

    /** Represents a Net_ZJH_JoinRoomReq. */
    class Net_ZJH_JoinRoomReq implements INet_ZJH_JoinRoomReq {

        /**
         * Constructs a new Net_ZJH_JoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_JoinRoomReq);

        /** Net_ZJH_JoinRoomReq RoomNum. */
        public RoomNum: number;

        /**
         * Creates a new Net_ZJH_JoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_JoinRoomReq instance
         */
        public static create(properties?: pb.INet_ZJH_JoinRoomReq): pb.Net_ZJH_JoinRoomReq;

        /**
         * Encodes the specified Net_ZJH_JoinRoomReq message. Does not implicitly {@link pb.Net_ZJH_JoinRoomReq.verify|verify} messages.
         * @param message Net_ZJH_JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_JoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_JoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_JoinRoomReq;

        /**
         * Gets the default type url for Net_ZJH_JoinRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_JoinRoomRet. */
    interface INet_ZJH_JoinRoomRet {

        /** Net_ZJH_JoinRoomRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_JoinRoomRet TargetRoleInfo */
        TargetRoleInfo?: (pb.IBase_ZJH_UserInfo|null);
    }

    /** Represents a Net_ZJH_JoinRoomRet. */
    class Net_ZJH_JoinRoomRet implements INet_ZJH_JoinRoomRet {

        /**
         * Constructs a new Net_ZJH_JoinRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_JoinRoomRet);

        /** Net_ZJH_JoinRoomRet Ret. */
        public Ret: number;

        /** Net_ZJH_JoinRoomRet TargetRoleInfo. */
        public TargetRoleInfo?: (pb.IBase_ZJH_UserInfo|null);

        /**
         * Creates a new Net_ZJH_JoinRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_JoinRoomRet instance
         */
        public static create(properties?: pb.INet_ZJH_JoinRoomRet): pb.Net_ZJH_JoinRoomRet;

        /**
         * Encodes the specified Net_ZJH_JoinRoomRet message. Does not implicitly {@link pb.Net_ZJH_JoinRoomRet.verify|verify} messages.
         * @param message Net_ZJH_JoinRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_JoinRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_JoinRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_JoinRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_JoinRoomRet;

        /**
         * Gets the default type url for Net_ZJH_JoinRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_LeaveRoomReq. */
    interface INet_ZJH_LeaveRoomReq {
    }

    /** Represents a Net_ZJH_LeaveRoomReq. */
    class Net_ZJH_LeaveRoomReq implements INet_ZJH_LeaveRoomReq {

        /**
         * Constructs a new Net_ZJH_LeaveRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_LeaveRoomReq);

        /**
         * Creates a new Net_ZJH_LeaveRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_LeaveRoomReq instance
         */
        public static create(properties?: pb.INet_ZJH_LeaveRoomReq): pb.Net_ZJH_LeaveRoomReq;

        /**
         * Encodes the specified Net_ZJH_LeaveRoomReq message. Does not implicitly {@link pb.Net_ZJH_LeaveRoomReq.verify|verify} messages.
         * @param message Net_ZJH_LeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_LeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_LeaveRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_LeaveRoomReq;

        /**
         * Gets the default type url for Net_ZJH_LeaveRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_LeaveRoomRet. */
    interface INet_ZJH_LeaveRoomRet {

        /** Net_ZJH_LeaveRoomRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_LeaveRoomRet LeaveUserId */
        LeaveUserId?: (string|null);
    }

    /** Represents a Net_ZJH_LeaveRoomRet. */
    class Net_ZJH_LeaveRoomRet implements INet_ZJH_LeaveRoomRet {

        /**
         * Constructs a new Net_ZJH_LeaveRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_LeaveRoomRet);

        /** Net_ZJH_LeaveRoomRet Ret. */
        public Ret: number;

        /** Net_ZJH_LeaveRoomRet LeaveUserId. */
        public LeaveUserId: string;

        /**
         * Creates a new Net_ZJH_LeaveRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_LeaveRoomRet instance
         */
        public static create(properties?: pb.INet_ZJH_LeaveRoomRet): pb.Net_ZJH_LeaveRoomRet;

        /**
         * Encodes the specified Net_ZJH_LeaveRoomRet message. Does not implicitly {@link pb.Net_ZJH_LeaveRoomRet.verify|verify} messages.
         * @param message Net_ZJH_LeaveRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_LeaveRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_LeaveRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_LeaveRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_LeaveRoomRet;

        /**
         * Gets the default type url for Net_ZJH_LeaveRoomRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_GetRoomInfoReq. */
    interface INet_ZJH_GetRoomInfoReq {
    }

    /** Represents a Net_ZJH_GetRoomInfoReq. */
    class Net_ZJH_GetRoomInfoReq implements INet_ZJH_GetRoomInfoReq {

        /**
         * Constructs a new Net_ZJH_GetRoomInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_GetRoomInfoReq);

        /**
         * Creates a new Net_ZJH_GetRoomInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_GetRoomInfoReq instance
         */
        public static create(properties?: pb.INet_ZJH_GetRoomInfoReq): pb.Net_ZJH_GetRoomInfoReq;

        /**
         * Encodes the specified Net_ZJH_GetRoomInfoReq message. Does not implicitly {@link pb.Net_ZJH_GetRoomInfoReq.verify|verify} messages.
         * @param message Net_ZJH_GetRoomInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_GetRoomInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_GetRoomInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_GetRoomInfoReq;

        /**
         * Gets the default type url for Net_ZJH_GetRoomInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_GetRoomInfoRet. */
    interface INet_ZJH_GetRoomInfoRet {

        /** Net_ZJH_GetRoomInfoRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_GetRoomInfoRet RoomInfo */
        RoomInfo?: (pb.IBase_ZJH_RoomInfo|null);
    }

    /** Represents a Net_ZJH_GetRoomInfoRet. */
    class Net_ZJH_GetRoomInfoRet implements INet_ZJH_GetRoomInfoRet {

        /**
         * Constructs a new Net_ZJH_GetRoomInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_GetRoomInfoRet);

        /** Net_ZJH_GetRoomInfoRet Ret. */
        public Ret: number;

        /** Net_ZJH_GetRoomInfoRet RoomInfo. */
        public RoomInfo?: (pb.IBase_ZJH_RoomInfo|null);

        /**
         * Creates a new Net_ZJH_GetRoomInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_GetRoomInfoRet instance
         */
        public static create(properties?: pb.INet_ZJH_GetRoomInfoRet): pb.Net_ZJH_GetRoomInfoRet;

        /**
         * Encodes the specified Net_ZJH_GetRoomInfoRet message. Does not implicitly {@link pb.Net_ZJH_GetRoomInfoRet.verify|verify} messages.
         * @param message Net_ZJH_GetRoomInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_GetRoomInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_GetRoomInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_GetRoomInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_GetRoomInfoRet;

        /**
         * Gets the default type url for Net_ZJH_GetRoomInfoRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_RoleGoldChangeRet. */
    interface INet_ZJH_RoleGoldChangeRet {

        /** Net_ZJH_RoleGoldChangeRet UserId */
        UserId?: (number|null);

        /** Net_ZJH_RoleGoldChangeRet Coins */
        Coins?: (number|Long|null);
    }

    /** Represents a Net_ZJH_RoleGoldChangeRet. */
    class Net_ZJH_RoleGoldChangeRet implements INet_ZJH_RoleGoldChangeRet {

        /**
         * Constructs a new Net_ZJH_RoleGoldChangeRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_RoleGoldChangeRet);

        /** Net_ZJH_RoleGoldChangeRet UserId. */
        public UserId: number;

        /** Net_ZJH_RoleGoldChangeRet Coins. */
        public Coins: (number|Long);

        /**
         * Creates a new Net_ZJH_RoleGoldChangeRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_RoleGoldChangeRet instance
         */
        public static create(properties?: pb.INet_ZJH_RoleGoldChangeRet): pb.Net_ZJH_RoleGoldChangeRet;

        /**
         * Encodes the specified Net_ZJH_RoleGoldChangeRet message. Does not implicitly {@link pb.Net_ZJH_RoleGoldChangeRet.verify|verify} messages.
         * @param message Net_ZJH_RoleGoldChangeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_RoleGoldChangeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_RoleGoldChangeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_RoleGoldChangeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_RoleGoldChangeRet;

        /**
         * Gets the default type url for Net_ZJH_RoleGoldChangeRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_ReadyReq. */
    interface INet_ZJH_ReadyReq {
    }

    /** Represents a Net_ZJH_ReadyReq. */
    class Net_ZJH_ReadyReq implements INet_ZJH_ReadyReq {

        /**
         * Constructs a new Net_ZJH_ReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_ReadyReq);

        /**
         * Creates a new Net_ZJH_ReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_ReadyReq instance
         */
        public static create(properties?: pb.INet_ZJH_ReadyReq): pb.Net_ZJH_ReadyReq;

        /**
         * Encodes the specified Net_ZJH_ReadyReq message. Does not implicitly {@link pb.Net_ZJH_ReadyReq.verify|verify} messages.
         * @param message Net_ZJH_ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_ReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_ReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_ReadyReq;

        /**
         * Gets the default type url for Net_ZJH_ReadyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_ReadyRet. */
    interface INet_ZJH_ReadyRet {

        /** Net_ZJH_ReadyRet Req */
        Req?: (number|null);

        /** Net_ZJH_ReadyRet TargetUserId */
        TargetUserId?: (string|null);

        /** Net_ZJH_ReadyRet TargetIsReady */
        TargetIsReady?: (boolean|null);

        /** Net_ZJH_ReadyRet State */
        State?: (number|null);
    }

    /** Represents a Net_ZJH_ReadyRet. */
    class Net_ZJH_ReadyRet implements INet_ZJH_ReadyRet {

        /**
         * Constructs a new Net_ZJH_ReadyRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_ReadyRet);

        /** Net_ZJH_ReadyRet Req. */
        public Req: number;

        /** Net_ZJH_ReadyRet TargetUserId. */
        public TargetUserId: string;

        /** Net_ZJH_ReadyRet TargetIsReady. */
        public TargetIsReady: boolean;

        /** Net_ZJH_ReadyRet State. */
        public State: number;

        /**
         * Creates a new Net_ZJH_ReadyRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_ReadyRet instance
         */
        public static create(properties?: pb.INet_ZJH_ReadyRet): pb.Net_ZJH_ReadyRet;

        /**
         * Encodes the specified Net_ZJH_ReadyRet message. Does not implicitly {@link pb.Net_ZJH_ReadyRet.verify|verify} messages.
         * @param message Net_ZJH_ReadyRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_ReadyRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_ReadyRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_ReadyRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_ReadyRet;

        /**
         * Gets the default type url for Net_ZJH_ReadyRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_StartGameRet. */
    interface INet_ZJH_StartGameRet {

        /** Net_ZJH_StartGameRet State */
        State?: (number|null);

        /** Net_ZJH_StartGameRet BetCoin */
        BetCoin?: (number|null);

        /** Net_ZJH_StartGameRet RoleInfoList */
        RoleInfoList?: (pb.IBase_ZJH_UserInfo[]|null);

        /** Net_ZJH_StartGameRet NextOperatorId */
        NextOperatorId?: (number|null);
    }

    /** Represents a Net_ZJH_StartGameRet. */
    class Net_ZJH_StartGameRet implements INet_ZJH_StartGameRet {

        /**
         * Constructs a new Net_ZJH_StartGameRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_StartGameRet);

        /** Net_ZJH_StartGameRet State. */
        public State: number;

        /** Net_ZJH_StartGameRet BetCoin. */
        public BetCoin: number;

        /** Net_ZJH_StartGameRet RoleInfoList. */
        public RoleInfoList: pb.IBase_ZJH_UserInfo[];

        /** Net_ZJH_StartGameRet NextOperatorId. */
        public NextOperatorId: number;

        /**
         * Creates a new Net_ZJH_StartGameRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_StartGameRet instance
         */
        public static create(properties?: pb.INet_ZJH_StartGameRet): pb.Net_ZJH_StartGameRet;

        /**
         * Encodes the specified Net_ZJH_StartGameRet message. Does not implicitly {@link pb.Net_ZJH_StartGameRet.verify|verify} messages.
         * @param message Net_ZJH_StartGameRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_StartGameRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_StartGameRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_StartGameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_StartGameRet;

        /**
         * Gets the default type url for Net_ZJH_StartGameRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_UpdateStatusRet. */
    interface INet_ZJH_UpdateStatusRet {

        /** Net_ZJH_UpdateStatusRet State */
        State?: (number|null);
    }

    /** Represents a Net_ZJH_UpdateStatusRet. */
    class Net_ZJH_UpdateStatusRet implements INet_ZJH_UpdateStatusRet {

        /**
         * Constructs a new Net_ZJH_UpdateStatusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_UpdateStatusRet);

        /** Net_ZJH_UpdateStatusRet State. */
        public State: number;

        /**
         * Creates a new Net_ZJH_UpdateStatusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_UpdateStatusRet instance
         */
        public static create(properties?: pb.INet_ZJH_UpdateStatusRet): pb.Net_ZJH_UpdateStatusRet;

        /**
         * Encodes the specified Net_ZJH_UpdateStatusRet message. Does not implicitly {@link pb.Net_ZJH_UpdateStatusRet.verify|verify} messages.
         * @param message Net_ZJH_UpdateStatusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_UpdateStatusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_UpdateStatusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_UpdateStatusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_UpdateStatusRet;

        /**
         * Gets the default type url for Net_ZJH_UpdateStatusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_NextOperatorRet. */
    interface INet_ZJH_NextOperatorRet {

        /** Net_ZJH_NextOperatorRet NextOperatorId */
        NextOperatorId?: (string|null);

        /** Net_ZJH_NextOperatorRet OperationTime */
        OperationTime?: (number|Long|null);
    }

    /** Represents a Net_ZJH_NextOperatorRet. */
    class Net_ZJH_NextOperatorRet implements INet_ZJH_NextOperatorRet {

        /**
         * Constructs a new Net_ZJH_NextOperatorRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_NextOperatorRet);

        /** Net_ZJH_NextOperatorRet NextOperatorId. */
        public NextOperatorId: string;

        /** Net_ZJH_NextOperatorRet OperationTime. */
        public OperationTime: (number|Long);

        /**
         * Creates a new Net_ZJH_NextOperatorRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_NextOperatorRet instance
         */
        public static create(properties?: pb.INet_ZJH_NextOperatorRet): pb.Net_ZJH_NextOperatorRet;

        /**
         * Encodes the specified Net_ZJH_NextOperatorRet message. Does not implicitly {@link pb.Net_ZJH_NextOperatorRet.verify|verify} messages.
         * @param message Net_ZJH_NextOperatorRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_NextOperatorRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_NextOperatorRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_NextOperatorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_NextOperatorRet;

        /**
         * Gets the default type url for Net_ZJH_NextOperatorRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_KanPaiReq. */
    interface INet_ZJH_KanPaiReq {
    }

    /** Represents a Net_ZJH_KanPaiReq. */
    class Net_ZJH_KanPaiReq implements INet_ZJH_KanPaiReq {

        /**
         * Constructs a new Net_ZJH_KanPaiReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_KanPaiReq);

        /**
         * Creates a new Net_ZJH_KanPaiReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_KanPaiReq instance
         */
        public static create(properties?: pb.INet_ZJH_KanPaiReq): pb.Net_ZJH_KanPaiReq;

        /**
         * Encodes the specified Net_ZJH_KanPaiReq message. Does not implicitly {@link pb.Net_ZJH_KanPaiReq.verify|verify} messages.
         * @param message Net_ZJH_KanPaiReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_KanPaiReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_KanPaiReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_KanPaiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_KanPaiReq;

        /**
         * Gets the default type url for Net_ZJH_KanPaiReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_KanPaiRet. */
    interface INet_ZJH_KanPaiRet {

        /** Net_ZJH_KanPaiRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_KanPaiRet Cards */
        Cards?: (number[]|null);
    }

    /** Represents a Net_ZJH_KanPaiRet. */
    class Net_ZJH_KanPaiRet implements INet_ZJH_KanPaiRet {

        /**
         * Constructs a new Net_ZJH_KanPaiRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_KanPaiRet);

        /** Net_ZJH_KanPaiRet Ret. */
        public Ret: number;

        /** Net_ZJH_KanPaiRet Cards. */
        public Cards: number[];

        /**
         * Creates a new Net_ZJH_KanPaiRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_KanPaiRet instance
         */
        public static create(properties?: pb.INet_ZJH_KanPaiRet): pb.Net_ZJH_KanPaiRet;

        /**
         * Encodes the specified Net_ZJH_KanPaiRet message. Does not implicitly {@link pb.Net_ZJH_KanPaiRet.verify|verify} messages.
         * @param message Net_ZJH_KanPaiRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_KanPaiRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_KanPaiRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_KanPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_KanPaiRet;

        /**
         * Gets the default type url for Net_ZJH_KanPaiRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_BiPaiReq. */
    interface INet_ZJH_BiPaiReq {

        /** Net_ZJH_BiPaiReq TargetUserId */
        TargetUserId?: (string|null);
    }

    /** Represents a Net_ZJH_BiPaiReq. */
    class Net_ZJH_BiPaiReq implements INet_ZJH_BiPaiReq {

        /**
         * Constructs a new Net_ZJH_BiPaiReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_BiPaiReq);

        /** Net_ZJH_BiPaiReq TargetUserId. */
        public TargetUserId: string;

        /**
         * Creates a new Net_ZJH_BiPaiReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_BiPaiReq instance
         */
        public static create(properties?: pb.INet_ZJH_BiPaiReq): pb.Net_ZJH_BiPaiReq;

        /**
         * Encodes the specified Net_ZJH_BiPaiReq message. Does not implicitly {@link pb.Net_ZJH_BiPaiReq.verify|verify} messages.
         * @param message Net_ZJH_BiPaiReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_BiPaiReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_BiPaiReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_BiPaiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_BiPaiReq;

        /**
         * Gets the default type url for Net_ZJH_BiPaiReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_BiPaiRet. */
    interface INet_ZJH_BiPaiRet {

        /** Net_ZJH_BiPaiRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_BiPaiRet IsWin */
        IsWin?: (boolean|null);

        /** Net_ZJH_BiPaiRet Cards */
        Cards?: (number[]|null);
    }

    /** Represents a Net_ZJH_BiPaiRet. */
    class Net_ZJH_BiPaiRet implements INet_ZJH_BiPaiRet {

        /**
         * Constructs a new Net_ZJH_BiPaiRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_BiPaiRet);

        /** Net_ZJH_BiPaiRet Ret. */
        public Ret: number;

        /** Net_ZJH_BiPaiRet IsWin. */
        public IsWin: boolean;

        /** Net_ZJH_BiPaiRet Cards. */
        public Cards: number[];

        /**
         * Creates a new Net_ZJH_BiPaiRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_BiPaiRet instance
         */
        public static create(properties?: pb.INet_ZJH_BiPaiRet): pb.Net_ZJH_BiPaiRet;

        /**
         * Encodes the specified Net_ZJH_BiPaiRet message. Does not implicitly {@link pb.Net_ZJH_BiPaiRet.verify|verify} messages.
         * @param message Net_ZJH_BiPaiRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_BiPaiRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_BiPaiRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_BiPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_BiPaiRet;

        /**
         * Gets the default type url for Net_ZJH_BiPaiRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_JiaZhuReq. */
    interface INet_ZJH_JiaZhuReq {

        /** Net_ZJH_JiaZhuReq BettingNum */
        BettingNum?: (number|null);
    }

    /** Represents a Net_ZJH_JiaZhuReq. */
    class Net_ZJH_JiaZhuReq implements INet_ZJH_JiaZhuReq {

        /**
         * Constructs a new Net_ZJH_JiaZhuReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_JiaZhuReq);

        /** Net_ZJH_JiaZhuReq BettingNum. */
        public BettingNum: number;

        /**
         * Creates a new Net_ZJH_JiaZhuReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_JiaZhuReq instance
         */
        public static create(properties?: pb.INet_ZJH_JiaZhuReq): pb.Net_ZJH_JiaZhuReq;

        /**
         * Encodes the specified Net_ZJH_JiaZhuReq message. Does not implicitly {@link pb.Net_ZJH_JiaZhuReq.verify|verify} messages.
         * @param message Net_ZJH_JiaZhuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_JiaZhuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_JiaZhuReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_JiaZhuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_JiaZhuReq;

        /**
         * Gets the default type url for Net_ZJH_JiaZhuReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_JiaZhuRet. */
    interface INet_ZJH_JiaZhuRet {

        /** Net_ZJH_JiaZhuRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_JiaZhuRet UserId */
        UserId?: (string|null);

        /** Net_ZJH_JiaZhuRet BettingNum */
        BettingNum?: (number|null);

        /** Net_ZJH_JiaZhuRet OwnTotalBettingNum */
        OwnTotalBettingNum?: (number|null);

        /** Net_ZJH_JiaZhuRet RoomTotalBettingNum */
        RoomTotalBettingNum?: (number|null);
    }

    /** Represents a Net_ZJH_JiaZhuRet. */
    class Net_ZJH_JiaZhuRet implements INet_ZJH_JiaZhuRet {

        /**
         * Constructs a new Net_ZJH_JiaZhuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_JiaZhuRet);

        /** Net_ZJH_JiaZhuRet Ret. */
        public Ret: number;

        /** Net_ZJH_JiaZhuRet UserId. */
        public UserId: string;

        /** Net_ZJH_JiaZhuRet BettingNum. */
        public BettingNum: number;

        /** Net_ZJH_JiaZhuRet OwnTotalBettingNum. */
        public OwnTotalBettingNum: number;

        /** Net_ZJH_JiaZhuRet RoomTotalBettingNum. */
        public RoomTotalBettingNum: number;

        /**
         * Creates a new Net_ZJH_JiaZhuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_JiaZhuRet instance
         */
        public static create(properties?: pb.INet_ZJH_JiaZhuRet): pb.Net_ZJH_JiaZhuRet;

        /**
         * Encodes the specified Net_ZJH_JiaZhuRet message. Does not implicitly {@link pb.Net_ZJH_JiaZhuRet.verify|verify} messages.
         * @param message Net_ZJH_JiaZhuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_JiaZhuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_JiaZhuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_JiaZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_JiaZhuRet;

        /**
         * Gets the default type url for Net_ZJH_JiaZhuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_GenZhuReq. */
    interface INet_ZJH_GenZhuReq {
    }

    /** Represents a Net_ZJH_GenZhuReq. */
    class Net_ZJH_GenZhuReq implements INet_ZJH_GenZhuReq {

        /**
         * Constructs a new Net_ZJH_GenZhuReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_GenZhuReq);

        /**
         * Creates a new Net_ZJH_GenZhuReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_GenZhuReq instance
         */
        public static create(properties?: pb.INet_ZJH_GenZhuReq): pb.Net_ZJH_GenZhuReq;

        /**
         * Encodes the specified Net_ZJH_GenZhuReq message. Does not implicitly {@link pb.Net_ZJH_GenZhuReq.verify|verify} messages.
         * @param message Net_ZJH_GenZhuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_GenZhuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_GenZhuReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_GenZhuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_GenZhuReq;

        /**
         * Gets the default type url for Net_ZJH_GenZhuReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_GenZhuRet. */
    interface INet_ZJH_GenZhuRet {

        /** Net_ZJH_GenZhuRet Ret */
        Ret?: (number|null);

        /** Net_ZJH_GenZhuRet UserId */
        UserId?: (string|null);

        /** Net_ZJH_GenZhuRet BettingNum */
        BettingNum?: (number|null);

        /** Net_ZJH_GenZhuRet OwnTotalBettingNum */
        OwnTotalBettingNum?: (number|null);

        /** Net_ZJH_GenZhuRet RoomTotalBettingNum */
        RoomTotalBettingNum?: (number|null);
    }

    /** Represents a Net_ZJH_GenZhuRet. */
    class Net_ZJH_GenZhuRet implements INet_ZJH_GenZhuRet {

        /**
         * Constructs a new Net_ZJH_GenZhuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_GenZhuRet);

        /** Net_ZJH_GenZhuRet Ret. */
        public Ret: number;

        /** Net_ZJH_GenZhuRet UserId. */
        public UserId: string;

        /** Net_ZJH_GenZhuRet BettingNum. */
        public BettingNum: number;

        /** Net_ZJH_GenZhuRet OwnTotalBettingNum. */
        public OwnTotalBettingNum: number;

        /** Net_ZJH_GenZhuRet RoomTotalBettingNum. */
        public RoomTotalBettingNum: number;

        /**
         * Creates a new Net_ZJH_GenZhuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_GenZhuRet instance
         */
        public static create(properties?: pb.INet_ZJH_GenZhuRet): pb.Net_ZJH_GenZhuRet;

        /**
         * Encodes the specified Net_ZJH_GenZhuRet message. Does not implicitly {@link pb.Net_ZJH_GenZhuRet.verify|verify} messages.
         * @param message Net_ZJH_GenZhuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_GenZhuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_GenZhuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_GenZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_GenZhuRet;

        /**
         * Gets the default type url for Net_ZJH_GenZhuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Net_ZJH_OfflineRet. */
    interface INet_ZJH_OfflineRet {

        /** Net_ZJH_OfflineRet TargetUserId */
        TargetUserId?: (string|null);

        /** Net_ZJH_OfflineRet TargetIsIsOffline */
        TargetIsIsOffline?: (boolean|null);
    }

    /** Represents a Net_ZJH_OfflineRet. */
    class Net_ZJH_OfflineRet implements INet_ZJH_OfflineRet {

        /**
         * Constructs a new Net_ZJH_OfflineRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INet_ZJH_OfflineRet);

        /** Net_ZJH_OfflineRet TargetUserId. */
        public TargetUserId: string;

        /** Net_ZJH_OfflineRet TargetIsIsOffline. */
        public TargetIsIsOffline: boolean;

        /**
         * Creates a new Net_ZJH_OfflineRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Net_ZJH_OfflineRet instance
         */
        public static create(properties?: pb.INet_ZJH_OfflineRet): pb.Net_ZJH_OfflineRet;

        /**
         * Encodes the specified Net_ZJH_OfflineRet message. Does not implicitly {@link pb.Net_ZJH_OfflineRet.verify|verify} messages.
         * @param message Net_ZJH_OfflineRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INet_ZJH_OfflineRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Net_ZJH_OfflineRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Net_ZJH_OfflineRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Net_ZJH_OfflineRet;

        /**
         * Gets the default type url for Net_ZJH_OfflineRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlaceHolder3333. */
    interface IPlaceHolder3333 {

        /** PlaceHolder3333 dec */
        dec?: (string|null);

        /** PlaceHolder3333 account */
        account?: (string|null);

        /** PlaceHolder3333 flag */
        flag?: (boolean|null);

        /** PlaceHolder3333 funID */
        funID?: (number|null);

        /** PlaceHolder3333 cards */
        cards?: (number[]|null);
    }

    /** Represents a PlaceHolder3333. */
    class PlaceHolder3333 implements IPlaceHolder3333 {

        /**
         * Constructs a new PlaceHolder3333.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlaceHolder3333);

        /** PlaceHolder3333 dec. */
        public dec: string;

        /** PlaceHolder3333 account. */
        public account: string;

        /** PlaceHolder3333 flag. */
        public flag: boolean;

        /** PlaceHolder3333 funID. */
        public funID: number;

        /** PlaceHolder3333 cards. */
        public cards: number[];

        /**
         * Creates a new PlaceHolder3333 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlaceHolder3333 instance
         */
        public static create(properties?: pb.IPlaceHolder3333): pb.PlaceHolder3333;

        /**
         * Encodes the specified PlaceHolder3333 message. Does not implicitly {@link pb.PlaceHolder3333.verify|verify} messages.
         * @param message PlaceHolder3333 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlaceHolder3333, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlaceHolder3333 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlaceHolder3333
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlaceHolder3333;

        /**
         * Gets the default type url for PlaceHolder3333
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AvatarInfo. */
    interface IAvatarInfo {

        /** AvatarInfo name */
        name?: (string|null);

        /** AvatarInfo account */
        account?: (string|null);

        /** AvatarInfo money */
        money?: (number|null);

        /** AvatarInfo team_id */
        team_id?: (number|null);

        /** AvatarInfo cards */
        cards?: (number[]|null);
    }

    /** Represents an AvatarInfo. */
    class AvatarInfo implements IAvatarInfo {

        /**
         * Constructs a new AvatarInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAvatarInfo);

        /** AvatarInfo name. */
        public name: string;

        /** AvatarInfo account. */
        public account: string;

        /** AvatarInfo money. */
        public money: number;

        /** AvatarInfo team_id. */
        public team_id: number;

        /** AvatarInfo cards. */
        public cards: number[];

        /**
         * Creates a new AvatarInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AvatarInfo instance
         */
        public static create(properties?: pb.IAvatarInfo): pb.AvatarInfo;

        /**
         * Encodes the specified AvatarInfo message. Does not implicitly {@link pb.AvatarInfo.verify|verify} messages.
         * @param message AvatarInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAvatarInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvatarInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AvatarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AvatarInfo;

        /**
         * Gets the default type url for AvatarInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MatchingSuccess. */
    interface IMatchingSuccess {

        /** MatchingSuccess AvatarInfos */
        AvatarInfos?: ({ [k: string]: pb.IAvatarInfo }|null);
    }

    /** Represents a MatchingSuccess. */
    class MatchingSuccess implements IMatchingSuccess {

        /**
         * Constructs a new MatchingSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchingSuccess);

        /** MatchingSuccess AvatarInfos. */
        public AvatarInfos: { [k: string]: pb.IAvatarInfo };

        /**
         * Creates a new MatchingSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchingSuccess instance
         */
        public static create(properties?: pb.IMatchingSuccess): pb.MatchingSuccess;

        /**
         * Encodes the specified MatchingSuccess message. Does not implicitly {@link pb.MatchingSuccess.verify|verify} messages.
         * @param message MatchingSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchingSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchingSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchingSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchingSuccess;

        /**
         * Gets the default type url for MatchingSuccess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayedCardInfo. */
    interface IPlayedCardInfo {

        /** PlayedCardInfo team_id */
        team_id?: (number|null);

        /** PlayedCardInfo account */
        account?: (string|null);

        /** PlayedCardInfo card_value */
        card_value?: (number|null);

        /** PlayedCardInfo out_card_value */
        out_card_value?: (number|null);

        /** PlayedCardInfo cards_left_num */
        cards_left_num?: (number|null);

        /** PlayedCardInfo AvatarInfos */
        AvatarInfos?: ({ [k: string]: pb.IAvatarInfo }|null);
    }

    /** Represents a PlayedCardInfo. */
    class PlayedCardInfo implements IPlayedCardInfo {

        /**
         * Constructs a new PlayedCardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayedCardInfo);

        /** PlayedCardInfo team_id. */
        public team_id: number;

        /** PlayedCardInfo account. */
        public account: string;

        /** PlayedCardInfo card_value. */
        public card_value: number;

        /** PlayedCardInfo out_card_value. */
        public out_card_value: number;

        /** PlayedCardInfo cards_left_num. */
        public cards_left_num: number;

        /** PlayedCardInfo AvatarInfos. */
        public AvatarInfos: { [k: string]: pb.IAvatarInfo };

        /**
         * Creates a new PlayedCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayedCardInfo instance
         */
        public static create(properties?: pb.IPlayedCardInfo): pb.PlayedCardInfo;

        /**
         * Encodes the specified PlayedCardInfo message. Does not implicitly {@link pb.PlayedCardInfo.verify|verify} messages.
         * @param message PlayedCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayedCardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayedCardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayedCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayedCardInfo;

        /**
         * Gets the default type url for PlayedCardInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
