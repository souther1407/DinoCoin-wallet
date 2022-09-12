import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract, useMoralisWeb3Api } from "react-moralis";
import { ethers } from "ethers";

export const useGetContractData = (contract, dependencies = []) => {
  const [data, setData] = useState("");
  const { isWeb3Enabled, web3, account, Moralis } = useMoralis();
  const { runContractFunction, isFetching, isLoading } = useWeb3Contract({
    ...contract,
  });
  useEffect(() => {
    if (isWeb3Enabled) {
      runContractFunction().then((data) => setData(data));
    }
  }, [isWeb3Enabled, ...dependencies]);

  return { data, isFetching, isLoading };
};
