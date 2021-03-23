function encounterMultiplier(totalMons) {
    if (totalMons >= 15)
        return 4
    if (totalMons >= 11)
        return 3
    if (totalMons >= 7)
        return 2.5
    if (totalMons >= 3)
        return 2
    if (totalMons == 2)
        return 1.5
    if (totalMons == 1)
        return 1
    return 0
}

export default {
    getEncounterMultiplier(totalMons) {
        return encounterMultiplier(totalMons)
    }
}