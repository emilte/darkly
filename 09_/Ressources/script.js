const page = require('webpage').create()
const allPath = []

function getAllPath (_page) {
  return _page.evaluate(function() {
    return [].map.call(document.querySelectorAll('a'), function(link) {
    //  return link.getAttribute('href')
      const linkStr = link.getAttribute('href')
      
      if (linkStr !== 'README') {
        return _page.open(`${page.url}${linkStr}`, function() {
          getAllPath(_page)
        })
      }
      return 'toto'
    })
  })
}

page.open('http://172.16.106.131/.hidden/', function(status) {
  console.log("Status: " + status)
  if(status !== "success") phantom.exit(1)

  const result = getAllPath(page)
  console.log(result.join('\n'))
  phantom.exit(0)
})