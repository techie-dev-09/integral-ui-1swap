import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import { defineChain } from 'viem'
import Layout from "@/components/common/Layout"

import ETHLogo from '@/assets/tokens/ether.svg'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const bitfinity = defineChain({
  id: 355113,
  network: 'bitfinity-testnet',
  name: 'Bitfinity Testnet',
  nativeCurrency: { name: 'BTF', symbol: 'BTF', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Bitfinity Explorer',
      url: 'https://explorer.testnet.bitfinity.network/',
    },
    default: {
      name: 'Bitfinity Explorer',
      url: 'https://explorer.testnet.bitfinity.network/',
    },
  },
  testnet: true,
})

const chains = [bitfinity]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    355113: ETHLogo
  },
  defaultChain: bitfinity,
  themeVariables: {
    '--w3m-accent': '#2797ff'
  }
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
