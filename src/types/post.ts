export interface IPostShow {
    id: string;
    title: string;
    content: string;
}

export interface IPost {
    id?: string;
    title: string;
    content: string;
    lat: string;
    long: string;
    image_url: string;
}

export interface IReducerCreate {
    field: string;
    value: string;
}

export interface IFormPost {
    title: string;
    content: string;
    lat: string;
    long: string;
    image_url: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}