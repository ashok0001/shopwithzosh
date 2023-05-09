import React from "react";

const AddressCard = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold py-4">Delivery Adress</h1>
      <div className="space-y-3">
        <p className="font-semibold">Ashok Zarmariya</p>

        <p>
          Mafatiya para, Dudh ni dery pase, at-chuda Mafatiya para, dudhani dery
          pase, raval vali seri ma At-chuda, Dudhani dery pase, raval vali seri
          ma Surendranagar District - 363410, Gujarat
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>7048552454, 9327574345</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
