export interface IPost {
    id?: string;
    title?: string;
    content?: string;
    lat?: string;
    long?: string;
    image_url?: string;
    error?: boolean;
    errorMessage?: string;
}

export interface IReducerCreate {
    field: string;
    value: string;
}

export interface IFormPost {
    post: IPost;
    disabled: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}