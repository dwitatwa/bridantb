import type React from "react";

const sangatPuas = (
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubmitStatus("submitting");
  fetch("https://api.countapi.xyz/hit/bridantbprov/sangat-puas")
    .then((r) => r.json())
    .then(() => {
      setSubmitStatus("success");
    });
};

const cukupPuas = (
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubmitStatus("submitting");
  fetch("https://api.countapi.xyz/hit/bridantbprov/cukup-puas")
    .then((r) => r.json())
    .then((data) => {
      setSubmitStatus("success");
    });
};

const puas = (
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubmitStatus("submitting");
  fetch("https://api.countapi.xyz/hit/bridantbprov/puas")
    .then((r) => r.json())
    .then((data) => {
      setSubmitStatus("success");
    });
};

const kurangPuas = (
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubmitStatus("submitting");
  fetch("https://api.countapi.xyz/hit/bridantbprov/kurang-puas")
    .then((r) => r.json())
    .then((data) => {
      setSubmitStatus("success");
    });
};

const tidakPuas = (
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubmitStatus("submitting");
  fetch("https://api.countapi.xyz/hit/bridantbprov/tidak-puas")
    .then((r) => r.json())
    .then((data) => {
      setSubmitStatus("success");
    });
};

export default { sangatPuas, cukupPuas, puas, kurangPuas, tidakPuas };
