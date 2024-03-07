const axios = require("axios");

async function fetchResponsesFromAPI(formId, queryParams) {
  const apiUrl = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;
  return await axios.get(apiUrl, {
    params: {
      ...queryParams,
      limit: queryParams.limit || 10,
    },
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
}

module.exports = {
  fetchResponsesFromAPI,
};
