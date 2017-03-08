# S3-Url-Determinizer

[![Greenkeeper badge](https://badges.greenkeeper.io/Ramshackle-Jamathon/s3-url-determinizer.svg)](https://greenkeeper.io/)
remember when you used to treat all s3 urls the same? this lets you return to the safety of not fretting about [all the different ways of refrencing an s3 object](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro)

in-path style: https://s3-aws-region.amazonaws.com/bucket
virtual-hosted style: https://s3-aws-region.amazonaws.com/bucket

## Installation

```
$ npm install s3-url-determinizer
```

## Usage

```javascript

var dermineS3Url = require("s3-url-determinizer")

dermineS3Url("https://s3-region.amazonaws.com/a-s3-bucket/dir/dir2/object?X-Amz-Date=20170305T154747Z", true) // https://s3-region.amazonaws.com/a-s3-bucket/dir/dir2/object?X-Amz-Date=20170305T154747Z
dermineS3Url("https://a-S3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z", true) // https://s3-region.amazonaws.com/a-s3-bucket/dir/dir2/object?X-Amz-Date=20170305T154747Z
dermineS3Url("https://s3-region.amazonaws.com/an-s3-bucket/dir/dir2/object?X-Amz-Date=20170305T154747Z") // https://an-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z

dermineS3Url("https://a-S3-bucket.S3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z") // https://a-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z
dermineS3Url("http://a-S3-bucket.S3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z") // https://a-s3-bucket.s3-region.amazonaws.com/dir/dir2/object?X-Amz-Date=20170305T154747Z

```

## Badges

![](https://img.shields.io/badge/license-GPLv3-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)
