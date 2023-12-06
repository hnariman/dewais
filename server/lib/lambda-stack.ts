import { Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CfnOutput } from 'aws-cdk-lib';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as gateway from 'aws-cdk-lib/aws-apigateway'
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'node:path';

const TITLE = 'DEWAIS';

export class DewaisTestServer extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // API Gateway Root:
    const api = new gateway.RestApi(this, "api", {
      restApiName: TITLE,
      description: `${TITLE} test task api server`
    });

    // Helpers - power tools (for better logging)
    const layerVersionArn = `arn:aws:lambda:${Stack.of(this).region}:094274105915:layer:AWSLambdaPowertoolsTypeScript:24`
    const nodeLambdaProps: NodejsFunctionProps = {
      bundling: {
        externalModules: ['@aws-lambda-powertools/logger',],
      },
      layers: [lambda.LayerVersion.fromLayerVersionArn(this, 'power-tools', layerVersionArn)]
    };

    // Handlers & Endpoints:
    // calculate words
    const calculateWords = new NodejsFunction(this, 'calculate-words', {
      ...nodeLambdaProps,
      entry: path.resolve(path.dirname(__filename), '../src/functions/getWordsCount.ts'),
      handler: "handler"
    })
    api.root.addMethod("POST", new gateway.LambdaIntegration(calculateWords));

  }
}

export class DewaisTestClient extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, `${TITLE}-frontend`, {
      bucketName: TITLE,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: false // read only by CloudFront
    })

    const cfDistro = new CloudFrontWebDistribution(this, `${TITLE}-distro`, {
      originConfigs: [{
        s3OriginSource: { s3BucketSource: bucket },
        behaviors: [{ isDefaultBehavior: true }]
      }]
    })
    const domiain = new CfnOutput(this, `${TITLE}-domain`, {
      value: cfDistro.distributionDomainName,
      description: `cf-distribution for ${TITLE} `
    });

    const url = new CfnOutput(this, `${TITLE}-url`, {
      value: bucket.bucketWebsiteUrl,
      description: `url for ${TITLE}`
    })
  }
}
