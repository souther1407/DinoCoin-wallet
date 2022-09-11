import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";

export const useGetContractData = (contract, events = []) => {
  const [data, setData] = useState("");
  const { runContractFunction, isFetching, isLoading } =
    useWeb3Contract(contract);
  const { isWeb3Enabled, web3 } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) {
      const contractConnection = new ethers.Contract(
        contract.contractAddress,
        contract.abi,
        web3.getSigner()
      );
      for (let event of events) {
        contractConnection.on(event, () => {
          runContractFunction().then((data) => setData(data));
        });
      }

      runContractFunction().then((data) => setData(data));
    }
  }, [isWeb3Enabled]);

  return { data, isFetching, isLoading };
};
