import { LldConfigTs } from "lambda-live-debugger";
import {} from "lambda-live-debugger";

export default {
  // Framework to use
  framework: "cdk",
  // AWS CDK framework context
  // context:
  // Serverless Framework stage
  // stage:
  // Monorepo subfolder
  // subfolder:
  // Filter by function name. You can use * as a wildcard
  function: "test-lld-cdk-esm-TestTsCommonJs3F9D6157-KS5rvK37cCf4",
  // AWS profile
  // profile:
  // AWS region
  // region:
  // AWS role
  // role:
  // SAM framework environment
  // configEnv:
  // SAM framework configuration file
  // samConfigFile:
  // SAM framework template file
  // samTemplateFile:
  // Observable mode
  observable: false,
  // Observable mode interval
  // interval:
  // Verbose logging
  verbose: false,
  // Modify Lambda function list or support custom framework
  // getLambdas: async (foundLambdas) => {
  //   you can customize the list of Lambdas here or create your own
  //   return foundLambdas;
  // },
} satisfies LldConfigTs;
