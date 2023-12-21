const { fetch } = require('cross-fetch'); 
const fs = require('fs'); 
const { generateUUID } = require('micro-uuid');
const { settings } = require('../config.json');
const proxy_handler = require('proxy-agent-v2');

(async () => {
    _.ascii()
	_.prompt('input amount').then(async (amount) => { 
        for(let i = 0; i < Number(amount); i++) {
            let file = fs.readFileSync('./proxies.txt').toString('utf-8')
            let proxies = file.split('\n')

            let random_proxy = `http://${proxies[Math.floor(Math.random() * proxies.length)]}`

            fetch('https://api.discord.gx.games/v1/direct-fulfillment', {
                method: 'POST',
                headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0', 'Content-Type': 'application/json'},
                body: JSON.stringify({'partnerUserId': generateUUID()}),
                agent: settings.using_proxies ? new proxy_handler(random_proxy) : null
            }).then((data) => data.json())
            .then((res) => {
                _.log(`generated code`, true)
    
                fs.appendFile('./output/result.txt', `\nhttps://discord.com/billing/partner-promotions/1180231712274387115/${res.token}`, function(err) {
                    if(err) return _.error('received an error!', true)
    
                    _.log('saved generated data to file!', true)
                })
            }).catch(err => {})
        }
    })
})();