import { PortfolioProvider } from './context/PortfolioProvider'
import { PortfolioRouter } from './router/PortfolioRouter';


export const PortfolioApp = () => {
  return (
    <PortfolioProvider>
        <PortfolioRouter />
    </PortfolioProvider>
  )
}
