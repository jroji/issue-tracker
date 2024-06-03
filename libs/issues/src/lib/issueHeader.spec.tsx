import { render, screen } from '@testing-library/react';
import { IssueHeader } from './issueHeader';

describe('IssueHeader', () => {
    test('renders the title', () => {
        const title = 'Sample Issue';
        const status = 'Open';

        render(<IssueHeader title={title} status={status} />);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeDefined();
    });

    test('renders the status', () => {
        const title = 'Sample Issue';
        const status = 'open';

        render(<IssueHeader title={title} status={status} />);

        const statusElement = screen.getByText(status);
        expect(statusElement).toBeDefined();
    });

    test('renders the correct CSS class', () => {
        const title = 'Sample Issue';
        const status = 'open';

        render(<IssueHeader title={title} status={status} />);

        const headerElement = screen.getByText(status);
        expect(headerElement.className).toMatch(/issue-status--open/);
    });

});