onEvent('recipes', e => {
  e.custom({
    type: 'immersivepetroleum:hydrotreater',
    time: 1,
    energy: 512,
    result: { fluid: 'immersivepetroleum:diesel', amount: 7 },
    input: { tag: 'forge:diesel_sulfur', amount: 7 },
    secondary_input: { tag: 'minecraft:water', amount: 7 },
    secondary_result: { item: 'thermal:sulfur_dust', chance: '0.02' }
  }).id('kubejs:immersivepetroleum/hydrotreater/diesel')
  e.custom({
    type: 'immersivepetroleum:distillation',
    byproducts: [
      { item: 'thermal:bitumen', chance: 0.07 }
    ],
    results: [
      { fluid: 'immersivepetroleum:lubricant', amount: 9 },
      { fluid: 'immersivepetroleum:diesel_sulfur', amount: 14 },
      { fluid: 'immersivepetroleum:gasoline', amount: 39 }
    ],
    input: { tag: 'forge:crude_oil', amount: 75 },
    time: 1,
    energy: 2048
  }).id('kubejs:immersivepetroleum/distillation/oilcracking')

  e.shaped('8x engineersdecor:slag_brick_block', ['BBB', 'BSB', 'BBB'], {
    B: '#engineersdecor:brick_ingots',
    S: '#forge:slag'
  }).id('kubejs:engineersdecor/slag_brick_block')
  e.shaped('12x immersiveengineering:concrete', ['SBS', 'GUG', 'SBS'], {
    B: '#forge:clay',
    S: '#forge:slag',
    G: '#forge:gravel',
    U: ['minecraft:water_bucket', 'mahoutsukai:murky_bucket']
  }).id('kubejs:immersiveengineering/concrete')

  modifyShaped(e, 'engineerstools:crushing_hammer', 1, ['RI ', 'BS ', '  S'], {
    R: '#forge:string',
    I: '#forge:ingots/iron',
    B: '#forge:storage_blocks/iron',
    S: '#forge:rods/wooden'
  })

  removeRecipeByID(e, [
    /^immersiveengineering:crafting\/ingot_.*_to_storage_.*/,
    'immersivepetroleum:hydrotreater/sulfur_recovery',
    'immersiveengineering:crusher/nether_wart',
    'immersiveengineering:crafting/concrete2',
    'engineerstools:crushing/aluminium_grit_crushing_recipe',
    'engineersdecor:dependent/slag_brick_block_recipe',
    'immersivepetroleum:distillationtower/oilcracking'
  ])
})
