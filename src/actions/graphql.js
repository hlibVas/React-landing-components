import * as actionTypes from 'constants/actions'

export function mutate (payload) {
  return {
    type: actionTypes.GRAPHQL_MUTATION_REQUEST,
    payload
  }
}
