import React from 'react'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
import { css } from '@emotion/react'

const loaderCSS = css`
    margin-top: 25px;
    margin-bottom: 25px;
`

export const SpinnersLoaders = () => {
  return (
    <div className='spinners'>
        <BounceLoader css={loaderCSS} loading size={24} color='red'/>
        <BarLoader loading size={48} color='red'/>
        <BeatLoader loading size={72}/>
    </div>
  )
}