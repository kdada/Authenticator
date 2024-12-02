/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import { index } from "@ohos/protobufjs"; const $protobuf = index;
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * EPublishedFileQueryType enum.
 * @exports EPublishedFileQueryType
 * @enum {number}
 * @property {number} k_PublishedFileQueryType_RankedByVote=0 k_PublishedFileQueryType_RankedByVote value
 * @property {number} k_PublishedFileQueryType_RankedByPublicationDate=1 k_PublishedFileQueryType_RankedByPublicationDate value
 * @property {number} k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate=2 k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate value
 * @property {number} k_PublishedFileQueryType_RankedByTrend=3 k_PublishedFileQueryType_RankedByTrend value
 * @property {number} k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate=4 k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate value
 * @property {number} k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate=5 k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate value
 * @property {number} k_PublishedFileQueryType_RankedByNumTimesReported=6 k_PublishedFileQueryType_RankedByNumTimesReported value
 * @property {number} k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate=7 k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate value
 * @property {number} k_PublishedFileQueryType_NotYetRated=8 k_PublishedFileQueryType_NotYetRated value
 * @property {number} k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions=9 k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions value
 * @property {number} k_PublishedFileQueryType_RankedByTotalVotesAsc=10 k_PublishedFileQueryType_RankedByTotalVotesAsc value
 * @property {number} k_PublishedFileQueryType_RankedByVotesUp=11 k_PublishedFileQueryType_RankedByVotesUp value
 * @property {number} k_PublishedFileQueryType_RankedByTextSearch=12 k_PublishedFileQueryType_RankedByTextSearch value
 * @property {number} k_PublishedFileQueryType_RankedByPlaytimeTrend=13 k_PublishedFileQueryType_RankedByPlaytimeTrend value
 * @property {number} k_PublishedFileQueryType_RankedByTotalPlaytime=14 k_PublishedFileQueryType_RankedByTotalPlaytime value
 * @property {number} k_PublishedFileQueryType_RankedByAveragePlaytimeTrend=15 k_PublishedFileQueryType_RankedByAveragePlaytimeTrend value
 * @property {number} k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime=16 k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime value
 * @property {number} k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend=17 k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend value
 * @property {number} k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions=18 k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions value
 * @property {number} k_PublishedFileQueryType_RankedByInappropriateContentRating=19 k_PublishedFileQueryType_RankedByInappropriateContentRating value
 * @property {number} k_PublishedFileQueryType_RankedByBanContentCheck=20 k_PublishedFileQueryType_RankedByBanContentCheck value
 * @property {number} k_PublishedFileQueryType_RankedByLastUpdatedDate=21 k_PublishedFileQueryType_RankedByLastUpdatedDate value
 */
export const EPublishedFileQueryType = $root.EPublishedFileQueryType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_PublishedFileQueryType_RankedByVote"] = 0;
    values[valuesById[1] = "k_PublishedFileQueryType_RankedByPublicationDate"] = 1;
    values[valuesById[2] = "k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate"] = 2;
    values[valuesById[3] = "k_PublishedFileQueryType_RankedByTrend"] = 3;
    values[valuesById[4] = "k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate"] = 4;
    values[valuesById[5] = "k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate"] = 5;
    values[valuesById[6] = "k_PublishedFileQueryType_RankedByNumTimesReported"] = 6;
    values[valuesById[7] = "k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate"] = 7;
    values[valuesById[8] = "k_PublishedFileQueryType_NotYetRated"] = 8;
    values[valuesById[9] = "k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions"] = 9;
    values[valuesById[10] = "k_PublishedFileQueryType_RankedByTotalVotesAsc"] = 10;
    values[valuesById[11] = "k_PublishedFileQueryType_RankedByVotesUp"] = 11;
    values[valuesById[12] = "k_PublishedFileQueryType_RankedByTextSearch"] = 12;
    values[valuesById[13] = "k_PublishedFileQueryType_RankedByPlaytimeTrend"] = 13;
    values[valuesById[14] = "k_PublishedFileQueryType_RankedByTotalPlaytime"] = 14;
    values[valuesById[15] = "k_PublishedFileQueryType_RankedByAveragePlaytimeTrend"] = 15;
    values[valuesById[16] = "k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime"] = 16;
    values[valuesById[17] = "k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend"] = 17;
    values[valuesById[18] = "k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions"] = 18;
    values[valuesById[19] = "k_PublishedFileQueryType_RankedByInappropriateContentRating"] = 19;
    values[valuesById[20] = "k_PublishedFileQueryType_RankedByBanContentCheck"] = 20;
    values[valuesById[21] = "k_PublishedFileQueryType_RankedByLastUpdatedDate"] = 21;
    return values;
})();

/**
 * EPublishedFileInappropriateProvider enum.
 * @exports EPublishedFileInappropriateProvider
 * @enum {number}
 * @property {number} k_EPublishedFileInappropriateProvider_Invalid=0 k_EPublishedFileInappropriateProvider_Invalid value
 * @property {number} k_EPublishedFileInappropriateProvider_Google=1 k_EPublishedFileInappropriateProvider_Google value
 * @property {number} k_EPublishedFileInappropriateProvider_Amazon=2 k_EPublishedFileInappropriateProvider_Amazon value
 */
export const EPublishedFileInappropriateProvider = $root.EPublishedFileInappropriateProvider = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EPublishedFileInappropriateProvider_Invalid"] = 0;
    values[valuesById[1] = "k_EPublishedFileInappropriateProvider_Google"] = 1;
    values[valuesById[2] = "k_EPublishedFileInappropriateProvider_Amazon"] = 2;
    return values;
})();

/**
 * EPublishedFileInappropriateResult enum.
 * @exports EPublishedFileInappropriateResult
 * @enum {number}
 * @property {number} k_EPublishedFileInappropriateResult_NotScanned=0 k_EPublishedFileInappropriateResult_NotScanned value
 * @property {number} k_EPublishedFileInappropriateResult_VeryUnlikely=1 k_EPublishedFileInappropriateResult_VeryUnlikely value
 * @property {number} k_EPublishedFileInappropriateResult_Unlikely=30 k_EPublishedFileInappropriateResult_Unlikely value
 * @property {number} k_EPublishedFileInappropriateResult_Possible=50 k_EPublishedFileInappropriateResult_Possible value
 * @property {number} k_EPublishedFileInappropriateResult_Likely=75 k_EPublishedFileInappropriateResult_Likely value
 * @property {number} k_EPublishedFileInappropriateResult_VeryLikely=100 k_EPublishedFileInappropriateResult_VeryLikely value
 */
export const EPublishedFileInappropriateResult = $root.EPublishedFileInappropriateResult = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EPublishedFileInappropriateResult_NotScanned"] = 0;
    values[valuesById[1] = "k_EPublishedFileInappropriateResult_VeryUnlikely"] = 1;
    values[valuesById[30] = "k_EPublishedFileInappropriateResult_Unlikely"] = 30;
    values[valuesById[50] = "k_EPublishedFileInappropriateResult_Possible"] = 50;
    values[valuesById[75] = "k_EPublishedFileInappropriateResult_Likely"] = 75;
    values[valuesById[100] = "k_EPublishedFileInappropriateResult_VeryLikely"] = 100;
    return values;
})();

/**
 * EPersonaStateFlag enum.
 * @exports EPersonaStateFlag
 * @enum {number}
 * @property {number} k_EPersonaStateFlag_HasRichPresence=1 k_EPersonaStateFlag_HasRichPresence value
 * @property {number} k_EPersonaStateFlag_InJoinableGame=2 k_EPersonaStateFlag_InJoinableGame value
 * @property {number} k_EPersonaStateFlag_Golden=4 k_EPersonaStateFlag_Golden value
 * @property {number} k_EPersonaStateFlag_RemotePlayTogether=8 k_EPersonaStateFlag_RemotePlayTogether value
 * @property {number} k_EPersonaStateFlag_ClientTypeWeb=256 k_EPersonaStateFlag_ClientTypeWeb value
 * @property {number} k_EPersonaStateFlag_ClientTypeMobile=512 k_EPersonaStateFlag_ClientTypeMobile value
 * @property {number} k_EPersonaStateFlag_ClientTypeTenfoot=1024 k_EPersonaStateFlag_ClientTypeTenfoot value
 * @property {number} k_EPersonaStateFlag_ClientTypeVR=2048 k_EPersonaStateFlag_ClientTypeVR value
 * @property {number} k_EPersonaStateFlag_LaunchTypeGamepad=4096 k_EPersonaStateFlag_LaunchTypeGamepad value
 * @property {number} k_EPersonaStateFlag_LaunchTypeCompatTool=8192 k_EPersonaStateFlag_LaunchTypeCompatTool value
 */
export const EPersonaStateFlag = $root.EPersonaStateFlag = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "k_EPersonaStateFlag_HasRichPresence"] = 1;
    values[valuesById[2] = "k_EPersonaStateFlag_InJoinableGame"] = 2;
    values[valuesById[4] = "k_EPersonaStateFlag_Golden"] = 4;
    values[valuesById[8] = "k_EPersonaStateFlag_RemotePlayTogether"] = 8;
    values[valuesById[256] = "k_EPersonaStateFlag_ClientTypeWeb"] = 256;
    values[valuesById[512] = "k_EPersonaStateFlag_ClientTypeMobile"] = 512;
    values[valuesById[1024] = "k_EPersonaStateFlag_ClientTypeTenfoot"] = 1024;
    values[valuesById[2048] = "k_EPersonaStateFlag_ClientTypeVR"] = 2048;
    values[valuesById[4096] = "k_EPersonaStateFlag_LaunchTypeGamepad"] = 4096;
    values[valuesById[8192] = "k_EPersonaStateFlag_LaunchTypeCompatTool"] = 8192;
    return values;
})();

/**
 * EContentCheckProvider enum.
 * @exports EContentCheckProvider
 * @enum {number}
 * @property {number} k_EContentCheckProvider_Invalid=0 k_EContentCheckProvider_Invalid value
 * @property {number} k_EContentCheckProvider_Google_DEPRECATED=1 k_EContentCheckProvider_Google_DEPRECATED value
 * @property {number} k_EContentCheckProvider_Amazon=2 k_EContentCheckProvider_Amazon value
 * @property {number} k_EContentCheckProvider_Local=3 k_EContentCheckProvider_Local value
 * @property {number} k_EContentCheckProvider_GoogleVertexAI=4 k_EContentCheckProvider_GoogleVertexAI value
 */
export const EContentCheckProvider = $root.EContentCheckProvider = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EContentCheckProvider_Invalid"] = 0;
    values[valuesById[1] = "k_EContentCheckProvider_Google_DEPRECATED"] = 1;
    values[valuesById[2] = "k_EContentCheckProvider_Amazon"] = 2;
    values[valuesById[3] = "k_EContentCheckProvider_Local"] = 3;
    values[valuesById[4] = "k_EContentCheckProvider_GoogleVertexAI"] = 4;
    return values;
})();

/**
 * EProfileCustomizationType enum.
 * @exports EProfileCustomizationType
 * @enum {number}
 * @property {number} k_EProfileCustomizationTypeInvalid=0 k_EProfileCustomizationTypeInvalid value
 * @property {number} k_EProfileCustomizationTypeRareAchievementShowcase=1 k_EProfileCustomizationTypeRareAchievementShowcase value
 * @property {number} k_EProfileCustomizationTypeGameCollector=2 k_EProfileCustomizationTypeGameCollector value
 * @property {number} k_EProfileCustomizationTypeItemShowcase=3 k_EProfileCustomizationTypeItemShowcase value
 * @property {number} k_EProfileCustomizationTypeTradeShowcase=4 k_EProfileCustomizationTypeTradeShowcase value
 * @property {number} k_EProfileCustomizationTypeBadges=5 k_EProfileCustomizationTypeBadges value
 * @property {number} k_EProfileCustomizationTypeFavoriteGame=6 k_EProfileCustomizationTypeFavoriteGame value
 * @property {number} k_EProfileCustomizationTypeScreenshotShowcase=7 k_EProfileCustomizationTypeScreenshotShowcase value
 * @property {number} k_EProfileCustomizationTypeCustomText=8 k_EProfileCustomizationTypeCustomText value
 * @property {number} k_EProfileCustomizationTypeFavoriteGroup=9 k_EProfileCustomizationTypeFavoriteGroup value
 * @property {number} k_EProfileCustomizationTypeRecommendation=10 k_EProfileCustomizationTypeRecommendation value
 * @property {number} k_EProfileCustomizationTypeWorkshopItem=11 k_EProfileCustomizationTypeWorkshopItem value
 * @property {number} k_EProfileCustomizationTypeMyWorkshop=12 k_EProfileCustomizationTypeMyWorkshop value
 * @property {number} k_EProfileCustomizationTypeArtworkShowcase=13 k_EProfileCustomizationTypeArtworkShowcase value
 * @property {number} k_EProfileCustomizationTypeVideoShowcase=14 k_EProfileCustomizationTypeVideoShowcase value
 * @property {number} k_EProfileCustomizationTypeGuides=15 k_EProfileCustomizationTypeGuides value
 * @property {number} k_EProfileCustomizationTypeMyGuides=16 k_EProfileCustomizationTypeMyGuides value
 * @property {number} k_EProfileCustomizationTypeAchievements=17 k_EProfileCustomizationTypeAchievements value
 * @property {number} k_EProfileCustomizationTypeGreenlight=18 k_EProfileCustomizationTypeGreenlight value
 * @property {number} k_EProfileCustomizationTypeMyGreenlight=19 k_EProfileCustomizationTypeMyGreenlight value
 * @property {number} k_EProfileCustomizationTypeSalien=20 k_EProfileCustomizationTypeSalien value
 * @property {number} k_EProfileCustomizationTypeLoyaltyRewardReactions=21 k_EProfileCustomizationTypeLoyaltyRewardReactions value
 * @property {number} k_EProfileCustomizationTypeSingleArtworkShowcase=22 k_EProfileCustomizationTypeSingleArtworkShowcase value
 * @property {number} k_EProfileCustomizationTypeAchievementsCompletionist=23 k_EProfileCustomizationTypeAchievementsCompletionist value
 * @property {number} k_EProfileCustomizationTypeReplay=24 k_EProfileCustomizationTypeReplay value
 */
export const EProfileCustomizationType = $root.EProfileCustomizationType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EProfileCustomizationTypeInvalid"] = 0;
    values[valuesById[1] = "k_EProfileCustomizationTypeRareAchievementShowcase"] = 1;
    values[valuesById[2] = "k_EProfileCustomizationTypeGameCollector"] = 2;
    values[valuesById[3] = "k_EProfileCustomizationTypeItemShowcase"] = 3;
    values[valuesById[4] = "k_EProfileCustomizationTypeTradeShowcase"] = 4;
    values[valuesById[5] = "k_EProfileCustomizationTypeBadges"] = 5;
    values[valuesById[6] = "k_EProfileCustomizationTypeFavoriteGame"] = 6;
    values[valuesById[7] = "k_EProfileCustomizationTypeScreenshotShowcase"] = 7;
    values[valuesById[8] = "k_EProfileCustomizationTypeCustomText"] = 8;
    values[valuesById[9] = "k_EProfileCustomizationTypeFavoriteGroup"] = 9;
    values[valuesById[10] = "k_EProfileCustomizationTypeRecommendation"] = 10;
    values[valuesById[11] = "k_EProfileCustomizationTypeWorkshopItem"] = 11;
    values[valuesById[12] = "k_EProfileCustomizationTypeMyWorkshop"] = 12;
    values[valuesById[13] = "k_EProfileCustomizationTypeArtworkShowcase"] = 13;
    values[valuesById[14] = "k_EProfileCustomizationTypeVideoShowcase"] = 14;
    values[valuesById[15] = "k_EProfileCustomizationTypeGuides"] = 15;
    values[valuesById[16] = "k_EProfileCustomizationTypeMyGuides"] = 16;
    values[valuesById[17] = "k_EProfileCustomizationTypeAchievements"] = 17;
    values[valuesById[18] = "k_EProfileCustomizationTypeGreenlight"] = 18;
    values[valuesById[19] = "k_EProfileCustomizationTypeMyGreenlight"] = 19;
    values[valuesById[20] = "k_EProfileCustomizationTypeSalien"] = 20;
    values[valuesById[21] = "k_EProfileCustomizationTypeLoyaltyRewardReactions"] = 21;
    values[valuesById[22] = "k_EProfileCustomizationTypeSingleArtworkShowcase"] = 22;
    values[valuesById[23] = "k_EProfileCustomizationTypeAchievementsCompletionist"] = 23;
    values[valuesById[24] = "k_EProfileCustomizationTypeReplay"] = 24;
    return values;
})();

/**
 * EPublishedFileStorageSystem enum.
 * @exports EPublishedFileStorageSystem
 * @enum {number}
 * @property {number} k_EPublishedFileStorageSystemInvalid=0 k_EPublishedFileStorageSystemInvalid value
 * @property {number} k_EPublishedFileStorageSystemLegacyCloud=1 k_EPublishedFileStorageSystemLegacyCloud value
 * @property {number} k_EPublishedFileStorageSystemDepot=2 k_EPublishedFileStorageSystemDepot value
 * @property {number} k_EPublishedFileStorageSystemUGCCloud=3 k_EPublishedFileStorageSystemUGCCloud value
 */
export const EPublishedFileStorageSystem = $root.EPublishedFileStorageSystem = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EPublishedFileStorageSystemInvalid"] = 0;
    values[valuesById[1] = "k_EPublishedFileStorageSystemLegacyCloud"] = 1;
    values[valuesById[2] = "k_EPublishedFileStorageSystemDepot"] = 2;
    values[valuesById[3] = "k_EPublishedFileStorageSystemUGCCloud"] = 3;
    return values;
})();

/**
 * ECloudStoragePersistState enum.
 * @exports ECloudStoragePersistState
 * @enum {number}
 * @property {number} k_ECloudStoragePersistStatePersisted=0 k_ECloudStoragePersistStatePersisted value
 * @property {number} k_ECloudStoragePersistStateForgotten=1 k_ECloudStoragePersistStateForgotten value
 * @property {number} k_ECloudStoragePersistStateDeleted=2 k_ECloudStoragePersistStateDeleted value
 */
export const ECloudStoragePersistState = $root.ECloudStoragePersistState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ECloudStoragePersistStatePersisted"] = 0;
    values[valuesById[1] = "k_ECloudStoragePersistStateForgotten"] = 1;
    values[valuesById[2] = "k_ECloudStoragePersistStateDeleted"] = 2;
    return values;
})();

/**
 * ESDCardFormatStage enum.
 * @exports ESDCardFormatStage
 * @enum {number}
 * @property {number} k_ESDCardFormatStage_Invalid=0 k_ESDCardFormatStage_Invalid value
 * @property {number} k_ESDCardFormatStage_Starting=1 k_ESDCardFormatStage_Starting value
 * @property {number} k_ESDCardFormatStage_Testing=2 k_ESDCardFormatStage_Testing value
 * @property {number} k_ESDCardFormatStage_Rescuing=3 k_ESDCardFormatStage_Rescuing value
 * @property {number} k_ESDCardFormatStage_Formatting=4 k_ESDCardFormatStage_Formatting value
 * @property {number} k_ESDCardFormatStage_Finalizing=5 k_ESDCardFormatStage_Finalizing value
 */
export const ESDCardFormatStage = $root.ESDCardFormatStage = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESDCardFormatStage_Invalid"] = 0;
    values[valuesById[1] = "k_ESDCardFormatStage_Starting"] = 1;
    values[valuesById[2] = "k_ESDCardFormatStage_Testing"] = 2;
    values[valuesById[3] = "k_ESDCardFormatStage_Rescuing"] = 3;
    values[valuesById[4] = "k_ESDCardFormatStage_Formatting"] = 4;
    values[valuesById[5] = "k_ESDCardFormatStage_Finalizing"] = 5;
    return values;
})();

/**
 * EStorageFormatStage enum.
 * @exports EStorageFormatStage
 * @enum {number}
 * @property {number} k_EStorageFormatStage_Invalid=0 k_EStorageFormatStage_Invalid value
 * @property {number} k_EStorageFormatStage_NotRunning=1 k_EStorageFormatStage_NotRunning value
 * @property {number} k_EStorageFormatStage_Starting=2 k_EStorageFormatStage_Starting value
 * @property {number} k_EStorageFormatStage_Testing=3 k_EStorageFormatStage_Testing value
 * @property {number} k_EStorageFormatStage_Rescuing=4 k_EStorageFormatStage_Rescuing value
 * @property {number} k_EStorageFormatStage_Formatting=5 k_EStorageFormatStage_Formatting value
 * @property {number} k_EStorageFormatStage_Finalizing=6 k_EStorageFormatStage_Finalizing value
 */
export const EStorageFormatStage = $root.EStorageFormatStage = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EStorageFormatStage_Invalid"] = 0;
    values[valuesById[1] = "k_EStorageFormatStage_NotRunning"] = 1;
    values[valuesById[2] = "k_EStorageFormatStage_Starting"] = 2;
    values[valuesById[3] = "k_EStorageFormatStage_Testing"] = 3;
    values[valuesById[4] = "k_EStorageFormatStage_Rescuing"] = 4;
    values[valuesById[5] = "k_EStorageFormatStage_Formatting"] = 5;
    values[valuesById[6] = "k_EStorageFormatStage_Finalizing"] = 6;
    return values;
})();

/**
 * ESystemFanControlMode enum.
 * @exports ESystemFanControlMode
 * @enum {number}
 * @property {number} k_SystemFanControlMode_Invalid=0 k_SystemFanControlMode_Invalid value
 * @property {number} k_SystemFanControlMode_Disabled=1 k_SystemFanControlMode_Disabled value
 * @property {number} k_SystemFanControlMode_Default=2 k_SystemFanControlMode_Default value
 */
export const ESystemFanControlMode = $root.ESystemFanControlMode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_SystemFanControlMode_Invalid"] = 0;
    values[valuesById[1] = "k_SystemFanControlMode_Disabled"] = 1;
    values[valuesById[2] = "k_SystemFanControlMode_Default"] = 2;
    return values;
})();

/**
 * EStartupMovieVariant enum.
 * @exports EStartupMovieVariant
 * @enum {number}
 * @property {number} k_EStartupMovieVariant_Invalid=0 k_EStartupMovieVariant_Invalid value
 * @property {number} k_EStartupMovieVariant_Default=1 k_EStartupMovieVariant_Default value
 * @property {number} k_EStartupMovieVariant_Orange=2 k_EStartupMovieVariant_Orange value
 */
export const EStartupMovieVariant = $root.EStartupMovieVariant = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EStartupMovieVariant_Invalid"] = 0;
    values[valuesById[1] = "k_EStartupMovieVariant_Default"] = 1;
    values[valuesById[2] = "k_EStartupMovieVariant_Orange"] = 2;
    return values;
})();

/**
 * EColorGamutLabelSet enum.
 * @exports EColorGamutLabelSet
 * @enum {number}
 * @property {number} k_ColorGamutLabelSet_Default=0 k_ColorGamutLabelSet_Default value
 * @property {number} k_ColorGamutLabelSet_sRGB_Native=1 k_ColorGamutLabelSet_sRGB_Native value
 * @property {number} k_ColorGamutLabelSet_Native_sRGB_Boosted=2 k_ColorGamutLabelSet_Native_sRGB_Boosted value
 */
export const EColorGamutLabelSet = $root.EColorGamutLabelSet = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ColorGamutLabelSet_Default"] = 0;
    values[valuesById[1] = "k_ColorGamutLabelSet_sRGB_Native"] = 1;
    values[valuesById[2] = "k_ColorGamutLabelSet_Native_sRGB_Boosted"] = 2;
    return values;
})();

/**
 * EBluetoothDeviceType enum.
 * @exports EBluetoothDeviceType
 * @enum {number}
 * @property {number} k_BluetoothDeviceType_Invalid=0 k_BluetoothDeviceType_Invalid value
 * @property {number} k_BluetoothDeviceType_Unknown=1 k_BluetoothDeviceType_Unknown value
 * @property {number} k_BluetoothDeviceType_Phone=2 k_BluetoothDeviceType_Phone value
 * @property {number} k_BluetoothDeviceType_Computer=3 k_BluetoothDeviceType_Computer value
 * @property {number} k_BluetoothDeviceType_Headset=4 k_BluetoothDeviceType_Headset value
 * @property {number} k_BluetoothDeviceType_Headphones=5 k_BluetoothDeviceType_Headphones value
 * @property {number} k_BluetoothDeviceType_Speakers=6 k_BluetoothDeviceType_Speakers value
 * @property {number} k_BluetoothDeviceType_OtherAudio=7 k_BluetoothDeviceType_OtherAudio value
 * @property {number} k_BluetoothDeviceType_Mouse=8 k_BluetoothDeviceType_Mouse value
 * @property {number} k_BluetoothDeviceType_Joystick=9 k_BluetoothDeviceType_Joystick value
 * @property {number} k_BluetoothDeviceType_Gamepad=10 k_BluetoothDeviceType_Gamepad value
 * @property {number} k_BluetoothDeviceType_Keyboard=11 k_BluetoothDeviceType_Keyboard value
 */
export const EBluetoothDeviceType = $root.EBluetoothDeviceType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_BluetoothDeviceType_Invalid"] = 0;
    values[valuesById[1] = "k_BluetoothDeviceType_Unknown"] = 1;
    values[valuesById[2] = "k_BluetoothDeviceType_Phone"] = 2;
    values[valuesById[3] = "k_BluetoothDeviceType_Computer"] = 3;
    values[valuesById[4] = "k_BluetoothDeviceType_Headset"] = 4;
    values[valuesById[5] = "k_BluetoothDeviceType_Headphones"] = 5;
    values[valuesById[6] = "k_BluetoothDeviceType_Speakers"] = 6;
    values[valuesById[7] = "k_BluetoothDeviceType_OtherAudio"] = 7;
    values[valuesById[8] = "k_BluetoothDeviceType_Mouse"] = 8;
    values[valuesById[9] = "k_BluetoothDeviceType_Joystick"] = 9;
    values[valuesById[10] = "k_BluetoothDeviceType_Gamepad"] = 10;
    values[valuesById[11] = "k_BluetoothDeviceType_Keyboard"] = 11;
    return values;
})();

/**
 * ESystemAudioDirection enum.
 * @exports ESystemAudioDirection
 * @enum {number}
 * @property {number} k_SystemAudioDirection_Invalid=0 k_SystemAudioDirection_Invalid value
 * @property {number} k_SystemAudioDirection_Input=1 k_SystemAudioDirection_Input value
 * @property {number} k_SystemAudioDirection_Output=2 k_SystemAudioDirection_Output value
 */
export const ESystemAudioDirection = $root.ESystemAudioDirection = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_SystemAudioDirection_Invalid"] = 0;
    values[valuesById[1] = "k_SystemAudioDirection_Input"] = 1;
    values[valuesById[2] = "k_SystemAudioDirection_Output"] = 2;
    return values;
})();

/**
 * ESystemAudioChannel enum.
 * @exports ESystemAudioChannel
 * @enum {number}
 * @property {number} k_SystemAudioChannel_Invalid=0 k_SystemAudioChannel_Invalid value
 * @property {number} k_SystemAudioChannel_Aggregated=1 k_SystemAudioChannel_Aggregated value
 * @property {number} k_SystemAudioChannel_FrontLeft=2 k_SystemAudioChannel_FrontLeft value
 * @property {number} k_SystemAudioChannel_FrontRight=3 k_SystemAudioChannel_FrontRight value
 * @property {number} k_SystemAudioChannel_LFE=4 k_SystemAudioChannel_LFE value
 * @property {number} k_SystemAudioChannel_BackLeft=5 k_SystemAudioChannel_BackLeft value
 * @property {number} k_SystemAudioChannel_BackRight=6 k_SystemAudioChannel_BackRight value
 * @property {number} k_SystemAudioChannel_FrontCenter=7 k_SystemAudioChannel_FrontCenter value
 * @property {number} k_SystemAudioChannel_Unknown=8 k_SystemAudioChannel_Unknown value
 * @property {number} k_SystemAudioChannel_Mono=9 k_SystemAudioChannel_Mono value
 */
export const ESystemAudioChannel = $root.ESystemAudioChannel = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_SystemAudioChannel_Invalid"] = 0;
    values[valuesById[1] = "k_SystemAudioChannel_Aggregated"] = 1;
    values[valuesById[2] = "k_SystemAudioChannel_FrontLeft"] = 2;
    values[valuesById[3] = "k_SystemAudioChannel_FrontRight"] = 3;
    values[valuesById[4] = "k_SystemAudioChannel_LFE"] = 4;
    values[valuesById[5] = "k_SystemAudioChannel_BackLeft"] = 5;
    values[valuesById[6] = "k_SystemAudioChannel_BackRight"] = 6;
    values[valuesById[7] = "k_SystemAudioChannel_FrontCenter"] = 7;
    values[valuesById[8] = "k_SystemAudioChannel_Unknown"] = 8;
    values[valuesById[9] = "k_SystemAudioChannel_Mono"] = 9;
    return values;
})();

/**
 * ESystemAudioPortType enum.
 * @exports ESystemAudioPortType
 * @enum {number}
 * @property {number} k_SystemAudioPortType_Invalid=0 k_SystemAudioPortType_Invalid value
 * @property {number} k_SystemAudioPortType_Unknown=1 k_SystemAudioPortType_Unknown value
 * @property {number} k_SystemAudioPortType_Audio32f=2 k_SystemAudioPortType_Audio32f value
 * @property {number} k_SystemAudioPortType_Midi8b=3 k_SystemAudioPortType_Midi8b value
 * @property {number} k_SystemAudioPortType_Video32RGBA=4 k_SystemAudioPortType_Video32RGBA value
 */
export const ESystemAudioPortType = $root.ESystemAudioPortType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_SystemAudioPortType_Invalid"] = 0;
    values[valuesById[1] = "k_SystemAudioPortType_Unknown"] = 1;
    values[valuesById[2] = "k_SystemAudioPortType_Audio32f"] = 2;
    values[valuesById[3] = "k_SystemAudioPortType_Midi8b"] = 3;
    values[valuesById[4] = "k_SystemAudioPortType_Video32RGBA"] = 4;
    return values;
})();

/**
 * ESystemAudioPortDirection enum.
 * @exports ESystemAudioPortDirection
 * @enum {number}
 * @property {number} k_SystemAudioPortDirection_Invalid=0 k_SystemAudioPortDirection_Invalid value
 * @property {number} k_SystemAudioPortDirection_Input=1 k_SystemAudioPortDirection_Input value
 * @property {number} k_SystemAudioPortDirection_Output=2 k_SystemAudioPortDirection_Output value
 */
export const ESystemAudioPortDirection = $root.ESystemAudioPortDirection = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_SystemAudioPortDirection_Invalid"] = 0;
    values[valuesById[1] = "k_SystemAudioPortDirection_Input"] = 1;
    values[valuesById[2] = "k_SystemAudioPortDirection_Output"] = 2;
    return values;
})();

/**
 * ESystemServiceState enum.
 * @exports ESystemServiceState
 * @enum {number}
 * @property {number} k_ESystemServiceState_Unavailable=0 k_ESystemServiceState_Unavailable value
 * @property {number} k_ESystemServiceState_Disabled=1 k_ESystemServiceState_Disabled value
 * @property {number} k_ESystemServiceState_Enabled=2 k_ESystemServiceState_Enabled value
 */
export const ESystemServiceState = $root.ESystemServiceState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESystemServiceState_Unavailable"] = 0;
    values[valuesById[1] = "k_ESystemServiceState_Disabled"] = 1;
    values[valuesById[2] = "k_ESystemServiceState_Enabled"] = 2;
    return values;
})();

/**
 * EGraphicsPerfOverlayLevel enum.
 * @exports EGraphicsPerfOverlayLevel
 * @enum {number}
 * @property {number} k_EGraphicsPerfOverlayLevel_Hidden=0 k_EGraphicsPerfOverlayLevel_Hidden value
 * @property {number} k_EGraphicsPerfOverlayLevel_Basic=1 k_EGraphicsPerfOverlayLevel_Basic value
 * @property {number} k_EGraphicsPerfOverlayLevel_Medium=2 k_EGraphicsPerfOverlayLevel_Medium value
 * @property {number} k_EGraphicsPerfOverlayLevel_Full=3 k_EGraphicsPerfOverlayLevel_Full value
 * @property {number} k_EGraphicsPerfOverlayLevel_Minimal=4 k_EGraphicsPerfOverlayLevel_Minimal value
 */
export const EGraphicsPerfOverlayLevel = $root.EGraphicsPerfOverlayLevel = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EGraphicsPerfOverlayLevel_Hidden"] = 0;
    values[valuesById[1] = "k_EGraphicsPerfOverlayLevel_Basic"] = 1;
    values[valuesById[2] = "k_EGraphicsPerfOverlayLevel_Medium"] = 2;
    values[valuesById[3] = "k_EGraphicsPerfOverlayLevel_Full"] = 3;
    values[valuesById[4] = "k_EGraphicsPerfOverlayLevel_Minimal"] = 4;
    return values;
})();

/**
 * EGPUPerformanceLevel enum.
 * @exports EGPUPerformanceLevel
 * @enum {number}
 * @property {number} k_EGPUPerformanceLevel_Invalid=0 k_EGPUPerformanceLevel_Invalid value
 * @property {number} k_EGPUPerformanceLevel_Auto=1 k_EGPUPerformanceLevel_Auto value
 * @property {number} k_EGPUPerformanceLevel_Manual=2 k_EGPUPerformanceLevel_Manual value
 * @property {number} k_EGPUPerformanceLevel_Low=3 k_EGPUPerformanceLevel_Low value
 * @property {number} k_EGPUPerformanceLevel_High=4 k_EGPUPerformanceLevel_High value
 * @property {number} k_EGPUPerformanceLevel_Profiling=5 k_EGPUPerformanceLevel_Profiling value
 */
export const EGPUPerformanceLevel = $root.EGPUPerformanceLevel = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EGPUPerformanceLevel_Invalid"] = 0;
    values[valuesById[1] = "k_EGPUPerformanceLevel_Auto"] = 1;
    values[valuesById[2] = "k_EGPUPerformanceLevel_Manual"] = 2;
    values[valuesById[3] = "k_EGPUPerformanceLevel_Low"] = 3;
    values[valuesById[4] = "k_EGPUPerformanceLevel_High"] = 4;
    values[valuesById[5] = "k_EGPUPerformanceLevel_Profiling"] = 5;
    return values;
})();

/**
 * EScalingFilter enum.
 * @exports EScalingFilter
 * @enum {number}
 * @property {number} k_EScalingFilter_Invalid=0 k_EScalingFilter_Invalid value
 * @property {number} k_EScalingFilter_FSR=1 k_EScalingFilter_FSR value
 * @property {number} k_EScalingFilter_Nearest=2 k_EScalingFilter_Nearest value
 * @property {number} k_EScalingFilter_Integer=3 k_EScalingFilter_Integer value
 * @property {number} k_EScalingFilter_Linear=4 k_EScalingFilter_Linear value
 * @property {number} k_EScalingFilter_NIS=5 k_EScalingFilter_NIS value
 */
export const EScalingFilter = $root.EScalingFilter = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EScalingFilter_Invalid"] = 0;
    values[valuesById[1] = "k_EScalingFilter_FSR"] = 1;
    values[valuesById[2] = "k_EScalingFilter_Nearest"] = 2;
    values[valuesById[3] = "k_EScalingFilter_Integer"] = 3;
    values[valuesById[4] = "k_EScalingFilter_Linear"] = 4;
    values[valuesById[5] = "k_EScalingFilter_NIS"] = 5;
    return values;
})();

/**
 * ESplitScalingFilter enum.
 * @exports ESplitScalingFilter
 * @enum {number}
 * @property {number} k_ESplitScalingFilter_Invalid=0 k_ESplitScalingFilter_Invalid value
 * @property {number} k_ESplitScalingFilter_Linear=1 k_ESplitScalingFilter_Linear value
 * @property {number} k_ESplitScalingFilter_Nearest=2 k_ESplitScalingFilter_Nearest value
 * @property {number} k_ESplitScalingFilter_FSR=3 k_ESplitScalingFilter_FSR value
 * @property {number} k_ESplitScalingFilter_NIS=4 k_ESplitScalingFilter_NIS value
 */
export const ESplitScalingFilter = $root.ESplitScalingFilter = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESplitScalingFilter_Invalid"] = 0;
    values[valuesById[1] = "k_ESplitScalingFilter_Linear"] = 1;
    values[valuesById[2] = "k_ESplitScalingFilter_Nearest"] = 2;
    values[valuesById[3] = "k_ESplitScalingFilter_FSR"] = 3;
    values[valuesById[4] = "k_ESplitScalingFilter_NIS"] = 4;
    return values;
})();

/**
 * ESplitScalingScaler enum.
 * @exports ESplitScalingScaler
 * @enum {number}
 * @property {number} k_ESplitScalingScaler_Invalid=0 k_ESplitScalingScaler_Invalid value
 * @property {number} k_ESplitScalingScaler_Auto=1 k_ESplitScalingScaler_Auto value
 * @property {number} k_ESplitScalingScaler_Integer=2 k_ESplitScalingScaler_Integer value
 * @property {number} k_ESplitScalingScaler_Fit=3 k_ESplitScalingScaler_Fit value
 * @property {number} k_ESplitScalingScaler_Fill=4 k_ESplitScalingScaler_Fill value
 * @property {number} k_ESplitScalingScaler_Stretch=5 k_ESplitScalingScaler_Stretch value
 */
export const ESplitScalingScaler = $root.ESplitScalingScaler = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESplitScalingScaler_Invalid"] = 0;
    values[valuesById[1] = "k_ESplitScalingScaler_Auto"] = 1;
    values[valuesById[2] = "k_ESplitScalingScaler_Integer"] = 2;
    values[valuesById[3] = "k_ESplitScalingScaler_Fit"] = 3;
    values[valuesById[4] = "k_ESplitScalingScaler_Fill"] = 4;
    values[valuesById[5] = "k_ESplitScalingScaler_Stretch"] = 5;
    return values;
})();

/**
 * EGamescopeBlurMode enum.
 * @exports EGamescopeBlurMode
 * @enum {number}
 * @property {number} k_EGamescopeBlurMode_Disabled=0 k_EGamescopeBlurMode_Disabled value
 * @property {number} k_EGamescopeBlurMode_IfOccluded=1 k_EGamescopeBlurMode_IfOccluded value
 * @property {number} k_EGamescopeBlurMode_Always=2 k_EGamescopeBlurMode_Always value
 */
export const EGamescopeBlurMode = $root.EGamescopeBlurMode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EGamescopeBlurMode_Disabled"] = 0;
    values[valuesById[1] = "k_EGamescopeBlurMode_IfOccluded"] = 1;
    values[valuesById[2] = "k_EGamescopeBlurMode_Always"] = 2;
    return values;
})();

/**
 * ESLSHelper enum.
 * @exports ESLSHelper
 * @enum {number}
 * @property {number} k_ESLSHelper_Invalid=0 k_ESLSHelper_Invalid value
 * @property {number} k_ESLSHelper_Minidump=1 k_ESLSHelper_Minidump value
 * @property {number} k_ESLSHelper_Kdump=2 k_ESLSHelper_Kdump value
 * @property {number} k_ESLSHelper_Journal=3 k_ESLSHelper_Journal value
 * @property {number} k_ESLSHelper_Gpu=4 k_ESLSHelper_Gpu value
 * @property {number} k_ESLSHelper_SystemInfo=5 k_ESLSHelper_SystemInfo value
 */
export const ESLSHelper = $root.ESLSHelper = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESLSHelper_Invalid"] = 0;
    values[valuesById[1] = "k_ESLSHelper_Minidump"] = 1;
    values[valuesById[2] = "k_ESLSHelper_Kdump"] = 2;
    values[valuesById[3] = "k_ESLSHelper_Journal"] = 3;
    values[valuesById[4] = "k_ESLSHelper_Gpu"] = 4;
    values[valuesById[5] = "k_ESLSHelper_SystemInfo"] = 5;
    return values;
})();

/**
 * EHDRVisualization enum.
 * @exports EHDRVisualization
 * @enum {number}
 * @property {number} k_EHDRVisualization_None=0 k_EHDRVisualization_None value
 * @property {number} k_EHDRVisualization_Heatmap=1 k_EHDRVisualization_Heatmap value
 * @property {number} k_EHDRVisualization_Analysis=2 k_EHDRVisualization_Analysis value
 * @property {number} k_EHDRVisualization_HeatmapExtended=3 k_EHDRVisualization_HeatmapExtended value
 * @property {number} k_EHDRVisualization_HeatmapClassic=4 k_EHDRVisualization_HeatmapClassic value
 */
export const EHDRVisualization = $root.EHDRVisualization = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EHDRVisualization_None"] = 0;
    values[valuesById[1] = "k_EHDRVisualization_Heatmap"] = 1;
    values[valuesById[2] = "k_EHDRVisualization_Analysis"] = 2;
    values[valuesById[3] = "k_EHDRVisualization_HeatmapExtended"] = 3;
    values[valuesById[4] = "k_EHDRVisualization_HeatmapClassic"] = 4;
    return values;
})();

/**
 * EHDRToneMapOperator enum.
 * @exports EHDRToneMapOperator
 * @enum {number}
 * @property {number} k_EHDRToneMapOperator_Invalid=0 k_EHDRToneMapOperator_Invalid value
 * @property {number} k_EHDRToneMapOperator_Uncharted=1 k_EHDRToneMapOperator_Uncharted value
 * @property {number} k_EHDRToneMapOperator_Reinhard=2 k_EHDRToneMapOperator_Reinhard value
 */
export const EHDRToneMapOperator = $root.EHDRToneMapOperator = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EHDRToneMapOperator_Invalid"] = 0;
    values[valuesById[1] = "k_EHDRToneMapOperator_Uncharted"] = 1;
    values[valuesById[2] = "k_EHDRToneMapOperator_Reinhard"] = 2;
    return values;
})();

/**
 * ECPUGovernor enum.
 * @exports ECPUGovernor
 * @enum {number}
 * @property {number} k_ECPUGovernor_Invalid=0 k_ECPUGovernor_Invalid value
 * @property {number} k_ECPUGovernor_Perf=1 k_ECPUGovernor_Perf value
 * @property {number} k_ECPUGovernor_Powersave=2 k_ECPUGovernor_Powersave value
 * @property {number} k_ECPUGovernor_Manual=3 k_ECPUGovernor_Manual value
 */
export const ECPUGovernor = $root.ECPUGovernor = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ECPUGovernor_Invalid"] = 0;
    values[valuesById[1] = "k_ECPUGovernor_Perf"] = 1;
    values[valuesById[2] = "k_ECPUGovernor_Powersave"] = 2;
    values[valuesById[3] = "k_ECPUGovernor_Manual"] = 3;
    return values;
})();

/**
 * EUpdaterType enum.
 * @exports EUpdaterType
 * @enum {number}
 * @property {number} k_EUpdaterType_Invalid=0 k_EUpdaterType_Invalid value
 * @property {number} k_EUpdaterType_Client=1 k_EUpdaterType_Client value
 * @property {number} k_EUpdaterType_OS=2 k_EUpdaterType_OS value
 * @property {number} k_EUpdaterType_BIOS=3 k_EUpdaterType_BIOS value
 * @property {number} k_EUpdaterType_Aggregated=4 k_EUpdaterType_Aggregated value
 * @property {number} k_EUpdaterType_Test1=5 k_EUpdaterType_Test1 value
 * @property {number} k_EUpdaterType_Test2=6 k_EUpdaterType_Test2 value
 * @property {number} k_EUpdaterType_Dummy=7 k_EUpdaterType_Dummy value
 */
export const EUpdaterType = $root.EUpdaterType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EUpdaterType_Invalid"] = 0;
    values[valuesById[1] = "k_EUpdaterType_Client"] = 1;
    values[valuesById[2] = "k_EUpdaterType_OS"] = 2;
    values[valuesById[3] = "k_EUpdaterType_BIOS"] = 3;
    values[valuesById[4] = "k_EUpdaterType_Aggregated"] = 4;
    values[valuesById[5] = "k_EUpdaterType_Test1"] = 5;
    values[valuesById[6] = "k_EUpdaterType_Test2"] = 6;
    values[valuesById[7] = "k_EUpdaterType_Dummy"] = 7;
    return values;
})();

/**
 * EUpdaterState enum.
 * @exports EUpdaterState
 * @enum {number}
 * @property {number} k_EUpdaterState_Invalid=0 k_EUpdaterState_Invalid value
 * @property {number} k_EUpdaterState_UpToDate=2 k_EUpdaterState_UpToDate value
 * @property {number} k_EUpdaterState_Checking=3 k_EUpdaterState_Checking value
 * @property {number} k_EUpdaterState_Available=4 k_EUpdaterState_Available value
 * @property {number} k_EUpdaterState_Applying=5 k_EUpdaterState_Applying value
 * @property {number} k_EUpdaterState_ClientRestartPending=6 k_EUpdaterState_ClientRestartPending value
 * @property {number} k_EUpdaterState_SystemRestartPending=7 k_EUpdaterState_SystemRestartPending value
 */
export const EUpdaterState = $root.EUpdaterState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EUpdaterState_Invalid"] = 0;
    values[valuesById[2] = "k_EUpdaterState_UpToDate"] = 2;
    values[valuesById[3] = "k_EUpdaterState_Checking"] = 3;
    values[valuesById[4] = "k_EUpdaterState_Available"] = 4;
    values[valuesById[5] = "k_EUpdaterState_Applying"] = 5;
    values[valuesById[6] = "k_EUpdaterState_ClientRestartPending"] = 6;
    values[valuesById[7] = "k_EUpdaterState_SystemRestartPending"] = 7;
    return values;
})();

/**
 * EStorageBlockContentType enum.
 * @exports EStorageBlockContentType
 * @enum {number}
 * @property {number} k_EStorageBlockContentType_Invalid=0 k_EStorageBlockContentType_Invalid value
 * @property {number} k_EStorageBlockContentType_Unknown=1 k_EStorageBlockContentType_Unknown value
 * @property {number} k_EStorageBlockContentType_FileSystem=2 k_EStorageBlockContentType_FileSystem value
 * @property {number} k_EStorageBlockContentType_Crypto=3 k_EStorageBlockContentType_Crypto value
 * @property {number} k_EStorageBlockContentType_Raid=4 k_EStorageBlockContentType_Raid value
 */
export const EStorageBlockContentType = $root.EStorageBlockContentType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EStorageBlockContentType_Invalid"] = 0;
    values[valuesById[1] = "k_EStorageBlockContentType_Unknown"] = 1;
    values[valuesById[2] = "k_EStorageBlockContentType_FileSystem"] = 2;
    values[valuesById[3] = "k_EStorageBlockContentType_Crypto"] = 3;
    values[valuesById[4] = "k_EStorageBlockContentType_Raid"] = 4;
    return values;
})();

/**
 * EStorageBlockFileSystemType enum.
 * @exports EStorageBlockFileSystemType
 * @enum {number}
 * @property {number} k_EStorageBlockFileSystemType_Invalid=0 k_EStorageBlockFileSystemType_Invalid value
 * @property {number} k_EStorageBlockFileSystemType_Unknown=1 k_EStorageBlockFileSystemType_Unknown value
 * @property {number} k_EStorageBlockFileSystemType_VFat=2 k_EStorageBlockFileSystemType_VFat value
 * @property {number} k_EStorageBlockFileSystemType_Ext4=3 k_EStorageBlockFileSystemType_Ext4 value
 */
export const EStorageBlockFileSystemType = $root.EStorageBlockFileSystemType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EStorageBlockFileSystemType_Invalid"] = 0;
    values[valuesById[1] = "k_EStorageBlockFileSystemType_Unknown"] = 1;
    values[valuesById[2] = "k_EStorageBlockFileSystemType_VFat"] = 2;
    values[valuesById[3] = "k_EStorageBlockFileSystemType_Ext4"] = 3;
    return values;
})();

/**
 * EStorageDriveMediaType enum.
 * @exports EStorageDriveMediaType
 * @enum {number}
 * @property {number} k_EStorageDriveMediaType_Invalid=0 k_EStorageDriveMediaType_Invalid value
 * @property {number} k_EStorageDriveMediaType_Unknown=1 k_EStorageDriveMediaType_Unknown value
 * @property {number} k_EStorageDriveMediaType_HDD=2 k_EStorageDriveMediaType_HDD value
 * @property {number} k_EStorageDriveMediaType_SSD=3 k_EStorageDriveMediaType_SSD value
 * @property {number} k_EStorageDriveMediaType_Removable=4 k_EStorageDriveMediaType_Removable value
 */
export const EStorageDriveMediaType = $root.EStorageDriveMediaType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EStorageDriveMediaType_Invalid"] = 0;
    values[valuesById[1] = "k_EStorageDriveMediaType_Unknown"] = 1;
    values[valuesById[2] = "k_EStorageDriveMediaType_HDD"] = 2;
    values[valuesById[3] = "k_EStorageDriveMediaType_SSD"] = 3;
    values[valuesById[4] = "k_EStorageDriveMediaType_Removable"] = 4;
    return values;
})();

/**
 * ESystemDisplayCompatibilityMode enum.
 * @exports ESystemDisplayCompatibilityMode
 * @enum {number}
 * @property {number} k_ESystemDisplayCompatibilityMode_Invalid=0 k_ESystemDisplayCompatibilityMode_Invalid value
 * @property {number} k_ESystemDisplayCompatibilityMode_None=1 k_ESystemDisplayCompatibilityMode_None value
 * @property {number} k_ESystemDisplayCompatibilityMode_MinimalBandwith=2 k_ESystemDisplayCompatibilityMode_MinimalBandwith value
 */
export const ESystemDisplayCompatibilityMode = $root.ESystemDisplayCompatibilityMode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESystemDisplayCompatibilityMode_Invalid"] = 0;
    values[valuesById[1] = "k_ESystemDisplayCompatibilityMode_None"] = 1;
    values[valuesById[2] = "k_ESystemDisplayCompatibilityMode_MinimalBandwith"] = 2;
    return values;
})();

/**
 * ESteamDeckCompatibilityCategory enum.
 * @exports ESteamDeckCompatibilityCategory
 * @enum {number}
 * @property {number} k_ESteamDeckCompatibilityCategory_Unknown=0 k_ESteamDeckCompatibilityCategory_Unknown value
 * @property {number} k_ESteamDeckCompatibilityCategory_Unsupported=1 k_ESteamDeckCompatibilityCategory_Unsupported value
 * @property {number} k_ESteamDeckCompatibilityCategory_Playable=2 k_ESteamDeckCompatibilityCategory_Playable value
 * @property {number} k_ESteamDeckCompatibilityCategory_Verified=3 k_ESteamDeckCompatibilityCategory_Verified value
 */
export const ESteamDeckCompatibilityCategory = $root.ESteamDeckCompatibilityCategory = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESteamDeckCompatibilityCategory_Unknown"] = 0;
    values[valuesById[1] = "k_ESteamDeckCompatibilityCategory_Unsupported"] = 1;
    values[valuesById[2] = "k_ESteamDeckCompatibilityCategory_Playable"] = 2;
    values[valuesById[3] = "k_ESteamDeckCompatibilityCategory_Verified"] = 3;
    return values;
})();

/**
 * ESteamDeckCompatibilityResultDisplayType enum.
 * @exports ESteamDeckCompatibilityResultDisplayType
 * @enum {number}
 * @property {number} k_ESteamDeckCompatibilityResultDisplayType_Invisible=0 k_ESteamDeckCompatibilityResultDisplayType_Invisible value
 * @property {number} k_ESteamDeckCompatibilityResultDisplayType_Informational=1 k_ESteamDeckCompatibilityResultDisplayType_Informational value
 * @property {number} k_ESteamDeckCompatibilityResultDisplayType_Unsupported=2 k_ESteamDeckCompatibilityResultDisplayType_Unsupported value
 * @property {number} k_ESteamDeckCompatibilityResultDisplayType_Playable=3 k_ESteamDeckCompatibilityResultDisplayType_Playable value
 * @property {number} k_ESteamDeckCompatibilityResultDisplayType_Verified=4 k_ESteamDeckCompatibilityResultDisplayType_Verified value
 */
export const ESteamDeckCompatibilityResultDisplayType = $root.ESteamDeckCompatibilityResultDisplayType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESteamDeckCompatibilityResultDisplayType_Invisible"] = 0;
    values[valuesById[1] = "k_ESteamDeckCompatibilityResultDisplayType_Informational"] = 1;
    values[valuesById[2] = "k_ESteamDeckCompatibilityResultDisplayType_Unsupported"] = 2;
    values[valuesById[3] = "k_ESteamDeckCompatibilityResultDisplayType_Playable"] = 3;
    values[valuesById[4] = "k_ESteamDeckCompatibilityResultDisplayType_Verified"] = 4;
    return values;
})();

/**
 * EACState enum.
 * @exports EACState
 * @enum {number}
 * @property {number} k_EACState_Unknown=0 k_EACState_Unknown value
 * @property {number} k_EACState_Disconnected=1 k_EACState_Disconnected value
 * @property {number} k_EACState_Connected=2 k_EACState_Connected value
 * @property {number} k_EACState_ConnectedSlow=3 k_EACState_ConnectedSlow value
 */
export const EACState = $root.EACState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EACState_Unknown"] = 0;
    values[valuesById[1] = "k_EACState_Disconnected"] = 1;
    values[valuesById[2] = "k_EACState_Connected"] = 2;
    values[valuesById[3] = "k_EACState_ConnectedSlow"] = 3;
    return values;
})();

/**
 * EBatteryState enum.
 * @exports EBatteryState
 * @enum {number}
 * @property {number} k_EBatteryState_Unknown=0 k_EBatteryState_Unknown value
 * @property {number} k_EBatteryState_Discharging=1 k_EBatteryState_Discharging value
 * @property {number} k_EBatteryState_Charging=2 k_EBatteryState_Charging value
 * @property {number} k_EBatteryState_Full=3 k_EBatteryState_Full value
 */
export const EBatteryState = $root.EBatteryState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EBatteryState_Unknown"] = 0;
    values[valuesById[1] = "k_EBatteryState_Discharging"] = 1;
    values[valuesById[2] = "k_EBatteryState_Charging"] = 2;
    values[valuesById[3] = "k_EBatteryState_Full"] = 3;
    return values;
})();

/**
 * EOSBranch enum.
 * @exports EOSBranch
 * @enum {number}
 * @property {number} k_EOSBranch_Unknown=0 k_EOSBranch_Unknown value
 * @property {number} k_EOSBranch_Release=1 k_EOSBranch_Release value
 * @property {number} k_EOSBranch_ReleaseCandidate=2 k_EOSBranch_ReleaseCandidate value
 * @property {number} k_EOSBranch_Beta=3 k_EOSBranch_Beta value
 * @property {number} k_EOSBranch_BetaCandidate=4 k_EOSBranch_BetaCandidate value
 * @property {number} k_EOSBranch_Main=5 k_EOSBranch_Main value
 * @property {number} k_EOSBranch_Staging=6 k_EOSBranch_Staging value
 */
export const EOSBranch = $root.EOSBranch = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EOSBranch_Unknown"] = 0;
    values[valuesById[1] = "k_EOSBranch_Release"] = 1;
    values[valuesById[2] = "k_EOSBranch_ReleaseCandidate"] = 2;
    values[valuesById[3] = "k_EOSBranch_Beta"] = 3;
    values[valuesById[4] = "k_EOSBranch_BetaCandidate"] = 4;
    values[valuesById[5] = "k_EOSBranch_Main"] = 5;
    values[valuesById[6] = "k_EOSBranch_Staging"] = 6;
    return values;
})();

/**
 * ECommunityItemClass enum.
 * @exports ECommunityItemClass
 * @enum {number}
 * @property {number} k_ECommunityItemClass_Invalid=0 k_ECommunityItemClass_Invalid value
 * @property {number} k_ECommunityItemClass_Badge=1 k_ECommunityItemClass_Badge value
 * @property {number} k_ECommunityItemClass_GameCard=2 k_ECommunityItemClass_GameCard value
 * @property {number} k_ECommunityItemClass_ProfileBackground=3 k_ECommunityItemClass_ProfileBackground value
 * @property {number} k_ECommunityItemClass_Emoticon=4 k_ECommunityItemClass_Emoticon value
 * @property {number} k_ECommunityItemClass_BoosterPack=5 k_ECommunityItemClass_BoosterPack value
 * @property {number} k_ECommunityItemClass_Consumable=6 k_ECommunityItemClass_Consumable value
 * @property {number} k_ECommunityItemClass_GameGoo=7 k_ECommunityItemClass_GameGoo value
 * @property {number} k_ECommunityItemClass_ProfileModifier=8 k_ECommunityItemClass_ProfileModifier value
 * @property {number} k_ECommunityItemClass_Scene=9 k_ECommunityItemClass_Scene value
 * @property {number} k_ECommunityItemClass_SalienItem=10 k_ECommunityItemClass_SalienItem value
 * @property {number} k_ECommunityItemClass_Sticker=11 k_ECommunityItemClass_Sticker value
 * @property {number} k_ECommunityItemClass_ChatEffect=12 k_ECommunityItemClass_ChatEffect value
 * @property {number} k_ECommunityItemClass_MiniProfileBackground=13 k_ECommunityItemClass_MiniProfileBackground value
 * @property {number} k_ECommunityItemClass_AvatarFrame=14 k_ECommunityItemClass_AvatarFrame value
 * @property {number} k_ECommunityItemClass_AnimatedAvatar=15 k_ECommunityItemClass_AnimatedAvatar value
 * @property {number} k_ECommunityItemClass_SteamDeckKeyboardSkin=16 k_ECommunityItemClass_SteamDeckKeyboardSkin value
 * @property {number} k_ECommunityItemClass_SteamDeckStartupMovie=17 k_ECommunityItemClass_SteamDeckStartupMovie value
 */
export const ECommunityItemClass = $root.ECommunityItemClass = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ECommunityItemClass_Invalid"] = 0;
    values[valuesById[1] = "k_ECommunityItemClass_Badge"] = 1;
    values[valuesById[2] = "k_ECommunityItemClass_GameCard"] = 2;
    values[valuesById[3] = "k_ECommunityItemClass_ProfileBackground"] = 3;
    values[valuesById[4] = "k_ECommunityItemClass_Emoticon"] = 4;
    values[valuesById[5] = "k_ECommunityItemClass_BoosterPack"] = 5;
    values[valuesById[6] = "k_ECommunityItemClass_Consumable"] = 6;
    values[valuesById[7] = "k_ECommunityItemClass_GameGoo"] = 7;
    values[valuesById[8] = "k_ECommunityItemClass_ProfileModifier"] = 8;
    values[valuesById[9] = "k_ECommunityItemClass_Scene"] = 9;
    values[valuesById[10] = "k_ECommunityItemClass_SalienItem"] = 10;
    values[valuesById[11] = "k_ECommunityItemClass_Sticker"] = 11;
    values[valuesById[12] = "k_ECommunityItemClass_ChatEffect"] = 12;
    values[valuesById[13] = "k_ECommunityItemClass_MiniProfileBackground"] = 13;
    values[valuesById[14] = "k_ECommunityItemClass_AvatarFrame"] = 14;
    values[valuesById[15] = "k_ECommunityItemClass_AnimatedAvatar"] = 15;
    values[valuesById[16] = "k_ECommunityItemClass_SteamDeckKeyboardSkin"] = 16;
    values[valuesById[17] = "k_ECommunityItemClass_SteamDeckStartupMovie"] = 17;
    return values;
})();

/**
 * ESteamDeckCompatibilityFeedback enum.
 * @exports ESteamDeckCompatibilityFeedback
 * @enum {number}
 * @property {number} k_ESteamDeckCompatibilityFeedback_Unset=0 k_ESteamDeckCompatibilityFeedback_Unset value
 * @property {number} k_ESteamDeckCompatibilityFeedback_Agree=1 k_ESteamDeckCompatibilityFeedback_Agree value
 * @property {number} k_ESteamDeckCompatibilityFeedback_Disagree=2 k_ESteamDeckCompatibilityFeedback_Disagree value
 * @property {number} k_ESteamDeckCompatibilityFeedback_Ignore=3 k_ESteamDeckCompatibilityFeedback_Ignore value
 */
export const ESteamDeckCompatibilityFeedback = $root.ESteamDeckCompatibilityFeedback = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ESteamDeckCompatibilityFeedback_Unset"] = 0;
    values[valuesById[1] = "k_ESteamDeckCompatibilityFeedback_Agree"] = 1;
    values[valuesById[2] = "k_ESteamDeckCompatibilityFeedback_Disagree"] = 2;
    values[valuesById[3] = "k_ESteamDeckCompatibilityFeedback_Ignore"] = 3;
    return values;
})();

/**
 * EProvideDeckFeedbackPreference enum.
 * @exports EProvideDeckFeedbackPreference
 * @enum {number}
 * @property {number} k_EProvideDeckFeedbackPreference_Unset=0 k_EProvideDeckFeedbackPreference_Unset value
 * @property {number} k_EProvideDeckFeedbackPreference_Yes=1 k_EProvideDeckFeedbackPreference_Yes value
 * @property {number} k_EProvideDeckFeedbackPreference_No=2 k_EProvideDeckFeedbackPreference_No value
 */
export const EProvideDeckFeedbackPreference = $root.EProvideDeckFeedbackPreference = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EProvideDeckFeedbackPreference_Unset"] = 0;
    values[valuesById[1] = "k_EProvideDeckFeedbackPreference_Yes"] = 1;
    values[valuesById[2] = "k_EProvideDeckFeedbackPreference_No"] = 2;
    return values;
})();

/**
 * ETouchGesture enum.
 * @exports ETouchGesture
 * @enum {number}
 * @property {number} k_ETouchGestureNone=0 k_ETouchGestureNone value
 * @property {number} k_ETouchGestureTouch=1 k_ETouchGestureTouch value
 * @property {number} k_ETouchGestureTap=2 k_ETouchGestureTap value
 * @property {number} k_ETouchGestureDoubleTap=3 k_ETouchGestureDoubleTap value
 * @property {number} k_ETouchGestureShortPress=4 k_ETouchGestureShortPress value
 * @property {number} k_ETouchGestureLongPress=5 k_ETouchGestureLongPress value
 * @property {number} k_ETouchGestureLongTap=6 k_ETouchGestureLongTap value
 * @property {number} k_ETouchGestureTwoFingerTap=7 k_ETouchGestureTwoFingerTap value
 * @property {number} k_ETouchGestureTapCancelled=8 k_ETouchGestureTapCancelled value
 * @property {number} k_ETouchGesturePinchBegin=9 k_ETouchGesturePinchBegin value
 * @property {number} k_ETouchGesturePinchUpdate=10 k_ETouchGesturePinchUpdate value
 * @property {number} k_ETouchGesturePinchEnd=11 k_ETouchGesturePinchEnd value
 * @property {number} k_ETouchGestureFlingStart=12 k_ETouchGestureFlingStart value
 * @property {number} k_ETouchGestureFlingCancelled=13 k_ETouchGestureFlingCancelled value
 */
export const ETouchGesture = $root.ETouchGesture = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ETouchGestureNone"] = 0;
    values[valuesById[1] = "k_ETouchGestureTouch"] = 1;
    values[valuesById[2] = "k_ETouchGestureTap"] = 2;
    values[valuesById[3] = "k_ETouchGestureDoubleTap"] = 3;
    values[valuesById[4] = "k_ETouchGestureShortPress"] = 4;
    values[valuesById[5] = "k_ETouchGestureLongPress"] = 5;
    values[valuesById[6] = "k_ETouchGestureLongTap"] = 6;
    values[valuesById[7] = "k_ETouchGestureTwoFingerTap"] = 7;
    values[valuesById[8] = "k_ETouchGestureTapCancelled"] = 8;
    values[valuesById[9] = "k_ETouchGesturePinchBegin"] = 9;
    values[valuesById[10] = "k_ETouchGesturePinchUpdate"] = 10;
    values[valuesById[11] = "k_ETouchGesturePinchEnd"] = 11;
    values[valuesById[12] = "k_ETouchGestureFlingStart"] = 12;
    values[valuesById[13] = "k_ETouchGestureFlingCancelled"] = 13;
    return values;
})();

/**
 * ESessionPersistence enum.
 * @exports ESessionPersistence
 * @enum {number}
 * @property {number} k_ESessionPersistence_Invalid=-1 k_ESessionPersistence_Invalid value
 * @property {number} k_ESessionPersistence_Ephemeral=0 k_ESessionPersistence_Ephemeral value
 * @property {number} k_ESessionPersistence_Persistent=1 k_ESessionPersistence_Persistent value
 */
export const ESessionPersistence = $root.ESessionPersistence = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[-1] = "k_ESessionPersistence_Invalid"] = -1;
    values[valuesById[0] = "k_ESessionPersistence_Ephemeral"] = 0;
    values[valuesById[1] = "k_ESessionPersistence_Persistent"] = 1;
    return values;
})();

/**
 * ENewSteamAnnouncementState enum.
 * @exports ENewSteamAnnouncementState
 * @enum {number}
 * @property {number} k_ENewSteamAnnouncementState_Invalid=0 k_ENewSteamAnnouncementState_Invalid value
 * @property {number} k_ENewSteamAnnouncementState_AllRead=1 k_ENewSteamAnnouncementState_AllRead value
 * @property {number} k_ENewSteamAnnouncementState_NewAnnouncement=2 k_ENewSteamAnnouncementState_NewAnnouncement value
 * @property {number} k_ENewSteamAnnouncementState_FeaturedAnnouncement=3 k_ENewSteamAnnouncementState_FeaturedAnnouncement value
 */
export const ENewSteamAnnouncementState = $root.ENewSteamAnnouncementState = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ENewSteamAnnouncementState_Invalid"] = 0;
    values[valuesById[1] = "k_ENewSteamAnnouncementState_AllRead"] = 1;
    values[valuesById[2] = "k_ENewSteamAnnouncementState_NewAnnouncement"] = 2;
    values[valuesById[3] = "k_ENewSteamAnnouncementState_FeaturedAnnouncement"] = 3;
    return values;
})();

/**
 * ECommentThreadType enum.
 * @exports ECommentThreadType
 * @enum {number}
 * @property {number} k_ECommentThreadTypeInvalid=0 k_ECommentThreadTypeInvalid value
 * @property {number} k_ECommentThreadTypeScreenshot_Deprecated=1 k_ECommentThreadTypeScreenshot_Deprecated value
 * @property {number} k_ECommentThreadTypeWorkshopAccount_Developer=2 k_ECommentThreadTypeWorkshopAccount_Developer value
 * @property {number} k_ECommentThreadTypeWorkshopAccount_Public=3 k_ECommentThreadTypeWorkshopAccount_Public value
 * @property {number} k_ECommentThreadTypePublishedFile_Developer=4 k_ECommentThreadTypePublishedFile_Developer value
 * @property {number} k_ECommentThreadTypePublishedFile_Public=5 k_ECommentThreadTypePublishedFile_Public value
 * @property {number} k_ECommentThreadTypeTest=6 k_ECommentThreadTypeTest value
 * @property {number} k_ECommentThreadTypeForumTopic=7 k_ECommentThreadTypeForumTopic value
 * @property {number} k_ECommentThreadTypeRecommendation=8 k_ECommentThreadTypeRecommendation value
 * @property {number} k_ECommentThreadTypeVideo_Deprecated=9 k_ECommentThreadTypeVideo_Deprecated value
 * @property {number} k_ECommentThreadTypeProfile=10 k_ECommentThreadTypeProfile value
 * @property {number} k_ECommentThreadTypeNewsPost=11 k_ECommentThreadTypeNewsPost value
 * @property {number} k_ECommentThreadTypeClan=12 k_ECommentThreadTypeClan value
 * @property {number} k_ECommentThreadTypeClanAnnouncement=13 k_ECommentThreadTypeClanAnnouncement value
 * @property {number} k_ECommentThreadTypeClanEvent=14 k_ECommentThreadTypeClanEvent value
 * @property {number} k_ECommentThreadTypeUserStatusPublished=15 k_ECommentThreadTypeUserStatusPublished value
 * @property {number} k_ECommentThreadTypeUserReceivedNewGame=16 k_ECommentThreadTypeUserReceivedNewGame value
 * @property {number} k_ECommentThreadTypePublishedFile_Announcement=17 k_ECommentThreadTypePublishedFile_Announcement value
 * @property {number} k_ECommentThreadTypeModeratorMessage=18 k_ECommentThreadTypeModeratorMessage value
 * @property {number} k_ECommentThreadTypeClanCuratedApp=19 k_ECommentThreadTypeClanCuratedApp value
 * @property {number} k_ECommentThreadTypeQAndASession=20 k_ECommentThreadTypeQAndASession value
 * @property {number} k_ECommentThreadTypeMax=21 k_ECommentThreadTypeMax value
 */
export const ECommentThreadType = $root.ECommentThreadType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ECommentThreadTypeInvalid"] = 0;
    values[valuesById[1] = "k_ECommentThreadTypeScreenshot_Deprecated"] = 1;
    values[valuesById[2] = "k_ECommentThreadTypeWorkshopAccount_Developer"] = 2;
    values[valuesById[3] = "k_ECommentThreadTypeWorkshopAccount_Public"] = 3;
    values[valuesById[4] = "k_ECommentThreadTypePublishedFile_Developer"] = 4;
    values[valuesById[5] = "k_ECommentThreadTypePublishedFile_Public"] = 5;
    values[valuesById[6] = "k_ECommentThreadTypeTest"] = 6;
    values[valuesById[7] = "k_ECommentThreadTypeForumTopic"] = 7;
    values[valuesById[8] = "k_ECommentThreadTypeRecommendation"] = 8;
    values[valuesById[9] = "k_ECommentThreadTypeVideo_Deprecated"] = 9;
    values[valuesById[10] = "k_ECommentThreadTypeProfile"] = 10;
    values[valuesById[11] = "k_ECommentThreadTypeNewsPost"] = 11;
    values[valuesById[12] = "k_ECommentThreadTypeClan"] = 12;
    values[valuesById[13] = "k_ECommentThreadTypeClanAnnouncement"] = 13;
    values[valuesById[14] = "k_ECommentThreadTypeClanEvent"] = 14;
    values[valuesById[15] = "k_ECommentThreadTypeUserStatusPublished"] = 15;
    values[valuesById[16] = "k_ECommentThreadTypeUserReceivedNewGame"] = 16;
    values[valuesById[17] = "k_ECommentThreadTypePublishedFile_Announcement"] = 17;
    values[valuesById[18] = "k_ECommentThreadTypeModeratorMessage"] = 18;
    values[valuesById[19] = "k_ECommentThreadTypeClanCuratedApp"] = 19;
    values[valuesById[20] = "k_ECommentThreadTypeQAndASession"] = 20;
    values[valuesById[21] = "k_ECommentThreadTypeMax"] = 21;
    return values;
})();

/**
 * EBroadcastPermission enum.
 * @exports EBroadcastPermission
 * @enum {number}
 * @property {number} k_EBroadcastPermissionDisabled=0 k_EBroadcastPermissionDisabled value
 * @property {number} k_EBroadcastPermissionFriendsApprove=1 k_EBroadcastPermissionFriendsApprove value
 * @property {number} k_EBroadcastPermissionFriendsAllowed=2 k_EBroadcastPermissionFriendsAllowed value
 * @property {number} k_EBroadcastPermissionPublic=3 k_EBroadcastPermissionPublic value
 * @property {number} k_EBroadcastPermissionSubscribers=4 k_EBroadcastPermissionSubscribers value
 */
export const EBroadcastPermission = $root.EBroadcastPermission = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EBroadcastPermissionDisabled"] = 0;
    values[valuesById[1] = "k_EBroadcastPermissionFriendsApprove"] = 1;
    values[valuesById[2] = "k_EBroadcastPermissionFriendsAllowed"] = 2;
    values[valuesById[3] = "k_EBroadcastPermissionPublic"] = 3;
    values[valuesById[4] = "k_EBroadcastPermissionSubscribers"] = 4;
    return values;
})();

/**
 * EBroadcastEncoderSetting enum.
 * @exports EBroadcastEncoderSetting
 * @enum {number}
 * @property {number} k_EBroadcastEncoderBestQuality=0 k_EBroadcastEncoderBestQuality value
 * @property {number} k_EBroadcastEncoderBestPerformance=1 k_EBroadcastEncoderBestPerformance value
 */
export const EBroadcastEncoderSetting = $root.EBroadcastEncoderSetting = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EBroadcastEncoderBestQuality"] = 0;
    values[valuesById[1] = "k_EBroadcastEncoderBestPerformance"] = 1;
    return values;
})();

/**
 * ECloudGamingPlatform enum.
 * @exports ECloudGamingPlatform
 * @enum {number}
 * @property {number} k_ECloudGamingPlatformNone=0 k_ECloudGamingPlatformNone value
 * @property {number} k_ECloudGamingPlatformValve=1 k_ECloudGamingPlatformValve value
 * @property {number} k_ECloudGamingPlatformNVIDIA=2 k_ECloudGamingPlatformNVIDIA value
 */
export const ECloudGamingPlatform = $root.ECloudGamingPlatform = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_ECloudGamingPlatformNone"] = 0;
    values[valuesById[1] = "k_ECloudGamingPlatformValve"] = 1;
    values[valuesById[2] = "k_ECloudGamingPlatformNVIDIA"] = 2;
    return values;
})();

/**
 * EBanContentCheckResult enum.
 * @exports EBanContentCheckResult
 * @enum {number}
 * @property {number} k_EBanContentCheckResult_NotScanned=0 k_EBanContentCheckResult_NotScanned value
 * @property {number} k_EBanContentCheckResult_Reset=1 k_EBanContentCheckResult_Reset value
 * @property {number} k_EBanContentCheckResult_NeedsChecking=2 k_EBanContentCheckResult_NeedsChecking value
 * @property {number} k_EBanContentCheckResult_VeryUnlikely=5 k_EBanContentCheckResult_VeryUnlikely value
 * @property {number} k_EBanContentCheckResult_Unlikely=30 k_EBanContentCheckResult_Unlikely value
 * @property {number} k_EBanContentCheckResult_Possible=50 k_EBanContentCheckResult_Possible value
 * @property {number} k_EBanContentCheckResult_Likely=75 k_EBanContentCheckResult_Likely value
 * @property {number} k_EBanContentCheckResult_VeryLikely=100 k_EBanContentCheckResult_VeryLikely value
 */
export const EBanContentCheckResult = $root.EBanContentCheckResult = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EBanContentCheckResult_NotScanned"] = 0;
    values[valuesById[1] = "k_EBanContentCheckResult_Reset"] = 1;
    values[valuesById[2] = "k_EBanContentCheckResult_NeedsChecking"] = 2;
    values[valuesById[5] = "k_EBanContentCheckResult_VeryUnlikely"] = 5;
    values[valuesById[30] = "k_EBanContentCheckResult_Unlikely"] = 30;
    values[valuesById[50] = "k_EBanContentCheckResult_Possible"] = 50;
    values[valuesById[75] = "k_EBanContentCheckResult_Likely"] = 75;
    values[valuesById[100] = "k_EBanContentCheckResult_VeryLikely"] = 100;
    return values;
})();

/**
 * EProtoClanEventType enum.
 * @exports EProtoClanEventType
 * @enum {number}
 * @property {number} k_EClanOtherEvent=1 k_EClanOtherEvent value
 * @property {number} k_EClanGameEvent=2 k_EClanGameEvent value
 * @property {number} k_EClanPartyEvent=3 k_EClanPartyEvent value
 * @property {number} k_EClanMeetingEvent=4 k_EClanMeetingEvent value
 * @property {number} k_EClanSpecialCauseEvent=5 k_EClanSpecialCauseEvent value
 * @property {number} k_EClanMusicAndArtsEvent=6 k_EClanMusicAndArtsEvent value
 * @property {number} k_EClanSportsEvent=7 k_EClanSportsEvent value
 * @property {number} k_EClanTripEvent=8 k_EClanTripEvent value
 * @property {number} k_EClanChatEvent=9 k_EClanChatEvent value
 * @property {number} k_EClanGameReleaseEvent=10 k_EClanGameReleaseEvent value
 * @property {number} k_EClanBroadcastEvent=11 k_EClanBroadcastEvent value
 * @property {number} k_EClanSmallUpdateEvent=12 k_EClanSmallUpdateEvent value
 * @property {number} k_EClanPreAnnounceMajorUpdateEvent=13 k_EClanPreAnnounceMajorUpdateEvent value
 * @property {number} k_EClanMajorUpdateEvent=14 k_EClanMajorUpdateEvent value
 * @property {number} k_EClanDLCReleaseEvent=15 k_EClanDLCReleaseEvent value
 * @property {number} k_EClanFutureReleaseEvent=16 k_EClanFutureReleaseEvent value
 * @property {number} k_EClanESportTournamentStreamEvent=17 k_EClanESportTournamentStreamEvent value
 * @property {number} k_EClanDevStreamEvent=18 k_EClanDevStreamEvent value
 * @property {number} k_EClanFamousStreamEvent=19 k_EClanFamousStreamEvent value
 * @property {number} k_EClanGameSalesEvent=20 k_EClanGameSalesEvent value
 * @property {number} k_EClanGameItemSalesEvent=21 k_EClanGameItemSalesEvent value
 * @property {number} k_EClanInGameBonusXPEvent=22 k_EClanInGameBonusXPEvent value
 * @property {number} k_EClanInGameLootEvent=23 k_EClanInGameLootEvent value
 * @property {number} k_EClanInGamePerksEvent=24 k_EClanInGamePerksEvent value
 * @property {number} k_EClanInGameChallengeEvent=25 k_EClanInGameChallengeEvent value
 * @property {number} k_EClanInGameContestEvent=26 k_EClanInGameContestEvent value
 * @property {number} k_EClanIRLEvent=27 k_EClanIRLEvent value
 * @property {number} k_EClanNewsEvent=28 k_EClanNewsEvent value
 * @property {number} k_EClanBetaReleaseEvent=29 k_EClanBetaReleaseEvent value
 * @property {number} k_EClanInGameContentReleaseEvent=30 k_EClanInGameContentReleaseEvent value
 * @property {number} k_EClanFreeTrial=31 k_EClanFreeTrial value
 * @property {number} k_EClanSeasonRelease=32 k_EClanSeasonRelease value
 * @property {number} k_EClanSeasonUpdate=33 k_EClanSeasonUpdate value
 * @property {number} k_EClanCrosspostEvent=34 k_EClanCrosspostEvent value
 * @property {number} k_EClanInGameEventGeneral=35 k_EClanInGameEventGeneral value
 */
export const EProtoClanEventType = $root.EProtoClanEventType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "k_EClanOtherEvent"] = 1;
    values[valuesById[2] = "k_EClanGameEvent"] = 2;
    values[valuesById[3] = "k_EClanPartyEvent"] = 3;
    values[valuesById[4] = "k_EClanMeetingEvent"] = 4;
    values[valuesById[5] = "k_EClanSpecialCauseEvent"] = 5;
    values[valuesById[6] = "k_EClanMusicAndArtsEvent"] = 6;
    values[valuesById[7] = "k_EClanSportsEvent"] = 7;
    values[valuesById[8] = "k_EClanTripEvent"] = 8;
    values[valuesById[9] = "k_EClanChatEvent"] = 9;
    values[valuesById[10] = "k_EClanGameReleaseEvent"] = 10;
    values[valuesById[11] = "k_EClanBroadcastEvent"] = 11;
    values[valuesById[12] = "k_EClanSmallUpdateEvent"] = 12;
    values[valuesById[13] = "k_EClanPreAnnounceMajorUpdateEvent"] = 13;
    values[valuesById[14] = "k_EClanMajorUpdateEvent"] = 14;
    values[valuesById[15] = "k_EClanDLCReleaseEvent"] = 15;
    values[valuesById[16] = "k_EClanFutureReleaseEvent"] = 16;
    values[valuesById[17] = "k_EClanESportTournamentStreamEvent"] = 17;
    values[valuesById[18] = "k_EClanDevStreamEvent"] = 18;
    values[valuesById[19] = "k_EClanFamousStreamEvent"] = 19;
    values[valuesById[20] = "k_EClanGameSalesEvent"] = 20;
    values[valuesById[21] = "k_EClanGameItemSalesEvent"] = 21;
    values[valuesById[22] = "k_EClanInGameBonusXPEvent"] = 22;
    values[valuesById[23] = "k_EClanInGameLootEvent"] = 23;
    values[valuesById[24] = "k_EClanInGamePerksEvent"] = 24;
    values[valuesById[25] = "k_EClanInGameChallengeEvent"] = 25;
    values[valuesById[26] = "k_EClanInGameContestEvent"] = 26;
    values[valuesById[27] = "k_EClanIRLEvent"] = 27;
    values[valuesById[28] = "k_EClanNewsEvent"] = 28;
    values[valuesById[29] = "k_EClanBetaReleaseEvent"] = 29;
    values[valuesById[30] = "k_EClanInGameContentReleaseEvent"] = 30;
    values[valuesById[31] = "k_EClanFreeTrial"] = 31;
    values[valuesById[32] = "k_EClanSeasonRelease"] = 32;
    values[valuesById[33] = "k_EClanSeasonUpdate"] = 33;
    values[valuesById[34] = "k_EClanCrosspostEvent"] = 34;
    values[valuesById[35] = "k_EClanInGameEventGeneral"] = 35;
    return values;
})();

/**
 * PartnerEventNotificationType enum.
 * @exports PartnerEventNotificationType
 * @enum {number}
 * @property {number} k_EEventStart=0 k_EEventStart value
 * @property {number} k_EEventBroadcastStart=1 k_EEventBroadcastStart value
 * @property {number} k_EEventMatchStart=2 k_EEventMatchStart value
 * @property {number} k_EEventPartnerMaxType=3 k_EEventPartnerMaxType value
 */
export const PartnerEventNotificationType = $root.PartnerEventNotificationType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "k_EEventStart"] = 0;
    values[valuesById[1] = "k_EEventBroadcastStart"] = 1;
    values[valuesById[2] = "k_EEventMatchStart"] = 2;
    values[valuesById[3] = "k_EEventPartnerMaxType"] = 3;
    return values;
})();

export const CMsgIPAddress = $root.CMsgIPAddress = (() => {

    /**
     * Properties of a CMsgIPAddress.
     * @exports ICMsgIPAddress
     * @interface ICMsgIPAddress
     * @property {number|null} [v4] CMsgIPAddress v4
     * @property {Uint8Array|null} [v6] CMsgIPAddress v6
     */

    /**
     * Constructs a new CMsgIPAddress.
     * @exports CMsgIPAddress
     * @classdesc Represents a CMsgIPAddress.
     * @implements ICMsgIPAddress
     * @constructor
     * @param {ICMsgIPAddress=} [properties] Properties to set
     */
    function CMsgIPAddress(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgIPAddress v4.
     * @member {number|null|undefined} v4
     * @memberof CMsgIPAddress
     * @instance
     */
    CMsgIPAddress.prototype.v4 = null;

    /**
     * CMsgIPAddress v6.
     * @member {Uint8Array|null|undefined} v6
     * @memberof CMsgIPAddress
     * @instance
     */
    CMsgIPAddress.prototype.v6 = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * CMsgIPAddress ip.
     * @member {"v4"|"v6"|undefined} ip
     * @memberof CMsgIPAddress
     * @instance
     */
    Object.defineProperty(CMsgIPAddress.prototype, "ip", {
        get: $util.oneOfGetter($oneOfFields = ["v4", "v6"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new CMsgIPAddress instance using the specified properties.
     * @function create
     * @memberof CMsgIPAddress
     * @static
     * @param {ICMsgIPAddress=} [properties] Properties to set
     * @returns {CMsgIPAddress} CMsgIPAddress instance
     */
    CMsgIPAddress.create = function create(properties) {
        return new CMsgIPAddress(properties);
    };

    /**
     * Encodes the specified CMsgIPAddress message. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
     * @function encode
     * @memberof CMsgIPAddress
     * @static
     * @param {ICMsgIPAddress} message CMsgIPAddress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgIPAddress.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.v4 != null && Object.hasOwnProperty.call(message, "v4"))
            writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.v4);
        if (message.v6 != null && Object.hasOwnProperty.call(message, "v6"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.v6);
        return writer;
    };

    /**
     * Encodes the specified CMsgIPAddress message, length delimited. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgIPAddress
     * @static
     * @param {ICMsgIPAddress} message CMsgIPAddress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgIPAddress.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgIPAddress message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgIPAddress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgIPAddress} CMsgIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgIPAddress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgIPAddress();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.v4 = reader.fixed32();
                    break;
                }
            case 2: {
                    message.v6 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgIPAddress message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgIPAddress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgIPAddress} CMsgIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgIPAddress.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgIPAddress message.
     * @function verify
     * @memberof CMsgIPAddress
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgIPAddress.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.v4 != null && message.hasOwnProperty("v4")) {
            properties.ip = 1;
            if (!$util.isInteger(message.v4))
                return "v4: integer expected";
        }
        if (message.v6 != null && message.hasOwnProperty("v6")) {
            if (properties.ip === 1)
                return "ip: multiple values";
            properties.ip = 1;
            if (!(message.v6 && typeof message.v6.length === "number" || $util.isString(message.v6)))
                return "v6: buffer expected";
        }
        return null;
    };

    /**
     * Creates a CMsgIPAddress message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgIPAddress
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgIPAddress} CMsgIPAddress
     */
    CMsgIPAddress.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgIPAddress)
            return object;
        let message = new $root.CMsgIPAddress();
        if (object.v4 != null)
            message.v4 = object.v4 >>> 0;
        if (object.v6 != null)
            if (typeof object.v6 === "string")
                $util.base64.decode(object.v6, message.v6 = $util.newBuffer($util.base64.length(object.v6)), 0);
            else if (object.v6.length >= 0)
                message.v6 = object.v6;
        return message;
    };

    /**
     * Creates a plain object from a CMsgIPAddress message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgIPAddress
     * @static
     * @param {CMsgIPAddress} message CMsgIPAddress
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgIPAddress.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.v4 != null && message.hasOwnProperty("v4")) {
            object.v4 = message.v4;
            if (options.oneofs)
                object.ip = "v4";
        }
        if (message.v6 != null && message.hasOwnProperty("v6")) {
            object.v6 = options.bytes === String ? $util.base64.encode(message.v6, 0, message.v6.length) : options.bytes === Array ? Array.prototype.slice.call(message.v6) : message.v6;
            if (options.oneofs)
                object.ip = "v6";
        }
        return object;
    };

    /**
     * Converts this CMsgIPAddress to JSON.
     * @function toJSON
     * @memberof CMsgIPAddress
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgIPAddress.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgIPAddress
     * @function getTypeUrl
     * @memberof CMsgIPAddress
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgIPAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgIPAddress";
    };

    return CMsgIPAddress;
})();

export const CMsgIPAddressBucket = $root.CMsgIPAddressBucket = (() => {

    /**
     * Properties of a CMsgIPAddressBucket.
     * @exports ICMsgIPAddressBucket
     * @interface ICMsgIPAddressBucket
     * @property {ICMsgIPAddress|null} [originalIpAddress] CMsgIPAddressBucket originalIpAddress
     * @property {number|Long|null} [bucket] CMsgIPAddressBucket bucket
     */

    /**
     * Constructs a new CMsgIPAddressBucket.
     * @exports CMsgIPAddressBucket
     * @classdesc Represents a CMsgIPAddressBucket.
     * @implements ICMsgIPAddressBucket
     * @constructor
     * @param {ICMsgIPAddressBucket=} [properties] Properties to set
     */
    function CMsgIPAddressBucket(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgIPAddressBucket originalIpAddress.
     * @member {ICMsgIPAddress|null|undefined} originalIpAddress
     * @memberof CMsgIPAddressBucket
     * @instance
     */
    CMsgIPAddressBucket.prototype.originalIpAddress = null;

    /**
     * CMsgIPAddressBucket bucket.
     * @member {number|Long} bucket
     * @memberof CMsgIPAddressBucket
     * @instance
     */
    CMsgIPAddressBucket.prototype.bucket = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CMsgIPAddressBucket instance using the specified properties.
     * @function create
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {ICMsgIPAddressBucket=} [properties] Properties to set
     * @returns {CMsgIPAddressBucket} CMsgIPAddressBucket instance
     */
    CMsgIPAddressBucket.create = function create(properties) {
        return new CMsgIPAddressBucket(properties);
    };

    /**
     * Encodes the specified CMsgIPAddressBucket message. Does not implicitly {@link CMsgIPAddressBucket.verify|verify} messages.
     * @function encode
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {ICMsgIPAddressBucket} message CMsgIPAddressBucket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgIPAddressBucket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.originalIpAddress != null && Object.hasOwnProperty.call(message, "originalIpAddress"))
            $root.CMsgIPAddress.encode(message.originalIpAddress, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.bucket != null && Object.hasOwnProperty.call(message, "bucket"))
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.bucket);
        return writer;
    };

    /**
     * Encodes the specified CMsgIPAddressBucket message, length delimited. Does not implicitly {@link CMsgIPAddressBucket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {ICMsgIPAddressBucket} message CMsgIPAddressBucket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgIPAddressBucket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgIPAddressBucket message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgIPAddressBucket} CMsgIPAddressBucket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgIPAddressBucket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgIPAddressBucket();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.originalIpAddress = $root.CMsgIPAddress.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.bucket = reader.fixed64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgIPAddressBucket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgIPAddressBucket} CMsgIPAddressBucket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgIPAddressBucket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgIPAddressBucket message.
     * @function verify
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgIPAddressBucket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.originalIpAddress != null && message.hasOwnProperty("originalIpAddress")) {
            let error = $root.CMsgIPAddress.verify(message.originalIpAddress);
            if (error)
                return "originalIpAddress." + error;
        }
        if (message.bucket != null && message.hasOwnProperty("bucket"))
            if (!$util.isInteger(message.bucket) && !(message.bucket && $util.isInteger(message.bucket.low) && $util.isInteger(message.bucket.high)))
                return "bucket: integer|Long expected";
        return null;
    };

    /**
     * Creates a CMsgIPAddressBucket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgIPAddressBucket} CMsgIPAddressBucket
     */
    CMsgIPAddressBucket.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgIPAddressBucket)
            return object;
        let message = new $root.CMsgIPAddressBucket();
        if (object.originalIpAddress != null) {
            if (typeof object.originalIpAddress !== "object")
                throw TypeError(".CMsgIPAddressBucket.originalIpAddress: object expected");
            message.originalIpAddress = $root.CMsgIPAddress.fromObject(object.originalIpAddress);
        }
        if (object.bucket != null)
            if ($util.Long)
                (message.bucket = $util.Long.fromValue(object.bucket)).unsigned = false;
            else if (typeof object.bucket === "string")
                message.bucket = parseInt(object.bucket, 10);
            else if (typeof object.bucket === "number")
                message.bucket = object.bucket;
            else if (typeof object.bucket === "object")
                message.bucket = new $util.LongBits(object.bucket.low >>> 0, object.bucket.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CMsgIPAddressBucket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {CMsgIPAddressBucket} message CMsgIPAddressBucket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgIPAddressBucket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.originalIpAddress = null;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.bucket = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.bucket = options.longs === String ? "0" : 0;
        }
        if (message.originalIpAddress != null && message.hasOwnProperty("originalIpAddress"))
            object.originalIpAddress = $root.CMsgIPAddress.toObject(message.originalIpAddress, options);
        if (message.bucket != null && message.hasOwnProperty("bucket"))
            if (typeof message.bucket === "number")
                object.bucket = options.longs === String ? String(message.bucket) : message.bucket;
            else
                object.bucket = options.longs === String ? $util.Long.prototype.toString.call(message.bucket) : options.longs === Number ? new $util.LongBits(message.bucket.low >>> 0, message.bucket.high >>> 0).toNumber() : message.bucket;
        return object;
    };

    /**
     * Converts this CMsgIPAddressBucket to JSON.
     * @function toJSON
     * @memberof CMsgIPAddressBucket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgIPAddressBucket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgIPAddressBucket
     * @function getTypeUrl
     * @memberof CMsgIPAddressBucket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgIPAddressBucket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgIPAddressBucket";
    };

    return CMsgIPAddressBucket;
})();

export const CMsgGCRoutingProtoBufHeader = $root.CMsgGCRoutingProtoBufHeader = (() => {

    /**
     * Properties of a CMsgGCRoutingProtoBufHeader.
     * @exports ICMsgGCRoutingProtoBufHeader
     * @interface ICMsgGCRoutingProtoBufHeader
     * @property {number|Long|null} [dstGcidQueue] CMsgGCRoutingProtoBufHeader dstGcidQueue
     * @property {number|null} [dstGcDirIndex] CMsgGCRoutingProtoBufHeader dstGcDirIndex
     */

    /**
     * Constructs a new CMsgGCRoutingProtoBufHeader.
     * @exports CMsgGCRoutingProtoBufHeader
     * @classdesc Represents a CMsgGCRoutingProtoBufHeader.
     * @implements ICMsgGCRoutingProtoBufHeader
     * @constructor
     * @param {ICMsgGCRoutingProtoBufHeader=} [properties] Properties to set
     */
    function CMsgGCRoutingProtoBufHeader(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgGCRoutingProtoBufHeader dstGcidQueue.
     * @member {number|Long} dstGcidQueue
     * @memberof CMsgGCRoutingProtoBufHeader
     * @instance
     */
    CMsgGCRoutingProtoBufHeader.prototype.dstGcidQueue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CMsgGCRoutingProtoBufHeader dstGcDirIndex.
     * @member {number} dstGcDirIndex
     * @memberof CMsgGCRoutingProtoBufHeader
     * @instance
     */
    CMsgGCRoutingProtoBufHeader.prototype.dstGcDirIndex = 0;

    /**
     * Creates a new CMsgGCRoutingProtoBufHeader instance using the specified properties.
     * @function create
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {ICMsgGCRoutingProtoBufHeader=} [properties] Properties to set
     * @returns {CMsgGCRoutingProtoBufHeader} CMsgGCRoutingProtoBufHeader instance
     */
    CMsgGCRoutingProtoBufHeader.create = function create(properties) {
        return new CMsgGCRoutingProtoBufHeader(properties);
    };

    /**
     * Encodes the specified CMsgGCRoutingProtoBufHeader message. Does not implicitly {@link CMsgGCRoutingProtoBufHeader.verify|verify} messages.
     * @function encode
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {ICMsgGCRoutingProtoBufHeader} message CMsgGCRoutingProtoBufHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgGCRoutingProtoBufHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dstGcidQueue != null && Object.hasOwnProperty.call(message, "dstGcidQueue"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dstGcidQueue);
        if (message.dstGcDirIndex != null && Object.hasOwnProperty.call(message, "dstGcDirIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dstGcDirIndex);
        return writer;
    };

    /**
     * Encodes the specified CMsgGCRoutingProtoBufHeader message, length delimited. Does not implicitly {@link CMsgGCRoutingProtoBufHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {ICMsgGCRoutingProtoBufHeader} message CMsgGCRoutingProtoBufHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgGCRoutingProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgGCRoutingProtoBufHeader message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgGCRoutingProtoBufHeader} CMsgGCRoutingProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgGCRoutingProtoBufHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCRoutingProtoBufHeader();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.dstGcidQueue = reader.uint64();
                    break;
                }
            case 2: {
                    message.dstGcDirIndex = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgGCRoutingProtoBufHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgGCRoutingProtoBufHeader} CMsgGCRoutingProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgGCRoutingProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgGCRoutingProtoBufHeader message.
     * @function verify
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgGCRoutingProtoBufHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dstGcidQueue != null && message.hasOwnProperty("dstGcidQueue"))
            if (!$util.isInteger(message.dstGcidQueue) && !(message.dstGcidQueue && $util.isInteger(message.dstGcidQueue.low) && $util.isInteger(message.dstGcidQueue.high)))
                return "dstGcidQueue: integer|Long expected";
        if (message.dstGcDirIndex != null && message.hasOwnProperty("dstGcDirIndex"))
            if (!$util.isInteger(message.dstGcDirIndex))
                return "dstGcDirIndex: integer expected";
        return null;
    };

    /**
     * Creates a CMsgGCRoutingProtoBufHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgGCRoutingProtoBufHeader} CMsgGCRoutingProtoBufHeader
     */
    CMsgGCRoutingProtoBufHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgGCRoutingProtoBufHeader)
            return object;
        let message = new $root.CMsgGCRoutingProtoBufHeader();
        if (object.dstGcidQueue != null)
            if ($util.Long)
                (message.dstGcidQueue = $util.Long.fromValue(object.dstGcidQueue)).unsigned = true;
            else if (typeof object.dstGcidQueue === "string")
                message.dstGcidQueue = parseInt(object.dstGcidQueue, 10);
            else if (typeof object.dstGcidQueue === "number")
                message.dstGcidQueue = object.dstGcidQueue;
            else if (typeof object.dstGcidQueue === "object")
                message.dstGcidQueue = new $util.LongBits(object.dstGcidQueue.low >>> 0, object.dstGcidQueue.high >>> 0).toNumber(true);
        if (object.dstGcDirIndex != null)
            message.dstGcDirIndex = object.dstGcDirIndex >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CMsgGCRoutingProtoBufHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {CMsgGCRoutingProtoBufHeader} message CMsgGCRoutingProtoBufHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgGCRoutingProtoBufHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.dstGcidQueue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.dstGcidQueue = options.longs === String ? "0" : 0;
            object.dstGcDirIndex = 0;
        }
        if (message.dstGcidQueue != null && message.hasOwnProperty("dstGcidQueue"))
            if (typeof message.dstGcidQueue === "number")
                object.dstGcidQueue = options.longs === String ? String(message.dstGcidQueue) : message.dstGcidQueue;
            else
                object.dstGcidQueue = options.longs === String ? $util.Long.prototype.toString.call(message.dstGcidQueue) : options.longs === Number ? new $util.LongBits(message.dstGcidQueue.low >>> 0, message.dstGcidQueue.high >>> 0).toNumber(true) : message.dstGcidQueue;
        if (message.dstGcDirIndex != null && message.hasOwnProperty("dstGcDirIndex"))
            object.dstGcDirIndex = message.dstGcDirIndex;
        return object;
    };

    /**
     * Converts this CMsgGCRoutingProtoBufHeader to JSON.
     * @function toJSON
     * @memberof CMsgGCRoutingProtoBufHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgGCRoutingProtoBufHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgGCRoutingProtoBufHeader
     * @function getTypeUrl
     * @memberof CMsgGCRoutingProtoBufHeader
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgGCRoutingProtoBufHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgGCRoutingProtoBufHeader";
    };

    return CMsgGCRoutingProtoBufHeader;
})();

export const CMsgProtoBufHeader = $root.CMsgProtoBufHeader = (() => {

    /**
     * Properties of a CMsgProtoBufHeader.
     * @exports ICMsgProtoBufHeader
     * @interface ICMsgProtoBufHeader
     * @property {number|Long|null} [steamid] CMsgProtoBufHeader steamid
     * @property {number|null} [clientSessionid] CMsgProtoBufHeader clientSessionid
     * @property {number|null} [routingAppid] CMsgProtoBufHeader routingAppid
     * @property {number|Long|null} [jobidSource] CMsgProtoBufHeader jobidSource
     * @property {number|Long|null} [jobidTarget] CMsgProtoBufHeader jobidTarget
     * @property {string|null} [targetJobName] CMsgProtoBufHeader targetJobName
     * @property {number|null} [seqNum] CMsgProtoBufHeader seqNum
     * @property {number|null} [eresult] CMsgProtoBufHeader eresult
     * @property {string|null} [errorMessage] CMsgProtoBufHeader errorMessage
     * @property {number|null} [authAccountFlags] CMsgProtoBufHeader authAccountFlags
     * @property {number|null} [tokenSource] CMsgProtoBufHeader tokenSource
     * @property {boolean|null} [adminSpoofingUser] CMsgProtoBufHeader adminSpoofingUser
     * @property {number|null} [transportError] CMsgProtoBufHeader transportError
     * @property {number|Long|null} [messageid] CMsgProtoBufHeader messageid
     * @property {number|null} [publisherGroupId] CMsgProtoBufHeader publisherGroupId
     * @property {number|null} [sysid] CMsgProtoBufHeader sysid
     * @property {number|Long|null} [traceTag] CMsgProtoBufHeader traceTag
     * @property {number|null} [webapiKeyId] CMsgProtoBufHeader webapiKeyId
     * @property {boolean|null} [isFromExternalSource] CMsgProtoBufHeader isFromExternalSource
     * @property {Array.<number>|null} [forwardToSysid] CMsgProtoBufHeader forwardToSysid
     * @property {number|null} [cmSysid] CMsgProtoBufHeader cmSysid
     * @property {number|null} [launcherType] CMsgProtoBufHeader launcherType
     * @property {number|null} [realm] CMsgProtoBufHeader realm
     * @property {number|null} [timeoutMs] CMsgProtoBufHeader timeoutMs
     * @property {string|null} [debugSource] CMsgProtoBufHeader debugSource
     * @property {number|null} [debugSourceStringIndex] CMsgProtoBufHeader debugSourceStringIndex
     * @property {number|Long|null} [tokenId] CMsgProtoBufHeader tokenId
     * @property {ICMsgGCRoutingProtoBufHeader|null} [routingGc] CMsgProtoBufHeader routingGc
     * @property {CMsgProtoBufHeader.ESessionDisposition|null} [sessionDisposition] CMsgProtoBufHeader sessionDisposition
     * @property {string|null} [wgToken] CMsgProtoBufHeader wgToken
     * @property {string|null} [webuiAuthKey] CMsgProtoBufHeader webuiAuthKey
     * @property {Array.<number>|null} [excludeClientSessionids] CMsgProtoBufHeader excludeClientSessionids
     * @property {number|null} [ip] CMsgProtoBufHeader ip
     * @property {Uint8Array|null} [ipV6] CMsgProtoBufHeader ipV6
     */

    /**
     * Constructs a new CMsgProtoBufHeader.
     * @exports CMsgProtoBufHeader
     * @classdesc Represents a CMsgProtoBufHeader.
     * @implements ICMsgProtoBufHeader
     * @constructor
     * @param {ICMsgProtoBufHeader=} [properties] Properties to set
     */
    function CMsgProtoBufHeader(properties) {
        this.forwardToSysid = [];
        this.excludeClientSessionids = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgProtoBufHeader steamid.
     * @member {number|Long} steamid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CMsgProtoBufHeader clientSessionid.
     * @member {number} clientSessionid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.clientSessionid = 0;

    /**
     * CMsgProtoBufHeader routingAppid.
     * @member {number} routingAppid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.routingAppid = 0;

    /**
     * CMsgProtoBufHeader jobidSource.
     * @member {number|Long} jobidSource
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.jobidSource = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;

    /**
     * CMsgProtoBufHeader jobidTarget.
     * @member {number|Long} jobidTarget
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.jobidTarget = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;

    /**
     * CMsgProtoBufHeader targetJobName.
     * @member {string} targetJobName
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.targetJobName = "";

    /**
     * CMsgProtoBufHeader seqNum.
     * @member {number} seqNum
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.seqNum = 0;

    /**
     * CMsgProtoBufHeader eresult.
     * @member {number} eresult
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.eresult = 2;

    /**
     * CMsgProtoBufHeader errorMessage.
     * @member {string} errorMessage
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.errorMessage = "";

    /**
     * CMsgProtoBufHeader authAccountFlags.
     * @member {number} authAccountFlags
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.authAccountFlags = 0;

    /**
     * CMsgProtoBufHeader tokenSource.
     * @member {number} tokenSource
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.tokenSource = 0;

    /**
     * CMsgProtoBufHeader adminSpoofingUser.
     * @member {boolean} adminSpoofingUser
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.adminSpoofingUser = false;

    /**
     * CMsgProtoBufHeader transportError.
     * @member {number} transportError
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.transportError = 1;

    /**
     * CMsgProtoBufHeader messageid.
     * @member {number|Long} messageid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.messageid = $util.Long ? $util.Long.fromBits(-1,-1,true) : 18446744073709552000;

    /**
     * CMsgProtoBufHeader publisherGroupId.
     * @member {number} publisherGroupId
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.publisherGroupId = 0;

    /**
     * CMsgProtoBufHeader sysid.
     * @member {number} sysid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.sysid = 0;

    /**
     * CMsgProtoBufHeader traceTag.
     * @member {number|Long} traceTag
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.traceTag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CMsgProtoBufHeader webapiKeyId.
     * @member {number} webapiKeyId
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.webapiKeyId = 0;

    /**
     * CMsgProtoBufHeader isFromExternalSource.
     * @member {boolean} isFromExternalSource
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.isFromExternalSource = false;

    /**
     * CMsgProtoBufHeader forwardToSysid.
     * @member {Array.<number>} forwardToSysid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.forwardToSysid = $util.emptyArray;

    /**
     * CMsgProtoBufHeader cmSysid.
     * @member {number} cmSysid
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.cmSysid = 0;

    /**
     * CMsgProtoBufHeader launcherType.
     * @member {number} launcherType
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.launcherType = 0;

    /**
     * CMsgProtoBufHeader realm.
     * @member {number} realm
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.realm = 0;

    /**
     * CMsgProtoBufHeader timeoutMs.
     * @member {number} timeoutMs
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.timeoutMs = -1;

    /**
     * CMsgProtoBufHeader debugSource.
     * @member {string} debugSource
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.debugSource = "";

    /**
     * CMsgProtoBufHeader debugSourceStringIndex.
     * @member {number} debugSourceStringIndex
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.debugSourceStringIndex = 0;

    /**
     * CMsgProtoBufHeader tokenId.
     * @member {number|Long} tokenId
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.tokenId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CMsgProtoBufHeader routingGc.
     * @member {ICMsgGCRoutingProtoBufHeader|null|undefined} routingGc
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.routingGc = null;

    /**
     * CMsgProtoBufHeader sessionDisposition.
     * @member {CMsgProtoBufHeader.ESessionDisposition} sessionDisposition
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.sessionDisposition = 0;

    /**
     * CMsgProtoBufHeader wgToken.
     * @member {string} wgToken
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.wgToken = "";

    /**
     * CMsgProtoBufHeader webuiAuthKey.
     * @member {string} webuiAuthKey
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.webuiAuthKey = "";

    /**
     * CMsgProtoBufHeader excludeClientSessionids.
     * @member {Array.<number>} excludeClientSessionids
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.excludeClientSessionids = $util.emptyArray;

    /**
     * CMsgProtoBufHeader ip.
     * @member {number|null|undefined} ip
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.ip = null;

    /**
     * CMsgProtoBufHeader ipV6.
     * @member {Uint8Array|null|undefined} ipV6
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    CMsgProtoBufHeader.prototype.ipV6 = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * CMsgProtoBufHeader ipAddr.
     * @member {"ip"|"ipV6"|undefined} ipAddr
     * @memberof CMsgProtoBufHeader
     * @instance
     */
    Object.defineProperty(CMsgProtoBufHeader.prototype, "ipAddr", {
        get: $util.oneOfGetter($oneOfFields = ["ip", "ipV6"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new CMsgProtoBufHeader instance using the specified properties.
     * @function create
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {ICMsgProtoBufHeader=} [properties] Properties to set
     * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader instance
     */
    CMsgProtoBufHeader.create = function create(properties) {
        return new CMsgProtoBufHeader(properties);
    };

    /**
     * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @function encode
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgProtoBufHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.clientSessionid != null && Object.hasOwnProperty.call(message, "clientSessionid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clientSessionid);
        if (message.routingAppid != null && Object.hasOwnProperty.call(message, "routingAppid"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.routingAppid);
        if (message.jobidSource != null && Object.hasOwnProperty.call(message, "jobidSource"))
            writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.jobidSource);
        if (message.jobidTarget != null && Object.hasOwnProperty.call(message, "jobidTarget"))
            writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.jobidTarget);
        if (message.targetJobName != null && Object.hasOwnProperty.call(message, "targetJobName"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.targetJobName);
        if (message.eresult != null && Object.hasOwnProperty.call(message, "eresult"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.eresult);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.errorMessage);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ip);
        if (message.authAccountFlags != null && Object.hasOwnProperty.call(message, "authAccountFlags"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.authAccountFlags);
        if (message.transportError != null && Object.hasOwnProperty.call(message, "transportError"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.transportError);
        if (message.messageid != null && Object.hasOwnProperty.call(message, "messageid"))
            writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.messageid);
        if (message.publisherGroupId != null && Object.hasOwnProperty.call(message, "publisherGroupId"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.publisherGroupId);
        if (message.sysid != null && Object.hasOwnProperty.call(message, "sysid"))
            writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.sysid);
        if (message.traceTag != null && Object.hasOwnProperty.call(message, "traceTag"))
            writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.traceTag);
        if (message.tokenSource != null && Object.hasOwnProperty.call(message, "tokenSource"))
            writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.tokenSource);
        if (message.adminSpoofingUser != null && Object.hasOwnProperty.call(message, "adminSpoofingUser"))
            writer.uint32(/* id 23, wireType 0 =*/184).bool(message.adminSpoofingUser);
        if (message.seqNum != null && Object.hasOwnProperty.call(message, "seqNum"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.seqNum);
        if (message.webapiKeyId != null && Object.hasOwnProperty.call(message, "webapiKeyId"))
            writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.webapiKeyId);
        if (message.isFromExternalSource != null && Object.hasOwnProperty.call(message, "isFromExternalSource"))
            writer.uint32(/* id 26, wireType 0 =*/208).bool(message.isFromExternalSource);
        if (message.forwardToSysid != null && message.forwardToSysid.length)
            for (let i = 0; i < message.forwardToSysid.length; ++i)
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.forwardToSysid[i]);
        if (message.cmSysid != null && Object.hasOwnProperty.call(message, "cmSysid"))
            writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.cmSysid);
        if (message.ipV6 != null && Object.hasOwnProperty.call(message, "ipV6"))
            writer.uint32(/* id 29, wireType 2 =*/234).bytes(message.ipV6);
        if (message.launcherType != null && Object.hasOwnProperty.call(message, "launcherType"))
            writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.launcherType);
        if (message.realm != null && Object.hasOwnProperty.call(message, "realm"))
            writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.realm);
        if (message.timeoutMs != null && Object.hasOwnProperty.call(message, "timeoutMs"))
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.timeoutMs);
        if (message.debugSource != null && Object.hasOwnProperty.call(message, "debugSource"))
            writer.uint32(/* id 34, wireType 2 =*/274).string(message.debugSource);
        if (message.debugSourceStringIndex != null && Object.hasOwnProperty.call(message, "debugSourceStringIndex"))
            writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.debugSourceStringIndex);
        if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
            writer.uint32(/* id 36, wireType 0 =*/288).uint64(message.tokenId);
        if (message.routingGc != null && Object.hasOwnProperty.call(message, "routingGc"))
            $root.CMsgGCRoutingProtoBufHeader.encode(message.routingGc, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
        if (message.sessionDisposition != null && Object.hasOwnProperty.call(message, "sessionDisposition"))
            writer.uint32(/* id 38, wireType 0 =*/304).int32(message.sessionDisposition);
        if (message.wgToken != null && Object.hasOwnProperty.call(message, "wgToken"))
            writer.uint32(/* id 39, wireType 2 =*/314).string(message.wgToken);
        if (message.webuiAuthKey != null && Object.hasOwnProperty.call(message, "webuiAuthKey"))
            writer.uint32(/* id 40, wireType 2 =*/322).string(message.webuiAuthKey);
        if (message.excludeClientSessionids != null && message.excludeClientSessionids.length)
            for (let i = 0; i < message.excludeClientSessionids.length; ++i)
                writer.uint32(/* id 41, wireType 0 =*/328).int32(message.excludeClientSessionids[i]);
        return writer;
    };

    /**
     * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgProtoBufHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtoBufHeader();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.clientSessionid = reader.int32();
                    break;
                }
            case 3: {
                    message.routingAppid = reader.uint32();
                    break;
                }
            case 10: {
                    message.jobidSource = reader.fixed64();
                    break;
                }
            case 11: {
                    message.jobidTarget = reader.fixed64();
                    break;
                }
            case 12: {
                    message.targetJobName = reader.string();
                    break;
                }
            case 24: {
                    message.seqNum = reader.int32();
                    break;
                }
            case 13: {
                    message.eresult = reader.int32();
                    break;
                }
            case 14: {
                    message.errorMessage = reader.string();
                    break;
                }
            case 16: {
                    message.authAccountFlags = reader.uint32();
                    break;
                }
            case 22: {
                    message.tokenSource = reader.uint32();
                    break;
                }
            case 23: {
                    message.adminSpoofingUser = reader.bool();
                    break;
                }
            case 17: {
                    message.transportError = reader.int32();
                    break;
                }
            case 18: {
                    message.messageid = reader.uint64();
                    break;
                }
            case 19: {
                    message.publisherGroupId = reader.uint32();
                    break;
                }
            case 20: {
                    message.sysid = reader.uint32();
                    break;
                }
            case 21: {
                    message.traceTag = reader.uint64();
                    break;
                }
            case 25: {
                    message.webapiKeyId = reader.uint32();
                    break;
                }
            case 26: {
                    message.isFromExternalSource = reader.bool();
                    break;
                }
            case 27: {
                    if (!(message.forwardToSysid && message.forwardToSysid.length))
                        message.forwardToSysid = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.forwardToSysid.push(reader.uint32());
                    } else
                        message.forwardToSysid.push(reader.uint32());
                    break;
                }
            case 28: {
                    message.cmSysid = reader.uint32();
                    break;
                }
            case 31: {
                    message.launcherType = reader.uint32();
                    break;
                }
            case 32: {
                    message.realm = reader.uint32();
                    break;
                }
            case 33: {
                    message.timeoutMs = reader.int32();
                    break;
                }
            case 34: {
                    message.debugSource = reader.string();
                    break;
                }
            case 35: {
                    message.debugSourceStringIndex = reader.uint32();
                    break;
                }
            case 36: {
                    message.tokenId = reader.uint64();
                    break;
                }
            case 37: {
                    message.routingGc = $root.CMsgGCRoutingProtoBufHeader.decode(reader, reader.uint32());
                    break;
                }
            case 38: {
                    message.sessionDisposition = reader.int32();
                    break;
                }
            case 39: {
                    message.wgToken = reader.string();
                    break;
                }
            case 40: {
                    message.webuiAuthKey = reader.string();
                    break;
                }
            case 41: {
                    if (!(message.excludeClientSessionids && message.excludeClientSessionids.length))
                        message.excludeClientSessionids = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.excludeClientSessionids.push(reader.int32());
                    } else
                        message.excludeClientSessionids.push(reader.int32());
                    break;
                }
            case 15: {
                    message.ip = reader.uint32();
                    break;
                }
            case 29: {
                    message.ipV6 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgProtoBufHeader message.
     * @function verify
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgProtoBufHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.clientSessionid != null && message.hasOwnProperty("clientSessionid"))
            if (!$util.isInteger(message.clientSessionid))
                return "clientSessionid: integer expected";
        if (message.routingAppid != null && message.hasOwnProperty("routingAppid"))
            if (!$util.isInteger(message.routingAppid))
                return "routingAppid: integer expected";
        if (message.jobidSource != null && message.hasOwnProperty("jobidSource"))
            if (!$util.isInteger(message.jobidSource) && !(message.jobidSource && $util.isInteger(message.jobidSource.low) && $util.isInteger(message.jobidSource.high)))
                return "jobidSource: integer|Long expected";
        if (message.jobidTarget != null && message.hasOwnProperty("jobidTarget"))
            if (!$util.isInteger(message.jobidTarget) && !(message.jobidTarget && $util.isInteger(message.jobidTarget.low) && $util.isInteger(message.jobidTarget.high)))
                return "jobidTarget: integer|Long expected";
        if (message.targetJobName != null && message.hasOwnProperty("targetJobName"))
            if (!$util.isString(message.targetJobName))
                return "targetJobName: string expected";
        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
            if (!$util.isInteger(message.seqNum))
                return "seqNum: integer expected";
        if (message.eresult != null && message.hasOwnProperty("eresult"))
            if (!$util.isInteger(message.eresult))
                return "eresult: integer expected";
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            if (!$util.isString(message.errorMessage))
                return "errorMessage: string expected";
        if (message.authAccountFlags != null && message.hasOwnProperty("authAccountFlags"))
            if (!$util.isInteger(message.authAccountFlags))
                return "authAccountFlags: integer expected";
        if (message.tokenSource != null && message.hasOwnProperty("tokenSource"))
            if (!$util.isInteger(message.tokenSource))
                return "tokenSource: integer expected";
        if (message.adminSpoofingUser != null && message.hasOwnProperty("adminSpoofingUser"))
            if (typeof message.adminSpoofingUser !== "boolean")
                return "adminSpoofingUser: boolean expected";
        if (message.transportError != null && message.hasOwnProperty("transportError"))
            if (!$util.isInteger(message.transportError))
                return "transportError: integer expected";
        if (message.messageid != null && message.hasOwnProperty("messageid"))
            if (!$util.isInteger(message.messageid) && !(message.messageid && $util.isInteger(message.messageid.low) && $util.isInteger(message.messageid.high)))
                return "messageid: integer|Long expected";
        if (message.publisherGroupId != null && message.hasOwnProperty("publisherGroupId"))
            if (!$util.isInteger(message.publisherGroupId))
                return "publisherGroupId: integer expected";
        if (message.sysid != null && message.hasOwnProperty("sysid"))
            if (!$util.isInteger(message.sysid))
                return "sysid: integer expected";
        if (message.traceTag != null && message.hasOwnProperty("traceTag"))
            if (!$util.isInteger(message.traceTag) && !(message.traceTag && $util.isInteger(message.traceTag.low) && $util.isInteger(message.traceTag.high)))
                return "traceTag: integer|Long expected";
        if (message.webapiKeyId != null && message.hasOwnProperty("webapiKeyId"))
            if (!$util.isInteger(message.webapiKeyId))
                return "webapiKeyId: integer expected";
        if (message.isFromExternalSource != null && message.hasOwnProperty("isFromExternalSource"))
            if (typeof message.isFromExternalSource !== "boolean")
                return "isFromExternalSource: boolean expected";
        if (message.forwardToSysid != null && message.hasOwnProperty("forwardToSysid")) {
            if (!Array.isArray(message.forwardToSysid))
                return "forwardToSysid: array expected";
            for (let i = 0; i < message.forwardToSysid.length; ++i)
                if (!$util.isInteger(message.forwardToSysid[i]))
                    return "forwardToSysid: integer[] expected";
        }
        if (message.cmSysid != null && message.hasOwnProperty("cmSysid"))
            if (!$util.isInteger(message.cmSysid))
                return "cmSysid: integer expected";
        if (message.launcherType != null && message.hasOwnProperty("launcherType"))
            if (!$util.isInteger(message.launcherType))
                return "launcherType: integer expected";
        if (message.realm != null && message.hasOwnProperty("realm"))
            if (!$util.isInteger(message.realm))
                return "realm: integer expected";
        if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
            if (!$util.isInteger(message.timeoutMs))
                return "timeoutMs: integer expected";
        if (message.debugSource != null && message.hasOwnProperty("debugSource"))
            if (!$util.isString(message.debugSource))
                return "debugSource: string expected";
        if (message.debugSourceStringIndex != null && message.hasOwnProperty("debugSourceStringIndex"))
            if (!$util.isInteger(message.debugSourceStringIndex))
                return "debugSourceStringIndex: integer expected";
        if (message.tokenId != null && message.hasOwnProperty("tokenId"))
            if (!$util.isInteger(message.tokenId) && !(message.tokenId && $util.isInteger(message.tokenId.low) && $util.isInteger(message.tokenId.high)))
                return "tokenId: integer|Long expected";
        if (message.routingGc != null && message.hasOwnProperty("routingGc")) {
            let error = $root.CMsgGCRoutingProtoBufHeader.verify(message.routingGc);
            if (error)
                return "routingGc." + error;
        }
        if (message.sessionDisposition != null && message.hasOwnProperty("sessionDisposition"))
            switch (message.sessionDisposition) {
            default:
                return "sessionDisposition: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.wgToken != null && message.hasOwnProperty("wgToken"))
            if (!$util.isString(message.wgToken))
                return "wgToken: string expected";
        if (message.webuiAuthKey != null && message.hasOwnProperty("webuiAuthKey"))
            if (!$util.isString(message.webuiAuthKey))
                return "webuiAuthKey: string expected";
        if (message.excludeClientSessionids != null && message.hasOwnProperty("excludeClientSessionids")) {
            if (!Array.isArray(message.excludeClientSessionids))
                return "excludeClientSessionids: array expected";
            for (let i = 0; i < message.excludeClientSessionids.length; ++i)
                if (!$util.isInteger(message.excludeClientSessionids[i]))
                    return "excludeClientSessionids: integer[] expected";
        }
        if (message.ip != null && message.hasOwnProperty("ip")) {
            properties.ipAddr = 1;
            if (!$util.isInteger(message.ip))
                return "ip: integer expected";
        }
        if (message.ipV6 != null && message.hasOwnProperty("ipV6")) {
            if (properties.ipAddr === 1)
                return "ipAddr: multiple values";
            properties.ipAddr = 1;
            if (!(message.ipV6 && typeof message.ipV6.length === "number" || $util.isString(message.ipV6)))
                return "ipV6: buffer expected";
        }
        return null;
    };

    /**
     * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
     */
    CMsgProtoBufHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgProtoBufHeader)
            return object;
        let message = new $root.CMsgProtoBufHeader();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.clientSessionid != null)
            message.clientSessionid = object.clientSessionid | 0;
        if (object.routingAppid != null)
            message.routingAppid = object.routingAppid >>> 0;
        if (object.jobidSource != null)
            if ($util.Long)
                (message.jobidSource = $util.Long.fromValue(object.jobidSource)).unsigned = false;
            else if (typeof object.jobidSource === "string")
                message.jobidSource = parseInt(object.jobidSource, 10);
            else if (typeof object.jobidSource === "number")
                message.jobidSource = object.jobidSource;
            else if (typeof object.jobidSource === "object")
                message.jobidSource = new $util.LongBits(object.jobidSource.low >>> 0, object.jobidSource.high >>> 0).toNumber();
        if (object.jobidTarget != null)
            if ($util.Long)
                (message.jobidTarget = $util.Long.fromValue(object.jobidTarget)).unsigned = false;
            else if (typeof object.jobidTarget === "string")
                message.jobidTarget = parseInt(object.jobidTarget, 10);
            else if (typeof object.jobidTarget === "number")
                message.jobidTarget = object.jobidTarget;
            else if (typeof object.jobidTarget === "object")
                message.jobidTarget = new $util.LongBits(object.jobidTarget.low >>> 0, object.jobidTarget.high >>> 0).toNumber();
        if (object.targetJobName != null)
            message.targetJobName = String(object.targetJobName);
        if (object.seqNum != null)
            message.seqNum = object.seqNum | 0;
        if (object.eresult != null)
            message.eresult = object.eresult | 0;
        if (object.errorMessage != null)
            message.errorMessage = String(object.errorMessage);
        if (object.authAccountFlags != null)
            message.authAccountFlags = object.authAccountFlags >>> 0;
        if (object.tokenSource != null)
            message.tokenSource = object.tokenSource >>> 0;
        if (object.adminSpoofingUser != null)
            message.adminSpoofingUser = Boolean(object.adminSpoofingUser);
        if (object.transportError != null)
            message.transportError = object.transportError | 0;
        if (object.messageid != null)
            if ($util.Long)
                (message.messageid = $util.Long.fromValue(object.messageid)).unsigned = true;
            else if (typeof object.messageid === "string")
                message.messageid = parseInt(object.messageid, 10);
            else if (typeof object.messageid === "number")
                message.messageid = object.messageid;
            else if (typeof object.messageid === "object")
                message.messageid = new $util.LongBits(object.messageid.low >>> 0, object.messageid.high >>> 0).toNumber(true);
        if (object.publisherGroupId != null)
            message.publisherGroupId = object.publisherGroupId >>> 0;
        if (object.sysid != null)
            message.sysid = object.sysid >>> 0;
        if (object.traceTag != null)
            if ($util.Long)
                (message.traceTag = $util.Long.fromValue(object.traceTag)).unsigned = true;
            else if (typeof object.traceTag === "string")
                message.traceTag = parseInt(object.traceTag, 10);
            else if (typeof object.traceTag === "number")
                message.traceTag = object.traceTag;
            else if (typeof object.traceTag === "object")
                message.traceTag = new $util.LongBits(object.traceTag.low >>> 0, object.traceTag.high >>> 0).toNumber(true);
        if (object.webapiKeyId != null)
            message.webapiKeyId = object.webapiKeyId >>> 0;
        if (object.isFromExternalSource != null)
            message.isFromExternalSource = Boolean(object.isFromExternalSource);
        if (object.forwardToSysid) {
            if (!Array.isArray(object.forwardToSysid))
                throw TypeError(".CMsgProtoBufHeader.forwardToSysid: array expected");
            message.forwardToSysid = [];
            for (let i = 0; i < object.forwardToSysid.length; ++i)
                message.forwardToSysid[i] = object.forwardToSysid[i] >>> 0;
        }
        if (object.cmSysid != null)
            message.cmSysid = object.cmSysid >>> 0;
        if (object.launcherType != null)
            message.launcherType = object.launcherType >>> 0;
        if (object.realm != null)
            message.realm = object.realm >>> 0;
        if (object.timeoutMs != null)
            message.timeoutMs = object.timeoutMs | 0;
        if (object.debugSource != null)
            message.debugSource = String(object.debugSource);
        if (object.debugSourceStringIndex != null)
            message.debugSourceStringIndex = object.debugSourceStringIndex >>> 0;
        if (object.tokenId != null)
            if ($util.Long)
                (message.tokenId = $util.Long.fromValue(object.tokenId)).unsigned = true;
            else if (typeof object.tokenId === "string")
                message.tokenId = parseInt(object.tokenId, 10);
            else if (typeof object.tokenId === "number")
                message.tokenId = object.tokenId;
            else if (typeof object.tokenId === "object")
                message.tokenId = new $util.LongBits(object.tokenId.low >>> 0, object.tokenId.high >>> 0).toNumber(true);
        if (object.routingGc != null) {
            if (typeof object.routingGc !== "object")
                throw TypeError(".CMsgProtoBufHeader.routingGc: object expected");
            message.routingGc = $root.CMsgGCRoutingProtoBufHeader.fromObject(object.routingGc);
        }
        switch (object.sessionDisposition) {
        default:
            if (typeof object.sessionDisposition === "number") {
                message.sessionDisposition = object.sessionDisposition;
                break;
            }
            break;
        case "k_ESessionDispositionNormal":
        case 0:
            message.sessionDisposition = 0;
            break;
        case "k_ESessionDispositionDisconnect":
        case 1:
            message.sessionDisposition = 1;
            break;
        }
        if (object.wgToken != null)
            message.wgToken = String(object.wgToken);
        if (object.webuiAuthKey != null)
            message.webuiAuthKey = String(object.webuiAuthKey);
        if (object.excludeClientSessionids) {
            if (!Array.isArray(object.excludeClientSessionids))
                throw TypeError(".CMsgProtoBufHeader.excludeClientSessionids: array expected");
            message.excludeClientSessionids = [];
            for (let i = 0; i < object.excludeClientSessionids.length; ++i)
                message.excludeClientSessionids[i] = object.excludeClientSessionids[i] | 0;
        }
        if (object.ip != null)
            message.ip = object.ip >>> 0;
        if (object.ipV6 != null)
            if (typeof object.ipV6 === "string")
                $util.base64.decode(object.ipV6, message.ipV6 = $util.newBuffer($util.base64.length(object.ipV6)), 0);
            else if (object.ipV6.length >= 0)
                message.ipV6 = object.ipV6;
        return message;
    };

    /**
     * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {CMsgProtoBufHeader} message CMsgProtoBufHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgProtoBufHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.forwardToSysid = [];
            object.excludeClientSessionids = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            object.clientSessionid = 0;
            object.routingAppid = 0;
            if ($util.Long) {
                let long = new $util.Long(-1, 2147483647, false);
                object.jobidSource = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.jobidSource = options.longs === String ? "9223372036854775807" : 9223372036854776000;
            if ($util.Long) {
                let long = new $util.Long(-1, 2147483647, false);
                object.jobidTarget = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.jobidTarget = options.longs === String ? "9223372036854775807" : 9223372036854776000;
            object.targetJobName = "";
            object.eresult = 2;
            object.errorMessage = "";
            object.authAccountFlags = 0;
            object.transportError = 1;
            if ($util.Long) {
                let long = new $util.Long(-1, -1, true);
                object.messageid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.messageid = options.longs === String ? "18446744073709551615" : 18446744073709552000;
            object.publisherGroupId = 0;
            object.sysid = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.traceTag = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.traceTag = options.longs === String ? "0" : 0;
            object.tokenSource = 0;
            object.adminSpoofingUser = false;
            object.seqNum = 0;
            object.webapiKeyId = 0;
            object.isFromExternalSource = false;
            object.cmSysid = 0;
            object.launcherType = 0;
            object.realm = 0;
            object.timeoutMs = -1;
            object.debugSource = "";
            object.debugSourceStringIndex = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.tokenId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tokenId = options.longs === String ? "0" : 0;
            object.routingGc = null;
            object.sessionDisposition = options.enums === String ? "k_ESessionDispositionNormal" : 0;
            object.wgToken = "";
            object.webuiAuthKey = "";
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.clientSessionid != null && message.hasOwnProperty("clientSessionid"))
            object.clientSessionid = message.clientSessionid;
        if (message.routingAppid != null && message.hasOwnProperty("routingAppid"))
            object.routingAppid = message.routingAppid;
        if (message.jobidSource != null && message.hasOwnProperty("jobidSource"))
            if (typeof message.jobidSource === "number")
                object.jobidSource = options.longs === String ? String(message.jobidSource) : message.jobidSource;
            else
                object.jobidSource = options.longs === String ? $util.Long.prototype.toString.call(message.jobidSource) : options.longs === Number ? new $util.LongBits(message.jobidSource.low >>> 0, message.jobidSource.high >>> 0).toNumber() : message.jobidSource;
        if (message.jobidTarget != null && message.hasOwnProperty("jobidTarget"))
            if (typeof message.jobidTarget === "number")
                object.jobidTarget = options.longs === String ? String(message.jobidTarget) : message.jobidTarget;
            else
                object.jobidTarget = options.longs === String ? $util.Long.prototype.toString.call(message.jobidTarget) : options.longs === Number ? new $util.LongBits(message.jobidTarget.low >>> 0, message.jobidTarget.high >>> 0).toNumber() : message.jobidTarget;
        if (message.targetJobName != null && message.hasOwnProperty("targetJobName"))
            object.targetJobName = message.targetJobName;
        if (message.eresult != null && message.hasOwnProperty("eresult"))
            object.eresult = message.eresult;
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            object.errorMessage = message.errorMessage;
        if (message.ip != null && message.hasOwnProperty("ip")) {
            object.ip = message.ip;
            if (options.oneofs)
                object.ipAddr = "ip";
        }
        if (message.authAccountFlags != null && message.hasOwnProperty("authAccountFlags"))
            object.authAccountFlags = message.authAccountFlags;
        if (message.transportError != null && message.hasOwnProperty("transportError"))
            object.transportError = message.transportError;
        if (message.messageid != null && message.hasOwnProperty("messageid"))
            if (typeof message.messageid === "number")
                object.messageid = options.longs === String ? String(message.messageid) : message.messageid;
            else
                object.messageid = options.longs === String ? $util.Long.prototype.toString.call(message.messageid) : options.longs === Number ? new $util.LongBits(message.messageid.low >>> 0, message.messageid.high >>> 0).toNumber(true) : message.messageid;
        if (message.publisherGroupId != null && message.hasOwnProperty("publisherGroupId"))
            object.publisherGroupId = message.publisherGroupId;
        if (message.sysid != null && message.hasOwnProperty("sysid"))
            object.sysid = message.sysid;
        if (message.traceTag != null && message.hasOwnProperty("traceTag"))
            if (typeof message.traceTag === "number")
                object.traceTag = options.longs === String ? String(message.traceTag) : message.traceTag;
            else
                object.traceTag = options.longs === String ? $util.Long.prototype.toString.call(message.traceTag) : options.longs === Number ? new $util.LongBits(message.traceTag.low >>> 0, message.traceTag.high >>> 0).toNumber(true) : message.traceTag;
        if (message.tokenSource != null && message.hasOwnProperty("tokenSource"))
            object.tokenSource = message.tokenSource;
        if (message.adminSpoofingUser != null && message.hasOwnProperty("adminSpoofingUser"))
            object.adminSpoofingUser = message.adminSpoofingUser;
        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
            object.seqNum = message.seqNum;
        if (message.webapiKeyId != null && message.hasOwnProperty("webapiKeyId"))
            object.webapiKeyId = message.webapiKeyId;
        if (message.isFromExternalSource != null && message.hasOwnProperty("isFromExternalSource"))
            object.isFromExternalSource = message.isFromExternalSource;
        if (message.forwardToSysid && message.forwardToSysid.length) {
            object.forwardToSysid = [];
            for (let j = 0; j < message.forwardToSysid.length; ++j)
                object.forwardToSysid[j] = message.forwardToSysid[j];
        }
        if (message.cmSysid != null && message.hasOwnProperty("cmSysid"))
            object.cmSysid = message.cmSysid;
        if (message.ipV6 != null && message.hasOwnProperty("ipV6")) {
            object.ipV6 = options.bytes === String ? $util.base64.encode(message.ipV6, 0, message.ipV6.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipV6) : message.ipV6;
            if (options.oneofs)
                object.ipAddr = "ipV6";
        }
        if (message.launcherType != null && message.hasOwnProperty("launcherType"))
            object.launcherType = message.launcherType;
        if (message.realm != null && message.hasOwnProperty("realm"))
            object.realm = message.realm;
        if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
            object.timeoutMs = message.timeoutMs;
        if (message.debugSource != null && message.hasOwnProperty("debugSource"))
            object.debugSource = message.debugSource;
        if (message.debugSourceStringIndex != null && message.hasOwnProperty("debugSourceStringIndex"))
            object.debugSourceStringIndex = message.debugSourceStringIndex;
        if (message.tokenId != null && message.hasOwnProperty("tokenId"))
            if (typeof message.tokenId === "number")
                object.tokenId = options.longs === String ? String(message.tokenId) : message.tokenId;
            else
                object.tokenId = options.longs === String ? $util.Long.prototype.toString.call(message.tokenId) : options.longs === Number ? new $util.LongBits(message.tokenId.low >>> 0, message.tokenId.high >>> 0).toNumber(true) : message.tokenId;
        if (message.routingGc != null && message.hasOwnProperty("routingGc"))
            object.routingGc = $root.CMsgGCRoutingProtoBufHeader.toObject(message.routingGc, options);
        if (message.sessionDisposition != null && message.hasOwnProperty("sessionDisposition"))
            object.sessionDisposition = options.enums === String ? $root.CMsgProtoBufHeader.ESessionDisposition[message.sessionDisposition] === undefined ? message.sessionDisposition : $root.CMsgProtoBufHeader.ESessionDisposition[message.sessionDisposition] : message.sessionDisposition;
        if (message.wgToken != null && message.hasOwnProperty("wgToken"))
            object.wgToken = message.wgToken;
        if (message.webuiAuthKey != null && message.hasOwnProperty("webuiAuthKey"))
            object.webuiAuthKey = message.webuiAuthKey;
        if (message.excludeClientSessionids && message.excludeClientSessionids.length) {
            object.excludeClientSessionids = [];
            for (let j = 0; j < message.excludeClientSessionids.length; ++j)
                object.excludeClientSessionids[j] = message.excludeClientSessionids[j];
        }
        return object;
    };

    /**
     * Converts this CMsgProtoBufHeader to JSON.
     * @function toJSON
     * @memberof CMsgProtoBufHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgProtoBufHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgProtoBufHeader
     * @function getTypeUrl
     * @memberof CMsgProtoBufHeader
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgProtoBufHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgProtoBufHeader";
    };

    /**
     * ESessionDisposition enum.
     * @name CMsgProtoBufHeader.ESessionDisposition
     * @enum {number}
     * @property {number} k_ESessionDispositionNormal=0 k_ESessionDispositionNormal value
     * @property {number} k_ESessionDispositionDisconnect=1 k_ESessionDispositionDisconnect value
     */
    CMsgProtoBufHeader.ESessionDisposition = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ESessionDispositionNormal"] = 0;
        values[valuesById[1] = "k_ESessionDispositionDisconnect"] = 1;
        return values;
    })();

    return CMsgProtoBufHeader;
})();

export const CMsgMulti = $root.CMsgMulti = (() => {

    /**
     * Properties of a CMsgMulti.
     * @exports ICMsgMulti
     * @interface ICMsgMulti
     * @property {number|null} [sizeUnzipped] CMsgMulti sizeUnzipped
     * @property {Uint8Array|null} [messageBody] CMsgMulti messageBody
     */

    /**
     * Constructs a new CMsgMulti.
     * @exports CMsgMulti
     * @classdesc Represents a CMsgMulti.
     * @implements ICMsgMulti
     * @constructor
     * @param {ICMsgMulti=} [properties] Properties to set
     */
    function CMsgMulti(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgMulti sizeUnzipped.
     * @member {number} sizeUnzipped
     * @memberof CMsgMulti
     * @instance
     */
    CMsgMulti.prototype.sizeUnzipped = 0;

    /**
     * CMsgMulti messageBody.
     * @member {Uint8Array} messageBody
     * @memberof CMsgMulti
     * @instance
     */
    CMsgMulti.prototype.messageBody = $util.newBuffer([]);

    /**
     * Creates a new CMsgMulti instance using the specified properties.
     * @function create
     * @memberof CMsgMulti
     * @static
     * @param {ICMsgMulti=} [properties] Properties to set
     * @returns {CMsgMulti} CMsgMulti instance
     */
    CMsgMulti.create = function create(properties) {
        return new CMsgMulti(properties);
    };

    /**
     * Encodes the specified CMsgMulti message. Does not implicitly {@link CMsgMulti.verify|verify} messages.
     * @function encode
     * @memberof CMsgMulti
     * @static
     * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgMulti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sizeUnzipped != null && Object.hasOwnProperty.call(message, "sizeUnzipped"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sizeUnzipped);
        if (message.messageBody != null && Object.hasOwnProperty.call(message, "messageBody"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.messageBody);
        return writer;
    };

    /**
     * Encodes the specified CMsgMulti message, length delimited. Does not implicitly {@link CMsgMulti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgMulti
     * @static
     * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgMulti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgMulti message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgMulti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgMulti} CMsgMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgMulti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMulti();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.sizeUnzipped = reader.uint32();
                    break;
                }
            case 2: {
                    message.messageBody = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgMulti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgMulti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgMulti} CMsgMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgMulti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgMulti message.
     * @function verify
     * @memberof CMsgMulti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgMulti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sizeUnzipped != null && message.hasOwnProperty("sizeUnzipped"))
            if (!$util.isInteger(message.sizeUnzipped))
                return "sizeUnzipped: integer expected";
        if (message.messageBody != null && message.hasOwnProperty("messageBody"))
            if (!(message.messageBody && typeof message.messageBody.length === "number" || $util.isString(message.messageBody)))
                return "messageBody: buffer expected";
        return null;
    };

    /**
     * Creates a CMsgMulti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgMulti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgMulti} CMsgMulti
     */
    CMsgMulti.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgMulti)
            return object;
        let message = new $root.CMsgMulti();
        if (object.sizeUnzipped != null)
            message.sizeUnzipped = object.sizeUnzipped >>> 0;
        if (object.messageBody != null)
            if (typeof object.messageBody === "string")
                $util.base64.decode(object.messageBody, message.messageBody = $util.newBuffer($util.base64.length(object.messageBody)), 0);
            else if (object.messageBody.length >= 0)
                message.messageBody = object.messageBody;
        return message;
    };

    /**
     * Creates a plain object from a CMsgMulti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgMulti
     * @static
     * @param {CMsgMulti} message CMsgMulti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgMulti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.sizeUnzipped = 0;
            if (options.bytes === String)
                object.messageBody = "";
            else {
                object.messageBody = [];
                if (options.bytes !== Array)
                    object.messageBody = $util.newBuffer(object.messageBody);
            }
        }
        if (message.sizeUnzipped != null && message.hasOwnProperty("sizeUnzipped"))
            object.sizeUnzipped = message.sizeUnzipped;
        if (message.messageBody != null && message.hasOwnProperty("messageBody"))
            object.messageBody = options.bytes === String ? $util.base64.encode(message.messageBody, 0, message.messageBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageBody) : message.messageBody;
        return object;
    };

    /**
     * Converts this CMsgMulti to JSON.
     * @function toJSON
     * @memberof CMsgMulti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgMulti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgMulti
     * @function getTypeUrl
     * @memberof CMsgMulti
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgMulti.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgMulti";
    };

    return CMsgMulti;
})();

export const CMsgProtobufWrapped = $root.CMsgProtobufWrapped = (() => {

    /**
     * Properties of a CMsgProtobufWrapped.
     * @exports ICMsgProtobufWrapped
     * @interface ICMsgProtobufWrapped
     * @property {Uint8Array|null} [messageBody] CMsgProtobufWrapped messageBody
     */

    /**
     * Constructs a new CMsgProtobufWrapped.
     * @exports CMsgProtobufWrapped
     * @classdesc Represents a CMsgProtobufWrapped.
     * @implements ICMsgProtobufWrapped
     * @constructor
     * @param {ICMsgProtobufWrapped=} [properties] Properties to set
     */
    function CMsgProtobufWrapped(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgProtobufWrapped messageBody.
     * @member {Uint8Array} messageBody
     * @memberof CMsgProtobufWrapped
     * @instance
     */
    CMsgProtobufWrapped.prototype.messageBody = $util.newBuffer([]);

    /**
     * Creates a new CMsgProtobufWrapped instance using the specified properties.
     * @function create
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {ICMsgProtobufWrapped=} [properties] Properties to set
     * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped instance
     */
    CMsgProtobufWrapped.create = function create(properties) {
        return new CMsgProtobufWrapped(properties);
    };

    /**
     * Encodes the specified CMsgProtobufWrapped message. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
     * @function encode
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgProtobufWrapped.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageBody != null && Object.hasOwnProperty.call(message, "messageBody"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messageBody);
        return writer;
    };

    /**
     * Encodes the specified CMsgProtobufWrapped message, length delimited. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgProtobufWrapped.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgProtobufWrapped message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgProtobufWrapped.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtobufWrapped();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.messageBody = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgProtobufWrapped message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgProtobufWrapped.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgProtobufWrapped message.
     * @function verify
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgProtobufWrapped.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageBody != null && message.hasOwnProperty("messageBody"))
            if (!(message.messageBody && typeof message.messageBody.length === "number" || $util.isString(message.messageBody)))
                return "messageBody: buffer expected";
        return null;
    };

    /**
     * Creates a CMsgProtobufWrapped message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
     */
    CMsgProtobufWrapped.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgProtobufWrapped)
            return object;
        let message = new $root.CMsgProtobufWrapped();
        if (object.messageBody != null)
            if (typeof object.messageBody === "string")
                $util.base64.decode(object.messageBody, message.messageBody = $util.newBuffer($util.base64.length(object.messageBody)), 0);
            else if (object.messageBody.length >= 0)
                message.messageBody = object.messageBody;
        return message;
    };

    /**
     * Creates a plain object from a CMsgProtobufWrapped message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {CMsgProtobufWrapped} message CMsgProtobufWrapped
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgProtobufWrapped.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.messageBody = "";
            else {
                object.messageBody = [];
                if (options.bytes !== Array)
                    object.messageBody = $util.newBuffer(object.messageBody);
            }
        if (message.messageBody != null && message.hasOwnProperty("messageBody"))
            object.messageBody = options.bytes === String ? $util.base64.encode(message.messageBody, 0, message.messageBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageBody) : message.messageBody;
        return object;
    };

    /**
     * Converts this CMsgProtobufWrapped to JSON.
     * @function toJSON
     * @memberof CMsgProtobufWrapped
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgProtobufWrapped.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgProtobufWrapped
     * @function getTypeUrl
     * @memberof CMsgProtobufWrapped
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgProtobufWrapped.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgProtobufWrapped";
    };

    return CMsgProtobufWrapped;
})();

export const CMsgAuthTicket = $root.CMsgAuthTicket = (() => {

    /**
     * Properties of a CMsgAuthTicket.
     * @exports ICMsgAuthTicket
     * @interface ICMsgAuthTicket
     * @property {number|null} [estate] CMsgAuthTicket estate
     * @property {number|null} [eresult] CMsgAuthTicket eresult
     * @property {number|Long|null} [steamid] CMsgAuthTicket steamid
     * @property {number|Long|null} [gameid] CMsgAuthTicket gameid
     * @property {number|null} [hSteamPipe] CMsgAuthTicket hSteamPipe
     * @property {number|null} [ticketCrc] CMsgAuthTicket ticketCrc
     * @property {Uint8Array|null} [ticket] CMsgAuthTicket ticket
     * @property {Uint8Array|null} [serverSecret] CMsgAuthTicket serverSecret
     * @property {number|null} [ticketType] CMsgAuthTicket ticketType
     */

    /**
     * Constructs a new CMsgAuthTicket.
     * @exports CMsgAuthTicket
     * @classdesc Represents a CMsgAuthTicket.
     * @implements ICMsgAuthTicket
     * @constructor
     * @param {ICMsgAuthTicket=} [properties] Properties to set
     */
    function CMsgAuthTicket(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgAuthTicket estate.
     * @member {number} estate
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.estate = 0;

    /**
     * CMsgAuthTicket eresult.
     * @member {number} eresult
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.eresult = 2;

    /**
     * CMsgAuthTicket steamid.
     * @member {number|Long} steamid
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CMsgAuthTicket gameid.
     * @member {number|Long} gameid
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CMsgAuthTicket hSteamPipe.
     * @member {number} hSteamPipe
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.hSteamPipe = 0;

    /**
     * CMsgAuthTicket ticketCrc.
     * @member {number} ticketCrc
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.ticketCrc = 0;

    /**
     * CMsgAuthTicket ticket.
     * @member {Uint8Array} ticket
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.ticket = $util.newBuffer([]);

    /**
     * CMsgAuthTicket serverSecret.
     * @member {Uint8Array} serverSecret
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.serverSecret = $util.newBuffer([]);

    /**
     * CMsgAuthTicket ticketType.
     * @member {number} ticketType
     * @memberof CMsgAuthTicket
     * @instance
     */
    CMsgAuthTicket.prototype.ticketType = 0;

    /**
     * Creates a new CMsgAuthTicket instance using the specified properties.
     * @function create
     * @memberof CMsgAuthTicket
     * @static
     * @param {ICMsgAuthTicket=} [properties] Properties to set
     * @returns {CMsgAuthTicket} CMsgAuthTicket instance
     */
    CMsgAuthTicket.create = function create(properties) {
        return new CMsgAuthTicket(properties);
    };

    /**
     * Encodes the specified CMsgAuthTicket message. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
     * @function encode
     * @memberof CMsgAuthTicket
     * @static
     * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgAuthTicket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.estate != null && Object.hasOwnProperty.call(message, "estate"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.estate);
        if (message.eresult != null && Object.hasOwnProperty.call(message, "eresult"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.eresult);
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid);
        if (message.gameid != null && Object.hasOwnProperty.call(message, "gameid"))
            writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.gameid);
        if (message.hSteamPipe != null && Object.hasOwnProperty.call(message, "hSteamPipe"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.hSteamPipe);
        if (message.ticketCrc != null && Object.hasOwnProperty.call(message, "ticketCrc"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ticketCrc);
        if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.ticket);
        if (message.serverSecret != null && Object.hasOwnProperty.call(message, "serverSecret"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.serverSecret);
        if (message.ticketType != null && Object.hasOwnProperty.call(message, "ticketType"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.ticketType);
        return writer;
    };

    /**
     * Encodes the specified CMsgAuthTicket message, length delimited. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgAuthTicket
     * @static
     * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgAuthTicket message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgAuthTicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgAuthTicket} CMsgAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgAuthTicket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAuthTicket();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.estate = reader.uint32();
                    break;
                }
            case 2: {
                    message.eresult = reader.uint32();
                    break;
                }
            case 3: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 4: {
                    message.gameid = reader.fixed64();
                    break;
                }
            case 5: {
                    message.hSteamPipe = reader.uint32();
                    break;
                }
            case 6: {
                    message.ticketCrc = reader.uint32();
                    break;
                }
            case 7: {
                    message.ticket = reader.bytes();
                    break;
                }
            case 8: {
                    message.serverSecret = reader.bytes();
                    break;
                }
            case 9: {
                    message.ticketType = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgAuthTicket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgAuthTicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgAuthTicket} CMsgAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgAuthTicket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgAuthTicket message.
     * @function verify
     * @memberof CMsgAuthTicket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgAuthTicket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.estate != null && message.hasOwnProperty("estate"))
            if (!$util.isInteger(message.estate))
                return "estate: integer expected";
        if (message.eresult != null && message.hasOwnProperty("eresult"))
            if (!$util.isInteger(message.eresult))
                return "eresult: integer expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.gameid != null && message.hasOwnProperty("gameid"))
            if (!$util.isInteger(message.gameid) && !(message.gameid && $util.isInteger(message.gameid.low) && $util.isInteger(message.gameid.high)))
                return "gameid: integer|Long expected";
        if (message.hSteamPipe != null && message.hasOwnProperty("hSteamPipe"))
            if (!$util.isInteger(message.hSteamPipe))
                return "hSteamPipe: integer expected";
        if (message.ticketCrc != null && message.hasOwnProperty("ticketCrc"))
            if (!$util.isInteger(message.ticketCrc))
                return "ticketCrc: integer expected";
        if (message.ticket != null && message.hasOwnProperty("ticket"))
            if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                return "ticket: buffer expected";
        if (message.serverSecret != null && message.hasOwnProperty("serverSecret"))
            if (!(message.serverSecret && typeof message.serverSecret.length === "number" || $util.isString(message.serverSecret)))
                return "serverSecret: buffer expected";
        if (message.ticketType != null && message.hasOwnProperty("ticketType"))
            if (!$util.isInteger(message.ticketType))
                return "ticketType: integer expected";
        return null;
    };

    /**
     * Creates a CMsgAuthTicket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgAuthTicket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgAuthTicket} CMsgAuthTicket
     */
    CMsgAuthTicket.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgAuthTicket)
            return object;
        let message = new $root.CMsgAuthTicket();
        if (object.estate != null)
            message.estate = object.estate >>> 0;
        if (object.eresult != null)
            message.eresult = object.eresult >>> 0;
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.gameid != null)
            if ($util.Long)
                (message.gameid = $util.Long.fromValue(object.gameid)).unsigned = false;
            else if (typeof object.gameid === "string")
                message.gameid = parseInt(object.gameid, 10);
            else if (typeof object.gameid === "number")
                message.gameid = object.gameid;
            else if (typeof object.gameid === "object")
                message.gameid = new $util.LongBits(object.gameid.low >>> 0, object.gameid.high >>> 0).toNumber();
        if (object.hSteamPipe != null)
            message.hSteamPipe = object.hSteamPipe >>> 0;
        if (object.ticketCrc != null)
            message.ticketCrc = object.ticketCrc >>> 0;
        if (object.ticket != null)
            if (typeof object.ticket === "string")
                $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
            else if (object.ticket.length >= 0)
                message.ticket = object.ticket;
        if (object.serverSecret != null)
            if (typeof object.serverSecret === "string")
                $util.base64.decode(object.serverSecret, message.serverSecret = $util.newBuffer($util.base64.length(object.serverSecret)), 0);
            else if (object.serverSecret.length >= 0)
                message.serverSecret = object.serverSecret;
        if (object.ticketType != null)
            message.ticketType = object.ticketType >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CMsgAuthTicket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgAuthTicket
     * @static
     * @param {CMsgAuthTicket} message CMsgAuthTicket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgAuthTicket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.estate = 0;
            object.eresult = 2;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gameid = options.longs === String ? "0" : 0;
            object.hSteamPipe = 0;
            object.ticketCrc = 0;
            if (options.bytes === String)
                object.ticket = "";
            else {
                object.ticket = [];
                if (options.bytes !== Array)
                    object.ticket = $util.newBuffer(object.ticket);
            }
            if (options.bytes === String)
                object.serverSecret = "";
            else {
                object.serverSecret = [];
                if (options.bytes !== Array)
                    object.serverSecret = $util.newBuffer(object.serverSecret);
            }
            object.ticketType = 0;
        }
        if (message.estate != null && message.hasOwnProperty("estate"))
            object.estate = message.estate;
        if (message.eresult != null && message.hasOwnProperty("eresult"))
            object.eresult = message.eresult;
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.gameid != null && message.hasOwnProperty("gameid"))
            if (typeof message.gameid === "number")
                object.gameid = options.longs === String ? String(message.gameid) : message.gameid;
            else
                object.gameid = options.longs === String ? $util.Long.prototype.toString.call(message.gameid) : options.longs === Number ? new $util.LongBits(message.gameid.low >>> 0, message.gameid.high >>> 0).toNumber() : message.gameid;
        if (message.hSteamPipe != null && message.hasOwnProperty("hSteamPipe"))
            object.hSteamPipe = message.hSteamPipe;
        if (message.ticketCrc != null && message.hasOwnProperty("ticketCrc"))
            object.ticketCrc = message.ticketCrc;
        if (message.ticket != null && message.hasOwnProperty("ticket"))
            object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
        if (message.serverSecret != null && message.hasOwnProperty("serverSecret"))
            object.serverSecret = options.bytes === String ? $util.base64.encode(message.serverSecret, 0, message.serverSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.serverSecret) : message.serverSecret;
        if (message.ticketType != null && message.hasOwnProperty("ticketType"))
            object.ticketType = message.ticketType;
        return object;
    };

    /**
     * Converts this CMsgAuthTicket to JSON.
     * @function toJSON
     * @memberof CMsgAuthTicket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgAuthTicket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgAuthTicket
     * @function getTypeUrl
     * @memberof CMsgAuthTicket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgAuthTicket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgAuthTicket";
    };

    return CMsgAuthTicket;
})();

export const CCDDBAppDetailCommon = $root.CCDDBAppDetailCommon = (() => {

    /**
     * Properties of a CCDDBAppDetailCommon.
     * @exports ICCDDBAppDetailCommon
     * @interface ICCDDBAppDetailCommon
     * @property {number|null} [appid] CCDDBAppDetailCommon appid
     * @property {string|null} [name] CCDDBAppDetailCommon name
     * @property {string|null} [icon] CCDDBAppDetailCommon icon
     * @property {boolean|null} [tool] CCDDBAppDetailCommon tool
     * @property {boolean|null} [demo] CCDDBAppDetailCommon demo
     * @property {boolean|null} [media] CCDDBAppDetailCommon media
     * @property {boolean|null} [communityVisibleStats] CCDDBAppDetailCommon communityVisibleStats
     * @property {string|null} [friendlyName] CCDDBAppDetailCommon friendlyName
     * @property {string|null} [propagation] CCDDBAppDetailCommon propagation
     * @property {boolean|null} [hasAdultContent] CCDDBAppDetailCommon hasAdultContent
     * @property {boolean|null} [isVisibleInSteamChina] CCDDBAppDetailCommon isVisibleInSteamChina
     * @property {number|null} [appType] CCDDBAppDetailCommon appType
     * @property {boolean|null} [hasAdultContentSex] CCDDBAppDetailCommon hasAdultContentSex
     * @property {boolean|null} [hasAdultContentViolence] CCDDBAppDetailCommon hasAdultContentViolence
     * @property {Array.<number>|null} [contentDescriptorids] CCDDBAppDetailCommon contentDescriptorids
     */

    /**
     * Constructs a new CCDDBAppDetailCommon.
     * @exports CCDDBAppDetailCommon
     * @classdesc Represents a CCDDBAppDetailCommon.
     * @implements ICCDDBAppDetailCommon
     * @constructor
     * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
     */
    function CCDDBAppDetailCommon(properties) {
        this.contentDescriptorids = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CCDDBAppDetailCommon appid.
     * @member {number} appid
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.appid = 0;

    /**
     * CCDDBAppDetailCommon name.
     * @member {string} name
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.name = "";

    /**
     * CCDDBAppDetailCommon icon.
     * @member {string} icon
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.icon = "";

    /**
     * CCDDBAppDetailCommon tool.
     * @member {boolean} tool
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.tool = false;

    /**
     * CCDDBAppDetailCommon demo.
     * @member {boolean} demo
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.demo = false;

    /**
     * CCDDBAppDetailCommon media.
     * @member {boolean} media
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.media = false;

    /**
     * CCDDBAppDetailCommon communityVisibleStats.
     * @member {boolean} communityVisibleStats
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.communityVisibleStats = false;

    /**
     * CCDDBAppDetailCommon friendlyName.
     * @member {string} friendlyName
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.friendlyName = "";

    /**
     * CCDDBAppDetailCommon propagation.
     * @member {string} propagation
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.propagation = "";

    /**
     * CCDDBAppDetailCommon hasAdultContent.
     * @member {boolean} hasAdultContent
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.hasAdultContent = false;

    /**
     * CCDDBAppDetailCommon isVisibleInSteamChina.
     * @member {boolean} isVisibleInSteamChina
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.isVisibleInSteamChina = false;

    /**
     * CCDDBAppDetailCommon appType.
     * @member {number} appType
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.appType = 0;

    /**
     * CCDDBAppDetailCommon hasAdultContentSex.
     * @member {boolean} hasAdultContentSex
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.hasAdultContentSex = false;

    /**
     * CCDDBAppDetailCommon hasAdultContentViolence.
     * @member {boolean} hasAdultContentViolence
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.hasAdultContentViolence = false;

    /**
     * CCDDBAppDetailCommon contentDescriptorids.
     * @member {Array.<number>} contentDescriptorids
     * @memberof CCDDBAppDetailCommon
     * @instance
     */
    CCDDBAppDetailCommon.prototype.contentDescriptorids = $util.emptyArray;

    /**
     * Creates a new CCDDBAppDetailCommon instance using the specified properties.
     * @function create
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
     * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon instance
     */
    CCDDBAppDetailCommon.create = function create(properties) {
        return new CCDDBAppDetailCommon(properties);
    };

    /**
     * Encodes the specified CCDDBAppDetailCommon message. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
     * @function encode
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCDDBAppDetailCommon.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
        if (message.tool != null && Object.hasOwnProperty.call(message, "tool"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.tool);
        if (message.demo != null && Object.hasOwnProperty.call(message, "demo"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.demo);
        if (message.media != null && Object.hasOwnProperty.call(message, "media"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.media);
        if (message.communityVisibleStats != null && Object.hasOwnProperty.call(message, "communityVisibleStats"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.communityVisibleStats);
        if (message.friendlyName != null && Object.hasOwnProperty.call(message, "friendlyName"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.friendlyName);
        if (message.propagation != null && Object.hasOwnProperty.call(message, "propagation"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.propagation);
        if (message.hasAdultContent != null && Object.hasOwnProperty.call(message, "hasAdultContent"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.hasAdultContent);
        if (message.isVisibleInSteamChina != null && Object.hasOwnProperty.call(message, "isVisibleInSteamChina"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isVisibleInSteamChina);
        if (message.appType != null && Object.hasOwnProperty.call(message, "appType"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.appType);
        if (message.hasAdultContentSex != null && Object.hasOwnProperty.call(message, "hasAdultContentSex"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.hasAdultContentSex);
        if (message.hasAdultContentViolence != null && Object.hasOwnProperty.call(message, "hasAdultContentViolence"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.hasAdultContentViolence);
        if (message.contentDescriptorids != null && message.contentDescriptorids.length)
            for (let i = 0; i < message.contentDescriptorids.length; ++i)
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.contentDescriptorids[i]);
        return writer;
    };

    /**
     * Encodes the specified CCDDBAppDetailCommon message, length delimited. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCDDBAppDetailCommon.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer.
     * @function decode
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCDDBAppDetailCommon.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCDDBAppDetailCommon();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.appid = reader.uint32();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.icon = reader.string();
                    break;
                }
            case 6: {
                    message.tool = reader.bool();
                    break;
                }
            case 7: {
                    message.demo = reader.bool();
                    break;
                }
            case 8: {
                    message.media = reader.bool();
                    break;
                }
            case 9: {
                    message.communityVisibleStats = reader.bool();
                    break;
                }
            case 10: {
                    message.friendlyName = reader.string();
                    break;
                }
            case 11: {
                    message.propagation = reader.string();
                    break;
                }
            case 12: {
                    message.hasAdultContent = reader.bool();
                    break;
                }
            case 13: {
                    message.isVisibleInSteamChina = reader.bool();
                    break;
                }
            case 14: {
                    message.appType = reader.uint32();
                    break;
                }
            case 15: {
                    message.hasAdultContentSex = reader.bool();
                    break;
                }
            case 16: {
                    message.hasAdultContentViolence = reader.bool();
                    break;
                }
            case 17: {
                    if (!(message.contentDescriptorids && message.contentDescriptorids.length))
                        message.contentDescriptorids = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.contentDescriptorids.push(reader.uint32());
                    } else
                        message.contentDescriptorids.push(reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCDDBAppDetailCommon.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CCDDBAppDetailCommon message.
     * @function verify
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CCDDBAppDetailCommon.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (!$util.isInteger(message.appid))
                return "appid: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.tool != null && message.hasOwnProperty("tool"))
            if (typeof message.tool !== "boolean")
                return "tool: boolean expected";
        if (message.demo != null && message.hasOwnProperty("demo"))
            if (typeof message.demo !== "boolean")
                return "demo: boolean expected";
        if (message.media != null && message.hasOwnProperty("media"))
            if (typeof message.media !== "boolean")
                return "media: boolean expected";
        if (message.communityVisibleStats != null && message.hasOwnProperty("communityVisibleStats"))
            if (typeof message.communityVisibleStats !== "boolean")
                return "communityVisibleStats: boolean expected";
        if (message.friendlyName != null && message.hasOwnProperty("friendlyName"))
            if (!$util.isString(message.friendlyName))
                return "friendlyName: string expected";
        if (message.propagation != null && message.hasOwnProperty("propagation"))
            if (!$util.isString(message.propagation))
                return "propagation: string expected";
        if (message.hasAdultContent != null && message.hasOwnProperty("hasAdultContent"))
            if (typeof message.hasAdultContent !== "boolean")
                return "hasAdultContent: boolean expected";
        if (message.isVisibleInSteamChina != null && message.hasOwnProperty("isVisibleInSteamChina"))
            if (typeof message.isVisibleInSteamChina !== "boolean")
                return "isVisibleInSteamChina: boolean expected";
        if (message.appType != null && message.hasOwnProperty("appType"))
            if (!$util.isInteger(message.appType))
                return "appType: integer expected";
        if (message.hasAdultContentSex != null && message.hasOwnProperty("hasAdultContentSex"))
            if (typeof message.hasAdultContentSex !== "boolean")
                return "hasAdultContentSex: boolean expected";
        if (message.hasAdultContentViolence != null && message.hasOwnProperty("hasAdultContentViolence"))
            if (typeof message.hasAdultContentViolence !== "boolean")
                return "hasAdultContentViolence: boolean expected";
        if (message.contentDescriptorids != null && message.hasOwnProperty("contentDescriptorids")) {
            if (!Array.isArray(message.contentDescriptorids))
                return "contentDescriptorids: array expected";
            for (let i = 0; i < message.contentDescriptorids.length; ++i)
                if (!$util.isInteger(message.contentDescriptorids[i]))
                    return "contentDescriptorids: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a CCDDBAppDetailCommon message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
     */
    CCDDBAppDetailCommon.fromObject = function fromObject(object) {
        if (object instanceof $root.CCDDBAppDetailCommon)
            return object;
        let message = new $root.CCDDBAppDetailCommon();
        if (object.appid != null)
            message.appid = object.appid >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.tool != null)
            message.tool = Boolean(object.tool);
        if (object.demo != null)
            message.demo = Boolean(object.demo);
        if (object.media != null)
            message.media = Boolean(object.media);
        if (object.communityVisibleStats != null)
            message.communityVisibleStats = Boolean(object.communityVisibleStats);
        if (object.friendlyName != null)
            message.friendlyName = String(object.friendlyName);
        if (object.propagation != null)
            message.propagation = String(object.propagation);
        if (object.hasAdultContent != null)
            message.hasAdultContent = Boolean(object.hasAdultContent);
        if (object.isVisibleInSteamChina != null)
            message.isVisibleInSteamChina = Boolean(object.isVisibleInSteamChina);
        if (object.appType != null)
            message.appType = object.appType >>> 0;
        if (object.hasAdultContentSex != null)
            message.hasAdultContentSex = Boolean(object.hasAdultContentSex);
        if (object.hasAdultContentViolence != null)
            message.hasAdultContentViolence = Boolean(object.hasAdultContentViolence);
        if (object.contentDescriptorids) {
            if (!Array.isArray(object.contentDescriptorids))
                throw TypeError(".CCDDBAppDetailCommon.contentDescriptorids: array expected");
            message.contentDescriptorids = [];
            for (let i = 0; i < object.contentDescriptorids.length; ++i)
                message.contentDescriptorids[i] = object.contentDescriptorids[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a CCDDBAppDetailCommon message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {CCDDBAppDetailCommon} message CCDDBAppDetailCommon
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CCDDBAppDetailCommon.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.contentDescriptorids = [];
        if (options.defaults) {
            object.appid = 0;
            object.name = "";
            object.icon = "";
            object.tool = false;
            object.demo = false;
            object.media = false;
            object.communityVisibleStats = false;
            object.friendlyName = "";
            object.propagation = "";
            object.hasAdultContent = false;
            object.isVisibleInSteamChina = false;
            object.appType = 0;
            object.hasAdultContentSex = false;
            object.hasAdultContentViolence = false;
        }
        if (message.appid != null && message.hasOwnProperty("appid"))
            object.appid = message.appid;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.tool != null && message.hasOwnProperty("tool"))
            object.tool = message.tool;
        if (message.demo != null && message.hasOwnProperty("demo"))
            object.demo = message.demo;
        if (message.media != null && message.hasOwnProperty("media"))
            object.media = message.media;
        if (message.communityVisibleStats != null && message.hasOwnProperty("communityVisibleStats"))
            object.communityVisibleStats = message.communityVisibleStats;
        if (message.friendlyName != null && message.hasOwnProperty("friendlyName"))
            object.friendlyName = message.friendlyName;
        if (message.propagation != null && message.hasOwnProperty("propagation"))
            object.propagation = message.propagation;
        if (message.hasAdultContent != null && message.hasOwnProperty("hasAdultContent"))
            object.hasAdultContent = message.hasAdultContent;
        if (message.isVisibleInSteamChina != null && message.hasOwnProperty("isVisibleInSteamChina"))
            object.isVisibleInSteamChina = message.isVisibleInSteamChina;
        if (message.appType != null && message.hasOwnProperty("appType"))
            object.appType = message.appType;
        if (message.hasAdultContentSex != null && message.hasOwnProperty("hasAdultContentSex"))
            object.hasAdultContentSex = message.hasAdultContentSex;
        if (message.hasAdultContentViolence != null && message.hasOwnProperty("hasAdultContentViolence"))
            object.hasAdultContentViolence = message.hasAdultContentViolence;
        if (message.contentDescriptorids && message.contentDescriptorids.length) {
            object.contentDescriptorids = [];
            for (let j = 0; j < message.contentDescriptorids.length; ++j)
                object.contentDescriptorids[j] = message.contentDescriptorids[j];
        }
        return object;
    };

    /**
     * Converts this CCDDBAppDetailCommon to JSON.
     * @function toJSON
     * @memberof CCDDBAppDetailCommon
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CCDDBAppDetailCommon.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CCDDBAppDetailCommon
     * @function getTypeUrl
     * @memberof CCDDBAppDetailCommon
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CCDDBAppDetailCommon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CCDDBAppDetailCommon";
    };

    return CCDDBAppDetailCommon;
})();

export const CMsgAppRights = $root.CMsgAppRights = (() => {

    /**
     * Properties of a CMsgAppRights.
     * @exports ICMsgAppRights
     * @interface ICMsgAppRights
     * @property {boolean|null} [editInfo] CMsgAppRights editInfo
     * @property {boolean|null} [publish] CMsgAppRights publish
     * @property {boolean|null} [viewErrorData] CMsgAppRights viewErrorData
     * @property {boolean|null} [download] CMsgAppRights download
     * @property {boolean|null} [uploadCdkeys] CMsgAppRights uploadCdkeys
     * @property {boolean|null} [generateCdkeys] CMsgAppRights generateCdkeys
     * @property {boolean|null} [viewFinancials] CMsgAppRights viewFinancials
     * @property {boolean|null} [manageCeg] CMsgAppRights manageCeg
     * @property {boolean|null} [manageSigning] CMsgAppRights manageSigning
     * @property {boolean|null} [manageCdkeys] CMsgAppRights manageCdkeys
     * @property {boolean|null} [editMarketing] CMsgAppRights editMarketing
     * @property {boolean|null} [economySupport] CMsgAppRights economySupport
     * @property {boolean|null} [economySupportSupervisor] CMsgAppRights economySupportSupervisor
     * @property {boolean|null} [managePricing] CMsgAppRights managePricing
     * @property {boolean|null} [broadcastLive] CMsgAppRights broadcastLive
     * @property {boolean|null} [viewMarketingTraffic] CMsgAppRights viewMarketingTraffic
     * @property {boolean|null} [editStoreDisplayContent] CMsgAppRights editStoreDisplayContent
     */

    /**
     * Constructs a new CMsgAppRights.
     * @exports CMsgAppRights
     * @classdesc Represents a CMsgAppRights.
     * @implements ICMsgAppRights
     * @constructor
     * @param {ICMsgAppRights=} [properties] Properties to set
     */
    function CMsgAppRights(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgAppRights editInfo.
     * @member {boolean} editInfo
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.editInfo = false;

    /**
     * CMsgAppRights publish.
     * @member {boolean} publish
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.publish = false;

    /**
     * CMsgAppRights viewErrorData.
     * @member {boolean} viewErrorData
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.viewErrorData = false;

    /**
     * CMsgAppRights download.
     * @member {boolean} download
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.download = false;

    /**
     * CMsgAppRights uploadCdkeys.
     * @member {boolean} uploadCdkeys
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.uploadCdkeys = false;

    /**
     * CMsgAppRights generateCdkeys.
     * @member {boolean} generateCdkeys
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.generateCdkeys = false;

    /**
     * CMsgAppRights viewFinancials.
     * @member {boolean} viewFinancials
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.viewFinancials = false;

    /**
     * CMsgAppRights manageCeg.
     * @member {boolean} manageCeg
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.manageCeg = false;

    /**
     * CMsgAppRights manageSigning.
     * @member {boolean} manageSigning
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.manageSigning = false;

    /**
     * CMsgAppRights manageCdkeys.
     * @member {boolean} manageCdkeys
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.manageCdkeys = false;

    /**
     * CMsgAppRights editMarketing.
     * @member {boolean} editMarketing
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.editMarketing = false;

    /**
     * CMsgAppRights economySupport.
     * @member {boolean} economySupport
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.economySupport = false;

    /**
     * CMsgAppRights economySupportSupervisor.
     * @member {boolean} economySupportSupervisor
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.economySupportSupervisor = false;

    /**
     * CMsgAppRights managePricing.
     * @member {boolean} managePricing
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.managePricing = false;

    /**
     * CMsgAppRights broadcastLive.
     * @member {boolean} broadcastLive
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.broadcastLive = false;

    /**
     * CMsgAppRights viewMarketingTraffic.
     * @member {boolean} viewMarketingTraffic
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.viewMarketingTraffic = false;

    /**
     * CMsgAppRights editStoreDisplayContent.
     * @member {boolean} editStoreDisplayContent
     * @memberof CMsgAppRights
     * @instance
     */
    CMsgAppRights.prototype.editStoreDisplayContent = false;

    /**
     * Creates a new CMsgAppRights instance using the specified properties.
     * @function create
     * @memberof CMsgAppRights
     * @static
     * @param {ICMsgAppRights=} [properties] Properties to set
     * @returns {CMsgAppRights} CMsgAppRights instance
     */
    CMsgAppRights.create = function create(properties) {
        return new CMsgAppRights(properties);
    };

    /**
     * Encodes the specified CMsgAppRights message. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
     * @function encode
     * @memberof CMsgAppRights
     * @static
     * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgAppRights.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.editInfo != null && Object.hasOwnProperty.call(message, "editInfo"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.editInfo);
        if (message.publish != null && Object.hasOwnProperty.call(message, "publish"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.publish);
        if (message.viewErrorData != null && Object.hasOwnProperty.call(message, "viewErrorData"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.viewErrorData);
        if (message.download != null && Object.hasOwnProperty.call(message, "download"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.download);
        if (message.uploadCdkeys != null && Object.hasOwnProperty.call(message, "uploadCdkeys"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.uploadCdkeys);
        if (message.generateCdkeys != null && Object.hasOwnProperty.call(message, "generateCdkeys"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.generateCdkeys);
        if (message.viewFinancials != null && Object.hasOwnProperty.call(message, "viewFinancials"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.viewFinancials);
        if (message.manageCeg != null && Object.hasOwnProperty.call(message, "manageCeg"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.manageCeg);
        if (message.manageSigning != null && Object.hasOwnProperty.call(message, "manageSigning"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.manageSigning);
        if (message.manageCdkeys != null && Object.hasOwnProperty.call(message, "manageCdkeys"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.manageCdkeys);
        if (message.editMarketing != null && Object.hasOwnProperty.call(message, "editMarketing"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.editMarketing);
        if (message.economySupport != null && Object.hasOwnProperty.call(message, "economySupport"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.economySupport);
        if (message.economySupportSupervisor != null && Object.hasOwnProperty.call(message, "economySupportSupervisor"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.economySupportSupervisor);
        if (message.managePricing != null && Object.hasOwnProperty.call(message, "managePricing"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.managePricing);
        if (message.broadcastLive != null && Object.hasOwnProperty.call(message, "broadcastLive"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.broadcastLive);
        if (message.viewMarketingTraffic != null && Object.hasOwnProperty.call(message, "viewMarketingTraffic"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.viewMarketingTraffic);
        if (message.editStoreDisplayContent != null && Object.hasOwnProperty.call(message, "editStoreDisplayContent"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.editStoreDisplayContent);
        return writer;
    };

    /**
     * Encodes the specified CMsgAppRights message, length delimited. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgAppRights
     * @static
     * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgAppRights.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgAppRights message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgAppRights
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgAppRights} CMsgAppRights
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgAppRights.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAppRights();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.editInfo = reader.bool();
                    break;
                }
            case 2: {
                    message.publish = reader.bool();
                    break;
                }
            case 3: {
                    message.viewErrorData = reader.bool();
                    break;
                }
            case 4: {
                    message.download = reader.bool();
                    break;
                }
            case 5: {
                    message.uploadCdkeys = reader.bool();
                    break;
                }
            case 6: {
                    message.generateCdkeys = reader.bool();
                    break;
                }
            case 7: {
                    message.viewFinancials = reader.bool();
                    break;
                }
            case 8: {
                    message.manageCeg = reader.bool();
                    break;
                }
            case 9: {
                    message.manageSigning = reader.bool();
                    break;
                }
            case 10: {
                    message.manageCdkeys = reader.bool();
                    break;
                }
            case 11: {
                    message.editMarketing = reader.bool();
                    break;
                }
            case 12: {
                    message.economySupport = reader.bool();
                    break;
                }
            case 13: {
                    message.economySupportSupervisor = reader.bool();
                    break;
                }
            case 14: {
                    message.managePricing = reader.bool();
                    break;
                }
            case 15: {
                    message.broadcastLive = reader.bool();
                    break;
                }
            case 16: {
                    message.viewMarketingTraffic = reader.bool();
                    break;
                }
            case 17: {
                    message.editStoreDisplayContent = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgAppRights message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgAppRights
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgAppRights} CMsgAppRights
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgAppRights.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgAppRights message.
     * @function verify
     * @memberof CMsgAppRights
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgAppRights.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.editInfo != null && message.hasOwnProperty("editInfo"))
            if (typeof message.editInfo !== "boolean")
                return "editInfo: boolean expected";
        if (message.publish != null && message.hasOwnProperty("publish"))
            if (typeof message.publish !== "boolean")
                return "publish: boolean expected";
        if (message.viewErrorData != null && message.hasOwnProperty("viewErrorData"))
            if (typeof message.viewErrorData !== "boolean")
                return "viewErrorData: boolean expected";
        if (message.download != null && message.hasOwnProperty("download"))
            if (typeof message.download !== "boolean")
                return "download: boolean expected";
        if (message.uploadCdkeys != null && message.hasOwnProperty("uploadCdkeys"))
            if (typeof message.uploadCdkeys !== "boolean")
                return "uploadCdkeys: boolean expected";
        if (message.generateCdkeys != null && message.hasOwnProperty("generateCdkeys"))
            if (typeof message.generateCdkeys !== "boolean")
                return "generateCdkeys: boolean expected";
        if (message.viewFinancials != null && message.hasOwnProperty("viewFinancials"))
            if (typeof message.viewFinancials !== "boolean")
                return "viewFinancials: boolean expected";
        if (message.manageCeg != null && message.hasOwnProperty("manageCeg"))
            if (typeof message.manageCeg !== "boolean")
                return "manageCeg: boolean expected";
        if (message.manageSigning != null && message.hasOwnProperty("manageSigning"))
            if (typeof message.manageSigning !== "boolean")
                return "manageSigning: boolean expected";
        if (message.manageCdkeys != null && message.hasOwnProperty("manageCdkeys"))
            if (typeof message.manageCdkeys !== "boolean")
                return "manageCdkeys: boolean expected";
        if (message.editMarketing != null && message.hasOwnProperty("editMarketing"))
            if (typeof message.editMarketing !== "boolean")
                return "editMarketing: boolean expected";
        if (message.economySupport != null && message.hasOwnProperty("economySupport"))
            if (typeof message.economySupport !== "boolean")
                return "economySupport: boolean expected";
        if (message.economySupportSupervisor != null && message.hasOwnProperty("economySupportSupervisor"))
            if (typeof message.economySupportSupervisor !== "boolean")
                return "economySupportSupervisor: boolean expected";
        if (message.managePricing != null && message.hasOwnProperty("managePricing"))
            if (typeof message.managePricing !== "boolean")
                return "managePricing: boolean expected";
        if (message.broadcastLive != null && message.hasOwnProperty("broadcastLive"))
            if (typeof message.broadcastLive !== "boolean")
                return "broadcastLive: boolean expected";
        if (message.viewMarketingTraffic != null && message.hasOwnProperty("viewMarketingTraffic"))
            if (typeof message.viewMarketingTraffic !== "boolean")
                return "viewMarketingTraffic: boolean expected";
        if (message.editStoreDisplayContent != null && message.hasOwnProperty("editStoreDisplayContent"))
            if (typeof message.editStoreDisplayContent !== "boolean")
                return "editStoreDisplayContent: boolean expected";
        return null;
    };

    /**
     * Creates a CMsgAppRights message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgAppRights
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgAppRights} CMsgAppRights
     */
    CMsgAppRights.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgAppRights)
            return object;
        let message = new $root.CMsgAppRights();
        if (object.editInfo != null)
            message.editInfo = Boolean(object.editInfo);
        if (object.publish != null)
            message.publish = Boolean(object.publish);
        if (object.viewErrorData != null)
            message.viewErrorData = Boolean(object.viewErrorData);
        if (object.download != null)
            message.download = Boolean(object.download);
        if (object.uploadCdkeys != null)
            message.uploadCdkeys = Boolean(object.uploadCdkeys);
        if (object.generateCdkeys != null)
            message.generateCdkeys = Boolean(object.generateCdkeys);
        if (object.viewFinancials != null)
            message.viewFinancials = Boolean(object.viewFinancials);
        if (object.manageCeg != null)
            message.manageCeg = Boolean(object.manageCeg);
        if (object.manageSigning != null)
            message.manageSigning = Boolean(object.manageSigning);
        if (object.manageCdkeys != null)
            message.manageCdkeys = Boolean(object.manageCdkeys);
        if (object.editMarketing != null)
            message.editMarketing = Boolean(object.editMarketing);
        if (object.economySupport != null)
            message.economySupport = Boolean(object.economySupport);
        if (object.economySupportSupervisor != null)
            message.economySupportSupervisor = Boolean(object.economySupportSupervisor);
        if (object.managePricing != null)
            message.managePricing = Boolean(object.managePricing);
        if (object.broadcastLive != null)
            message.broadcastLive = Boolean(object.broadcastLive);
        if (object.viewMarketingTraffic != null)
            message.viewMarketingTraffic = Boolean(object.viewMarketingTraffic);
        if (object.editStoreDisplayContent != null)
            message.editStoreDisplayContent = Boolean(object.editStoreDisplayContent);
        return message;
    };

    /**
     * Creates a plain object from a CMsgAppRights message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgAppRights
     * @static
     * @param {CMsgAppRights} message CMsgAppRights
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgAppRights.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.editInfo = false;
            object.publish = false;
            object.viewErrorData = false;
            object.download = false;
            object.uploadCdkeys = false;
            object.generateCdkeys = false;
            object.viewFinancials = false;
            object.manageCeg = false;
            object.manageSigning = false;
            object.manageCdkeys = false;
            object.editMarketing = false;
            object.economySupport = false;
            object.economySupportSupervisor = false;
            object.managePricing = false;
            object.broadcastLive = false;
            object.viewMarketingTraffic = false;
            object.editStoreDisplayContent = false;
        }
        if (message.editInfo != null && message.hasOwnProperty("editInfo"))
            object.editInfo = message.editInfo;
        if (message.publish != null && message.hasOwnProperty("publish"))
            object.publish = message.publish;
        if (message.viewErrorData != null && message.hasOwnProperty("viewErrorData"))
            object.viewErrorData = message.viewErrorData;
        if (message.download != null && message.hasOwnProperty("download"))
            object.download = message.download;
        if (message.uploadCdkeys != null && message.hasOwnProperty("uploadCdkeys"))
            object.uploadCdkeys = message.uploadCdkeys;
        if (message.generateCdkeys != null && message.hasOwnProperty("generateCdkeys"))
            object.generateCdkeys = message.generateCdkeys;
        if (message.viewFinancials != null && message.hasOwnProperty("viewFinancials"))
            object.viewFinancials = message.viewFinancials;
        if (message.manageCeg != null && message.hasOwnProperty("manageCeg"))
            object.manageCeg = message.manageCeg;
        if (message.manageSigning != null && message.hasOwnProperty("manageSigning"))
            object.manageSigning = message.manageSigning;
        if (message.manageCdkeys != null && message.hasOwnProperty("manageCdkeys"))
            object.manageCdkeys = message.manageCdkeys;
        if (message.editMarketing != null && message.hasOwnProperty("editMarketing"))
            object.editMarketing = message.editMarketing;
        if (message.economySupport != null && message.hasOwnProperty("economySupport"))
            object.economySupport = message.economySupport;
        if (message.economySupportSupervisor != null && message.hasOwnProperty("economySupportSupervisor"))
            object.economySupportSupervisor = message.economySupportSupervisor;
        if (message.managePricing != null && message.hasOwnProperty("managePricing"))
            object.managePricing = message.managePricing;
        if (message.broadcastLive != null && message.hasOwnProperty("broadcastLive"))
            object.broadcastLive = message.broadcastLive;
        if (message.viewMarketingTraffic != null && message.hasOwnProperty("viewMarketingTraffic"))
            object.viewMarketingTraffic = message.viewMarketingTraffic;
        if (message.editStoreDisplayContent != null && message.hasOwnProperty("editStoreDisplayContent"))
            object.editStoreDisplayContent = message.editStoreDisplayContent;
        return object;
    };

    /**
     * Converts this CMsgAppRights to JSON.
     * @function toJSON
     * @memberof CMsgAppRights
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgAppRights.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgAppRights
     * @function getTypeUrl
     * @memberof CMsgAppRights
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgAppRights.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgAppRights";
    };

    return CMsgAppRights;
})();

export const CCuratorPreferences = $root.CCuratorPreferences = (() => {

    /**
     * Properties of a CCuratorPreferences.
     * @exports ICCuratorPreferences
     * @interface ICCuratorPreferences
     * @property {number|null} [supportedLanguages] CCuratorPreferences supportedLanguages
     * @property {boolean|null} [platformWindows] CCuratorPreferences platformWindows
     * @property {boolean|null} [platformMac] CCuratorPreferences platformMac
     * @property {boolean|null} [platformLinux] CCuratorPreferences platformLinux
     * @property {boolean|null} [vrContent] CCuratorPreferences vrContent
     * @property {boolean|null} [adultContentViolence] CCuratorPreferences adultContentViolence
     * @property {boolean|null} [adultContentSex] CCuratorPreferences adultContentSex
     * @property {number|null} [timestampUpdated] CCuratorPreferences timestampUpdated
     * @property {Array.<number>|null} [tagidsCurated] CCuratorPreferences tagidsCurated
     * @property {Array.<number>|null} [tagidsFiltered] CCuratorPreferences tagidsFiltered
     * @property {string|null} [websiteTitle] CCuratorPreferences websiteTitle
     * @property {string|null} [websiteUrl] CCuratorPreferences websiteUrl
     * @property {string|null} [discussionUrl] CCuratorPreferences discussionUrl
     * @property {boolean|null} [showBroadcast] CCuratorPreferences showBroadcast
     */

    /**
     * Constructs a new CCuratorPreferences.
     * @exports CCuratorPreferences
     * @classdesc Represents a CCuratorPreferences.
     * @implements ICCuratorPreferences
     * @constructor
     * @param {ICCuratorPreferences=} [properties] Properties to set
     */
    function CCuratorPreferences(properties) {
        this.tagidsCurated = [];
        this.tagidsFiltered = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CCuratorPreferences supportedLanguages.
     * @member {number} supportedLanguages
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.supportedLanguages = 0;

    /**
     * CCuratorPreferences platformWindows.
     * @member {boolean} platformWindows
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.platformWindows = false;

    /**
     * CCuratorPreferences platformMac.
     * @member {boolean} platformMac
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.platformMac = false;

    /**
     * CCuratorPreferences platformLinux.
     * @member {boolean} platformLinux
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.platformLinux = false;

    /**
     * CCuratorPreferences vrContent.
     * @member {boolean} vrContent
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.vrContent = false;

    /**
     * CCuratorPreferences adultContentViolence.
     * @member {boolean} adultContentViolence
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.adultContentViolence = false;

    /**
     * CCuratorPreferences adultContentSex.
     * @member {boolean} adultContentSex
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.adultContentSex = false;

    /**
     * CCuratorPreferences timestampUpdated.
     * @member {number} timestampUpdated
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.timestampUpdated = 0;

    /**
     * CCuratorPreferences tagidsCurated.
     * @member {Array.<number>} tagidsCurated
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.tagidsCurated = $util.emptyArray;

    /**
     * CCuratorPreferences tagidsFiltered.
     * @member {Array.<number>} tagidsFiltered
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.tagidsFiltered = $util.emptyArray;

    /**
     * CCuratorPreferences websiteTitle.
     * @member {string} websiteTitle
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.websiteTitle = "";

    /**
     * CCuratorPreferences websiteUrl.
     * @member {string} websiteUrl
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.websiteUrl = "";

    /**
     * CCuratorPreferences discussionUrl.
     * @member {string} discussionUrl
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.discussionUrl = "";

    /**
     * CCuratorPreferences showBroadcast.
     * @member {boolean} showBroadcast
     * @memberof CCuratorPreferences
     * @instance
     */
    CCuratorPreferences.prototype.showBroadcast = false;

    /**
     * Creates a new CCuratorPreferences instance using the specified properties.
     * @function create
     * @memberof CCuratorPreferences
     * @static
     * @param {ICCuratorPreferences=} [properties] Properties to set
     * @returns {CCuratorPreferences} CCuratorPreferences instance
     */
    CCuratorPreferences.create = function create(properties) {
        return new CCuratorPreferences(properties);
    };

    /**
     * Encodes the specified CCuratorPreferences message. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
     * @function encode
     * @memberof CCuratorPreferences
     * @static
     * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCuratorPreferences.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.supportedLanguages != null && Object.hasOwnProperty.call(message, "supportedLanguages"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.supportedLanguages);
        if (message.platformWindows != null && Object.hasOwnProperty.call(message, "platformWindows"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.platformWindows);
        if (message.platformMac != null && Object.hasOwnProperty.call(message, "platformMac"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.platformMac);
        if (message.platformLinux != null && Object.hasOwnProperty.call(message, "platformLinux"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.platformLinux);
        if (message.vrContent != null && Object.hasOwnProperty.call(message, "vrContent"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.vrContent);
        if (message.adultContentViolence != null && Object.hasOwnProperty.call(message, "adultContentViolence"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.adultContentViolence);
        if (message.adultContentSex != null && Object.hasOwnProperty.call(message, "adultContentSex"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.adultContentSex);
        if (message.timestampUpdated != null && Object.hasOwnProperty.call(message, "timestampUpdated"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timestampUpdated);
        if (message.tagidsCurated != null && message.tagidsCurated.length)
            for (let i = 0; i < message.tagidsCurated.length; ++i)
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.tagidsCurated[i]);
        if (message.tagidsFiltered != null && message.tagidsFiltered.length)
            for (let i = 0; i < message.tagidsFiltered.length; ++i)
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.tagidsFiltered[i]);
        if (message.websiteTitle != null && Object.hasOwnProperty.call(message, "websiteTitle"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.websiteTitle);
        if (message.websiteUrl != null && Object.hasOwnProperty.call(message, "websiteUrl"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.websiteUrl);
        if (message.discussionUrl != null && Object.hasOwnProperty.call(message, "discussionUrl"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.discussionUrl);
        if (message.showBroadcast != null && Object.hasOwnProperty.call(message, "showBroadcast"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.showBroadcast);
        return writer;
    };

    /**
     * Encodes the specified CCuratorPreferences message, length delimited. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CCuratorPreferences
     * @static
     * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCuratorPreferences.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CCuratorPreferences message from the specified reader or buffer.
     * @function decode
     * @memberof CCuratorPreferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCuratorPreferences} CCuratorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCuratorPreferences.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCuratorPreferences();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.supportedLanguages = reader.uint32();
                    break;
                }
            case 2: {
                    message.platformWindows = reader.bool();
                    break;
                }
            case 3: {
                    message.platformMac = reader.bool();
                    break;
                }
            case 4: {
                    message.platformLinux = reader.bool();
                    break;
                }
            case 5: {
                    message.vrContent = reader.bool();
                    break;
                }
            case 6: {
                    message.adultContentViolence = reader.bool();
                    break;
                }
            case 7: {
                    message.adultContentSex = reader.bool();
                    break;
                }
            case 8: {
                    message.timestampUpdated = reader.uint32();
                    break;
                }
            case 9: {
                    if (!(message.tagidsCurated && message.tagidsCurated.length))
                        message.tagidsCurated = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagidsCurated.push(reader.uint32());
                    } else
                        message.tagidsCurated.push(reader.uint32());
                    break;
                }
            case 10: {
                    if (!(message.tagidsFiltered && message.tagidsFiltered.length))
                        message.tagidsFiltered = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagidsFiltered.push(reader.uint32());
                    } else
                        message.tagidsFiltered.push(reader.uint32());
                    break;
                }
            case 11: {
                    message.websiteTitle = reader.string();
                    break;
                }
            case 12: {
                    message.websiteUrl = reader.string();
                    break;
                }
            case 13: {
                    message.discussionUrl = reader.string();
                    break;
                }
            case 14: {
                    message.showBroadcast = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CCuratorPreferences message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CCuratorPreferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CCuratorPreferences} CCuratorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCuratorPreferences.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CCuratorPreferences message.
     * @function verify
     * @memberof CCuratorPreferences
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CCuratorPreferences.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.supportedLanguages != null && message.hasOwnProperty("supportedLanguages"))
            if (!$util.isInteger(message.supportedLanguages))
                return "supportedLanguages: integer expected";
        if (message.platformWindows != null && message.hasOwnProperty("platformWindows"))
            if (typeof message.platformWindows !== "boolean")
                return "platformWindows: boolean expected";
        if (message.platformMac != null && message.hasOwnProperty("platformMac"))
            if (typeof message.platformMac !== "boolean")
                return "platformMac: boolean expected";
        if (message.platformLinux != null && message.hasOwnProperty("platformLinux"))
            if (typeof message.platformLinux !== "boolean")
                return "platformLinux: boolean expected";
        if (message.vrContent != null && message.hasOwnProperty("vrContent"))
            if (typeof message.vrContent !== "boolean")
                return "vrContent: boolean expected";
        if (message.adultContentViolence != null && message.hasOwnProperty("adultContentViolence"))
            if (typeof message.adultContentViolence !== "boolean")
                return "adultContentViolence: boolean expected";
        if (message.adultContentSex != null && message.hasOwnProperty("adultContentSex"))
            if (typeof message.adultContentSex !== "boolean")
                return "adultContentSex: boolean expected";
        if (message.timestampUpdated != null && message.hasOwnProperty("timestampUpdated"))
            if (!$util.isInteger(message.timestampUpdated))
                return "timestampUpdated: integer expected";
        if (message.tagidsCurated != null && message.hasOwnProperty("tagidsCurated")) {
            if (!Array.isArray(message.tagidsCurated))
                return "tagidsCurated: array expected";
            for (let i = 0; i < message.tagidsCurated.length; ++i)
                if (!$util.isInteger(message.tagidsCurated[i]))
                    return "tagidsCurated: integer[] expected";
        }
        if (message.tagidsFiltered != null && message.hasOwnProperty("tagidsFiltered")) {
            if (!Array.isArray(message.tagidsFiltered))
                return "tagidsFiltered: array expected";
            for (let i = 0; i < message.tagidsFiltered.length; ++i)
                if (!$util.isInteger(message.tagidsFiltered[i]))
                    return "tagidsFiltered: integer[] expected";
        }
        if (message.websiteTitle != null && message.hasOwnProperty("websiteTitle"))
            if (!$util.isString(message.websiteTitle))
                return "websiteTitle: string expected";
        if (message.websiteUrl != null && message.hasOwnProperty("websiteUrl"))
            if (!$util.isString(message.websiteUrl))
                return "websiteUrl: string expected";
        if (message.discussionUrl != null && message.hasOwnProperty("discussionUrl"))
            if (!$util.isString(message.discussionUrl))
                return "discussionUrl: string expected";
        if (message.showBroadcast != null && message.hasOwnProperty("showBroadcast"))
            if (typeof message.showBroadcast !== "boolean")
                return "showBroadcast: boolean expected";
        return null;
    };

    /**
     * Creates a CCuratorPreferences message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CCuratorPreferences
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CCuratorPreferences} CCuratorPreferences
     */
    CCuratorPreferences.fromObject = function fromObject(object) {
        if (object instanceof $root.CCuratorPreferences)
            return object;
        let message = new $root.CCuratorPreferences();
        if (object.supportedLanguages != null)
            message.supportedLanguages = object.supportedLanguages >>> 0;
        if (object.platformWindows != null)
            message.platformWindows = Boolean(object.platformWindows);
        if (object.platformMac != null)
            message.platformMac = Boolean(object.platformMac);
        if (object.platformLinux != null)
            message.platformLinux = Boolean(object.platformLinux);
        if (object.vrContent != null)
            message.vrContent = Boolean(object.vrContent);
        if (object.adultContentViolence != null)
            message.adultContentViolence = Boolean(object.adultContentViolence);
        if (object.adultContentSex != null)
            message.adultContentSex = Boolean(object.adultContentSex);
        if (object.timestampUpdated != null)
            message.timestampUpdated = object.timestampUpdated >>> 0;
        if (object.tagidsCurated) {
            if (!Array.isArray(object.tagidsCurated))
                throw TypeError(".CCuratorPreferences.tagidsCurated: array expected");
            message.tagidsCurated = [];
            for (let i = 0; i < object.tagidsCurated.length; ++i)
                message.tagidsCurated[i] = object.tagidsCurated[i] >>> 0;
        }
        if (object.tagidsFiltered) {
            if (!Array.isArray(object.tagidsFiltered))
                throw TypeError(".CCuratorPreferences.tagidsFiltered: array expected");
            message.tagidsFiltered = [];
            for (let i = 0; i < object.tagidsFiltered.length; ++i)
                message.tagidsFiltered[i] = object.tagidsFiltered[i] >>> 0;
        }
        if (object.websiteTitle != null)
            message.websiteTitle = String(object.websiteTitle);
        if (object.websiteUrl != null)
            message.websiteUrl = String(object.websiteUrl);
        if (object.discussionUrl != null)
            message.discussionUrl = String(object.discussionUrl);
        if (object.showBroadcast != null)
            message.showBroadcast = Boolean(object.showBroadcast);
        return message;
    };

    /**
     * Creates a plain object from a CCuratorPreferences message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CCuratorPreferences
     * @static
     * @param {CCuratorPreferences} message CCuratorPreferences
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CCuratorPreferences.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.tagidsCurated = [];
            object.tagidsFiltered = [];
        }
        if (options.defaults) {
            object.supportedLanguages = 0;
            object.platformWindows = false;
            object.platformMac = false;
            object.platformLinux = false;
            object.vrContent = false;
            object.adultContentViolence = false;
            object.adultContentSex = false;
            object.timestampUpdated = 0;
            object.websiteTitle = "";
            object.websiteUrl = "";
            object.discussionUrl = "";
            object.showBroadcast = false;
        }
        if (message.supportedLanguages != null && message.hasOwnProperty("supportedLanguages"))
            object.supportedLanguages = message.supportedLanguages;
        if (message.platformWindows != null && message.hasOwnProperty("platformWindows"))
            object.platformWindows = message.platformWindows;
        if (message.platformMac != null && message.hasOwnProperty("platformMac"))
            object.platformMac = message.platformMac;
        if (message.platformLinux != null && message.hasOwnProperty("platformLinux"))
            object.platformLinux = message.platformLinux;
        if (message.vrContent != null && message.hasOwnProperty("vrContent"))
            object.vrContent = message.vrContent;
        if (message.adultContentViolence != null && message.hasOwnProperty("adultContentViolence"))
            object.adultContentViolence = message.adultContentViolence;
        if (message.adultContentSex != null && message.hasOwnProperty("adultContentSex"))
            object.adultContentSex = message.adultContentSex;
        if (message.timestampUpdated != null && message.hasOwnProperty("timestampUpdated"))
            object.timestampUpdated = message.timestampUpdated;
        if (message.tagidsCurated && message.tagidsCurated.length) {
            object.tagidsCurated = [];
            for (let j = 0; j < message.tagidsCurated.length; ++j)
                object.tagidsCurated[j] = message.tagidsCurated[j];
        }
        if (message.tagidsFiltered && message.tagidsFiltered.length) {
            object.tagidsFiltered = [];
            for (let j = 0; j < message.tagidsFiltered.length; ++j)
                object.tagidsFiltered[j] = message.tagidsFiltered[j];
        }
        if (message.websiteTitle != null && message.hasOwnProperty("websiteTitle"))
            object.websiteTitle = message.websiteTitle;
        if (message.websiteUrl != null && message.hasOwnProperty("websiteUrl"))
            object.websiteUrl = message.websiteUrl;
        if (message.discussionUrl != null && message.hasOwnProperty("discussionUrl"))
            object.discussionUrl = message.discussionUrl;
        if (message.showBroadcast != null && message.hasOwnProperty("showBroadcast"))
            object.showBroadcast = message.showBroadcast;
        return object;
    };

    /**
     * Converts this CCuratorPreferences to JSON.
     * @function toJSON
     * @memberof CCuratorPreferences
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CCuratorPreferences.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CCuratorPreferences
     * @function getTypeUrl
     * @memberof CCuratorPreferences
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CCuratorPreferences.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CCuratorPreferences";
    };

    return CCuratorPreferences;
})();

export const CLocalizationToken = $root.CLocalizationToken = (() => {

    /**
     * Properties of a CLocalizationToken.
     * @exports ICLocalizationToken
     * @interface ICLocalizationToken
     * @property {number|null} [language] CLocalizationToken language
     * @property {string|null} [localizedString] CLocalizationToken localizedString
     */

    /**
     * Constructs a new CLocalizationToken.
     * @exports CLocalizationToken
     * @classdesc Represents a CLocalizationToken.
     * @implements ICLocalizationToken
     * @constructor
     * @param {ICLocalizationToken=} [properties] Properties to set
     */
    function CLocalizationToken(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CLocalizationToken language.
     * @member {number} language
     * @memberof CLocalizationToken
     * @instance
     */
    CLocalizationToken.prototype.language = 0;

    /**
     * CLocalizationToken localizedString.
     * @member {string} localizedString
     * @memberof CLocalizationToken
     * @instance
     */
    CLocalizationToken.prototype.localizedString = "";

    /**
     * Creates a new CLocalizationToken instance using the specified properties.
     * @function create
     * @memberof CLocalizationToken
     * @static
     * @param {ICLocalizationToken=} [properties] Properties to set
     * @returns {CLocalizationToken} CLocalizationToken instance
     */
    CLocalizationToken.create = function create(properties) {
        return new CLocalizationToken(properties);
    };

    /**
     * Encodes the specified CLocalizationToken message. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
     * @function encode
     * @memberof CLocalizationToken
     * @static
     * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CLocalizationToken.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.language);
        if (message.localizedString != null && Object.hasOwnProperty.call(message, "localizedString"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.localizedString);
        return writer;
    };

    /**
     * Encodes the specified CLocalizationToken message, length delimited. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CLocalizationToken
     * @static
     * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CLocalizationToken.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CLocalizationToken message from the specified reader or buffer.
     * @function decode
     * @memberof CLocalizationToken
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CLocalizationToken} CLocalizationToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CLocalizationToken.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLocalizationToken();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.language = reader.uint32();
                    break;
                }
            case 2: {
                    message.localizedString = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CLocalizationToken message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CLocalizationToken
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CLocalizationToken} CLocalizationToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CLocalizationToken.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CLocalizationToken message.
     * @function verify
     * @memberof CLocalizationToken
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CLocalizationToken.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isInteger(message.language))
                return "language: integer expected";
        if (message.localizedString != null && message.hasOwnProperty("localizedString"))
            if (!$util.isString(message.localizedString))
                return "localizedString: string expected";
        return null;
    };

    /**
     * Creates a CLocalizationToken message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CLocalizationToken
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CLocalizationToken} CLocalizationToken
     */
    CLocalizationToken.fromObject = function fromObject(object) {
        if (object instanceof $root.CLocalizationToken)
            return object;
        let message = new $root.CLocalizationToken();
        if (object.language != null)
            message.language = object.language >>> 0;
        if (object.localizedString != null)
            message.localizedString = String(object.localizedString);
        return message;
    };

    /**
     * Creates a plain object from a CLocalizationToken message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CLocalizationToken
     * @static
     * @param {CLocalizationToken} message CLocalizationToken
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CLocalizationToken.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.language = 0;
            object.localizedString = "";
        }
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.localizedString != null && message.hasOwnProperty("localizedString"))
            object.localizedString = message.localizedString;
        return object;
    };

    /**
     * Converts this CLocalizationToken to JSON.
     * @function toJSON
     * @memberof CLocalizationToken
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CLocalizationToken.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CLocalizationToken
     * @function getTypeUrl
     * @memberof CLocalizationToken
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CLocalizationToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CLocalizationToken";
    };

    return CLocalizationToken;
})();

export const CClanEventUserNewsTuple = $root.CClanEventUserNewsTuple = (() => {

    /**
     * Properties of a CClanEventUserNewsTuple.
     * @exports ICClanEventUserNewsTuple
     * @interface ICClanEventUserNewsTuple
     * @property {number|null} [clanid] CClanEventUserNewsTuple clanid
     * @property {number|Long|null} [eventGid] CClanEventUserNewsTuple eventGid
     * @property {number|Long|null} [announcementGid] CClanEventUserNewsTuple announcementGid
     * @property {number|null} [rtimeStart] CClanEventUserNewsTuple rtimeStart
     * @property {number|null} [rtimeEnd] CClanEventUserNewsTuple rtimeEnd
     * @property {number|null} [priorityScore] CClanEventUserNewsTuple priorityScore
     * @property {number|null} [type] CClanEventUserNewsTuple type
     * @property {number|null} [clampRangeSlot] CClanEventUserNewsTuple clampRangeSlot
     * @property {number|null} [appid] CClanEventUserNewsTuple appid
     * @property {number|null} [rtime32LastModified] CClanEventUserNewsTuple rtime32LastModified
     */

    /**
     * Constructs a new CClanEventUserNewsTuple.
     * @exports CClanEventUserNewsTuple
     * @classdesc Represents a CClanEventUserNewsTuple.
     * @implements ICClanEventUserNewsTuple
     * @constructor
     * @param {ICClanEventUserNewsTuple=} [properties] Properties to set
     */
    function CClanEventUserNewsTuple(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CClanEventUserNewsTuple clanid.
     * @member {number} clanid
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.clanid = 0;

    /**
     * CClanEventUserNewsTuple eventGid.
     * @member {number|Long} eventGid
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.eventGid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventUserNewsTuple announcementGid.
     * @member {number|Long} announcementGid
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.announcementGid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventUserNewsTuple rtimeStart.
     * @member {number} rtimeStart
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.rtimeStart = 0;

    /**
     * CClanEventUserNewsTuple rtimeEnd.
     * @member {number} rtimeEnd
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.rtimeEnd = 0;

    /**
     * CClanEventUserNewsTuple priorityScore.
     * @member {number} priorityScore
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.priorityScore = 0;

    /**
     * CClanEventUserNewsTuple type.
     * @member {number} type
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.type = 0;

    /**
     * CClanEventUserNewsTuple clampRangeSlot.
     * @member {number} clampRangeSlot
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.clampRangeSlot = 0;

    /**
     * CClanEventUserNewsTuple appid.
     * @member {number} appid
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.appid = 0;

    /**
     * CClanEventUserNewsTuple rtime32LastModified.
     * @member {number} rtime32LastModified
     * @memberof CClanEventUserNewsTuple
     * @instance
     */
    CClanEventUserNewsTuple.prototype.rtime32LastModified = 0;

    /**
     * Creates a new CClanEventUserNewsTuple instance using the specified properties.
     * @function create
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {ICClanEventUserNewsTuple=} [properties] Properties to set
     * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple instance
     */
    CClanEventUserNewsTuple.create = function create(properties) {
        return new CClanEventUserNewsTuple(properties);
    };

    /**
     * Encodes the specified CClanEventUserNewsTuple message. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
     * @function encode
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {ICClanEventUserNewsTuple} message CClanEventUserNewsTuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanEventUserNewsTuple.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clanid != null && Object.hasOwnProperty.call(message, "clanid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.clanid);
        if (message.eventGid != null && Object.hasOwnProperty.call(message, "eventGid"))
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.eventGid);
        if (message.announcementGid != null && Object.hasOwnProperty.call(message, "announcementGid"))
            writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.announcementGid);
        if (message.rtimeStart != null && Object.hasOwnProperty.call(message, "rtimeStart"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rtimeStart);
        if (message.rtimeEnd != null && Object.hasOwnProperty.call(message, "rtimeEnd"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rtimeEnd);
        if (message.priorityScore != null && Object.hasOwnProperty.call(message, "priorityScore"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.priorityScore);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.type);
        if (message.clampRangeSlot != null && Object.hasOwnProperty.call(message, "clampRangeSlot"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.clampRangeSlot);
        if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.appid);
        if (message.rtime32LastModified != null && Object.hasOwnProperty.call(message, "rtime32LastModified"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.rtime32LastModified);
        return writer;
    };

    /**
     * Encodes the specified CClanEventUserNewsTuple message, length delimited. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {ICClanEventUserNewsTuple} message CClanEventUserNewsTuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanEventUserNewsTuple.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer.
     * @function decode
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanEventUserNewsTuple.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanEventUserNewsTuple();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.clanid = reader.uint32();
                    break;
                }
            case 2: {
                    message.eventGid = reader.fixed64();
                    break;
                }
            case 3: {
                    message.announcementGid = reader.fixed64();
                    break;
                }
            case 4: {
                    message.rtimeStart = reader.uint32();
                    break;
                }
            case 5: {
                    message.rtimeEnd = reader.uint32();
                    break;
                }
            case 6: {
                    message.priorityScore = reader.uint32();
                    break;
                }
            case 7: {
                    message.type = reader.uint32();
                    break;
                }
            case 8: {
                    message.clampRangeSlot = reader.uint32();
                    break;
                }
            case 9: {
                    message.appid = reader.uint32();
                    break;
                }
            case 10: {
                    message.rtime32LastModified = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanEventUserNewsTuple.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CClanEventUserNewsTuple message.
     * @function verify
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CClanEventUserNewsTuple.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clanid != null && message.hasOwnProperty("clanid"))
            if (!$util.isInteger(message.clanid))
                return "clanid: integer expected";
        if (message.eventGid != null && message.hasOwnProperty("eventGid"))
            if (!$util.isInteger(message.eventGid) && !(message.eventGid && $util.isInteger(message.eventGid.low) && $util.isInteger(message.eventGid.high)))
                return "eventGid: integer|Long expected";
        if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
            if (!$util.isInteger(message.announcementGid) && !(message.announcementGid && $util.isInteger(message.announcementGid.low) && $util.isInteger(message.announcementGid.high)))
                return "announcementGid: integer|Long expected";
        if (message.rtimeStart != null && message.hasOwnProperty("rtimeStart"))
            if (!$util.isInteger(message.rtimeStart))
                return "rtimeStart: integer expected";
        if (message.rtimeEnd != null && message.hasOwnProperty("rtimeEnd"))
            if (!$util.isInteger(message.rtimeEnd))
                return "rtimeEnd: integer expected";
        if (message.priorityScore != null && message.hasOwnProperty("priorityScore"))
            if (!$util.isInteger(message.priorityScore))
                return "priorityScore: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.clampRangeSlot != null && message.hasOwnProperty("clampRangeSlot"))
            if (!$util.isInteger(message.clampRangeSlot))
                return "clampRangeSlot: integer expected";
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (!$util.isInteger(message.appid))
                return "appid: integer expected";
        if (message.rtime32LastModified != null && message.hasOwnProperty("rtime32LastModified"))
            if (!$util.isInteger(message.rtime32LastModified))
                return "rtime32LastModified: integer expected";
        return null;
    };

    /**
     * Creates a CClanEventUserNewsTuple message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
     */
    CClanEventUserNewsTuple.fromObject = function fromObject(object) {
        if (object instanceof $root.CClanEventUserNewsTuple)
            return object;
        let message = new $root.CClanEventUserNewsTuple();
        if (object.clanid != null)
            message.clanid = object.clanid >>> 0;
        if (object.eventGid != null)
            if ($util.Long)
                (message.eventGid = $util.Long.fromValue(object.eventGid)).unsigned = false;
            else if (typeof object.eventGid === "string")
                message.eventGid = parseInt(object.eventGid, 10);
            else if (typeof object.eventGid === "number")
                message.eventGid = object.eventGid;
            else if (typeof object.eventGid === "object")
                message.eventGid = new $util.LongBits(object.eventGid.low >>> 0, object.eventGid.high >>> 0).toNumber();
        if (object.announcementGid != null)
            if ($util.Long)
                (message.announcementGid = $util.Long.fromValue(object.announcementGid)).unsigned = false;
            else if (typeof object.announcementGid === "string")
                message.announcementGid = parseInt(object.announcementGid, 10);
            else if (typeof object.announcementGid === "number")
                message.announcementGid = object.announcementGid;
            else if (typeof object.announcementGid === "object")
                message.announcementGid = new $util.LongBits(object.announcementGid.low >>> 0, object.announcementGid.high >>> 0).toNumber();
        if (object.rtimeStart != null)
            message.rtimeStart = object.rtimeStart >>> 0;
        if (object.rtimeEnd != null)
            message.rtimeEnd = object.rtimeEnd >>> 0;
        if (object.priorityScore != null)
            message.priorityScore = object.priorityScore >>> 0;
        if (object.type != null)
            message.type = object.type >>> 0;
        if (object.clampRangeSlot != null)
            message.clampRangeSlot = object.clampRangeSlot >>> 0;
        if (object.appid != null)
            message.appid = object.appid >>> 0;
        if (object.rtime32LastModified != null)
            message.rtime32LastModified = object.rtime32LastModified >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CClanEventUserNewsTuple message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {CClanEventUserNewsTuple} message CClanEventUserNewsTuple
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CClanEventUserNewsTuple.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.clanid = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.eventGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.eventGid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.announcementGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.announcementGid = options.longs === String ? "0" : 0;
            object.rtimeStart = 0;
            object.rtimeEnd = 0;
            object.priorityScore = 0;
            object.type = 0;
            object.clampRangeSlot = 0;
            object.appid = 0;
            object.rtime32LastModified = 0;
        }
        if (message.clanid != null && message.hasOwnProperty("clanid"))
            object.clanid = message.clanid;
        if (message.eventGid != null && message.hasOwnProperty("eventGid"))
            if (typeof message.eventGid === "number")
                object.eventGid = options.longs === String ? String(message.eventGid) : message.eventGid;
            else
                object.eventGid = options.longs === String ? $util.Long.prototype.toString.call(message.eventGid) : options.longs === Number ? new $util.LongBits(message.eventGid.low >>> 0, message.eventGid.high >>> 0).toNumber() : message.eventGid;
        if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
            if (typeof message.announcementGid === "number")
                object.announcementGid = options.longs === String ? String(message.announcementGid) : message.announcementGid;
            else
                object.announcementGid = options.longs === String ? $util.Long.prototype.toString.call(message.announcementGid) : options.longs === Number ? new $util.LongBits(message.announcementGid.low >>> 0, message.announcementGid.high >>> 0).toNumber() : message.announcementGid;
        if (message.rtimeStart != null && message.hasOwnProperty("rtimeStart"))
            object.rtimeStart = message.rtimeStart;
        if (message.rtimeEnd != null && message.hasOwnProperty("rtimeEnd"))
            object.rtimeEnd = message.rtimeEnd;
        if (message.priorityScore != null && message.hasOwnProperty("priorityScore"))
            object.priorityScore = message.priorityScore;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.clampRangeSlot != null && message.hasOwnProperty("clampRangeSlot"))
            object.clampRangeSlot = message.clampRangeSlot;
        if (message.appid != null && message.hasOwnProperty("appid"))
            object.appid = message.appid;
        if (message.rtime32LastModified != null && message.hasOwnProperty("rtime32LastModified"))
            object.rtime32LastModified = message.rtime32LastModified;
        return object;
    };

    /**
     * Converts this CClanEventUserNewsTuple to JSON.
     * @function toJSON
     * @memberof CClanEventUserNewsTuple
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CClanEventUserNewsTuple.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CClanEventUserNewsTuple
     * @function getTypeUrl
     * @memberof CClanEventUserNewsTuple
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CClanEventUserNewsTuple.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CClanEventUserNewsTuple";
    };

    return CClanEventUserNewsTuple;
})();

export const CClanMatchEventByRange = $root.CClanMatchEventByRange = (() => {

    /**
     * Properties of a CClanMatchEventByRange.
     * @exports ICClanMatchEventByRange
     * @interface ICClanMatchEventByRange
     * @property {number|null} [rtimeBefore] CClanMatchEventByRange rtimeBefore
     * @property {number|null} [rtimeAfter] CClanMatchEventByRange rtimeAfter
     * @property {number|null} [qualified] CClanMatchEventByRange qualified
     * @property {Array.<ICClanEventUserNewsTuple>|null} [events] CClanMatchEventByRange events
     */

    /**
     * Constructs a new CClanMatchEventByRange.
     * @exports CClanMatchEventByRange
     * @classdesc Represents a CClanMatchEventByRange.
     * @implements ICClanMatchEventByRange
     * @constructor
     * @param {ICClanMatchEventByRange=} [properties] Properties to set
     */
    function CClanMatchEventByRange(properties) {
        this.events = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CClanMatchEventByRange rtimeBefore.
     * @member {number} rtimeBefore
     * @memberof CClanMatchEventByRange
     * @instance
     */
    CClanMatchEventByRange.prototype.rtimeBefore = 0;

    /**
     * CClanMatchEventByRange rtimeAfter.
     * @member {number} rtimeAfter
     * @memberof CClanMatchEventByRange
     * @instance
     */
    CClanMatchEventByRange.prototype.rtimeAfter = 0;

    /**
     * CClanMatchEventByRange qualified.
     * @member {number} qualified
     * @memberof CClanMatchEventByRange
     * @instance
     */
    CClanMatchEventByRange.prototype.qualified = 0;

    /**
     * CClanMatchEventByRange events.
     * @member {Array.<ICClanEventUserNewsTuple>} events
     * @memberof CClanMatchEventByRange
     * @instance
     */
    CClanMatchEventByRange.prototype.events = $util.emptyArray;

    /**
     * Creates a new CClanMatchEventByRange instance using the specified properties.
     * @function create
     * @memberof CClanMatchEventByRange
     * @static
     * @param {ICClanMatchEventByRange=} [properties] Properties to set
     * @returns {CClanMatchEventByRange} CClanMatchEventByRange instance
     */
    CClanMatchEventByRange.create = function create(properties) {
        return new CClanMatchEventByRange(properties);
    };

    /**
     * Encodes the specified CClanMatchEventByRange message. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
     * @function encode
     * @memberof CClanMatchEventByRange
     * @static
     * @param {ICClanMatchEventByRange} message CClanMatchEventByRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanMatchEventByRange.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rtimeBefore != null && Object.hasOwnProperty.call(message, "rtimeBefore"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rtimeBefore);
        if (message.rtimeAfter != null && Object.hasOwnProperty.call(message, "rtimeAfter"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rtimeAfter);
        if (message.qualified != null && Object.hasOwnProperty.call(message, "qualified"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.qualified);
        if (message.events != null && message.events.length)
            for (let i = 0; i < message.events.length; ++i)
                $root.CClanEventUserNewsTuple.encode(message.events[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CClanMatchEventByRange message, length delimited. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CClanMatchEventByRange
     * @static
     * @param {ICClanMatchEventByRange} message CClanMatchEventByRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanMatchEventByRange.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CClanMatchEventByRange message from the specified reader or buffer.
     * @function decode
     * @memberof CClanMatchEventByRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CClanMatchEventByRange} CClanMatchEventByRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanMatchEventByRange.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanMatchEventByRange();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.rtimeBefore = reader.uint32();
                    break;
                }
            case 2: {
                    message.rtimeAfter = reader.uint32();
                    break;
                }
            case 3: {
                    message.qualified = reader.uint32();
                    break;
                }
            case 4: {
                    if (!(message.events && message.events.length))
                        message.events = [];
                    message.events.push($root.CClanEventUserNewsTuple.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CClanMatchEventByRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CClanMatchEventByRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CClanMatchEventByRange} CClanMatchEventByRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanMatchEventByRange.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CClanMatchEventByRange message.
     * @function verify
     * @memberof CClanMatchEventByRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CClanMatchEventByRange.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rtimeBefore != null && message.hasOwnProperty("rtimeBefore"))
            if (!$util.isInteger(message.rtimeBefore))
                return "rtimeBefore: integer expected";
        if (message.rtimeAfter != null && message.hasOwnProperty("rtimeAfter"))
            if (!$util.isInteger(message.rtimeAfter))
                return "rtimeAfter: integer expected";
        if (message.qualified != null && message.hasOwnProperty("qualified"))
            if (!$util.isInteger(message.qualified))
                return "qualified: integer expected";
        if (message.events != null && message.hasOwnProperty("events")) {
            if (!Array.isArray(message.events))
                return "events: array expected";
            for (let i = 0; i < message.events.length; ++i) {
                let error = $root.CClanEventUserNewsTuple.verify(message.events[i]);
                if (error)
                    return "events." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CClanMatchEventByRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CClanMatchEventByRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CClanMatchEventByRange} CClanMatchEventByRange
     */
    CClanMatchEventByRange.fromObject = function fromObject(object) {
        if (object instanceof $root.CClanMatchEventByRange)
            return object;
        let message = new $root.CClanMatchEventByRange();
        if (object.rtimeBefore != null)
            message.rtimeBefore = object.rtimeBefore >>> 0;
        if (object.rtimeAfter != null)
            message.rtimeAfter = object.rtimeAfter >>> 0;
        if (object.qualified != null)
            message.qualified = object.qualified >>> 0;
        if (object.events) {
            if (!Array.isArray(object.events))
                throw TypeError(".CClanMatchEventByRange.events: array expected");
            message.events = [];
            for (let i = 0; i < object.events.length; ++i) {
                if (typeof object.events[i] !== "object")
                    throw TypeError(".CClanMatchEventByRange.events: object expected");
                message.events[i] = $root.CClanEventUserNewsTuple.fromObject(object.events[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CClanMatchEventByRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CClanMatchEventByRange
     * @static
     * @param {CClanMatchEventByRange} message CClanMatchEventByRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CClanMatchEventByRange.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.events = [];
        if (options.defaults) {
            object.rtimeBefore = 0;
            object.rtimeAfter = 0;
            object.qualified = 0;
        }
        if (message.rtimeBefore != null && message.hasOwnProperty("rtimeBefore"))
            object.rtimeBefore = message.rtimeBefore;
        if (message.rtimeAfter != null && message.hasOwnProperty("rtimeAfter"))
            object.rtimeAfter = message.rtimeAfter;
        if (message.qualified != null && message.hasOwnProperty("qualified"))
            object.qualified = message.qualified;
        if (message.events && message.events.length) {
            object.events = [];
            for (let j = 0; j < message.events.length; ++j)
                object.events[j] = $root.CClanEventUserNewsTuple.toObject(message.events[j], options);
        }
        return object;
    };

    /**
     * Converts this CClanMatchEventByRange to JSON.
     * @function toJSON
     * @memberof CClanMatchEventByRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CClanMatchEventByRange.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CClanMatchEventByRange
     * @function getTypeUrl
     * @memberof CClanMatchEventByRange
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CClanMatchEventByRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CClanMatchEventByRange";
    };

    return CClanMatchEventByRange;
})();

export const CCommunity_ClanAnnouncementInfo = $root.CCommunity_ClanAnnouncementInfo = (() => {

    /**
     * Properties of a CCommunity_ClanAnnouncementInfo.
     * @exports ICCommunity_ClanAnnouncementInfo
     * @interface ICCommunity_ClanAnnouncementInfo
     * @property {number|Long|null} [gid] CCommunity_ClanAnnouncementInfo gid
     * @property {number|Long|null} [clanid] CCommunity_ClanAnnouncementInfo clanid
     * @property {number|Long|null} [posterid] CCommunity_ClanAnnouncementInfo posterid
     * @property {string|null} [headline] CCommunity_ClanAnnouncementInfo headline
     * @property {number|null} [posttime] CCommunity_ClanAnnouncementInfo posttime
     * @property {number|null} [updatetime] CCommunity_ClanAnnouncementInfo updatetime
     * @property {string|null} [body] CCommunity_ClanAnnouncementInfo body
     * @property {number|null} [commentcount] CCommunity_ClanAnnouncementInfo commentcount
     * @property {Array.<string>|null} [tags] CCommunity_ClanAnnouncementInfo tags
     * @property {number|null} [language] CCommunity_ClanAnnouncementInfo language
     * @property {boolean|null} [hidden] CCommunity_ClanAnnouncementInfo hidden
     * @property {number|Long|null} [forumTopicId] CCommunity_ClanAnnouncementInfo forumTopicId
     * @property {number|Long|null} [eventGid] CCommunity_ClanAnnouncementInfo eventGid
     * @property {number|null} [voteupcount] CCommunity_ClanAnnouncementInfo voteupcount
     * @property {number|null} [votedowncount] CCommunity_ClanAnnouncementInfo votedowncount
     * @property {EBanContentCheckResult|null} [banCheckResult] CCommunity_ClanAnnouncementInfo banCheckResult
     * @property {boolean|null} [banned] CCommunity_ClanAnnouncementInfo banned
     */

    /**
     * Constructs a new CCommunity_ClanAnnouncementInfo.
     * @exports CCommunity_ClanAnnouncementInfo
     * @classdesc Represents a CCommunity_ClanAnnouncementInfo.
     * @implements ICCommunity_ClanAnnouncementInfo
     * @constructor
     * @param {ICCommunity_ClanAnnouncementInfo=} [properties] Properties to set
     */
    function CCommunity_ClanAnnouncementInfo(properties) {
        this.tags = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CCommunity_ClanAnnouncementInfo gid.
     * @member {number|Long} gid
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CCommunity_ClanAnnouncementInfo clanid.
     * @member {number|Long} clanid
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.clanid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CCommunity_ClanAnnouncementInfo posterid.
     * @member {number|Long} posterid
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.posterid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CCommunity_ClanAnnouncementInfo headline.
     * @member {string} headline
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.headline = "";

    /**
     * CCommunity_ClanAnnouncementInfo posttime.
     * @member {number} posttime
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.posttime = 0;

    /**
     * CCommunity_ClanAnnouncementInfo updatetime.
     * @member {number} updatetime
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.updatetime = 0;

    /**
     * CCommunity_ClanAnnouncementInfo body.
     * @member {string} body
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.body = "";

    /**
     * CCommunity_ClanAnnouncementInfo commentcount.
     * @member {number} commentcount
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.commentcount = 0;

    /**
     * CCommunity_ClanAnnouncementInfo tags.
     * @member {Array.<string>} tags
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.tags = $util.emptyArray;

    /**
     * CCommunity_ClanAnnouncementInfo language.
     * @member {number} language
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.language = 0;

    /**
     * CCommunity_ClanAnnouncementInfo hidden.
     * @member {boolean} hidden
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.hidden = false;

    /**
     * CCommunity_ClanAnnouncementInfo forumTopicId.
     * @member {number|Long} forumTopicId
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.forumTopicId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CCommunity_ClanAnnouncementInfo eventGid.
     * @member {number|Long} eventGid
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.eventGid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CCommunity_ClanAnnouncementInfo voteupcount.
     * @member {number} voteupcount
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.voteupcount = 0;

    /**
     * CCommunity_ClanAnnouncementInfo votedowncount.
     * @member {number} votedowncount
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.votedowncount = 0;

    /**
     * CCommunity_ClanAnnouncementInfo banCheckResult.
     * @member {EBanContentCheckResult} banCheckResult
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.banCheckResult = 0;

    /**
     * CCommunity_ClanAnnouncementInfo banned.
     * @member {boolean} banned
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     */
    CCommunity_ClanAnnouncementInfo.prototype.banned = false;

    /**
     * Creates a new CCommunity_ClanAnnouncementInfo instance using the specified properties.
     * @function create
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {ICCommunity_ClanAnnouncementInfo=} [properties] Properties to set
     * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo instance
     */
    CCommunity_ClanAnnouncementInfo.create = function create(properties) {
        return new CCommunity_ClanAnnouncementInfo(properties);
    };

    /**
     * Encodes the specified CCommunity_ClanAnnouncementInfo message. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
     * @function encode
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {ICCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCommunity_ClanAnnouncementInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gid);
        if (message.clanid != null && Object.hasOwnProperty.call(message, "clanid"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.clanid);
        if (message.posterid != null && Object.hasOwnProperty.call(message, "posterid"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.posterid);
        if (message.headline != null && Object.hasOwnProperty.call(message, "headline"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.headline);
        if (message.posttime != null && Object.hasOwnProperty.call(message, "posttime"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.posttime);
        if (message.updatetime != null && Object.hasOwnProperty.call(message, "updatetime"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.updatetime);
        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
        if (message.commentcount != null && Object.hasOwnProperty.call(message, "commentcount"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.commentcount);
        if (message.tags != null && message.tags.length)
            for (let i = 0; i < message.tags.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.tags[i]);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.language);
        if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.hidden);
        if (message.forumTopicId != null && Object.hasOwnProperty.call(message, "forumTopicId"))
            writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.forumTopicId);
        if (message.eventGid != null && Object.hasOwnProperty.call(message, "eventGid"))
            writer.uint32(/* id 13, wireType 1 =*/105).fixed64(message.eventGid);
        if (message.voteupcount != null && Object.hasOwnProperty.call(message, "voteupcount"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.voteupcount);
        if (message.votedowncount != null && Object.hasOwnProperty.call(message, "votedowncount"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.votedowncount);
        if (message.banCheckResult != null && Object.hasOwnProperty.call(message, "banCheckResult"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.banCheckResult);
        if (message.banned != null && Object.hasOwnProperty.call(message, "banned"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.banned);
        return writer;
    };

    /**
     * Encodes the specified CCommunity_ClanAnnouncementInfo message, length delimited. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {ICCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCommunity_ClanAnnouncementInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCommunity_ClanAnnouncementInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_ClanAnnouncementInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.gid = reader.uint64();
                    break;
                }
            case 2: {
                    message.clanid = reader.uint64();
                    break;
                }
            case 3: {
                    message.posterid = reader.uint64();
                    break;
                }
            case 4: {
                    message.headline = reader.string();
                    break;
                }
            case 5: {
                    message.posttime = reader.uint32();
                    break;
                }
            case 6: {
                    message.updatetime = reader.uint32();
                    break;
                }
            case 7: {
                    message.body = reader.string();
                    break;
                }
            case 8: {
                    message.commentcount = reader.int32();
                    break;
                }
            case 9: {
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                }
            case 10: {
                    message.language = reader.int32();
                    break;
                }
            case 11: {
                    message.hidden = reader.bool();
                    break;
                }
            case 12: {
                    message.forumTopicId = reader.fixed64();
                    break;
                }
            case 13: {
                    message.eventGid = reader.fixed64();
                    break;
                }
            case 14: {
                    message.voteupcount = reader.int32();
                    break;
                }
            case 15: {
                    message.votedowncount = reader.int32();
                    break;
                }
            case 16: {
                    message.banCheckResult = reader.int32();
                    break;
                }
            case 17: {
                    message.banned = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCommunity_ClanAnnouncementInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CCommunity_ClanAnnouncementInfo message.
     * @function verify
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CCommunity_ClanAnnouncementInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gid != null && message.hasOwnProperty("gid"))
            if (!$util.isInteger(message.gid) && !(message.gid && $util.isInteger(message.gid.low) && $util.isInteger(message.gid.high)))
                return "gid: integer|Long expected";
        if (message.clanid != null && message.hasOwnProperty("clanid"))
            if (!$util.isInteger(message.clanid) && !(message.clanid && $util.isInteger(message.clanid.low) && $util.isInteger(message.clanid.high)))
                return "clanid: integer|Long expected";
        if (message.posterid != null && message.hasOwnProperty("posterid"))
            if (!$util.isInteger(message.posterid) && !(message.posterid && $util.isInteger(message.posterid.low) && $util.isInteger(message.posterid.high)))
                return "posterid: integer|Long expected";
        if (message.headline != null && message.hasOwnProperty("headline"))
            if (!$util.isString(message.headline))
                return "headline: string expected";
        if (message.posttime != null && message.hasOwnProperty("posttime"))
            if (!$util.isInteger(message.posttime))
                return "posttime: integer expected";
        if (message.updatetime != null && message.hasOwnProperty("updatetime"))
            if (!$util.isInteger(message.updatetime))
                return "updatetime: integer expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!$util.isString(message.body))
                return "body: string expected";
        if (message.commentcount != null && message.hasOwnProperty("commentcount"))
            if (!$util.isInteger(message.commentcount))
                return "commentcount: integer expected";
        if (message.tags != null && message.hasOwnProperty("tags")) {
            if (!Array.isArray(message.tags))
                return "tags: array expected";
            for (let i = 0; i < message.tags.length; ++i)
                if (!$util.isString(message.tags[i]))
                    return "tags: string[] expected";
        }
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isInteger(message.language))
                return "language: integer expected";
        if (message.hidden != null && message.hasOwnProperty("hidden"))
            if (typeof message.hidden !== "boolean")
                return "hidden: boolean expected";
        if (message.forumTopicId != null && message.hasOwnProperty("forumTopicId"))
            if (!$util.isInteger(message.forumTopicId) && !(message.forumTopicId && $util.isInteger(message.forumTopicId.low) && $util.isInteger(message.forumTopicId.high)))
                return "forumTopicId: integer|Long expected";
        if (message.eventGid != null && message.hasOwnProperty("eventGid"))
            if (!$util.isInteger(message.eventGid) && !(message.eventGid && $util.isInteger(message.eventGid.low) && $util.isInteger(message.eventGid.high)))
                return "eventGid: integer|Long expected";
        if (message.voteupcount != null && message.hasOwnProperty("voteupcount"))
            if (!$util.isInteger(message.voteupcount))
                return "voteupcount: integer expected";
        if (message.votedowncount != null && message.hasOwnProperty("votedowncount"))
            if (!$util.isInteger(message.votedowncount))
                return "votedowncount: integer expected";
        if (message.banCheckResult != null && message.hasOwnProperty("banCheckResult"))
            switch (message.banCheckResult) {
            default:
                return "banCheckResult: enum value expected";
            case 0:
            case 1:
            case 2:
            case 5:
            case 30:
            case 50:
            case 75:
            case 100:
                break;
            }
        if (message.banned != null && message.hasOwnProperty("banned"))
            if (typeof message.banned !== "boolean")
                return "banned: boolean expected";
        return null;
    };

    /**
     * Creates a CCommunity_ClanAnnouncementInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
     */
    CCommunity_ClanAnnouncementInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.CCommunity_ClanAnnouncementInfo)
            return object;
        let message = new $root.CCommunity_ClanAnnouncementInfo();
        if (object.gid != null)
            if ($util.Long)
                (message.gid = $util.Long.fromValue(object.gid)).unsigned = true;
            else if (typeof object.gid === "string")
                message.gid = parseInt(object.gid, 10);
            else if (typeof object.gid === "number")
                message.gid = object.gid;
            else if (typeof object.gid === "object")
                message.gid = new $util.LongBits(object.gid.low >>> 0, object.gid.high >>> 0).toNumber(true);
        if (object.clanid != null)
            if ($util.Long)
                (message.clanid = $util.Long.fromValue(object.clanid)).unsigned = true;
            else if (typeof object.clanid === "string")
                message.clanid = parseInt(object.clanid, 10);
            else if (typeof object.clanid === "number")
                message.clanid = object.clanid;
            else if (typeof object.clanid === "object")
                message.clanid = new $util.LongBits(object.clanid.low >>> 0, object.clanid.high >>> 0).toNumber(true);
        if (object.posterid != null)
            if ($util.Long)
                (message.posterid = $util.Long.fromValue(object.posterid)).unsigned = true;
            else if (typeof object.posterid === "string")
                message.posterid = parseInt(object.posterid, 10);
            else if (typeof object.posterid === "number")
                message.posterid = object.posterid;
            else if (typeof object.posterid === "object")
                message.posterid = new $util.LongBits(object.posterid.low >>> 0, object.posterid.high >>> 0).toNumber(true);
        if (object.headline != null)
            message.headline = String(object.headline);
        if (object.posttime != null)
            message.posttime = object.posttime >>> 0;
        if (object.updatetime != null)
            message.updatetime = object.updatetime >>> 0;
        if (object.body != null)
            message.body = String(object.body);
        if (object.commentcount != null)
            message.commentcount = object.commentcount | 0;
        if (object.tags) {
            if (!Array.isArray(object.tags))
                throw TypeError(".CCommunity_ClanAnnouncementInfo.tags: array expected");
            message.tags = [];
            for (let i = 0; i < object.tags.length; ++i)
                message.tags[i] = String(object.tags[i]);
        }
        if (object.language != null)
            message.language = object.language | 0;
        if (object.hidden != null)
            message.hidden = Boolean(object.hidden);
        if (object.forumTopicId != null)
            if ($util.Long)
                (message.forumTopicId = $util.Long.fromValue(object.forumTopicId)).unsigned = false;
            else if (typeof object.forumTopicId === "string")
                message.forumTopicId = parseInt(object.forumTopicId, 10);
            else if (typeof object.forumTopicId === "number")
                message.forumTopicId = object.forumTopicId;
            else if (typeof object.forumTopicId === "object")
                message.forumTopicId = new $util.LongBits(object.forumTopicId.low >>> 0, object.forumTopicId.high >>> 0).toNumber();
        if (object.eventGid != null)
            if ($util.Long)
                (message.eventGid = $util.Long.fromValue(object.eventGid)).unsigned = false;
            else if (typeof object.eventGid === "string")
                message.eventGid = parseInt(object.eventGid, 10);
            else if (typeof object.eventGid === "number")
                message.eventGid = object.eventGid;
            else if (typeof object.eventGid === "object")
                message.eventGid = new $util.LongBits(object.eventGid.low >>> 0, object.eventGid.high >>> 0).toNumber();
        if (object.voteupcount != null)
            message.voteupcount = object.voteupcount | 0;
        if (object.votedowncount != null)
            message.votedowncount = object.votedowncount | 0;
        switch (object.banCheckResult) {
        default:
            if (typeof object.banCheckResult === "number") {
                message.banCheckResult = object.banCheckResult;
                break;
            }
            break;
        case "k_EBanContentCheckResult_NotScanned":
        case 0:
            message.banCheckResult = 0;
            break;
        case "k_EBanContentCheckResult_Reset":
        case 1:
            message.banCheckResult = 1;
            break;
        case "k_EBanContentCheckResult_NeedsChecking":
        case 2:
            message.banCheckResult = 2;
            break;
        case "k_EBanContentCheckResult_VeryUnlikely":
        case 5:
            message.banCheckResult = 5;
            break;
        case "k_EBanContentCheckResult_Unlikely":
        case 30:
            message.banCheckResult = 30;
            break;
        case "k_EBanContentCheckResult_Possible":
        case 50:
            message.banCheckResult = 50;
            break;
        case "k_EBanContentCheckResult_Likely":
        case 75:
            message.banCheckResult = 75;
            break;
        case "k_EBanContentCheckResult_VeryLikely":
        case 100:
            message.banCheckResult = 100;
            break;
        }
        if (object.banned != null)
            message.banned = Boolean(object.banned);
        return message;
    };

    /**
     * Creates a plain object from a CCommunity_ClanAnnouncementInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {CCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CCommunity_ClanAnnouncementInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.tags = [];
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.clanid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.clanid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.posterid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.posterid = options.longs === String ? "0" : 0;
            object.headline = "";
            object.posttime = 0;
            object.updatetime = 0;
            object.body = "";
            object.commentcount = 0;
            object.language = 0;
            object.hidden = false;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.forumTopicId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.forumTopicId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.eventGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.eventGid = options.longs === String ? "0" : 0;
            object.voteupcount = 0;
            object.votedowncount = 0;
            object.banCheckResult = options.enums === String ? "k_EBanContentCheckResult_NotScanned" : 0;
            object.banned = false;
        }
        if (message.gid != null && message.hasOwnProperty("gid"))
            if (typeof message.gid === "number")
                object.gid = options.longs === String ? String(message.gid) : message.gid;
            else
                object.gid = options.longs === String ? $util.Long.prototype.toString.call(message.gid) : options.longs === Number ? new $util.LongBits(message.gid.low >>> 0, message.gid.high >>> 0).toNumber(true) : message.gid;
        if (message.clanid != null && message.hasOwnProperty("clanid"))
            if (typeof message.clanid === "number")
                object.clanid = options.longs === String ? String(message.clanid) : message.clanid;
            else
                object.clanid = options.longs === String ? $util.Long.prototype.toString.call(message.clanid) : options.longs === Number ? new $util.LongBits(message.clanid.low >>> 0, message.clanid.high >>> 0).toNumber(true) : message.clanid;
        if (message.posterid != null && message.hasOwnProperty("posterid"))
            if (typeof message.posterid === "number")
                object.posterid = options.longs === String ? String(message.posterid) : message.posterid;
            else
                object.posterid = options.longs === String ? $util.Long.prototype.toString.call(message.posterid) : options.longs === Number ? new $util.LongBits(message.posterid.low >>> 0, message.posterid.high >>> 0).toNumber(true) : message.posterid;
        if (message.headline != null && message.hasOwnProperty("headline"))
            object.headline = message.headline;
        if (message.posttime != null && message.hasOwnProperty("posttime"))
            object.posttime = message.posttime;
        if (message.updatetime != null && message.hasOwnProperty("updatetime"))
            object.updatetime = message.updatetime;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = message.body;
        if (message.commentcount != null && message.hasOwnProperty("commentcount"))
            object.commentcount = message.commentcount;
        if (message.tags && message.tags.length) {
            object.tags = [];
            for (let j = 0; j < message.tags.length; ++j)
                object.tags[j] = message.tags[j];
        }
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.hidden != null && message.hasOwnProperty("hidden"))
            object.hidden = message.hidden;
        if (message.forumTopicId != null && message.hasOwnProperty("forumTopicId"))
            if (typeof message.forumTopicId === "number")
                object.forumTopicId = options.longs === String ? String(message.forumTopicId) : message.forumTopicId;
            else
                object.forumTopicId = options.longs === String ? $util.Long.prototype.toString.call(message.forumTopicId) : options.longs === Number ? new $util.LongBits(message.forumTopicId.low >>> 0, message.forumTopicId.high >>> 0).toNumber() : message.forumTopicId;
        if (message.eventGid != null && message.hasOwnProperty("eventGid"))
            if (typeof message.eventGid === "number")
                object.eventGid = options.longs === String ? String(message.eventGid) : message.eventGid;
            else
                object.eventGid = options.longs === String ? $util.Long.prototype.toString.call(message.eventGid) : options.longs === Number ? new $util.LongBits(message.eventGid.low >>> 0, message.eventGid.high >>> 0).toNumber() : message.eventGid;
        if (message.voteupcount != null && message.hasOwnProperty("voteupcount"))
            object.voteupcount = message.voteupcount;
        if (message.votedowncount != null && message.hasOwnProperty("votedowncount"))
            object.votedowncount = message.votedowncount;
        if (message.banCheckResult != null && message.hasOwnProperty("banCheckResult"))
            object.banCheckResult = options.enums === String ? $root.EBanContentCheckResult[message.banCheckResult] === undefined ? message.banCheckResult : $root.EBanContentCheckResult[message.banCheckResult] : message.banCheckResult;
        if (message.banned != null && message.hasOwnProperty("banned"))
            object.banned = message.banned;
        return object;
    };

    /**
     * Converts this CCommunity_ClanAnnouncementInfo to JSON.
     * @function toJSON
     * @memberof CCommunity_ClanAnnouncementInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CCommunity_ClanAnnouncementInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CCommunity_ClanAnnouncementInfo
     * @function getTypeUrl
     * @memberof CCommunity_ClanAnnouncementInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CCommunity_ClanAnnouncementInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CCommunity_ClanAnnouncementInfo";
    };

    return CCommunity_ClanAnnouncementInfo;
})();

export const CClanEventData = $root.CClanEventData = (() => {

    /**
     * Properties of a CClanEventData.
     * @exports ICClanEventData
     * @interface ICClanEventData
     * @property {number|Long|null} [gid] CClanEventData gid
     * @property {number|Long|null} [clanSteamid] CClanEventData clanSteamid
     * @property {string|null} [eventName] CClanEventData eventName
     * @property {EProtoClanEventType|null} [eventType] CClanEventData eventType
     * @property {number|null} [appid] CClanEventData appid
     * @property {string|null} [serverAddress] CClanEventData serverAddress
     * @property {string|null} [serverPassword] CClanEventData serverPassword
     * @property {number|null} [rtime32StartTime] CClanEventData rtime32StartTime
     * @property {number|null} [rtime32EndTime] CClanEventData rtime32EndTime
     * @property {number|null} [commentCount] CClanEventData commentCount
     * @property {number|Long|null} [creatorSteamid] CClanEventData creatorSteamid
     * @property {number|Long|null} [lastUpdateSteamid] CClanEventData lastUpdateSteamid
     * @property {string|null} [eventNotes] CClanEventData eventNotes
     * @property {string|null} [jsondata] CClanEventData jsondata
     * @property {ICCommunity_ClanAnnouncementInfo|null} [announcementBody] CClanEventData announcementBody
     * @property {boolean|null} [published] CClanEventData published
     * @property {boolean|null} [hidden] CClanEventData hidden
     * @property {number|null} [rtime32VisibilityStart] CClanEventData rtime32VisibilityStart
     * @property {number|null} [rtime32VisibilityEnd] CClanEventData rtime32VisibilityEnd
     * @property {number|null} [broadcasterAccountid] CClanEventData broadcasterAccountid
     * @property {number|null} [followerCount] CClanEventData followerCount
     * @property {number|null} [ignoreCount] CClanEventData ignoreCount
     * @property {number|Long|null} [forumTopicId] CClanEventData forumTopicId
     * @property {number|null} [rtime32LastModified] CClanEventData rtime32LastModified
     * @property {number|Long|null} [newsPostGid] CClanEventData newsPostGid
     * @property {number|null} [rtimeModReviewed] CClanEventData rtimeModReviewed
     * @property {number|null} [featuredAppTagid] CClanEventData featuredAppTagid
     * @property {Array.<number>|null} [referencedAppids] CClanEventData referencedAppids
     * @property {number|null} [buildId] CClanEventData buildId
     * @property {string|null} [buildBranch] CClanEventData buildBranch
     */

    /**
     * Constructs a new CClanEventData.
     * @exports CClanEventData
     * @classdesc Represents a CClanEventData.
     * @implements ICClanEventData
     * @constructor
     * @param {ICClanEventData=} [properties] Properties to set
     */
    function CClanEventData(properties) {
        this.referencedAppids = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CClanEventData gid.
     * @member {number|Long} gid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.gid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData clanSteamid.
     * @member {number|Long} clanSteamid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.clanSteamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData eventName.
     * @member {string} eventName
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.eventName = "";

    /**
     * CClanEventData eventType.
     * @member {EProtoClanEventType} eventType
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.eventType = 1;

    /**
     * CClanEventData appid.
     * @member {number} appid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.appid = 0;

    /**
     * CClanEventData serverAddress.
     * @member {string} serverAddress
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.serverAddress = "";

    /**
     * CClanEventData serverPassword.
     * @member {string} serverPassword
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.serverPassword = "";

    /**
     * CClanEventData rtime32StartTime.
     * @member {number} rtime32StartTime
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtime32StartTime = 0;

    /**
     * CClanEventData rtime32EndTime.
     * @member {number} rtime32EndTime
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtime32EndTime = 0;

    /**
     * CClanEventData commentCount.
     * @member {number} commentCount
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.commentCount = 0;

    /**
     * CClanEventData creatorSteamid.
     * @member {number|Long} creatorSteamid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.creatorSteamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData lastUpdateSteamid.
     * @member {number|Long} lastUpdateSteamid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.lastUpdateSteamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData eventNotes.
     * @member {string} eventNotes
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.eventNotes = "";

    /**
     * CClanEventData jsondata.
     * @member {string} jsondata
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.jsondata = "";

    /**
     * CClanEventData announcementBody.
     * @member {ICCommunity_ClanAnnouncementInfo|null|undefined} announcementBody
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.announcementBody = null;

    /**
     * CClanEventData published.
     * @member {boolean} published
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.published = false;

    /**
     * CClanEventData hidden.
     * @member {boolean} hidden
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.hidden = false;

    /**
     * CClanEventData rtime32VisibilityStart.
     * @member {number} rtime32VisibilityStart
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtime32VisibilityStart = 0;

    /**
     * CClanEventData rtime32VisibilityEnd.
     * @member {number} rtime32VisibilityEnd
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtime32VisibilityEnd = 0;

    /**
     * CClanEventData broadcasterAccountid.
     * @member {number} broadcasterAccountid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.broadcasterAccountid = 0;

    /**
     * CClanEventData followerCount.
     * @member {number} followerCount
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.followerCount = 0;

    /**
     * CClanEventData ignoreCount.
     * @member {number} ignoreCount
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.ignoreCount = 0;

    /**
     * CClanEventData forumTopicId.
     * @member {number|Long} forumTopicId
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.forumTopicId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData rtime32LastModified.
     * @member {number} rtime32LastModified
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtime32LastModified = 0;

    /**
     * CClanEventData newsPostGid.
     * @member {number|Long} newsPostGid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.newsPostGid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CClanEventData rtimeModReviewed.
     * @member {number} rtimeModReviewed
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.rtimeModReviewed = 0;

    /**
     * CClanEventData featuredAppTagid.
     * @member {number} featuredAppTagid
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.featuredAppTagid = 0;

    /**
     * CClanEventData referencedAppids.
     * @member {Array.<number>} referencedAppids
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.referencedAppids = $util.emptyArray;

    /**
     * CClanEventData buildId.
     * @member {number} buildId
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.buildId = 0;

    /**
     * CClanEventData buildBranch.
     * @member {string} buildBranch
     * @memberof CClanEventData
     * @instance
     */
    CClanEventData.prototype.buildBranch = "";

    /**
     * Creates a new CClanEventData instance using the specified properties.
     * @function create
     * @memberof CClanEventData
     * @static
     * @param {ICClanEventData=} [properties] Properties to set
     * @returns {CClanEventData} CClanEventData instance
     */
    CClanEventData.create = function create(properties) {
        return new CClanEventData(properties);
    };

    /**
     * Encodes the specified CClanEventData message. Does not implicitly {@link CClanEventData.verify|verify} messages.
     * @function encode
     * @memberof CClanEventData
     * @static
     * @param {ICClanEventData} message CClanEventData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanEventData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.gid);
        if (message.clanSteamid != null && Object.hasOwnProperty.call(message, "clanSteamid"))
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.clanSteamid);
        if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventName);
        if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.eventType);
        if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.appid);
        if (message.serverAddress != null && Object.hasOwnProperty.call(message, "serverAddress"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.serverAddress);
        if (message.serverPassword != null && Object.hasOwnProperty.call(message, "serverPassword"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.serverPassword);
        if (message.rtime32StartTime != null && Object.hasOwnProperty.call(message, "rtime32StartTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.rtime32StartTime);
        if (message.rtime32EndTime != null && Object.hasOwnProperty.call(message, "rtime32EndTime"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.rtime32EndTime);
        if (message.commentCount != null && Object.hasOwnProperty.call(message, "commentCount"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.commentCount);
        if (message.creatorSteamid != null && Object.hasOwnProperty.call(message, "creatorSteamid"))
            writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.creatorSteamid);
        if (message.lastUpdateSteamid != null && Object.hasOwnProperty.call(message, "lastUpdateSteamid"))
            writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.lastUpdateSteamid);
        if (message.eventNotes != null && Object.hasOwnProperty.call(message, "eventNotes"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.eventNotes);
        if (message.jsondata != null && Object.hasOwnProperty.call(message, "jsondata"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.jsondata);
        if (message.announcementBody != null && Object.hasOwnProperty.call(message, "announcementBody"))
            $root.CCommunity_ClanAnnouncementInfo.encode(message.announcementBody, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.published != null && Object.hasOwnProperty.call(message, "published"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.published);
        if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.hidden);
        if (message.rtime32VisibilityStart != null && Object.hasOwnProperty.call(message, "rtime32VisibilityStart"))
            writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.rtime32VisibilityStart);
        if (message.rtime32VisibilityEnd != null && Object.hasOwnProperty.call(message, "rtime32VisibilityEnd"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.rtime32VisibilityEnd);
        if (message.broadcasterAccountid != null && Object.hasOwnProperty.call(message, "broadcasterAccountid"))
            writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.broadcasterAccountid);
        if (message.followerCount != null && Object.hasOwnProperty.call(message, "followerCount"))
            writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.followerCount);
        if (message.ignoreCount != null && Object.hasOwnProperty.call(message, "ignoreCount"))
            writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.ignoreCount);
        if (message.forumTopicId != null && Object.hasOwnProperty.call(message, "forumTopicId"))
            writer.uint32(/* id 23, wireType 1 =*/185).fixed64(message.forumTopicId);
        if (message.rtime32LastModified != null && Object.hasOwnProperty.call(message, "rtime32LastModified"))
            writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.rtime32LastModified);
        if (message.newsPostGid != null && Object.hasOwnProperty.call(message, "newsPostGid"))
            writer.uint32(/* id 25, wireType 1 =*/201).fixed64(message.newsPostGid);
        if (message.rtimeModReviewed != null && Object.hasOwnProperty.call(message, "rtimeModReviewed"))
            writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.rtimeModReviewed);
        if (message.featuredAppTagid != null && Object.hasOwnProperty.call(message, "featuredAppTagid"))
            writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.featuredAppTagid);
        if (message.referencedAppids != null && message.referencedAppids.length)
            for (let i = 0; i < message.referencedAppids.length; ++i)
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.referencedAppids[i]);
        if (message.buildId != null && Object.hasOwnProperty.call(message, "buildId"))
            writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.buildId);
        if (message.buildBranch != null && Object.hasOwnProperty.call(message, "buildBranch"))
            writer.uint32(/* id 30, wireType 2 =*/242).string(message.buildBranch);
        return writer;
    };

    /**
     * Encodes the specified CClanEventData message, length delimited. Does not implicitly {@link CClanEventData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CClanEventData
     * @static
     * @param {ICClanEventData} message CClanEventData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CClanEventData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CClanEventData message from the specified reader or buffer.
     * @function decode
     * @memberof CClanEventData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CClanEventData} CClanEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanEventData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanEventData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.gid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.clanSteamid = reader.fixed64();
                    break;
                }
            case 3: {
                    message.eventName = reader.string();
                    break;
                }
            case 4: {
                    message.eventType = reader.int32();
                    break;
                }
            case 5: {
                    message.appid = reader.uint32();
                    break;
                }
            case 6: {
                    message.serverAddress = reader.string();
                    break;
                }
            case 7: {
                    message.serverPassword = reader.string();
                    break;
                }
            case 8: {
                    message.rtime32StartTime = reader.uint32();
                    break;
                }
            case 9: {
                    message.rtime32EndTime = reader.uint32();
                    break;
                }
            case 10: {
                    message.commentCount = reader.int32();
                    break;
                }
            case 11: {
                    message.creatorSteamid = reader.fixed64();
                    break;
                }
            case 12: {
                    message.lastUpdateSteamid = reader.fixed64();
                    break;
                }
            case 13: {
                    message.eventNotes = reader.string();
                    break;
                }
            case 14: {
                    message.jsondata = reader.string();
                    break;
                }
            case 15: {
                    message.announcementBody = $root.CCommunity_ClanAnnouncementInfo.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.published = reader.bool();
                    break;
                }
            case 17: {
                    message.hidden = reader.bool();
                    break;
                }
            case 18: {
                    message.rtime32VisibilityStart = reader.uint32();
                    break;
                }
            case 19: {
                    message.rtime32VisibilityEnd = reader.uint32();
                    break;
                }
            case 20: {
                    message.broadcasterAccountid = reader.uint32();
                    break;
                }
            case 21: {
                    message.followerCount = reader.uint32();
                    break;
                }
            case 22: {
                    message.ignoreCount = reader.uint32();
                    break;
                }
            case 23: {
                    message.forumTopicId = reader.fixed64();
                    break;
                }
            case 24: {
                    message.rtime32LastModified = reader.uint32();
                    break;
                }
            case 25: {
                    message.newsPostGid = reader.fixed64();
                    break;
                }
            case 26: {
                    message.rtimeModReviewed = reader.uint32();
                    break;
                }
            case 27: {
                    message.featuredAppTagid = reader.uint32();
                    break;
                }
            case 28: {
                    if (!(message.referencedAppids && message.referencedAppids.length))
                        message.referencedAppids = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.referencedAppids.push(reader.uint32());
                    } else
                        message.referencedAppids.push(reader.uint32());
                    break;
                }
            case 29: {
                    message.buildId = reader.uint32();
                    break;
                }
            case 30: {
                    message.buildBranch = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CClanEventData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CClanEventData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CClanEventData} CClanEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CClanEventData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CClanEventData message.
     * @function verify
     * @memberof CClanEventData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CClanEventData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gid != null && message.hasOwnProperty("gid"))
            if (!$util.isInteger(message.gid) && !(message.gid && $util.isInteger(message.gid.low) && $util.isInteger(message.gid.high)))
                return "gid: integer|Long expected";
        if (message.clanSteamid != null && message.hasOwnProperty("clanSteamid"))
            if (!$util.isInteger(message.clanSteamid) && !(message.clanSteamid && $util.isInteger(message.clanSteamid.low) && $util.isInteger(message.clanSteamid.high)))
                return "clanSteamid: integer|Long expected";
        if (message.eventName != null && message.hasOwnProperty("eventName"))
            if (!$util.isString(message.eventName))
                return "eventName: string expected";
        if (message.eventType != null && message.hasOwnProperty("eventType"))
            switch (message.eventType) {
            default:
                return "eventType: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
                break;
            }
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (!$util.isInteger(message.appid))
                return "appid: integer expected";
        if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
            if (!$util.isString(message.serverAddress))
                return "serverAddress: string expected";
        if (message.serverPassword != null && message.hasOwnProperty("serverPassword"))
            if (!$util.isString(message.serverPassword))
                return "serverPassword: string expected";
        if (message.rtime32StartTime != null && message.hasOwnProperty("rtime32StartTime"))
            if (!$util.isInteger(message.rtime32StartTime))
                return "rtime32StartTime: integer expected";
        if (message.rtime32EndTime != null && message.hasOwnProperty("rtime32EndTime"))
            if (!$util.isInteger(message.rtime32EndTime))
                return "rtime32EndTime: integer expected";
        if (message.commentCount != null && message.hasOwnProperty("commentCount"))
            if (!$util.isInteger(message.commentCount))
                return "commentCount: integer expected";
        if (message.creatorSteamid != null && message.hasOwnProperty("creatorSteamid"))
            if (!$util.isInteger(message.creatorSteamid) && !(message.creatorSteamid && $util.isInteger(message.creatorSteamid.low) && $util.isInteger(message.creatorSteamid.high)))
                return "creatorSteamid: integer|Long expected";
        if (message.lastUpdateSteamid != null && message.hasOwnProperty("lastUpdateSteamid"))
            if (!$util.isInteger(message.lastUpdateSteamid) && !(message.lastUpdateSteamid && $util.isInteger(message.lastUpdateSteamid.low) && $util.isInteger(message.lastUpdateSteamid.high)))
                return "lastUpdateSteamid: integer|Long expected";
        if (message.eventNotes != null && message.hasOwnProperty("eventNotes"))
            if (!$util.isString(message.eventNotes))
                return "eventNotes: string expected";
        if (message.jsondata != null && message.hasOwnProperty("jsondata"))
            if (!$util.isString(message.jsondata))
                return "jsondata: string expected";
        if (message.announcementBody != null && message.hasOwnProperty("announcementBody")) {
            let error = $root.CCommunity_ClanAnnouncementInfo.verify(message.announcementBody);
            if (error)
                return "announcementBody." + error;
        }
        if (message.published != null && message.hasOwnProperty("published"))
            if (typeof message.published !== "boolean")
                return "published: boolean expected";
        if (message.hidden != null && message.hasOwnProperty("hidden"))
            if (typeof message.hidden !== "boolean")
                return "hidden: boolean expected";
        if (message.rtime32VisibilityStart != null && message.hasOwnProperty("rtime32VisibilityStart"))
            if (!$util.isInteger(message.rtime32VisibilityStart))
                return "rtime32VisibilityStart: integer expected";
        if (message.rtime32VisibilityEnd != null && message.hasOwnProperty("rtime32VisibilityEnd"))
            if (!$util.isInteger(message.rtime32VisibilityEnd))
                return "rtime32VisibilityEnd: integer expected";
        if (message.broadcasterAccountid != null && message.hasOwnProperty("broadcasterAccountid"))
            if (!$util.isInteger(message.broadcasterAccountid))
                return "broadcasterAccountid: integer expected";
        if (message.followerCount != null && message.hasOwnProperty("followerCount"))
            if (!$util.isInteger(message.followerCount))
                return "followerCount: integer expected";
        if (message.ignoreCount != null && message.hasOwnProperty("ignoreCount"))
            if (!$util.isInteger(message.ignoreCount))
                return "ignoreCount: integer expected";
        if (message.forumTopicId != null && message.hasOwnProperty("forumTopicId"))
            if (!$util.isInteger(message.forumTopicId) && !(message.forumTopicId && $util.isInteger(message.forumTopicId.low) && $util.isInteger(message.forumTopicId.high)))
                return "forumTopicId: integer|Long expected";
        if (message.rtime32LastModified != null && message.hasOwnProperty("rtime32LastModified"))
            if (!$util.isInteger(message.rtime32LastModified))
                return "rtime32LastModified: integer expected";
        if (message.newsPostGid != null && message.hasOwnProperty("newsPostGid"))
            if (!$util.isInteger(message.newsPostGid) && !(message.newsPostGid && $util.isInteger(message.newsPostGid.low) && $util.isInteger(message.newsPostGid.high)))
                return "newsPostGid: integer|Long expected";
        if (message.rtimeModReviewed != null && message.hasOwnProperty("rtimeModReviewed"))
            if (!$util.isInteger(message.rtimeModReviewed))
                return "rtimeModReviewed: integer expected";
        if (message.featuredAppTagid != null && message.hasOwnProperty("featuredAppTagid"))
            if (!$util.isInteger(message.featuredAppTagid))
                return "featuredAppTagid: integer expected";
        if (message.referencedAppids != null && message.hasOwnProperty("referencedAppids")) {
            if (!Array.isArray(message.referencedAppids))
                return "referencedAppids: array expected";
            for (let i = 0; i < message.referencedAppids.length; ++i)
                if (!$util.isInteger(message.referencedAppids[i]))
                    return "referencedAppids: integer[] expected";
        }
        if (message.buildId != null && message.hasOwnProperty("buildId"))
            if (!$util.isInteger(message.buildId))
                return "buildId: integer expected";
        if (message.buildBranch != null && message.hasOwnProperty("buildBranch"))
            if (!$util.isString(message.buildBranch))
                return "buildBranch: string expected";
        return null;
    };

    /**
     * Creates a CClanEventData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CClanEventData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CClanEventData} CClanEventData
     */
    CClanEventData.fromObject = function fromObject(object) {
        if (object instanceof $root.CClanEventData)
            return object;
        let message = new $root.CClanEventData();
        if (object.gid != null)
            if ($util.Long)
                (message.gid = $util.Long.fromValue(object.gid)).unsigned = false;
            else if (typeof object.gid === "string")
                message.gid = parseInt(object.gid, 10);
            else if (typeof object.gid === "number")
                message.gid = object.gid;
            else if (typeof object.gid === "object")
                message.gid = new $util.LongBits(object.gid.low >>> 0, object.gid.high >>> 0).toNumber();
        if (object.clanSteamid != null)
            if ($util.Long)
                (message.clanSteamid = $util.Long.fromValue(object.clanSteamid)).unsigned = false;
            else if (typeof object.clanSteamid === "string")
                message.clanSteamid = parseInt(object.clanSteamid, 10);
            else if (typeof object.clanSteamid === "number")
                message.clanSteamid = object.clanSteamid;
            else if (typeof object.clanSteamid === "object")
                message.clanSteamid = new $util.LongBits(object.clanSteamid.low >>> 0, object.clanSteamid.high >>> 0).toNumber();
        if (object.eventName != null)
            message.eventName = String(object.eventName);
        switch (object.eventType) {
        default:
            if (typeof object.eventType === "number") {
                message.eventType = object.eventType;
                break;
            }
            break;
        case "k_EClanOtherEvent":
        case 1:
            message.eventType = 1;
            break;
        case "k_EClanGameEvent":
        case 2:
            message.eventType = 2;
            break;
        case "k_EClanPartyEvent":
        case 3:
            message.eventType = 3;
            break;
        case "k_EClanMeetingEvent":
        case 4:
            message.eventType = 4;
            break;
        case "k_EClanSpecialCauseEvent":
        case 5:
            message.eventType = 5;
            break;
        case "k_EClanMusicAndArtsEvent":
        case 6:
            message.eventType = 6;
            break;
        case "k_EClanSportsEvent":
        case 7:
            message.eventType = 7;
            break;
        case "k_EClanTripEvent":
        case 8:
            message.eventType = 8;
            break;
        case "k_EClanChatEvent":
        case 9:
            message.eventType = 9;
            break;
        case "k_EClanGameReleaseEvent":
        case 10:
            message.eventType = 10;
            break;
        case "k_EClanBroadcastEvent":
        case 11:
            message.eventType = 11;
            break;
        case "k_EClanSmallUpdateEvent":
        case 12:
            message.eventType = 12;
            break;
        case "k_EClanPreAnnounceMajorUpdateEvent":
        case 13:
            message.eventType = 13;
            break;
        case "k_EClanMajorUpdateEvent":
        case 14:
            message.eventType = 14;
            break;
        case "k_EClanDLCReleaseEvent":
        case 15:
            message.eventType = 15;
            break;
        case "k_EClanFutureReleaseEvent":
        case 16:
            message.eventType = 16;
            break;
        case "k_EClanESportTournamentStreamEvent":
        case 17:
            message.eventType = 17;
            break;
        case "k_EClanDevStreamEvent":
        case 18:
            message.eventType = 18;
            break;
        case "k_EClanFamousStreamEvent":
        case 19:
            message.eventType = 19;
            break;
        case "k_EClanGameSalesEvent":
        case 20:
            message.eventType = 20;
            break;
        case "k_EClanGameItemSalesEvent":
        case 21:
            message.eventType = 21;
            break;
        case "k_EClanInGameBonusXPEvent":
        case 22:
            message.eventType = 22;
            break;
        case "k_EClanInGameLootEvent":
        case 23:
            message.eventType = 23;
            break;
        case "k_EClanInGamePerksEvent":
        case 24:
            message.eventType = 24;
            break;
        case "k_EClanInGameChallengeEvent":
        case 25:
            message.eventType = 25;
            break;
        case "k_EClanInGameContestEvent":
        case 26:
            message.eventType = 26;
            break;
        case "k_EClanIRLEvent":
        case 27:
            message.eventType = 27;
            break;
        case "k_EClanNewsEvent":
        case 28:
            message.eventType = 28;
            break;
        case "k_EClanBetaReleaseEvent":
        case 29:
            message.eventType = 29;
            break;
        case "k_EClanInGameContentReleaseEvent":
        case 30:
            message.eventType = 30;
            break;
        case "k_EClanFreeTrial":
        case 31:
            message.eventType = 31;
            break;
        case "k_EClanSeasonRelease":
        case 32:
            message.eventType = 32;
            break;
        case "k_EClanSeasonUpdate":
        case 33:
            message.eventType = 33;
            break;
        case "k_EClanCrosspostEvent":
        case 34:
            message.eventType = 34;
            break;
        case "k_EClanInGameEventGeneral":
        case 35:
            message.eventType = 35;
            break;
        }
        if (object.appid != null)
            message.appid = object.appid >>> 0;
        if (object.serverAddress != null)
            message.serverAddress = String(object.serverAddress);
        if (object.serverPassword != null)
            message.serverPassword = String(object.serverPassword);
        if (object.rtime32StartTime != null)
            message.rtime32StartTime = object.rtime32StartTime >>> 0;
        if (object.rtime32EndTime != null)
            message.rtime32EndTime = object.rtime32EndTime >>> 0;
        if (object.commentCount != null)
            message.commentCount = object.commentCount | 0;
        if (object.creatorSteamid != null)
            if ($util.Long)
                (message.creatorSteamid = $util.Long.fromValue(object.creatorSteamid)).unsigned = false;
            else if (typeof object.creatorSteamid === "string")
                message.creatorSteamid = parseInt(object.creatorSteamid, 10);
            else if (typeof object.creatorSteamid === "number")
                message.creatorSteamid = object.creatorSteamid;
            else if (typeof object.creatorSteamid === "object")
                message.creatorSteamid = new $util.LongBits(object.creatorSteamid.low >>> 0, object.creatorSteamid.high >>> 0).toNumber();
        if (object.lastUpdateSteamid != null)
            if ($util.Long)
                (message.lastUpdateSteamid = $util.Long.fromValue(object.lastUpdateSteamid)).unsigned = false;
            else if (typeof object.lastUpdateSteamid === "string")
                message.lastUpdateSteamid = parseInt(object.lastUpdateSteamid, 10);
            else if (typeof object.lastUpdateSteamid === "number")
                message.lastUpdateSteamid = object.lastUpdateSteamid;
            else if (typeof object.lastUpdateSteamid === "object")
                message.lastUpdateSteamid = new $util.LongBits(object.lastUpdateSteamid.low >>> 0, object.lastUpdateSteamid.high >>> 0).toNumber();
        if (object.eventNotes != null)
            message.eventNotes = String(object.eventNotes);
        if (object.jsondata != null)
            message.jsondata = String(object.jsondata);
        if (object.announcementBody != null) {
            if (typeof object.announcementBody !== "object")
                throw TypeError(".CClanEventData.announcementBody: object expected");
            message.announcementBody = $root.CCommunity_ClanAnnouncementInfo.fromObject(object.announcementBody);
        }
        if (object.published != null)
            message.published = Boolean(object.published);
        if (object.hidden != null)
            message.hidden = Boolean(object.hidden);
        if (object.rtime32VisibilityStart != null)
            message.rtime32VisibilityStart = object.rtime32VisibilityStart >>> 0;
        if (object.rtime32VisibilityEnd != null)
            message.rtime32VisibilityEnd = object.rtime32VisibilityEnd >>> 0;
        if (object.broadcasterAccountid != null)
            message.broadcasterAccountid = object.broadcasterAccountid >>> 0;
        if (object.followerCount != null)
            message.followerCount = object.followerCount >>> 0;
        if (object.ignoreCount != null)
            message.ignoreCount = object.ignoreCount >>> 0;
        if (object.forumTopicId != null)
            if ($util.Long)
                (message.forumTopicId = $util.Long.fromValue(object.forumTopicId)).unsigned = false;
            else if (typeof object.forumTopicId === "string")
                message.forumTopicId = parseInt(object.forumTopicId, 10);
            else if (typeof object.forumTopicId === "number")
                message.forumTopicId = object.forumTopicId;
            else if (typeof object.forumTopicId === "object")
                message.forumTopicId = new $util.LongBits(object.forumTopicId.low >>> 0, object.forumTopicId.high >>> 0).toNumber();
        if (object.rtime32LastModified != null)
            message.rtime32LastModified = object.rtime32LastModified >>> 0;
        if (object.newsPostGid != null)
            if ($util.Long)
                (message.newsPostGid = $util.Long.fromValue(object.newsPostGid)).unsigned = false;
            else if (typeof object.newsPostGid === "string")
                message.newsPostGid = parseInt(object.newsPostGid, 10);
            else if (typeof object.newsPostGid === "number")
                message.newsPostGid = object.newsPostGid;
            else if (typeof object.newsPostGid === "object")
                message.newsPostGid = new $util.LongBits(object.newsPostGid.low >>> 0, object.newsPostGid.high >>> 0).toNumber();
        if (object.rtimeModReviewed != null)
            message.rtimeModReviewed = object.rtimeModReviewed >>> 0;
        if (object.featuredAppTagid != null)
            message.featuredAppTagid = object.featuredAppTagid >>> 0;
        if (object.referencedAppids) {
            if (!Array.isArray(object.referencedAppids))
                throw TypeError(".CClanEventData.referencedAppids: array expected");
            message.referencedAppids = [];
            for (let i = 0; i < object.referencedAppids.length; ++i)
                message.referencedAppids[i] = object.referencedAppids[i] >>> 0;
        }
        if (object.buildId != null)
            message.buildId = object.buildId >>> 0;
        if (object.buildBranch != null)
            message.buildBranch = String(object.buildBranch);
        return message;
    };

    /**
     * Creates a plain object from a CClanEventData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CClanEventData
     * @static
     * @param {CClanEventData} message CClanEventData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CClanEventData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.referencedAppids = [];
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.clanSteamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.clanSteamid = options.longs === String ? "0" : 0;
            object.eventName = "";
            object.eventType = options.enums === String ? "k_EClanOtherEvent" : 1;
            object.appid = 0;
            object.serverAddress = "";
            object.serverPassword = "";
            object.rtime32StartTime = 0;
            object.rtime32EndTime = 0;
            object.commentCount = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.creatorSteamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.creatorSteamid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.lastUpdateSteamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastUpdateSteamid = options.longs === String ? "0" : 0;
            object.eventNotes = "";
            object.jsondata = "";
            object.announcementBody = null;
            object.published = false;
            object.hidden = false;
            object.rtime32VisibilityStart = 0;
            object.rtime32VisibilityEnd = 0;
            object.broadcasterAccountid = 0;
            object.followerCount = 0;
            object.ignoreCount = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.forumTopicId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.forumTopicId = options.longs === String ? "0" : 0;
            object.rtime32LastModified = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.newsPostGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.newsPostGid = options.longs === String ? "0" : 0;
            object.rtimeModReviewed = 0;
            object.featuredAppTagid = 0;
            object.buildId = 0;
            object.buildBranch = "";
        }
        if (message.gid != null && message.hasOwnProperty("gid"))
            if (typeof message.gid === "number")
                object.gid = options.longs === String ? String(message.gid) : message.gid;
            else
                object.gid = options.longs === String ? $util.Long.prototype.toString.call(message.gid) : options.longs === Number ? new $util.LongBits(message.gid.low >>> 0, message.gid.high >>> 0).toNumber() : message.gid;
        if (message.clanSteamid != null && message.hasOwnProperty("clanSteamid"))
            if (typeof message.clanSteamid === "number")
                object.clanSteamid = options.longs === String ? String(message.clanSteamid) : message.clanSteamid;
            else
                object.clanSteamid = options.longs === String ? $util.Long.prototype.toString.call(message.clanSteamid) : options.longs === Number ? new $util.LongBits(message.clanSteamid.low >>> 0, message.clanSteamid.high >>> 0).toNumber() : message.clanSteamid;
        if (message.eventName != null && message.hasOwnProperty("eventName"))
            object.eventName = message.eventName;
        if (message.eventType != null && message.hasOwnProperty("eventType"))
            object.eventType = options.enums === String ? $root.EProtoClanEventType[message.eventType] === undefined ? message.eventType : $root.EProtoClanEventType[message.eventType] : message.eventType;
        if (message.appid != null && message.hasOwnProperty("appid"))
            object.appid = message.appid;
        if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
            object.serverAddress = message.serverAddress;
        if (message.serverPassword != null && message.hasOwnProperty("serverPassword"))
            object.serverPassword = message.serverPassword;
        if (message.rtime32StartTime != null && message.hasOwnProperty("rtime32StartTime"))
            object.rtime32StartTime = message.rtime32StartTime;
        if (message.rtime32EndTime != null && message.hasOwnProperty("rtime32EndTime"))
            object.rtime32EndTime = message.rtime32EndTime;
        if (message.commentCount != null && message.hasOwnProperty("commentCount"))
            object.commentCount = message.commentCount;
        if (message.creatorSteamid != null && message.hasOwnProperty("creatorSteamid"))
            if (typeof message.creatorSteamid === "number")
                object.creatorSteamid = options.longs === String ? String(message.creatorSteamid) : message.creatorSteamid;
            else
                object.creatorSteamid = options.longs === String ? $util.Long.prototype.toString.call(message.creatorSteamid) : options.longs === Number ? new $util.LongBits(message.creatorSteamid.low >>> 0, message.creatorSteamid.high >>> 0).toNumber() : message.creatorSteamid;
        if (message.lastUpdateSteamid != null && message.hasOwnProperty("lastUpdateSteamid"))
            if (typeof message.lastUpdateSteamid === "number")
                object.lastUpdateSteamid = options.longs === String ? String(message.lastUpdateSteamid) : message.lastUpdateSteamid;
            else
                object.lastUpdateSteamid = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdateSteamid) : options.longs === Number ? new $util.LongBits(message.lastUpdateSteamid.low >>> 0, message.lastUpdateSteamid.high >>> 0).toNumber() : message.lastUpdateSteamid;
        if (message.eventNotes != null && message.hasOwnProperty("eventNotes"))
            object.eventNotes = message.eventNotes;
        if (message.jsondata != null && message.hasOwnProperty("jsondata"))
            object.jsondata = message.jsondata;
        if (message.announcementBody != null && message.hasOwnProperty("announcementBody"))
            object.announcementBody = $root.CCommunity_ClanAnnouncementInfo.toObject(message.announcementBody, options);
        if (message.published != null && message.hasOwnProperty("published"))
            object.published = message.published;
        if (message.hidden != null && message.hasOwnProperty("hidden"))
            object.hidden = message.hidden;
        if (message.rtime32VisibilityStart != null && message.hasOwnProperty("rtime32VisibilityStart"))
            object.rtime32VisibilityStart = message.rtime32VisibilityStart;
        if (message.rtime32VisibilityEnd != null && message.hasOwnProperty("rtime32VisibilityEnd"))
            object.rtime32VisibilityEnd = message.rtime32VisibilityEnd;
        if (message.broadcasterAccountid != null && message.hasOwnProperty("broadcasterAccountid"))
            object.broadcasterAccountid = message.broadcasterAccountid;
        if (message.followerCount != null && message.hasOwnProperty("followerCount"))
            object.followerCount = message.followerCount;
        if (message.ignoreCount != null && message.hasOwnProperty("ignoreCount"))
            object.ignoreCount = message.ignoreCount;
        if (message.forumTopicId != null && message.hasOwnProperty("forumTopicId"))
            if (typeof message.forumTopicId === "number")
                object.forumTopicId = options.longs === String ? String(message.forumTopicId) : message.forumTopicId;
            else
                object.forumTopicId = options.longs === String ? $util.Long.prototype.toString.call(message.forumTopicId) : options.longs === Number ? new $util.LongBits(message.forumTopicId.low >>> 0, message.forumTopicId.high >>> 0).toNumber() : message.forumTopicId;
        if (message.rtime32LastModified != null && message.hasOwnProperty("rtime32LastModified"))
            object.rtime32LastModified = message.rtime32LastModified;
        if (message.newsPostGid != null && message.hasOwnProperty("newsPostGid"))
            if (typeof message.newsPostGid === "number")
                object.newsPostGid = options.longs === String ? String(message.newsPostGid) : message.newsPostGid;
            else
                object.newsPostGid = options.longs === String ? $util.Long.prototype.toString.call(message.newsPostGid) : options.longs === Number ? new $util.LongBits(message.newsPostGid.low >>> 0, message.newsPostGid.high >>> 0).toNumber() : message.newsPostGid;
        if (message.rtimeModReviewed != null && message.hasOwnProperty("rtimeModReviewed"))
            object.rtimeModReviewed = message.rtimeModReviewed;
        if (message.featuredAppTagid != null && message.hasOwnProperty("featuredAppTagid"))
            object.featuredAppTagid = message.featuredAppTagid;
        if (message.referencedAppids && message.referencedAppids.length) {
            object.referencedAppids = [];
            for (let j = 0; j < message.referencedAppids.length; ++j)
                object.referencedAppids[j] = message.referencedAppids[j];
        }
        if (message.buildId != null && message.hasOwnProperty("buildId"))
            object.buildId = message.buildId;
        if (message.buildBranch != null && message.hasOwnProperty("buildBranch"))
            object.buildBranch = message.buildBranch;
        return object;
    };

    /**
     * Converts this CClanEventData to JSON.
     * @function toJSON
     * @memberof CClanEventData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CClanEventData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CClanEventData
     * @function getTypeUrl
     * @memberof CClanEventData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CClanEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CClanEventData";
    };

    return CClanEventData;
})();

export const CBilling_Address = $root.CBilling_Address = (() => {

    /**
     * Properties of a CBilling_Address.
     * @exports ICBilling_Address
     * @interface ICBilling_Address
     * @property {string|null} [firstName] CBilling_Address firstName
     * @property {string|null} [lastName] CBilling_Address lastName
     * @property {string|null} [address1] CBilling_Address address1
     * @property {string|null} [address2] CBilling_Address address2
     * @property {string|null} [city] CBilling_Address city
     * @property {string|null} [usState] CBilling_Address usState
     * @property {string|null} [countryCode] CBilling_Address countryCode
     * @property {string|null} [postcode] CBilling_Address postcode
     * @property {number|null} [zipPlus4] CBilling_Address zipPlus4
     * @property {string|null} [phone] CBilling_Address phone
     */

    /**
     * Constructs a new CBilling_Address.
     * @exports CBilling_Address
     * @classdesc Represents a CBilling_Address.
     * @implements ICBilling_Address
     * @constructor
     * @param {ICBilling_Address=} [properties] Properties to set
     */
    function CBilling_Address(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CBilling_Address firstName.
     * @member {string} firstName
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.firstName = "";

    /**
     * CBilling_Address lastName.
     * @member {string} lastName
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.lastName = "";

    /**
     * CBilling_Address address1.
     * @member {string} address1
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.address1 = "";

    /**
     * CBilling_Address address2.
     * @member {string} address2
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.address2 = "";

    /**
     * CBilling_Address city.
     * @member {string} city
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.city = "";

    /**
     * CBilling_Address usState.
     * @member {string} usState
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.usState = "";

    /**
     * CBilling_Address countryCode.
     * @member {string} countryCode
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.countryCode = "";

    /**
     * CBilling_Address postcode.
     * @member {string} postcode
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.postcode = "";

    /**
     * CBilling_Address zipPlus4.
     * @member {number} zipPlus4
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.zipPlus4 = 0;

    /**
     * CBilling_Address phone.
     * @member {string} phone
     * @memberof CBilling_Address
     * @instance
     */
    CBilling_Address.prototype.phone = "";

    /**
     * Creates a new CBilling_Address instance using the specified properties.
     * @function create
     * @memberof CBilling_Address
     * @static
     * @param {ICBilling_Address=} [properties] Properties to set
     * @returns {CBilling_Address} CBilling_Address instance
     */
    CBilling_Address.create = function create(properties) {
        return new CBilling_Address(properties);
    };

    /**
     * Encodes the specified CBilling_Address message. Does not implicitly {@link CBilling_Address.verify|verify} messages.
     * @function encode
     * @memberof CBilling_Address
     * @static
     * @param {ICBilling_Address} message CBilling_Address message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CBilling_Address.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
        if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
        if (message.address1 != null && Object.hasOwnProperty.call(message, "address1"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.address1);
        if (message.address2 != null && Object.hasOwnProperty.call(message, "address2"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.address2);
        if (message.city != null && Object.hasOwnProperty.call(message, "city"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.city);
        if (message.usState != null && Object.hasOwnProperty.call(message, "usState"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.usState);
        if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.countryCode);
        if (message.postcode != null && Object.hasOwnProperty.call(message, "postcode"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.postcode);
        if (message.zipPlus4 != null && Object.hasOwnProperty.call(message, "zipPlus4"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.zipPlus4);
        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.phone);
        return writer;
    };

    /**
     * Encodes the specified CBilling_Address message, length delimited. Does not implicitly {@link CBilling_Address.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CBilling_Address
     * @static
     * @param {ICBilling_Address} message CBilling_Address message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CBilling_Address.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CBilling_Address message from the specified reader or buffer.
     * @function decode
     * @memberof CBilling_Address
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CBilling_Address} CBilling_Address
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CBilling_Address.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CBilling_Address();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.firstName = reader.string();
                    break;
                }
            case 2: {
                    message.lastName = reader.string();
                    break;
                }
            case 3: {
                    message.address1 = reader.string();
                    break;
                }
            case 4: {
                    message.address2 = reader.string();
                    break;
                }
            case 5: {
                    message.city = reader.string();
                    break;
                }
            case 6: {
                    message.usState = reader.string();
                    break;
                }
            case 7: {
                    message.countryCode = reader.string();
                    break;
                }
            case 8: {
                    message.postcode = reader.string();
                    break;
                }
            case 9: {
                    message.zipPlus4 = reader.int32();
                    break;
                }
            case 10: {
                    message.phone = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CBilling_Address message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CBilling_Address
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CBilling_Address} CBilling_Address
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CBilling_Address.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CBilling_Address message.
     * @function verify
     * @memberof CBilling_Address
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CBilling_Address.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.firstName != null && message.hasOwnProperty("firstName"))
            if (!$util.isString(message.firstName))
                return "firstName: string expected";
        if (message.lastName != null && message.hasOwnProperty("lastName"))
            if (!$util.isString(message.lastName))
                return "lastName: string expected";
        if (message.address1 != null && message.hasOwnProperty("address1"))
            if (!$util.isString(message.address1))
                return "address1: string expected";
        if (message.address2 != null && message.hasOwnProperty("address2"))
            if (!$util.isString(message.address2))
                return "address2: string expected";
        if (message.city != null && message.hasOwnProperty("city"))
            if (!$util.isString(message.city))
                return "city: string expected";
        if (message.usState != null && message.hasOwnProperty("usState"))
            if (!$util.isString(message.usState))
                return "usState: string expected";
        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
            if (!$util.isString(message.countryCode))
                return "countryCode: string expected";
        if (message.postcode != null && message.hasOwnProperty("postcode"))
            if (!$util.isString(message.postcode))
                return "postcode: string expected";
        if (message.zipPlus4 != null && message.hasOwnProperty("zipPlus4"))
            if (!$util.isInteger(message.zipPlus4))
                return "zipPlus4: integer expected";
        if (message.phone != null && message.hasOwnProperty("phone"))
            if (!$util.isString(message.phone))
                return "phone: string expected";
        return null;
    };

    /**
     * Creates a CBilling_Address message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CBilling_Address
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CBilling_Address} CBilling_Address
     */
    CBilling_Address.fromObject = function fromObject(object) {
        if (object instanceof $root.CBilling_Address)
            return object;
        let message = new $root.CBilling_Address();
        if (object.firstName != null)
            message.firstName = String(object.firstName);
        if (object.lastName != null)
            message.lastName = String(object.lastName);
        if (object.address1 != null)
            message.address1 = String(object.address1);
        if (object.address2 != null)
            message.address2 = String(object.address2);
        if (object.city != null)
            message.city = String(object.city);
        if (object.usState != null)
            message.usState = String(object.usState);
        if (object.countryCode != null)
            message.countryCode = String(object.countryCode);
        if (object.postcode != null)
            message.postcode = String(object.postcode);
        if (object.zipPlus4 != null)
            message.zipPlus4 = object.zipPlus4 | 0;
        if (object.phone != null)
            message.phone = String(object.phone);
        return message;
    };

    /**
     * Creates a plain object from a CBilling_Address message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CBilling_Address
     * @static
     * @param {CBilling_Address} message CBilling_Address
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CBilling_Address.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.firstName = "";
            object.lastName = "";
            object.address1 = "";
            object.address2 = "";
            object.city = "";
            object.usState = "";
            object.countryCode = "";
            object.postcode = "";
            object.zipPlus4 = 0;
            object.phone = "";
        }
        if (message.firstName != null && message.hasOwnProperty("firstName"))
            object.firstName = message.firstName;
        if (message.lastName != null && message.hasOwnProperty("lastName"))
            object.lastName = message.lastName;
        if (message.address1 != null && message.hasOwnProperty("address1"))
            object.address1 = message.address1;
        if (message.address2 != null && message.hasOwnProperty("address2"))
            object.address2 = message.address2;
        if (message.city != null && message.hasOwnProperty("city"))
            object.city = message.city;
        if (message.usState != null && message.hasOwnProperty("usState"))
            object.usState = message.usState;
        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
            object.countryCode = message.countryCode;
        if (message.postcode != null && message.hasOwnProperty("postcode"))
            object.postcode = message.postcode;
        if (message.zipPlus4 != null && message.hasOwnProperty("zipPlus4"))
            object.zipPlus4 = message.zipPlus4;
        if (message.phone != null && message.hasOwnProperty("phone"))
            object.phone = message.phone;
        return object;
    };

    /**
     * Converts this CBilling_Address to JSON.
     * @function toJSON
     * @memberof CBilling_Address
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CBilling_Address.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CBilling_Address
     * @function getTypeUrl
     * @memberof CBilling_Address
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CBilling_Address.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CBilling_Address";
    };

    return CBilling_Address;
})();

export const CPackageReservationStatus = $root.CPackageReservationStatus = (() => {

    /**
     * Properties of a CPackageReservationStatus.
     * @exports ICPackageReservationStatus
     * @interface ICPackageReservationStatus
     * @property {number|null} [packageid] CPackageReservationStatus packageid
     * @property {number|null} [reservationState] CPackageReservationStatus reservationState
     * @property {number|null} [queuePosition] CPackageReservationStatus queuePosition
     * @property {number|null} [totalQueueSize] CPackageReservationStatus totalQueueSize
     * @property {string|null} [reservationCountryCode] CPackageReservationStatus reservationCountryCode
     * @property {boolean|null} [expired] CPackageReservationStatus expired
     * @property {number|null} [timeExpires] CPackageReservationStatus timeExpires
     * @property {number|null} [timeReserved] CPackageReservationStatus timeReserved
     * @property {number|null} [rtimeEstimatedNotification] CPackageReservationStatus rtimeEstimatedNotification
     * @property {string|null} [notificatonToken] CPackageReservationStatus notificatonToken
     */

    /**
     * Constructs a new CPackageReservationStatus.
     * @exports CPackageReservationStatus
     * @classdesc Represents a CPackageReservationStatus.
     * @implements ICPackageReservationStatus
     * @constructor
     * @param {ICPackageReservationStatus=} [properties] Properties to set
     */
    function CPackageReservationStatus(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPackageReservationStatus packageid.
     * @member {number} packageid
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.packageid = 0;

    /**
     * CPackageReservationStatus reservationState.
     * @member {number} reservationState
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.reservationState = 0;

    /**
     * CPackageReservationStatus queuePosition.
     * @member {number} queuePosition
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.queuePosition = 0;

    /**
     * CPackageReservationStatus totalQueueSize.
     * @member {number} totalQueueSize
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.totalQueueSize = 0;

    /**
     * CPackageReservationStatus reservationCountryCode.
     * @member {string} reservationCountryCode
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.reservationCountryCode = "";

    /**
     * CPackageReservationStatus expired.
     * @member {boolean} expired
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.expired = false;

    /**
     * CPackageReservationStatus timeExpires.
     * @member {number} timeExpires
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.timeExpires = 0;

    /**
     * CPackageReservationStatus timeReserved.
     * @member {number} timeReserved
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.timeReserved = 0;

    /**
     * CPackageReservationStatus rtimeEstimatedNotification.
     * @member {number} rtimeEstimatedNotification
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.rtimeEstimatedNotification = 0;

    /**
     * CPackageReservationStatus notificatonToken.
     * @member {string} notificatonToken
     * @memberof CPackageReservationStatus
     * @instance
     */
    CPackageReservationStatus.prototype.notificatonToken = "";

    /**
     * Creates a new CPackageReservationStatus instance using the specified properties.
     * @function create
     * @memberof CPackageReservationStatus
     * @static
     * @param {ICPackageReservationStatus=} [properties] Properties to set
     * @returns {CPackageReservationStatus} CPackageReservationStatus instance
     */
    CPackageReservationStatus.create = function create(properties) {
        return new CPackageReservationStatus(properties);
    };

    /**
     * Encodes the specified CPackageReservationStatus message. Does not implicitly {@link CPackageReservationStatus.verify|verify} messages.
     * @function encode
     * @memberof CPackageReservationStatus
     * @static
     * @param {ICPackageReservationStatus} message CPackageReservationStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPackageReservationStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.packageid != null && Object.hasOwnProperty.call(message, "packageid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.packageid);
        if (message.reservationState != null && Object.hasOwnProperty.call(message, "reservationState"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reservationState);
        if (message.queuePosition != null && Object.hasOwnProperty.call(message, "queuePosition"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.queuePosition);
        if (message.totalQueueSize != null && Object.hasOwnProperty.call(message, "totalQueueSize"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalQueueSize);
        if (message.reservationCountryCode != null && Object.hasOwnProperty.call(message, "reservationCountryCode"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservationCountryCode);
        if (message.expired != null && Object.hasOwnProperty.call(message, "expired"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.expired);
        if (message.timeExpires != null && Object.hasOwnProperty.call(message, "timeExpires"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.timeExpires);
        if (message.timeReserved != null && Object.hasOwnProperty.call(message, "timeReserved"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timeReserved);
        if (message.rtimeEstimatedNotification != null && Object.hasOwnProperty.call(message, "rtimeEstimatedNotification"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.rtimeEstimatedNotification);
        if (message.notificatonToken != null && Object.hasOwnProperty.call(message, "notificatonToken"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.notificatonToken);
        return writer;
    };

    /**
     * Encodes the specified CPackageReservationStatus message, length delimited. Does not implicitly {@link CPackageReservationStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPackageReservationStatus
     * @static
     * @param {ICPackageReservationStatus} message CPackageReservationStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPackageReservationStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPackageReservationStatus message from the specified reader or buffer.
     * @function decode
     * @memberof CPackageReservationStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPackageReservationStatus} CPackageReservationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPackageReservationStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPackageReservationStatus();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.packageid = reader.uint32();
                    break;
                }
            case 2: {
                    message.reservationState = reader.int32();
                    break;
                }
            case 3: {
                    message.queuePosition = reader.int32();
                    break;
                }
            case 4: {
                    message.totalQueueSize = reader.int32();
                    break;
                }
            case 5: {
                    message.reservationCountryCode = reader.string();
                    break;
                }
            case 6: {
                    message.expired = reader.bool();
                    break;
                }
            case 7: {
                    message.timeExpires = reader.uint32();
                    break;
                }
            case 8: {
                    message.timeReserved = reader.uint32();
                    break;
                }
            case 9: {
                    message.rtimeEstimatedNotification = reader.uint32();
                    break;
                }
            case 10: {
                    message.notificatonToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPackageReservationStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPackageReservationStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPackageReservationStatus} CPackageReservationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPackageReservationStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPackageReservationStatus message.
     * @function verify
     * @memberof CPackageReservationStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPackageReservationStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.packageid != null && message.hasOwnProperty("packageid"))
            if (!$util.isInteger(message.packageid))
                return "packageid: integer expected";
        if (message.reservationState != null && message.hasOwnProperty("reservationState"))
            if (!$util.isInteger(message.reservationState))
                return "reservationState: integer expected";
        if (message.queuePosition != null && message.hasOwnProperty("queuePosition"))
            if (!$util.isInteger(message.queuePosition))
                return "queuePosition: integer expected";
        if (message.totalQueueSize != null && message.hasOwnProperty("totalQueueSize"))
            if (!$util.isInteger(message.totalQueueSize))
                return "totalQueueSize: integer expected";
        if (message.reservationCountryCode != null && message.hasOwnProperty("reservationCountryCode"))
            if (!$util.isString(message.reservationCountryCode))
                return "reservationCountryCode: string expected";
        if (message.expired != null && message.hasOwnProperty("expired"))
            if (typeof message.expired !== "boolean")
                return "expired: boolean expected";
        if (message.timeExpires != null && message.hasOwnProperty("timeExpires"))
            if (!$util.isInteger(message.timeExpires))
                return "timeExpires: integer expected";
        if (message.timeReserved != null && message.hasOwnProperty("timeReserved"))
            if (!$util.isInteger(message.timeReserved))
                return "timeReserved: integer expected";
        if (message.rtimeEstimatedNotification != null && message.hasOwnProperty("rtimeEstimatedNotification"))
            if (!$util.isInteger(message.rtimeEstimatedNotification))
                return "rtimeEstimatedNotification: integer expected";
        if (message.notificatonToken != null && message.hasOwnProperty("notificatonToken"))
            if (!$util.isString(message.notificatonToken))
                return "notificatonToken: string expected";
        return null;
    };

    /**
     * Creates a CPackageReservationStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPackageReservationStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPackageReservationStatus} CPackageReservationStatus
     */
    CPackageReservationStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.CPackageReservationStatus)
            return object;
        let message = new $root.CPackageReservationStatus();
        if (object.packageid != null)
            message.packageid = object.packageid >>> 0;
        if (object.reservationState != null)
            message.reservationState = object.reservationState | 0;
        if (object.queuePosition != null)
            message.queuePosition = object.queuePosition | 0;
        if (object.totalQueueSize != null)
            message.totalQueueSize = object.totalQueueSize | 0;
        if (object.reservationCountryCode != null)
            message.reservationCountryCode = String(object.reservationCountryCode);
        if (object.expired != null)
            message.expired = Boolean(object.expired);
        if (object.timeExpires != null)
            message.timeExpires = object.timeExpires >>> 0;
        if (object.timeReserved != null)
            message.timeReserved = object.timeReserved >>> 0;
        if (object.rtimeEstimatedNotification != null)
            message.rtimeEstimatedNotification = object.rtimeEstimatedNotification >>> 0;
        if (object.notificatonToken != null)
            message.notificatonToken = String(object.notificatonToken);
        return message;
    };

    /**
     * Creates a plain object from a CPackageReservationStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPackageReservationStatus
     * @static
     * @param {CPackageReservationStatus} message CPackageReservationStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPackageReservationStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.packageid = 0;
            object.reservationState = 0;
            object.queuePosition = 0;
            object.totalQueueSize = 0;
            object.reservationCountryCode = "";
            object.expired = false;
            object.timeExpires = 0;
            object.timeReserved = 0;
            object.rtimeEstimatedNotification = 0;
            object.notificatonToken = "";
        }
        if (message.packageid != null && message.hasOwnProperty("packageid"))
            object.packageid = message.packageid;
        if (message.reservationState != null && message.hasOwnProperty("reservationState"))
            object.reservationState = message.reservationState;
        if (message.queuePosition != null && message.hasOwnProperty("queuePosition"))
            object.queuePosition = message.queuePosition;
        if (message.totalQueueSize != null && message.hasOwnProperty("totalQueueSize"))
            object.totalQueueSize = message.totalQueueSize;
        if (message.reservationCountryCode != null && message.hasOwnProperty("reservationCountryCode"))
            object.reservationCountryCode = message.reservationCountryCode;
        if (message.expired != null && message.hasOwnProperty("expired"))
            object.expired = message.expired;
        if (message.timeExpires != null && message.hasOwnProperty("timeExpires"))
            object.timeExpires = message.timeExpires;
        if (message.timeReserved != null && message.hasOwnProperty("timeReserved"))
            object.timeReserved = message.timeReserved;
        if (message.rtimeEstimatedNotification != null && message.hasOwnProperty("rtimeEstimatedNotification"))
            object.rtimeEstimatedNotification = message.rtimeEstimatedNotification;
        if (message.notificatonToken != null && message.hasOwnProperty("notificatonToken"))
            object.notificatonToken = message.notificatonToken;
        return object;
    };

    /**
     * Converts this CPackageReservationStatus to JSON.
     * @function toJSON
     * @memberof CPackageReservationStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPackageReservationStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPackageReservationStatus
     * @function getTypeUrl
     * @memberof CPackageReservationStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPackageReservationStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPackageReservationStatus";
    };

    return CPackageReservationStatus;
})();

export const CMsgKeyValuePair = $root.CMsgKeyValuePair = (() => {

    /**
     * Properties of a CMsgKeyValuePair.
     * @exports ICMsgKeyValuePair
     * @interface ICMsgKeyValuePair
     * @property {string|null} [name] CMsgKeyValuePair name
     * @property {string|null} [value] CMsgKeyValuePair value
     */

    /**
     * Constructs a new CMsgKeyValuePair.
     * @exports CMsgKeyValuePair
     * @classdesc Represents a CMsgKeyValuePair.
     * @implements ICMsgKeyValuePair
     * @constructor
     * @param {ICMsgKeyValuePair=} [properties] Properties to set
     */
    function CMsgKeyValuePair(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgKeyValuePair name.
     * @member {string} name
     * @memberof CMsgKeyValuePair
     * @instance
     */
    CMsgKeyValuePair.prototype.name = "";

    /**
     * CMsgKeyValuePair value.
     * @member {string} value
     * @memberof CMsgKeyValuePair
     * @instance
     */
    CMsgKeyValuePair.prototype.value = "";

    /**
     * Creates a new CMsgKeyValuePair instance using the specified properties.
     * @function create
     * @memberof CMsgKeyValuePair
     * @static
     * @param {ICMsgKeyValuePair=} [properties] Properties to set
     * @returns {CMsgKeyValuePair} CMsgKeyValuePair instance
     */
    CMsgKeyValuePair.create = function create(properties) {
        return new CMsgKeyValuePair(properties);
    };

    /**
     * Encodes the specified CMsgKeyValuePair message. Does not implicitly {@link CMsgKeyValuePair.verify|verify} messages.
     * @function encode
     * @memberof CMsgKeyValuePair
     * @static
     * @param {ICMsgKeyValuePair} message CMsgKeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgKeyValuePair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified CMsgKeyValuePair message, length delimited. Does not implicitly {@link CMsgKeyValuePair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgKeyValuePair
     * @static
     * @param {ICMsgKeyValuePair} message CMsgKeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgKeyValuePair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgKeyValuePair message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgKeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgKeyValuePair} CMsgKeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgKeyValuePair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgKeyValuePair();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.value = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgKeyValuePair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgKeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgKeyValuePair} CMsgKeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgKeyValuePair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgKeyValuePair message.
     * @function verify
     * @memberof CMsgKeyValuePair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgKeyValuePair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a CMsgKeyValuePair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgKeyValuePair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgKeyValuePair} CMsgKeyValuePair
     */
    CMsgKeyValuePair.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgKeyValuePair)
            return object;
        let message = new $root.CMsgKeyValuePair();
        if (object.name != null)
            message.name = String(object.name);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a CMsgKeyValuePair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgKeyValuePair
     * @static
     * @param {CMsgKeyValuePair} message CMsgKeyValuePair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgKeyValuePair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.value = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this CMsgKeyValuePair to JSON.
     * @function toJSON
     * @memberof CMsgKeyValuePair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgKeyValuePair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgKeyValuePair
     * @function getTypeUrl
     * @memberof CMsgKeyValuePair
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgKeyValuePair.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgKeyValuePair";
    };

    return CMsgKeyValuePair;
})();

export const CMsgKeyValueSet = $root.CMsgKeyValueSet = (() => {

    /**
     * Properties of a CMsgKeyValueSet.
     * @exports ICMsgKeyValueSet
     * @interface ICMsgKeyValueSet
     * @property {Array.<ICMsgKeyValuePair>|null} [pairs] CMsgKeyValueSet pairs
     */

    /**
     * Constructs a new CMsgKeyValueSet.
     * @exports CMsgKeyValueSet
     * @classdesc Represents a CMsgKeyValueSet.
     * @implements ICMsgKeyValueSet
     * @constructor
     * @param {ICMsgKeyValueSet=} [properties] Properties to set
     */
    function CMsgKeyValueSet(properties) {
        this.pairs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CMsgKeyValueSet pairs.
     * @member {Array.<ICMsgKeyValuePair>} pairs
     * @memberof CMsgKeyValueSet
     * @instance
     */
    CMsgKeyValueSet.prototype.pairs = $util.emptyArray;

    /**
     * Creates a new CMsgKeyValueSet instance using the specified properties.
     * @function create
     * @memberof CMsgKeyValueSet
     * @static
     * @param {ICMsgKeyValueSet=} [properties] Properties to set
     * @returns {CMsgKeyValueSet} CMsgKeyValueSet instance
     */
    CMsgKeyValueSet.create = function create(properties) {
        return new CMsgKeyValueSet(properties);
    };

    /**
     * Encodes the specified CMsgKeyValueSet message. Does not implicitly {@link CMsgKeyValueSet.verify|verify} messages.
     * @function encode
     * @memberof CMsgKeyValueSet
     * @static
     * @param {ICMsgKeyValueSet} message CMsgKeyValueSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgKeyValueSet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pairs != null && message.pairs.length)
            for (let i = 0; i < message.pairs.length; ++i)
                $root.CMsgKeyValuePair.encode(message.pairs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CMsgKeyValueSet message, length delimited. Does not implicitly {@link CMsgKeyValueSet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CMsgKeyValueSet
     * @static
     * @param {ICMsgKeyValueSet} message CMsgKeyValueSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CMsgKeyValueSet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CMsgKeyValueSet message from the specified reader or buffer.
     * @function decode
     * @memberof CMsgKeyValueSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CMsgKeyValueSet} CMsgKeyValueSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgKeyValueSet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgKeyValueSet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.pairs && message.pairs.length))
                        message.pairs = [];
                    message.pairs.push($root.CMsgKeyValuePair.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CMsgKeyValueSet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CMsgKeyValueSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CMsgKeyValueSet} CMsgKeyValueSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CMsgKeyValueSet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CMsgKeyValueSet message.
     * @function verify
     * @memberof CMsgKeyValueSet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CMsgKeyValueSet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pairs != null && message.hasOwnProperty("pairs")) {
            if (!Array.isArray(message.pairs))
                return "pairs: array expected";
            for (let i = 0; i < message.pairs.length; ++i) {
                let error = $root.CMsgKeyValuePair.verify(message.pairs[i]);
                if (error)
                    return "pairs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CMsgKeyValueSet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CMsgKeyValueSet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CMsgKeyValueSet} CMsgKeyValueSet
     */
    CMsgKeyValueSet.fromObject = function fromObject(object) {
        if (object instanceof $root.CMsgKeyValueSet)
            return object;
        let message = new $root.CMsgKeyValueSet();
        if (object.pairs) {
            if (!Array.isArray(object.pairs))
                throw TypeError(".CMsgKeyValueSet.pairs: array expected");
            message.pairs = [];
            for (let i = 0; i < object.pairs.length; ++i) {
                if (typeof object.pairs[i] !== "object")
                    throw TypeError(".CMsgKeyValueSet.pairs: object expected");
                message.pairs[i] = $root.CMsgKeyValuePair.fromObject(object.pairs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CMsgKeyValueSet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CMsgKeyValueSet
     * @static
     * @param {CMsgKeyValueSet} message CMsgKeyValueSet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CMsgKeyValueSet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.pairs = [];
        if (message.pairs && message.pairs.length) {
            object.pairs = [];
            for (let j = 0; j < message.pairs.length; ++j)
                object.pairs[j] = $root.CMsgKeyValuePair.toObject(message.pairs[j], options);
        }
        return object;
    };

    /**
     * Converts this CMsgKeyValueSet to JSON.
     * @function toJSON
     * @memberof CMsgKeyValueSet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CMsgKeyValueSet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CMsgKeyValueSet
     * @function getTypeUrl
     * @memberof CMsgKeyValueSet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CMsgKeyValueSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CMsgKeyValueSet";
    };

    return CMsgKeyValueSet;
})();

export const UserContentDescriptorPreferences = $root.UserContentDescriptorPreferences = (() => {

    /**
     * Properties of a UserContentDescriptorPreferences.
     * @exports IUserContentDescriptorPreferences
     * @interface IUserContentDescriptorPreferences
     * @property {Array.<UserContentDescriptorPreferences.IContentDescriptor>|null} [contentDescriptorsToExclude] UserContentDescriptorPreferences contentDescriptorsToExclude
     */

    /**
     * Constructs a new UserContentDescriptorPreferences.
     * @exports UserContentDescriptorPreferences
     * @classdesc Represents a UserContentDescriptorPreferences.
     * @implements IUserContentDescriptorPreferences
     * @constructor
     * @param {IUserContentDescriptorPreferences=} [properties] Properties to set
     */
    function UserContentDescriptorPreferences(properties) {
        this.contentDescriptorsToExclude = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserContentDescriptorPreferences contentDescriptorsToExclude.
     * @member {Array.<UserContentDescriptorPreferences.IContentDescriptor>} contentDescriptorsToExclude
     * @memberof UserContentDescriptorPreferences
     * @instance
     */
    UserContentDescriptorPreferences.prototype.contentDescriptorsToExclude = $util.emptyArray;

    /**
     * Creates a new UserContentDescriptorPreferences instance using the specified properties.
     * @function create
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {IUserContentDescriptorPreferences=} [properties] Properties to set
     * @returns {UserContentDescriptorPreferences} UserContentDescriptorPreferences instance
     */
    UserContentDescriptorPreferences.create = function create(properties) {
        return new UserContentDescriptorPreferences(properties);
    };

    /**
     * Encodes the specified UserContentDescriptorPreferences message. Does not implicitly {@link UserContentDescriptorPreferences.verify|verify} messages.
     * @function encode
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {IUserContentDescriptorPreferences} message UserContentDescriptorPreferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserContentDescriptorPreferences.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.contentDescriptorsToExclude != null && message.contentDescriptorsToExclude.length)
            for (let i = 0; i < message.contentDescriptorsToExclude.length; ++i)
                $root.UserContentDescriptorPreferences.ContentDescriptor.encode(message.contentDescriptorsToExclude[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserContentDescriptorPreferences message, length delimited. Does not implicitly {@link UserContentDescriptorPreferences.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {IUserContentDescriptorPreferences} message UserContentDescriptorPreferences message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserContentDescriptorPreferences.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserContentDescriptorPreferences message from the specified reader or buffer.
     * @function decode
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserContentDescriptorPreferences} UserContentDescriptorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserContentDescriptorPreferences.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserContentDescriptorPreferences();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.contentDescriptorsToExclude && message.contentDescriptorsToExclude.length))
                        message.contentDescriptorsToExclude = [];
                    message.contentDescriptorsToExclude.push($root.UserContentDescriptorPreferences.ContentDescriptor.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserContentDescriptorPreferences message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserContentDescriptorPreferences} UserContentDescriptorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserContentDescriptorPreferences.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserContentDescriptorPreferences message.
     * @function verify
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserContentDescriptorPreferences.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.contentDescriptorsToExclude != null && message.hasOwnProperty("contentDescriptorsToExclude")) {
            if (!Array.isArray(message.contentDescriptorsToExclude))
                return "contentDescriptorsToExclude: array expected";
            for (let i = 0; i < message.contentDescriptorsToExclude.length; ++i) {
                let error = $root.UserContentDescriptorPreferences.ContentDescriptor.verify(message.contentDescriptorsToExclude[i]);
                if (error)
                    return "contentDescriptorsToExclude." + error;
            }
        }
        return null;
    };

    /**
     * Creates a UserContentDescriptorPreferences message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserContentDescriptorPreferences} UserContentDescriptorPreferences
     */
    UserContentDescriptorPreferences.fromObject = function fromObject(object) {
        if (object instanceof $root.UserContentDescriptorPreferences)
            return object;
        let message = new $root.UserContentDescriptorPreferences();
        if (object.contentDescriptorsToExclude) {
            if (!Array.isArray(object.contentDescriptorsToExclude))
                throw TypeError(".UserContentDescriptorPreferences.contentDescriptorsToExclude: array expected");
            message.contentDescriptorsToExclude = [];
            for (let i = 0; i < object.contentDescriptorsToExclude.length; ++i) {
                if (typeof object.contentDescriptorsToExclude[i] !== "object")
                    throw TypeError(".UserContentDescriptorPreferences.contentDescriptorsToExclude: object expected");
                message.contentDescriptorsToExclude[i] = $root.UserContentDescriptorPreferences.ContentDescriptor.fromObject(object.contentDescriptorsToExclude[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a UserContentDescriptorPreferences message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {UserContentDescriptorPreferences} message UserContentDescriptorPreferences
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserContentDescriptorPreferences.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.contentDescriptorsToExclude = [];
        if (message.contentDescriptorsToExclude && message.contentDescriptorsToExclude.length) {
            object.contentDescriptorsToExclude = [];
            for (let j = 0; j < message.contentDescriptorsToExclude.length; ++j)
                object.contentDescriptorsToExclude[j] = $root.UserContentDescriptorPreferences.ContentDescriptor.toObject(message.contentDescriptorsToExclude[j], options);
        }
        return object;
    };

    /**
     * Converts this UserContentDescriptorPreferences to JSON.
     * @function toJSON
     * @memberof UserContentDescriptorPreferences
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserContentDescriptorPreferences.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserContentDescriptorPreferences
     * @function getTypeUrl
     * @memberof UserContentDescriptorPreferences
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserContentDescriptorPreferences.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserContentDescriptorPreferences";
    };

    UserContentDescriptorPreferences.ContentDescriptor = (function() {

        /**
         * Properties of a ContentDescriptor.
         * @memberof UserContentDescriptorPreferences
         * @interface IContentDescriptor
         * @property {number|null} [contentDescriptorid] ContentDescriptor contentDescriptorid
         * @property {number|null} [timestampAdded] ContentDescriptor timestampAdded
         */

        /**
         * Constructs a new ContentDescriptor.
         * @memberof UserContentDescriptorPreferences
         * @classdesc Represents a ContentDescriptor.
         * @implements IContentDescriptor
         * @constructor
         * @param {UserContentDescriptorPreferences.IContentDescriptor=} [properties] Properties to set
         */
        function ContentDescriptor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContentDescriptor contentDescriptorid.
         * @member {number} contentDescriptorid
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @instance
         */
        ContentDescriptor.prototype.contentDescriptorid = 0;

        /**
         * ContentDescriptor timestampAdded.
         * @member {number} timestampAdded
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @instance
         */
        ContentDescriptor.prototype.timestampAdded = 0;

        /**
         * Creates a new ContentDescriptor instance using the specified properties.
         * @function create
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {UserContentDescriptorPreferences.IContentDescriptor=} [properties] Properties to set
         * @returns {UserContentDescriptorPreferences.ContentDescriptor} ContentDescriptor instance
         */
        ContentDescriptor.create = function create(properties) {
            return new ContentDescriptor(properties);
        };

        /**
         * Encodes the specified ContentDescriptor message. Does not implicitly {@link UserContentDescriptorPreferences.ContentDescriptor.verify|verify} messages.
         * @function encode
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {UserContentDescriptorPreferences.IContentDescriptor} message ContentDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentDescriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contentDescriptorid != null && Object.hasOwnProperty.call(message, "contentDescriptorid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.contentDescriptorid);
            if (message.timestampAdded != null && Object.hasOwnProperty.call(message, "timestampAdded"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestampAdded);
            return writer;
        };

        /**
         * Encodes the specified ContentDescriptor message, length delimited. Does not implicitly {@link UserContentDescriptorPreferences.ContentDescriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {UserContentDescriptorPreferences.IContentDescriptor} message ContentDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContentDescriptor message from the specified reader or buffer.
         * @function decode
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserContentDescriptorPreferences.ContentDescriptor} ContentDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentDescriptor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserContentDescriptorPreferences.ContentDescriptor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.contentDescriptorid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestampAdded = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContentDescriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserContentDescriptorPreferences.ContentDescriptor} ContentDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentDescriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContentDescriptor message.
         * @function verify
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentDescriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contentDescriptorid != null && message.hasOwnProperty("contentDescriptorid"))
                if (!$util.isInteger(message.contentDescriptorid))
                    return "contentDescriptorid: integer expected";
            if (message.timestampAdded != null && message.hasOwnProperty("timestampAdded"))
                if (!$util.isInteger(message.timestampAdded))
                    return "timestampAdded: integer expected";
            return null;
        };

        /**
         * Creates a ContentDescriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserContentDescriptorPreferences.ContentDescriptor} ContentDescriptor
         */
        ContentDescriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.UserContentDescriptorPreferences.ContentDescriptor)
                return object;
            let message = new $root.UserContentDescriptorPreferences.ContentDescriptor();
            if (object.contentDescriptorid != null)
                message.contentDescriptorid = object.contentDescriptorid >>> 0;
            if (object.timestampAdded != null)
                message.timestampAdded = object.timestampAdded >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ContentDescriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {UserContentDescriptorPreferences.ContentDescriptor} message ContentDescriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentDescriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contentDescriptorid = 0;
                object.timestampAdded = 0;
            }
            if (message.contentDescriptorid != null && message.hasOwnProperty("contentDescriptorid"))
                object.contentDescriptorid = message.contentDescriptorid;
            if (message.timestampAdded != null && message.hasOwnProperty("timestampAdded"))
                object.timestampAdded = message.timestampAdded;
            return object;
        };

        /**
         * Converts this ContentDescriptor to JSON.
         * @function toJSON
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentDescriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ContentDescriptor
         * @function getTypeUrl
         * @memberof UserContentDescriptorPreferences.ContentDescriptor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ContentDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/UserContentDescriptorPreferences.ContentDescriptor";
        };

        return ContentDescriptor;
    })();

    return UserContentDescriptorPreferences;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (let i = 0; i < message.file.length; ++i) {
                        let error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (let i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (let j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             * @property {string|null} [edition] FileDescriptorProto edition
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * FileDescriptorProto edition.
             * @member {string} edition
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.edition = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                if (message.edition != null && Object.hasOwnProperty.call(message, "edition"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.edition);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message["package"] = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        }
                    case 10: {
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        }
                    case 11: {
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.syntax = reader.string();
                            break;
                        }
                    case 13: {
                            message.edition = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (let i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (let i = 0; i < message.messageType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (let i = 0; i < message.service.length; ++i) {
                        let error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    let error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                if (message.edition != null && message.hasOwnProperty("edition"))
                    if (!$util.isString(message.edition))
                        return "edition: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (let i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (let i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (let i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (let i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (let i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                if (object.edition != null)
                    message.edition = String(object.edition);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                    object.edition = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (let j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (let j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (let j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (let j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (let j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                if (message.edition != null && message.hasOwnProperty("edition"))
                    object.edition = message.edition;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (let i = 0; i < message.field.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (let i = 0; i < message.nestedType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (let i = 0; i < message.extensionRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (let i = 0; i < message.oneofDecl.length; ++i) {
                        let error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                let message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (let i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (let i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (let i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (let i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (let j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (let j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (let j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (let j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * ExtensionRange options.
                 * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.options = null;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        let error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                        message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                        object.options = null;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.ExtensionRangeOptions = (function() {

            /**
             * Properties of an ExtensionRangeOptions.
             * @memberof google.protobuf
             * @interface IExtensionRangeOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
             */

            /**
             * Constructs a new ExtensionRangeOptions.
             * @memberof google.protobuf
             * @classdesc Represents an ExtensionRangeOptions.
             * @implements IExtensionRangeOptions
             * @constructor
             * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
             */
            function ExtensionRangeOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtensionRangeOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
             */
            ExtensionRangeOptions.create = function create(properties) {
                return new ExtensionRangeOptions(properties);
            };

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtensionRangeOptions message.
             * @function verify
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtensionRangeOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             */
            ExtensionRangeOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                    return object;
                let message = new $root.google.protobuf.ExtensionRangeOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtensionRangeOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtensionRangeOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ExtensionRangeOptions";
            };

            return ExtensionRangeOptions;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             * @property {boolean|null} [proto3Optional] FieldDescriptorProto proto3Optional
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * FieldDescriptorProto proto3Optional.
             * @member {boolean} proto3Optional
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.proto3Optional = false;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                if (message.proto3Optional != null && Object.hasOwnProperty.call(message, "proto3Optional"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3Optional);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.number = reader.int32();
                            break;
                        }
                    case 4: {
                            message.label = reader.int32();
                            break;
                        }
                    case 5: {
                            message.type = reader.int32();
                            break;
                        }
                    case 6: {
                            message.typeName = reader.string();
                            break;
                        }
                    case 2: {
                            message.extendee = reader.string();
                            break;
                        }
                    case 7: {
                            message.defaultValue = reader.string();
                            break;
                        }
                    case 9: {
                            message.oneofIndex = reader.int32();
                            break;
                        }
                    case 10: {
                            message.jsonName = reader.string();
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 17: {
                            message.proto3Optional = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                    if (typeof message.proto3Optional !== "boolean")
                        return "proto3Optional: boolean expected";
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                default:
                    if (typeof object.label === "number") {
                        message.label = object.label;
                        break;
                    }
                    break;
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                if (object.proto3Optional != null)
                    message.proto3Optional = Boolean(object.proto3Optional);
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                    object.proto3Optional = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                    object.proto3Optional = message.proto3Optional;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * EnumDescriptorProto reservedRange.
             * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * EnumDescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (let i = 0; i < message.value.length; ++i) {
                        let error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (let i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.value = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (let j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
            };

            EnumDescriptorProto.EnumReservedRange = (function() {

                /**
                 * Properties of an EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @interface IEnumReservedRange
                 * @property {number|null} [start] EnumReservedRange start
                 * @property {number|null} [end] EnumReservedRange end
                 */

                /**
                 * Constructs a new EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @classdesc Represents an EnumReservedRange.
                 * @implements IEnumReservedRange
                 * @constructor
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                 */
                function EnumReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EnumReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.start = 0;

                /**
                 * EnumReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.end = 0;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                 */
                EnumReservedRange.create = function create(properties) {
                    return new EnumReservedRange(properties);
                };

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EnumReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 */
                EnumReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                        return object;
                    let message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto.EnumReservedRange";
                };

                return EnumReservedRange;
            })();

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (let i = 0; i < message.method.length; ++i) {
                        let error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (let i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (let j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.inputType = reader.string();
                            break;
                        }
                    case 3: {
                            message.outputType = reader.string();
                            break;
                        }
                    case 4: {
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.clientStreaming = reader.bool();
                            break;
                        }
                    case 6: {
                            message.serverStreaming = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
             * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
             * @property {string|null} [phpNamespace] FileOptions phpNamespace
             * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
             * @property {string|null} [rubyPackage] FileOptions rubyPackage
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             * @property {boolean|null} [".forcePhpGeneration"] FileOptions .forcePhpGeneration
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions phpGenericServices.
             * @member {boolean} phpGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = true;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions swiftPrefix.
             * @member {string} swiftPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.swiftPrefix = "";

            /**
             * FileOptions phpClassPrefix.
             * @member {string} phpClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpClassPrefix = "";

            /**
             * FileOptions phpNamespace.
             * @member {string} phpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpNamespace = "";

            /**
             * FileOptions phpMetadataNamespace.
             * @member {string} phpMetadataNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpMetadataNamespace = "";

            /**
             * FileOptions rubyPackage.
             * @member {string} rubyPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.rubyPackage = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FileOptions .forcePhpGeneration.
             * @member {boolean} .forcePhpGeneration
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".forcePhpGeneration"] = false;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.swiftPrefix != null && Object.hasOwnProperty.call(message, "swiftPrefix"))
                    writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                if (message.phpClassPrefix != null && Object.hasOwnProperty.call(message, "phpClassPrefix"))
                    writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                if (message.phpNamespace != null && Object.hasOwnProperty.call(message, "phpNamespace"))
                    writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                if (message.phpGenericServices != null && Object.hasOwnProperty.call(message, "phpGenericServices"))
                    writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                if (message.phpMetadataNamespace != null && Object.hasOwnProperty.call(message, "phpMetadataNamespace"))
                    writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                if (message.rubyPackage != null && Object.hasOwnProperty.call(message, "rubyPackage"))
                    writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".forcePhpGeneration"] != null && Object.hasOwnProperty.call(message, ".forcePhpGeneration"))
                    writer.uint32(/* id 50000, wireType 0 =*/400000).bool(message[".forcePhpGeneration"]);
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.javaPackage = reader.string();
                            break;
                        }
                    case 8: {
                            message.javaOuterClassname = reader.string();
                            break;
                        }
                    case 10: {
                            message.javaMultipleFiles = reader.bool();
                            break;
                        }
                    case 20: {
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        }
                    case 27: {
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        }
                    case 9: {
                            message.optimizeFor = reader.int32();
                            break;
                        }
                    case 11: {
                            message.goPackage = reader.string();
                            break;
                        }
                    case 16: {
                            message.ccGenericServices = reader.bool();
                            break;
                        }
                    case 17: {
                            message.javaGenericServices = reader.bool();
                            break;
                        }
                    case 18: {
                            message.pyGenericServices = reader.bool();
                            break;
                        }
                    case 42: {
                            message.phpGenericServices = reader.bool();
                            break;
                        }
                    case 23: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 31: {
                            message.ccEnableArenas = reader.bool();
                            break;
                        }
                    case 36: {
                            message.objcClassPrefix = reader.string();
                            break;
                        }
                    case 37: {
                            message.csharpNamespace = reader.string();
                            break;
                        }
                    case 39: {
                            message.swiftPrefix = reader.string();
                            break;
                        }
                    case 40: {
                            message.phpClassPrefix = reader.string();
                            break;
                        }
                    case 41: {
                            message.phpNamespace = reader.string();
                            break;
                        }
                    case 44: {
                            message.phpMetadataNamespace = reader.string();
                            break;
                        }
                    case 45: {
                            message.rubyPackage = reader.string();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 50000: {
                            message[".forcePhpGeneration"] = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                    if (typeof message.phpGenericServices !== "boolean")
                        return "phpGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                    if (!$util.isString(message.swiftPrefix))
                        return "swiftPrefix: string expected";
                if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                    if (!$util.isString(message.phpClassPrefix))
                        return "phpClassPrefix: string expected";
                if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                    if (!$util.isString(message.phpNamespace))
                        return "phpNamespace: string expected";
                if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                    if (!$util.isString(message.phpMetadataNamespace))
                        return "phpMetadataNamespace: string expected";
                if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                    if (!$util.isString(message.rubyPackage))
                        return "rubyPackage: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".forcePhpGeneration"] != null && message.hasOwnProperty(".forcePhpGeneration"))
                    if (typeof message[".forcePhpGeneration"] !== "boolean")
                        return ".forcePhpGeneration: boolean expected";
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                let message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                default:
                    if (typeof object.optimizeFor === "number") {
                        message.optimizeFor = object.optimizeFor;
                        break;
                    }
                    break;
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.phpGenericServices != null)
                    message.phpGenericServices = Boolean(object.phpGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.swiftPrefix != null)
                    message.swiftPrefix = String(object.swiftPrefix);
                if (object.phpClassPrefix != null)
                    message.phpClassPrefix = String(object.phpClassPrefix);
                if (object.phpNamespace != null)
                    message.phpNamespace = String(object.phpNamespace);
                if (object.phpMetadataNamespace != null)
                    message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                if (object.rubyPackage != null)
                    message.rubyPackage = String(object.rubyPackage);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".forcePhpGeneration"] != null)
                    message[".forcePhpGeneration"] = Boolean(object[".forcePhpGeneration"]);
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = true;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                    object.swiftPrefix = "";
                    object.phpClassPrefix = "";
                    object.phpNamespace = "";
                    object.phpGenericServices = false;
                    object.phpMetadataNamespace = "";
                    object.rubyPackage = "";
                    object[".forcePhpGeneration"] = false;
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                    object.swiftPrefix = message.swiftPrefix;
                if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                    object.phpClassPrefix = message.phpClassPrefix;
                if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                    object.phpNamespace = message.phpNamespace;
                if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                    object.phpGenericServices = message.phpGenericServices;
                if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                    object.phpMetadataNamespace = message.phpMetadataNamespace;
                if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                    object.rubyPackage = message.rubyPackage;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".forcePhpGeneration"] != null && message.hasOwnProperty(".forcePhpGeneration"))
                    object[".forcePhpGeneration"] = message[".forcePhpGeneration"];
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             * @property {number|null} [".msgpoolSoftLimit"] MessageOptions .msgpoolSoftLimit
             * @property {number|null} [".msgpoolHardLimit"] MessageOptions .msgpoolHardLimit
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .msgpoolSoftLimit.
             * @member {number} .msgpoolSoftLimit
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".msgpoolSoftLimit"] = 32;

            /**
             * MessageOptions .msgpoolHardLimit.
             * @member {number} .msgpoolHardLimit
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".msgpoolHardLimit"] = 384;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".msgpoolSoftLimit"] != null && Object.hasOwnProperty.call(message, ".msgpoolSoftLimit"))
                    writer.uint32(/* id 50000, wireType 0 =*/400000).int32(message[".msgpoolSoftLimit"]);
                if (message[".msgpoolHardLimit"] != null && Object.hasOwnProperty.call(message, ".msgpoolHardLimit"))
                    writer.uint32(/* id 50001, wireType 0 =*/400008).int32(message[".msgpoolHardLimit"]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageSetWireFormat = reader.bool();
                            break;
                        }
                    case 2: {
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 7: {
                            message.mapEntry = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 50000: {
                            message[".msgpoolSoftLimit"] = reader.int32();
                            break;
                        }
                    case 50001: {
                            message[".msgpoolHardLimit"] = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".msgpoolSoftLimit"] != null && message.hasOwnProperty(".msgpoolSoftLimit"))
                    if (!$util.isInteger(message[".msgpoolSoftLimit"]))
                        return ".msgpoolSoftLimit: integer expected";
                if (message[".msgpoolHardLimit"] != null && message.hasOwnProperty(".msgpoolHardLimit"))
                    if (!$util.isInteger(message[".msgpoolHardLimit"]))
                        return ".msgpoolHardLimit: integer expected";
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                let message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".msgpoolSoftLimit"] != null)
                    message[".msgpoolSoftLimit"] = object[".msgpoolSoftLimit"] | 0;
                if (object[".msgpoolHardLimit"] != null)
                    message[".msgpoolHardLimit"] = object[".msgpoolHardLimit"] | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                    object[".msgpoolSoftLimit"] = 32;
                    object[".msgpoolHardLimit"] = 384;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".msgpoolSoftLimit"] != null && message.hasOwnProperty(".msgpoolSoftLimit"))
                    object[".msgpoolSoftLimit"] = message[".msgpoolSoftLimit"];
                if (message[".msgpoolHardLimit"] != null && message.hasOwnProperty(".msgpoolHardLimit"))
                    object[".msgpoolHardLimit"] = message[".msgpoolHardLimit"];
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [unverifiedLazy] FieldOptions unverifiedLazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             * @property {boolean|null} [".phpOutputAlwaysNumber"] FieldOptions .phpOutputAlwaysNumber
             * @property {boolean|null} [".allowFieldNamedSteamId"] FieldOptions .allowFieldNamedSteamId
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions unverifiedLazy.
             * @member {boolean} unverifiedLazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.unverifiedLazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .phpOutputAlwaysNumber.
             * @member {boolean} .phpOutputAlwaysNumber
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".phpOutputAlwaysNumber"] = false;

            /**
             * FieldOptions .allowFieldNamedSteamId.
             * @member {boolean} .allowFieldNamedSteamId
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".allowFieldNamedSteamId"] = false;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.unverifiedLazy != null && Object.hasOwnProperty.call(message, "unverifiedLazy"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.unverifiedLazy);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".phpOutputAlwaysNumber"] != null && Object.hasOwnProperty.call(message, ".phpOutputAlwaysNumber"))
                    writer.uint32(/* id 50020, wireType 0 =*/400160).bool(message[".phpOutputAlwaysNumber"]);
                if (message[".allowFieldNamedSteamId"] != null && Object.hasOwnProperty.call(message, ".allowFieldNamedSteamId"))
                    writer.uint32(/* id 50024, wireType 0 =*/400192).bool(message[".allowFieldNamedSteamId"]);
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ctype = reader.int32();
                            break;
                        }
                    case 2: {
                            message.packed = reader.bool();
                            break;
                        }
                    case 6: {
                            message.jstype = reader.int32();
                            break;
                        }
                    case 5: {
                            message.lazy = reader.bool();
                            break;
                        }
                    case 15: {
                            message.unverifiedLazy = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 10: {
                            message.weak = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 50020: {
                            message[".phpOutputAlwaysNumber"] = reader.bool();
                            break;
                        }
                    case 50024: {
                            message[".allowFieldNamedSteamId"] = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                    if (typeof message.unverifiedLazy !== "boolean")
                        return "unverifiedLazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".phpOutputAlwaysNumber"] != null && message.hasOwnProperty(".phpOutputAlwaysNumber"))
                    if (typeof message[".phpOutputAlwaysNumber"] !== "boolean")
                        return ".phpOutputAlwaysNumber: boolean expected";
                if (message[".allowFieldNamedSteamId"] != null && message.hasOwnProperty(".allowFieldNamedSteamId"))
                    if (typeof message[".allowFieldNamedSteamId"] !== "boolean")
                        return ".allowFieldNamedSteamId: boolean expected";
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                let message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                default:
                    if (typeof object.ctype === "number") {
                        message.ctype = object.ctype;
                        break;
                    }
                    break;
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                default:
                    if (typeof object.jstype === "number") {
                        message.jstype = object.jstype;
                        break;
                    }
                    break;
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.unverifiedLazy != null)
                    message.unverifiedLazy = Boolean(object.unverifiedLazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".phpOutputAlwaysNumber"] != null)
                    message[".phpOutputAlwaysNumber"] = Boolean(object[".phpOutputAlwaysNumber"]);
                if (object[".allowFieldNamedSteamId"] != null)
                    message[".allowFieldNamedSteamId"] = Boolean(object[".allowFieldNamedSteamId"]);
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object.unverifiedLazy = false;
                    object[".phpOutputAlwaysNumber"] = false;
                    object[".allowFieldNamedSteamId"] = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                    object.unverifiedLazy = message.unverifiedLazy;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".phpOutputAlwaysNumber"] != null && message.hasOwnProperty(".phpOutputAlwaysNumber"))
                    object[".phpOutputAlwaysNumber"] = message[".phpOutputAlwaysNumber"];
                if (message[".allowFieldNamedSteamId"] != null && message.hasOwnProperty(".allowFieldNamedSteamId"))
                    object[".allowFieldNamedSteamId"] = message[".allowFieldNamedSteamId"];
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                let message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofOptions
             * @function getTypeUrl
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofOptions";
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.allowAlias = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                let message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                let message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                let message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotencyLevel.
             * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.idempotencyLevel = 0;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                    writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 34: {
                            message.idempotencyLevel = reader.int32();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    switch (message.idempotencyLevel) {
                    default:
                        return "idempotencyLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                let message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                switch (object.idempotencyLevel) {
                default:
                    if (typeof object.idempotencyLevel === "number") {
                        message.idempotencyLevel = object.idempotencyLevel;
                        break;
                    }
                    break;
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotencyLevel = 0;
                    break;
                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotencyLevel = 1;
                    break;
                case "IDEMPOTENT":
                case 2:
                    message.idempotencyLevel = 2;
                    break;
                }
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] === undefined ? message.idempotencyLevel : $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodOptions";
            };

            /**
             * IdempotencyLevel enum.
             * @name google.protobuf.MethodOptions.IdempotencyLevel
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.identifierValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.positiveIntValue = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.negativeIntValue = reader.int64();
                            break;
                        }
                    case 6: {
                            message.doubleValue = reader.double();
                            break;
                        }
                    case 7: {
                            message.stringValue = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.aggregateValue = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (let i = 0; i < message.name.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                let message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (let i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (let j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.namePart = reader.string();
                                break;
                            }
                        case 2: {
                                message.isExtension = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (let i = 0; i < message.location.length; ++i) {
                        let error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                let message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (let i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (let j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            }
                        case 3: {
                                message.leadingComments = reader.string();
                                break;
                            }
                        case 4: {
                                message.trailingComments = reader.string();
                                break;
                            }
                        case 6: {
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (let i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (let i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (let j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (let i = 0; i < message.annotation.length; ++i) {
                        let error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                let message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (let i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (let j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 * @property {google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null} [semantic] Annotation semantic
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Annotation semantic.
                 * @member {google.protobuf.GeneratedCodeInfo.Annotation.Semantic} semantic
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.semantic = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    if (message.semantic != null && Object.hasOwnProperty.call(message, "semantic"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.semantic);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                message.sourceFile = reader.string();
                                break;
                            }
                        case 3: {
                                message.begin = reader.int32();
                                break;
                            }
                        case 4: {
                                message.end = reader.int32();
                                break;
                            }
                        case 5: {
                                message.semantic = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    if (message.semantic != null && message.hasOwnProperty("semantic"))
                        switch (message.semantic) {
                        default:
                            return "semantic: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    let message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    switch (object.semantic) {
                    default:
                        if (typeof object.semantic === "number") {
                            message.semantic = object.semantic;
                            break;
                        }
                        break;
                    case "NONE":
                    case 0:
                        message.semantic = 0;
                        break;
                    case "SET":
                    case 1:
                        message.semantic = 1;
                        break;
                    case "ALIAS":
                    case 2:
                        message.semantic = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                        object.semantic = options.enums === String ? "NONE" : 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    if (message.semantic != null && message.hasOwnProperty("semantic"))
                        object.semantic = options.enums === String ? $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] === undefined ? message.semantic : $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] : message.semantic;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Annotation
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                };

                /**
                 * Semantic enum.
                 * @name google.protobuf.GeneratedCodeInfo.Annotation.Semantic
                 * @enum {number}
                 * @property {number} NONE=0 NONE value
                 * @property {number} SET=1 SET value
                 * @property {number} ALIAS=2 ALIAS value
                 */
                Annotation.Semantic = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    values[valuesById[1] = "SET"] = 1;
                    values[valuesById[2] = "ALIAS"] = 2;
                    return values;
                })();

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
