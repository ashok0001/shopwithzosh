import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePayment } from '../../../Redux/Customers/Payment/Action';

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus,setPaymentStatus]=useState("");

  const jwt =localStorage.getItem("jwt")
  const dispatch=useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
    
  }, []);

  useEffect(()=>{
    if(paymentId && referenceId && paymentStatus==="paid"){
      const data={orderId:referenceId,paymentId,jwt}
    dispatch(updatePayment(data))
    }
  },[referenceId,paymentId])


  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess