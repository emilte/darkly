const axios = require('axios')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')

function readme() {
  return axios({
    method:'get',
    url,
    responseType:'stream'
  })
  .then((response) => {
    response.data.pipe(process.stdout)
    return Promise.resolve()
  })
  .catch((err) => console.error(err))
}

async function script (url) {
  return request(url, function(err, resp, body){
    const $ = cheerio.load(body);
    const links = $('a')
    
    $(links).each((i, link) => {
      if ($(link).attr('href') === 'README') await readme(url + 'README')
      else if ($(link).attr('href') !== '../') return script(url + $(link).attr('href'))
    })
  })
}

script('http://172.16.106.132/.hidden/')
