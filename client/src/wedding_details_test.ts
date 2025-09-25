import * as assert from 'assert'
import { GuestInfo, fromJson, toJson } from './WeddingDetails'

describe('GuestInfo', function () {
    it('toJson', function () {
        const guestsInfo1: GuestInfo = {
            guestName: "Richard", whichParty: "Molly",
            additional: false, addName: undefined, isFamily: true,
            dietRes: undefined, addGuestRes: undefined
        }
        assert.deepStrictEqual(toJson(guestsInfo1), [
            "Richard", "Molly", false, undefined, true, undefined, undefined
        ])
        const guestsInfo2: GuestInfo = {
            guestName: "Kevin", whichParty: "James",
            additional: true, addName: "Plus", isFamily: false,
            dietRes: "students", addGuestRes: "random"
        }
        assert.deepStrictEqual(toJson(guestsInfo2), [
            "Kevin", "James", true, "Plus", false, "students", "random"
        ])

    })

    it('fromJson', function () {
        const revGuestsInfo1: unknown = ["Richard", "Molly", false, undefined, true,
            undefined, undefined]
        assert.deepStrictEqual(fromJson(revGuestsInfo1), {
            guestName: "Richard",
            whichParty: "Molly", additional: false, addName: undefined, isFamily: true,
            dietRes: undefined, addGuestRes: undefined
        })
        const revGuestsInfo2: unknown = ["Kevin", "James", true, "PlusOne", false,
        "students", "random"]
         assert.deepStrictEqual(fromJson(revGuestsInfo2), {
        guestName: "Kevin",
        whichParty: "James", additional: true, addName: "PlusOne", isFamily: false,
        dietRes: "students", addGuestRes: "random"
    })
    })
})



