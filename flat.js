module.exports = function(RED) {
    var flatten = require('flat')

    function flatNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var safe = !config.safe;
        node.on('input', function(msg) {
            msg.payload = flatten(msg.payload, {safe: safe});
            node.send(msg);
        });
    }
    RED.nodes.registerType("flat",flatNode);
}

