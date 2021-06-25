//todo: fix type of list with condition type

type ListType = {
  id: number
  name?: string
  firstName?: string
  lastName?: string
}

export const getNameFromId = (id: number, list: ListType[]):string => {
  const item = list.find(el=>el.id === id)
  return !item ? 'not found' :
    item.name ? item.name : `${item.lastName} ${item.firstName}`;
}