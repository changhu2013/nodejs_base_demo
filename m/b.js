
function B(){
	this.name = 'BBBBB';
	this.bbbb = function(){
		console.log('bbbbbbbbbbbbbbbbbbbb~~~~~~~~~~~~~');
	};
}

B.prototype.bb = function(){
    console.log('bbbbbb~~~~~~~~~~~~~');
};

module.exports = new B();