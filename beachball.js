"use strict";
import { animate, stagger, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 3 }],
  [".ball", { scale: 0.3 }],
  [".ball", { scale: 0.3, x: 1600, y: -860 }],
];

timeline(sequence);

// await animate(".ball", { x: 400, rotate: 200 }, { duration: 3 }).finished.then(
//   () => {
//     animate(".ball", { scale: 0 });
//   }
// );
