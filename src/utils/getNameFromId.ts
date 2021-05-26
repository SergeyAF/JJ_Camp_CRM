interface IGetNameFromID {
  id: number
  name: string
}

export const getNameFromId = (id: number, list:Array<IGetNameFromID>):string => {
  const item = list.find(el=>el.id === id)
  if (!item) {
    return 'not found'
  }
  return item.name
}