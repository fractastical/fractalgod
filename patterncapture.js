
//feed in a array of digits, the pattern capturer will assess when the pattern repeats itself

function findNumberSeriesPattern(numberSeries[])
{
  var i=0;
  var firstPosition = numberSeries[i];
  var counter;
  for (i=1;i<numberSeries.length,i++)
  {
      if(numberSeries[i] = firstPostion)
        var j = i;
        counter=1;
        while(numberSeries[j] == numberSeries[1+counter])
        {
          console.log('series of ' + counter + 'found');
          counter++;
          j++;
        }
  }
  console.log('max counter length was: ' + counter);

}

var fibonacii = [1,1];
for (i=0;i<100,i++)
{
  fibonacii.push(fibonacii[i]+fibonacii[i+1]);
}

var fibonaciiMod9 = [];
for (i=0;i<100,i++)
{
  fibonaciiMod9.push(Math.modulus(fibonacii[i],0)]);
}

var easyPattern [1,2,3,1,2,3,1,2,3];

findNumberSeriesPattern(fibonaciiMod9);


//create fibonaci series first 100
//fibonacii mod 1-24
//assess repeating length
