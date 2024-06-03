import { createContext } from 'react';
import { Issue, Status, statusList } from '../../models/issue';

export type IssuesContextType = {
	fetchIssues: () => void;
	addIssue: (issue: Partial<Issue>) => void;
	removeIssue: (issue: Issue) => void;
	moveIssue: (issue: Issue, status: Status) => void;
} & Partial<Record<Status, Issue[]>>

export const initialState: IssuesContextType = {
	fetchIssues: () => {
		// Placeholder implementation
	},
	addIssue: (issue: Partial<Issue>) => {
		// Placeholder implementation
	},
	removeIssue: (issue: Issue) => {
		// Placeholder implementation
	},
	moveIssue: (issue: Issue, status: Status) => {
		// Placeholder implementation
	},
};

export const IssuesContext = createContext({
	...initialState,
	...statusList,
});