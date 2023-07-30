const yup = require("yup");

const schema = yup.object({
  name: yup.string(),
  phones: yup.array(yup.string()),
});
exports.parseJs = (data) => {
  const d = JSON.parse(data);
  return schema.validateSync(d);
};
