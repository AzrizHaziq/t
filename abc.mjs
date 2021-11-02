import fs from 'fs'
import fetch from 'node-fetch'

fetch("https://projects.mbww.com/secure/attachment/1162026/overlap_cn_accentureus-20211027152118244_sorted_by_uuo.json", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "LOGOUTCOOKIE=b4478239-5000-4bbb-8b0c-40626d37a773; _ga=GA1.2.1301771932.1585550443; slack.inapp.links.first.clicked.haziq.jasni%40kinesso.com=false; SAMLCOOKIE=36GOUknMxZhmWf8GJL0pUJDBuKKgvpdiYeIqm/fW6qV1fHfBmQU0lkG2Fi9GcxePCGWNVFYOUup8lvKZw3FE7Q==; mo.jira-sso.IDPIDCOOKIE=b4478239-5000-4bbb-8b0c-40626d37a773; lt-session-data=\"0.ba8cb0fd1798810beb9\"; lt-pageview-id=\"0.f1c40c8c1798810bebc\"; jira.editor.user.mode=wysiwyg; mo.jira-sso.LOGOUTCOOKIE=b4478239-5000-4bbb-8b0c-40626d37a773; JSESSIONID=ECE72F752239A68F45EA2064D7847B1A; atlassian.xsrf.token=BKB4-USCH-8CM0-1QBB_e318fddd2776ab07aa0c67ee94e23d417c033158_lin"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}).then(r => r.json()).then(r => {
	console.log('asdasdas');
	fs.writeFileSync('abc.json', JSON.stringify(r), { encoding: 'utf-8' })
});