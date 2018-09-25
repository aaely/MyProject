var localtunnel = require('localtunnel');
let lt = localtunnel(5000, { subdomain: 'jhfkewrhflkerw' }, function(err, tunnel) {
    console.log('LT running');
    console.log(lt);
});