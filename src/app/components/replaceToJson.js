/**
 * 使用replace方法，将下列输出为json
 * 考点：
 * 1. 简单的正则使用
 */
var msg = "{\\\"url\":\\\"MBU0016G7G004SS00081\\\",\\\"data\\\":{\\\"a\":1,\\\"b\\\":[2,3]}}";
var regex = /\\/g;
var res = msg.replace(regex, "");
console.log(JSON.parse(res));
