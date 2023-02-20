import { Contract, ethers } from "ethers";
import { ABI } from "../constants/constants";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const RpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

// export const getSignedContract = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum as any);
//   const signer = provider.getSigner();
//   const contract:Contract = new ethers.Contract(contractAddress!, ABI, signer);
//   return contract;
// };


export const getContract = async () => {
  // console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const provider = new ethers.providers.JsonRpcProvider(RpcUrl!);
  const contract: Contract = new ethers.Contract(
    `0x${contractAddress}`,
    ABI,
    provider
  );
  return { contract, provider };
};

export const getSignedContract = async () => {
  const signer = new ethers.providers.Web3Provider(
    window.ethereum as any
  ).getSigner();
  const contract: Contract = new ethers.Contract(
    `0x${contractAddress}`,
    ABI,
    signer
  );
  return { contract, signer };
};