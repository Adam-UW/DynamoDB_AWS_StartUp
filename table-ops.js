const AWS= require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

const dynamodb= new AWS.DynamoDB


// {List All Tables}
dynamodb.listTables({}, (err, data)=>{
    if(err) console.log(err)

    console.log(data)

})



//{List items of a table } @NOTE -> change only the table name
// dynamodb.describeTable({TableName: "td_notes_sdk"}, (err, data)=>{
//         if(err) console.log(err)
        
        
//         console.log(JSON.stringify(data, null, 2))
// })



// {Create A table}
// dynamodb.createTable({
//     TableName: "td_notes_sdk",
//     AttributeDefinitions: [
//         {
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "N"

//         }
//     ],
//     KeySchema:[
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput:{
//         ReadCapacityUnits:1,
//         WriteCapacityUnits: 1
//     }


// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(JSON.stringify(data, null, 2))

// })

// dynamodb.updateTable({
//     TableName:"td_notes_sdk",
//     ProvisionedThroughput:{
//         ReadCapacityUnits:2,
//         WriteCapacityUnits:1
//     }
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })

// dynamodb.deleteTable({TableName: "td_notes_sdk"}, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })