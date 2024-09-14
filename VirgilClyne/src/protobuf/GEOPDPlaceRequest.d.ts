// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,keep_enum_prefix,output_javascript
// @generated from protobuf file "GEOPDPlaceRequest.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message PDPlaceRequest
 */
export interface PDPlaceRequest {
    /**
     * PDAnalyticMetadata analyticMetadata = 1;
     *
     * @generated from protobuf field: PDClientMetadata clientMetadata = 2;
     */
    clientMetadata?: PDClientMetadata;
    /**
     * @generated from protobuf field: repeated string displayLanguage = 3;
     */
    displayLanguage: string[];
    /**
     * @generated from protobuf field: repeated string spokenLanguage = 4;
     */
    spokenLanguage: string[];
    /**
     * repeated PDComponentInfo requestedComponent = 5;
     *
     * @generated from protobuf field: optional int32 suppressResultsRequiringAttribution = 6;
     */
    suppressResultsRequiringAttribution?: number;
    /**
     * @generated from protobuf field: PDPlaceRequest.RequestType requestType = 7;
     */
    requestType: PDPlaceRequest_RequestType;
    /**
     * PDPlaceRequestParameters placeRequestParameters = 8;
     *
     * @generated from protobuf field: string displayRegion = 9;
     */
    displayRegion: string;
}
/**
 * @generated from protobuf enum PDPlaceRequest.RequestType
 */
