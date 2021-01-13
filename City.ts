import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import PlayerCity from '@civ-clone/core-city/City';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';

export class City extends Action {
  #cityRegistry: CityRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    cityRegistry: CityRegistry = cityRegistryInstance
  ) {
    super(goodyHut, unit);

    this.#cityRegistry = cityRegistry;
  }

  perform(ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    const player = this.unit().player(),
      city = new PlayerCity(
        player,
        this.goodyHut().tile(),
        player.civilization().getCityName(true),
        ruleRegistry
      );

    this.#cityRegistry.register(city);
  }
}

export default City;
