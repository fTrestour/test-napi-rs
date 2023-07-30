const { parse: parseRust } = require("./index");
const { parseJs } = require("./parse-js");

const benchmark = (name, f, size) => {
  console.time(name);

  for (let i = 0; i < size; i++) {
    f(`{
        "name": "John Doe",
        "phones": [
            "+33 123456789"
        ]
      }`);
  }

  console.timeEnd(name);
};

benchmark("JS", parseJs, 1000000);
benchmark("Rust", parseRust, 1000000);
