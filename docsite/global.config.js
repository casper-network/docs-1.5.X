const cfgPath = process.env.NODE_ENV ? `./env/.${process.env.NODE_ENV}.env` : `.env`;
console.debug(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
console.debug(`cfgPath: ${cfgPath}`);
require("dotenv").config({ path: cfgPath });

const docsOnlyMode = process.env.DOCS_MODE == "true";
const routePrefix = process.env.ROUTE_PREFIX;
const projectName = process.env.PROJECT_NAME;
const url = process.env.URL;
const baseUrl = process.env.BASE_URL;
const isLocal = process.env.LOCAL == "true";

const globalConfig = {
    cfgPath : cfgPath,
    docsOnlyMode: docsOnlyMode,
    routePrefix: routePrefix,
    projectName : projectName,
    siteUrl: url,
    baseUrl: baseUrl,
    isLocal: isLocal
}
export default globalConfig;