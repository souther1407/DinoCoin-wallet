import React, { useState } from "react";
import Input from "../styledComponents/Input";
import Button from "../styledComponents/Button";
import Text from "../styledComponents/Text";
import styles from "../../styles/structComponents/sendTokens.module.css";
import {
  isBadAdress,
  isEmpty,
  isNegative,
  isNotNumber,
} from "../../utils/validators.js";
import { isElementEmpty } from "../../utils/verifiers.js";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { transfer } from "../../services/Contracts/DinoCoin.js";
import { parseTokens } from "../../utils/parse";
import Loading from "../styledComponents/Loading";
import useNotify from "../../hooks/useNotify";
const SendTokens = () => {
  let [form, setForm] = useState({
    to: "",
    amount: "0",
  });
  const [errors, setErrors] = useState("");
  const [isTxSending, setIsTxSending] = useState(false);
  const {} = useMoralis();
  const { runContractFunction: sendTokens, isLoading } = useWeb3Contract({
    ...transfer,
    params: form,
  });
  const notify = useNotify();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsTxSending(true);
    await sendTokens({
      onError: (err) => {
        console.log(err);
        setIsTxSending(false);
        notify("error", "error", err.message);
      },
      onSuccess: async (tx) => {
        await tx.wait(1);
        setIsTxSending(false);
        notify("success", "Enviados", "Tokens enviandos");
      },
    });
  };
  const handlerChange = (id, value) => {
    if (id === "amount") {
      value = parseTokens(value);
    }
    setForm((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          label={"¿A quién le envias?"}
          id={"to"}
          onChange={handlerChange}
          value={form.to}
          onErrors={(err) => {
            setErrors(err);
          }}
          placeholder={"0x0203..."}
          validators={[isEmpty, isBadAdress]}
        />
        <Input
          label={"¿Cuantó le envias?"}
          id={"amount"}
          onChange={handlerChange}
          onErrors={(err) => {
            setErrors(err);
          }}
          placeholder={"0.01"}
          validators={[isEmpty, isNotNumber, isNegative]}
        />
        <Button
          disabled={errors || isElementEmpty(form) || isLoading || isTxSending}
        >
          <Text color="inherit">
            {isTxSending ? <Loading size={"tiny"} /> : "Enviar"}
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default SendTokens;
