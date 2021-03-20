function speed(val) {
    let burrow = parseInt(val["burrow"]); //escavação
    let climb = parseInt(val["climb"]); //escalar
    let fly = parseInt(val["fly"]);
    let swim = parseInt(val["swim"]);
    let walk = parseInt(val["walk"]);

    let deslocamento = []

    if (!isNaN(walk)) {
        deslocamento.push({ descricao: '', valor: feetToMeters(walk) })
    }

    if (!isNaN(burrow)) {
        deslocamento.push({ descricao: 'escavação', valor: feetToMeters(burrow) });
    }

    if (!isNaN(climb)) {
        deslocamento.push({ descricao: 'escalar', valor: feetToMeters(climb) });
    }

    if (!isNaN(fly)) {
        deslocamento.push({ descricao: 'vôo', valor: feetToMeters(fly) });
    }

    if (!isNaN(swim)) {
        deslocamento.push({ descricao: 'nadar', valor: feetToMeters(swim) });
    }

    return deslocamento
}

function attribute(val) {
    switch (val) {
        case "saving-throw-str":
            return 'FOR'
        case "saving-throw-dex":
            return 'DES'
        case "saving-throw-con":
            return 'CON'
        case "saving-throw-int":
            return 'INT'
        case "saving-throw-wis":
            return 'SAB'
        case "saving-throw-cha":
            return 'CAR'
    }
}

function skill(val) {
    switch (val) {
        case 'skill-acrobatics':
            return 'Acrobacia'
        case 'skill-animal-handling':
            return 'Adestrar Animais'
        case 'skill-arcana':
            return 'Arcanismo'
        case 'skill-athletics':
            return 'Atletismo'
        case 'skill-deception':
            return 'Enganação'
        case 'skill-history':
            return 'História'
        case 'skill-insight':
            return 'Intuição'
        case 'skill-intimidation':
            return 'Intimidação'
        case 'skill-investigation':
            return 'Investigação'
        case 'skill-medicine':
            return 'Medicina'
        case 'skill-nature':
            return 'Natureza'
        case 'skill-perception':
            return 'Percepção'
        case 'skill-performance':
            return 'Atuação'
        case 'skill-persuasion':
            return 'Persuasão'
        case 'skill-religion':
            return 'Religião'
        case 'skill-sleight-of-hand':
            return 'Prestidigitação'
        case 'skill-stealth':
            return 'Furtividade'
        case 'skill-survival':
            return 'Sobrevivência'
    }
}

function senses(val) {
    let perception = parseInt(val["passive_perception"]); //escavação
    let darkvision = parseInt(val["darkvision"]); //escalar
    let blindsight = parseInt(val["blindsight"]);
    let tremorsense = parseInt(val["tremorsense"]);
    let truesight = parseInt(val["truesight"]);

    let sentidos = []

    if (!isNaN(perception)) {
        sentidos.push({ descricao: 'Percepção passiva', valor: perception.toString() })
    }

    if (!isNaN(darkvision)) {
        sentidos.push({ descricao: 'visão no escuro', valor: `${feetToMeters(darkvision)} m` });
    }

    if (!isNaN(blindsight)) {
        sentidos.push({ descricao: 'percepção às cegas', valor: `${feetToMeters(blindsight)} m` });
    }

    if (!isNaN(tremorsense)) {
        sentidos.push({ descricao: 'sentido sísmico', valor: `${feetToMeters(tremorsense)} m` });
    }

    if (!isNaN(truesight)) {
        sentidos.push({ descricao: 'visão verdadeira', valor: `${feetToMeters(truesight)} m` });
    }

    return sentidos
}

function condition(val) {
    switch (val) {
        case 'blinded':
            return 'cego'
        case 'charmed':
            return 'enfeitiçado'
        case 'deafened':
            return 'surdo'
        case 'frightened':
            return 'amedontrado'
        case 'grappled':
            return 'agarrado'
        case 'incapacitated':
            return 'incapacitado'
        case 'invisible':
            return 'invisível'
        case 'paralyzed':
            return 'paralizado'
        case 'petrified':
            return 'petrificado'
        case 'poisoned':
            return 'envenenado'
        case 'prone':
            return 'caído'
        case 'restrained':
            return 'impedido'
        case 'stunned':
            return 'atordoado'
        case 'unconscious':
            return 'inconsciente'
        case 'exhaustion':
            return 'exausto'
    }

}
//Conversores
function feetToMeters(ftval) {
    if (isNaN(ftval)) {
        return 0
    }
    let fator = 3.281;
    let mval = ftval / fator;
    return Math.floor(mval);
}

export default {
    translateAttribute(val) {
        return attribute(val)
    },
    translateSkill(val) {
        return skill(val)
    },
    translateSpeed(val) {
        return speed(val)
    },
    translateSenses(val) {
        return senses(val)
    },
    translateCondition(val){
        return condition(val)
    }
}