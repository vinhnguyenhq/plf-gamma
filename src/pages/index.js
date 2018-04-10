import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => {
  return (
    <div>
      <p>
        Chào mừng bạn đến với cổng thông tin chia sẽ danh sách cửa hàng của
        Lazada Express
      </p>
      <ul>
        <li>
          <Link to="/thong-tin-chung">Thông tin chung</Link>
        </li>
        <li>
          <Link to="/sai-gon/">Hồ Chí Minh</Link>
        </li>
        <li>
          <Link to="/ha-noi/">Hà Nội</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage
