import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
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
  CButton,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  const API_URL = 'http://localhost:5000'
  const [categories, setCategories] = useState([])

  const getCategory = () => {
    axios.get(API_URL + '/category').then((res) => setCategories(res.data))
  }

  useEffect(() => {
    getCategory()
  }, [])

  const deleteData = (id) => {
    axios.delete(`${API_URL}/category/${id}`).then(getCategory())
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Buku</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/admin/addcategory`}>
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
                  <CTableDataCell>
                    <CButton onClick={() => deleteData(item.id_kategori)} color="danger">
                      Delete
                    </CButton>
                    <Link to={`/admin/editcategory/${item.id_kategori}`}>
                      <CButton className="btn btn-success">Update</CButton>
                    </Link>
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

export default CategoryList
