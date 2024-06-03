import { useContext } from "react";
import { IssuesContext } from "../../context/issuesContext/issuesContext";
import { Status } from "../../models/issue";
import styles from './issueForm.module.css';

export function IssueForm() {
  const { addIssue } = useContext(IssuesContext);

  const createNewIssue = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    addIssue({
      title: formData.get('title') as string,
      status: Status.Open
    });
    form.reset();
  }

  return (
    <form className={styles['issue-form']} onSubmit={createNewIssue}>
      <input type="text" className={styles['issue-form_input']} name="title"></input>
      <button className={styles['issue-form_button']}>Create new issue</button>
    </form>
  );
} 