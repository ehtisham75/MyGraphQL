import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
query Query {
    Page {
      media {
      id
      bannerImage  
      isAdult  
      title {
        english
      }
      description
      duration
      trending
      }
    }
  }
`;


export const NEW_ARTICLES = gql`
query ART_Query($tag: String) {
    Page {
        media(tag: $tag) {
            bannerImage
            episodes
            hashtag
            duration
          coverImage {
                large
            }
            description
          startDate {
                year
            }
          title {
                english
            }
          stats {
            statusDistribution {
                    status
                }
            }
        }
    }
}
`;
