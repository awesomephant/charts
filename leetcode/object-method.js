/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	return {
		initial: init,
		value: init,
		increment() {
			this.value += 1;
			return this.value;
		},
		decrement() {
			this.value -= 1;
			return this.value;
		},
		reset() {
			this.value = this.initial;
			return this.value;
		},
	};
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
