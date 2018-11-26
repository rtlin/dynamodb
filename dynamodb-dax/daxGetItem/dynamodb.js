const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

const AmazonDaxClient = require("amazon-dax-client");
const dax = new AmazonDaxClient({
    endpoints: ['dax-notes-app.vxiby2.clustercfg.dax.use1.cache.amazonaws.com:8111'],
    region: 'us-east-1'
});

exports.handler = (event, context, callback) => {
    dax.getItem({
        TableName: "td_notes_test",
        Key: {
            user_id: {
                S: event.user_id.toString()
            },
            timestamp: {
                N: event.timestamp.toString()
            }
        }
    }, (err, data)=>{
        if(err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
};
