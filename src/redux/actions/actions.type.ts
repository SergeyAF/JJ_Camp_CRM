// --- Actions typeset ---
import * as actions from './actions'

type InferActionType<T> = T extends {[key: string]: infer U} ? U : never

export type ActionsType = ReturnType<InferActionType<typeof actions>>