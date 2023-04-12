import React from 'react'
import humps from 'humps'

export default function useQueryCollectionKey (query, collectionKey) {
  return React.useMemo(() => {
    if (collectionKey) {
      return collectionKey
    }

    const queryDef = query.definitions.find(d => d.operation === 'query')
    return humps.camelize(queryDef?.name?.value)
  }, [query, collectionKey])
}
