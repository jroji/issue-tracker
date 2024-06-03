import { IssueBody, IssueHeader } from "@react-monorepo/issues";
import { Card } from "@react-monorepo/shared-ui";
import styles from './issueTrack.module.css';
import { Issue, Status } from "../../../models/issue";
import { Dragger } from "@react-monorepo/dragger";

export interface IssueTrackProps {
    issues: Issue[],
    status: Status,
}

export function IssueTrack({ status, issues = [] }: IssueTrackProps) {
    return (
        <div className={styles['issue-track_list']}>
            <h2 className={styles['issue-track_status']}>{ status }</h2>
            {issues.map(item => <Dragger key={item.id} value={item}>
                <Card
                    titleSection={<IssueHeader title={item.title} status={status}/>}
                    bodySection={<IssueBody user={item.user?.name} src={item.user?.avatar}/>}>
                </Card>
            </Dragger>)}
        </div>
    );
} 