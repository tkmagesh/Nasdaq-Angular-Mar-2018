//Factory
function spinnerFactory(){
	var counter = 0;
	function up(){
		return ++counter;
    }
	function down(){
		return --counter;
    }
	return {
		up : up,
		down : down
    }
}

var spinner = spinnerFactory();
spinner.up()

//Constructor Function aka class
function Spinner(){
	var counter = 0;

	this.up = function(){
		return ++counter;
    };

	this.down = function(){
		return --counter;
    }
}

var spinner = new Spinner();
spinner.up()