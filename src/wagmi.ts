import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem/utils/chain/defineChain'
import {
  arbitrum,
  base,
  localhost,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';


export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    localhost,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base
  ],
  ssr: true,
});