console.log('Initializing path...')

var points = 25;
var length = 35;

var path = new paper.Path({
  strokeColor: '#E4141B',
  strokeWidth: 20,
  strokeCap: 'round'
});

var start = paper.view.center / [10, 1];
for (var i = 0; i < points; i++)
  path.add(start + new paper.Point(i * length, 0));

console.log('Initialized path')

console.log('Initializing event handlers...')

/**
  Event handlers automatically recognized automatically in 
  a src='text/paperscript' context.
**/
function onMouseMove(event) {
  path.firstSegment.point = event.point;
  for (var i = 0; i < points - 1; i++) {
    var segment = path.segments[i];
    var nextSegment = segment.next;
    var vector = segment.point - nextSegment.point;
    vector.length = length;
    nextSegment.point = segment.point - vector;
  }
  path.smooth({ type: 'continuous' });
}


function onMouseDown(event) {
  path.fullySelected = true;
  path.strokeColor = '#e08285';
}


function onMouseUp(event) {
  path.fullySelected = false;
  path.strokeColor = '#e4141b';
}
console.log('Initialized event handlers')
console.log('Finished setup')