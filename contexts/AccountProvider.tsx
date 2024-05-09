import { ReactNode, createContext, useContext } from 'react';

type AccountData = {};

type AccountProviderProps = {
	children: ReactNode;
};

const AccountContext = createContext<AccountData | null>(null);

export function useAccount() {
	return useContext(AccountContext);
}

export function AccountProvider({ children }: AccountProviderProps) {
	return (
		<AccountContext.Provider value={true}>{children}</AccountContext.Provider>
	);
}
