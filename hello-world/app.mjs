let count = 0;

export const lambdaHandler = async (event, context) => {
    count++;
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
                count
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

};
