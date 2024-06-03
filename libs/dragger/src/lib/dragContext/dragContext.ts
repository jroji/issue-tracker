import { createContext } from 'react';
import { GenericIssue } from '@react-monorepo/shared-models';

export interface DragContextType {
	selectedCard?: GenericIssue;
	activeElement?: Element;
	selectCard: (todo: any, ref: Element) => void;
	dropCard: () => void;
}

export const initialState: DragContextType = {
	selectedCard: undefined,
	selectCard: () => { console.log('undefined dropCard method called'); },
	dropCard: () => { console.log('undefined dropCard method called'); },
};

export const DragContext = createContext(initialState);