export declare enum PDPlaceRequest_RequestType {
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_UNKNOWN = 0;
     */
    REQUEST_TYPE_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_SEARCH = 1;
     */
    REQUEST_TYPE_SEARCH = 1,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_GEOCODING = 2;
     */
    REQUEST_TYPE_GEOCODING = 2,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_CANONICAL_LOCATION_SEARCH = 3;
     */
    REQUEST_TYPE_CANONICAL_LOCATION_SEARCH = 3,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_REVERSE_GEOCODING = 4;
     */
    REQUEST_TYPE_REVERSE_GEOCODING = 4,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_PLACE_LOOKUP = 5;
     */
    REQUEST_TYPE_PLACE_LOOKUP = 5,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_MERCHANT_LOOKUP = 6;
     */
    REQUEST_TYPE_MERCHANT_LOOKUP = 6,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_PLACE_REFINEMENT = 7;
     */
    REQUEST_TYPE_PLACE_REFINEMENT = 7,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_SIRI_SEARCH = 8;
     */
    REQUEST_TYPE_SIRI_SEARCH = 8,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_LOCATION_DIRECTED_SEARCH = 9;
     */
    REQUEST_TYPE_LOCATION_DIRECTED_SEARCH = 9,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_AUTOCOMPLETE = 10;
     */
    REQUEST_TYPE_AUTOCOMPLETE = 10,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BROWSE_CATEGORY_SUGGESTION = 11;
     */
    REQUEST_TYPE_BROWSE_CATEGORY_SUGGESTION = 11,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_CATEGORY_SEARCH = 12;
     */
    REQUEST_TYPE_CATEGORY_SEARCH = 12,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_POPULAR_NEARBY_SEARCH = 13;
     */
    REQUEST_TYPE_POPULAR_NEARBY_SEARCH = 13,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_ZERO_KEYWORD_CATEGORY_SUGGESTION = 14;
     */
    REQUEST_TYPE_ZERO_KEYWORD_CATEGORY_SUGGESTION = 14,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_SEARCH_FIELD_PLACEHOLDER = 15;
     */
    REQUEST_TYPE_SEARCH_FIELD_PLACEHOLDER = 15,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BATCH_POPULAR_NEARBY_SEARCH = 16;
     */
    REQUEST_TYPE_BATCH_POPULAR_NEARBY_SEARCH = 16,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_VENDOR_SPECIFIC_PLACE_REFINEMENT = 17;
     */
    REQUEST_TYPE_VENDOR_SPECIFIC_PLACE_REFINEMENT = 17,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_NEARBY_SEARCH = 18;
     */
    REQUEST_TYPE_NEARBY_SEARCH = 18,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_ADDRESS_OBJECT_GEOCODING = 19;
     */
    REQUEST_TYPE_ADDRESS_OBJECT_GEOCODING = 19,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_ZERO_KEYWORD_WITH_SEARCH_RESULTS_SUGGESTION = 20;
     */
    REQUEST_TYPE_ZERO_KEYWORD_WITH_SEARCH_RESULTS_SUGGESTION = 20,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_EXTERNAL_TRANSIT_LOOKUP = 21;
     */
    REQUEST_TYPE_EXTERNAL_TRANSIT_LOOKUP = 21,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_FEATURE_ID_GEOCODING = 22;
     */
    REQUEST_TYPE_FEATURE_ID_GEOCODING = 22,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_MAPS_IDENTIFIER_PLACE_LOOKUP = 23;
     */
    REQUEST_TYPE_MAPS_IDENTIFIER_PLACE_LOOKUP = 23,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_DATASET_STATUS_CHECK = 24;
     */
    REQUEST_TYPE_DATASET_STATUS_CHECK = 24,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_OFFLINE_AREA_LOOKUP = 25;
     */
    REQUEST_TYPE_OFFLINE_AREA_LOOKUP = 25,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_CLUSTER_GEOCODING = 26;
     */
    REQUEST_TYPE_CLUSTER_GEOCODING = 26,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_OFFLINE_SUGGESTED_REGIONS = 27;
     */
    REQUEST_TYPE_OFFLINE_SUGGESTED_REGIONS = 27,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_OFFLINE_POLYGON_QUAD_NODES = 28;
     */
    REQUEST_TYPE_OFFLINE_POLYGON_QUAD_NODES = 28,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_OFFLINE_PROACTIVE_REGIONS = 29;
     */
    REQUEST_TYPE_OFFLINE_PROACTIVE_REGIONS = 29,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BRAND_LOOKUP = 30;
     */
    REQUEST_TYPE_BRAND_LOOKUP = 30,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_OFFLINE_UPDATE_MANIFEST = 31;
     */
    REQUEST_TYPE_OFFLINE_UPDATE_MANIFEST = 31,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_WIFI_FINGERPRINT_LOOKUP = 32;
     */
    REQUEST_TYPE_WIFI_FINGERPRINT_LOOKUP = 32,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_INITIAL_OFFLINE_SUGGESTION = 33;
     */
    REQUEST_TYPE_INITIAL_OFFLINE_SUGGESTION = 33,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_IP_GEO_LOOKUP = 34;
     */
    REQUEST_TYPE_IP_GEO_LOOKUP = 34,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_GROUND_VIEW_LABEL = 35;
     */
    REQUEST_TYPE_GROUND_VIEW_LABEL = 35,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BATCH_SPATIAL_LOOKUP = 36;
     */
    REQUEST_TYPE_BATCH_SPATIAL_LOOKUP = 36,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_TRANSIT_VEHICLE_POSITION = 37;
     */
    REQUEST_TYPE_TRANSIT_VEHICLE_POSITION = 37,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_PLACE_COLLECTION_LOOKUP = 38;
     */
    REQUEST_TYPE_PLACE_COLLECTION_LOOKUP = 38,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_TRANSIT_SCHEDULE_LOOKUP = 39;
     */
    REQUEST_TYPE_TRANSIT_SCHEDULE_LOOKUP = 39,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BATCH_CATEGORY_LOOKUP = 40;
     */
    REQUEST_TYPE_BATCH_CATEGORY_LOOKUP = 40,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_BATCH_MERCHANT_LOOKUP_BRAND = 41;
     */
    REQUEST_TYPE_BATCH_MERCHANT_LOOKUP_BRAND = 41,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_CHILD_PLACE_LOOKUP_BY_CATEGORY = 42;
     */
    REQUEST_TYPE_CHILD_PLACE_LOOKUP_BY_CATEGORY = 42,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_COLLECTION_SUGGESTION = 43;
     */
    REQUEST_TYPE_COLLECTION_SUGGESTION = 43,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_MAPS_SEARCH_HOME = 44;
     */
    REQUEST_TYPE_MAPS_SEARCH_HOME = 44,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_PLACE_QUESTIONNAIRE_LOOKUP = 45;
     */
    REQUEST_TYPE_PLACE_QUESTIONNAIRE_LOOKUP = 45,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_PUBLISHER_VIEW = 46;
     */
    REQUEST_TYPE_PUBLISHER_VIEW = 46,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_ALL_COLLECTIONS_VIEW = 47;
     */
    REQUEST_TYPE_ALL_COLLECTIONS_VIEW = 47,
    /**
     * @generated from protobuf enum value: REQUEST_TYPE_AIRPORT_ENTITY_PLACE_LOOKUP = 48;
     */
    REQUEST_TYPE_AIRPORT_ENTITY_PLACE_LOOKUP = 48,
    /**
     * @generated from protobuf enum value: UNKNOWN49 = 49;
     */
    UNKNOWN49 = 49,
    /**
     * @generated from protobuf enum value: UNKNOWN50 = 50;
     */
    UNKNOWN50 = 50,
    /**
     * @generated from protobuf enum value: UNKNOWN51 = 51;
     */
    UNKNOWN51 = 51,
    /**
     * @generated from protobuf enum value: UNKNOWN52 = 52;
     */
    UNKNOWN52 = 52,
    /**
     * @generated from protobuf enum value: UNKNOWN53 = 53;
     */
    UNKNOWN53 = 53,
    /**
     * @generated from protobuf enum value: UNKNOWN54 = 54;
     */
    UNKNOWN54 = 54,
    /**
     * @generated from protobuf enum value: UNKNOWN55 = 55;
     */
    UNKNOWN55 = 55,
    /**
     * @generated from protobuf enum value: UNKNOWN56 = 56;
     */
    UNKNOWN56 = 56,
    /**
     * @generated from protobuf enum value: UNKNOWN57 = 57;
     */
    UNKNOWN57 = 57,
    /**
     * @generated from protobuf enum value: UNKNOWN58 = 58;
     */
    UNKNOWN58 = 58,
    /**
     * @generated from protobuf enum value: UNKNOWN59 = 59;
     */
    UNKNOWN59 = 59,
    /**
     * @generated from protobuf enum value: UNKNOWN60 = 60;
     */
    UNKNOWN60 = 60,
    /**
     * @generated from protobuf enum value: UNKNOWN61 = 61;
     */
    UNKNOWN61 = 61,
    /**
     * @generated from protobuf enum value: UNKNOWN62 = 62;
     */
    UNKNOWN62 = 62,
    /**
     * @generated from protobuf enum value: UNKNOWN63 = 63;
     */
    UNKNOWN63 = 63,
    /**
     * @generated from protobuf enum value: UNKNOWN64 = 64;
     */
    UNKNOWN64 = 64,
    /**
     * @generated from protobuf enum value: UNKNOWN65 = 65;
     */
    UNKNOWN65 = 65,
    /**
     * @generated from protobuf enum value: UNKNOWN66 = 66;
     */
    UNKNOWN66 = 66,
    /**
     * @generated from protobuf enum value: UNKNOWN67 = 67;
     */
    UNKNOWN67 = 67,
    /**
     * @generated from protobuf enum value: UNKNOWN68 = 68;
     */
    UNKNOWN68 = 68,
    /**
     * @generated from protobuf enum value: UNKNOWN69 = 69;
     */
    UNKNOWN69 = 69,
    /**
     * @generated from protobuf enum value: UNKNOWN70 = 70;
     */
    UNKNOWN70 = 70
}
/**
 * @generated from protobuf message PDAnalyticMetadata
 */
