export function getHouseAction (name) {
  return {
    type: 'GET_LISTINGS',
    name: name.data
  }
}

export function singleListingAction(name) {
	return {
		type: 'SINGLE_LISTING',
		name: name
	}
}
