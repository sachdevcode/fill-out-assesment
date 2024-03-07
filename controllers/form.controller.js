const { filterResponses } = require("../utils/filter.utils");
const { fetchResponsesFromAPI } = require("../services/form.service");

exports.getFilteredResponses = async (req, res) => {
  try {
    const { formId } = req.params;
    const { filters, ...queryParams } = req.query;

    const parsedFilters = JSON.parse(filters);

    const response = await fetchResponsesFromAPI(formId, queryParams);

    // Filter responses based on provided filters
    const filteredResponses = filterResponses(
      parsedFilters,
      response.data.responses
    );

    const responseObject = {
      responses: filteredResponses,
      totalResponses: filteredResponses.length,
      pageCount: Math.ceil(
        filteredResponses.length / (queryParams.limit || 150)
      ),
    };

    res.json(responseObject);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
