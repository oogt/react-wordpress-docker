const testConfig = {
  wpUrl: 'http://localhost:8000/',
};

const prodConfig = {
  wpUrl: 'https://wp-test-api.oogt-dev.nl/',
};

const getConfig = env => (env === 'development' ? testConfig : prodConfig);

export default getConfig(process.env.NODE_ENV);
