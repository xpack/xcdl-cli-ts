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
    label: 'User Information',
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
            label: 'Properties',
            link: {
              type: 'doc',
              id: 'metadata/properties/index',
            },
            collapsed: true,
            "items": [
              {
                type: 'doc',
                id: 'metadata/properties/activeIf/index',
                label: 'activeIf'
              },
              {
                type: 'doc',
                id: 'metadata/properties/childrenGeneratedFile/index',
                label: 'childrenGeneratedFile'
              },
              {
                type: 'doc',
                id: 'metadata/properties/compilerIncludeFolders/index',
                label: 'compilerIncludeFolders'
              },
              {
                type: 'doc',
                id: 'metadata/properties/compilerSourceFiles/index',
                label: 'compilerSourceFiles'
              },
              {
                type: 'doc',
                id: 'metadata/properties/computed/index',
                label: 'computed'
              },
              {
                type: 'doc',
                id: 'metadata/properties/configurable/index',
                label: 'configurable'
              },
              {
                type: 'doc',
                id: 'metadata/properties/defaultEnabled/index',
                label: 'defaultEnabled'
              },
              {
                type: 'doc',
                id: 'metadata/properties/defaultValue/index',
                label: 'defaultValue'
              },
              {
                type: 'doc',
                id: 'metadata/properties/description/index',
                label: 'description'
              },
              {
                type: 'doc',
                id: 'metadata/properties/display/index',
                label: 'display'
              },
              {
                type: 'doc',
                id: 'metadata/properties/docsUrl/index',
                label: 'docsUrl'
              },
              {
                type: 'doc',
                id: 'metadata/properties/generatedDefinition/index',
                label: 'generatedDefinition'
              },
              {
                type: 'doc',
                id: 'metadata/properties/generatedFile/index',
                label: 'generatedFile'
              },
              {
                type: 'doc',
                id: 'metadata/properties/implements/index',
                label: 'implements'
              },
              {
                type: 'doc',
                id: 'metadata/properties/includeCDLs/index',
                label: 'includeCDLs'
              },
              {
                type: 'doc',
                id: 'metadata/properties/legalValues/index',
                label: 'legalValues'
              },
              {
                type: 'doc',
                id: 'metadata/properties/parent/index',
                label: 'parent'
              },
              {
                type: 'doc',
                id: 'metadata/properties/requires/index',
                label: 'requires'
              },
              {
                type: 'doc',
                id: 'metadata/properties/valueFormat/index',
                label: 'valueFormat'
              },
              {
                type: 'doc',
                id: 'metadata/properties/valueType/index',
                label: 'valueType'
              },
            ]
          },
        ]
      },
    ]
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
    collapsed: true,
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
    label: 'Maintainer Information'
  }
]
