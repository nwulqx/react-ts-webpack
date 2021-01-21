/**
 * 使用replace方法，将下列输出为json
 * 考点：
 * 1. 简单的正则使用
 * 2. replace和JSON.parse
 */
const msg = `{\\\"url\":\\\"MBU0016G7G004SS00081\\\",\\\"data\\\":{\\\"a\":1,\\\"b\\\":[2,3]}}`;
const regex = /\\/g;
const res = msg.replace(regex, "");
console.log(JSON.parse(res));
