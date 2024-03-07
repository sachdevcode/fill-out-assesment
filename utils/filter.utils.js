function filterResponses(parsedFilters, responses) {
  return responses.filter((response) => {
    for (const filter of parsedFilters) {
      const question = response.questions.find(
        (question) => question.id === filter.id
      );
      if (!question) return false;

      switch (filter.condition) {
        case "equals":
          if (question.value !== filter.value) return false;
          break;
        case "does_not_equal":
          if (question.value === filter.value) return false;
          break;
        case "greater_than":
          if (new Date(question.value) <= new Date(filter.value)) return false;
          break;
        case "less_than":
          if (new Date(question.value) >= new Date(filter.value)) return false;
          break;
        default:
          return false;
      }
    }
    return true;
  });
}

module.exports = {
  filterResponses,
};
