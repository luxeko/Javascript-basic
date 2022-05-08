const text = 'duc anh dep zai nau mot';

const [first, ...rest] = text;
console.log(first.toLocaleUpperCase() + rest.join(''));