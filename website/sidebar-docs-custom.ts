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

export const customDocsSidebar = [
  {
    type: 'category',
    label: 'Getting Started',
    link: {
      type: 'doc',
      id: 'getting-started/index',
    },
    items: [
      {
        type: 'doc',
        id: 'getting-started/glossary/index',
        label: 'Glossary'
      },
    ]
  },
  {
    type: 'doc',
    id: 'install/index',
    label: 'Install Guide'
  },
  {
    type: 'doc',
    id: 'user/index',
    label: 'User Information'
  },
  {
    type: 'doc',
    id: 'faq/index',
    label: 'FAQ'
  },
  {
    type: 'doc',
    id: 'support/index',
    label: 'Help Centre'
  },
  {
    type: 'doc',
    id: 'releases/index',
    label: 'Releases'
  },
  {
    type: 'category',
    label: 'Project',
    collapsed: false,
    link: {
      type: "doc",
      id: "project/about/index",
    },
    items: [
      {
        type: 'doc',
        id: 'project/about/index',
        label: 'About'
      },
      {
        type: 'doc',
        id: 'project/history/index',
        label: 'History'
      },
      {
        type: 'link',
        label: 'License',
        href: 'https://opensource.org/license/MIT',
      },
    ]
  },
  {
    type: 'category',
    label: 'Developer Information',
    link: {
      type: 'doc',
      id: 'developer/index',
    },
    items: [
      {
        type: 'doc',
        id: 'developer/srs/index',
        label: 'SRS'
      },
    ]
  },
  {
    type: 'doc',
    id: 'maintainer/index',
    label: 'Maintainer Information'
  }
]
