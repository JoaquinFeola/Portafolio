import { PortfolioContext } from "./PortfolioContext"

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{}}>
        { children }
    </PortfolioContext.Provider>
  )
}
