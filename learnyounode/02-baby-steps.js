function sumArgs(argv) {
  var total = 0;
  argv.splice(0, 2);
  argv.map( arg => {
    total = total + Number(arg)
  });
  return total;
}

console.log(sumArgs(process.argv));
