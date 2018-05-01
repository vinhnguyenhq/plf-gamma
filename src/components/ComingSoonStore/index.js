import React from 'react'
import Link from 'gatsby-link'
import StoreDetails from '../StoreDetails'
import Countdown from 'react-countdown-now'

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span />
  } else {
    if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      return <span />
    } else {
      return (
        <div className="district opening-time">
          <em className="float-right">
            <span
            >{`${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`}</span>
          </em>
        </div>
      )
    }
  }
}

const District = props => {
  return (
    <div className="container">
      <h3 className="s-title district-name">{props.city}</h3>
      <div className="docs-note">
        <p>
          {`Số cửa hàng sắp đi vào hoạt động `}{' '}
          <span className="label label-secondary label-rounded">
            {props.nodes.length}
          </span>
        </p>
        <div className="columns">
          {props.nodes.map(item => {
            return (
              <div key={item.node.plf_id} className="column col-6 col-xs-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title h5">
                      {item.node.station_name}
                    </div>
                    <div className="card-subtitle text-gray">
                      {item.node.partner_type}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-subtitle text-gray">
                      {item.node.complete_address}
                    </div>
                  </div>
                  <div className="card-footer">
                    <a
                      target="_blank"
                      href={`https://www.google.com/maps/search/?api=1&query=${
                        item.node.complete_address
                      }`}
                    >
                      <i className="icon icon-2x icon-location" />
                    </a>
                    <Countdown
                      date={item.node.planned_launch_date}
                      renderer={renderer}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="divider" />
      </div>
    </div>
  )
}

export default District
