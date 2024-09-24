
export interface ICrud<T> {
    insert(objeto: T): void
    selectAll(): Promise<T[]>
    select(id: string): Promise<T>
    update(objeto: T): void
    delete(id: string): void
}