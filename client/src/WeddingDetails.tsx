export type GuestInfo = {
    guestName: string, whichParty: "Molly" | "James",
    additional: boolean | undefined, addName: string | undefined,
    isFamily: boolean, dietRes: string | undefined, addGuestRes: string | undefined
}

/** 
 * Converts a JSON description to the GuestInfo it describes. 
 * @param data in JSON form to try to parse as GuestInfo
 * @returns a GuestInfo object parsed from given data
 * @throws an error if the data isn't an array
 */
export const fromJson = (data: unknown): GuestInfo => {
    if (Array.isArray(data)) {
        const returnGuestInfo: GuestInfo = {
            guestName: data[0],
            whichParty: data[1],
            additional: (data[2] === null) ? undefined : data[2],
            addName: (data[3] === null) ? undefined : data[3],
            isFamily: data[4],
            dietRes: (data[5] === null) ? undefined : data[5],
            addGuestRes: (data[6] === null) ? undefined : data[6],
        }
        return returnGuestInfo
    } else {
        throw new Error("Data is not of the correct type");
    }
}
/** 
 * Creates a JSON representation of the given guest information
 * @param guest information to convert to JSON
 * @returns JSON representing the given guest information
 */
export const toJson = (guest: GuestInfo): unknown => {
    return [guest.guestName, guest.whichParty, guest.additional, guest.addName,
    guest.isFamily, guest.dietRes, guest.addGuestRes]
};

