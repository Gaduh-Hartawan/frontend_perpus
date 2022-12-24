import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        Copyright.
        <span className="ms-1">&copy; 2022 Sistem Perpustakaan</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
