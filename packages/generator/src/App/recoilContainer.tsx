import React, { forwardRef } from 'react'
import { RecoilRoot } from 'recoil'
import Generator from './index'
import type { GeneratorType, GeneratorRef } from './types'

const RecoilContainer = forwardRef<GeneratorRef, GeneratorType>(
  (props, ref) => {
    return (
      <RecoilRoot>
        <div className="drip-form-generator">
          <Generator ref={ref} {...props} />
        </div>
      </RecoilRoot>
    )
  }
)

RecoilContainer.displayName = 'GeneratorRecoilRoot'
export default React.memo(RecoilContainer)
