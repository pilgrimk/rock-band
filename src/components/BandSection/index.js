import React from 'react'
import BandInfoSection from '../BandInfoSection'
import { 
    bandMemberOne,
    bandMemberTwo,
    bandMemberThree
} from '../BandInfoSection/Data'
import {
    BandContainer,
    BandWrapper
} from './BandElements'

const Band = () => {
    return (
        <>
            <BandContainer id='the-band'>
                <BandWrapper>
                    <BandInfoSection {...bandMemberOne} />
                    <BandInfoSection {...bandMemberTwo} />
                    <BandInfoSection {...bandMemberThree} />
                </BandWrapper>
            </BandContainer>
        </>
    )
}

export default Band