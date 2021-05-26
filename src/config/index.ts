interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [index: string]: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}
const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'localhost',
    },
    endpoint: {
      getKidsList: {
        method: 'GET',
        uri: {
          pathname: '/kids',
        },
      },
      // getPokemon: {
      //   method: 'GET',
      //   uri: {
      //     pathname: '/api/v1/pokemon/{id}',
      //   },
      // },
    },
  },
};

export default config;
