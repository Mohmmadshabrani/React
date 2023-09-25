import React from "react";
import Employinfo from "../newComponent/EmployInfo"
import CustomerInfo from "../newComponent/CustomerInfo"
import withLoading from "../newComponent/withLoading"

const EmployWithLoading = withLoading(Employinfo);

const CustomerWithLoading = withLoading(CustomerInfo);

export default function HOCs(){
  return(
    <div>
      <EmployWithLoading name="ahmed"/>

      <CustomerWithLoading/>
    </div>
  )
}