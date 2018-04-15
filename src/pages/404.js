import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="container">
    <h3 className="s-title">Có lỗi xảy ra</h3>
    <div className="docs-note">
      <p>Hệ thống không tìm thấy tài nguyên bạn muốn truy xuất</p>
      <p>
        Bạn có thể về{' '}
        <mark>
          <Link to={'/'}>trang chủ</Link>
        </mark>{' '}
        để tiếp tục
      </p>
      <div className="divider" />
    </div>
  </div>
)

export default NotFoundPage
