#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkWorkshopStack } from '../lib/aws_cdk_workshop-stack';

const app = new cdk.App();
new AwsCdkWorkshopStack(app, 'AwsCdkWorkshopStack');
