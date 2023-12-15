
import LayoutComponent from '@/components/Layout'
import SearchPage from '@/components/SearchPage'
import React from 'react'

const page = ({searchParams: params}) => {
  return (
    <LayoutComponent dataTestId='search-page'>
        <SearchPage params={params} />
    </LayoutComponent>
  )
}

export default page