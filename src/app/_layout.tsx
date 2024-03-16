import { Stack } from "expo-router"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://ibiza.stepzen.net/api/steely-duck/__graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": "apikey ibiza::stepzen.io+1000::4cdfe920ecefd71b04e7bb22ef06e4aa20be87817377af692ebbb3a10d80cc67"
    }
  });

const RootLayout = () => {
  return (
    <ApolloProvider  client={client}>
        <Stack />
    </ApolloProvider>
)}

export default RootLayout;