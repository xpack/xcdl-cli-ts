#!/usr/bin/env node
// Mandatory shebang must point to `node` and this file must be executable.

/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2017 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

'use strict'

/*
 * On POSIX platforms, when installing a global package,
 * a symbolic link named `xcdl` is created
 * in the `/usr/local/bin` folder (on macOS), or
 * in the `/usr/bin` folder (on Ubuntu), pointing to this file.
 *
 * On Windows, where symbolic links are not available,
 * when installing a global package,
 * two forwarders are automatically created in the
 * user `\AppData\Roaming\npm\node_modules\xcdl\bin` folder:
 * - `xcdl.cmd`, for invocation from the Windows command line
 * - `xcdl` (a shell script), for invokations from an optional
 * POSIX environments like minGW-w64, msys2, git shell, etc.
 *
 * On all platforms, `process.argv[1]` will be the full path of
 * this file, or the full path of the `xcdl` link, so, in case
 * the program will need to be invoked with different names,
 * this is the method to differentiate between them.
 */

// ----------------------------------------------------------------------------

// ES6: `import { Xcdl } from 'main.js'
import { Xcdl } from '../cjs/index.js'

// ----------------------------------------------------------------------------

// TODO: use instances, not static classes.
Xcdl.start().then((code) => { process.exitCode = code })

// ----------------------------------------------------------------------------
