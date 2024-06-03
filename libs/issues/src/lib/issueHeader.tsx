import styles from './issues.module.css';

export interface IssueHeaderProps {
  title: string;
  status: string;
}

export function IssueHeader(props: IssueHeaderProps) {

    return <div className={styles['issue-header']}>
      <h3 className={styles['issue-header_title']} title={props.title}>{ props.title }</h3>
      <span className={`${styles['issue-status--' + props.status]} ${styles['issue-status']}`}> {props.status}</span>
    </div>
  }
  