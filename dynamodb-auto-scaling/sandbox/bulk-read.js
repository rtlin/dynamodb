const async = require("async");
const _ = require("underscore");
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

var startKey = [];
var results = [];
var pages = 0;
async.doWhilst(
    //iteratee
    (callback)=>{
        let params = {
            TableName: 'global_td_notes',
            ConsistentRead: true,
            Limit: 3
        };

        if(!_.isEmpty(startKey)) {
            params.ExclusiveStartKey = startKey;
        }

        docClient.scan(params, (err, data)=>{
            if(err) {
                console.log(err);
                // callback(err, {});
                callback(null, {});
            } else {
                console.log('data:', data);
                console.log(' ---- ');
                if(typeof data.LastEvaluatedKey !== 'undefined') {
                    startKey = data.LastEvaluatedKey;
                } else {
                    startKey = [];
                }

                /*
                if(!_.isEmpty(data.Items)){
                    results = _.union(results, data.Items);
                    pages++;
                }
                */
                pages++;
                console.log(data.Items, "===> Page: ", pages);
                callback(null, results);
            }
        });
    },

    //truth test
    ()=>{
        return true;
        /*
        if(_.isEmpty(startKey)) {
            return false;
        } else {
            return true;
        }
        */
    },

    //callback
    (err, data) => {
        if(err) {
            console.log(err);
        } else {
            //console.log(data);
            // console.log("Item Count", data.length);
            console.log("Pages", pages);
        }
    }
);
