#!/usr/bin/env node

import { createCli } from "./cli/index.js";
import { loadConfig } from "./config/index.js";

loadConfig();

const cli = createCli();

cli.parse();
