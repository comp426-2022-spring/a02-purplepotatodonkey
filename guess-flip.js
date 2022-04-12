import 'module';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
const args = require("minimist")(process.argv.slice(2));
args["call"];
const call = args.call;

if (call == null) {
    console.error("Error: no input.");
    process.exit();
} else if (call != "heads" && call != "tails") {
    console.log("Usage: node guess-flip --call=[heads|tails]");
    process.exit();
}

console.log(flipACoin(call));