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
      <MetadataObjectPropertyLink name='childrenGeneratedFile' /> - the file path of the header, relative to the build folder, where the child nodes will generate a definition (if missing, this is inherited from the parent node)
    </>
  )
}
