const testConfig = {
  wpUrl: 'http://localhost:8000/'
}

const prodConfig = {
  wpUrl: 'http://3.120.190.38/'
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