export interface PDAnalyticMetadata {
    /**
     * @generated from protobuf field: string appIdentifier = 1;
     */
    appIdentifier: string;
    /**
     * @generated from protobuf field: string appMajorVersion = 2;
     */
    appMajorVersion: string;
    /**
     * @generated from protobuf field: string appMinorVersion = 3;
     */
    appMinorVersion: string;
    /**
     * @generated from protobuf field: string hardwareModel = 4;
     */
    hardwareModel: string;
    /**
     * @generated from protobuf field: string osVersion = 5;
     */
    osVersion: string;
    /**
     * @generated from protobuf field: optional int32 isInternalTool = 6;
     */
    isInternalTool?: number;
    /**
     * @generated from protobuf field: int32 isInternalInstall = 7;
     */
    isInternalInstall: number;
    /**
     * SessionID sessionId = 8;
     *
     * @generated from protobuf field: optional uint32 sequenceNumber = 9;
     */
    sequenceNumber?: number;
    /**
     * @generated from protobuf field: optional int32 requestSource = 10;
     */
    requestSource?: number;
    /**
     * @generated from protobuf field: int32 isFromApi = 12;
     */
    isFromApi: number;
    /**
     * @generated from protobuf field: repeated GeoServiceTag serviceTag = 13;
     */
    serviceTag: GeoServiceTag[];
    /**
     * @generated from protobuf field: string productName = 14;
     */
    productName: string;
    /**
     * @generated from protobuf field: optional string loggedAbExperiment = 15;
     */
    loggedAbExperiment?: string;
    /**
     * AbAssignInfo abAssignInfo = 0x10;
     * LocalTime requestTime = 0x11;
     *
     * @generated from protobuf field: optional double relativeTimestamp = 18;
     */
    relativeTimestamp?: number;
    /**
     * @generated from protobuf field: optional int32 isSiriOriginalRequest = 19;
     */
    isSiriOriginalRequest?: number;
}
/**
 *
 * message SessionID {
 * uint64 high = 1;
 * uint64 low = 2;
 * }
 *
 * @generated from protobuf message GeoServiceTag
 */
