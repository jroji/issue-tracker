import { useCallback, useContext } from "react";
import { IssuesContext } from "../../context/issuesContext/issuesContext";
import { IssueTrack } from "./issueTrack/issueTrack";
import { Issue, Status } from "../../models/issue";
import styles from './board.module.css';
import { DragContextProvider, DraggerDropArea } from "@react-monorepo/dragger";
import { IssueForm } from "../issueForm/issueForm";

export interface BoardProps {
  issues: Record<Status, Issue[]>;
}

export function Board({ issues }: BoardProps) {
  const { moveIssue, removeIssue } = useContext(IssuesContext);

  const handleDrop = useCallback((card: Issue, status: Status) => {
    if (card) {
      moveIssue(card, status);
    }
  }, []);

  const handleDelete = useCallback((card: Issue) => {
    if (card) {
      removeIssue(card);
    }
  }, []);

  return (
    <DragContextProvider<Issue>>
      <div className={styles['board_main']}>
        <IssueForm></IssueForm>

        <div className={styles['board_issue-tracks']}>
          {Object.entries(issues).map(([status, issues]) => {
            return <DraggerDropArea key={status} onCardDrop={(card) => handleDrop(card as Issue, status as Status)}>
              <IssueTrack
                status={status as Status}
                issues={issues}>
              </IssueTrack>
            </DraggerDropArea>
          })}
        </div>

        <DraggerDropArea onCardDrop={(card) => handleDelete(card as Issue)}>
          <span aria-label="remove" role="img" className={styles['board_bin']}>🗑️</span>
        </DraggerDropArea>
      </div>
    </DragContextProvider>
  );
}