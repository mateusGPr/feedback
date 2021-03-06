import { gql } from "@apollo/client";

export const browseSeries = gql`
query (
  $page: Int,
  $type: MediaType,
  $format: MediaFormat,
  $startDate: String,
  $endDate: String,
  $season: MediaSeason,
  $genres: [String],
  $genresExclude: [String],
  $isAdult: Boolean = false, # Assign default value if isAdult is not included in our query variables 
  $sort: [MediaSort],
) {
  Page (page: $page) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media (
      startDate_like: $startDate, # "2017%" will get all media starting in 2017, alternatively you could use the lesser & greater suffixes
      endDate_like: $endDate,
      season: $season,
      type: $type,
      format: $format,
      genre_in: $genres,
      genre_not_in: $genresExclude,
      isAdult: $isAdult,
      sort: $sort,
    ) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      coverImage {
        medium
        large
      }
      type
      format
      episodes
      chapters
      volumes
      genres
      averageScore
      popularity
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}`;
