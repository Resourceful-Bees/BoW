onEvent('recipes', e => {
  recipes.custom.crushing(e, 'minecraft:bricks', '4x minecraft:brick')
  recipes.custom.crushing(e, 'minecraft:magma_block', '4x minecraft:magma_cream')

  e.shapeless('astralsorcery:marble_raw', 'quark:marble').id('kubejs:marble/astral_to_quark')
  e.shapeless('quark:marble', 'projectred-exploration:marble').id('kubejs:marble/quark_to_projectred')
  e.shapeless('projectred-exploration:marble', 'chisel:marble/raw').id('kubejs:marble/projectred_to_chisel')
  e.shapeless('chisel:marble/raw', 'astralsorcery:marble_raw').id('kubejs:marble/chisel_to_astral')

  e.shapeless('create:limestone', 'create:weathered_limestone').id('kubejs:limestone/create_to_create')
  e.shapeless('create:weathered_limestone', 'quark:limestone').id('kubejs:limestone/create_to_quark')
  e.shapeless('quark:limestone', 'chisel:limestone/raw').id('kubejs:limestone/quark_to_chisel')
  e.shapeless('chisel:limestone/raw', 'create:limestone').id('kubejs:limestone/chisel_to_create')

  removeRecipeByID(e, [
    'eidolon:lead_block',
    'eidolon:smelt_stone_brick',
    'platforms:wrench_alt',
    'silentgear:iron_rod',
    'translocators:diamond_nugget'
  ])

  removeRecipeByOutput(e, [
    'naturesaura:chunk_loader',
    'titanium:iron_gear',
    'titanium:gold_gear',
    'titanium:diamond_gear'
  ])
})
