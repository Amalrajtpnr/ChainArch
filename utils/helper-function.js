import { ethers } from "ethers";
import { ABI } from "../constants/constants";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;


export const getSignedContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  return contract;
};
