const triggers = require('./trigger.js');

triggers.start(10)
setTimeout(function() {triggers.pause()},2500)
setTimeout(function() {triggers.pause()},6000)
setTimeout(function() {triggers.stop()},9000)