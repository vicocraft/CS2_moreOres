/*
 *  Mod:					More Ores
 *  Descri��o:				Novos min�rios de materiais originais para o jogo
 *  Tipo:					Gameplay
 *  Vers�o:					1.7_2.2
 *  Criado:					17:53 04/01/2014
 *  �ltima Modifica��o:		16:50 24/06/2015
*/

/* ----------------- World Gen ----------------- */
// Vari�vel para Alternar ON OFF (Config)
config.addBooleanProperty("worldGenEnabled","control", true, "Enable or not world generation");
// Fossil Ore
mod.addBlock("fossil_ore.js", "normal");
mod.addToOreDictionary("oreFossil","moreores:fossil_ore");
// Gunpowder Ore
mod.addBlock("gunpowder_ore.js", "normal");
mod.addToOreDictionary("oreGunpowder","moreores:gunpowder_ore");

/* ------------------ Gera��o do Mundo ------------------- */
// SE o worldgen for habilitado
if (config.getBoolean("worldGenEnabled","control") == true)
{
	// Fossil Ore (Overworld)
	mod.addWorldGen("fossilOre.js", "ore");
	// Gunpowder Ore
	mod.addWorldGen("gunpowderOre.js", "ore");
}

/* ----------------- Recipes Adicionais ------------------ */
// Min�rio de P�lviora ---- > P�lvora
mod.addSmeltingRecipe("minecraft:gunpowder", "moreores:gunpowder_ore");
// F�ssil ---- > Osso
mod.addSmeltingRecipe("minecraft:bone", "moreores:fossil_ore");