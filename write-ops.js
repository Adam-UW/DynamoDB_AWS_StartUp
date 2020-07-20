const AWS= require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

const docClient= new AWS.DynamoDB.DocumentClient()


// {Put, which is change or add values to the Database}
// docClient.put({
//     TableName: 'td_notes_sdk',
//     Item:{
//         user_id:'bb',
//         timestamp:2,
//         title: 'changed title',
//         content: 'changed content'
//     }
// }, (err, data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// {Update..}
// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key:{
//         user_id: 'bb',
//         timestamp:1
//     }, 
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames:{
//         '#t': 'title'
//     },
//     ExpressionAttributeValues:{
//         ':t': 'updated title'
//     }
// }, (err, data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// {Delete...}
// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key:{
//         user_id: 'bb',
//         timestamp:1
//     }
// }, (err, data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// { For Multiple items}
// docClient.batchWrite({
//     RequestItems:{
//         'td_notes_sdk':[
//             {
//                 DeleteRequest:{
//                     Key:{
//                         user_id: 'bb',
//                         timestamp:2
//                     }
//                 }
//             },
//             {
//                 PutRequest:{
//                     Item:{
//                         user_id: '11',
//                         timestamp:1,
//                         title:'Title 11',
//                         content: 'Content 11'
//                     }
//                 }
//             },
//             {
//                 PutRequest:{
//                     Item:{
//                         user_id: '22',
//                         timestamp:2,
//                         title:'Title 22',
//                         content: 'Content 22'
//                     }
//                 }
//             }
//         ]
//     }
// }, (err, data)=>{
//     if(err) console.log(err)

//     console.log(data)
// })