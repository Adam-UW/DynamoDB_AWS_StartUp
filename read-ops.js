const AWS= require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

const docClient= new AWS.DynamoDB.DocumentClient()

// docClient.get({
//     TableName: 'td_notes',
//     Key:{
//         user_id: 'UW',
//         timestamp: 1595195322
//     }
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })

// docClient.query({
//     TableName: 'td_notes',
//     KeyConditionExpression:"user_id = :uid",
//     ExpressionAttributeValues:{
//         ":uid":"UW"
//     }
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })


// WITHOUT FILTER
// docClient.scan({
//     TableName: 'td_notes'
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })

// WITH FILTER
// docClient.scan({
//     TableName: 'td_notes',
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues:{
//         ":cat":"general"
//     }
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })


docClient.batchGet({
    RequestItems:{
        'td_notes':{
            Keys:[
                {
                    user_id:'UW',
                    timestamp:1595195322
                }
            ]
        },
        'td_notes_sdk':{
            Key:[
                {
                    user_id: '11',
                    timestamp: 1
                }
            ]
        }
    }
}, (err, data)=>{
    if(err) console.log(err)

    console.log(JSON.stringify(data, null, 2))
})