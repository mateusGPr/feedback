import { gql } from "@apollo/client";

export const seriesIdReviews = gql`
query ($id: Int!) {
  Page {
    reviews (mediaId: $id){
      id
      summary
      rating
      ratingAmount
      createdAt
      updatedAt
      user {
        id
        name
        avatar {
          large
        }
      }
    }
  }
}`;
