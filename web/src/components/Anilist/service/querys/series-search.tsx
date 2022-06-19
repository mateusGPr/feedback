import { gql } from "@apollo/client";

export const seriesSearch = gql`
query ($query: String, $type: MediaType, $isAdult: Boolean = false) {
  Page {
    media(search: $query, type: $type, isAdult:$isAdult) {
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
      format
      type
      averageScore
      popularity
      episodes
      season
      hashtag
      isAdult
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
    }
  }
}`;
