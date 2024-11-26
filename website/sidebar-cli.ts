/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

const cliSidebar = [
  {
    type: 'category',
    label: 'CLI Reference',
    link: {
      type: 'doc',
      id: 'cli/xcdl/index',
    },
    collapsed: false,
    items: [
      {
        type: 'category',
        label: 'xcdl',
        link: {
          type: 'doc',
          id: 'cli/xcdl/index',
        },
        collapsed: false,
        items: [
          {
            type: 'doc',
            id: 'cli/xcdl/prepare/index',
            label: 'xcdl prepare'
          },
          {
            type: 'doc',
            id: 'cli/xcdl/build/index',
            label: 'xcdl build'
          },
          {
            type: 'doc',
            id: 'cli/xcdl/test/index',
            label: 'xcdl test'
          },
          {
            type: 'doc',
            id: 'cli/xcdl/export/index',
            label: 'xcdl export'
          },
        ]
      },
    ],
  }
]

export default cliSidebar;
