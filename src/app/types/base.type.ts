export type BaseReturnType<T = unknown> = [null, T] | [Error]

export type BasePromiseType<T> = Promise<BaseReturnType<T>>
