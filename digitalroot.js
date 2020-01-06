

function digitalRoot(number)
{
  var sum = 0;
  while(number > 0)
  {
    var loose = number % 10;
    console.log("n:",number," s:",sum, " l:",loose);
    sum += loose;
    number = (number - loose) / 10;
  }

  return sum;

}
