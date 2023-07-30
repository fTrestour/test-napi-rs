const { parse: parseRust } = require("./index");
const { parseJs } = require("./parse-js");

const build_data = (size) => `{
    "name": "John Doe",
    "phones": [
        ${Array.from({ length: size }, () => '"+33 123456789"').join(",\n")}
    ]
  }`;

const benchmark = (name, f, iterations, size) => {
  console.time(name);

  for (let i = 0; i < iterations; i++) {
    f(build_data(size));
  }

  console.timeEnd(name);
};

const iterations = 1000;
const sizes = Array.from({ length: 6 }, (_, i) => 10 ** i);
sizes.forEach((size) => {
  benchmark(`JS, ${size}`, parseJs, iterations, size);
  benchmark(`Rust, ${size}`, parseRust, iterations, size);
});
