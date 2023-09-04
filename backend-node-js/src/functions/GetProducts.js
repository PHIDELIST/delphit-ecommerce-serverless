import {DynamoDBDocument} from "@aws-sdk/lib-DynamoDBDocument"
import {DynamoDB} from "@aws-sdk/client-dynamodb";
const docClient = DynamoDBDocument.from(new DynamoDB());
const tableName = 'products-tables';

const fetchAllProducts = async (allData = [],exclusiveStartKey = null) => {
    let params = {
        TableName: tableName,
        Limit: 10,
        ExclusiveStartKey: exclusiveStartKey
    };

    let data = await docClient.scan(params);
    
    if(data['items'].length > 0) {
        allData = [...allData, ...data['items']]
        }
    
    if(data['LastEvaluatedKey']){
        return await fetchAllProducts(allData, data.LastEvaluatedKey);
    }else{
        return data ['items'];
    }
}
exports.getProducts = async (event) => {
    if(event.httMethod !== 'GET'){
        throw new Error (`getProducts only accept GET method, you tried: ${event.httpMethod}`);
    }
    console.info('received:', event);
    let items={}

    try{
        items= await fetchAllProducts();

    }catch(err){
        console.log("Failure". err.message);
    }

    const response ={
        statusCode: 200,
        body: JSON.stringify(items)
    };

    return response;
}