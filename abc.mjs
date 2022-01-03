import fs from 'fs'
import fetch from 'node-fetch'

fetch("https://projects.mbww.com/secure/attachment/1162026/overlap_cn_accentureus-20211027152118244_sorted_by_uuo.json", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}).then(r => r.json()).then(r => {
	console.log('asdasdas');
	fs.writeFileSync('abc.json', JSON.stringify(r), { encoding: 'utf-8' })
});
