import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import { Link } from 'react-router-dom'

const CategoryList = () => {
  const API_URL = 'http://localhost:5000'
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get(API_URL + '/category').then((res) => setCategories(res.data))
  })
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Buku</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/base/cards`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Kategori</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {categories.map((item) => (
                <CTableRow key={item.id_kategori}>
                  <CTableDataCell>{item.nama_kategori}</CTableDataCell>
                  <CTableDataCell>Delete | Edit</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default CategoryList
