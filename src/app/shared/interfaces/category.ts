export interface CategoriRequest {
    titel: string;
    link: string;
    images: string;

}

export interface CategoriResponse extends CategoriRequest {
    id: number;
}