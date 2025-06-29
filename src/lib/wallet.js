import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const projectId = '65c9670ea622762ea9c5052eefb0d9c9'

export const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  }
})

export const ethereumClient = new EthereumClient(wagmiConfig, [mainnet])
