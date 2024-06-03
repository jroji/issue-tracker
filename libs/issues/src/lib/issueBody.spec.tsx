import { render } from '@testing-library/react';
import { IssueBody } from '../lib/issueBody';

describe('IssueBody', () => {
    it('renders the user avatar', () => {
        const user = 'John Doe';
        const src = 'https://example.com/avatar.png';

        const { getByAltText } = render(<IssueBody user={user} src={src} />);
        const avatar = getByAltText(user) as HTMLImageElement;

        expect(avatar).toBeDefined();
        expect(avatar.src).toBe(src);
    });

    it('renders the user name', () => {
        const user = 'John Doe';
        const src = 'https://example.com/avatar.png';

        const { getByText } = render(<IssueBody user={user} src={src} />);
        const userName = getByText(user);

        expect(userName).toBeDefined();
    });

});