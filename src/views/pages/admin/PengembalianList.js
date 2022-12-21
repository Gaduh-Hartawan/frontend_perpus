import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'

const PengembalianList = () => {
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Peminjaman</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Judul Buku</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Peminjaman</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Pengembalian</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell>Delete | Edit</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default PengembalianList
