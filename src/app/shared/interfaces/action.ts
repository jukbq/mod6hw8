export interface ActionRequest {
    data: any;
    name: string;
    title: string;
    description: string;
    images: string;

}

export interface ActionResponse extends ActionRequest {
    id: number;

}