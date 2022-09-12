import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const useEventListener = (contractParams, account, events = []) => {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const contract = new ethers.Contract(
      contractParams.contractAddress,
      contractParams.abi,
      account
    );
    for (let event of events) {
      contract.filters[event.name](...event.filters);
      contract.on(event.name, (...data) => {
        setEventData({ ...data });
      });
    }
  }, []);

  useEffect(() => {
    console.log(account);
  }, [account]);
  return eventData;
};