export interface GeoServiceTag {
    /**
     * @generated from protobuf field: GeoServiceTag.ServiceType serviceType = 1;
     */
    serviceType: GeoServiceTag_ServiceType;
    /**
     * @generated from protobuf field: string tag = 2;
     */
    tag: string;
}
/**
 * @generated from protobuf enum GeoServiceTag.ServiceType
 */
export declare enum GeoServiceTag_ServiceType {
    /**
     * @generated from protobuf enum value: SERVICE_UNKNOWN = 0;
     */
    SERVICE_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: REV_GEO = 1;
     */
    REV_GEO = 1,
    /**
     * @generated from protobuf enum value: FWD_GEO = 2;
     */
    FWD_GEO = 2,
    /**
     * @generated from protobuf enum value: SEARCH = 3;
     */
    SEARCH = 3,
    /**
     * @generated from protobuf enum value: ROUTING = 4;
     */
    ROUTING = 4,
    /**
     * @generated from protobuf enum value: LOCATION_SERVICE = 5;
     */
    LOCATION_SERVICE = 5,
    /**
     * @generated from protobuf enum value: COLLECTION = 6;
     */
    COLLECTION = 6,
    /**
     * @generated from protobuf enum value: CELL_WIFI_HARVEST = 7;
     */
    CELL_WIFI_HARVEST = 7,
    /**
     * @generated from protobuf enum value: TRACE_HARVEST = 8;
     */
    TRACE_HARVEST = 8,
    /**
     * @generated from protobuf enum value: TRAFFIC_TILES = 9;
     */
    TRAFFIC_TILES = 9,
    /**
     * @generated from protobuf enum value: RASTER = 10;
     */
    RASTER = 10,
    /**
     * @generated from protobuf enum value: AUTO_COMPLETE = 11;
     */
    AUTO_COMPLETE = 11,
    /**
     * @generated from protobuf enum value: DASHBOARD_TEST = 12;
     */
    DASHBOARD_TEST = 12,
    /**
     * @generated from protobuf enum value: VECTOR = 13;
     */
    VECTOR = 13,
    /**
     * @generated from protobuf enum value: ADDR_PTS_HARVEST = 14;
     */
    ADDR_PTS_HARVEST = 14,
    /**
     * @generated from protobuf enum value: DISPATCHER = 15;
     */
    DISPATCHER = 15,
    /**
     * @generated from protobuf enum value: PLACE_LOOKUP = 16;
     */
    PLACE_LOOKUP = 16,
    /**
     * @generated from protobuf enum value: PARSEC = 17;
     */
    PARSEC = 17,
    /**
     * @generated from protobuf enum value: GEO_SERVICES_FRAMEWORK = 18;
     */
    GEO_SERVICES_FRAMEWORK = 18,
    /**
     * @generated from protobuf enum value: SIRI = 19;
     */
    SIRI = 19,
    /**
     * @generated from protobuf enum value: MERCHANT_LOOKUP = 20;
     */
    MERCHANT_LOOKUP = 20,
    /**
     * @generated from protobuf enum value: GEO_SEARCH = 21;
     */
    GEO_SEARCH = 21,
    /**
     * @generated from protobuf enum value: TRAFFIC_ETA = 22;
     */
    TRAFFIC_ETA = 22,
    /**
     * @generated from protobuf enum value: COMMUNITY = 23;
     */
    COMMUNITY = 23,
    /**
     * @generated from protobuf enum value: LOCUS = 24;
     */
    LOCUS = 24,
    /**
     * @generated from protobuf enum value: AUTONAVI_FRONTDOOR = 25;
     */
    AUTONAVI_FRONTDOOR = 25,
    /**
     * @generated from protobuf enum value: UNKNOWN26 = 26;
     */
    UNKNOWN26 = 26,
    /**
     * @generated from protobuf enum value: UNKNOWN27 = 27;
     */
    UNKNOWN27 = 27,
    /**
     * @generated from protobuf enum value: UNKNOWN28 = 28;
     */
    UNKNOWN28 = 28,
    /**
     * @generated from protobuf enum value: UNKNOWN29 = 29;
     */
    UNKNOWN29 = 29,
    /**
     * @generated from protobuf enum value: UNKNOWN30 = 30;
     */
    UNKNOWN30 = 30,
    /**
     * @generated from protobuf enum value: UNKNOWN31 = 31;
     */
    UNKNOWN31 = 31,
    /**
     * @generated from protobuf enum value: UNKNOWN32 = 32;
     */
    UNKNOWN32 = 32,
    /**
     * @generated from protobuf enum value: UNKNOWN33 = 33;
     */
    UNKNOWN33 = 33,
    /**
     * @generated from protobuf enum value: UNKNOWN34 = 34;
     */
    UNKNOWN34 = 34,
    /**
     * @generated from protobuf enum value: UNKNOWN35 = 35;
     */
    UNKNOWN35 = 35,
    /**
     * @generated from protobuf enum value: UNKNOWN36 = 36;
     */
    UNKNOWN36 = 36,
    /**
     * @generated from protobuf enum value: UNKNOWN37 = 37;
     */
    UNKNOWN37 = 37,
    /**
     * @generated from protobuf enum value: UNKNOWN38 = 38;
     */
    UNKNOWN38 = 38,
    /**
     * @generated from protobuf enum value: UNKNOWN39 = 39;
     */
    UNKNOWN39 = 39,
    /**
     * @generated from protobuf enum value: UNKNOWN40 = 40;
     */
    UNKNOWN40 = 40,
    /**
     * @generated from protobuf enum value: UNKNOWN41 = 41;
     */
    UNKNOWN41 = 41,
    /**
     * @generated from protobuf enum value: UNKNOWN42 = 42;
     */
    UNKNOWN42 = 42,
    /**
     * @generated from protobuf enum value: UNKNOWN43 = 43;
     */
    UNKNOWN43 = 43,
    /**
     * @generated from protobuf enum value: UNKNOWN44 = 44;
     */
    UNKNOWN44 = 44,
    /**
     * @generated from protobuf enum value: UNKNOWN45 = 45;
     */
    UNKNOWN45 = 45,
    /**
     * @generated from protobuf enum value: UNKNOWN46 = 46;
     */
    UNKNOWN46 = 46,
    /**
     * @generated from protobuf enum value: UNKNOWN47 = 47;
     */
    UNKNOWN47 = 47,
    /**
     * @generated from protobuf enum value: UNKNOWN48 = 48;
     */
    UNKNOWN48 = 48,
    /**
     * @generated from protobuf enum value: UNKNOWN49 = 49;
     */
    UNKNOWN49 = 49,
    /**
     * @generated from protobuf enum value: UNKNOWN50 = 50;
     */
    UNKNOWN50 = 50
}
/**
 * @generated from protobuf message PDClientMetadata
 */
