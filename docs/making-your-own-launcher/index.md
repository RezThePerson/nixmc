# making your own launcher

## what do launchers do

launchers do mainly 3 things in their simplest form.

- setup game files
- authenticate the user
- launch the game

additionally they may also

- add a ui
- add fabric/forge/other mod loaders support
- search and install mods/resource packs/etc from modrinth/curseforge/etc

## how do launchers do all that

### fetching the `game_manifest.json`

a "game_manifest.json" (unofficial name given by me) is a file that tells the client about: the java arguments, asset files, libraries and more. this is needed and tells what exactly to download and run

1. fetch the [`version_manifest.json`](https://launchermeta.mojang.com/mc/game/version_manifest.json) and find the version you want to install
2. from `url`, fetch the json. this is the `game_manifest.json`

### file structure

refer to the dedicated [file structure page](file-structure.md)

### installing game files

refer to the dedicated [installation page](installing-game-files.md)
