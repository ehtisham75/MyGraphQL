import { ApolloClient, InMemoryCache } from '@apollo/client';
const BASE_URL = 'https://graphql.anilist.co/';

const GraphClient = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default GraphClient