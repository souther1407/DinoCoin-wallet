import React, { useEffect } from "react";
import styles from "../../styles/structComponents/fundsPanel.module.css";
import Text from "../styledComponents/Text";
import { GiDinosaurRex } from "react-icons/gi";
import Panel from "../styledComponents/Panel";
import { useMoralis } from "react-moralis";
import { balanceOf, symbol } from "../../services/Contracts/DinoCoin.js";
import { useGetContractData } from "../../hooks/useGetContractData.js";
import { ethers } from "ethers";
import { useEventListener } from "../../hooks/useEventsListener.js";

const FundsPanel = () => {
  const { account, web3 } = useMoralis();
  const { data: symbolData } = useGetContractData(symbol);
  const data = useEventListener(balanceOf, web3.getSigner(account), [
    { name: "Transfer", filters: [account] },
  ]);
  const { data: balance } = useGetContractData(
    {
      ...balanceOf,
      params: { account },
    },
    [account, data]
  );
  return (
    <Panel ajusted>
      <Text>Tus Fondos</Text>

      <Text size={"medium"} bold>
        <GiDinosaurRex /> {balance && ethers.utils.formatEther(balance)}{" "}
        {symbolData}{" "}
      </Text>
    </Panel>
  );
};

export default FundsPanel;
