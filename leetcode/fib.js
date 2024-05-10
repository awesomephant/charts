var fibGenerator = function* () {
	let n = 0;
	let seq = [];
	while (true) {
		let value = n > 1 ? seq[n - 1] + seq[n - 2] : n;
		n += 1;
		seq.push(value);
		yield value;
	}
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
