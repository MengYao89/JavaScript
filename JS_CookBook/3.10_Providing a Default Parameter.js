// 3.10. Providing a Default Parameter
// You want to specify a default value for a parameter if no argument value is given when a function is called.

function makeString(str, ldelim = "--", rdelim = "--"){
  // To ensure future compatibility, test the parameter for the undefined value and adjust accordingly
  ldelim = typeof ldelim !== 'undefined' ? ldelim : "'"; 
  rdelim = typeof rdelim !== 'undefined' ? rdelim : "'";
  return ldelim + str + rdelim;
}

console.log(makeString("dong"));
console.log(makeString("chen", undefined, "++"));