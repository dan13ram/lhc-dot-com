import { createContext, useState, useContext, useEffect } from 'react';

type LayoutContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const LayoutContext = createContext<LayoutContextType>({
  title: '',
  setTitle: () => undefined,
});

export const LayoutContextProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('');

  return (
    <LayoutContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => useContext(LayoutContext);

export const useTitle = (title: string) => {
  const { setTitle } = useLayout();
  useEffect(() => {
    setTitle(title);
  }, [title]);
};
