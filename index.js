var url = require("url");

function dermineS3Url(s3Url, pathStyle = false) {
	var bucket, region, key;
	var uri = url.parse(s3Url);
	var hostParts = uri.hostname.split(".");

	if (hostParts[1].slice(0, 2) === "s3") {
		region = hostParts[1];
		bucket = hostParts[0];
		key = `${uri.path.slice(1) || ""}${uri.hash || ""}`;
	} 
	else if (hostParts[0].slice(0, 2) === "s3") {
		region = hostParts[0];
		bucket = uri.pathname.split("/")[1];
		key = `${uri.pathname.split("/").slice(2).join("/")}${uri.search || ""}${uri.hash || ""}`;
	}
	else {
		return new Error("not a S3 URL");
	}
	if (pathStyle) {
		return `https://${region}.amazonaws.com/${bucket}/${key}`;
	}
	else {
		return `https://${bucket}.${region}.amazonaws.com/${key}`;
	}
}

module.exports = dermineS3Url;
