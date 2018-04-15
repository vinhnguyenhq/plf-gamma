import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="container">
    <h6 className="s-title" />
    <p>Hệ thống không tìm thấy tài nguyên bạn muốn truy xuất</p>
    <p>Bạn có thể về trang chủ để tiếp tục</p>
    <hr />
    <Link to={'/'}>Trang chủ</Link>
  </div>
)

export default NotFoundPage
