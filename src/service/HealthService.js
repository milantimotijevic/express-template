
const getHealthCheck = async function() {
    return {
      server: 'up',
    };
};

module.exports = {
    getHealthCheck,
};
  