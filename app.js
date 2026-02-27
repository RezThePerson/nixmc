import config from "./example.nixmc.json" with { type: "json" };

import { downloadModrinthMod } from "./lib/mods/downloadModrinthMod.js";

function downloadMods() {
    for (const instance of config.instances) {
        for (const mod of instance.mods.mods) {
            const modProvider = mod.split(":")[0];
            const modName = mod.split(":")[1];
            const modVersion =
                mod.split(":")[2] == undefined ? "latest" : mod.split(":")[2];

            if (modProvider == "modrinth") {
                downloadModrinthMod(
                    instance.folder,
                    instance.version,
                    instance.mods.loader,
                    modName,
                    modVersion,
                );
            }
        }
    }
}

downloadMods();
