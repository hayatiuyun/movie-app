import DetailPageComponent from '@/components/DetailPage'
import LayoutComponent from '@/components/Layout'
import React from 'react'

const DetailPage = ({ params }) => {

    return (
        <LayoutComponent dataTestId="layout-component">
            <DetailPageComponent params={params} dataTestId="detail-page-component" />
        </LayoutComponent>
    )
}

export default DetailPage