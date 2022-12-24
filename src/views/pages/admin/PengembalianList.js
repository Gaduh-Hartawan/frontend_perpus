import React, { useState, useEffect } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'

const PengembalianList = () => {
  const [returns, setReturns] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/return').then((res) => {
      setReturns(res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Pengembalian</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Judul Buku</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Peminjaman</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Pengembalian</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {returns.map((item, index) => (
                <CTableRow key={index + 1}>
                  <CTableDataCell>{item.nim}</CTableDataCell>
                  <CTableDataCell>{item.nama_anggota}</CTableDataCell>
                  <CTableDataCell>{item.judul_buku}</CTableDataCell>
                  <CTableDataCell>{item.tgl_pinjam}</CTableDataCell>
                  <CTableDataCell>{item.tgl_kembali}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="success">{item.status_pinjam}</CBadge>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default PengembalianList
