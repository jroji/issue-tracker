import { GenericIssue } from "@react-monorepo/shared-models";

/**
 * Add your new status here in order to see them on the sceen
 */
export enum Status {
  Open = "open",
  OnGoing = "ongoing",
  Blocked = "blocked",
  Done = "done"
};

export const statusList = Object.values(Status).reduce((acc: Record<Status, unknown[]>, status: Status) => {
  acc[status] = [];
  return acc;
}, {} as Record<Status, unknown[]>);


export type Issue = GenericIssue<Status>;