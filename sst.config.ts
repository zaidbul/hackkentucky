// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hackkentucky",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("HackKentucky", {
      domain: {
        name: "www.hackkentucky.com",
        dns: sst.aws.dns({
          zone: "Z02904321CAP9QVOTBGLO",
        }),
        cert: "arn:aws:acm:us-east-1:418295680070:certificate/86272627-eac2-4c36-b28f-bc851616a377",
      },
    });
  },
});
