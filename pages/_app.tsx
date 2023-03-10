import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from 'next/app'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import AppContextProvider from '../contexts/AppContext';

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Automation App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <AppContextProvider>
        <Component {...pageProps} />
        </AppContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
