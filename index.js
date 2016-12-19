var say = require('say');
var prompt = require('prompt');

var options = {
    '1' : 'I agree',
    '2' : 'Hold on',    
}

var quickMessages = 'Quick Text Options: ' + Object.keys(options).map((name) => `${name}) ${options[name]} ` ).join('');

console.log(quickMessages);
console.log('Type 0 to Quit');

// 
// Start the prompt 
// 
prompt.start();

var ask = () => {
    prompt.get(['text'], function (err, result) {
        if(result && result.text) {                      
            var text = result.text.trim();
            
            if(text === '0') {
                process.exit();
            } else if (Object.keys(options).indexOf(text) !== -1) {
                text = options[text];
            }
            
            // Fire a callback once the text has completed being spoken
            say.speak(text, 'Good News', 1.0);
            
            ask();
        }
    });        
}

ask();