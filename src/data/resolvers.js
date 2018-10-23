import { find, propEq } from 'ramda'
import artistData from './artists.json'

const resolvers = {

  Query: {
    artists: () => artistData,
    artistByPath: (_, args) =>
      find(propEq('path', args.path), artistData)
    ,
  },
}

export default resolvers
