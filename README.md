# S3-Url-Determinizer
remember when you tried to treat all S3 urls the same? 

[in-path style: https://s3-aws-region.amazonaws.com/bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro)

[virtual-hosted style: http://bucket.s3-aws-region.amazonaws.com](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro)

## Installation

```
$ npm install s3-url-determinizer
```

## Usage

```javascript

var dermineS3Url = require("s3-url-determinizer")

dermineS3Url("https://s3-region.amazonaws.com/a-s3-bucket/object?X-Amz-Date=20170305T154747Z", true) 
// https://s3-region.amazonaws.com/a-s3-bucket/object?X-Amz-Date=20170305T154747Z

dermineS3Url("https://a-S3-bucket.s3-region.amazonaws.com/object?X-Amz-Date=20170305T154747Z", true) 
// https://s3-region.amazonaws.com/a-s3-bucket/object?X-Amz-Date=20170305T154747Z

dermineS3Url("https://s3-region.amazonaws.com/an-s3-bucket/dir/dir2/object?X-Amz-Date=20170305T154747Z") 
// https://an-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z

dermineS3Url("https://a-S3-bucket.S3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z") 
// https://a-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z

dermineS3Url("http://a-S3-bucket.S3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z") 
// https://a-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z

```

## Badges

![](https://img.shields.io/badge/license-GPLv3-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)
