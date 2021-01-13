import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
export declare class City extends Action {
  #private;
  constructor(goodyHut: GoodyHut, unit: Unit, cityRegistry?: CityRegistry);
  perform(ruleRegistry?: RuleRegistry): void;
}
export default City;