export interface PDClientMetadata {
    /**
     * @generated from protobuf field: string deviceCountryCode = 1;
     */
    deviceCountryCode: string;
    /**
     * @generated from protobuf field: string deviceDisplayLanguage = 3;
     */
    deviceDisplayLanguage: string;
    /**
     * @generated from protobuf field: optional string deviceKeyboardLanguage = 4;
     */
    deviceKeyboardLanguage?: string;
    /**
     * @generated from protobuf field: optional string deviceSpokenLanguage = 5;
     */
    deviceSpokenLanguage?: string;
    /**
     * @generated from protobuf field: optional uint32 timeSinceMapEnteredForeground = 8;
     */
    timeSinceMapEnteredForeground?: number;
    /**
     * AdditionalEnabledMarkets additionalEnabledMarkets = 9;
     *
     * @generated from protobuf field: int32 resultListAttributionSupport = 10;
     */
    resultListAttributionSupport: number;
    /**
     * @generated from protobuf field: optional uint32 hourOfDay = 11;
     */
    hourOfDay?: number;
    /**
     * @generated from protobuf field: uint32 dayOfWeek = 12;
     */
    dayOfWeek: number;
    /**
     * Location deviceExtendedLocation = 13;
     * repeated Location deviceHistoricalLocation = 15;
     *
     * @generated from protobuf field: int32 requiredVersion = 16;
     */
    requiredVersion: number;
    /**
     * @generated from protobuf field: optional string debugApiKey = 17;
     */
    debugApiKey?: string;
    /**
     * @deprecated
     * @generated from protobuf field: repeated int32 knownClientResolvedTypeDeprecated = 18 [deprecated = true];
     */
    knownClientResolvedTypeDeprecated: number[];
    /**
     * bool enablePreflightVenues = 19; // 有问题, 不能序列化这个值，可能是deprecated导致的。
     * repeated int32 knownClientResolvedType = 20;
     * repeated string businessChatPreflightIdentifier = 21;
     *
     * @generated from protobuf field: optional int32 clientRevision = 22;
     */
    clientRevision?: number;
    /**
     * LocalizationCapabilities localizationCapabilities = 23;
     *
     * @generated from protobuf field: optional string deviceSku = 24;
     */
    deviceSku?: string;
}
declare class PDPlaceRequest$Type extends MessageType<PDPlaceRequest> {
    constructor();
    create(value?: PartialMessage<PDPlaceRequest>): PDPlaceRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PDPlaceRequest): PDPlaceRequest;
    internalBinaryWrite(message: PDPlaceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PDPlaceRequest
 */
export declare const PDPlaceRequest: PDPlaceRequest$Type;
declare class PDAnalyticMetadata$Type extends MessageType<PDAnalyticMetadata> {
    constructor();
    create(value?: PartialMessage<PDAnalyticMetadata>): PDAnalyticMetadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PDAnalyticMetadata): PDAnalyticMetadata;
    internalBinaryWrite(message: PDAnalyticMetadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PDAnalyticMetadata
 */
export declare const PDAnalyticMetadata: PDAnalyticMetadata$Type;
declare class GeoServiceTag$Type extends MessageType<GeoServiceTag> {
    constructor();
    create(value?: PartialMessage<GeoServiceTag>): GeoServiceTag;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeoServiceTag): GeoServiceTag;
    internalBinaryWrite(message: GeoServiceTag, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message GeoServiceTag
 */
export declare const GeoServiceTag: GeoServiceTag$Type;
declare class PDClientMetadata$Type extends MessageType<PDClientMetadata> {
    constructor();
    create(value?: PartialMessage<PDClientMetadata>): PDClientMetadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PDClientMetadata): PDClientMetadata;
    internalBinaryWrite(message: PDClientMetadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message PDClientMetadata
 */
export declare const PDClientMetadata: PDClientMetadata$Type;
export {};
