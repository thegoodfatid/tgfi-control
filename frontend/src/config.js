const dev = {
  apiEndpoint: 'http://localhost:3030',
};

const prod = {
  apiEndpoint: 'http://localhost:3030',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  // Add common config values here
  //   MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
