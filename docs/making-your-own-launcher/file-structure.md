# how to maintain a proper file structure

minecraft needs 4 different items: jar file, libraries folder, assets folder, and the minecraft folder

these folders can be completely separate, inside each other.. any where reachable by the user.

note: a folder can be inside another folder, but the actual assets

both the assets and libraries folder can be shared by different minecraft instances.

the minecraft folder will contain all things such as mods (if modded), options.txt, worlds, etc. these are not required and will be auto created when launching the game but a folder where all this should be made (aka the minecraft folder) will be needed.

an example file structure is given bellow:

```
launcher/
├── instances/
│   └── 1.21.11/ # minecraft folder
│       ├── game_manifest.json # game_manifest.json
│       ├── client-jar.jar # jar
│       ├── options.txt
│       └── saves/
├── assets/ # shared assets
├── libraries/ # shared libraries
└── auth.json # authentication
```
