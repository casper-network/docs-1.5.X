const globalConfig = require("../global.config");
let routePrefix = globalConfig.routePrefix;
// const baseUrl = globalConfig.baseUrl;
// if (baseUrl && baseUrl !== "/") { routePrefix = `${baseUrl}/${routePrefix}`; }
console.log(`routePrefix: ${routePrefix}`);
module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_Red_RGB.png",
    },
    items: [
        {
            type: "docSidebar",
            sidebarId: "concepts",
            label: "Concepts",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "developers",
            label: "Developers",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "operators",
            label: "Operators",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "users",
            label: "Users",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "resources",
            label: "Resources",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "tutorials",
            label: "Tutorials",
            position: "left",
        },
        {
            to: `https://github.com/casper-devrel/docs-redux/issues/new?assignees=&labels=docs-v2-feedback&projects=&template=feedback.yml&title=Docs+Feedback`,
            label: "Feedback",
            position: "right",
        },
        {
            to: 'blog/tags/condor', 
            label: 'Condor', 
            position: 'right' 
        },
        { 
            to: 'blog', 
            label: 'Blog', 
            position: 'right' 
        },
        {
            type: "search",
            position: "right",
        },
        {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
        },
        {
            href: "https://support.casperlabs.io/",
            label: "Support",
            position: "right",
        },
        {
            href: "https://discord.com/invite/casperblockchain",
            label: "Chat",
            position: "right",
        },
        {
            href: "https://github.com/casper-devrel/docs-redux",
            label: "GitHub",
            position: "right",
        },
    ],
};
