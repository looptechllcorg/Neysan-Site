let x = 20;
let arr = Array.from({ length: x }).fill(0);
for (let i = 1; i < 360; i += 1) {
	arr.push(i);
	arr.push(i);
}

let reversedArr = Array.from({ length: x }).fill(360);
for (let i = 360; i > 0; i -= 1) {
	if (i % 7 == 0) {
		reversedArr.push(i);
		reversedArr.push(i);
		reversedArr.push(i);
		reversedArr.push(i);
	}
	reversedArr.push(i);
}

var memory = {};
const getRotation = () => {
	if (!memory[window.scrollY]) {
		memory[window.scrollY] = (2 * Math.PI * window.scrollY) / window.outerHeight;
	}
	return memory[window.scrollY];
};

let resultArrScale = [...reversedArr, ...arr, ...reversedArr, ...arr, ...reversedArr];

const getScaleRotation = () => {
	let result = resultArrScale;
	let ratio = 28.8;

	let res = ratio * Math.PI * (window.scrollY / (document.body.clientHeight - window.outerHeight - 500));
	const idx = Math.floor(res / (Math.PI / 180));
	res = result[idx] * (Math.PI / 180);
	return res;
};

export { getRotation, getScaleRotation };
