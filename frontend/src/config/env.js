const testConfig = {
  wpUrl: 'http://localhost:8000/'
}

const prodConfig = {
  wpUrl: 'https://wp-test-api.oogt-dev.nl/'
}

const getConfig = env => {
  if (env === 'development') {
    return testConfig;
  }
  if (env === 'production') {
    return prodConfig;
  }
}

export default getConfig(process.env.NODE_ENV);
