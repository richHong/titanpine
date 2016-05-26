export function getHouseAction (name) {
	console.log("You have been Successful", name.data)
    return {
        type: 'GET_LISTINGS',
        name: name.data
    }
}
