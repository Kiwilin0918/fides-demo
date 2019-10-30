// $('button').tooltip({
//   trigger: 'click',
//   placement: 'bottom'
// });

// function setTooltip(message) {
//   $('button').tooltip('hide')
//     .attr('data-original-title', message)
//     .tooltip('show');
// }

// function hideTooltip() {
//   setTimeout(function() {
//     $('button').tooltip('hide');
//   }, 1000);
// }

// // Clipboard

// var clipboard = new Clipboard('button');

// clipboard.on('success', function(e) {
//   setTooltip('Copied!');
//   hideTooltip();
// });

// clipboard.on('error', function(e) {
//   setTooltip('Failed!');
//   hideTooltip();
// });

// var btn = document.getElementById('btn2');
// var clipboard = new Clipboard(btn);

// clipboard.on('success', function(e) {
// console.log(e);
// console.info('Action:', e.action);
// console.info('Text:', e.text);
// console.info('Trigger:', e.trigger);
// });

// clipboard.on('error', function(e) {
//     console.log(e);
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});