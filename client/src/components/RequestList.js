import React, { useState, useEffect } from "react";
import axios from "axios";
import ActiveRequestsItem from "./ActiveRequestsItem";
import "./RequestList.scss";

export default function(props) {
  const [state, setState] = useState([]);
  console.log("props", props.view);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/requests`, {
        params: { view: props.view }
      })
      .then(response => {
        console.log("this is response.data", response.data);
        return setState(response.data);
      });
    console.log(state);
  }, [props.view]);

  const list = state.map(request => {
    return (
      <ActiveRequestsItem
        key={request.id}
        category={request.category}
        service={request.service}
        status={request.status}
        availableStartTime={request.availability_start_time}
        availableEndTime={request.availability_end_time}
        appointmentTime={request.appointment_start_time}
        business_phone_number={request.business_phone_number}
        business_address={request.business_address}
        business_name={request.business_name}
        request_max_price={request.request_max_price}
        transaction_price={request.transaction_price}
        requestServiceName={request.request_service_name}
      />
    );
  });

  return <ul className="request-list">{list}</ul>;
}
