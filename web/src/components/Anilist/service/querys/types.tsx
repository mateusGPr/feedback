export type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL' | null;
export type MediaType = 'ANIME' | 'MANGA' | null;
export type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT' | null;
export type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS' | null;
export type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME' | 'WEB_NOVEL' | 'LIVE_ACTION' | 'GAME' | 'COMIC' | 'MULTIMEDIA_PROJECT' | 'PICTURE_BOOK' | null;
export type CountryCode = string;

export type MediaTrendSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'DATE' | 'DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODE' | 'EPISODE_DESC' | null;
export type AiringSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'TIME' | 'TIME_DESC' | 'EPISODE' | 'EPISODE_DESC' | null;