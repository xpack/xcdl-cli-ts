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

import MetadataPropertyLink from '@site/src/components/MetadataPropertyLink';

export default function func({objectType = 'TYPE'}) {
  return (
    <>
      <MetadataPropertyLink name='activeIf' /> - an array of boolean expressions to be evaluated; if all are true, the active state of this {objectType} remains true
    </>
  )
}
