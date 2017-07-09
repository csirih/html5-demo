var esearch = require('http')
var Promise = require('promise');
var cors =require('cors')
var port = 9200
var protocol = 'http'
var hosturl = [ '127.0.0.1']
var hosts = hosturl.map (function(host) {
  return{
    protocol : protocol,
    host : host,
    port : port
  }
})
var options = {method: 'GET', host: 'localhost', port: 9200, path: '/logstash-2017.06.07/_search/'};

  module.exports.search = function () {
      return new Promise(function(resolve, reject) {
      esearch.get(options, function(response) {
 
    var body=''
    response.on('data', function(d) {
            body += d;
        })
        response.on('end', function() {
            var parsed = JSON.parse(body)
            resolve(parsed) 
          })

      })
  })
}

