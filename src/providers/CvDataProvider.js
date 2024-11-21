import React, { useState } from 'react';
import { cvData as initialCvData } from '../assets/data/cvData';

export const CvContext = React.createContext({
  cvData: [],
  handleInputChange: () => {},
});

const CvProvider = ({ children }) => {
  const [cvData, setCvData] = useState(initialCvData);

  const handleInputChange = (e) => {
    setCvData({
      ...cvData,
      [e.target.name]: e.target.value
      }
    );
  }

  return (
    <CvContext.Provider value={{
      cvData,
      handleInputChange
    }}>
      {children}
    </CvContext.Provider>
  );
}

export default CvProvider
