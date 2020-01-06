
//feed in a array of digits, the pattern capturer will assess when the pattern repeats itself

function findNumberSeriesPattern(numberSeries)
{
  var i=0;
  var j=0;
  var firstPosition = numberSeries[i];
  var counter;
  var maxSeriesLength  = 1;
  var currentPattern = [];
  var longestPattern = [];

  // start at second position
  for (i=1; i< numberSeries.length; i++)
  {
      //could be the beginning of series
      if(numberSeries[i] == firstPosition)
      {
          //let's iterate through the series and see how many matching elements it has
          for (j=0; j < i; i++)
          {
              console.log(numberSeries[i]);
              console.log(numberSeries[i+1]);

          }

      }


      // console.log("a1:",numberSeries[i]," fp:",firstPosition, " i:", i);
      // if(numberSeries[i] == firstPosition)
      // {
      //     console.log("match");
      //     var j = i + 1;
      //     counter = 1;
      //     currentPattern.push(firstPosition);
      //     console.log("a2:",numberSeries[j]," b:",numberSeries[counter]," count:",counter);
      //     while(numberSeries[j] == numberSeries[counter])
      //     {
      //       console.log("match2");
      //
      //       currentPattern.push(numberSeries[j]);
      //       if (counter > maxSeriesLength) {
      //         maxSeriesLength = counter;
      //         longestPattern = currentPattern;
      //
      //       }
      //
      //       console.log('series of ' + counter  + 'found');
      //       counter += 1;
      //       j += 1;
      //       console.log("a3:",numberSeries[j]," b:",numberSeries[counter]," count:",counter);

          // }

        // }
  }

  console.log('max counter length was: ' + maxSeriesLength);
  console.log('longest pattern was: ' + longestPattern);

}

var fibonacii = [1,1];
for (i=0;i<100;i++)
{
  fibonacii.push(fibonacii[i]+fibonacii[i+1]);
}

var fibonaciiMod9 = [];
for (i=0;i<100;i++)
{
  fibonaciiMod9.push(fibonacii[i] % 9);
}

var easyPatternA = [1,2,1,2,1,2,1,2,1,2,1,2]; // sholud return, series length 2; [1,2]; repetitions 6;

var easyPatternB = [1,2,3,1,2,3,1,2,3]; // sholud return, series length 3; [1,2,3]; repetitions 3;

// var easyPattern2 = [1,2,3,4,5,1,2,3,4,5];
// var easyPattern3 = [7,2,5,5,6,7,2,5,5,6,7,2,5,5,6];
// var easyPattern4 = [7,2,5,5,6,7,2,5,5,6,7,2,5,5,6];

// console.log(fibonaciiMod9);

// findNumberSeriesPattern(easyPattern2);
// findNumberSeriesPattern(easyPattern3);

findNumberSeriesPattern(easyPatternA);
findNumberSeriesPattern(easyPatternB);


//create fibonaci series first 100
//fibonacii mod 1-24
//assess repeating length
