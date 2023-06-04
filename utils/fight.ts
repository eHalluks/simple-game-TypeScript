import {WarriorRecord} from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
        log: string[],
        winner: WarriorRecord,
    } => {
    const log: string[] = [];

    const warrior1Obj = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
        warrior: warrior1,
    }

    const warrior2Obj = {
        hp: warrior2.stamina * 10,
        dp: warrior2.defence,
        warrior: warrior2,
    }

    let attacker= warrior1Obj;
    let defender= warrior2Obj;

    do {

         const attackerStrength = attacker.warrior.power;

         log.push(`${attacker.warrior.name} zaatakuje ${defender.warrior.name} z siłą ${attackerStrength}`);


         if(defender.dp + defender.warrior.agility > attackerStrength){

             log.push(`${defender.warrior.name} broni się przed ${attacker.warrior.name}`)

             defender.dp -= attackerStrength

             if(defender.dp < 0) {

                 log.push(`${attacker.warrior.name} przełamał obronę ${defender.warrior.name} zadając mu ${-defender.hp} obrażeń`)

                 defender.hp += defender.dp;
             }

         }else{

             log.push(`${attacker.warrior.name} zadał ${attackerStrength} obrażeń ${defender.warrior.name}`)

             defender.hp -= attackerStrength;
         }


        [defender, attacker] = [attacker, defender];

    } while (defender.hp > 0);

    const winner = defender.warrior;
    log.push(`Walkę zwyciężył: ${winner.name}`)

    return {
        log,
        winner,
    };
}