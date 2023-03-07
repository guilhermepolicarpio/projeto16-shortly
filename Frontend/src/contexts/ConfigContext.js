import { createContext,useState } from 'react';

const ConfigContext = createContext();
export default ConfigContext;

export function ConfigProvider({ children }) {
  const [configData, setConfigData] = useState({value: "1", label: "Easy"})
  
  return (
    <ConfigContext.Provider value={{ configData, setConfigData }}>
      {children}
    </ConfigContext.Provider>
  );
}