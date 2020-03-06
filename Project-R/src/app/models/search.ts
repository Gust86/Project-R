export interface SearchFilter {
    propertyName: string;
    value: string;
}

export interface SearchOrder {
    propertyName: string;
    directionOrder: boolean | string;
}

export interface SearchRequest {
    start: number;
    length: number;
    searchFilters: SearchFilter[];
    searchOrder: SearchOrder[];
}

export interface SearchResponce<T> {
    recordsTotal: number;
    recordsFiltered: number;
    data: T[];
}