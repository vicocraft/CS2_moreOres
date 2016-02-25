/*
 *  Mod:					More Ores
 *  Descrição:				Novos minérios de materiais originais para o jogo
 *  Tipo:					Gameplay
 *  Versão:					1.7_2.2
 *  Criado:					17:53 04/01/2014
 *  Última Modificação:		16:50 24/06/2015
*/

/* ----------------- World Gen ----------------- */
// Variável para Alternar ON OFF (Config)
config.addBooleanProperty("worldGenEnabled","control", true, "Enable or not world generation");
// Fossil Ore
mod.addBlock("fossil_ore.js", "normal");
mod.addToOreDictionary("oreFossil","moreores:fossil_ore");
// Gunpowder Ore
mod.addBlock("gunpowder_ore.js", "normal");
mod.addToOreDictionary("oreGunpowder","moreores:gunpowder_ore");

/* ------------------ Geração do Mundo ------------------- */
// SE o worldgen for habilitado
if (config.getBoolean("worldGenEnabled","control") == true)
{
	// Fossil Ore (Overworld)
	mod.addWorldGen("fossilOre.js", "ore");
	// Gunpowder Ore
	mod.addWorldGen("gunpowderOre.js", "ore");
}

/* ----------------- Recipes Adicionais ------------------ */
// Minério de Pólviora ---- > Pólvora
mod.addSmeltingRecipe("minecraft:gunpowder", "moreores:gunpowder_ore");
// Fóssil ---- > Osso
mod.addSmeltingRecipe("minecraft:bone", "moreores:fossil_ore");