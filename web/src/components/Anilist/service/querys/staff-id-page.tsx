import { gql } from "@apollo/client";

export const staffIdPage = gql`
query ($id: Int, $characterPage: Int = 1, $staffPage: Int = 1) {
  Staff(id: $id) {
    id
    description
    name {
      first
      last
      native
    }
    image {
      large
    }
    characters(page: $characterPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      edges {
        role
        media {
          id
          type
          title {
            userPreferred
          }
          coverImage {
            large
          }
        }
        node {
          id
          name {
            first
            last
          }
          image {
            large
          }
        }
      }
    }
    staffMedia(page: $staffPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      edges {
        staffRole
        node {
          id
          type
          title {
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
    }
  }
}`;
