import React from 'react'

const StoreDetails = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">{props.item.station_name}</div>
        <div className="card-subtitle text-gray">{props.item.partner_type}</div>
      </div>
      <div className="card-body">
        <div className="card-subtitle text-gray">
          {props.item.complete_address}
        </div>
      </div>
      <div className="card-footer">
        <a
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${
            props.item.complete_address
          }`}
        >
          <i className="icon icon-2x icon-location" />
        </a>
      </div>
    </div>
  )
}

export default StoreDetails
