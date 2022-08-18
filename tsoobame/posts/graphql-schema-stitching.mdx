# Graphql Schema Stitching

I am going to write a short (?) post about how to create a simple API Gateway that exposes two services using Graphql Stitching. I am assuming some knowledge about graphql and Apollo Server.
We will use express, nodejs and apollo for the service and a technique called schema stitching.
If you want to learn more about Graphql you can go to the official site.

## Why do we need Api gateways and schema stitching

I will write a whole post about the reasons we had to use Graphql in our services and in our Api Gateway.
Here I am offering a short explanation:
In real world scenarios we are creating independent and autonomous (micro)services. The less data they share, the less they need to call each other and the less coupled they are, the better.
Many times a service manages entities (or parts of entities) that hold an id about another entity but does not need to know more details. For example an inventory service might manage productID and available units, but does not need to know about the name of the product or about its price.
Inventory service will be able to run all its operations and apply the rules it manages without requesting information to any other service.
Users, on the other hand, will need to see this scattered data together in one screen. In order to avoid too many requests from the UI, an API Gateway can offer a single endpoint where UI can request the data needed for a specific functionality/screen in one request, and the Gateway can orchestrate the calls to other services, cache results if needed, etc.

## Let&#x27;s start working

Let&#x27;s create a folder as the root for our project:

```shell
mkdir graphql-stitching
cd graphql-stitching
```

## Creating the songs service

We are going to create a simple service that offers data about songs.

```shell
mkdir songs
cd songs
npm init -y
npm install express graphql apollo-server-express body-parser
```

We are going to create our schema first:

```shell
touch schema.js
```

#### schema.js

```javascript
const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const songs = [
  { id: 1, title: "I will always love you" },
  { id: 2, title: "Lose yourself" },
  { id: 3, title: "Eye of the tiger" },
  { id: 4, title: "Men in Black" },
  { id: 5, title: "The power of love" },
  { id: 6, title: "My Heart will go on" },
];

const typeDefs = gql`
  type Query {
    songs: [Song]
    song(songId: ID!): Song
  }
  type Song {
    id: ID
    title: String
  }
`;

const resolvers = {
  Query: {
    songs: () => {
      return songs;
    },
    song(parent, args, context, info) {
      return songs.find((song) => song.id === Number(args.songId));
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

We are defining a list of songs.
The type Song (id, title) and two queries for getting all songs and one song by id.

Let&#x27;s create the api:

```shell
touch index.js
```

### index.js

```javascript
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const schema = require("./schema");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({
  playground: {
    endpoint: "/api",
    settings: {
      "editor.cursorShape": "block",
      "editor.cursorColor": "#000",
      "editor.theme": "light",
    },
  },
  schema,
});

server.applyMiddleware({ app, path: "/api" });

app.listen(3000, () => {
  console.log("Song services listening to 3000...");
});
```

We create a simple express service using apollo engine to expose both the api and the playground to tests our api.

```shell
node index.js
```

and open the <a href="http://localhost:3000">songs api</a>
You will see the playground, so you can run the first query:

```graphql
{
  songs {
    id
    title
  }
}
```

you should be able to see the results.

## Creating the movies service

We are going to follow the same process. From the root of our project:

```shell
mkdir movies
cd movies
touch index.js
touch schema.js
npm init -y
npm install express graphql apollo-server-express body-parser graphql-tag
```

index.js will be similar to the previous one. Only the port number needs to be different

```javascript
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const schema = require("./schema");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({
  playground: {
    endpoint: "/api",
    settings: {
      "editor.cursorShape": "block",
      "editor.cursorColor": "#000",
      "editor.theme": "light",
    },
  },
  schema,
});

server.applyMiddleware({ app, path: "/api" });

app.listen(3001, () => {
  console.log("Movie services listening to 3001...");
});
```

Schema will be very similar:

```javascript
const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const movies = [
  { id: 1, title: "The Bodyguard", mainSongId: 1 },
  { id: 2, title: "8 Mile", mainSongId: 2 },
  { id: 3, title: "Rocky III", mainSongId: 3 },
  { id: 4, title: "Men in Black", mainSongId: 4 },
  { id: 5, title: "Back to the Future", mainSongId: 5 },
  { id: 6, title: "Titanic", mainSongId: 6 },
];

const typeDefs = gql`
  type Query {
    movies: [Movie]
    movie(movieId: ID!): Movie
  }
  type Movie {
    id: ID!
    title: String!
    mainSongId: ID!
  }
`;

const resolvers = {
  Query: {
    movies: () => {
      return movies;
    },
    movie(parent, args, context, info) {
      return movies.find((movie) => movie.id === Number(args.movieId));
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

The difference is that movie has a reference to songs. Specifically mainSongId. Since both services are isolated and are autonomous, movie service does not know where songs service is, or what data a songs holds. Only knows that a movie has a main song and it holds its ID.

If we run the project in the same way

```shell
node index.js
```

we can see the <a href="http://localhost:3001">playground</a> and run our test queries.

## Let&#x27;s start the interesting part. Our Api gateway

We are going to create the same files. From project root:

```shell
mkdir apigateway
cd apigateway
touch index.js
touch schema.js
npm init -y
npm install express graphql apollo-server-express body-parser graphql-tag apollo-link-http node-fetch
```

The schema will created based on the schemas of the other services, so we are going to stitch and expose them in the api gateway.

### schema.js

```javascript
const {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
} = require("graphql-tools");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");

const MoviesUrl = "http://localhost:3001/api";
const SongsUrl = "http://localhost:3000/api";

async function createServiceSchema(url) {
  const link = createHttpLink({
    uri: url,
    fetch,
  });
  const schema = await introspectSchema(link);
  return makeRemoteExecutableSchema({
    schema,
    link,
  });
}

async function createSchemas() {
  const movieSchema = await createServiceSchema(SongsUrl);
  const songsSchema = await createServiceSchema(MoviesUrl);

  return mergeSchemas({ schemas: [songsSchema, movieSchema] });
}

module.exports = createSchemas();
```

As you can see in the code, the schema is generated by requesting the schemas of both APIs and merging them.
One difference is, now we need to request this data before being able to start the apigateway, so the index.js will be slightly different:

```javascript
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const createSchema = require("./schema");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

createSchema.then((schema) => {
  const server = new ApolloServer({
    playground: {
      endpoint: "/api",
      settings: {
        "editor.cursorShape": "block",
        "editor.cursorColor": "#000",
        "editor.theme": "light",
      },
    },
    schema,
  });

  server.applyMiddleware({ app, path: "/api" });

  app.listen(4000, () => {
    console.log("Graphql listening to 4000...");
  });
});
```

Before starting the listener, the schema is requested and merged so we can expose it in our api.
We need to run the previous services in order to be able to execute this one. From the root of the project:

```shell
node movies/index.js &
node songs/index.js &
node apigateway/index.js
```

If we go to the api gateway playground we can query movies and songs in the same query:

```graphql
{
  movies {
    id
    title
    mainSongId
  }

  songs {
    id
    title
  }
}
```

This was an introduction to schema stitching. In part 2 I will show some more concepts and real case scenarios like extending the services&#x27; schema in the api gateway with custom resolvers, how to optimize by using dataloaders.
If you have any questions about graphql schema stitching or about api gateway in general, please add your comment or contact me.
