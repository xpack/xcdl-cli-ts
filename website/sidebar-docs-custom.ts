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
    collapsed: true,
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
    type: 'category',
    label: 'User\'s Guide',
    link: {
      type: 'doc',
      id: 'user/index',
    },
    collapsed: true,
    "items": [
      {
        type: 'doc',
        id: 'user/index',
        label: 'How to use'
      },
    ]
  },
  {
    type: 'category',
    label: 'Component Author\'s Guide',
    link: {
      type: 'doc',
      id: 'guide/index',
    },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'guide/rationals/index',
        label: 'Rationals'
      },
      {
        type: 'doc',
        id: 'guide/concepts/index',
        label: 'Concepts'
      },
      {
        type: 'doc',
        id: 'guide/packages/index',
        label: 'Packages'
      },
      {
        type: 'doc',
        id: 'guide/language/index',
        label: 'Language'
      },
      {
        type: 'doc',
        id: 'guide/build-process/index',
        label: 'Build Process'
      },
      {
        type: 'category',
        label: 'Metadata',
        link: {
          type: 'doc',
          id: 'metadata/index',
        },
        collapsed: false,
        "items": [
          {
            type: 'category',
            label: 'Objects',
            link: {
              type: 'doc',
              id: 'metadata/objects/index',
            },
            collapsed: true,
            "items": [
              {
                type: 'doc',
                id: 'metadata/objects/cdlPackage/index',
                label: 'cdlPackage'
              },
              {
                type: 'doc',
                id: 'metadata/objects/cdlComponents/index',
                label: 'cdlComponents'
              },
              {
                type: 'doc',
                id: 'metadata/objects/cdlOptions/index',
                label: 'cdlOptions'
              },
              {
                type: 'doc',
                id: 'metadata/objects/cdlInterfaces/index',
                label: 'cdlInterfaces'
              },
              {
                type: 'doc',
                id: 'metadata/objects/cdlConfigurations/index',
                label: 'cdlConfigurations'
              },
            ]
          },
          {
            type: 'category',
            label: 'Object Properties',
            link: {
              type: 'doc',
              id: 'metadata/object-properties/index',
            },
            collapsed: true,
            "items": [
              {
                type: 'doc',
                id: 'metadata/object-properties/activeIf/index',
                label: 'activeIf'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/childrenGeneratedFile/index',
                label: 'childrenGeneratedFile'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/compilerIncludeFolders/index',
                label: 'compilerIncludeFolders'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/compilerSourceFiles/index',
                label: 'compilerSourceFiles'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/computed/index',
                label: 'computed'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/configurable/index',
                label: 'configurable'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/defaultEnabled/index',
                label: 'defaultEnabled'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/defaultValue/index',
                label: 'defaultValue'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/description/index',
                label: 'description'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/display/index',
                label: 'display'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/docsUrl/index',
                label: 'docsUrl'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/generatedDefinition/index',
                label: 'generatedDefinition'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/generatedFile/index',
                label: 'generatedFile'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/implements/index',
                label: 'implements'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/includeCDLs/index',
                label: 'includeCDLs'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/legalValues/index',
                label: 'legalValues'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/parent/index',
                label: 'parent'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/requires/index',
                label: 'requires'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/valueFormat/index',
                label: 'valueFormat'
              },
              {
                type: 'doc',
                id: 'metadata/object-properties/valueType/index',
                label: 'valueType'
              },
            ]
          },
        ]
      },
    ]
  },
  {
    type: 'category',
    label: 'Contributor\'s Guide',
    link: {
      type: 'doc',
      id: 'developer/index',
    },
    collapsed: true,
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
    label: 'Maintainer\'s Guide'
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
    link: {
      type: 'doc',
      id: 'project/about/index',
    },
    collapsed: false,
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
  }
]
