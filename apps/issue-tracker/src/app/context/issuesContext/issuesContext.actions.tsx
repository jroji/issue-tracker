import { Issue, Status } from "../../models/issue";

export enum issuesContextActions {
  FETCH_ISSUES = "FETCH_ISSUES",
  ADD_ISSUE = "ADD_ISSUE",
  REMOVE_ISSUE = "REMOVE_ISSUE",
  MOVE_ISSUE = "MOVE_ISSUE",
 }
 
 export interface IssuesContextFetchIssuesAction {
  type: issuesContextActions.FETCH_ISSUES;
  payload: { issues: Record<Status, Issue[]> };
 }
 
 export interface IssuesContextAddIssueAction {
  type: issuesContextActions.ADD_ISSUE;
  payload: { issue: Issue };
 }
 
 export interface IssuesContextRemoveIssueAction {
  type: issuesContextActions.REMOVE_ISSUE;
  payload: { issue: Issue };
 }
 
 export interface IssuesContextMoveIssueAction {
  type: issuesContextActions.MOVE_ISSUE;
  payload: { card: Issue, status: Status };
 }
 
 export type IssuesContextActionsType =
  IssuesContextFetchIssuesAction |
  IssuesContextAddIssueAction |
  IssuesContextRemoveIssueAction |
  IssuesContextMoveIssueAction;
 