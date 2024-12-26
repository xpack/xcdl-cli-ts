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

import Link from '@docusaurus/Link';

import type {FeatureItem} from './FeatureItem'

export const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-variant, cross-platform configurations',
    Svg: require('@site/static/img/mosaic.svg').default,
    description: (
      <>
        The <b>xCDL Components Framework</b> is designed to simplify
        and automate the configuration process for modular applications
         and tests across multiple platforms
        (<b>Windows</b>, <b>macOS</b>, <b>GNU/Linux</b>).
      </>
    ),
  },
  {
    title: 'Easy to Use & Reproducible',
    Svg: require('@site/static/img/check-badge.svg').default,
    description: (
      <>
        Source libraries can be split into components that
        seamlessly integrate into projects
        as <b>dependencies</b>,
        allowing for convenient configuration and building.
        This feature also ensures reproducibility, which is particularly
        beneficial in <b>CI/CD</b> environments.
      </>
    ),
  },
  {
    title: 'Part of the Node.js ecosystem',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        The <b><Link to="https://xpack.github.io/xcdl/">xcdl</Link></b> CLI tool
        enhances <b><Link to="https://docs.npmjs.com/cli/">xpm</Link></b> with
        additional features tailored for configuring <b>C/C++ projects</b>.
        This enables source libraries to seamlessly integrate into
        the Node.js ecosystem, while still being compatible with
        other build systems.
      </>
    ),
  },
];
