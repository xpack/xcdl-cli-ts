/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024-2026 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/mit.
 */

import MetadataObjectPropertyLink from '@site/src/components/MetadataObjectPropertyLink';

export default function func({objectType = 'TYPE'}) {
  return (
    <>
      <MetadataObjectPropertyLink name='publicIncludeFolders' /> - an array of folder paths used during the build and propagated upwards if this {objectType} is active and enabled
    </>
  )
}
