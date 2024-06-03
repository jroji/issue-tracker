import { Avatar } from "@react-monorepo/shared-ui";
import styles from './issues.module.css';

export function IssueBody(props: { user: string; src: string}) {
    return <div className={styles['issue-body']}>
      <Avatar src={props.src} alt={props.user}></Avatar>
    </div>
  }
  