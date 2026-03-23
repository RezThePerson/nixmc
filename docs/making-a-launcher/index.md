# how do i make my own launcher?

before going directly into making your own launcher, first know what do they do?

## what do launchers do?

launchers do mainly 3 things in their simplest form.

- setup game files
- authenticate the user
- launch the game

additionally they may also

- add a ui
- add fabric/forge/other mod loaders support
- search and install mods/resource packs/etc from modrinth/curseforge/etc

## setting up game files / installing minecraft

1. load [the version_manifest.json](https://launchermeta.mojang.com/mc/game/version_manifest.json) and find the version you want to install
2. find its `url` field, and locally save it (will refer to this as `version.json`)

### file structure

minecraft needs 4 different items: jar file, libraries folder, assets folder, and the minecraft folder

these folders can be completely separate, inside each other.. any where reachable by the user. but the libraries/assets inside must match the paths given exactly.

both the assets and libraries folder can be shared by different minecraft instances. along as a file with the same hash has been downloaded. you dont need to do it again..

the minecraft folder will contain all things such as mods (if modded), options.txt, worlds, etc. these are not required to launch the game but a folder will still be required.

a example file structure:

```
launcher/
├── instances/
│   └── 1.21.11/ # minecraft folder
│       ├── version.json
│       ├── client-jar.jar
│       ├── options.txt
│       └── saves/
├── assets/ # shared assets and libraries
└── libraries/
```

### jar

1. from the `version.json` find the `downloads.client.url` field
2. use the field and download the jar
3. verify a correct download using the sha1 from the `downloads.client.sha1` field

### libraries

### assets
