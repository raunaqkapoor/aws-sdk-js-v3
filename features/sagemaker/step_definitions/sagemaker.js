const { Before } = require("cucumber");

Before({ tags: "@sagemaker" }, function (scenario, callback) {
  const { SageMaker } = require("../../../clients/client-sagemaker");
  this.service = new SageMaker({});
  callback();
});
