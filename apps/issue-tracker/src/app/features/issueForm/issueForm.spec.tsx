import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IssueForm } from './issueForm';
import { IssuesContext } from '../../context/issuesContext/issuesContext';

describe('IssueForm', () => {
  it('should render form fields', () => {
    render(<IssueForm />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should submit the form when the button is clicked', () => {
    const addIssue = jest.fn();
    render(
      <IssuesContext.Provider value={addIssue}>
        <IssueForm />
      </IssuesContext.Provider>
    );

    userEvent.type(screen.getByRole('textbox'), 'New Issue');
    userEvent.click(screen.getByRole('button'));

    expect(addIssue).toHaveBeenCalledWith({ title: 'New Issue', status: 'Open' });
});

  it('should clear the form after submission', () => {
    const addIssue = jest.fn();
    render(
      <IssuesContext.Provider value={addIssue}>
        <IssueForm />
      </IssuesContext.Provider>
    );

    const titleInput = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(titleInput, 'New Issue');
    expect(titleInput.value).not.toBe('');
    userEvent.click(screen.getByRole('button'));

    expect(titleInput.value).toBe('');
  });

});
