const { FS_KEY: fsKey, FS_SECRET: fsSecret } = process.env;
if (!fsKey || !fsSecret) {
    return done(new Error('Must configure developer credentials.'));
}

if (!event.queryStringParameters) {
    return done(new Error('Must provide a weight.'));
}
const { queryStringParameters: { weight: rawWeight } } = event;
const weight = Number.parseFloat(rawWeight);

if (Number.isNaN(weight) || weight <= 0) {
    return done(new Error('Must provide a valid weight.'))
}