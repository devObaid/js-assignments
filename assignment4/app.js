var legal , illegal , heading;
legal = 'myName \n $name \n my_name \n my1name \n $my_Name1'
illegal = ' 1myname \n @name \n 12025 \n my name \n my!name'
heading = '“Rules for naming JS variables”'
alert( ' Following are legal variable.\n ' + legal)
alert( ' Following are illegal variable.\n ' + illegal)
alert( heading + ' \n Variable names can only contain:  $ , _ and a number in middle. for example: $my_name. \n  Variables must begin with an: alphabet , $ or _ . For example: my_name , $name , _name$1khan. \n  Variable names are case sensitive. \n  Variable names should not be JS keyword. ' ) 


