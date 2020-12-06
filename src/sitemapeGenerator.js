const URLS = require('./URLS.json');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { createGzip } = require('zlib');
const {
    SitemapAndIndexStream,
    SitemapStream,
} = require('sitemap');

const sms = new SitemapAndIndexStream({
    limit: 40000, // defaults to 45k

    getSitemapStream: (i) => {
        const sitemapStream = new SitemapStream({
            hostname: 'http://9388fd6287cc.ngrok.io',
        });
        const path = `./sitemap-${i}.xml`;

        sitemapStream
            .pipe(createGzip()) // compress the output of the sitemap
            .pipe(createWriteStream(resolve(path + '.gz'))); // write it to sitemap-NUMBER.xml

        return [
            new URL(path, 'http://9388fd6287cc.ngrok.io/').toString() + '.gz',
            sitemapStream,
        ];
    },
});

sms.pipe(createGzip())
    .pipe(createWriteStream(resolve('./sitemap-index.xml.gz')));

let arr = [];
Object.keys(URLS).forEach(function(key) {
    arr.push(URLS[key])});

arr.forEach(item => {sms.write(item)});

sms.end();