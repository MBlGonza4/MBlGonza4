// Quita la capacidad de comer TODA la comida vanilla
// (siguen usándose en recetas de Farmer’s Delight)

const VANILLA_FOOD = [
  'minecraft:apple',
  'minecraft:golden_apple',
  'minecraft:enchanted_golden_apple',
  'minecraft:melon_slice',
  'minecraft:sweet_berries',
  'minecraft:glow_berries',
  'minecraft:chorus_fruit',
  'minecraft:carrot',
  'minecraft:golden_carrot',
  'minecraft:potato',
  'minecraft:baked_potato',
  'minecraft:poisonous_potato',
  'minecraft:beetroot',
  'minecraft:dried_kelp',
  'minecraft:beef',
  'minecraft:cooked_beef',
  'minecraft:porkchop',
  'minecraft:cooked_porkchop',
  'minecraft:mutton',
  'minecraft:cooked_mutton',
  'minecraft:chicken',
  'minecraft:cooked_chicken',
  'minecraft:rabbit',
  'minecraft:cooked_rabbit',
  'minecraft:cod',
  'minecraft:cooked_cod',
  'minecraft:salmon',
  'minecraft:cooked_salmon',
  'minecraft:tropical_fish',
  'minecraft:pufferfish',
  'minecraft:bread',
  'minecraft:cookie',
  'minecraft:rotten_flesh',
  'minecraft:spider_eye',

];

// Evento de modificación: corre una sola vez al iniciar el juego/servidor
ItemEvents.modification(event => {
  VANILLA_FOOD.forEach(id => {
    event.modify(id, item => {
      item.foodProperties = null;   // ← quita la comida
    });
  });
});
