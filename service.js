module.exports = {
  getFormattedResults: (results) => {
    const uniqueVal = getUnique(results);
    const result = {
      total: results.length,
      uniqueValues: [],
    };
    uniqueVal.map((val) => {
      result.uniqueValues.push({
        key: val,
        count: getCount(val, results),
        color: getColor(val),
      });
    });

    return result;
  },
};

function getUnique(array) {
  return [...new Set(array)];
}

function getCount(val, array) {
  return (array.filter((ar) => ar === val).length / array.length) * 100;
}

function getColor(val) {
  if (val === "red") {
    return "bg-danger";
  }
  if (val === "green") {
    return "bg-success";
  }
  if (val === "yellow") {
    return "bg-warning";
  }
  return "";
}
