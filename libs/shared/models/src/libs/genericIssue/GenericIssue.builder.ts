import { GenericIssue } from "./GenericIssue";
import { faker } from '@faker-js/faker';

/** Constants */
// TODO: cambiar nombre

const MAX_NUMBER_OF_USERS = 10000;

/**
 * Generate a user following the GenericIssue interface
 * @param name name of the user
 * @returns a user
 */
export const genericIssueBuilder = (name = 'unknown'): GenericIssue => {
    const id = Math.floor(Math.random() * MAX_NUMBER_OF_USERS)
    return {
        id,
        title: faker.company.buzzPhrase(),
        user: {
            name: faker.person.firstName(),
            avatar: faker.image.avatarGitHub(),
        }
    }    
}

/**
 * Generate a list of users
 * @param numberOfGenericIssues number of users to generate
 * @returns List of users
 */
export const genericIssuesListBuilder = (numberOfGenericIssues = 10): GenericIssue[] => {
    return Array.from({ length: numberOfGenericIssues }, (_, index) => genericIssueBuilder(`user-${index}`));
}