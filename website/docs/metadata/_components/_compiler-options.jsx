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

import MetadataObjectPropertyLink from '@site/src/components/MetadataObjectPropertyLink';

export default function func({objectType = 'TYPE'}) {
  return (
    <>
      <MetadataObjectPropertyLink name='compilerOptions' /> - a map of toolchain specific objects with compiler options to be used during the build if this {objectType} is active and enabled
    </>
  )
}
