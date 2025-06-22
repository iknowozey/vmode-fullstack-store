export interface IStore {
	id: string
	title: string
	description: string
}

export interface IStoreCreate {
	title: string
	description: string // <-- ДОБАВЬТЕ ЭТУ СТРОКУ
}

export interface IStoreEdit extends Omit<IStore, 'id'> {}
