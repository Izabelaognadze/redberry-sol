export interface Blogs {
    data: Data[];
}

export interface Data {
    id:           number;
    title:        string;
    description:  string;
    image:        string;
    publish_date: Date;
    categories:   Category[];
    author:       string;
}

export interface Category {
    id:               number;
    name:             string;
    text_color:       string;
    background_color: string;
}
