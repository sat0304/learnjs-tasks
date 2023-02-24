'use strict';

alert("" + 1 + 0); // 10
alert('Result "" + 1 + 0 = 10');

alert("" - 1 + 0); // -1
alert('Result "" - 1 + 0 = -1');

alert(true + false); // 1
alert('Result true + false = 1');

alert(6 / "3");
alert('Result 6 / "3" = 2');

alert("2" * "3");
alert('Result "2" * "3" = 6');

alert(4 + 5 + "px");
alert('Result 4 + 5 + "px" = 9px');

alert("$" + 4 + 5);
alert('Result "$" + 4 + 5 = $45');

alert("4" - 2);
alert('Result "4" - 2 = 2');

alert("4px" - 2);
alert('Result "4px" - 2 = NaN');

alert("  -9  " + 5);
alert('Result "  -9  " + 5 =   -9  5');

alert("  -9  " - 5);
alert('Result "  -9  " - 5 = - 14');

alert(null + 1);
alert('Result null + 1 = 1');

alert(undefined + 1);
alert('Result undefined + 1 = NaN');

alert(" \t \n" - 2);
alert(`Result " \\t \\n" - 2 = -2`);
