export interface GenericIssue<T = any>{
    id: number;
    title: string;
    user: {
        name: string;
        avatar: string;
    }
    status?: T;
}