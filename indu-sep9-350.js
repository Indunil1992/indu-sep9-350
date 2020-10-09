const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    // 1st commnt
    try {
        let data = await s3.listObjects({
            Bucket: "111-vbvbw",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    // 2nd commnt
    //33
    // 77
    //00000
    //oooo
    return { "message": "Successfully executed" };
};